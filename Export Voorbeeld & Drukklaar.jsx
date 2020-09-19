#include "assets/JonoLib.jsx"

function Main() {

	var doc = CheckForOpenDocument();
	if (!doc) {
		return;
	}

	Jono_ProgressBar.create("Export", "Exporting…", 2);
	
	Jono_ProgressBar.updateSubLabel("Exporting print-ready PDF");
	ExportPrintReadyPDF(doc);
	Jono_ProgressBar.updateProgressBySteps(1);

	Jono_ProgressBar.updateSubLabel("Exporting preview PDF");
	ExportPreviewPDF(doc);
	Jono_ProgressBar.updateProgressBySteps(1);

	Jono_ProgressBar.close();

}

Main();
