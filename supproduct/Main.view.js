sap.ui.jsview('supproduct.Main', {

    getControllerName : function() {
        return 'supproduct.Main';
    },

    createContent : function(oController) {
        this.setDisplayBlock(true);

        return new sap.m.SplitApp("splitApp", {});

    }

});
