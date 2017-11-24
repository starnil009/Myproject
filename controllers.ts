namespace UrbanTrend.Controllers {

    export class HomeController {
        public Signup;
        public carouselslide;
    }



    export class AboutController {
    }


    export class MenuController {
        public items;
        public categories;
        public item;


        constructor($http: ng.IHttpService, private $state: ng.ui.IStateService) {
            $http.get('/api/items').then((response) => {
                this.items = response.data;
            });
            $http.get(`/api/categories`).then((response) => {
                this.categories = response.data;
            });
        }
    }

    export class ContactController {
        public contacts;
        public contact;

        public addContact() {
            this.$http.post('/api/contacts', this.contacts).then((res) => {
                this.$state.reload();
            });
        }

        constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService) {
            $http.get('/api/contacts').then((response) => {
                this.contacts = response.data;
            });
        }
    }
    export class OrderController {
        public customers;
        public categories;
        public item;
        public items;

        public addItem() {
            this.$http.post('/api/items', this.item).then((res) => {
                this.$state.reload();
            });
        }
        constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService) {
            $http.get('/api/items').then((response) => {
                this.items = response.data;
            });
            $http.get(`/api/categories`).then((response) => {
                this.categories = response.data;
            });
        }
    }
    export class AppetizersController {
        public items;
        public categories;
        public item;
        public appetizers;

        public addItem() {
            this.$http.post('/api/items', this.item).then((res) => {
                this.$state.reload();
            })
        }
        public deleteItem(id: number) {
            this.$http.delete('/api/items/'+ id).then((res) => {
                this.$state.reload();
            })
        }
        public editItem() {
            this.$http.post('/api/items/' , this.item).then((res) => {
                this.$state.reload();
            })
        }

        constructor(private $stateParams: ng.ui.IStateParamsService, private $http: ng.IHttpService, private $state: ng.ui.IStateService) {
            let ItemId = this.$stateParams['id'];
            $http.get('/api/items/appetizer').then((response) => {
                if (response.status == 200) {
                    this.items = response.data;
                }
                else {
                    console.error("AHHHH the API doesnt work!");
                }
            });
            $http.get(`/api/categories`).then((response) => {
                this.categories = response.data;

            });
        }
    }
    export class EditAppetizerController {
        public items;
        public categories;
        public item;
        public appetizer;

        public editItem() {
            this.$http.post('/api/items/appetizer', this.item).then((res) => {
                this.$state.go('appetizers');
            })
        }
        constructor(private $stateParams: ng.ui.IStateParamsService, private $http: ng.IHttpService, private $state: ng.ui.IStateService) {
            let ItemId = this.$stateParams['id'];
            $http.get('/api/items/appetizer'+ ItemId).then((response) => {
                this.items = response.data;

            });
            $http.get(`/api/categories`).then((response) => {
                this.categories = response.data;

            });
        }
    }

    export class SoupsController {
        public categories;
        public items;
        public item;
        public soup;

        public addItem() {
            this.$http.post('/api/items', this.item).then((res) => {
                this.$state.reload();
            })
        }

        constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService) {
            $http.get('/api/items/soup').then((response) => {
                this.items = response.data;
            });
            $http.get(`/api/categories`).then((response) => {
                this.categories = response.data;
            });
        }
    }

    export class SaladsController {
        public items;
        public categories;
        public salad;
        public item;

        public addItem() {
            this.$http.post('/api/items', this.item).then((res) => {
                this.$state.reload();
            })
        }


        constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService) {
            $http.get('/api/items/salad').then((response) => {
                this.items = response.data;
            });
            $http.get(`/api/categories`).then((response) => {
                this.categories = response.data;
            });
        }
    }

    export class EntreesController {
        public items;
        public categories;
        public entree;
        public item;

        public addItem() {
            this.$http.post('/api/items', this.item).then((res) => {
                this.$state.reload();
            })
        }

        constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService) {
            $http.get('/api/items/entree').then((response) => {
                this.items = response.data;
            });
            $http.get(`/api/categories`).then((response) => {
                this.categories = response.data;
            });
        }
    }
    export class BeveragesController {
        public items;
        public categories;
        public beverage;
        public item;

        public addItem() {
            this.$http.post('/api/items', this.item).then((res) => {
                this.$state.reload();
            })
        }

        constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService) {
            $http.get('/api/items/beverage').then((response) => {
                this.items = response.data;
            });

            $http.get(`/api/categories`).then((response) => {
                this.categories = response.data;
            });
        }
    }
    export class DessertsController {
        public items;
        public categories;
        public dessert;
        public item;

        public addItem() {
            this.$http.post('/api/items', this.item).then((res) => {
                this.$state.reload();
            })
        }


        constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService) {
            $http.get('/api/items/dessert').then((response) => {
                this.items = response.data;
            });

            $http.get(`/api/categories`).then((response) => {
                this.categories = response.data;
            });
        }

    }

    export class SecretController {
        public secrets;

        constructor($http: ng.IHttpService) {
            $http.get('/api/secrets').then((results) => {
                this.secrets = results.data;
            });
        }
    }

}


