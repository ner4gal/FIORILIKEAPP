sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "algotechnica/fin/app/util/formatter"
], function(Controller, formatter) {
    'use strict';
    return Controller.extend("algotechnica.fin.app.controller.BaseController", {
        // Controller methods and properties go here
        formatter: formatter,
        py: 3.14,
        myReusedFunction: function() {
            console.log('This is a reused function');
        },
        onInit: function() {
            console.log('BaseController onInit');
        }

    });
});