
#include "assets/JonoLib.jsx"

function Main() {

	var doc = CheckForOpenDocument();
	if (!doc) {
		return;
	}

	ExportDrukklaarPDF(doc);

	alert("Export finished");

}

Main();
