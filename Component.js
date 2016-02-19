/**
 * Created by Admin on 18.02.2016.
 */

jQuery.sap.declare("root.Component");

sap.ui.core.UIComponent.extend("root.Component",{

    metadata:{
        routing : {
            config : {
                viewType : "JS",
                viewPath : "supproduct",
                targetControl : "splitApp",
                clearTarget : false,
                transition : "slide"
            },

            routes :[

                {
                    pattern:"category/{catIndex}",
                    name: "category",
                    view: "SubCategory",
                    targetAggregation:"masterPages"


                },


                {
                    pattern : "",
                    name : "default",
                    view: "Category",
                    targetAggregation:"masterPages"
                }

            ]
        }



    },


    init: function(){


        jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
        jQuery.sap.require("sap.ui.core.routing.HashChanger");


        sap.ui.core.UIComponent.prototype.init.apply(this,arguments);

        this._router = this.getRouter();

        this._routeHandler = new sap.m.routing.RouteMatchedHandler(this._router);

        this._router.initialize();
    },

    createContent:function (){
        var oView = sap.ui.view({
            id: "app",
            viewName : "supproduct.Main",
            type: "JS",
            viewData :{ component : this}
        });


        var oModel = new sap.ui.model.json.JSONModel('model/Product.json');

        oView.setModel(oModel, 'products');

        var data =  {
            items :[]
        };

        var cartModel = new sap.ui.model.json.JSONModel(data);
        oView.setModel(cartModel, 'cart');

        return oView;
    }

});