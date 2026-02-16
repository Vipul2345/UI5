sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/UIComponent"
], (Controller, MessageToast, JSONModel, UIComponent) => {
    "use strict";

    return Controller.extend("trial1.trial1.controller.View1", {
        onInit() {
        },
        onLogin(){
            var data = this.getView().getModel().getData()
            MessageToast.show(`User Name = ${data.username} , and password is ${data.password}`)
        },
        clearData(){
            this.getView().getModel().setData({
                username : "",
                password : ""
            })
        },
        // onUserSelect(oEvent){
        //     var oItem = oEvent.getParameter("listItem");
        //     var oContext = oItem.getBindingContext("user");
        //     var data = oContext.getObject();

        //     MessageToast.show(data.name +"_"+ data.role)
        // },
        formatStatus(sStatus){
            if(sStatus === "Active"){
                return "Success"
            } else if(sStatus === "Away"){
                return "Warning"
            } else{
                return "Error"
            }
        },
        isDeveloper: function (sRole) {
            return sRole === "Developer";
        },
        onUserSelect: function (oEvent) {
            var oItem = oEvent.getParameter("listItem");
            var oContext = oItem.getBindingContext("user");
            var oData = oContext.getObject();

            var oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("detail", {
                id: oData.id
            });
        }
    });
});