System.register(['@angular/core/testing', './about.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, about_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            }],
        execute: function() {
            describe('AboutComponent', function () {
                var component;
                var fixture;
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [about_component_1.AboutComponent]
                    })
                        .compileComponents();
                }));
                beforeEach(function () {
                    fixture = testing_1.TestBed.createComponent(about_component_1.AboutComponent);
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
//# sourceMappingURL=about.component.spec.js.map