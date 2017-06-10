/* tslint:disable:no-unused-variable */
System.register(['@angular/core/testing', './puzzle.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, puzzle_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (puzzle_service_1_1) {
                puzzle_service_1 = puzzle_service_1_1;
            }],
        execute: function() {
            describe('Service: AiService', function () {
                beforeEach(function () {
                    testing_1.TestBed.configureTestingModule({
                        providers: [puzzle_service_1.AiService]
                    });
                });
                it('should ...', testing_1.inject([puzzle_service_1.AiService], function (service) {
                    expect(service).toBeTruthy();
                }));
            });
        }
    }
});
//# sourceMappingURL=puzzle.service.spec.js.map