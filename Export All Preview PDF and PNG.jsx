#include "assets/JonoLib.jsx"

function Main() {

	if (!CheckForOpenDocuments()) {
		return;
	}

	Jono_ProgressBar.create("Export", "Exporting…", app.documents.length*2);

	for (var i = 0; i < app.documents.length; i++) {

		var doc = app.documents.item(i);

		Jono_ProgressBar.updateSubLabel("Preview PDF | " + decodeURI(doc.name));
		ExportPreviewPDF(doc);
		Jono_ProgressBar.updateProgressBySteps(1);

		Jono_ProgressBar.updateSubLabel("Preview PNG | " + decodeURI(doc.name));
		ExportPreviewPNG(doc);
		Jono_ProgressBar.updateProgressBySteps(1);

	}

	Jono_ProgressBar.close();

}

Main();
