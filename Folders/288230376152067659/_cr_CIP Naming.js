load(jsLibDirPath+"/macros.js");

//debugger;
///////////////////// Collect Data \\\\\\\\\\\\\\\\\\\\\;
var pubDate = $PublicationDate('MMddYY');
var gossRunName = $Uppercase($EventProperty('JobName',$ProductionRunName('',$ObjectTableProperty('book',$BookId(),'jobcode','NOJOBNAME'))));
var sektion = $Uppercase($SectionCode());
var formSide = $EventCrossStepProperty ('inkAreaName', 'Ink Area Left');
var colorSeps = $Uppercase($ColorID());
///////////////////// Collect Data \\\\\\\\\\\\\\\\\\\\\;

//var totalForms = $BookFormCount()

//example page numbers for a inside DT = 8 and 9
//example page numbers for a outside DT = 8 and 1


///////////////////// Data Conditions \\\\\\\\\\\\\\\\\\\\\;
var formEven = $LowerImpositionPageNumber();    //should be 8 inside DT or 1 outside DT

if ((formEven%2)===0) {
	var formOdd = $HigherImpositionPageNumberIncludeVirtuals();    //formEven is divisble by 2 so = 9 for inside DT
} else {
	var formEven = $HigherImpositionPageNumberIncludeVirtuals();   //formEven wasn't divisble by 2 so = 8 outside DT
	var formOdd = $LowerImpositionPageNumber();    //1 outside DT
}

if (formSide === 'Ink Area Left') {
      formPGNum = formOdd;     //9 or 1
} else {
    formPGNum = formEven;      //8
}
///////////////////// Data Conditions \\\\\\\\\\\\\\\\\\\\\;



///////////////////// Data Results \\\\\\\\\\\\\\\\\\\\\;
var cipName = pubDate + gossRunName + '_' + sektion + '_' + formPGNum + '_' + colorSeps + '.ppf';
//var cipName = pubDate + gossRunName + '_' + sektion + '_' + formEven + '_' + formOdd + '_' + colorSeps + '.ppf';
///////////////////// Data Results \\\\\\\\\\\\\\\\\\\\\;

cipName;