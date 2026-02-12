sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/ui/core/routing/History"
],(Controller, History) =>{
      return Controller.extend("ui5.train.train.controller.BookDetail",{
         onInit: function (){
            const oRouter = this.getOwnerComponent().getRouter();
			   oRouter.getRoute("BookDetail").attachPatternMatched(this.onObjectMatched, this);
         },
         onObjectMatched(oEvent) {
            this.getView().bindElement({
                  path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").bookNumber),
                  model: "bookllist"
               }
            );
		   },
         onNavBack() {
            const oHistory = History.getInstance();
            const sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
               window.history.go(-1);
            } else {
               const oRouter = this.getOwnerComponent().getRouter();
               oRouter.navTo("Routetrain", {}, true /*no history*/);
            }
         }
      })
})