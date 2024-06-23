sap.ui.define([
    'sap/ui/core/UIComponent',
    "sap/ui/Device",
], function (UIComponent) {
    'use strict';
    return UIComponent.extend('algotechnica.fin.app.Component', {
        metadata: {
            manifest: 'json'
        },
        init: function () {
            UIComponent.prototype.init.apply(this);
            // enable routing

        },
        createContent: function () {

            var oView = new sap.ui.view({
                id: "idRootView",
                viewName: "algotechnica.fin.app.view.App",
                type: "XML",}
            );
            //create object of the view1 & view2
            var oView1 = new sap.ui.view({
                id: "idView1",
                viewName: "algotechnica.fin.app.view.View1",
                type: "XML",}
            );
            var oView2 = new sap.ui.view({
                id: "idView2",
                viewName: "algotechnica.fin.app.view.View2",
                type: "XML",}
            );

            //GEt the object of container control from the Root view
            var oAppCon = oView.byId("idAppCon");
            //Inculcate the view1 & view2 in the container control
            oAppCon.addPage(oView1).addPage(oView2);

            return oView;
        
        },
        destroy: function () {

                }
    });
});