load(jsLibDirPath+"/macros.js");
//debugger;
///////////////////////////////// Collect Data \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\;
var oriPressName = $PressName();
//var convertPressname = $ReadFromTable('Press Names', 'realpressname', $PublicationDate('EE'), $PublicationName(), $EditionName(), $ZoneName(), $BookName(), $PressName());  //This was old way
var pressLookUp = $PressName() + " name";
var convertPressname = $ObjectTableProperty('book',$BookId(), pressLookUp, $PressName());
///////////////////////////////// Collect Data \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\;


///////////////////////////////// Data Conditions \\\\\\\\\\\\\\\\\\\\\\\\\\\\;
//If nothing is defined in the table, then we need to still define our properties using the info that was already there.
if (!convertPressname) {
	$SetEventProperty('convertPressname', oriPressName);
	$SetEventProperty('column_Press', oriPressName);
} else {
	$SetEventProperty('convertPressname', convertPressname);
	$SetEventProperty('column_Press', convertPressname);
}
///////////////////////////////// Data Conditions \\\\\\\\\\\\\\\\\\\\\\\\\\\\;


$Log('PubDate---> ' + $PublicationDate('EE'));
$Log('PubName---> ' + $PublicationName());
$Log('EdName---> ' + $EditionName());
$Log('ZoneName---> ' + $ZoneName());
$Log('BookName---> ' + $BookName());
$Log('Original Press Name-----> ' + oriPressName);
$Log('Converted Press Name-----> ' + $EventProperty('convertPressname'));