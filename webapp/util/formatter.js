sap.ui.define([], function() {
    "use strict";
    return {
        getStatus: function(status) {
            switch (status) {
                case "A":
                    return "Available";
                case "O":
                    return "Out of Stock";
                case "D":
                    return "Discontinued";
                default:
                    return "Unknown";
            }
        },
        getStaty: function(status) {
            switch (status) {
                case "A":
                    return "Success";
                case "O":
                    return "Error";
                case "D":
                    return "Warning";
                default:
                    return "Warning";
            }
        }
    }
});
