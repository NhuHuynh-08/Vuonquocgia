var wms_layers = [];

var format_gadm36_VNM_1_0 = new ol.format.GeoJSON();
var features_gadm36_VNM_1_0 = format_gadm36_VNM_1_0.readFeatures(json_gadm36_VNM_1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm36_VNM_1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm36_VNM_1_0.addFeatures(features_gadm36_VNM_1_0);
var lyr_gadm36_VNM_1_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm36_VNM_1_0, 
                style: style_gadm36_VNM_1_0,
                popuplayertitle: 'gadm36_VNM_1',
                interactive: true,
                title: '<img src="styles/legend/gadm36_VNM_1_0.png" /> gadm36_VNM_1'
            });
var format_VUONQUOCGIA_1 = new ol.format.GeoJSON();
var features_VUONQUOCGIA_1 = format_VUONQUOCGIA_1.readFeatures(json_VUONQUOCGIA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VUONQUOCGIA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VUONQUOCGIA_1.addFeatures(features_VUONQUOCGIA_1);
var lyr_VUONQUOCGIA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VUONQUOCGIA_1, 
                style: style_VUONQUOCGIA_1,
                popuplayertitle: 'VUONQUOCGIA',
                interactive: true,
                title: '<img src="styles/legend/VUONQUOCGIA_1.png" /> VUONQUOCGIA'
            });
var format_Title_2 = new ol.format.GeoJSON();
var features_Title_2 = format_Title_2.readFeatures(json_Title_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Title_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Title_2.addFeatures(features_Title_2);
var lyr_Title_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Title_2, 
                style: style_Title_2,
                popuplayertitle: 'Title',
                interactive: true,
    title: 'Title<br />\
    <img src="styles/legend/Title_2_0.png" /> Cấp quốc gia<br />\
    <img src="styles/legend/Title_2_1.png" /> Di sản ASEAN<br />\
    <img src="styles/legend/Title_2_2.png" /> Di sản thế giới<br />\
    <img src="styles/legend/Title_2_3.png" /> Khu dự trữ sinh quyển thế giới<br />' });
var format_Area_3 = new ol.format.GeoJSON();
var features_Area_3 = format_Area_3.readFeatures(json_Area_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_3.addFeatures(features_Area_3);
var lyr_Area_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Area_3, 
                style: style_Area_3,
                popuplayertitle: 'Area',
                interactive: true,
    title: 'Area<br />\
    <img src="styles/legend/Area_3_0.png" /> Bắc Trung Bộ<br />\
    <img src="styles/legend/Area_3_1.png" /> Đồng bằng
Bắc Bộ<br />\
    <img src="styles/legend/Area_3_2.png" /> Đông Nam Bộ<br />\
    <img src="styles/legend/Area_3_3.png" /> Nam Trung Bộ<br />\
    <img src="styles/legend/Area_3_4.png" /> Tây Nam Bộ<br />\
    <img src="styles/legend/Area_3_5.png" /> Tây Nguyên<br />\
    <img src="styles/legend/Area_3_6.png" /> Trung du
và miền núi
phía Bắc<br />' });
var format_Rangeage_4 = new ol.format.GeoJSON();
var features_Rangeage_4 = format_Rangeage_4.readFeatures(json_Rangeage_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rangeage_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rangeage_4.addFeatures(features_Rangeage_4);
var lyr_Rangeage_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rangeage_4, 
                style: style_Rangeage_4,
                popuplayertitle: 'Range age',
                interactive: true,
    title: 'Range age<br />\
    <img src="styles/legend/Rangeage_4_0.png" /> <=10<br />\
    <img src="styles/legend/Rangeage_4_1.png" /> >50<br />\
    <img src="styles/legend/Rangeage_4_2.png" /> 10-20<br />\
    <img src="styles/legend/Rangeage_4_3.png" /> 20-30<br />\
    <img src="styles/legend/Rangeage_4_4.png" /> 30-40<br />' });

