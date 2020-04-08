load(jsLibDirPath+"/macros.js");

///////////////////// Collect Data \\\\\\\\\\\\\\\\\\\\\;
var formNumber = $FormNumberInBook();
//var subCharacter = $Slice($InputFileName(),13,14);

if ((formNumber%2)===0) {
	var subCharacter = $Slice($LowerEvenImpositionPageOriginalInputFileName(),13,14);
} else {
	var subCharacter = $Slice($LowerImpositionPageOriginalInputFileName(),13,14);
}
///////////////////// Collect Data \\\\\\\\\\\\\\\\\\\\\;


///////////////////// Data Conditions \\\\\\\\\\\\\\\\\\\\\;
switch ($Uppercase(subCharacter)) {
	case 'B':
		ctpSubFolder= 'Single NWX';
		break;
	case 'C':
		ctpSubFolder= 'Panorama NWX';
		break;
	case 'G':
		ctpSubFolder= 'Single NWX';
		break;
	case 'S':
		ctpSubFolder= 'Split NWX';
		break;
	case 'J':
		ctpSubFolder= 'Split double NWX';
		break;
	case 'K':
		ctpSubFolder= 'Split double 2 NWX';
		break;
	case 'P':
		ctpSubFolder= 'Panorama NWX';
		break;
	default:
		ctpSubFolder= 'Single NWX';
}
///////////////////// Data Conditions \\\\\\\\\\\\\\\\\\\\\;


///////////////////// Data Results \\\\\\\\\\\\\\\\\\\\\;
var plateName = ctpSubFolder + '/' + $Slice($InputFileName(),1,20) + '_' + $Uppercase($ColorID())+ '_' + $PlateNumber() + '-' + $Slice($PressName(),6) + '.tif';
///////////////////// Data Results \\\\\\\\\\\\\\\\\\\\\;

plateName;