System.register(['@angular/core/testing', './menu.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, menu_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            }],
        execute: function() {
            describe('MenuComponent', function () {
                var component;
                var fixture;
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [menu_component_1.MenuComponent]
                    })
                        .compileComponents();
                }));
                beforeEach(function () {
                    fixture = testing_1.TestBed.createComponent(menu_component_1.MenuComponent);
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
//# sourceMappingURL=menu.component.spec.js.map