#include "assets/JonoLib.jsx"

function Main() {

	Jono_ProgressBar.create("Install", "Installing", 1);

	Jono_ProgressBar.updateSubLabel("Installing PDF presets");
	InstallPDFPresets();
	Jono_ProgressBar.updateProgressBySteps(1);

	Jono_ProgressBar.close();

}

Main();
