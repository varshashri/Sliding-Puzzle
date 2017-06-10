System.register(['@angular/core', '../tile/tile.class', "../puzzleTile/puzzle-tile.class", "@ngrx/store"], function(exports_1, context_1) {
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
    var core_1, tile_class_1, puzzle_tile_class_1, store_1;
    var PuzzleService, shuffleArray, isSolvable, highlightTile, prefixPath;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tile_class_1_1) {
                tile_class_1 = tile_class_1_1;
            },
            function (puzzle_tile_class_1_1) {
                puzzle_tile_class_1 = puzzle_tile_class_1_1;
            },
            function (store_1_1) {
                store_1 = store_1_1;
            }],
        execute: function() {
            PuzzleService = (function () {
                function PuzzleService(store) {
                    this.store = store;
                    this._prepTiles = [];
                    this.images = [
                        prefixPath('../../assets/fish.jpg'),
                    ];
                }
                PuzzleService.prototype.initialize = function () {
                    this.puzzleImage = this.images[0];
                    /** prepare the goal state with indexes and proper locations */
                    var tileIndex = 0;
                    for (var x = 0; x < 3; x++)
                        for (var y = 0; y < 3; y++)
                            this._prepTiles.push(new tile_class_1.Tile(++tileIndex, new tile_class_1.Location(this.tileSize * x, this.tileSize * y)));
                    this.mapTiles();
                };
                PuzzleService.prototype.mapTiles = function () {
                    var _this = this;
                    /** fill tiles with locations */
                    this.tiles = [];
                    this._prepTiles.map(function (tile) {
                        _this.tiles.push(new puzzle_tile_class_1.PuzzleTile(tile));
                    });
                    this.updateState();
                };
                /** Update puzzle state */
                PuzzleService.prototype.updateState = function () {
                    this.store.dispatch({
                        payload: {
                            tiles: this.tiles,
                            goal: this._goalTest(),
                            image: this.puzzleImage,
                            tileSize: this.tileSize
                        }, type: ''
                    });
                };
                /** Update puzzle image */
                PuzzleService.prototype.updateImage = function (index) {
                    this.puzzleImage = this.images[index];
                    this.updateState();
                };
                /** Move a tile */
                PuzzleService.prototype.move = function (tile) {
                    var blank = this._getBlankTile();
                    var blankLoc = this._getBlankTile().current.location;
                    var tileLoc = tile.current.location;
                    /** Check Horizontally */
                    if (tileLoc.top === blankLoc.top) {
                        if (tileLoc.left - blankLoc.left === this.tileSize) {
                            console.log('Left');
                        }
                        else if (blankLoc.left - tileLoc.left === this.tileSize) {
                            console.log('Right');
                        }
                        else {
                            console.log("Can't move this, too far");
                            return;
                        }
                    }
                    else if (tileLoc.left === blankLoc.left) {
                        if (tileLoc.top - blankLoc.top === this.tileSize) {
                            console.log('Top');
                        }
                        else if (blankLoc.top - tileLoc.top === this.tileSize) {
                            console.log('Bottom');
                        }
                    }
                    var temp = tile.current;
                    tile.current = blank.current;
                    blank.current = temp;
                    this.updateState();
                };
                PuzzleService.prototype.solve = function () {
                    // this._getAvailableTiles();
                    this.solve = function () {
                        var tiles = [];
                        this.traverse(function (tile) {
                            tiles.push(tile);
                        });
                        tiles.sort(function (x, y) {
                            return (x.id - y.id);
                        });
                        this.traverse(function (tile, x, y) {
                            this.tile[x][y] = tiles.shift();
                        });
                    };
                };
                /** Get a new solvable puzzle  */
                PuzzleService.prototype.shuffle = function () {
                    var _this = this;
                    this._prepTiles = shuffleArray(this._prepTiles);
                    if (!isSolvable(this._prepTiles)) {
                        this.shuffle();
                        return;
                    }
                    this._prepTiles.map(function (tile, i) {
                        _this.tiles[i].current = _this._prepTiles[i];
                    });
                    this.updateState();
                };
                /** Get blank tile  */
                PuzzleService.prototype._getBlankTile = function () {
                    return this.tiles[8];
                };
                /** Check if the game is over */
                PuzzleService.prototype._goalTest = function () {
                    for (var _i = 0, _a = this.tiles; _i < _a.length; _i++) {
                        var tile = _a[_i];
                        var goal = tile.isGoal();
                        if (!goal) {
                            return false;
                        }
                    }
                    return true;
                };
                /** Get movable tiles */
                PuzzleService.prototype._getAvailableTiles = function () {
                    var blank = this._getBlankTile();
                    var blankLoc = blank.current.location;
                    var availableTiles = [];
                    /** Horizontal availability */
                    if (blankLoc.left === this.tileSize) {
                        //left & right
                        availableTiles.push(this._getTileByLoc(blankLoc.left - this.tileSize, blankLoc.top));
                        availableTiles.push(this._getTileByLoc(blankLoc.left + this.tileSize, blankLoc.top));
                    }
                    else if (blankLoc.left < this.tileSize) {
                        //right
                        availableTiles.push(this._getTileByLoc(blankLoc.left + this.tileSize, blankLoc.top));
                    }
                    else {
                        //left
                        availableTiles.push(this._getTileByLoc(blankLoc.left - this.tileSize, blankLoc.top));
                    }
                    /** Vertical availability */
                    if (blankLoc.top === this.tileSize) {
                        //top & bottom
                        availableTiles.push(this._getTileByLoc(blankLoc.left, blankLoc.top - this.tileSize));
                        availableTiles.push(this._getTileByLoc(blankLoc.left, blankLoc.top + this.tileSize));
                    }
                    else if (blankLoc.top < this.tileSize) {
                        //bottom
                        availableTiles.push(this._getTileByLoc(blankLoc.left, blankLoc.top + this.tileSize));
                    }
                    else {
                        //top
                        availableTiles.push(this._getTileByLoc(blankLoc.left, blankLoc.top - this.tileSize));
                    }
                    highlightTile(availableTiles);
                    return availableTiles;
                };
                /** Get a tile by location  */
                PuzzleService.prototype._getTileByLoc = function (left, top) {
                    return this.tiles[this.tiles.map(function (e) {
                        return e.current.location.left === left && e.current.location.top === top;
                    }).indexOf(true)];
                };
                /** A* Algorithm */
                PuzzleService.prototype.aStar = function () {
                    while (!this._goalTest()) {
                        for (var _i = 0, _a = this._getAvailableTiles(); _i < _a.length; _i++) {
                            var tile = _a[_i];
                        }
                    }
                    // while(openList is not empty) {
                    // * currentNode = pop from openHeap
                    //   if currentNode is final, return the successful path
                    //   * set currentNode as closed
                    //   foreach neighbor of currentNode {
                    //   * if neighbor is not set visited {
                    //     * save g, h, and f then save the current parent and set visited
                    //       * add neighbor to openHeap
                    //     }
                    //     if neighbor is in openList but the current g is better than previous g {
                    //       save g and f, then save the current parent
                    //       * reset position in openHeap (since f changed)
                    //     }
                    //   }
                };
                PuzzleService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof store_1.Store !== 'undefined' && store_1.Store) === 'function' && _a) || Object])
                ], PuzzleService);
                return PuzzleService;
                var _a;
            }());
            exports_1("PuzzleService", PuzzleService);
            /** Randomize array elements order */
            shuffleArray = function (array) {
                var currentIndex = array.length, temporaryValue, randomIndex;
                while (0 !== currentIndex) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }
                return array;
            };
            /** Check if a puzzle is solvable */
            isSolvable = function (arr) {
                var invCount = 0;
                for (var i = 0; i < arr.length - 1; i++)
                    for (var j = i + 1; j < arr.length - 1; j++)
                        if (arr[j].index > arr[i].index)
                            invCount++;
                return invCount % 2 == 0;
            };
            /** Highlight or log available tiles to move */
            highlightTile = function (availableTiles) {
                console.log("Tiles to switch");
                availableTiles.map(function (e) {
                    console.log(e.goal.index + " ");
                });
            };
            /** prefix repo path for deploying purpose only */
            prefixPath = function (path) {
                return '8puzzle' + path;
            };
        }
    }
});
//# sourceMappingURL=puzzle.service.js.map