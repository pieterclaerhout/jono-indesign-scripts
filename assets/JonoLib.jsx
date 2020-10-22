#include "JonoProgressLib.jsx"
#include "JonoSetupLib.jsx"
#include "JonoUILib.jsx"

String.prototype.hasPrefix = function(str) {
    return this.slice(0, str.length) == str;
};

String.prototype.hasSuffix = function(str) {
    return this.slice(-str.length) == str;
};

// CheckForOpenDocument checks if a document is open and returns it's instance
function CheckForOpenDocument() {
	if (app.documents.length == 0) {
		alert("No document open");
		return undefined;
	}
	return app.activeDocument;
}

// CheckForOpenDocuments checks if any document is open
function CheckForOpenDocuments() {
	if (app.documents.length == 0) {
		alert("No documents open");
		return false;
	}
	return true;
}

// SetBleed sets the bleed for the document to 3 mm
function SetBleed(doc) {

	// var prefs = doc.documentPreferences;

	// prefs.documentSlugUniformSize = true;
	// prefs.documentBleedTopOffset = "3 mm";

}

// InstallPDFPresets installs the PDF export presets
function InstallPDFPresets() {

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

// ExportPDFWithPreset exports the document to PDF using the given preset
function ExportPDFWithPreset(doc, to, presetName) {

	app.pdfExportPreferences.pageRange = PageRange.ALL_PAGES;

	var preset = app.pdfExportPresets.itemByName(presetName);
	doc.exportFile(ExportFormat.PDF_TYPE, to, false, preset, "", true);
	doc.save();

}

// ExportPNG exports to the document to a non-transparent PNG
function ExportPNG(doc, to) {

	var prefs = app.pngExportPreferences;

	prefs.antiAlias = true;
	prefs.exportResolution = 72;
	prefs.exportingSpread = false;
	prefs.pageString = "1";
	prefs.pngColorSpace = PNGColorSpaceEnum.RGB;
	prefs.pngExportRange = PNGExportRangeEnum.EXPORT_RANGE;
	prefs.pngQuality = PNGQualityEnum.MAXIMUM;
	prefs.simulateOverprint = true;
	prefs.transparentBackground = false;
	prefs.useDocumentBleeds = false;

	doc.exportFile(ExportFormat.PNG_FORMAT, to, false, undefined, "", true);
	doc.save();

}

// ExportPrintReadyPDF exports the document to a print-ready PDF
function ExportPrintReadyPDF(doc) {

	var toPDF = new File(Folder.desktop + "/" + doc.fullName.name.replace(".indd", "_drukklaar.pdf"));

	SetBleed(doc);
	ExportPDFWithPreset(doc, toPDF, "Jono Drukklare PDF");

}

// ExportPreviewdPDF exports the document to a preview PDF
function ExportPreviewPDF(doc) {
	var toPDF = new File(Folder.desktop + "/" + doc.fullName.name.replace(".indd", ".pdf"));
	ExportPDFWithPreset(doc, toPDF, "Jono Voorbeeld PDF");
}

// ExportPreviewPNG exports the document to a preview PNG
function ExportPreviewPNG(doc) {
	var toPNG = new File(Folder.desktop + "/" + doc.fullName.name.replace(".indd", ".png"));
	ExportPNG(doc, toPNG);
}