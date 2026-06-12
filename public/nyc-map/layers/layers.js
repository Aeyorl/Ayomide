var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Buildings_1 = new ol.format.GeoJSON();
var features_Buildings_1 = format_Buildings_1.readFeatures(json_Buildings_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_1.addFeatures(features_Buildings_1);
var lyr_Buildings_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_1, 
                style: style_Buildings_1,
                popuplayertitle: 'Buildings',
                interactive: true,
                title: '<img src="styles/legend/Buildings_1.png" /> Buildings'
            });
var format_Reprojected_2 = new ol.format.GeoJSON();
var features_Reprojected_2 = format_Reprojected_2.readFeatures(json_Reprojected_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reprojected_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reprojected_2.addFeatures(features_Reprojected_2);
var lyr_Reprojected_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reprojected_2, 
                style: style_Reprojected_2,
                popuplayertitle: 'Reprojected',
                interactive: true,
                title: '<img src="styles/legend/Reprojected_2.png" /> Reprojected'
            });
var format_2018_Central_Park_Squirrel_Census__Squirrel_Data_20260607_3 = new ol.format.GeoJSON();
var features_2018_Central_Park_Squirrel_Census__Squirrel_Data_20260607_3 = format_2018_Central_Park_Squirrel_Census__Squirrel_Data_20260607_3.readFeatures(json_2018_Central_Park_Squirrel_Census__Squirrel_Data_20260607_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2018_Central_Park_Squirrel_Census__Squirrel_Data_20260607_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2018_Central_Park_Squirrel_Census__Squirrel_Data_20260607_3.addFeatures(features_2018_Central_Park_Squirrel_Census__Squirrel_Data_20260607_3);
var lyr_2018_Central_Park_Squirrel_Census__Squirrel_Data_20260607_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2018_Central_Park_Squirrel_Census__Squirrel_Data_20260607_3, 
                style: style_2018_Central_Park_Squirrel_Census__Squirrel_Data_20260607_3,
                popuplayertitle: '2018_Central_Park_Squirrel_Census_-_Squirrel_Data_20260607',
                interactive: true,
    title: '2018_Central_Park_Squirrel_Census_-_Squirrel_Data_20260607<br />\
    <img src="styles/legend/2018_Central_Park_Squirrel_Census__Squirrel_Data_20260607_3_0.png" /> Black<br />\
    <img src="styles/legend/2018_Central_Park_Squirrel_Census__Squirrel_Data_20260607_3_1.png" /> Cinnamon<br />\
    <img src="styles/legend/2018_Central_Park_Squirrel_Census__Squirrel_Data_20260607_3_2.png" /> Gray<br />\
    <img src="styles/legend/2018_Central_Park_Squirrel_Census__Squirrel_Data_20260607_3_3.png" /> <br />' });
var format_Buffered_4 = new ol.format.GeoJSON();
var features_Buffered_4 = format_Buffered_4.readFeatures(json_Buffered_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_4.addFeatures(features_Buffered_4);
var lyr_Buffered_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_4, 
                style: style_Buffered_4,
                popuplayertitle: 'Buffered',
                interactive: true,
                title: '<img src="styles/legend/Buffered_4.png" /> Buffered'
            });
var format_New_York_City_Bike_Routes_20260607_5 = new ol.format.GeoJSON();
var features_New_York_City_Bike_Routes_20260607_5 = format_New_York_City_Bike_Routes_20260607_5.readFeatures(json_New_York_City_Bike_Routes_20260607_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_New_York_City_Bike_Routes_20260607_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_New_York_City_Bike_Routes_20260607_5.addFeatures(features_New_York_City_Bike_Routes_20260607_5);
var lyr_New_York_City_Bike_Routes_20260607_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_New_York_City_Bike_Routes_20260607_5, 
                style: style_New_York_City_Bike_Routes_20260607_5,
                popuplayertitle: 'New_York_City_Bike_Routes_20260607',
                interactive: true,
                title: '<img src="styles/legend/New_York_City_Bike_Routes_20260607_5.png" /> New_York_City_Bike_Routes_20260607'
            });
