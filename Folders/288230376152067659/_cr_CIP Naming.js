load(jsLibDirPath+"/macros.js");

//debugger;
///////////////////// Collect Data \\\\\\\\\\\\\\\\\\\\\;
var pubDate = $PublicationDate('MMddYY');
var gossRunName = $Uppercase($EventProperty('JobName',$ProductionRunName('',$ObjectTableProperty('book',$BookId(),'jobcode','NOJOBNAME'))));
var sektion = $Uppercase($SectionCode());
var formSide = $EventCrossStepProperty ('inkAreaName', 'Ink Area Left');
var colorSeps = $Uppercase($ColorID());
///////////////////// Collect Data \\\\\\\\\\\\\\\\\\\\\;



///////////////////// Data Conditions \\\\\\\\\\\\\\\\\\\\\;
if (formSide === 'Ink Area Left') {
//    formPGNum = $FormNumber();
      formPGNum = $LowerImpositionPageNumber();
} else {
    formPGNum = $HigherImpositionPageNumberIncludeVirtuals();
}
///////////////////// Data Conditions \\\\\\\\\\\\\\\\\\\\\;



///////////////////// Data Results \\\\\\\\\\\\\\\\\\\\\;
var cipName = pubDate + gossRunName + '_' + sektion + '_' + formPGNum + '_' + colorSeps + '.ppf';
///////////////////// Data Results \\\\\\\\\\\\\\\\\\\\\;

cipName;