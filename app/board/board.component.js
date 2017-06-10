System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var BoardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BoardComponent = (function () {
                function BoardComponent(renderer) {
                    this.renderer = renderer;
                    this.move = new core_1.EventEmitter();
                    this.showNumbers = false;
                }
                BoardComponent.prototype.ngOnInit = function () {
                    var boardSize = this.state.tileSize * 3;
                    this.backgroundSize = boardSize + 'px ' + boardSize + 'px';
                    this.renderer.setElementStyle(this.board.nativeElement, 'width', boardSize + 'px');
                    this.renderer.setElementStyle(this.board.nativeElement, 'height', boardSize + 'px');
                    this.renderer.setElementStyle(this.background.nativeElement, 'background-size', this.backgroundSize);
                };
                BoardComponent.prototype.getStyles = function (tile) {
                    return {
                        top: tile.current.location.top + 'px',
                        left: tile.current.location.left + 'px',
                        width: this.state.tileSize + 'px',
                        height: this.state.tileSize + 'px',
                        display: (tile.isBlank) ? 'none' : 'flex',
                        backgroundImage: 'url(' + this.state.image + ')',
                        backgroundPosition: (-tile.goal.location.left) + "px " + (-tile.goal.location.top) + "px",
                        backgroundSize: this.backgroundSize
                    };
                };
                BoardComponent.prototype.moveTile = function (tile) {
                    if (this.state.goal)
                        return;
                    this.move.emit(tile);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BoardComponent.prototype, "state", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], BoardComponent.prototype, "move", void 0);
                __decorate([
                    core_1.ViewChild('board'), 
                    __metadata('design:type', (typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object)
                ], BoardComponent.prototype, "board", void 0);
                __decorate([
                    core_1.ViewChild('background'), 
                    __metadata('design:type', (typeof (_b = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _b) || Object)
                ], BoardComponent.prototype, "background", void 0);
                BoardComponent = __decorate([
                    core_1.Component({
                        selector: 'board',
                        templateUrl: './board.component.html',
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush
                    }), 
                    __metadata('design:paramtypes', [(typeof (_c = typeof core_1.Renderer !== 'undefined' && core_1.Renderer) === 'function' && _c) || Object])
                ], BoardComponent);
                return BoardComponent;
                var _a, _b, _c;
            }());
            exports_1("BoardComponent", BoardComponent);
        }
    }
});
//# sourceMappingURL=board.component.js.map