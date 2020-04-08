load(jsLibDirPath+"/macros.js");

///////////////////// Collect Data \\\\\\\\\\\\\\\\\\\\\;
var PDcd = $PublicationDate('MMddyy');
var PUcd = $PublicationCode();
var PUmc = PUcd.charAt(1);      //Just need the middle character from the PublicationCode
var SEcd = $SectionCode();
var PGcd = $PageNumber('%03d');

var splitChar = $SplitName();
splitChar = splitChar == "" ? "X" : splitChar == "A" ? "H" : "S";
var PGty = splitChar + 'B';                    //Need to figure out a way to define page type

var CUcd = PUcd.charAt(2);          //Single char customer code pulled from end of PubCode
var ZOcd = $ZoneCode('%/X/3s');    //Most of time only 2 characters, X padded character
var EDcd = $EditionCode();
///////////////////// Collect Data \\\\\\\\\\\\\\\\\\\\\;


///////////////////// Data Conditions \\\\\\\\\\\\\\\\\\\\\;
//Have to do a manual change of AMNY sections because they're special
switch (SEcd) {
	case 'MA':
		SEcd= 'A';
		break;
	case 'BX':
		SEcd= 'B';
		break;
	case 'BR':
		SEcd= 'C';
		break;
	case 'QU':
		SEcd= 'D';
		break;
	default:
		SEcd = $SectionCode();
}
///////////////////// Data Conditions \\\\\\\\\\\\\\\\\\\\\;


///////////////////// Data Results \\\\\\\\\\\\\\\\\\\\\;
var incomingPattern = 'Y' + PDcd + PUmc + SEcd + PGcd + PGty + CUcd + ZOcd + EDcd;
///////////////////// Data Results \\\\\\\\\\\\\\\\\\\\\;

incomingPattern;