var format_Count_6 = new ol.format.GeoJSON();
var features_Count_6 = format_Count_6.readFeatures(json_Count_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Count_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Count_6.addFeatures(features_Count_6);
var lyr_Count_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Count_6, 
                style: style_Count_6,
                popuplayertitle: 'Count',
                interactive: true,
    title: 'Count<br />\
    <img src="styles/legend/Count_6_0.png" /> 0 - 12<br />\
    <img src="styles/legend/Count_6_1.png" /> 12 - 39<br />\
    <img src="styles/legend/Count_6_2.png" /> 39 - 61<br />\
    <img src="styles/legend/Count_6_3.png" /> 61 - 92<br />\
    <img src="styles/legend/Count_6_4.png" /> 92 - 133<br />' });
var format_DPR_PlayAreas_001_20260607_7 = new ol.format.GeoJSON();
var features_DPR_PlayAreas_001_20260607_7 = format_DPR_PlayAreas_001_20260607_7.readFeatures(json_DPR_PlayAreas_001_20260607_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DPR_PlayAreas_001_20260607_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DPR_PlayAreas_001_20260607_7.addFeatures(features_DPR_PlayAreas_001_20260607_7);
var lyr_DPR_PlayAreas_001_20260607_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DPR_PlayAreas_001_20260607_7, 
                style: style_DPR_PlayAreas_001_20260607_7,
                popuplayertitle: 'DPR_PlayAreas_001_20260607',
                interactive: true,
                title: '<img src="styles/legend/DPR_PlayAreas_001_20260607_7.png" /> DPR_PlayAreas_001_20260607'
            });
var format_2015trees_8 = new ol.format.GeoJSON();
var features_2015trees_8 = format_2015trees_8.readFeatures(json_2015trees_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015trees_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015trees_8.addFeatures(features_2015trees_8);
cluster_2015trees_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_2015trees_8
});
var lyr_2015trees_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_2015trees_8, 
                style: style_2015trees_8,
                popuplayertitle: '2015 trees',
                interactive: true,
    title: '2015 trees<br />\
    <img src="styles/legend/2015trees_8_0.png" /> 0 - 0<br />\
    <img src="styles/legend/2015trees_8_1.png" /> 0 - 0<br />\
    <img src="styles/legend/2015trees_8_2.png" /> 0 - 0<br />\
    <img src="styles/legend/2015trees_8_3.png" /> 0 - 4<br />\
    <img src="styles/legend/2015trees_8_4.png" /> 4 - 8<br />\
    <img src="styles/legend/2015trees_8_5.png" /> 8 - 14<br />\
    <img src="styles/legend/2015trees_8_6.png" /> 14 - 18<br />' });
var format_Parks_Properties_20260607_9 = new ol.format.GeoJSON();
var features_Parks_Properties_20260607_9 = format_Parks_Properties_20260607_9.readFeatures(json_Parks_Properties_20260607_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parks_Properties_20260607_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parks_Properties_20260607_9.addFeatures(features_Parks_Properties_20260607_9);
var lyr_Parks_Properties_20260607_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parks_Properties_20260607_9, 
                style: style_Parks_Properties_20260607_9,
                popuplayertitle: 'Parks_Properties_20260607',
                interactive: true,
                title: '<img src="styles/legend/Parks_Properties_20260607_9.png" /> Parks_Properties_20260607'
            });
var format_centralpark_10 = new ol.format.GeoJSON();
var features_centralpark_10 = format_centralpark_10.readFeatures(json_centralpark_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centralpark_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_centralpark_10.addFeatures(features_centralpark_10);
var lyr_centralpark_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_centralpark_10, 
                style: style_centralpark_10,
                popuplayertitle: 'central-park',
                interactive: true,
                title: '<img src="styles/legend/centralpark_10.png" /> central-park'
            });
