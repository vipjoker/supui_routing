sap.ui.jsview('supproduct.Category', {


    getControllerName : function() {
        return 'supproduct.Category';
    },


    createContent : function(oController) {


        var oList = new sap.m.List({
            id:"listId"
        });

        oList.bindItems({

            path: "products>/users",

            template : new sap.m.StandardListItem({

                title: "{products>name}",
                type: sap.m.ListType.Navigation,
                press:function(evt){
                    oController.categoryListItemPress(evt);
                }

            })
        });



        return new sap.m.Page({
            title :"Title",
            content :[
                oList
            ]
        });
    }

});
