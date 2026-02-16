sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
],function(Controller, UIComponent){
    "use strict"
    return Controller.extend("trial1.trial1.controller.Detail", {
        onInit(){
            var oRouter = UIComponent.getRouterFor(this);
            oRouter.getRoute("detail").attachPatternMatched(this._objectMatched, this);
        },
        _objectMatched(oEvent){
            var sID = oEvent.getParameter("arguments").id;
            var oModel = this.getOwnerComponent().getModel("user");

            var aUsers = oModel.getProperty("/users");
            var oUser = aUsers.find(function(u){
                return u.id == sID;
            })
            var oDetailModel = new sap.ui.model.json.JSONModel(oUser);
            this.getView().setModel(oDetailModel);
        },
        onNavBack(){
            var oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteView1");
        }


    })
})