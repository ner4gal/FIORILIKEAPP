sap.ui.define([
    "algotechnica/fin/app/controller/BaseController",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
], function(BaseController, MessageBox, MessageToast) {
    "use strict";

    return BaseController.extend("algotechnica.fin.app.controller.View1", {
        onInit: function() {
            // Controller initialization code goes here
            
        },

        onGoBack: function() {
           // MessageBox.confirm("Do you want to go back?");  
              var oAppCon = this.getView().getParent();
                oAppCon.to("idView1");
        },
        onCancelPress: function() { 
            MessageBox.error("Warning message.");
        },
        onSavePress: function() { 
            MessageBox.confirm("Do you want to save the data?", { 
                title: "Save Data",
                onClose: function(oAction) {
                    if (oAction === MessageBox.Action.OK) {
                        MessageToast.show("Data saved successfully. :😘)");
                    } else {
                        MessageBox.error("Data not saved. 😒 ");
                    }
                }
              });
                },
        onPressButton: function() {
            
        },

        _onRouteMatched: function(oEvent) {
            var oArgs = oEvent.getParameter("arguments");
            var sQuery = oArgs.query;
            this.byId("displayText").setText("Search Query: " + sQuery);
        }
        
        // Add more controller methods as needed

    });
});