load(jsLibDirPath+"/macros.js");
//debugger;
/////////////////////////////////////////Collect Data\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\;
//  var productionRunName  -  Read Production Run Name from plan.  Should be "Press 42:M" if Goss plan is used or "PR:/20191017/etc." if Number of Plates was used;
//  var gossTableCode   - Read the manually entered Goss code from the Ink Job Setting override table from plan.  Will be a Goss job code if manually entered or default "Production Run Name";
//  var gossTableId - Read the Goss Press ID from a custom property saved by xslt import. If runJobId is not reteived from custom property, then Number of Plates was probably used so try to get the ID from the Ink Job Setting override table else set it as "xXx";
//  var pressLookUp  - Used to determine which column from override table to read from;
//  var convertPressname - Look for Number of Copies PressName conversion, if they used it. If not, then use default;
//  var jobName - Have to initialize the variable with a default value;
//  var inkDTArea - Find which side of DT we are creating an ink file for to determine correct page number;
/////////////////////////////////////////Collect Data\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\;

var oriPressName = $PressName();
var productionRunName = $ProductionRunName();
var gossTableCode = $ObjectTableProperty('book',$BookId(),'jobcode','');
//var gossTableId = $ObjectProperty('productionrun', $ProductionRunId(),'pressJobId', $ObjectTableProperty('book',$BookId(),$PressName(),'xXx'));  //Not needed after new Goss system installed;
var pressLookUp = $PressName() + " name" ; 
var convertPressname = $ObjectTableProperty('book',$BookId(), pressLookUp, $PressName());
var jobName = 'default';
var formSide = $EventCrossStepProperty ('inkAreaName', 'Ink Area Left');
var cip3Section = $ReadFromTable('CIP3 Sections', 'sectioncode', $PublicationName(), $SectionName());

/////////////////////////////////////////Conditions\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\;
//  if convertPressName isn't defined then use original press info or else use the new info from the override tables;
if (!convertPressname) {
	$SetEventProperty('convertPressname', oriPressName);
	$SetEventProperty('column_Press', oriPressName);
} else {
	$SetEventProperty('convertPressname', convertPressname);
	$SetEventProperty('column_Press', convertPressname);
}

//Find out if Goss plan was used, if so, gossTableCode will be blank or default value of "Production Run Name" so make jobName the name of the Goss plan(should be Press 44:H1);
//But if Number of Plates used, then just the jobName to the gossTableCode(ex: MONU or VD or VPQ or H1 or M);
if (gossTableCode === '' || gossTableCode === 'Production Run Name') {
	jobName = productionRunName;
	} else {
	jobName = gossTableCode;
}

//jobName needs to only contain the Goss job code. Need to determine where the code is and splice it out appropriately;
if (jobName.length <= 3) {
	jobName = jobName;
} else {
	switch($Slice(jobName, 0, 3))  {
		case 'Pre':
			jobName = ($Slice(jobName, 9));
			break;
		case 'PR:':
			jobName = 'NOJOBNAME';   //Goss doesn't want garbage files so we will drop these events;
			$DropEvent();
			break;
		default:
			jobName = jobName;
	}
}

//Trying to set the form page number to correct digit in event;
if (formSide === 'Ink Area Right') {
    formPGNum = $FormNumber();
} else {
    formPGNum = $HigherImpositionPageNumberIncludeVirtuals();
}

/////////////////////////////////////////Conditions\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\;


/////////////////////////////////////////Save Data and LogIt\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\;
$SetEventProperty('column_Name',formPGNum);
$SetObjectProperty('form', $FormId(), 'column_Name', formPGNum);
$SetEventProperty('JobName', jobName);
$SetEventProperty('AdmPlateExtent', jobName);
$SetEventProperty('column_Section', cip3Section);

$Log('Production Run Name----> ' + productionRunName);
$Log('gossTableCode----> ' + gossTableCode);
$Log('column_Name----> ' + formPGNum);
//$Log('gossTableId----> ' + gossTableId);
$Log('pressLookUp----> ' + pressLookUp);
$Log('convertPressname----> ' + convertPressname);
$Log('JOBNAME-------->' + jobName);
/////////////////////////////////////////Save Data and LogIt\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\;