lyr_gadm36_VNM_1_0.setVisible(true);lyr_VUONQUOCGIA_1.setVisible(true);lyr_Title_2.setVisible(true);lyr_Area_3.setVisible(true);lyr_Rangeage_4.setVisible(true);
var layersList = [lyr_gadm36_VNM_1_0,lyr_VUONQUOCGIA_1,lyr_Title_2,lyr_Area_3,lyr_Rangeage_4];
lyr_gadm36_VNM_1_0.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', });
lyr_VUONQUOCGIA_1.set('fieldAliases', {'STT': 'STT', 'Name': 'Name', 'Year': 'Year', 'address': 'address', 'acreage(ha)': 'acreage(ha)', 'X': 'X', 'Y': 'Y', });
lyr_Title_2.set('fieldAliases', {'STT': 'STT', 'Name': 'Name', 'Year': 'Year', 'address': 'address', 'X': 'X', 'Y': 'Y', 'age': 'age', 'area': 'area', 'Acreage': 'Acreage', 'title': 'title', 'Range age': 'Range age', });
lyr_Area_3.set('fieldAliases', {'STT': 'STT', 'Name': 'Name', 'Year': 'Year', 'address': 'address', 'X': 'X', 'Y': 'Y', 'age': 'age', 'area': 'area', 'Acreage': 'Acreage', 'title': 'title', 'Range age': 'Range age', });
lyr_Rangeage_4.set('fieldAliases', {'STT': 'STT', 'Name': 'Name', 'Year': 'Year', 'address': 'address', 'X': 'X', 'Y': 'Y', 'age': 'age', 'area': 'area', 'Acreage': 'Acreage', 'title': 'title', 'Range age': 'Range age', });
lyr_gadm36_VNM_1_0.set('fieldImages', {'GID_0': '', 'NAME_0': '', 'GID_1': '', 'NAME_1': '', 'VARNAME_1': '', 'NL_NAME_1': '', 'TYPE_1': '', 'ENGTYPE_1': '', 'CC_1': '', 'HASC_1': '', });
lyr_VUONQUOCGIA_1.set('fieldImages', {'STT': '', 'Name': '', 'Year': '', 'address': '', 'acreage(ha)': '', 'X': '', 'Y': '', });
lyr_Title_2.set('fieldImages', {'STT': 'TextEdit', 'Name': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'age': 'TextEdit', 'area': 'TextEdit', 'Acreage': 'TextEdit', 'title': 'TextEdit', 'Range age': 'TextEdit', });
lyr_Area_3.set('fieldImages', {'STT': 'TextEdit', 'Name': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'age': 'TextEdit', 'area': 'TextEdit', 'Acreage': 'TextEdit', 'title': 'TextEdit', 'Range age': 'TextEdit', });
lyr_Rangeage_4.set('fieldImages', {'STT': 'TextEdit', 'Name': 'TextEdit', 'Year': 'TextEdit', 'address': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'age': 'TextEdit', 'area': 'TextEdit', 'Acreage': 'TextEdit', 'title': 'TextEdit', 'Range age': 'TextEdit', });
lyr_gadm36_VNM_1_0.set('fieldLabels', {'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', });
lyr_VUONQUOCGIA_1.set('fieldLabels', {'STT': 'no label', 'Name': 'no label', 'Year': 'no label', 'address': 'no label', 'acreage(ha)': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Title_2.set('fieldLabels', {'STT': 'no label', 'Name': 'no label', 'Year': 'no label', 'address': 'no label', 'X': 'no label', 'Y': 'no label', 'age': 'no label', 'area': 'no label', 'Acreage': 'no label', 'title': 'no label', 'Range age': 'no label', });
lyr_Area_3.set('fieldLabels', {'STT': 'no label', 'Name': 'no label', 'Year': 'no label', 'address': 'no label', 'X': 'no label', 'Y': 'no label', 'age': 'no label', 'area': 'no label', 'Acreage': 'no label', 'title': 'no label', 'Range age': 'no label', });
lyr_Rangeage_4.set('fieldLabels', {'STT': 'no label', 'Name': 'no label', 'Year': 'no label', 'address': 'no label', 'X': 'no label', 'Y': 'no label', 'age': 'no label', 'area': 'no label', 'Acreage': 'no label', 'title': 'no label', 'Range age': 'no label', });
lyr_Rangeage_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});