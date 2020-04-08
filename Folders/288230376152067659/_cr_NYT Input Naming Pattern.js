load(jsLibDirPath+"/macros.js");

///////////////////// Collect Data \\\\\\\\\\\\\\\\\\\\\;
var PDcd = $PublicationDate('MMddyy'); 
var PUcd = $PublicationCode();
var SEcd = $SectionCode('%/X/2s');  //NY can have 1 to 2 char section code so padding with X
var PGcd = $PageNumber('%03d');


var PGty = 'XB';                    //Need to figure out a way to define page type

var CUcd = PUcd.charAt(2);      //Single char customer code pulled from end of PubCode
var ZOcd = $ZoneCode('%/X/3s');    //Most of time only 2 characters so padding with X
var EDcd = $EditionCode();
///////////////////// Collect Data \\\\\\\\\\\\\\\\\\\\\;


///////////////////// Data Conditions \\\\\\\\\\\\\\\\\\\\\;

///////////////////// Data Conditions \\\\\\\\\\\\\\\\\\\\\;


///////////////////// Data Results \\\\\\\\\\\\\\\\\\\\\;
var incomingPattern = 'Y' + PDcd + SEcd + PGcd + PGty + CUcd + ZOcd + EDcd;
///////////////////// Data Results \\\\\\\\\\\\\\\\\\\\\;

incomingPattern;