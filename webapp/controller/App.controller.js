sap.ui.define([
    "algotechnica/fin/app/controller/BaseController"
], function(BaseController) {
    "use strict";

    return BaseController.extend("algotechnica.fin.app.controller.App", {
        onInit: function() {
            // Initialization code goes here
            BaseController.prototype.onInit.apply(this);
        },

        // Add more controller methods here

    });
});