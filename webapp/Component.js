sap.ui.define([
    "sap/ui/core/UIComponent",
    "trial1/trial1/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("trial1.trial1.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            var oModel = new sap.ui.model.json.JSONModel({
                users: [
                    { id: 1, name: "Vipul", role: "Developer", status: "Active" },
                    { id: 2, name: "Ankit", role: "Tester", status: "Away" },
                    { id: 3, name: "Aditya", role: "Infra", status: "DeActivated" }
                ]
            });
            this.setModel(oModel, "user"); // Attached to Component = Global

            // enable routing
            this.getRouter().initialize();
        }
    });
});