"""
GISS Desktop — Style Hot Reloader
Run this instead of launch_giss.py while designing.
Save styles.py → stylesheet reloads instantly, no restart needed.
"""

import sys
import os
import time
import threading
import importlib
import importlib.util

from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

# ── Path setup ────────────────────────────────────────────────
ROOT = os.path.dirname(os.path.abspath(__file__))
SRC  = os.path.join(ROOT, "backend", "src")
if SRC not in sys.path:
    sys.path.insert(0, SRC)

from PySide6.QtWidgets import QApplication
from PySide6.QtCore import QTimer, Signal, QObject

# ── Signal bridge (watchdog runs on a thread, Qt needs main thread) ──
class _Bridge(QObject):
    reload = Signal()

_bridge = _Bridge()


# ── File watcher ──────────────────────────────────────────────
class StyleHandler(FileSystemEventHandler):
    WATCH = {"styles.py", "spatial_styles.py"}

    def on_modified(self, event):
        fname = os.path.basename(event.src_path)
        if fname in self.WATCH:
            print(f"[watcher] {fname} changed — reloading stylesheet…")
            _bridge.reload.emit()


def _reload_stylesheet(app):
    """Re-import styles module and apply fresh stylesheet."""
    try:
        # Force re-import so edits are picked up
        import giss.ui.styles as styles_mod
        importlib.reload(styles_mod)

        # Read current theme/accent from app property (set at startup)
        theme  = app.property("giss_theme")  or "dark"
        accent = app.property("giss_accent") or "indigo"

        qss = styles_mod.get_stylesheet(theme, accent)
        app.setStyleSheet(qss)
        print(f"[watcher] Stylesheet applied (theme={theme}, accent={accent})")
    except Exception as e:
        print(f"[watcher] Reload error: {e}")


# ── Main ──────────────────────────────────────────────────────
def main():
    # Boot the real app
    from giss.app import GissApp          # adjust if your class name differs
    from giss.ui.styles import get_stylesheet

    app = GissApp(sys.argv) if hasattr(GissApp, '__mro__') else QApplication(sys.argv)

    # Tag so reloader knows which theme/accent is active
    app.setProperty("giss_theme",  "dark")
    app.setProperty("giss_accent", "indigo")

    # Apply initial stylesheet
    app.setStyleSheet(get_stylesheet("dark", "indigo"))

    # Wire reload signal → stylesheet update (runs on Qt main thread)
    _bridge.reload.connect(lambda: _reload_stylesheet(app))

    # Start file watcher on background thread
    watch_dir = os.path.join(ROOT, "backend", "src", "giss", "ui")
    handler   = StyleHandler()
    observer  = Observer()
    observer.schedule(handler, watch_dir, recursive=False)
    observer.start()
    print(f"[watcher] Watching {watch_dir}")
    print("[watcher] Edit styles.py or spatial_styles.py and save — live reload active.\n")

    try:
        # Boot main window (mirrors what launch_giss.py does)
        from giss.main import main as giss_main
        giss_main()
    except SystemExit:
        pass
    finally:
        observer.stop()
        observer.join()


if __name__ == "__main__":
    main()
