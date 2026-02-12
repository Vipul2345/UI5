sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("trial1.trial1.controller.View1", {
        onInit() {
            var oModel = new JSONModel({
                users: [
                    { id: 1, name: "Vipul", role: "Developer" },
                    { id: 2, name: "Ankit", role: "Tester" },
                    { id: 3, name: "Aditya", role: "Infra" },
                ]
            });
            this.getView().setModel(oModel, "user")
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
        onUserSelect(oEvent){
            var oItem = oEvent.getParameter("listItem");
            var oContext = oItem.getBindingContext("user");
            var data = oContext.getObject();

            MessageToast.show(data.name +"_"+ data.role)

        }
    });
});