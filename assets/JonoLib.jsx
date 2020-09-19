String.prototype.hasPrefix = function(str) {
    return this.slice(0, str.length) == str;
};

String.prototype.hasSuffix = function(str) {
    return this.slice(-str.length) == str;
};

function CheckForOpenDocument() {
	if (app.documents.length == 0) {
		alert("No document open");
		return undefined;
	}
	return app.activeDocument;
}

function SetBleed(doc) {
	doc.documentPreferences.documentSlugUniformSize = true;
	doc.documentPreferences.documentBleedTopOffset = "3 mm";
}

function InstallPresets() {

	var assetsPath = new Folder(new File($.fileName).path);
	var destPath = new Folder(Folder.userData.fsName + "/Adobe/Adobe PDF/Settings");

	var files = assetsPath.getFiles("*");
	for (var i in files) {
		var file = files[i];
		if (!file.name.hasSuffix(".joboptions")) {
			continue;
		}
		file.copy(new File(destPath.fsName + "/" + decodeURI(file.name)));
	}
	
}

function ExportPDFWithPreset(doc, to, presetName) {

	app.pdfExportPreferences.pageRange = PageRange.ALL_PAGES;

	var preset = app.pdfExportPresets.itemByName(presetName);
	doc.exportFile(ExportFormat.PDF_TYPE, to, false, preset, "", true);

}


function ExportDrukklaarPDF(doc) {

	var toPDF = new File(Folder.desktop + "/" + doc.fullName.name.replace(".indd", "_drukklaar.pdf"));

	SetBleed(doc);
	ExportPDFWithPreset(doc, toPDF, "Jono Drukklare PDF");

}

function ExportVoorbeeldPDF(doc) {
	var toPDF = new File(Folder.desktop + "/" + doc.fullName.name.replace(".indd", ".pdf"));
	ExportPDFWithPreset(doc, toPDF, "Jono Voorbeeld PDF");
}