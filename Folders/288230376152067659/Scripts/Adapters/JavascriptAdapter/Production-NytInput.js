load(jsLibDirPath+"/macros.js");
//debugger;
///////////////////// Collect Data \\\\\\\\\\\\\\\\\\\\\;
var re = /([A-z]*)([0-9]{6})([A-z]{2})([0-9]{3})([A-z]{2})([A-z]{1})([A-z]{3})([A-z0-9]{2})([-+Kk]*?)\.([CcMmYyKk])/;
$SetEventProperty("stam", "stam");
var filename = $EventProperty("expectedName", "****");
if(!filename || filename == "****"){
	filename = $EventProperty("filename");
}
var result = re.exec(filename);
if (result === null){$SetEventProperty("stopEventMode","0")}
var folderDir = $EventProperty("readFullPath");
var reDir = /([^\/]*)\\([^\/]*)$/;
var result2 = reDir.exec(folderDir);
var hotfolderName = result2[1];
$SetEventProperty("hotfolderName",hotfolderName);

//Example Filename - Y121619XG001XBNXXXE1+.K
//	%1 NYT Designator		Y
//	%2 Date					121619
//	%3 Section				XG
//	%4 PageNumber			001
//	%5 PageType				XB
//	%6 ProductCode			N
//	%7 Zone					XXX
//	%8 Edition				E1
//	%9 Postscripts/Kills	-+K
//	%10 ColorID				K

var myMonth = parseInt(result[2].slice(0, 2)-1);
var myDay = result[2].slice(2, 4);
var myYear = parseInt("20" + result[2].slice(-2));
var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
NewMonth = months[myMonth];
var CombineDate = NewMonth + "-" + myDay + "-" + myYear;
var PageNumRawIs = result[4];
var PageNumIs = parseInt(PageNumRawIs);
var publication = result[1] + result[3].slice(0, 1) + result[6];  //YXN - PubCode for New York Times
var sepCode = result[10].toLowerCase();
var separation = "black";
var PageModType = "General";
var PageType = result[5].slice(1, 2);
var DefinedLayout = $ReadFromTable('Layouts','layout',hotfolderName,PageType,PageModType);
var NumberOfPlates = $ReadFromTable('NumberOfPlates', 'number',publication);
var defaultNumberOfPlates = 2;
///////////////////// Collect Data \\\\\\\\\\\\\\\\\\\\\;


///////////////////// Data Conditions \\\\\\\\\\\\\\\\\\\\\;
if (sepCode == "c"){
	separation = "cyan";
} else if (sepCode == "m"){
	separation = "magenta";
} else if (sepCode == "y"){
	separation = "yellow";
}
if (PageNumIs %2 === 0) {
    PageModType = "Even";
} else if (PageNumIs == 1) {
    PageModType = "First";
} else {
    PageModType = "Odd";
}
if (NumberOfPlates === "") {
	NumberOfPlates = defaultNumberOfPlates;
}
///////////////////// Data Conditions \\\\\\\\\\\\\\\\\\\\\;


///////////////////// Data Results \\\\\\\\\\\\\\\\\\\\\;
//$SetEventProperty("publication","New York Times");
$SetEventProperty("publication",publication);
$SetEventProperty("issuedate", CombineDate);
$SetEventProperty("edition", result[8]);
$SetEventProperty("zone", result[7].slice(1, 3));
//$SetEventProperty("zone", "New York");
$SetEventProperty("section", result[3].slice(1, 2));
$SetEventProperty("page", result[4]);
$SetEventProperty("kill", result[9]);
$SetEventProperty("PageType",PageType);
$SetEventProperty("PageModType",PageModType);
$SetEventProperty("separation", separation);
$SetEventProperty("createForms", "true");
$SetEventProperty("isColor", "true");
$SetEventProperty("layoutGroupName", "Broadsheet");
$SetEventProperty("layoutName", DefinedLayout);
$SetEventProperty("numberOfPlates", NumberOfPlates);
///////////////////// Data Results \\\\\\\\\\\\\\\\\\\\\;


///////////////////// Logging \\\\\\\\\\\\\\\\\\\\\;
$Log('NYTInputJB_new_kill');
$Log("hotfolderName----->"+hotfolderName);
$Log("publication----->"+publication);
$Log("issuedate----->"+CombineDate);
$Log("edition----->"+result[8]);
$Log("zone----->"+result[7].slice(1, 3));
$Log("section----->"+result[3].slice(1, 2));
$Log("page----->"+result[3]);
$Log("kill----->"+result[9]);
$Log("PageType----->"+PageType);
$Log("PageModType----->"+PageModType);
$Log('Separation----->'+separation);
$Log('definedLayout----->'+DefinedLayout);
$Log('DefinedSubConfig----->'+DefinedSubConfig);
$Log('NumberOfPlates----->'+NumberOfPlates);
///////////////////// Logging \\\\\\\\\\\\\\\\\\\\\;