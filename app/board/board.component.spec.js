System.register(['@angular/core/testing', './board.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, board_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (board_component_1_1) {
                board_component_1 = board_component_1_1;
            }],
        execute: function() {
            describe('BoardComponent', function () {
                var component;
                var fixture;
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [board_component_1.BoardComponent]
                    })
                        .compileComponents();
                }));
                beforeEach(function () {
                    fixture = testing_1.TestBed.createComponent(board_component_1.BoardComponent);
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
//# sourceMappingURL=board.component.spec.js.map