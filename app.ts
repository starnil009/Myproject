namespace UrbanTrend {

    angular.module('UrbanTrend', ['ui.router', 'ngResource', 'ui.bootstrap', 'ngMaterial', 'ngMessages', "ngAnimate"]).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: UrbanTrend.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: UrbanTrend.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: '/ngApp/views/contact.html',
                controller: UrbanTrend.Controllers.ContactController,
                controllerAs: 'controller'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/ngApp/views/login.html',
                controller: UrbanTrend.Controllers.LoginController,
                controllerAs: 'controller'

            })
            .state('signup', {
                url: '/signup',
                templateUrl: '/ngApp/views/signup.html',
                controller: UrbanTrend.Controllers.SecretController,
                controllerAs: 'controller'

            })
            .state(`menu`, {
                url: `/menu`,
                templateUrl: `/ngApp/views/menu.html`,
                controller: UrbanTrend.Controllers.MenuController,
                controllerAs: `controller`
            })
            .state(`appetizers`, {
                url: `/appetizers`,
                templateUrl: `/ngApp/views/appetizers.html`,
                controller: UrbanTrend.Controllers.AppetizersController,
                controllerAs: `controller`
            })
            .state(`editappetizer`, {
                url: `/editappetizer/:id`,
                templateUrl: `/ngApp/views/editappetizer.html`,
                controller: UrbanTrend.Controllers.EditAppetizerController,
                controllerAs: `controller`
            })
            .state(`soups`, {
                url: `/soups`,
                templateUrl: `/ngApp/views/soups.html`,
                controller: UrbanTrend.Controllers.SoupsController,
                controllerAs: `controller`
            })
            .state(`salads`, {
                url: `/salads`,
                templateUrl: `/ngApp/views/salads.html`,
                controller: UrbanTrend.Controllers.SaladsController,
                controllerAs: `controller`
            })
            .state(`desserts`, {
                url: `/desserts`,
                templateUrl: `/ngApp/views/desserts.html`,
                controller: UrbanTrend.Controllers.DessertsController,
                controllerAs: `controller`
            })
            .state(`beverages`, {
                url: '/beverages',
                templateUrl: `/ngApp/views/beverages.html`,
                controller: UrbanTrend.Controllers.BeveragesController,
                controllerAs: `controller`

            })
            .state(`order`, {
                url: `/order`,
                templateUrl: `/ngApp/views/order.html`,
                controller: UrbanTrend.Controllers.OrderController,
                controllerAs: `controller`
            })
            .state(`entrees`, {
                url: `/entrees`,
                templateUrl: `/ngApp/views/entrees.html`,
                controller: UrbanTrend.Controllers.EntreesController,
                controllerAs: `controller`


            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



    angular.module('UrbanTrend').factory('authInterceptor', (
        $q: ng.IQService,
        $window: ng.IWindowService,
        $location: ng.ILocationService
    ) =>
        ({
            request: function (config) {
                config.headers = config.headers || {};
                config.headers['X-Requested-With'] = 'XMLHttpRequest';
                return config;
            },
            responseError: function (rejection) {
                if (rejection.status === 401 || rejection.status === 403) {
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }
        })
    );

    angular.module('UrbanTrend').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });

}
