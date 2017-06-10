System.register(['@angular/core/testing', './game.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, game_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (game_component_1_1) {
                game_component_1 = game_component_1_1;
            }],
        execute: function() {
            describe('GameComponent', function () {
                var component;
                var fixture;
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [game_component_1.GameComponent]
                    })
                        .compileComponents();
                }));
                beforeEach(function () {
                    fixture = testing_1.TestBed.createComponent(game_component_1.GameComponent);
                    component = fixture.componentInstance;
                    fixture.detectChanges();
                });
                it('should create', function () {
                    expect(component).toBeTruthy();
                });
            });
        }
    }
});
//# sourceMappingURL=game.component.spec.js.map