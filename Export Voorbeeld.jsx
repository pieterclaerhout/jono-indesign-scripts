#include "assets/JonoLib.jsx"

function Main() {

	var doc = CheckForOpenDocument();
	if (!doc) {
		return;
	}

	ExportVoorbeeldPDF(doc);
	alert("Export finished");

}

Main();
