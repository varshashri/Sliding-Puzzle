System.register(['@angular/core', "../puzzle/puzzle.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, puzzle_service_1;
    var MenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (puzzle_service_1_1) {
                puzzle_service_1 = puzzle_service_1_1;
            }],
        execute: function() {
            MenuComponent = (function () {
                function MenuComponent(puzzle) {
                    this.puzzle = puzzle;
                }
                MenuComponent = __decorate([
                    core_1.Component({
                        selector: 'menu',
                        templateUrl: './menu.component.html',
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush
                    }), 
                    __metadata('design:paramtypes', [puzzle_service_1.PuzzleService])
                ], MenuComponent);
                return MenuComponent;
            }());
            exports_1("MenuComponent", MenuComponent);
        }
    }
});
//# sourceMappingURL=menu.component.js.map