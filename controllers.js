var UrbanTrend;
(function (UrbanTrend) {
    var Controllers;
    (function (Controllers) {
        var HomeController = /** @class */ (function () {
            function HomeController() {
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AboutController = /** @class */ (function () {
            function AboutController() {
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
        var MenuController = /** @class */ (function () {
            function MenuController($http, $state) {
                var _this = this;
                this.$state = $state;
                $http.get('/api/items').then(function (response) {
                    _this.items = response.data;
                });
                $http.get("/api/categories").then(function (response) {
                    _this.categories = response.data;
                });
            }
            return MenuController;
        }());
        Controllers.MenuController = MenuController;
        var ContactController = /** @class */ (function () {
            function ContactController($http, $state) {
                var _this = this;
                this.$http = $http;
                this.$state = $state;
                $http.get('/api/contacts').then(function (response) {
                    _this.contacts = response.data;
                });
            }
            ContactController.prototype.addContact = function () {
                var _this = this;
                this.$http.post('/api/contacts', this.contacts).then(function (res) {
                    _this.$state.reload();
                });
            };
            return ContactController;
        }());
        Controllers.ContactController = ContactController;
        var OrderController = /** @class */ (function () {
            function OrderController($http, $state) {
                var _this = this;
                this.$http = $http;
                this.$state = $state;
                $http.get('/api/items').then(function (response) {
                    _this.items = response.data;
                });
                $http.get("/api/categories").then(function (response) {
                    _this.categories = response.data;
                });
            }
            OrderController.prototype.addItem = function () {
                var _this = this;
                this.$http.post('/api/items', this.item).then(function (res) {
                    _this.$state.reload();
                });
            };
            return OrderController;
        }());
        Controllers.OrderController = OrderController;
        var AppetizersController = /** @class */ (function () {
            function AppetizersController($stateParams, $http, $state) {
                var _this = this;
                this.$stateParams = $stateParams;
                this.$http = $http;
                this.$state = $state;
                var ItemId = this.$stateParams['id'];
                $http.get('/api/items/appetizer').then(function (response) {
                    if (response.status == 200) {
                        _this.items = response.data;
                    }
                    else {
                        console.error("AHHHH the API doesnt work!");
                    }
                });
                $http.get("/api/categories").then(function (response) {
                    _this.categories = response.data;
                });
            }
            AppetizersController.prototype.addItem = function () {
                var _this = this;
                this.$http.post('/api/items', this.item).then(function (res) {
                    _this.$state.reload();
                });
            };
            AppetizersController.prototype.deleteItem = function (id) {
                var _this = this;
                this.$http.delete('/api/items/' + id).then(function (res) {
                    _this.$state.reload();
                });
            };
            AppetizersController.prototype.editItem = function () {
                var _this = this;
                this.$http.post('/api/items/', this.item).then(function (res) {
                    _this.$state.reload();
                });
            };
            return AppetizersController;
        }());
        Controllers.AppetizersController = AppetizersController;
        var EditAppetizerController = /** @class */ (function () {
            function EditAppetizerController($stateParams, $http, $state) {
                var _this = this;
                this.$stateParams = $stateParams;
                this.$http = $http;
                this.$state = $state;
                var ItemId = this.$stateParams['id'];
                $http.get('/api/items/appetizer' + ItemId).then(function (response) {
                    _this.items = response.data;
                });
                $http.get("/api/categories").then(function (response) {
                    _this.categories = response.data;
                });
            }
            EditAppetizerController.prototype.editItem = function () {
                var _this = this;
                this.$http.post('/api/items/appetizer', this.item).then(function (res) {
                    _this.$state.go('appetizers');
                });
            };
            return EditAppetizerController;
        }());
        Controllers.EditAppetizerController = EditAppetizerController;
        var SoupsController = /** @class */ (function () {
            function SoupsController($http, $state) {
                var _this = this;
                this.$http = $http;
                this.$state = $state;
                $http.get('/api/items/soup').then(function (response) {
                    _this.items = response.data;
                });
                $http.get("/api/categories").then(function (response) {
                    _this.categories = response.data;
                });
            }
            SoupsController.prototype.addItem = function () {
                var _this = this;
                this.$http.post('/api/items', this.item).then(function (res) {
                    _this.$state.reload();
                });
            };
            return SoupsController;
        }());
        Controllers.SoupsController = SoupsController;
        var SaladsController = /** @class */ (function () {
            function SaladsController($http, $state) {
                var _this = this;
                this.$http = $http;
                this.$state = $state;
                $http.get('/api/items/salad').then(function (response) {
                    _this.items = response.data;
                });
                $http.get("/api/categories").then(function (response) {
                    _this.categories = response.data;
                });
            }
            SaladsController.prototype.addItem = function () {
                var _this = this;
                this.$http.post('/api/items', this.item).then(function (res) {
                    _this.$state.reload();
                });
            };
            return SaladsController;
        }());
        Controllers.SaladsController = SaladsController;
        var EntreesController = /** @class */ (function () {
            function EntreesController($http, $state) {
                var _this = this;
                this.$http = $http;
                this.$state = $state;
                $http.get('/api/items/entree').then(function (response) {
                    _this.items = response.data;
                });
                $http.get("/api/categories").then(function (response) {
                    _this.categories = response.data;
                });
            }
            EntreesController.prototype.addItem = function () {
                var _this = this;
                this.$http.post('/api/items', this.item).then(function (res) {
                    _this.$state.reload();
                });
            };
            return EntreesController;
        }());
        Controllers.EntreesController = EntreesController;
        var BeveragesController = /** @class */ (function () {
            function BeveragesController($http, $state) {
                var _this = this;
                this.$http = $http;
                this.$state = $state;
                $http.get('/api/items/beverage').then(function (response) {
                    _this.items = response.data;
                });
                $http.get("/api/categories").then(function (response) {
                    _this.categories = response.data;
                });
            }
            BeveragesController.prototype.addItem = function () {
                var _this = this;
                this.$http.post('/api/items', this.item).then(function (res) {
                    _this.$state.reload();
                });
            };
            return BeveragesController;
        }());
        Controllers.BeveragesController = BeveragesController;
        var DessertsController = /** @class */ (function () {
            function DessertsController($http, $state) {
                var _this = this;
                this.$http = $http;
                this.$state = $state;
                $http.get('/api/items/dessert').then(function (response) {
                    _this.items = response.data;
                });
                $http.get("/api/categories").then(function (response) {
                    _this.categories = response.data;
                });
            }
            DessertsController.prototype.addItem = function () {
                var _this = this;
                this.$http.post('/api/items', this.item).then(function (res) {
                    _this.$state.reload();
                });
            };
            return DessertsController;
        }());
        Controllers.DessertsController = DessertsController;
        var SecretController = /** @class */ (function () {
            function SecretController($http) {
                var _this = this;
                $http.get('/api/secrets').then(function (results) {
                    _this.secrets = results.data;
                });
            }
            return SecretController;
        }());
        Controllers.SecretController = SecretController;
    })(Controllers = UrbanTrend.Controllers || (UrbanTrend.Controllers = {}));
})(UrbanTrend || (UrbanTrend = {}));
//# sourceMappingURL=controllers.js.map