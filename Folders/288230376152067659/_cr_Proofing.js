load(jsLibDirPath+"/macros.js");

//debugger;
///////////////////// Collect Data \\\\\\\\\\\\\\\\\\\\\;

var getActResult = $EventCrossStepProperty ('actionName', 'default value');

///////////////////// Collect Data \\\\\\\\\\\\\\\\\\\\\;


///////////////////// Data Conditions \\\\\\\\\\\\\\\\\\\\\;
switch (getActResult) {
	case 'Send to BlackMagic GANG':
		var proofName = 'ALL/' + $InputFileName();
		break;
	case 'Send to BlackMagic FULL Proofer 1':
		var proofName = 'FULLPROOFER1/' + $InputFileName();
		break;
	case 'Send to BlackMagic FULL Proofer 4':
		var proofName = 'FULLPROOFER4/' + $InputFileName();
		break;
	case 'Send to BlackMagic Press 41':
		var proofName = 'Press 41/' + $InputFileName();
		break;
	case 'Send to BlackMagic Press 42':
		var proofName = 'Press 42/' + $InputFileName();
		break;
	case 'Send to BlackMagic Press 43':
		var proofName = 'Press 43/' + $InputFileName();
		break;
	case 'Send to BlackMagic Press 44':
		var proofName = 'Press 44/' + $InputFileName();
		break;
	case 'Send to BlackMagic Press 45':
		var proofName = 'Press 45/' + $InputFileName();
		break;
	case 'Send to BlackMagic Press 46':
		var proofName = 'Press 46/' + $InputFileName();
		break;
	default:
		var proofName = 'ALL/' + $InputFileName();
}
///////////////////// Data Conditions \\\\\\\\\\\\\\\\\\\\\;


///////////////////// Data Results \\\\\\\\\\\\\\\\\\\\\;
proofName;
///////////////////// Data Results \\\\\\\\\\\\\\\\\\\\\;