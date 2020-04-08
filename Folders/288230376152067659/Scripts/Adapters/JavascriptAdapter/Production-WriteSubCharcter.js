load(jsLibDirPath+"/macros.js");

var subCharacter = $Slice($InputFileName(),13,14);
$SetEventCrossStepProperty('subCharacter', subCharacter);
$SetObjectProperty('form', $FormId(), 'subCharacter', subCharacter);
$Log('subCharacter----> ' + subCharacter);