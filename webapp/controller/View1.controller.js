sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("trial1.trial1.controller.View1", {
        onInit() {
            var oModel = new JSONModel({
                newTodo : "",
                todos:[] 
            });
            this.getView().setModel(oModel)
        },
        onAddTodo(){
            var oModel = this.getView().getModel();
            var aNewTodo = oModel.getProperty("/newTodo")
            if(! aNewTodo) return;
            var bTodos = oModel.getProperty("/todos");
            bTodos.push({
                title : aNewTodo,
                completed : false
            })
            
            oModel.setProperty("/todos", bTodos);
            oModel.setProperty("/newTodo", "");
        },
        onDeleteTodo(oEvent){
            var oContext = oEvent.getSource().getBindingContext();
            var oModel = this.getView().getModel();

            var aTodos = oModel.getProperty("/todos");
            var index = parseInt(oContext.getPath().split("/")[2]);

            aTodos.splice(index, 1)
            oModel.setProperty("/todos", aTodos)
            oModel.refresh()
        },
        onCompleteTodo(oEvent){
            var oContext = oEvent.getSource().getBindingContext();
            var oModel = this.getView().getModel();
            var sPath = oContext.getPath()
            var bCompleted = oModel.getProperty(sPath + "/completed");

            oModel.setProperty(sPath + "/completed", !bCompleted);
            oModel.refresh()
        }
        
    });
});