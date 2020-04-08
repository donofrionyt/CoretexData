load(jsLibDirPath+"/macros.js");
//debugger;
///////////////////// Collect Data \\\\\\\\\\\\\\\\\\\\\;
	var getCharacter, ctpSubFolder, plateName;
	
	//var getCharacter = $EventCrossStepProperty('subCharacter', 'B');
	var getCharacter = $ObjectProperty('form', $FormId(), 'subCharacter');
	
///////////////////// Collect Data \\\\\\\\\\\\\\\\\\\\\;

///////////////////// Data Conditions \\\\\\\\\\\\\\\\\\\\\;
switch ($Uppercase(getCharacter)) {
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