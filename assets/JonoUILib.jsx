var Jono_UI = {

    setFontSize: function(label, size) {
        try {
            label.graphics.font = "dialog:" + size;
        } catch (myException) {
            alert(myException);
        }
    },

    setFontColor: function(label, window, color) {
        try {
            label.graphics.foregroundColor = label.graphics.newPen(window.graphics.PenType.SOLID_COLOR, color, 1);
        } catch (myException) {
            alert(myException);
        }
    },

};
