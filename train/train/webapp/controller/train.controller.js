sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("ui5.train.train.controller.train", {
        onInit: async function () {
            const response = await fetch("https://randomuser.me/api/?results=5");
            const data = await response.json();
            this.getView().setModel(new JSONModel(data), "users")
        },
        onPress: function (oEvent) {
            const item = oEvent.getSource()
            console.log(item)
            const oContext = item.getBindingContext("bookllist");
            const oRouter = this.getOwnerComponent().getRouter();
			console.log("oContrext - ",oContext);
			console.log("getPath : ",oContext.getPath());
            oRouter.navTo("BookDetail",{
				bookNumber: window.encodeURIComponent(oContext.getPath().substr(1))
			});
        }
    });
});