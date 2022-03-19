var wms_layers = [];

var format_geo_export_4e815e9cf5644a748dc0ba963a0ecc47_0 = new ol.format.GeoJSON();
var features_geo_export_4e815e9cf5644a748dc0ba963a0ecc47_0 = format_geo_export_4e815e9cf5644a748dc0ba963a0ecc47_0.readFeatures(json_geo_export_4e815e9cf5644a748dc0ba963a0ecc47_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geo_export_4e815e9cf5644a748dc0ba963a0ecc47_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geo_export_4e815e9cf5644a748dc0ba963a0ecc47_0.addFeatures(features_geo_export_4e815e9cf5644a748dc0ba963a0ecc47_0);
var lyr_geo_export_4e815e9cf5644a748dc0ba963a0ecc47_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_geo_export_4e815e9cf5644a748dc0ba963a0ecc47_0, 
                style: style_geo_export_4e815e9cf5644a748dc0ba963a0ecc47_0,
                interactive: true,
    title: 'geo_export_4e815e9c-f564-4a74-8dc0-ba963a0ecc47<br />\
    <img src="styles/legend/geo_export_4e815e9cf5644a748dc0ba963a0ecc47_0_0.png" /> 1 - 500<br />\
    <img src="styles/legend/geo_export_4e815e9cf5644a748dc0ba963a0ecc47_0_1.png" /> 500 - 5000<br />\
    <img src="styles/legend/geo_export_4e815e9cf5644a748dc0ba963a0ecc47_0_2.png" /> 5000 - 10000<br />\
    <img src="styles/legend/geo_export_4e815e9cf5644a748dc0ba963a0ecc47_0_3.png" /> 10000 - 17500<br />\
    <img src="styles/legend/geo_export_4e815e9cf5644a748dc0ba963a0ecc47_0_4.png" /> 17500 - 25000<br />\
    <img src="styles/legend/geo_export_4e815e9cf5644a748dc0ba963a0ecc47_0_5.png" /> 25000 - 33000<br />\
    <img src="styles/legend/geo_export_4e815e9cf5644a748dc0ba963a0ecc47_0_6.png" /> 33000 - 42193<br />'
        });

lyr_geo_export_4e815e9cf5644a748dc0ba963a0ecc47_0.setVisible(true);
var layersList = [lyr_geo_export_4e815e9cf5644a748dc0ba963a0ecc47_0];
lyr_geo_export_4e815e9cf5644a748dc0ba963a0ecc47_0.set('fieldAliases', {'community': 'community', 'shape_star': 'shape_star', 'shape_stle': 'shape_stle', 'zip': 'zip', 'Refactored_community': 'Community', 'Refactored_shape_star': 'Refactored_shape_star', 'Refactored_shape_stle': 'Refactored_shape_stle', 'Refactored_Numerical_zip': 'Zip', 'Refactored_Numerical_TotalKiloWatts': 'TotalKiloWatts', });
lyr_geo_export_4e815e9cf5644a748dc0ba963a0ecc47_0.set('fieldImages', {'community': 'Hidden', 'shape_star': 'Hidden', 'shape_stle': 'Hidden', 'zip': 'Hidden', 'Refactored_community': 'TextEdit', 'Refactored_shape_star': 'Hidden', 'Refactored_shape_stle': 'Hidden', 'Refactored_Numerical_zip': 'TextEdit', 'Refactored_Numerical_TotalKiloWatts': 'TextEdit', });
lyr_geo_export_4e815e9cf5644a748dc0ba963a0ecc47_0.set('fieldLabels', {'Refactored_community': 'header label', 'Refactored_Numerical_zip': 'header label', 'Refactored_Numerical_TotalKiloWatts': 'header label', });
lyr_geo_export_4e815e9cf5644a748dc0ba963a0ecc47_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});