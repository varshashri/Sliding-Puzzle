System.register(['@angular/core/testing', './gallery.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, gallery_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (gallery_component_1_1) {
                gallery_component_1 = gallery_component_1_1;
            }],
        execute: function() {
            describe('GalleryComponent', function () {
                var component;
                var fixture;
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [gallery_component_1.GalleryComponent]
                    })
                        .compileComponents();
                }));
                beforeEach(function () {
                    fixture = testing_1.TestBed.createComponent(gallery_component_1.GalleryComponent);
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
//# sourceMappingURL=gallery.component.spec.js.map