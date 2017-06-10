System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PuzzleTile;
    return {
        setters:[],
        execute: function() {
            PuzzleTile = (function () {
                function PuzzleTile(tile) {
                    this.goal = Object.assign({}, tile);
                    this.current = Object.assign({}, tile);
                    this.isBlank = (tile.index === 9);
                }
                PuzzleTile.prototype.isGoal = function () {
                    return this.current.location.left === this.goal.location.left &&
                        this.current.location.top === this.goal.location.top;
                };
                return PuzzleTile;
            }());
            exports_1("PuzzleTile", PuzzleTile);
        }
    }
});
//# sourceMappingURL=puzzle-tile.class.js.map