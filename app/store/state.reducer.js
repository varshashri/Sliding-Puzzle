System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var INITIAL_STATE, stateReducer;
    return {
        setters:[],
        execute: function() {
            INITIAL_STATE = {
                tiles: [],
                goal: false,
                image: '',
                tileSize: 105
            };
            exports_1("stateReducer", stateReducer = function (state, action) {
                if (state === void 0) { state = INITIAL_STATE; }
                switch (action.type) {
                    default:
                        return action.payload || state;
                }
            });
        }
    }
});
//# sourceMappingURL=state.reducer.js.map