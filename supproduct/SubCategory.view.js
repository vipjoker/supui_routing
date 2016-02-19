sap.ui.jsview('supproduct.SubCategory', {


    getControllerName : function() {
        return 'supproduct.SubCategory';
    },

    createContent : function(oController) {
        return new sap.m.Page({

            title: "Title",
            content:[]
        });
    }

});
