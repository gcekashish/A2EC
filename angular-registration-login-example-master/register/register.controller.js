(function () {
    'use strict';

    angular
        .module('app')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    function RegisterController(UserService, $location, $rootScope, FlashService) {
        var vm = this;

        vm.register = register;

        function register() {
            vm.dataLoading = true;
            UserService.Create(vm.user)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Registration successful', true);
                        
                        var username = vm.user.username;
                        var email = vm.user.email;
                        var dname = vm.user.dname;
                        var dmake = vm.user.dmake;
                        var dsn = vm.user.dsn;
                        var dstatus = vm.user.dstatus;
                        var dlocation = vm.user.dlocation;
                        
                        console.log(username);
                        console.log(email);
                        console.log(dname);
                        console.log(dmake);
                        console.log(dsn);
                        console.log(dstatus);
                        console.log(dlocation);

                        fetch('http://127.0.0.1:3005/produceKafkaMessage/'+username+'/'+email+'/'+dname+'/'+dmake+'/'+dsn+'/'+dstatus+'/'+dlocation)
                        .then(function (response) {
                            console.log(response);
                          })
                         .catch(function (error) {
                            console.log("Error: " + error);
                          });

                        $location.path('/login');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
    }

})();
