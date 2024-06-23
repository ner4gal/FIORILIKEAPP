sap.ui.define([
    "algotechnica/fin/app/controller/BaseController",
    "sap/m/MessageBox"
], function(BaseController, MessageBox) {
    "use strict";

    return BaseController.extend("algotechnica.fin.app.controller.View1", {
        onInit: function() {
            // Controller initialization code goes here
        },

        onGoNext: function() {
            
            var oAppCon = this.getView().getParent();
            oAppCon.to("idView2");
        },

        onPressButton: function() {
            // Event handler for button press
        },
        onListItemPress: function (oEvent) {
            var oItem = oEvent.getSource();
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("View2", {
              objectId: oItem.getBindingContext().getProperty("ObjectId")  // Adjust according to your model structure
            });
        }// Add more controller methods as needed

    });
});