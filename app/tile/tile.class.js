System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Tile, Location;
    return {
        setters:[],
        execute: function() {
            Tile = (function () {
                function Tile(i, loc) {
                    this.index = i;
                    this.location = loc;
                }
                return Tile;
            }());
            exports_1("Tile", Tile);
            Location = (function () {
                function Location(top, left) {
                    this.top = top;
                    this.left = left;
                }
                return Location;
            }());
            exports_1("Location", Location);
        }
    }
});
//# sourceMappingURL=tile.class.js.map