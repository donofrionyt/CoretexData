load(jsLibDirPath+"/macros.js");

///////////////////// Collect Data \\\\\\\\\\\\\\\\\\\\\;
//var infoSearch = $LowerImpositionPageInputFileName();
//if (!infoSearch || infoSearch.length < 15) {
//	infoSearch= 123456789012345
//}
//var subCharacter = $Slice(infoSearch,13,14);
var subCharacter = $Slice($LowerImpositionPageInputFileName(),13,14);
///////////////////// Collect Data \\\\\\\\\\\\\\\\\\\\\;


///////////////////// Data Conditions \\\\\\\\\\\\\\\\\\\\\;
switch (subCharacter) {
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
		ctpSubFolder= 'ERROR SubFolder NULL';
}
///////////////////// Data Conditions \\\\\\\\\\\\\\\\\\\\\;


///////////////////// Data Results \\\\\\\\\\\\\\\\\\\\\;	
var plateName = ctpSubFolder + '/' + $Slice($InputFileName(),1,20) + '_' + $Uppercase($ColorID())+ '_' + $PlateNumber() + '-' + $Slice($PressName(),6) + '.tif';
///////////////////// Data Results \\\\\\\\\\\\\\\\\\\\\;


plateName;