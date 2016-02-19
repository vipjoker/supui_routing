sap.ui.controller('supproduct.SubCategory', {


    onInit: function() {
        this.router = sap.ui.core.UIComponent.getRouterFor(this);
        this.router.attachRoutePatternMatched(this._handleRoutePatternMatched, this);
    },


    onBeforeRendering: function() {

    },


    onAfterRendering: function() {

    },


    onExit: function() {

    },


    _handleRouteMatched: function(evt){
        if(evt.getParameter("name") !== "category"){
            return;
        }

        this.catIndex = evt.getParameter("arguments").catIndex;

        var context = sap.ui.getCore().byId("app").getModel('products').getContext('/collection')

    }

});
