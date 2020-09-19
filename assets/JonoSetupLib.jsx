var Jono_Setup = {

    interactionLevel: undefined,

    disableUserInteraction: function() {
        try {
            this.interactionLevel                      = app.scriptPreferences.userInteractionLevel;
            app.scriptPreferences.enableRedraw         = false;
            app.scriptPreferences.userInteractionLevel = UserInteractionLevels.NEVER_INTERACT;
        } catch (myException) {
            alert(myException);
        }
    },

    enableUserInteraction: function() {
        try {
            if (this.interactionLevel) {
                app.scriptPreferences.userInteractionLevel = this.interactionLevel;
            }
        } catch (myException) {
            alert(myException);
        }
    },

};
