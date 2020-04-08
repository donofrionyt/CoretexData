load(jsLibDirPath+"/macros.js");

var plateName = 'Panorama NWX' + '/' + $Slice($InputFileName(),1,20) + '_' + $Uppercase($ColorID())+ '_' + $PlateNumber() + '-' + $Slice($PressName(),6) + '.tif';

plateName;