var format_bikepoints_11 = new ol.format.GeoJSON();
var features_bikepoints_11 = format_bikepoints_11.readFeatures(json_bikepoints_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bikepoints_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bikepoints_11.addFeatures(features_bikepoints_11);
var lyr_bikepoints_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bikepoints_11, 
                style: style_bikepoints_11,
                popuplayertitle: 'bike-points',
                interactive: true,
                title: '<img src="styles/legend/bikepoints_11.png" /> bike-points'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Buildings_1.setVisible(true);lyr_Reprojected_2.setVisible(true);lyr_2018_Central_Park_Squirrel_Census__Squirrel_Data_20260607_3.setVisible(true);lyr_Buffered_4.setVisible(true);lyr_New_York_City_Bike_Routes_20260607_5.setVisible(true);lyr_Count_6.setVisible(true);lyr_DPR_PlayAreas_001_20260607_7.setVisible(true);lyr_2015trees_8.setVisible(true);lyr_Parks_Properties_20260607_9.setVisible(true);lyr_centralpark_10.setVisible(true);lyr_bikepoints_11.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Buildings_1,lyr_Reprojected_2,lyr_2018_Central_Park_Squirrel_Census__Squirrel_Data_20260607_3,lyr_Buffered_4,lyr_New_York_City_Bike_Routes_20260607_5,lyr_Count_6,lyr_DPR_PlayAreas_001_20260607_7,lyr_2015trees_8,lyr_Parks_Properties_20260607_9,lyr_centralpark_10,lyr_bikepoints_11];
