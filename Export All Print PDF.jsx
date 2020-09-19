
#include "assets/JonoLib.jsx"

function Main() {

	if (!CheckForOpenDocuments()) {
		return;
	}

	Jono_ProgressBar.create("Export", "Exporting…", app.documents.length);

	for (var i = 0; i < app.documents.length; i++) {

		var doc = app.documents.item(i);

		Jono_ProgressBar.updateSubLabel("Print PDF | " + decodeURI(doc.name));
		ExportPrintReadyPDF(doc);
		Jono_ProgressBar.updateProgressBySteps(1);

	}

	Jono_ProgressBar.close();

}

Main();
