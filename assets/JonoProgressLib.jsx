var Jono_ProgressBar = {

    progress: undefined,

    create: function(myTitle, myLabel, myMax) {
        try {

            Jono_Setup.disableUserInteraction();

            var myRes = "palette { alignChildren: 'fill', text: '" + myTitle.replace('\'', '\\\'') + "', \
                label:       StaticText { text: '" + myLabel.replace('\'', '\\\'') + "' }, \
                subLabel:    StaticText { text: '' }, \
                progressBar: Progressbar { minvalue: 0, maxvalue: " + myMax + " } \
            }";

            this.progress = new Window(myRes, myTitle, undefined, {resizable: false, closeButton: false});
            if (myMax == 0) {
                this.progress.progressBar.visible = false;
            } else {
                this.progress.progressBar.visible = true;
            }
            this.progress.preferredSize.width = 440;
            Jono_UI.setFontSize(this.progress.subLabel, 10);
            Jono_UI.setFontColor(this.progress.subLabel, this.progress, [0.3, 0.3, 0.3]);
            this.progress.center();
            this.progress.show();

        } catch (myException) {
            alert(myException);
        }
    },

    update: function(myLabelText, mySubLabelText, myProgress) {
        try {
            if (this.progress == undefined) {
                return;
            }
            if (myLabelText != undefined) {
                this.progress.label.text = myLabelText;
            }
            if (mySubLabelText != undefined) {
                this.progress.subLabel.text = mySubLabelText;
            }
            if (myProgress != undefined) {
                this.progress.progressBar.value = myProgress;
            }
            try {
                this.progress.update();
            } catch (myException) {
            }
        } catch (myException) {
            alert(myException);
        }
    },

    updateLabel: function(myLabelText, mySubLabelText, myProgress) {
        try {
            this.update(myLabelText, mySubLabelText, myProgress);
        } catch (myException) {
            alert(myException);
        }
    },

    updateSubLabel: function(mySubLabelText, myLabelText, myProgress) {
        try {
            this.update(myLabelText, mySubLabelText, myProgress);
        } catch (myException) {
            alert(myException);
        }
    },

    updateProgress: function(myProgress, myLabelText, mySubLabelText) {
        try {
            this.update(myLabelText, mySubLabelText, myProgress);
        } catch (myException) {
            alert(myException);
        }
    },

    updateProgressBySteps: function(numberOfSteps) {
        try {
            if (this.progress != undefined) {
                this.progress.progressBar.value += numberOfSteps;
                this.update();
            }
        } catch (myException) {
            alert(myException);
        }
    },

    close: function() {
        try {
            Jono_Setup.enableUserInteraction();
            if (this.progress != undefined) {
                this.progress.close();
                this.progress = undefined;
            }
        } catch (myException) {
            alert(myException);
        }
    },

};