lyr_Buildings_1.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Reprojected_2.set('fieldAliases', {':id': ':id', ':version': ':version', ':created_at': ':created_at', ':updated_at': ':updated_at', 'park_name': 'park_name', 'borough': 'borough', 'gispropnum': 'gispropnum', 'shape_area': 'shape_area', 'shape_len': 'shape_len', });
lyr_2018_Central_Park_Squirrel_Census__Squirrel_Data_20260607_3.set('fieldAliases', {':id': ':id', ':version': ':version', ':created_at': ':created_at', ':updated_at': ':updated_at', 'x': 'x', 'y': 'y', 'unique_squirrel_id': 'unique_squirrel_id', 'hectare': 'hectare', 'shift': 'shift', 'date': 'date', 'hectare_squirrel_number': 'hectare_squirrel_number', 'age': 'age', 'primary_fur_color': 'primary_fur_color', 'highlight_fur_color': 'highlight_fur_color', 'combination_of_primary_and': 'combination_of_primary_and', 'color_notes': 'color_notes', 'location': 'location', 'above_ground_sighter': 'above_ground_sighter', 'specific_location': 'specific_location', 'running': 'running', 'chasing': 'chasing', 'climbing': 'climbing', 'eating': 'eating', 'foraging': 'foraging', 'other_activities': 'other_activities', 'kuks': 'kuks', 'quaas': 'quaas', 'moans': 'moans', 'tail_flags': 'tail_flags', 'tail_twitches': 'tail_twitches', 'approaches': 'approaches', 'indifferent': 'indifferent', 'runs_from': 'runs_from', 'other_interactions': 'other_interactions', ':@computed_region_efsh_h5xi': ':@computed_region_efsh_h5xi', ':@computed_region_f5dn_yrer': ':@computed_region_f5dn_yrer', ':@computed_region_yeji_bk3q': ':@computed_region_yeji_bk3q', ':@computed_region_92fq_4b7q': ':@computed_region_92fq_4b7q', ':@computed_region_sbqj_enih': ':@computed_region_sbqj_enih', });
lyr_Buffered_4.set('fieldAliases', {':id': ':id', ':version': ':version', ':created_at': ':created_at', ':updated_at': ':updated_at', 'park_name': 'park_name', 'borough': 'borough', 'gispropnum': 'gispropnum', 'shape_area': 'shape_area', 'shape_len': 'shape_len', });
lyr_New_York_City_Bike_Routes_20260607_5.set('fieldAliases', {':id': ':id', ':version': ':version', ':created_at': ':created_at', ':updated_at': ':updated_at', 'segmentid': 'segmentid', 'bikeid': 'bikeid', 'prevbikeid': 'prevbikeid', 'status': 'status', 'boro': 'boro', 'street': 'street', 'fromstreet': 'fromstreet', 'tostreet': 'tostreet', 'onoffst': 'onoffst', 'facilitycl': 'facilitycl', 'allclasses': 'allclasses', 'bikedir': 'bikedir', 'lanecount': 'lanecount', 'ft_facilit': 'ft_facilit', 'tf_facilit': 'tf_facilit', 'ft2facilit': 'ft2facilit', 'tf2facilit': 'tf2facilit', 'instdate': 'instdate', 'ret_date': 'ret_date', 'grnwy': 'grnwy', 'gwsystem': 'gwsystem', 'gwsys2': 'gwsys2', 'spur': 'spur', 'gwyjuris': 'gwyjuris', });
lyr_Count_6.set('fieldAliases', {':id': ':id', ':version': ':version', ':created_at': ':created_at', ':updated_at': ':updated_at', 'park_name': 'park_name', 'borough': 'borough', 'gispropnum': 'gispropnum', 'shape_area': 'shape_area', 'shape_len': 'shape_len', 'NUMPOINTS': 'NUMPOINTS', });
lyr_DPR_PlayAreas_001_20260607_7.set('fieldAliases', {':id': ':id', ':version': ':version', ':created_at': ':created_at', ':updated_at': ':updated_at', 'park_name': 'park_name', 'borough': 'borough', 'gispropnum': 'gispropnum', 'shape_area': 'shape_area', 'shape_len': 'shape_len', });
lyr_2015trees_8.set('fieldAliases', {'the_geom': 'the_geom', 'block_id': 'block_id', 'block_stat': 'block_stat', 'trees': 'trees', 'surv_date': 'surv_date', 'group_name': 'group_name', 'cb_num': 'cb_num', 'borocode': 'borocode', 'boroname': 'boroname', 'cncldist': 'cncldist', 'st_assem': 'st_assem', 'st_senate': 'st_senate', 'nta': 'nta', 'nta_name': 'nta_name', 'boro_ct': 'boro_ct', 'zipcode': 'zipcode', 'zip_city': 'zip_city', 'state': 'state', 'start_x_sp': 'start_x_sp', 'start_y_sp': 'start_y_sp', 'mid_x_sp': 'mid_x_sp', 'mid_y_sp': 'mid_y_sp', 'end_x_sp': 'end_x_sp', 'end_y_sp': 'end_y_sp', 'start_lat': 'start_lat', 'start_long': 'start_long', 'mid_lat': 'mid_lat', 'mid_long': 'mid_long', 'end_lat': 'end_lat', 'end_long': 'end_long', });
lyr_Parks_Properties_20260607_9.set('fieldAliases', {':id': ':id', ':version': ':version', ':created_at': ':created_at', ':updated_at': ':updated_at', 'acquisitiondate': 'acquisitiondate', 'acres': 'acres', 'address': 'address', 'borough': 'borough', 'class': 'class', 'communityboard': 'communityboard', 'councildistrict': 'councildistrict', 'department': 'department', 'gisobjid': 'gisobjid', 'gispropnum': 'gispropnum', 'globalid': 'globalid', 'jurisdiction': 'jurisdiction', 'location': 'location', 'mapped': 'mapped', 'name311': 'name311', 'nys_assembly': 'nys_assembly', 'nys_senate': 'nys_senate', 'objectid': 'objectid', 'omppropid': 'omppropid', 'parentid': 'parentid', 'permit': 'permit', 'permitdistrict': 'permitdistrict', 'permitparent': 'permitparent', 'pip_ratable': 'pip_ratable', 'precinct': 'precinct', 'retired': 'retired', 'signname': 'signname', 'subcategory': 'subcategory', 'typecategory': 'typecategory', 'us_congress': 'us_congress', 'waterfront': 'waterfront', 'zipcode': 'zipcode', });
lyr_centralpark_10.set('fieldAliases', {':id': ':id', ':version': ':version', ':created_at': ':created_at', ':updated_at': ':updated_at', 'acquisitiondate': 'acquisitiondate', 'acres': 'acres', 'address': 'address', 'borough': 'borough', 'class': 'class', 'communityboard': 'communityboard', 'councildistrict': 'councildistrict', 'department': 'department', 'gisobjid': 'gisobjid', 'gispropnum': 'gispropnum', 'globalid': 'globalid', 'jurisdiction': 'jurisdiction', 'location': 'location', 'mapped': 'mapped', 'name311': 'name311', 'nys_assembly': 'nys_assembly', 'nys_senate': 'nys_senate', 'objectid': 'objectid', 'omppropid': 'omppropid', 'parentid': 'parentid', 'permit': 'permit', 'permitdistrict': 'permitdistrict', 'permitparent': 'permitparent', 'pip_ratable': 'pip_ratable', 'precinct': 'precinct', 'retired': 'retired', 'signname': 'signname', 'subcategory': 'subcategory', 'typecategory': 'typecategory', 'us_congress': 'us_congress', 'waterfront': 'waterfront', 'zipcode': 'zipcode', });
lyr_bikepoints_11.set('fieldAliases', {'id': 'id', });
lyr_Buildings_1.set('fieldImages', {'id': '', 'name': '', });
lyr_Reprojected_2.set('fieldImages', {':id': 'TextEdit', ':version': 'TextEdit', ':created_at': 'DateTime', ':updated_at': 'DateTime', 'park_name': 'TextEdit', 'borough': 'TextEdit', 'gispropnum': 'TextEdit', 'shape_area': 'TextEdit', 'shape_len': 'TextEdit', });
lyr_2018_Central_Park_Squirrel_Census__Squirrel_Data_20260607_3.set('fieldImages', {':id': 'TextEdit', ':version': 'TextEdit', ':created_at': 'DateTime', ':updated_at': 'DateTime', 'x': 'TextEdit', 'y': 'TextEdit', 'unique_squirrel_id': 'TextEdit', 'hectare': 'TextEdit', 'shift': 'TextEdit', 'date': 'TextEdit', 'hectare_squirrel_number': 'TextEdit', 'age': 'TextEdit', 'primary_fur_color': 'TextEdit', 'highlight_fur_color': 'TextEdit', 'combination_of_primary_and': 'TextEdit', 'color_notes': 'TextEdit', 'location': 'TextEdit', 'above_ground_sighter': 'TextEdit', 'specific_location': 'TextEdit', 'running': 'CheckBox', 'chasing': 'CheckBox', 'climbing': 'CheckBox', 'eating': 'CheckBox', 'foraging': 'CheckBox', 'other_activities': 'TextEdit', 'kuks': 'CheckBox', 'quaas': 'CheckBox', 'moans': 'CheckBox', 'tail_flags': 'CheckBox', 'tail_twitches': 'CheckBox', 'approaches': 'CheckBox', 'indifferent': 'CheckBox', 'runs_from': 'CheckBox', 'other_interactions': 'TextEdit', ':@computed_region_efsh_h5xi': 'TextEdit', ':@computed_region_f5dn_yrer': 'TextEdit', ':@computed_region_yeji_bk3q': 'TextEdit', ':@computed_region_92fq_4b7q': 'TextEdit', ':@computed_region_sbqj_enih': 'TextEdit', });
lyr_Buffered_4.set('fieldImages', {':id': '', ':version': '', ':created_at': '', ':updated_at': '', 'park_name': '', 'borough': '', 'gispropnum': '', 'shape_area': '', 'shape_len': '', });
lyr_New_York_City_Bike_Routes_20260607_5.set('fieldImages', {':id': '', ':version': '', ':created_at': '', ':updated_at': '', 'segmentid': '', 'bikeid': '', 'prevbikeid': '', 'status': '', 'boro': '', 'street': '', 'fromstreet': '', 'tostreet': '', 'onoffst': '', 'facilitycl': '', 'allclasses': '', 'bikedir': '', 'lanecount': '', 'ft_facilit': '', 'tf_facilit': '', 'ft2facilit': '', 'tf2facilit': '', 'instdate': '', 'ret_date': '', 'grnwy': '', 'gwsystem': '', 'gwsys2': '', 'spur': '', 'gwyjuris': '', });
lyr_Count_6.set('fieldImages', {':id': 'TextEdit', ':version': 'TextEdit', ':created_at': 'DateTime', ':updated_at': 'DateTime', 'park_name': 'TextEdit', 'borough': 'TextEdit', 'gispropnum': 'TextEdit', 'shape_area': 'TextEdit', 'shape_len': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_DPR_PlayAreas_001_20260607_7.set('fieldImages', {':id': '', ':version': '', ':created_at': '', ':updated_at': '', 'park_name': '', 'borough': '', 'gispropnum': '', 'shape_area': '', 'shape_len': '', });
lyr_2015trees_8.set('fieldImages', {'the_geom': 'TextEdit', 'block_id': 'TextEdit', 'block_stat': 'TextEdit', 'trees': 'Range', 'surv_date': 'TextEdit', 'group_name': 'TextEdit', 'cb_num': 'Range', 'borocode': 'Range', 'boroname': 'TextEdit', 'cncldist': 'Range', 'st_assem': 'Range', 'st_senate': 'Range', 'nta': 'TextEdit', 'nta_name': 'TextEdit', 'boro_ct': 'TextEdit', 'zipcode': 'TextEdit', 'zip_city': 'TextEdit', 'state': 'TextEdit', 'start_x_sp': 'TextEdit', 'start_y_sp': 'TextEdit', 'mid_x_sp': 'TextEdit', 'mid_y_sp': 'TextEdit', 'end_x_sp': 'TextEdit', 'end_y_sp': 'TextEdit', 'start_lat': 'TextEdit', 'start_long': 'TextEdit', 'mid_lat': 'TextEdit', 'mid_long': 'TextEdit', 'end_lat': 'TextEdit', 'end_long': 'TextEdit', });
lyr_Parks_Properties_20260607_9.set('fieldImages', {':id': 'TextEdit', ':version': 'TextEdit', ':created_at': 'DateTime', ':updated_at': 'DateTime', 'acquisitiondate': 'DateTime', 'acres': 'TextEdit', 'address': 'TextEdit', 'borough': 'TextEdit', 'class': 'TextEdit', 'communityboard': 'TextEdit', 'councildistrict': 'TextEdit', 'department': 'TextEdit', 'gisobjid': 'TextEdit', 'gispropnum': 'TextEdit', 'globalid': 'TextEdit', 'jurisdiction': 'TextEdit', 'location': 'TextEdit', 'mapped': 'TextEdit', 'name311': 'TextEdit', 'nys_assembly': 'TextEdit', 'nys_senate': 'TextEdit', 'objectid': 'TextEdit', 'omppropid': 'TextEdit', 'parentid': 'TextEdit', 'permit': 'CheckBox', 'permitdistrict': 'TextEdit', 'permitparent': 'TextEdit', 'pip_ratable': 'CheckBox', 'precinct': 'TextEdit', 'retired': 'CheckBox', 'signname': 'TextEdit', 'subcategory': 'TextEdit', 'typecategory': 'TextEdit', 'us_congress': 'TextEdit', 'waterfront': 'CheckBox', 'zipcode': 'TextEdit', });
lyr_centralpark_10.set('fieldImages', {':id': 'TextEdit', ':version': 'TextEdit', ':created_at': 'DateTime', ':updated_at': 'DateTime', 'acquisitiondate': 'DateTime', 'acres': 'TextEdit', 'address': 'TextEdit', 'borough': 'TextEdit', 'class': 'TextEdit', 'communityboard': 'TextEdit', 'councildistrict': 'TextEdit', 'department': 'TextEdit', 'gisobjid': 'TextEdit', 'gispropnum': 'TextEdit', 'globalid': 'TextEdit', 'jurisdiction': 'TextEdit', 'location': 'TextEdit', 'mapped': 'TextEdit', 'name311': 'TextEdit', 'nys_assembly': 'TextEdit', 'nys_senate': 'TextEdit', 'objectid': 'TextEdit', 'omppropid': 'TextEdit', 'parentid': 'TextEdit', 'permit': 'CheckBox', 'permitdistrict': 'TextEdit', 'permitparent': 'TextEdit', 'pip_ratable': 'CheckBox', 'precinct': 'TextEdit', 'retired': 'CheckBox', 'signname': 'TextEdit', 'subcategory': 'TextEdit', 'typecategory': 'TextEdit', 'us_congress': 'TextEdit', 'waterfront': 'CheckBox', 'zipcode': 'TextEdit', });
lyr_bikepoints_11.set('fieldImages', {'id': '', });
lyr_Buildings_1.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_Reprojected_2.set('fieldLabels', {':id': 'no label', ':version': 'no label', ':created_at': 'no label', ':updated_at': 'no label', 'park_name': 'no label', 'borough': 'no label', 'gispropnum': 'no label', 'shape_area': 'no label', 'shape_len': 'no label', });
lyr_2018_Central_Park_Squirrel_Census__Squirrel_Data_20260607_3.set('fieldLabels', {':id': 'no label', ':version': 'no label', ':created_at': 'no label', ':updated_at': 'no label', 'x': 'no label', 'y': 'no label', 'unique_squirrel_id': 'no label', 'hectare': 'no label', 'shift': 'no label', 'date': 'no label', 'hectare_squirrel_number': 'no label', 'age': 'no label', 'primary_fur_color': 'no label', 'highlight_fur_color': 'no label', 'combination_of_primary_and': 'no label', 'color_notes': 'no label', 'location': 'no label', 'above_ground_sighter': 'no label', 'specific_location': 'no label', 'running': 'no label', 'chasing': 'no label', 'climbing': 'no label', 'eating': 'no label', 'foraging': 'no label', 'other_activities': 'no label', 'kuks': 'no label', 'quaas': 'no label', 'moans': 'no label', 'tail_flags': 'no label', 'tail_twitches': 'no label', 'approaches': 'no label', 'indifferent': 'no label', 'runs_from': 'no label', 'other_interactions': 'no label', ':@computed_region_efsh_h5xi': 'no label', ':@computed_region_f5dn_yrer': 'no label', ':@computed_region_yeji_bk3q': 'no label', ':@computed_region_92fq_4b7q': 'no label', ':@computed_region_sbqj_enih': 'no label', });
lyr_Buffered_4.set('fieldLabels', {':id': 'no label', ':version': 'no label', ':created_at': 'no label', ':updated_at': 'no label', 'park_name': 'no label', 'borough': 'no label', 'gispropnum': 'no label', 'shape_area': 'no label', 'shape_len': 'no label', });
lyr_New_York_City_Bike_Routes_20260607_5.set('fieldLabels', {':id': 'no label', ':version': 'no label', ':created_at': 'no label', ':updated_at': 'no label', 'segmentid': 'no label', 'bikeid': 'no label', 'prevbikeid': 'no label', 'status': 'no label', 'boro': 'no label', 'street': 'no label', 'fromstreet': 'no label', 'tostreet': 'no label', 'onoffst': 'no label', 'facilitycl': 'no label', 'allclasses': 'no label', 'bikedir': 'no label', 'lanecount': 'no label', 'ft_facilit': 'no label', 'tf_facilit': 'no label', 'ft2facilit': 'no label', 'tf2facilit': 'no label', 'instdate': 'no label', 'ret_date': 'no label', 'grnwy': 'no label', 'gwsystem': 'no label', 'gwsys2': 'no label', 'spur': 'no label', 'gwyjuris': 'no label', });
lyr_Count_6.set('fieldLabels', {':id': 'no label', ':version': 'no label', ':created_at': 'no label', ':updated_at': 'no label', 'park_name': 'no label', 'borough': 'no label', 'gispropnum': 'no label', 'shape_area': 'no label', 'shape_len': 'no label', 'NUMPOINTS': 'no label', });
lyr_DPR_PlayAreas_001_20260607_7.set('fieldLabels', {':id': 'no label', ':version': 'no label', ':created_at': 'no label', ':updated_at': 'no label', 'park_name': 'no label', 'borough': 'no label', 'gispropnum': 'no label', 'shape_area': 'no label', 'shape_len': 'no label', });
lyr_2015trees_8.set('fieldLabels', {'the_geom': 'no label', 'block_id': 'no label', 'block_stat': 'no label', 'trees': 'no label', 'surv_date': 'no label', 'group_name': 'no label', 'cb_num': 'no label', 'borocode': 'no label', 'boroname': 'no label', 'cncldist': 'no label', 'st_assem': 'no label', 'st_senate': 'no label', 'nta': 'no label', 'nta_name': 'no label', 'boro_ct': 'no label', 'zipcode': 'no label', 'zip_city': 'no label', 'state': 'no label', 'start_x_sp': 'no label', 'start_y_sp': 'no label', 'mid_x_sp': 'no label', 'mid_y_sp': 'no label', 'end_x_sp': 'no label', 'end_y_sp': 'no label', 'start_lat': 'no label', 'start_long': 'no label', 'mid_lat': 'no label', 'mid_long': 'no label', 'end_lat': 'no label', 'end_long': 'no label', });
lyr_Parks_Properties_20260607_9.set('fieldLabels', {':id': 'no label', ':version': 'no label', ':created_at': 'no label', ':updated_at': 'no label', 'acquisitiondate': 'no label', 'acres': 'no label', 'address': 'no label', 'borough': 'no label', 'class': 'no label', 'communityboard': 'no label', 'councildistrict': 'no label', 'department': 'no label', 'gisobjid': 'no label', 'gispropnum': 'no label', 'globalid': 'no label', 'jurisdiction': 'no label', 'location': 'no label', 'mapped': 'no label', 'name311': 'no label', 'nys_assembly': 'no label', 'nys_senate': 'no label', 'objectid': 'no label', 'omppropid': 'no label', 'parentid': 'no label', 'permit': 'no label', 'permitdistrict': 'no label', 'permitparent': 'no label', 'pip_ratable': 'no label', 'precinct': 'no label', 'retired': 'no label', 'signname': 'no label', 'subcategory': 'no label', 'typecategory': 'no label', 'us_congress': 'no label', 'waterfront': 'no label', 'zipcode': 'no label', });
lyr_centralpark_10.set('fieldLabels', {':id': 'no label', ':version': 'no label', ':created_at': 'no label', ':updated_at': 'no label', 'acquisitiondate': 'no label', 'acres': 'no label', 'address': 'no label', 'borough': 'no label', 'class': 'no label', 'communityboard': 'no label', 'councildistrict': 'no label', 'department': 'no label', 'gisobjid': 'no label', 'gispropnum': 'no label', 'globalid': 'no label', 'jurisdiction': 'no label', 'location': 'no label', 'mapped': 'no label', 'name311': 'no label', 'nys_assembly': 'no label', 'nys_senate': 'no label', 'objectid': 'no label', 'omppropid': 'no label', 'parentid': 'no label', 'permit': 'no label', 'permitdistrict': 'no label', 'permitparent': 'no label', 'pip_ratable': 'no label', 'precinct': 'no label', 'retired': 'no label', 'signname': 'no label', 'subcategory': 'no label', 'typecategory': 'no label', 'us_congress': 'no label', 'waterfront': 'no label', 'zipcode': 'no label', });
lyr_bikepoints_11.set('fieldLabels', {'id': 'no label', });
lyr_bikepoints_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});