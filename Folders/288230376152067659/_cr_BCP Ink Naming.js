load(jsLibDirPath+"/macros.js");

///////////////////// Collect Data \\\\\\\\\\\\\\\\\\\\\;
var pubDate = $PublicationDate('MMddYY');
var sektion = $Uppercase($SectionCode());
var formSide = $EventCrossStepProperty ('inkAreaName', 'Even Side');
var colorSeps = $Uppercase($ColorID());
///////////////////// Collect Data \\\\\\\\\\\\\\\\\\\\\;



///////////////////// Data Conditions \\\\\\\\\\\\\\\\\\\\\;
if (formSide === 'Odd Side') {
    formPGNum = $HigherImpositionPageNumberIncludeVirtuals();
} else {
    formPGNum = $FormNumber();
}
///////////////////// Data Conditions \\\\\\\\\\\\\\\\\\\\\;



///////////////////// Data Results \\\\\\\\\\\\\\\\\\\\\;
var bcpName = pubDate + $PublicationName() + '_' + $ZoneName() + '_' + sektion + '_' + formPGNum + '_' + colorSeps + '.ppf';
///////////////////// Data Results \\\\\\\\\\\\\\\\\\\\\;

bcpName;