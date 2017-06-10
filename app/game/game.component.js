System.register(['@angular/core', "../puzzle/puzzle.service", "@ngrx/store"], function(exports_1, context_1) {
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
    var core_1, puzzle_service_1, store_1;
    var GameComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (puzzle_service_1_1) {
                puzzle_service_1 = puzzle_service_1_1;
            },
            function (store_1_1) {
                store_1 = store_1_1;
            }],
        execute: function() {
            GameComponent = (function () {
                function GameComponent(puzzle, store) {
                    this.puzzle = puzzle;
                    this.store = store;
                    this.gameState = this.store.select('state');
                }
                GameComponent.prototype.ngAfterContentInit = function () {
                    if (window.innerWidth > window.innerHeight) {
                        /** Size for large screens */
                        if (window.innerWidth < 600) {
                            console.log('screen < 600');
                            this.puzzle.tileSize = Math.floor((window.innerHeight - 230) / 3);
                        }
                        else {
                            console.log('screen >600');
                            this.puzzle.tileSize = Math.floor((window.innerHeight - 200) / 3);
                        }
                    }
                    else {
                        /** Size for mobile screens */
                        if (window.innerHeight < 500) {
                            console.log('mobile screen > ');
                            this.puzzle.tileSize = Math.floor((window.innerHeight - 90) / 3);
                        }
                        else {
                            console.log('mobile screen > 500');
                            this.puzzle.tileSize = Math.floor((window.innerWidth - 50) / 3);
                        }
                    }
                    this.puzzle.initialize();
                };
                GameComponent.prototype.moveTile = function (tile) {
                    this.puzzle.move(tile);
                };
                GameComponent = __decorate([
                    core_1.Component({
                        selector: 'game',
                        template: '<board [state]="gameState | async" (move)="moveTile($event)"></board>',
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush
                    }), 
                    __metadata('design:paramtypes', [puzzle_service_1.PuzzleService, (typeof (_a = typeof store_1.Store !== 'undefined' && store_1.Store) === 'function' && _a) || Object])
                ], GameComponent);
                return GameComponent;
                var _a;
            }());
            exports_1("GameComponent", GameComponent);
        }
    }
});
//# sourceMappingURL=game.component.js.map