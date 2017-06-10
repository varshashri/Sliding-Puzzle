System.register(['@angular/platform-browser', '@angular/core', '@angular/forms', '@angular/http', "@angular/router", "ng2-sharebuttons", "./puzzle/puzzle.service", './app.component', './board/board.component', "@ngrx/store", "./store/state.reducer", './menu/menu.component', './gallery/gallery.component', './about/about.component', './home/home.component', './game/game.component', "@angular/common"], function(exports_1, context_1) {
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
    var platform_browser_1, core_1, forms_1, http_1, router_1, ng2_sharebuttons_1, puzzle_service_1, app_component_1, board_component_1, store_1, state_reducer_1, menu_component_1, gallery_component_1, about_component_1, home_component_1, game_component_1, common_1;
    var AppModule;
    return {
        setters:[
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2_sharebuttons_1_1) {
                ng2_sharebuttons_1 = ng2_sharebuttons_1_1;
            },
            function (puzzle_service_1_1) {
                puzzle_service_1 = puzzle_service_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (board_component_1_1) {
                board_component_1 = board_component_1_1;
            },
            function (store_1_1) {
                store_1 = store_1_1;
            },
            function (state_reducer_1_1) {
                state_reducer_1 = state_reducer_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (gallery_component_1_1) {
                gallery_component_1 = gallery_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (game_component_1_1) {
                game_component_1 = game_component_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        declarations: [
                            app_component_1.AppComponent,
                            home_component_1.HomeComponent,
                            about_component_1.AboutComponent,
                            game_component_1.GameComponent,
                            board_component_1.BoardComponent,
                            menu_component_1.MenuComponent,
                            gallery_component_1.GalleryComponent
                        ],
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            http_1.HttpModule,
                            router_1.RouterModule.forRoot([
                                { path: '', component: home_component_1.HomeComponent },
                                { path: 'about', component: about_component_1.AboutComponent },
                            ]),
                            store_1.StoreModule.provideStore({ state: state_reducer_1.stateReducer }),
                            ng2_sharebuttons_1.ShareButtonsModule
                        ],
                        providers: [
                            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                            puzzle_service_1.PuzzleService
                        ],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map