var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-framework", "./resources/data", "./resources/common", "./resources/mock", "bluebird"], function (require, exports, aurelia_framework_1, data_1, common_1, mock_1, bluebird_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(_data, _mock, _common, _taskQ) {
            var _this = this;
            this._data = _data;
            this._mock = _mock;
            this._common = _common;
            this._taskQ = _taskQ;
            this.isLoaded = false;
            this.isLoading = false;
            this.isInSaveProcess = true;
            this.currentErrorMessage = '';
            this.strMessage = "";
            this.closeError = function () {
                _this.currentErrorMessage = '';
            };
            this.Save = function () {
                if (_this.common.validateInputs('default')) {
                    _this.isLoading = true;
                }
                else {
                    console.log('@@@@@ Form Invalid');
                }
            };
            this.data = _data;
            this.mock = _mock;
            this.common = _common;
            this.taskQueue = _taskQ;
            this.currentErrorMessage = '';
            console.log('Constructor Firing');
            bluebird_1.Promise.join(this.loadData())
                .then(function (results) {
            }).catch(function (err) {
                console.log('Constructor: Catching error after promise in constructor.');
                _this.currentErrorMessage = err;
            });
        }
        App.prototype.loadData = function () {
            var _this = this;
            return new bluebird_1.Promise(function (resolve, reject) {
                if (window["MDB"].isTest) {
                    console.log('Loading Mock Data');
                    _this.isLoading = true;
                    _this.isLoaded = true;
                    _this.isLoading = false;
                    resolve("success");
                }
                else {
                    _this.isLoading = true;
                }
            });
        };
        App.prototype.attached = function () {
        };
        App = __decorate([
            aurelia_framework_1.inject(data_1.Data, mock_1.Mock, common_1.Common, aurelia_framework_1.TaskQueue),
            __metadata("design:paramtypes", [data_1.Data, mock_1.Mock, common_1.Common, aurelia_framework_1.TaskQueue])
        ], App);
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFZQTtRQVlFLGFBQW9CLEtBQVcsRUFBVSxLQUFXLEVBQVUsT0FBZSxFQUFVLE1BQWlCO1lBQXhHLGlCQWtCQztZQWxCbUIsVUFBSyxHQUFMLEtBQUssQ0FBTTtZQUFVLFVBQUssR0FBTCxLQUFLLENBQU07WUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO1lBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBVztZQVA5RixhQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ2pCLGNBQVMsR0FBWSxLQUFLLENBQUM7WUFDM0Isb0JBQWUsR0FBWSxJQUFJLENBQUM7WUFDaEMsd0JBQW1CLEdBQVcsRUFBRSxDQUFDO1lBRWpDLGVBQVUsR0FBVyxFQUFFLENBQUM7WUEyQzNCLGVBQVUsR0FBRztnQkFDbEIsS0FBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztZQUNoQyxDQUFDLENBQUE7WUFHTSxTQUFJLEdBQUc7Z0JBQ1osSUFBRyxLQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFFeEMsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7aUJBRXZCO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztpQkFDbkM7WUFDSCxDQUFDLENBQUE7WUFyREMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7WUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7WUFDeEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztZQUU5QixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFFbEMsa0JBQU8sQ0FBQyxJQUFJLENBQ1YsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUNoQjtpQkFDQSxJQUFJLENBQUMsVUFBQyxPQUFZO1lBRW5CLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQywyREFBMkQsQ0FBQyxDQUFDO2dCQUN6RSxLQUFJLENBQUMsbUJBQW1CLEdBQUcsR0FBRyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVNLHNCQUFRLEdBQWY7WUFBQSxpQkFlQztZQWRDLE9BQU8sSUFBSSxrQkFBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQ2pDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRTtvQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO29CQUNqQyxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFJdEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3JCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO29CQUN2QixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ3BCO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2lCQUN2QjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUdNLHNCQUFRLEdBQWY7UUFDQSxDQUFDO1FBbkRVLEdBQUc7WUFEZiwwQkFBTSxDQUFDLFdBQUksRUFBRSxXQUFJLEVBQUUsZUFBTSxFQUFFLDZCQUFTLENBQUM7NkNBYVQsV0FBSSxFQUFpQixXQUFJLEVBQW1CLGVBQU0sRUFBa0IsNkJBQVM7V0FaN0YsR0FBRyxDQW1FZjtRQUFELFVBQUM7S0FuRUQsQUFtRUMsSUFBQTtJQW5FWSxrQkFBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIFRhc2tRdWV1ZSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQge0RhdGF9IGZyb20gXCIuL3Jlc291cmNlcy9kYXRhXCI7XHJcbmltcG9ydCB7Q29tbW9ufSBmcm9tIFwiLi9yZXNvdXJjZXMvY29tbW9uXCI7XHJcbmltcG9ydCB7TW9ja30gZnJvbSBcIi4vcmVzb3VyY2VzL21vY2tcIjtcclxuaW1wb3J0IHtQcm9taXNlfSBmcm9tIFwiYmx1ZWJpcmRcIjtcclxuaW1wb3J0IHtJZE5hbWV9IGZyb20gXCIuL2NsYXNzZXMvZGF0YS1jbGFzc2VzXCI7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQge0N1c3RvbUVycm9yfSBmcm9tICcuL2NsYXNzZXMvZXJyb3InO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tIFwidHlwZXNjcmlwdFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbkBpbmplY3QoRGF0YSwgTW9jaywgQ29tbW9uLCBUYXNrUXVldWUpXHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG4gICAgcHJpdmF0ZSBkYXRhOiBEYXRhO1xyXG4gICAgcHJpdmF0ZSBtb2NrOiBNb2NrO1xyXG4gICAgcHJpdmF0ZSBjb21tb246IENvbW1vbjtcclxuICAgIHByaXZhdGUgdGFza1F1ZXVlOiBUYXNrUXVldWU7XHJcbiAgICBwcml2YXRlIGlzTG9hZGVkID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc0luU2F2ZVByb2Nlc3M6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50RXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBwcml2YXRlIHN0ck1lc3NhZ2U6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGE6IERhdGEsIHByaXZhdGUgX21vY2s6IE1vY2ssIHByaXZhdGUgX2NvbW1vbjogQ29tbW9uLCBwcml2YXRlIF90YXNrUTogVGFza1F1ZXVlKXtcclxuICAgIHRoaXMuZGF0YSA9IF9kYXRhO1xyXG4gICAgdGhpcy5tb2NrID0gX21vY2s7XHJcbiAgICB0aGlzLmNvbW1vbiA9IF9jb21tb247XHJcbiAgICB0aGlzLnRhc2tRdWV1ZSA9IF90YXNrUTtcclxuICAgIHRoaXMuY3VycmVudEVycm9yTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdDb25zdHJ1Y3RvciBGaXJpbmcnKTtcclxuICAgIC8vIExvYWQgaW5pdGlhbCBwYWdlIGRhdGEgaW4gcHJvbWlzZVxyXG4gICAgUHJvbWlzZS5qb2luKFxyXG4gICAgICB0aGlzLmxvYWREYXRhKCksXHJcbiAgICApXHJcbiAgICAudGhlbigocmVzdWx0czogYW55KSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdAQEBAIFRoaXMgTG9hZCBEYXRhJywgdGhpcyk7XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdDb25zdHJ1Y3RvcjogQ2F0Y2hpbmcgZXJyb3IgYWZ0ZXIgcHJvbWlzZSBpbiBjb25zdHJ1Y3Rvci4nKTtcclxuICAgICAgdGhpcy5jdXJyZW50RXJyb3JNZXNzYWdlID0gZXJyOyAgICAgIFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIHB1YmxpYyBsb2FkRGF0YSgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3dbXCJNREJcIl0uaXNUZXN0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0xvYWRpbmcgTW9jayBEYXRhJyk7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlOyAgICAgIFxyXG4gICAgICAgIC8vIExPQUQgTU9DSyBEQVRBXHJcbiAgICAgIFxyXG4gICAgICAgIC8vIFRoaXMgd2lsbCBtYWtlIHRoZSBsb2FkaW5nIGljb24gZ28gYXdheSBhbmQgdW5ibG9jayB0aGUgVUlcclxuICAgICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJlc29sdmUoXCJzdWNjZXNzXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBUaGlzIGlzIGNhbGxlZCBvbmNlIHRoZSBVSSBpcyBmdWxseSBhdHRhY2hlZFxyXG4gIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZUVycm9yID0gKCkgPT4ge1xyXG4gICAgdGhpcy5jdXJyZW50RXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgfVxyXG5cclxuICAvLyBUaGlzIGlzIHRoZSBzYXZlIGZ1bmN0aW9uIGZvciB0aGUgRm9ybSwgcnVucyBpbiBQcm9taXNlIEFzeW5jXHJcbiAgcHVibGljIFNhdmUgPSAoKSA9PiB7XHJcbiAgICBpZih0aGlzLmNvbW1vbi52YWxpZGF0ZUlucHV0cygnZGVmYXVsdCcpKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdAQEBAQCBGb3JtIFZhbGlkJyk7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnQEBAQEAgRm9ybSBJbnZhbGlkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgZGVidWc6IHRydWUsXHJcbiAgdGVzdGluZzogdHJ1ZVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLElBQUkscUJBQVcsQ0FBQyxLQUFLLEVBQUU7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQ2xDO1FBRUQsSUFBSSxxQkFBVyxDQUFDLE9BQU8sRUFBRTtZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQWRELDhCQWNDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1cmVsaWF9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJ1xyXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWE6IEF1cmVsaWEpIHtcclxuICBhdXJlbGlhLnVzZVxyXG4gICAgLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpXHJcbiAgICAuZmVhdHVyZSgncmVzb3VyY2VzJyk7XHJcblxyXG4gIGlmIChlbnZpcm9ubWVudC5kZWJ1Zykge1xyXG4gICAgYXVyZWxpYS51c2UuZGV2ZWxvcG1lbnRMb2dnaW5nKCk7XHJcbiAgfVxyXG5cclxuICBpZiAoZW52aXJvbm1lbnQudGVzdGluZykge1xyXG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcclxuICB9XHJcblxyXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('classes/data-classes',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IdName = (function () {
        function IdName() {
        }
        return IdName;
    }());
    exports.IdName = IdName;
    var Case = (function () {
        function Case() {
        }
        return Case;
    }());
    exports.Case = Case;
    var Account = (function () {
        function Account() {
        }
        return Account;
    }());
    exports.Account = Account;
    var Project = (function () {
        function Project() {
        }
        return Project;
    }());
    exports.Project = Project;
    var Owner = (function () {
        function Owner() {
        }
        return Owner;
    }());
    exports.Owner = Owner;
    var Contact = (function () {
        function Contact() {
        }
        return Contact;
    }());
    exports.Contact = Contact;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzZXMvZGF0YS1jbGFzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUtBO1FBQUE7UUFJQSxDQUFDO1FBQUQsYUFBQztJQUFELENBSkEsQUFJQyxJQUFBO0lBSlksd0JBQU07SUFNbkI7UUFBQTtRQW9CQSxDQUFDO1FBQUQsV0FBQztJQUFELENBcEJBLEFBb0JDLElBQUE7SUFwQlksb0JBQUk7SUFzQmpCO1FBQUE7UUFNQSxDQUFDO1FBQUQsY0FBQztJQUFELENBTkEsQUFNQyxJQUFBO0lBTlksMEJBQU87SUFRcEI7UUFBQTtRQW1CQSxDQUFDO1FBQUQsY0FBQztJQUFELENBbkJBLEFBbUJDLElBQUE7SUFuQlksMEJBQU87SUFxQnBCO1FBQUE7UUFLQSxDQUFDO1FBQUQsWUFBQztJQUFELENBTEEsQUFLQyxJQUFBO0lBTFksc0JBQUs7SUFPbEI7UUFBQTtRQVVBLENBQUM7UUFBRCxjQUFDO0lBQUQsQ0FWQSxBQVVDLElBQUE7SUFWWSwwQkFBTyIsImZpbGUiOiJjbGFzc2VzL2RhdGEtY2xhc3Nlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVQRVJNIH0gZnJvbSBcImNvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIEFsbCB0aGUgZGF0YSBjbGFzc2VzIHlvdSBuZWVkIGZvciB0aGUgYXBwLCBzb21lIHBlb3BsZSBtaWdodCBzZXBlcmF0ZSB0aGVzZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBJZE5hbWUge1xyXG4gICAgcHVibGljIGF0dHJpYnV0ZXM/OiBhbnk7XHJcbiAgICBwdWJsaWMgSWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBOYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FzZSB7ICAgXHJcbiAgICBwdWJsaWMgSWQ/OiBzdHJpbmc7IC8vc3RyaW5nXHJcbiAgICBwdWJsaWMgTmFtZT86IHN0cmluZzsgLy9zdHJpbmdcclxuICAgIHB1YmxpYyBSZWNvcmRUeXBlSWQ/OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgQWNjb3VudElkPzogc3RyaW5nO1xyXG4gICAgcHVibGljIENsb3VkX1Byb2plY3RfX2M/OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgUHJvamVjdF9fYz86IHN0cmluZztcclxuICAgIHB1YmxpYyBDb250YWN0SWQ/OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgUHJvZHVjdF9fYz86IHN0cmluZztcclxuICAgIHB1YmxpYyBNb25nb0RCX1ZlcnNpb25fX2M/OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgU3RvcmFnZV9FbmdpbmVfX2M/OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgTGV2ZWxfb2ZfRWZmb3J0X19jPzogc3RyaW5nO1xyXG4gICAgcHVibGljIFJvb3RfQ2F1c2VfX2M/OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgQXV0b2Nsb3NlX0FsbG93ZWRfRGF0ZV9fYz86IG51bWJlcjtcclxuICAgIHB1YmxpYyBTZXZlcml0eV9fYz86IHN0cmluZztcclxuICAgIHB1YmxpYyBTdWJqZWN0Pzogc3RyaW5nO1xyXG4gICAgcHVibGljIERlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gICAgcHVibGljIFJlc29sdXRpb25fX2M/OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgU3RhdHVzPzogc3RyaW5nO1xyXG4gICAgcHVibGljIENvbXBvbmVudHNfX2M/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50IHtcclxuICAgIHB1YmxpYyBhdHRyaWJ1dGVzPzogYW55OyAgICBcclxuICAgIHB1YmxpYyBJZDogc3RyaW5nOyAvL3N0cmluZ1xyXG4gICAgcHVibGljIE5hbWU/OiBzdHJpbmc7IC8vc3RyaW5nXHJcbiAgICBwdWJsaWMgUmVjb3JkVHlwZUlkPzogc3RyaW5nO1xyXG4gICAgcHVibGljIEN1cnJlbmN5SXNvQ29kZT86IHN0cmluZzsgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcclxuICAgIHB1YmxpYyBhdHRyaWJ1dGVzPzogYW55O1xyXG4gICAgcHVibGljIElkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgTmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIEFjY291bnRfX2M/OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgQ3JlYXRlZERhdGU/OiBEYXRlO1xyXG4gICAgcHVibGljIE9uYm9hcmRpbmdfU3RhdHVzX19jPzogc3RyaW5nO1xyXG4gICAgcHVibGljIEN1cnJlbmN5SXNvQ29kZT86IHN0cmluZzsgICAgXHJcbiAgICBwdWJsaWMgVXNlX0Nhc2VfVHlwZV9fYz86IHN0cmluZztcclxuICAgIHB1YmxpYyBVc2VfQ2FzZV9fYz86IHN0cmluZztcclxuICAgIHB1YmxpYyBEZXBhcnRtZW50X19jPzogc3RyaW5nO1xyXG4gICAgcHVibGljIERlc2NyaXB0aW9uX19jPzogc3RyaW5nO1xyXG4gICAgcHVibGljIFZpZXdfSW5fQ2xpZW50aHViX19jPzogc3RyaW5nO1xyXG4gICAgcHVibGljIFN1cHBvcnRfRXhwaXJhdGlvbl9EYXRlX19jPzogRGF0ZTtcclxuICAgIHB1YmxpYyBTdXBwb3J0X1VsdGltYXRlX0RhdGVfX2M/OiBEYXRlOyAgICBcclxuICAgIHB1YmxpYyBTdXBwb3J0RXhwaXJhdGlvbkRhdGVTdHJpbmc/OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgU3VwcG9ydFVsdGltYXRlRGF0ZVN0cmluZz86IHN0cmluZztcclxuICAgIHB1YmxpYyBDdXJyZW50bHlBc3NvY2lhdGVkPzogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBBc3NvY2lhdGU/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT3duZXIge1xyXG4gICAgcHVibGljIGF0dHJpYnV0ZXM/OiBhbnk7ICAgIFxyXG4gICAgcHVibGljIElkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgTmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIEN1cnJlbmN5SXNvQ29kZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRhY3Qge1xyXG4gICAgcHVibGljIElkPzogc3RyaW5nO1xyXG4gICAgcHVibGljIEN1cnJlbmN5SXNvQ29kZT86IHN0cmluZzsgICAgXHJcbiAgICBwdWJsaWMgYXR0cmlidXRlcz86IGFueTsgICAgXHJcbiAgICBwdWJsaWMgTmFtZT86IHN0cmluZztcclxuICAgIHB1YmxpYyBFbWFpbD86IHN0cmluZztcclxuICAgIHB1YmxpYyBSZWNvcmRUeXBlSWQ/OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgQ29tbXVuaXR5X1VzZXJfU3RhdHVzX19jPzogc3RyaW5nO1xyXG4gICAgcHVibGljIEZDUk1fX0ZDUl9TdGF0dXNfX2M/OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgQWNjb3VudD86IEFjY291bnQ7XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('classes/error',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CustomError = (function (_super) {
        __extends(CustomError, _super);
        function CustomError(message, json) {
            var _this = this;
            if (json && json.message) {
                _this = _super.call(this, message + ": " + json.message) || this;
            }
            else {
                _this = _super.call(this, message) || this;
            }
            _this.details = json;
            return _this;
        }
        return CustomError;
    }(Error));
    exports.CustomError = CustomError;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzZXMvZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFBO1FBQWlDLCtCQUFLO1FBR2xDLHFCQUFZLE9BQWUsRUFBRSxJQUFTO1lBQXRDLGlCQU9DO1lBTkcsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDdEIsUUFBQSxrQkFBTSxPQUFPLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBQzthQUN4QztpQkFBTTtnQkFDSCxRQUFBLGtCQUFNLE9BQU8sQ0FBQyxTQUFDO2FBQ2xCO1lBQ0QsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7O1FBQ3hCLENBQUM7UUFDTCxrQkFBQztJQUFELENBWEEsQUFXQyxDQVhnQyxLQUFLLEdBV3JDO0lBWFksa0NBQVciLCJmaWxlIjoiY2xhc3Nlcy9lcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDdXN0b21FcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIGRldGFpbHM6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIGpzb246IGFueSkge1xyXG4gICAgICAgIGlmIChqc29uICYmIGpzb24ubWVzc2FnZSkge1xyXG4gICAgICAgICAgICBzdXBlcihtZXNzYWdlICsgXCI6IFwiICsganNvbi5tZXNzYWdlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kZXRhaWxzID0ganNvbjtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/common',["require", "exports", "aurelia-framework", "../classes/error", "./data"], function (require, exports, aurelia_framework_1, error_1, data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Common = (function () {
        function Common(_taskQ, _data) {
            var _this = this;
            this._taskQ = _taskQ;
            this._data = _data;
            this.globalInputClearFunctions = {};
            this.globalValidationFunctions = {};
            this.errorHandler = function (e) {
                console.log("*** Error Handler: ");
                console.log(e);
                if (e.constructor === TypeError) {
                    e = new error_1.CustomError(e.message, { errorCode: e.message, message: e.stack, name: "TypeError" });
                }
                if (e.faultcode == "sf:INVALID_SESSION_ID") {
                    e = new error_1.CustomError(e.faultstring, { errorCode: e.faultcode, message: e.detail, name: "Bad Session" });
                    _this.data.criticalErrors.push(e);
                    location.reload();
                }
            };
            this.getParams = function (query) {
                if (!query) {
                    return {};
                }
                return (/^[?#]/.test(query) ? query.slice(1) : query)
                    .split("&")
                    .reduce(function (params, param) {
                    var _a = param.split("="), key = _a[0], value = _a[1];
                    params[key] = value ? decodeURIComponent(value.replace(/\+/g, " ")) : "";
                    return params;
                }, {});
            };
            this.taskQueue = _taskQ;
            this.data = _data;
        }
        Common.prototype.clearInputs = function (formName, clearOnlyValidation) {
            if (clearOnlyValidation === void 0) { clearOnlyValidation = null; }
            if (clearOnlyValidation == null) {
                clearOnlyValidation = false;
            }
            if (!formName) {
                formName = "default";
            }
            if (this.globalInputClearFunctions[formName]) {
                this.globalInputClearFunctions[formName].forEach(function (f) { f(clearOnlyValidation); });
            }
        };
        Common.prototype.validateInputs = function (formName) {
            if (!formName) {
                formName = "default";
            }
            var isValid = true;
            if (this.globalValidationFunctions[formName]) {
                this.globalValidationFunctions[formName].forEach(function (f) {
                    if (!f()) {
                        isValid = false;
                    }
                });
            }
            if (!isValid) {
                this.taskQueue.queueMicroTask(function () {
                    var list = document.getElementsByClassName("has-danger");
                    if (list.length) {
                        scrollTo(0, list[0].offsetTop - 60);
                    }
                });
            }
            return isValid;
        };
        Common.prototype.mobilecheck = function () {
            var check = false;
            (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge|maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                check = true; })(navigator.userAgent || navigator.vendor || window["opera"]);
            return check;
        };
        Common.prototype.mobileAndTabletcheck = function () {
            var check = false;
            (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge|maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                check = true; })(navigator.userAgent || navigator.vendor || window["opera"]);
            return check;
        };
        Common.prototype.bsRadio = function (e) {
            for (var _i = 0, _a = e.target.parentElement.parentElement.children; _i < _a.length; _i++) {
                var elem = _a[_i];
                elem.classList.remove("active");
                for (var _b = 0, _c = elem.children; _b < _c.length; _b++) {
                    var inp = _c[_b];
                    inp.checked = false;
                }
            }
            e.target.parentElement.classList.add("active");
        };
        Common.prototype.bsCheckbox = function (e) {
            if (e.target.parentElement.classList.contains("active")) {
                e.target.parentElement.classList.remove("active");
            }
            else {
                e.target.parentElement.classList.add("active");
            }
        };
        Common.prototype.isActive = function (obj, val, prop) {
            if (val == null || obj == null) {
                return "";
            }
            else if (obj.constructor === Array && val.constructor === Object && prop) {
                for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
                    var v = obj_1[_i];
                    if (v[prop] === val[prop]) {
                        return "active";
                    }
                }
                return "";
            }
            else if (obj.constructor === Array && val.constructor === Object && !prop) {
                for (var _a = 0, obj_2 = obj; _a < obj_2.length; _a++) {
                    var v = obj_2[_a];
                    if (v === val) {
                        return "active";
                    }
                }
                return "";
            }
            else if (obj.constructor === Array) {
                for (var _b = 0, obj_3 = obj; _b < obj_3.length; _b++) {
                    var v = obj_3[_b];
                    if (v === val) {
                        return "active";
                    }
                }
                return "";
            }
            else if (obj.constructor === Object && val.constructor === Object && prop) {
                if (obj[prop] === val[prop]) {
                    return "active";
                }
                return "";
            }
            else if ((obj.constructor === Number && val.constructor === Number)
                || (obj.constructor === String && val.constructor === String)) {
                if (obj === val) {
                    return "active";
                }
                return "";
            }
            else {
                return "";
            }
        };
        Common.prototype.clearObjectValues = function (objToClear) {
            var _this = this;
            Object.keys(objToClear).forEach(function (param) {
                if (objToClear[param] == null) {
                }
                else if (objToClear[param] != null && (objToClear[param].constructor === Object)) {
                    _this.clearObjectValues(objToClear[param]);
                }
                else if (objToClear[param] === true || objToClear[param] === false) {
                    objToClear[param] = false;
                }
                else if (objToClear[param] != null && (objToClear[param].constructor === Date)) {
                    objToClear[param] = null;
                }
                else {
                    objToClear[param] = "";
                }
            });
            return objToClear;
        };
        Common.prototype.getDependentValues = function (objPicklistValues, selectedIndex) {
            var _this = this;
            var arrayObjPicklistValues = [];
            objPicklistValues.forEach(function (v, i) {
                if (_this.isDependentValue(selectedIndex, v.validFor)) {
                    var objPicklistValue = {
                        index: i,
                        value: v.value
                    };
                    arrayObjPicklistValues.push(objPicklistValue);
                }
            });
            return arrayObjPicklistValues;
        };
        Common.prototype.isDependentValue = function (index, validFor) {
            var decoded = atob(validFor);
            var bits = decoded.charCodeAt(index >> 3);
            return ((bits & (0x80 >> (index % 8))) !== 0);
        };
        Common.prototype.generateGuid = function () {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + "-" + s4() + "-" + s4() + "-" +
                s4() + "-" + s4() + s4() + s4();
        };
        Common.prototype.objectsAreEquivalent = function (a, b) {
            var aProps = Object.getOwnPropertyNames(a);
            var bProps = Object.getOwnPropertyNames(b);
            if (aProps.length != bProps.length) {
                return false;
            }
            for (var i = 0; i < aProps.length; i++) {
                var propName = aProps[i];
                if (a[propName] !== b[propName]) {
                    return false;
                }
            }
            return true;
        };
        Common.prototype.yesNoToBoolean = function (value) {
            var rtnValue = "";
            if (value === "Yes") {
                rtnValue = true;
            }
            else if (value === "No") {
                rtnValue = false;
            }
            else if (value === true) {
                rtnValue = "Yes";
            }
            else if (value === false) {
                rtnValue = "No";
            }
            return rtnValue;
        };
        Common.prototype.getGUID = function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        };
        Common.prototype.getID = function () {
            return 'GENxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        };
        Common = __decorate([
            aurelia_framework_1.inject(aurelia_framework_1.TaskQueue, data_1.Data),
            __metadata("design:paramtypes", [aurelia_framework_1.TaskQueue, data_1.Data])
        ], Common);
        return Common;
    }());
    exports.Common = Common;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ25FLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUE1V1EsTUFBTTtZQURsQiwwQkFBTSxDQUFDLDZCQUFTLEVBQUUsV0FBSSxDQUFDOzZDQVFRLDZCQUFTLEVBQWlCLFdBQUk7V0FQakQsTUFBTSxDQTJYbEI7UUFBRCxhQUFDO0tBM1hELEFBMlhDLElBQUE7SUEzWFksd0JBQU0iLCJmaWxlIjoicmVzb3VyY2VzL2NvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgTG9nTWFuYWdlciwgVGFza1F1ZXVlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEN1c3RvbUVycm9yIH0gZnJvbSBcIi4uL2NsYXNzZXMvZXJyb3JcIjtcclxuaW1wb3J0IHtEYXRhfSBmcm9tIFwiLi9kYXRhXCI7XHJcblxyXG5AaW5qZWN0KFRhc2tRdWV1ZSwgRGF0YSlcclxuZXhwb3J0IGNsYXNzIENvbW1vbiB7XHJcblxyXG4gICAgcHVibGljIHRhc2tRdWV1ZTogVGFza1F1ZXVlO1xyXG4gICAgcHVibGljIGRhdGE6IERhdGE7XHJcbiAgICBwdWJsaWMgZ2xvYmFsSW5wdXRDbGVhckZ1bmN0aW9uczogT2JqZWN0ID0ge307XHJcbiAgICBwdWJsaWMgZ2xvYmFsVmFsaWRhdGlvbkZ1bmN0aW9uczogT2JqZWN0ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdGFza1E6IFRhc2tRdWV1ZSwgcHJpdmF0ZSBfZGF0YTogRGF0YSkge1xyXG4gICAgICAgIHRoaXMudGFza1F1ZXVlID0gX3Rhc2tRO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IF9kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxsIGEtIGVsZW1lbnRzIHdpcmUgdG8gdGhpcyBmdW5jdGlvbiBmb3IgYmVpbmcgY2xlYXJlZCB3aXRob3V0IGNhbGxpbmcgdmFsaWRhdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsZWFySW5wdXRzKGZvcm1OYW1lLCBjbGVhck9ubHlWYWxpZGF0aW9uID0gbnVsbCkgeyAvLyBzdHJpbmcgb3IgbnVsbFxyXG4gICAgICAgIGlmIChjbGVhck9ubHlWYWxpZGF0aW9uID09IG51bGwpIHsgY2xlYXJPbmx5VmFsaWRhdGlvbiA9IGZhbHNlOyB9XHJcbiAgICAgICAgaWYgKCFmb3JtTmFtZSkgeyBmb3JtTmFtZSA9IFwiZGVmYXVsdFwiOyB9XHJcbiAgICAgICAgLy8gaWYgeW91IHBhc3NlZCBhIGZvcm0gbmFtZSwgc3dlZXQsIHdlJ2xsIGNsZWFyIHRob3NlIGZ1bmN0aW9uc1xyXG4gICAgICAgIC8vIGlmIHlvdSBkaWRuJ3QgcGFzcyBhIGZvcm0gbmFtZSwgd2UnbGwgcmVzZXQgZGVmYXVsdCBmb3JtXHJcbiAgICAgICAgaWYgKHRoaXMuZ2xvYmFsSW5wdXRDbGVhckZ1bmN0aW9uc1tmb3JtTmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5nbG9iYWxJbnB1dENsZWFyRnVuY3Rpb25zW2Zvcm1OYW1lXS5mb3JFYWNoKChmKSA9PiB7IGYoY2xlYXJPbmx5VmFsaWRhdGlvbik7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWxsIGEtIGVsZW1lbnRzIHdpcmUgdG8gdGhpcyBmdW5jdGlvbiBmb3IgYmVpbmcgdmFsaWRhdGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmFsaWRhdGVJbnB1dHMoZm9ybU5hbWU6IHN0cmluZyk6IGJvb2xlYW4geyAvLyBzdHJpbmcgb3IgbnVsbFxyXG4gICAgICAgIGlmICghZm9ybU5hbWUpIHsgZm9ybU5hbWUgPSBcImRlZmF1bHRcIjsgfVxyXG4gICAgICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAvLyBpZiB5b3UgcGFzc2VkIGEgZm9ybSBuYW1lLCBzd2VldCwgd2UnbGwgY2hlY2sgdGhvc2UgZnVuY3Rpb25zXHJcbiAgICAgICAgLy8gaWYgeW91IGRpZG4ndCBwYXNzIGEgZm9ybSBuYW1lLCB3ZSdsbCBjaGVjayBkZWZhdWx0IGZvcm1cclxuICAgICAgICBpZiAodGhpcy5nbG9iYWxWYWxpZGF0aW9uRnVuY3Rpb25zW2Zvcm1OYW1lXSkge1xyXG4gICAgICAgICAgICB0aGlzLmdsb2JhbFZhbGlkYXRpb25GdW5jdGlvbnNbZm9ybU5hbWVdLmZvckVhY2goKGYpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhc2tRdWV1ZS5xdWV1ZU1pY3JvVGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImhhcy1kYW5nZXJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAobGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUbygwLCAoPEhUTUxFbGVtZW50Pmxpc3RbMF0pLm9mZnNldFRvcCAtIDYwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAvLyBzY3JvbGwgdG8gZmlyc3QgZXJyb3JcclxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdsb2JhbCBFcnJvciBIYW5kbGVyIHVzYWdlOlxyXG4gICAgICogICAgICAgICB9KS5jYXRjaCh0aGlzLmNvbW1vbi5lcnJvckhhbmRsZXIpO1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXJyb3JIYW5kbGVyID0gKGU6IGFueSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXHJcbiAgICAgICAgY29uc29sZS5sb2coXCIqKiogRXJyb3IgSGFuZGxlcjogXCIpO1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgLy8gbGV0IHdhc0hhbmRsZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoZS5jb25zdHJ1Y3RvciA9PT0gVHlwZUVycm9yKSB7XHJcbiAgICAgICAgICAgIGUgPSBuZXcgQ3VzdG9tRXJyb3IoZS5tZXNzYWdlLCB7IGVycm9yQ29kZTogZS5tZXNzYWdlLCBtZXNzYWdlOiBlLnN0YWNrLCBuYW1lOiBcIlR5cGVFcnJvclwiIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihlLmZhdWx0Y29kZSA9PSBcInNmOklOVkFMSURfU0VTU0lPTl9JRFwiKSB7XHJcbiAgICAgICAgICAgIGUgPSBuZXcgQ3VzdG9tRXJyb3IoZS5mYXVsdHN0cmluZywgeyBlcnJvckNvZGU6IGUuZmF1bHRjb2RlLCBtZXNzYWdlOiBlLmRldGFpbCwgbmFtZTogXCJCYWQgU2Vzc2lvblwifSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5jcml0aWNhbEVycm9ycy5wdXNoKGUpO1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZS5tZXNzYWdlIGlzIHRoZSBlcnJvckNvZGUgaW4gbW9zdCBjYXNlc1xyXG4gICAgICAgIC8vIHRoaXMuZGF0YS5fY3VzdG9tRXJyb3JzLnB1c2goZSk7XHJcbiAgICAgICAgLy8gc3dpdGNoIChlLmVycm9yQ29kZSkge1xyXG4gICAgICAgIC8vICAgICBjYXNlIFwiSU5WQUxJRF9UT0tFTlwiOlxyXG4gICAgICAgIC8vICAgICAgICAgLy8gZHVkZSB5b3UgYXJlIHNvIGxvZ2dlZCBvdXRcclxuICAgICAgICAvLyAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5vcmlnaW4gKyBcIi9sb2dpblwiO1xyXG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgIGNhc2UgXCJJTlZBTElEX1NFU1NJT05fSURcIjpcclxuICAgICAgICAvLyAgICAgICAgIC8vIGR1ZGUgeW91IGFyZSBzbyBsb2dnZWQgb3V0XHJcbiAgICAgICAgLy8gICAgICAgICBsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24ub3JpZ2luICsgXCIvbG9naW5cIjtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICBjYXNlIFwiVVNFUl9BVVRIRU5USUNBVElPTl9GQUlMRURcIjpcclxuICAgICAgICAvLyAgICAgICAgIC8vIEVycm9yIHdpdGggRG9jdXNpZ24gQ3JlZGVudGlhbHNcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFwiIy9lcnJvci9kb2N1c2lnbi9hdXRoZW50aWNhdGlvbi1lcnJvclwiKTtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OlxyXG4gICAgICAgIC8vICAgICAgICAgLy8gVW4tU3BlY2lmaWVkIEN1c3RvbSBFcnJvclxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXCIjL2Vycm9yXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb2JpbGVjaGVjaygpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAoKGEpID0+IHsgaWYgKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2V8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoYSkgfHwgLzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLCA0KSkpIGNoZWNrID0gdHJ1ZTsgfSkobmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yIHx8IHdpbmRvd1tcIm9wZXJhXCJdKTtcclxuICAgICAgICByZXR1cm4gY2hlY2s7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbW9iaWxlQW5kVGFibGV0Y2hlY2soKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGNoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgKChhKSA9PiB7IGlmICgvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaS50ZXN0KGEpIHx8IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCwgNCkpKSBjaGVjayA9IHRydWU7IH0pKG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3dbXCJvcGVyYVwiXSk7XHJcbiAgICAgICAgcmV0dXJuIGNoZWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgRE9NIGZvciBib290c3RyYXAgUmFkaW8gYnV0dG9ucyB0byBiZSAnYWN0aXZlJ1xyXG4gICAgICogVGhpcyBpcyB1c2VkIHdoZXJlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBtb2RlbCBhcyByYWRpbyBpcyBzZWxlY3RlZFxyXG4gICAgICogQHBhcmFtIHskZXZlbnR9IGVcclxuICAgICAqICAganMgZXZlbnRcclxuICAgICAqIEByZXR1cm5cclxuICAgICAqICAgdm9pZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYnNSYWRpbyhlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyBjbGVhciBhbGwgb3RoZXIgYWN0aXZlIGVsZW1lbnRzLCBhbmQgdGhlaXIgY2hpbGRyZW4gaW5wdXRzXHJcbiAgICAgICAgZm9yIChsZXQgZWxlbSBvZiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbnAgb2YgZWxlbS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgaW5wLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBET00gZm9yIGJvb3RzdHJhcCBDaGVja2JveCBidXR0b25zIHRvIGJlICdhY3RpdmUnXHJcbiAgICAgKiBUaGlzIGlzIHVzZWQgd2hlcmUgd2UgbmVlZCB0byB1cGRhdGUgdGhlIG1vZGVsIGFzIHJhZGlvIGlzIHNlbGVjdGVkXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHskZXZlbnR9IGVcclxuICAgICAqICAganMgZXZlbnRcclxuICAgICAqIEByZXR1cm5cclxuICAgICAqIHZvaWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGJzQ2hlY2tib3goZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gY2xlYXIgYWxsIGFjdGl2ZSBlbGVtZW50c1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhY3RpdmUgY2xhc3MgbmFtZSBpZiB0aGUgaXRlbSBzaG91bGQgYmUgc2VsZWN0ZWRcclxuICAgICAqIFVzZXM6XHJcbiAgICAgKiAgMS4gUGFzcyAyIHN0cmluZyB2YWx1ZXMgdG8gY2hlY2sgaWYgdGhleSBtYXRjaFxyXG4gICAgICogIDIuIFBhc3MgYW4gYXJyYXkgYW5kIGEgc3RyaW5nLCB0byBjaGVjayBpZiB0aGUgc3RyaW5nIGV4aXN0cyBpbiB0aGUgYXJyYXlcclxuICAgICAqICAzLiBQYXNzIDIgb2JqZWN0cywgYW5kIGEgcHJvcCwgdG8gY2hlY2sgaWYgdGhleSBtYXRjaCBieSBwcm9wLlxyXG4gICAgICogIDRhLiBQYXNzIGFuIGFycmF5LCBhbiBvYmplY3QsIHRvIGNoZWNrIGlmIHRoZSBvYmplY3QgbWF0Y2hlcyBhZ2FpbnN0IHRoZSBhcnJheSBvZiBvYmplY3RzLlxyXG4gICAgICogIDRiLiBQYXNzIGFuIGFycmF5LCBhbiBvYmplY3QsIGFuZCBhIHByb3AsIHRvIGNoZWNrIGlmIHRoZSBwcm9wIHZhbHVlIG9mIHRoZSBnaXZlbiBvYmplY3QgbWF0Y2hlcyBhZ2FpbnN0IHRoZSBhcnJheSBvZiBvYmplY3RzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7YXJyYXkgb2Ygb2JqZWN0LCBhcnJheSwgb3IgdmFyaWFibGV9IG9ialxyXG4gICAgICogICBTZWxlY3RlZEl0ZW0ocykgdG8gY2hlY2sgdmFsIGFnYWluc3RcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0IG9yIHZhcmlhYmxlfSB2YWxcclxuICAgICAqICAgQ3VycmVudCBJdGVtIHRvIGNoZWNrXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcFxyXG4gICAgICogICBQcm9wZXJ0eSB0byBjb21wYXJlIGlmIHByZXZpb3VzIHdlcmUgb2JqZWN0c1xyXG4gICAgICogQHJldHVyblxyXG4gICAgICogICBTdHJpbmcgJ2FjdGl2ZScgb3IgJydcclxuICAgICAqIEV4YW1wbGU6ICAgb2JqID0gW3tpZDogMTIzNCwgbmFtZTogXCJib2JcIn0se2lkOiAzMjEsIG5hbWU6IFwiYm9iXCJ9XVxyXG4gICAgICogICAgICAgICAgIHZhbCA9IHtpZDogMTIzNCwgbmFtZTpcImJvYlwifVxyXG4gICAgICogICAgICAgICAgIHByb3AgPSBcImlkXCJcclxuICAgICAqIFdvdWxkIHJldHVybiAnYWN0aXZlJy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzQWN0aXZlKG9iajogYW55LCB2YWw6IGFueSwgcHJvcDogYW55KTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodmFsID09IG51bGwgfHwgb2JqID09IG51bGwpIHsgcmV0dXJuIFwiXCI7IH1cclxuICAgICAgICBlbHNlIGlmIChvYmouY29uc3RydWN0b3IgPT09IEFycmF5ICYmIHZhbC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICYmIHByb3ApIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCB2IG9mIG9iaikgeyBpZiAodltwcm9wXSA9PT0gdmFsW3Byb3BdKSB7IHJldHVybiBcImFjdGl2ZVwiOyB9IH1cclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG9iai5jb25zdHJ1Y3RvciA9PT0gQXJyYXkgJiYgdmFsLmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiYgIXByb3ApIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCB2IG9mIG9iaikgeyBpZiAodiA9PT0gdmFsKSB7IHJldHVybiBcImFjdGl2ZVwiOyB9IH1cclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG9iai5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCB2IG9mIG9iaikgeyBpZiAodiA9PT0gdmFsKSB7IHJldHVybiBcImFjdGl2ZVwiOyB9IH1cclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG9iai5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICYmIHZhbC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICYmIHByb3ApIHtcclxuICAgICAgICAgICAgaWYgKG9ialtwcm9wXSA9PT0gdmFsW3Byb3BdKSB7IHJldHVybiBcImFjdGl2ZVwiOyB9XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgob2JqLmNvbnN0cnVjdG9yID09PSBOdW1iZXIgJiYgdmFsLmNvbnN0cnVjdG9yID09PSBOdW1iZXIpXHJcbiAgICAgICAgICAgIHx8IChvYmouY29uc3RydWN0b3IgPT09IFN0cmluZyAmJiB2YWwuY29uc3RydWN0b3IgPT09IFN0cmluZykpIHtcclxuICAgICAgICAgICAgaWYgKG9iaiA9PT0gdmFsKSB7IHJldHVybiBcImFjdGl2ZVwiOyB9XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAvLyBsb2dnZXIud2FybihcImlzQWN0aXZlIHdhcyBwYXNzZWQgaW5jb3JyZWN0IHBhcmFtZXRlciB0eXBlcywgYW5kIGhhcyByZXR1cm5lZCAnJ1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhck9iamVjdFZhbHVlcyhvYmpUb0NsZWFyKTogYW55IHtcclxuICAgICAgICBPYmplY3Qua2V5cyhvYmpUb0NsZWFyKS5mb3JFYWNoKChwYXJhbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob2JqVG9DbGVhcltwYXJhbV0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gbm90aGluZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG9ialRvQ2xlYXJbcGFyYW1dICE9IG51bGwgJiYgKG9ialRvQ2xlYXJbcGFyYW1dLmNvbnN0cnVjdG9yID09PSBPYmplY3QpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyT2JqZWN0VmFsdWVzKG9ialRvQ2xlYXJbcGFyYW1dKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChvYmpUb0NsZWFyW3BhcmFtXSA9PT0gdHJ1ZSB8fCBvYmpUb0NsZWFyW3BhcmFtXSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIHNldCBib29scyB0byBmYWxzZVxyXG4gICAgICAgICAgICAgICAgb2JqVG9DbGVhcltwYXJhbV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChvYmpUb0NsZWFyW3BhcmFtXSAhPSBudWxsICYmIChvYmpUb0NsZWFyW3BhcmFtXS5jb25zdHJ1Y3RvciA9PT0gRGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIG9ialRvQ2xlYXJbcGFyYW1dID0gbnVsbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9ialRvQ2xlYXJbcGFyYW1dID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBvYmpUb0NsZWFyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIFJldHVybnMgQXJyYXkgb2YgU3RyaW5ncyB2YWxpZCBmb3IgdGhlIGluZGV4IHByb3ZpZGVkXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHthcnJheSBvZiBvYmplY3R9IG9ialBpY2tsaXN0VmFsdWVzXHJcbiAgICAgKiAgIEFycmF5IG9mIFBpY2tsaXN0IFZhbHVlcyBvYmplY3RzXHJcbiAgICAgKiBAcGFyYW0ge2ludGVnZXIgdmFsdWV9IHNlbGVjdGVkSW5kZXhcclxuICAgICAqICAgQ3VycmVudCBJbmRleCBvZiBpdGVtIHNlbGVjdGVkIGluIHBhcmVudCBmaWVsZFxyXG4gICAgICogICB1c2VkIHRvIGZpbHRlciB2YWx1ZXMgaW4gcHJvdmlkZWQgb2JqZWN0IG9mXHJcbiAgICAgKiAgIFBpY2tsaXN0IHZhbHVlc1xyXG4gICAgICogQHJldHVybiBhcnJheSBvZiBvYmplY3RzIHdpdGggc3RyaW5nIGFuZCBpbmRleFxyXG4gICAgICogaW5kZXggaXMgbmVlZGVkIGZvciBvcmlnaW5hbCBwbGFjZSBpbiBhcnJheSBmcm9tIFNGXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXREZXBlbmRlbnRWYWx1ZXMob2JqUGlja2xpc3RWYWx1ZXM6IGFueSwgc2VsZWN0ZWRJbmRleDogbnVtYmVyKTogYW55IHtcclxuICAgICAgICAvLyBJdGVyYXRlIG92ZXIgcGlja2xpc3QgdmFsdWUgb2JqZWN0IGFuZCBjaGVjayBpZiBpdCBpcyBhXHJcbiAgICAgICAgLy8gZGVwZW5kZW50IHZhbHVlIGZvciB0aGUgcGFyZW50IHNlbGVjdGVkIGluZGV4IHZhbHVlXHJcbiAgICAgICAgY29uc3QgYXJyYXlPYmpQaWNrbGlzdFZhbHVlcyA9IFtdO1xyXG4gICAgICAgIG9ialBpY2tsaXN0VmFsdWVzLmZvckVhY2goKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0RlcGVuZGVudFZhbHVlKHNlbGVjdGVkSW5kZXgsIHYudmFsaWRGb3IpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqUGlja2xpc3RWYWx1ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogaSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdi52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGFycmF5T2JqUGlja2xpc3RWYWx1ZXMucHVzaChvYmpQaWNrbGlzdFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBhcnJheU9ialBpY2tsaXN0VmFsdWVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBib29sZWFuIGZvciB0aGUgaW5kZXggcHJvdmlkZWQgYW5kIFZhbGlkRm9yXHJcbiAgICAgKiBiYXNlNjQgZnJvbSBTYWxlc2ZvcmNlIEZpZWxkIE1ldGFkYXRhXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtJbmRleCBJRH0gaW5kZXhcclxuICAgICAqICAgSW5kZXggSUQgb2YgdGhlIHZhbHVlIGNob3NlbiBieSB0aGUgcGFyZW50XHJcbiAgICAgKiAgIGNvbnRyb2xsaW5nIGZpZWxkXHJcbiAgICAgKiBAcGFyYW0ge2Jhc2U2NCB2YWx1ZX0gdmFsaWRGb3JcclxuICAgICAqICAgQ3VycmVudCBJdGVtIGluIFBpY2tsaXN0IFZhbHVlcyB0byBjaGVja1xyXG4gICAgICogICBpZiB2YWxpZCBmb3IgdGhlIHBhcmVudCBzZWxlY3RlZCB2YWx1ZSBpbmRleFxyXG4gICAgICogICB0aGlzIGlucHV0IHZhbHVlIGlzIGluIGJhc2U2NCBlbmNcclxuICAgICAqIEByZXR1cm4gYm9vbGVhblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNEZXBlbmRlbnRWYWx1ZShpbmRleDogbnVtYmVyLCB2YWxpZEZvcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgZGVjb2RlZCA9IGF0b2IodmFsaWRGb3IpO1xyXG4gICAgICAgIGNvbnN0IGJpdHMgPSBkZWNvZGVkLmNoYXJDb2RlQXQoaW5kZXggPj4gMyk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKGJpdHMgJiAoMHg4MCA+PiAoaW5kZXggJSA4KSkpICE9PSAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2VuZXJhdGVHdWlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgZnVuY3Rpb24gczQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxyXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKDE2KVxyXG4gICAgICAgICAgICAgICAgLnN1YnN0cmluZygxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHM0KCkgKyBzNCgpICsgXCItXCIgKyBzNCgpICsgXCItXCIgKyBzNCgpICsgXCItXCIgK1xyXG4gICAgICAgICAgICBzNCgpICsgXCItXCIgKyBzNCgpICsgczQoKSArIHM0KCk7XHJcbiAgICB9XHJcblxyXG4gXHJcbiAgICAvKipcclxuICAgICAqIENvbXBhcmVzIHR3byBvYmplY3RzIGFuZCByZXR1cm5zIHRydWUgaWYgdGhleSBoYXZlIGlkZW50aWNhbCBrZXlzL3ZhbHVlc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhIDFzdCBvYmplY3QgdG8gY29tcGFyZVxyXG4gICAgICogQHBhcmFtIGIgMm5kIG9iamVjdCB0byBjb21wYXJlXHJcbiAgICAgKi9cclxuICAgIG9iamVjdHNBcmVFcXVpdmFsZW50KGEsIGIpIHtcclxuICAgICAgICAvLyBDcmVhdGUgYXJyYXlzIG9mIHByb3BlcnR5IG5hbWVzXHJcbiAgICAgICAgY29uc3QgYVByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYSk7XHJcbiAgICAgICAgY29uc3QgYlByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYik7XHJcblxyXG4gICAgICAgIC8vIElmIG51bWJlciBvZiBwcm9wZXJ0aWVzIGlzIGRpZmZlcmVudCxcclxuICAgICAgICAvLyBvYmplY3RzIGFyZSBub3QgZXF1aXZhbGVudFxyXG4gICAgICAgIGlmIChhUHJvcHMubGVuZ3RoICE9IGJQcm9wcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhUHJvcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSBhUHJvcHNbaV07XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB2YWx1ZXMgb2Ygc2FtZSBwcm9wZXJ0eSBhcmUgbm90IGVxdWFsLFxyXG4gICAgICAgICAgICAvLyBvYmplY3RzIGFyZSBub3QgZXF1aXZhbGVudFxyXG4gICAgICAgICAgICBpZiAoYVtwcm9wTmFtZV0gIT09IGJbcHJvcE5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHdlIG1hZGUgaXQgdGhpcyBmYXIsIG9iamVjdHNcclxuICAgICAgICAvLyBhcmUgY29uc2lkZXJlZCBlcXVpdmFsZW50XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICogSWYgYSBzdWIgcGF0aCBpcyBzcGVjaWZpZWQgb24gdGhlIHJvdXRlXHJcbiAgICAqIHNjcm9sbCB0byB0aGF0IHNlY3Rpb25cclxuICAgICogQHBhcmFtIGFwcE5hbWUgdGhlIG5hbWUgb2YgdGhlIGFwcCB0aGF0IGlzIGN1cnJlbnRseSBydW5ubmluZ1xyXG4gICAgKiBAcGFyYW0gY09mZnNldCBhbiBvcHRpb25hbCBvZmZzZXRcclxuICAgICovXHJcbiAgICAvLyBwdWJsaWMgc2Nyb2xsVG9TZWN0aW9uKGFwcE5hbWU/OiBhbnksIGNPZmZzZXQ/OiBhbnkpIHtcclxuICAgIC8vICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIHRvIGluY2x1ZGUgd2l0aCB0b3BcclxuICAgIC8vICAgICBjb25zdCBib2R5RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiQk9EWVwiKVswXTtcclxuICAgIC8vICAgICBib2R5RWxlbWVudC5zY3JvbGxUb3AgPSAwO1xyXG4gICAgLy8gICAgIGxldCBzY3JvbGxQb3NpdGlvbiA9IDA7IC8vd2luZG93LnNjcm9sbFk7XHJcbiAgICAvLyAgICAgbGV0IG9mZnNldCA9IDA7XHJcbiAgICAvLyAgICAgLy8gaWYgKGNPZmZzZXQpIHtcclxuICAgIC8vICAgICAvLyAgICAgb2Zmc2V0ID0gY09mZnNldDtcclxuICAgIC8vICAgICAvLyB9IGVsc2UgaWYgKGFwcE5hbWUpIHtcclxuICAgIC8vICAgICAvLyAgICAgb2Zmc2V0ID0gdGhpcy5nZXRPZmZzZXQoYXBwTmFtZSk7XHJcbiAgICAvLyAgICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgICAvLyAgICAgb2Zmc2V0ID0gMDtcclxuICAgIC8vICAgICAvLyB9XHJcblxyXG4gICAgLy8gICAgIGxldCBzdWJQYXRoID0gdGhpcy5nZXRTdWJQYXRoKCk7XHJcbiAgICAvLyAgICAgaWYgKHN1YlBhdGgpIHtcclxuICAgIC8vICAgICAgICAgLy8gZ2V0IHRoZSBlbGVtZW50IHRvIHNjcm9sbCB0b1xyXG4gICAgLy8gICAgICAgICBsZXQgc2Nyb2xsVG9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoc3ViUGF0aCk7XHJcbiAgICAvLyAgICAgICAgIC8vIGdldCB0aGUgY29vcmRpbmF0ZXNcclxuICAgIC8vICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gc2Nyb2xsVG9FbGVtZW50WzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgLy8gICAgICAgICAvLyBnZXQgdGhlIGJvZHlcclxuICAgIC8vICAgICAgICAgbGV0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJCT0RZXCIpWzBdO1xyXG4gICAgLy8gICAgICAgICAvLyBkZXRlcm1pbmUgdGhlIHBvc3Rpb24gb2YgdGhlIGVsZW1lbnQgYW5kIHN1YnRyYWN0IHRoZSBzdGF0aWMgZWxlbWVudHNcclxuICAgIC8vICAgICAgICAgLy8gaS5lLiBidXR0b24gYmFyLCBjbGllbnQgaGVhZGVyLCBldGNcclxuICAgIC8vICAgICAgICAgYm9keUVsZW1lbnQuc2Nyb2xsVG9wID0gKGNvb3JkaW5hdGVzLnRvcCArIHNjcm9sbFBvc2l0aW9uKSAtIG9mZnNldDtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIHB1YmxpYyB5ZXNOb1RvQm9vbGVhbih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgbGV0IHJ0blZhbHVlOiBhbnkgPSBcIlwiO1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gXCJZZXNcIikge1xyXG4gICAgICAgICAgICBydG5WYWx1ZSA9ICB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiTm9cIikge1xyXG4gICAgICAgICAgICBydG5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgcnRuVmFsdWUgPSBcIlllc1wiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJ0blZhbHVlID0gXCJOb1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJ0blZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRHVUlEKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihjKSB7XHJcbiAgICAgICAgICAgICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLCB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xyXG4gICAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0SUQoKSB7XHJcbiAgICAgICAgcmV0dXJuICdHRU54eHh4eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24oYykge1xyXG4gICAgICAgICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLCB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xyXG4gICAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0UGFyYW1zID0gKHF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgaWYgKCFxdWVyeSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICgvXls/I10vLnRlc3QocXVlcnkpID8gcXVlcnkuc2xpY2UoMSkgOiBxdWVyeSlcclxuICAgICAgICAgICAgLnNwbGl0KFwiJlwiKVxyXG4gICAgICAgICAgICAucmVkdWNlKChwYXJhbXMsIHBhcmFtKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBbIGtleSwgdmFsdWUgXSA9IHBhcmFtLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgICAgcGFyYW1zW2tleV0gPSB2YWx1ZSA/IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpKSA6IFwiXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJhbXM7XHJcbiAgICAgICAgICAgIH0sIHsgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('resources/data',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Data = (function () {
        function Data() {
            this.criticalErrors = [];
        }
        Data.prototype.loadAccountById = function (strID) {
            if (strID) {
                var query_1 = "SELECT Id, Name, Account_Country__c FROM Account WHERE ID = '" + strID + "'";
                console.log("INFO [data] Running Soql: " + query_1);
                return new Promise(function (resolve, reject) {
                    sforce.connection.query(query_1, { onSuccess: resolve, onFailure: reject });
                });
            }
            else {
                return new Promise(function (resolve, reject) {
                    resolve();
                });
            }
        };
        Data.prototype.loadProjectById = function (strID) {
            if (strID) {
                var query_2 = "SELECT Id, Name, Account__c, Onboarding_Status__c, Account__r.Name, Account__r.Id, Account__r.Account_Country__c FROM Project__c WHERE ID = '" + strID + "'";
                console.log("INFO [data] Running Soql: " + query_2);
                return new Promise(function (resolve, reject) {
                    sforce.connection.query(query_2, { onSuccess: resolve, onFailure: reject });
                });
            }
            else {
                return new Promise(function (resolve, reject) {
                    resolve();
                });
            }
        };
        Data.prototype.loadCloudProjectById = function (strID) {
            if (strID) {
                var query_3 = "SELECT Id, Name, Group_Id__c, Support_Ultimate_Date__c, Account__c, Account__r.Name, Account__r.Id, Account__r.Account_Country__c FROM Cloud_Project__c WHERE ID = '" + strID + "'";
                console.log("INFO [data] Running Soql: " + query_3);
                return new Promise(function (resolve, reject) {
                    sforce.connection.query(query_3, { onSuccess: resolve, onFailure: reject });
                });
            }
            else {
                return new Promise(function (resolve, reject) {
                    resolve();
                });
            }
        };
        Data.prototype.AddNewCase = function (objCase) {
            return new Promise(function (resolve, reject) {
                CaseCreateController.AddNewCase(objCase, function (result, event) {
                    if (event.status && result) {
                        resolve(result);
                    }
                    else {
                        reject(Error(event.message));
                    }
                });
            });
        };
        Data.prototype.sforceQuery = function (query) {
            console.log("INFO [data] Running Soql: " + query);
            return new Promise(function (resolve, reject) {
                sforce.connection.query(query, { onSuccess: resolve, onFailure: reject });
            });
        };
        Data.prototype.sforceDescribe = function (object) {
            return new Promise(function (resolve, reject) {
                sforce.connection.describeSObject(object, { onSuccess: resolve, onFailure: reject });
            });
        };
        Data.prototype.sforceDescribeLayout = function (object, layoutname, recordTypeID) {
            return new Promise(function (resolve, reject) {
                sforce.connection.describeLayout(object, layoutname, [recordTypeID], { onSuccess: resolve, onFailure: reject });
            });
        };
        Data.prototype.getPicklistValues = function (glob, name) {
            var results = [];
            if (glob.fields) {
                glob.fields.forEach(function (f) {
                    if (f.name == name) {
                        f.picklistValues.forEach(function (pv) {
                            if (pv.active == "true") {
                                results.push({ label: pv.label, value: pv.value });
                            }
                        });
                        return results;
                    }
                });
            }
            return results;
        };
        Data.prototype.getPicklistValuesByRecordType = function (glob, name) {
            var results = [];
            if (glob.recordTypeMappings && glob.recordTypeMappings.picklistsForRecordType) {
                glob.recordTypeMappings.picklistsForRecordType.forEach(function (f) {
                    if (f.picklistName == name) {
                        f.picklistValues.forEach(function (pv) {
                            if (pv.active == "true") {
                                results.push({ label: pv.label, value: pv.value });
                            }
                        });
                        return results;
                    }
                });
            }
            return results;
        };
        return Data;
    }());
    exports.Data = Data;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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dXJjZXMvZGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SWROYW1lLCBDYXNlfSBmcm9tIFwiLi4vY2xhc3Nlcy9kYXRhLWNsYXNzZXNcIjtcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhIHtcclxuICAgIHB1YmxpYyBjcml0aWNhbEVycm9yczogYW55W10gPSBbXTtcclxuXHJcbiAgICAvLyBWYXJzIGZvciBDYXNlXHJcbiAgICBwdWJsaWMgUHJvZHVjdENob2ljZXM6IGFueVtdO1xyXG4gICAgcHVibGljIFNldmVyaXR5Q2hvaWNlczogYW55W107XHJcbiAgICBwdWJsaWMgTW9uZ29EQlZlcnNpb25DaG9pY2VzOiBhbnlbXTtcclxuICAgIHB1YmxpYyBTdG9yYWdlRW5naW5lQ2hvaWNlczogYW55W107XHJcbiAgICBwdWJsaWMgUm9vdENhdXNlQ2hvaWNlczogYW55W107XHJcbiAgICBwdWJsaWMgTGV2ZWxPZkVmZm9ydENob2ljZXM6IGFueVtdO1xyXG4gICAgcHVibGljIENvbXBvbmVudHNDaG9pY2VzOiBhbnlbXTtcclxuXHJcbiAgICAvLyBUaGlzIGlzIGNhbGxlZCBvbiBwYWdlIGxvYWQgaWYgdGhlcmUgaXMgYSBVUkwgUGFyYW0sIGFsc28gdXNlZCBpZiBwcm9qZWN0IGlzIGluIFVSTCBhZnRlciB0aGUgcHJvamVjdCBpcyBsb2FkZWRcclxuICAgIHB1YmxpYyBsb2FkQWNjb3VudEJ5SWQoc3RySUQpIHtcclxuICAgICAgICBpZihzdHJJRCkge1xyXG4gICAgICAgICAgICBsZXQgcXVlcnkgPSBcIlNFTEVDVCBJZCwgTmFtZSwgQWNjb3VudF9Db3VudHJ5X19jIEZST00gQWNjb3VudCBXSEVSRSBJRCA9ICdcIiArIHN0cklEICsgXCInXCI7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSU5GTyBbZGF0YV0gUnVubmluZyBTb3FsOiBcIiArIHF1ZXJ5KTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgc2ZvcmNlLmNvbm5lY3Rpb24ucXVlcnkocXVlcnksIHtvblN1Y2Nlc3M6IHJlc29sdmUsIG9uRmFpbHVyZTogcmVqZWN0fSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkUHJvamVjdEJ5SWQoc3RySUQpIHtcclxuICAgICAgICBpZihzdHJJRCkge1xyXG4gICAgICAgICAgICBsZXQgcXVlcnkgPSBcIlNFTEVDVCBJZCwgTmFtZSwgQWNjb3VudF9fYywgT25ib2FyZGluZ19TdGF0dXNfX2MsIEFjY291bnRfX3IuTmFtZSwgQWNjb3VudF9fci5JZCwgQWNjb3VudF9fci5BY2NvdW50X0NvdW50cnlfX2MgRlJPTSBQcm9qZWN0X19jIFdIRVJFIElEID0gJ1wiICsgc3RySUQgKyBcIidcIjtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJTkZPIFtkYXRhXSBSdW5uaW5nIFNvcWw6IFwiICsgcXVlcnkpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBzZm9yY2UuY29ubmVjdGlvbi5xdWVyeShxdWVyeSwge29uU3VjY2VzczogcmVzb2x2ZSwgb25GYWlsdXJlOiByZWplY3R9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRDbG91ZFByb2plY3RCeUlkKHN0cklEKSB7XHJcbiAgICAgICAgaWYoc3RySUQpIHtcclxuICAgICAgICAgICAgbGV0IHF1ZXJ5ID0gXCJTRUxFQ1QgSWQsIE5hbWUsIEdyb3VwX0lkX19jLCBTdXBwb3J0X1VsdGltYXRlX0RhdGVfX2MsIEFjY291bnRfX2MsIEFjY291bnRfX3IuTmFtZSwgQWNjb3VudF9fci5JZCwgQWNjb3VudF9fci5BY2NvdW50X0NvdW50cnlfX2MgRlJPTSBDbG91ZF9Qcm9qZWN0X19jIFdIRVJFIElEID0gJ1wiICsgc3RySUQgKyBcIidcIjtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJTkZPIFtkYXRhXSBSdW5uaW5nIFNvcWw6IFwiICsgcXVlcnkpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBzZm9yY2UuY29ubmVjdGlvbi5xdWVyeShxdWVyeSwge29uU3VjY2VzczogcmVzb2x2ZSwgb25GYWlsdXJlOiByZWplY3R9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEFkZE5ld0Nhc2Uob2JqQ2FzZTogQ2FzZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgQ2FzZUNyZWF0ZUNvbnRyb2xsZXIuQWRkTmV3Q2FzZShvYmpDYXNlLFxyXG4gICAgICAgICAgICAgICAgKHJlc3VsdCwgZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuc3RhdHVzICYmIHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KEVycm9yKGV2ZW50Lm1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2ZvcmNlUXVlcnkocXVlcnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIklORk8gW2RhdGFdIFJ1bm5pbmcgU29xbDogXCIgKyBxdWVyeSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBzZm9yY2UuY29ubmVjdGlvbi5xdWVyeShxdWVyeSwge29uU3VjY2VzczogcmVzb2x2ZSwgb25GYWlsdXJlOiByZWplY3R9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2ZvcmNlRGVzY3JpYmUob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBzZm9yY2UuY29ubmVjdGlvbi5kZXNjcmliZVNPYmplY3Qob2JqZWN0LCB7b25TdWNjZXNzOiByZXNvbHZlLCBvbkZhaWx1cmU6IHJlamVjdH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIFJlY29yZCBUeXBlIEluZm8gZm9yIHRoZSBzcGVjaWZpZWQgUmVjb3JkIFR5cGUgSUQgb24gdGhlIG9iamVjdFxyXG4gICAgcHVibGljIHNmb3JjZURlc2NyaWJlTGF5b3V0KG9iamVjdCwgbGF5b3V0bmFtZSwgcmVjb3JkVHlwZUlEKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBzZm9yY2UuY29ubmVjdGlvbi5kZXNjcmliZUxheW91dChvYmplY3QsIGxheW91dG5hbWUsIFtyZWNvcmRUeXBlSURdLCB7b25TdWNjZXNzOiByZXNvbHZlLCBvbkZhaWx1cmU6IHJlamVjdH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICBcclxuICAgIHB1YmxpYyBnZXRQaWNrbGlzdFZhbHVlcyhnbG9iLCBuYW1lKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcclxuICAgICAgICBpZiAoZ2xvYi5maWVsZHMpIHtcclxuICAgICAgICAgICAgZ2xvYi5maWVsZHMuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGYubmFtZSA9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZi5waWNrbGlzdFZhbHVlcy5mb3JFYWNoKChwdikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHYuYWN0aXZlID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goe2xhYmVsOiBwdi5sYWJlbCwgdmFsdWU6IHB2LnZhbHVlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7IC8vYnJlYWsgbG9vcC5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgRGVzY3JpYmUgbGF5b3V0IGNhbGwgdG8gcGFyc2UgcGlja2xpc3RzIGJ5IHJlY29yZCB0eXBlIGFjdGl2ZSB2YWx1ZXNcclxuICAgIHB1YmxpYyBnZXRQaWNrbGlzdFZhbHVlc0J5UmVjb3JkVHlwZShnbG9iLCBuYW1lKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcclxuICAgICAgICBpZiAoZ2xvYi5yZWNvcmRUeXBlTWFwcGluZ3MgJiYgZ2xvYi5yZWNvcmRUeXBlTWFwcGluZ3MucGlja2xpc3RzRm9yUmVjb3JkVHlwZSkge1xyXG4gICAgICAgICAgICBnbG9iLnJlY29yZFR5cGVNYXBwaW5ncy5waWNrbGlzdHNGb3JSZWNvcmRUeXBlLmZvckVhY2goKGYpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChmLnBpY2tsaXN0TmFtZSA9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZi5waWNrbGlzdFZhbHVlcy5mb3JFYWNoKChwdikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHYuYWN0aXZlID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goe2xhYmVsOiBwdi5sYWJlbCwgdmFsdWU6IHB2LnZhbHVlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7IC8vYnJlYWsgbG9vcC5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.globalResources([
            "./elements/input",
            "./elements/checkboxlist",
            "./elements/datepicker",
            "./elements/dropdown",
            "./elements/input",
            "./elements/modal",
            "./elements/radiogroup",
            "./elements/radiolist",
            "./elements/typeahead",
            "./elements/money",
            "./elements/ssn",
            "./elements/text",
            "./elements/duelingpicklist",
            "./elements/multiselect",
            "./elements/phone"
        ]);
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7UUFDdEQsTUFBTSxDQUFDLGVBQWUsQ0FBQztZQUNyQixrQkFBa0I7WUFDaEIseUJBQXlCO1lBQ3pCLHVCQUF1QjtZQUN2QixxQkFBcUI7WUFDckIsa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQix1QkFBdUI7WUFDdkIsc0JBQXNCO1lBQ3RCLHNCQUFzQjtZQUN0QixrQkFBa0I7WUFDbEIsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQiw0QkFBNEI7WUFDNUIsd0JBQXdCO1lBQ3hCLGtCQUFrQjtTQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBakJELDhCQWlCQyIsImZpbGUiOiJyZXNvdXJjZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZyYW1ld29ya0NvbmZpZ3VyYXRpb259IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoY29uZmlnOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uKSB7XHJcbiAgY29uZmlnLmdsb2JhbFJlc291cmNlcyhbXHJcbiAgICBcIi4vZWxlbWVudHMvaW5wdXRcIlxyXG4gICAgLCBcIi4vZWxlbWVudHMvY2hlY2tib3hsaXN0XCJcclxuICAgICwgXCIuL2VsZW1lbnRzL2RhdGVwaWNrZXJcIlxyXG4gICAgLCBcIi4vZWxlbWVudHMvZHJvcGRvd25cIlxyXG4gICAgLCBcIi4vZWxlbWVudHMvaW5wdXRcIlxyXG4gICAgLCBcIi4vZWxlbWVudHMvbW9kYWxcIlxyXG4gICAgLCBcIi4vZWxlbWVudHMvcmFkaW9ncm91cFwiXHJcbiAgICAsIFwiLi9lbGVtZW50cy9yYWRpb2xpc3RcIlxyXG4gICAgLCBcIi4vZWxlbWVudHMvdHlwZWFoZWFkXCJcclxuICAgICwgXCIuL2VsZW1lbnRzL21vbmV5XCJcclxuICAgICwgXCIuL2VsZW1lbnRzL3NzblwiXHJcbiAgICAsIFwiLi9lbGVtZW50cy90ZXh0XCJcclxuICAgICwgXCIuL2VsZW1lbnRzL2R1ZWxpbmdwaWNrbGlzdFwiXHJcbiAgICAsIFwiLi9lbGVtZW50cy9tdWx0aXNlbGVjdFwiXHJcbiAgICAsIFwiLi9lbGVtZW50cy9waG9uZVwiXSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('resources/mock',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Mock = (function () {
        function Mock() {
            this.ProductChoices = [
                { "label": "MongoDB Enterprise Advanced", "value": "MongoDB Enterprise Advanced" },
                { "label": "MongoDB", "value": "MongoDB" },
                { "label": "Atlas", "value": "Atlas" }
            ];
        }
        return Mock;
    }());
    exports.Mock = Mock;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUlBO1FBQUE7WUFRVyxtQkFBYyxHQUFVO2dCQUM3QixFQUFDLE9BQU8sRUFBQyw2QkFBNkIsRUFBQyxPQUFPLEVBQUMsNkJBQTZCLEVBQUM7Z0JBQzVFLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDO2dCQUNyQyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQzthQUFDLENBQUM7UUFDeEMsQ0FBQztRQUFELFdBQUM7SUFBRCxDQVpGLEFBWUcsSUFBQTtJQVpVLG9CQUFJIiwiZmlsZSI6InJlc291cmNlcy9tb2NrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDYXNlfSBmcm9tIFwiLi4vY2xhc3Nlcy9kYXRhLWNsYXNzZXNcIjtcclxuLyoqXHJcbiAqIElmIHdlIGFyZSBydW5uaW5nIGxvY2FsbHksIHRoaXMgd2lsbCBtb2NrIGRhdGEuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTW9jayB7XHJcbiAgICAvKiogR2VuZXJhdGVkIGZyb21cclxuICAgICAqIFNhbGVmb3JjZSBEZWJ1ZyBDb25zb2xlIC0gRXhlY3V0ZSBBbm9ueW1vdXNcclxuICAgICAgIExpc3Q8QWNjb3VudD4gZiA9IFtTRUxFQ1QgSWQsTmFtZSBGUk9NIEFjY291bnQgV0hFUkUgTmFtZSA9ICdUZXN0IEFtZXJpY2FzJyBvcmRlciBieSBuYW1lXTtcclxuICAgICAgIFN0cmluZyBqID0gSlNPTi5zZXJpYWxpemUoZik7XHJcbiAgICAgICBzeXN0ZW0uZGVidWcoaik7XHJcbiAgICAgICovXHJcbiAgICAvLyBNT0NLIERBVEEgRk9SIENBU0VcclxuICAgIHB1YmxpYyBQcm9kdWN0Q2hvaWNlczogYW55W10gPSBbXHJcbiAgICAgIHtcImxhYmVsXCI6XCJNb25nb0RCIEVudGVycHJpc2UgQWR2YW5jZWRcIixcInZhbHVlXCI6XCJNb25nb0RCIEVudGVycHJpc2UgQWR2YW5jZWRcIn1cclxuICAgICAgLHtcImxhYmVsXCI6XCJNb25nb0RCXCIsXCJ2YWx1ZVwiOlwiTW9uZ29EQlwifVxyXG4gICAgICAse1wibGFiZWxcIjpcIkF0bGFzXCIsXCJ2YWx1ZVwiOlwiQXRsYXNcIn1dO1xyXG4gIH1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/checkbox',["require", "exports", "../common", "./common/element-util", "aurelia-framework"], function (require, exports, common_1, element_util_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CECheckbox = (function () {
        function CECheckbox(observerLocator, common, taskQueue) {
            var _this = this;
            this.disabled = false;
            this.placeholder = "";
            this.warningMsg = "Warning";
            this.isWarning = false;
            this.required = false;
            this.errorMsg = "Value required";
            this.isValid = true;
            this.formName = "default";
            this._emptyValue = false;
            this._charLimitForStacked = 42;
            this._charLimitForStackedLongText = 120;
            this._isStackedClass = false;
            this._isStackedLongText = false;
            this._areObjects = false;
            this.common = common;
            this.taskQueue = taskQueue;
            this.observerLocator = observerLocator;
            this._validate = this.defaultValidate;
            this._clear = function (onlyClearValidation) {
                _this.isValid = true;
                if (!onlyClearValidation) {
                    _this.item = _this._emptyValue;
                }
            };
            this._myValidator = function () {
                if (_this.required && element_util_1.default.isVisible(_this._formGroup)) {
                    _this.isValid = _this._validate({ item: _this.item });
                }
                return _this.isValid;
            };
        }
        CECheckbox.prototype.attached = function () {
            this.isValid = true;
            if (this.validate) {
                this._validate = this.validate;
            }
            element_util_1.default.attached(this.common, this.formName, this.required, this._clear, this._myValidator);
        };
        CECheckbox.prototype.itemChanged = function (newValue, oldValue) {
            if (this.required && element_util_1.default.isVisible(this._formGroup) && newValue !== oldValue) {
                this.isValid = this._validate({ item: this.item });
                console.log("DEBUGGING CHECKBOX:" + this.item);
            }
        };
        CECheckbox.prototype.defaultValidate = function (args) {
            return args.item === true || args.item === false;
        };
        CECheckbox.prototype._changed = function (ev, index) {
            var _this = this;
            var args = {
                event: ev,
                item: this.item
            };
            if (this.changing) {
                this.changing(args);
            }
            this.taskQueue.queueMicroTask(function () {
                if (_this.change) {
                    _this.change();
                }
            });
            return true;
        };
        CECheckbox.prototype.detached = function () {
            element_util_1.default.detached(this.common, this.formName, this.required, this._clear, this._myValidator);
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CECheckbox.prototype, "item", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CECheckbox.prototype, "displayAttribute", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CECheckbox.prototype, "valueAttribute", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CECheckbox.prototype, "disabled", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CECheckbox.prototype, "label", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CECheckbox.prototype, "secondaryLabel", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CECheckbox.prototype, "pre", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CECheckbox.prototype, "instructions", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CECheckbox.prototype, "placeholder", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CECheckbox.prototype, "warningMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CECheckbox.prototype, "isWarning", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CECheckbox.prototype, "required", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CECheckbox.prototype, "errorMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CECheckbox.prototype, "isValid", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], CECheckbox.prototype, "formName", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], CECheckbox.prototype, "changing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], CECheckbox.prototype, "change", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], CECheckbox.prototype, "validate", void 0);
        CECheckbox = __decorate([
            aurelia_framework_1.customElement("ce-checkbox"),
            aurelia_framework_1.autoinject(),
            __metadata("design:paramtypes", [aurelia_framework_1.ObserverLocator, common_1.Common, aurelia_framework_1.TaskQueue])
        ], CECheckbox);
        return CECheckbox;
    }());
    exports.CECheckbox = CECheckbox;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy9jaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFVQTtRQTJDSSxvQkFBWSxlQUFnQyxFQUFFLE1BQWMsRUFBRSxTQUFvQjtZQUFsRixpQkFrQkM7WUFqRDRELGFBQVEsR0FBWSxLQUFLLENBQUM7WUFLMUIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7WUFDekIsZUFBVSxHQUFXLFNBQVMsQ0FBQztZQUMvQixjQUFTLEdBQVksS0FBSyxDQUFDO1lBQzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7WUFDMUIsYUFBUSxHQUFXLGdCQUFnQixDQUFDO1lBQ3BDLFlBQU8sR0FBWSxJQUFJLENBQUM7WUFFcEUsYUFBUSxHQUFXLFNBQVMsQ0FBQztZQUt0QyxnQkFBVyxHQUFZLEtBQUssQ0FBQztZQUM3Qix5QkFBb0IsR0FBVyxFQUFFLENBQUM7WUFDbEMsaUNBQTRCLEdBQVcsR0FBRyxDQUFDO1lBQzNDLG9CQUFlLEdBQVksS0FBSyxDQUFDO1lBQ2pDLHVCQUFrQixHQUFZLEtBQUssQ0FBQztZQUVwQyxnQkFBVyxHQUFZLEtBQUssQ0FBQztZQVNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztZQUV2QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7WUFFdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFDLG1CQUE0QjtnQkFDdkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtvQkFDdEIsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDO2lCQUMvQjtZQUNOLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxZQUFZLEdBQUc7Z0JBQ1osSUFBSSxLQUFJLENBQUMs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RSxVQUFVLENBMEd0QjtRQUFELGlCQUFDO0tBMUdELEFBMEdDLElBQUE7SUExR1ksZ0NBQVUiLCJmaWxlIjoicmVzb3VyY2VzL2VsZW1lbnRzL2NoZWNrYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uIH0gZnJvbSBcIi4uL2NvbW1vblwiO1xyXG5pbXBvcnQgRWxlbWVudFV0aWwgZnJvbSBcIi4vY29tbW9uL2VsZW1lbnQtdXRpbFwiO1xyXG5pbXBvcnQge2F1dG9pbmplY3QsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgY3VzdG9tRWxlbWVudCwgT2JzZXJ2ZXJMb2NhdG9yLCBUYXNrUXVldWV9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5cclxuLypcclxuKiBUaGlzIGlzIGEgY2hlY2tib3hcclxuKi9cclxuXHJcbkBjdXN0b21FbGVtZW50KFwiY2UtY2hlY2tib3hcIilcclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgQ0VDaGVja2JveCB7XHJcbiAgICBwdWJsaWMgY29tbW9uOiBDb21tb247XHJcbiAgICBwdWJsaWMgdGFza1F1ZXVlOiBUYXNrUXVldWU7XHJcbiAgICBwdWJsaWMgb2JzZXJ2ZXJMb2NhdG9yOiBPYnNlcnZlckxvY2F0b3I7XHJcblxyXG5cclxuICAgIC8qKiBAcGFyYW0gKi9cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpdGVtOiBCb29sZWFuO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGRpc3BsYXlBdHRyaWJ1dGU6IHN0cmluZztcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyB2YWx1ZUF0dHJpYnV0ZTogc3RyaW5nO1xyXG5cclxuICAgIC8vIGRlZmF1bHQgb3B0aW9ucyBmb3IgYWxsIGVsZW1lbnRzLCBtdXN0IGJlIHNldCBoZXJlLCBiZWNhdXNlIGJhc2UgY2xhc3MgY2FudCBkZWNsYXJlIGJpbmRhYmxlc1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgbGFiZWw6IHN0cmluZztcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBzZWNvbmRhcnlMYWJlbDogc3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHByZTogc3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGluc3RydWN0aW9uczogc3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHdhcm5pbmdNc2c6IHN0cmluZyA9IFwiV2FybmluZ1wiO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGlzV2FybmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgZXJyb3JNc2c6IHN0cmluZyA9IFwiVmFsdWUgcmVxdWlyZWRcIjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpc1ZhbGlkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBAYmluZGFibGUgcHVibGljIGZvcm1OYW1lOiBzdHJpbmcgPSBcImRlZmF1bHRcIjtcclxuICAgIEBiaW5kYWJsZSBwdWJsaWMgY2hhbmdpbmc6IEZ1bmN0aW9uO1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyBjaGFuZ2U6IEZ1bmN0aW9uO1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyB2YWxpZGF0ZTogRnVuY3Rpb247XHJcblxyXG4gICAgcHJpdmF0ZSBfZW1wdHlWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfY2hhckxpbWl0Rm9yU3RhY2tlZDogTnVtYmVyID0gNDI7XHJcbiAgICBwcml2YXRlIF9jaGFyTGltaXRGb3JTdGFja2VkTG9uZ1RleHQ6IE51bWJlciA9IDEyMDtcclxuICAgIHByaXZhdGUgX2lzU3RhY2tlZENsYXNzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9pc1N0YWNrZWRMb25nVGV4dDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2FyZU9iamVjdHM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2FjdGl2ZU1hcDogYm9vbGVhbltdO1xyXG4gICAgcHJpdmF0ZSBfYXJyYXlPYnNlcnZlcjogYW55O1xyXG4gICAgcHJpdmF0ZSBfdmFsaWRhdGU6IEZ1bmN0aW9uO1xyXG4gICAgcHJpdmF0ZSBfZm9ybUdyb3VwOiBIVE1MRWxlbWVudDsgLy8gZWxlbWVudCByZWZcclxuICAgIHByaXZhdGUgX2NsZWFyOiBGdW5jdGlvbjsgLy8gc2V0IGluIGluaGVyaXRvclxyXG4gICAgcHJpdmF0ZSBfbXlWYWxpZGF0b3I6IEZ1bmN0aW9uOyAvLyBzZXQgaW4gaW5oZXJpdG9yXHJcblxyXG4gICAgY29uc3RydWN0b3Iob2JzZXJ2ZXJMb2NhdG9yOiBPYnNlcnZlckxvY2F0b3IsIGNvbW1vbjogQ29tbW9uLCB0YXNrUXVldWU6IFRhc2tRdWV1ZSkge1xyXG4gICAgICAgIHRoaXMuY29tbW9uID0gY29tbW9uO1xyXG4gICAgICAgIHRoaXMudGFza1F1ZXVlID0gdGFza1F1ZXVlO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJMb2NhdG9yID0gb2JzZXJ2ZXJMb2NhdG9yO1xyXG5cclxuICAgICAgICB0aGlzLl92YWxpZGF0ZSA9IHRoaXMuZGVmYXVsdFZhbGlkYXRlO1xyXG4gICAgICAgIC8vIGNsZWFyIGlzIGNhbGxlZCBieSB0aGUgXHJcbiAgICAgICAgdGhpcy5fY2xlYXIgPSAob25seUNsZWFyVmFsaWRhdGlvbjogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoIW9ubHlDbGVhclZhbGlkYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IHRoaXMuX2VtcHR5VmFsdWU7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9teVZhbGlkYXRvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlcXVpcmVkICYmIEVsZW1lbnRVdGlsLmlzVmlzaWJsZSh0aGlzLl9mb3JtR3JvdXApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gIHRoaXMuX3ZhbGlkYXRlKHsgaXRlbTogdGhpcy5pdGVtIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZDsgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0ZSkgeyB0aGlzLl92YWxpZGF0ZSA9IHRoaXMudmFsaWRhdGU7IH1cclxuICAgICAgICBFbGVtZW50VXRpbC5hdHRhY2hlZCh0aGlzLmNvbW1vbiwgdGhpcy5mb3JtTmFtZSwgdGhpcy5yZXF1aXJlZCwgdGhpcy5fY2xlYXIsIHRoaXMuX215VmFsaWRhdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXRlbUNoYW5nZWQobmV3VmFsdWU6IGFueSwgb2xkVmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlcXVpcmVkICYmIEVsZW1lbnRVdGlsLmlzVmlzaWJsZSh0aGlzLl9mb3JtR3JvdXApICYmIG5ld1ZhbHVlICE9PSBvbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0aGlzLl92YWxpZGF0ZSh7IGl0ZW06IHRoaXMuaXRlbSB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJERUJVR0dJTkcgQ0hFQ0tCT1g6XCIgKyB0aGlzLml0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVmYXVsdFZhbGlkYXRlKGFyZ3MpIHtcclxuICAgICAgICAvLyB3ZSBhcmUgb25seSB2YWxpZGF0aW5nIHRoYXQgdGhlcmUgSVMgT05FIHZhbHVlXHJcbiAgICAgICAgcmV0dXJuIGFyZ3MuaXRlbSA9PT0gdHJ1ZSB8fCBhcmdzLml0ZW0gPT09IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyB0aGlzIGlzIGZpcmVkIEFGVEVSIHRoZSBpdGVtIGNoYW5nZXMsIFxyXG4gICAgLy8gYW5kIG9ubHkgaWYgdGhlIGl0ZW0gY2hhbmdlcyBmcm9tIFRISVMgY29udHJvbCwgbm90IGZyb20gZXh0ZXJuYWwgc291cmNlXHJcbiAgICBwdWJsaWMgX2NoYW5nZWQoZXY6IE1vdXNlRXZlbnQsIGluZGV4KSB7XHJcblxyXG4gICAgICAgIC8vIGZpeCB0aGUgYWN0aXZlL25vdCBhY3RpdmUgY2xhc3MgYmFzZWQgb24gdmFsdWUsIFxyXG4gICAgICAgIC8vIG5vdGUgdGhhdCB0aGlzIGlzIGluaXRpYWxseSBzZXQgdmlhIGNvbW1vbi5pc0FjdGl2ZSBidXQgdGhhdCBvbmx5IGV4ZWN1dGVzIG9uY2VcclxuICAgICAgICAvLyB0aGlzLl9kaXJ0eUFjdGl2ZVRyaWdnZXIgPSAhdGhpcy5fZGlydHlBY3RpdmVUcmlnZ2VyO1xyXG4gICAgICAgIGxldCBhcmdzID0ge1xyXG4gICAgICAgICAgICBldmVudDogZXYsXHJcbiAgICAgICAgICAgIGl0ZW06IHRoaXMuaXRlbVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbmdpbmcpIHsgdGhpcy5jaGFuZ2luZyhhcmdzKTsgfVxyXG5cclxuICAgICAgICB0aGlzLnRhc2tRdWV1ZS5xdWV1ZU1pY3JvVGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYW5nZSkgeyB0aGlzLmNoYW5nZSgpOyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRldGFjaGVkKCkge1xyXG4gICAgICAgIEVsZW1lbnRVdGlsLmRldGFjaGVkKHRoaXMuY29tbW9uLCB0aGlzLmZvcm1OYW1lLCB0aGlzLnJlcXVpcmVkLCB0aGlzLl9jbGVhciwgdGhpcy5fbXlWYWxpZGF0b3IpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/checkboxlist',["require", "exports", "../common", "./common/element-util", "aurelia-framework"], function (require, exports, common_1, element_util_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CECheckboxList = (function () {
        function CECheckboxList(observerLocator, common, taskQueue) {
            var _this = this;
            this.type = "";
            this.disabled = false;
            this.placeholder = "";
            this.warningMsg = "Warning";
            this.isWarning = false;
            this.required = false;
            this.errorMsg = "Value required";
            this.isValid = true;
            this.formName = "default";
            this._emptyValue = [];
            this._charLimitForStacked = 42;
            this._charLimitForStackedLongText = 120;
            this._isStackedClass = false;
            this._isStackedLongText = false;
            this._areObjects = false;
            this.common = common;
            this.taskQueue = taskQueue;
            this.observerLocator = observerLocator;
            this._validate = this.defaultValidate;
            this._clear = function (onlyClearValidation) {
                _this.isValid = true;
                if (!onlyClearValidation) {
                    _this.selectedItems.splice(0, _this.selectedItems.length);
                    _this._activeMap = element_util_1.default.activeMap(_this.items, _this.selectedItems);
                    _this.updateSelection();
                }
            };
            this._myValidator = function () {
                if (_this.required && element_util_1.default.isVisible(_this._formGroup)) {
                    _this.isValid = _this._validate({ items: _this.selectedItems });
                }
                return _this.isValid;
            };
        }
        CECheckboxList.prototype.attached = function () {
            this.isValid = true;
            if (this.validate) {
                this._validate = this.validate;
            }
            element_util_1.default.attached(this.common, this.formName, this.required, this._clear, this._myValidator);
            if (this.selectedItems) {
                this.selectedItemsChanged(this.selectedItems, null);
            }
        };
        CECheckboxList.prototype.itemsChanged = function (newValue, oldValue) {
            this._areObjects = element_util_1.default.areObjects(this.items);
            if (newValue != null && this.selectedItems != null && this.selectedItems.length) {
                this._activeMap = element_util_1.default.activeMap(this.items, this.selectedItems);
                this.updateSelection();
            }
        };
        CECheckboxList.prototype.defaultValidate = function (args) {
            return args.items != null && args.items.length > 0;
        };
        CECheckboxList.prototype.selectedItemsChanged = function (newValue, oldValue) {
            var _this = this;
            this._arrayObserver = this.observerLocator.getArrayObserver(this.selectedItems).subscribe(function () { return _this.selectedItemsHasChanged(); });
            this.selectedItemsHasChanged();
        };
        CECheckboxList.prototype.selectedItemsHasChanged = function () {
            this.remapActiveMap();
            if (this.required && element_util_1.default.isVisible(this._formGroup)) {
                this.isValid = this._validate({ items: this.selectedItems });
            }
        };
        CECheckboxList.prototype.updateSelection = function () {
            var _this = this;
            this.taskQueue.queueTask(function () {
                if (_this._formGroup) {
                    var elems = Array.from(_this._formGroup.getElementsByClassName("btn"));
                    element_util_1.default.setActiveFromActiveMap(elems, _this._activeMap);
                }
            });
        };
        CECheckboxList.prototype._changed = function (ev, index) {
            var _this = this;
            this.remapActiveMap();
            var args = {
                event: ev,
                items: this.selectedItems,
                index: index,
            };
            if (this.changing) {
                this.changing(args);
            }
            this.taskQueue.queueMicroTask(function () {
                if (_this.change) {
                    _this.change();
                }
            });
            return true;
        };
        CECheckboxList.prototype.detached = function () {
            element_util_1.default.detached(this.common, this.formName, this.required, this._clear, this._myValidator);
        };
        CECheckboxList.prototype.remapActiveMap = function () {
            var _this = this;
            var newMap = [];
            this.items.forEach(function (obj) {
                var val = false;
                _this.selectedItems.forEach(function (s) {
                    if (!val) {
                        if (_this._areObjects) {
                            if (_this.valueAttribute && s == obj[_this.valueAttribute]) {
                                val = true;
                            }
                            else if (!val && s == obj) {
                                val = true;
                            }
                        }
                        else if (s === obj) {
                            val = true;
                        }
                    }
                });
                newMap.push(val);
            });
            this._activeMap = newMap;
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CECheckboxList.prototype, "type", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Array)
        ], CECheckboxList.prototype, "items", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Array)
        ], CECheckboxList.prototype, "selectedItems", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CECheckboxList.prototype, "displayAttribute", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CECheckboxList.prototype, "valueAttribute", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CECheckboxList.prototype, "disabled", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CECheckboxList.prototype, "label", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CECheckboxList.prototype, "pre", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CECheckboxList.prototype, "instructions", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CECheckboxList.prototype, "placeholder", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CECheckboxList.prototype, "warningMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CECheckboxList.prototype, "isWarning", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CECheckboxList.prototype, "required", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CECheckboxList.prototype, "errorMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CECheckboxList.prototype, "isValid", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], CECheckboxList.prototype, "formName", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], CECheckboxList.prototype, "changing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], CECheckboxList.prototype, "change", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], CECheckboxList.prototype, "validate", void 0);
        CECheckboxList = __decorate([
            aurelia_framework_1.customElement("ce-checkboxlist"),
            aurelia_framework_1.autoinject(),
            __metadata("design:paramtypes", [aurelia_framework_1.ObserverLocator, common_1.Common, aurelia_framework_1.TaskQueue])
        ], CECheckboxList);
        return CECheckboxList;
    }());
    exports.CECheckboxList = CECheckboxList;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy9jaGVja2JveGxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBVUE7UUE0Q0ksd0JBQVksZUFBZ0MsRUFBRSxNQUFjLEVBQUUsU0FBb0I7WUFBbEYsaUJBb0JDO1lBekQ0RCxTQUFJLEdBQVcsRUFBRSxDQUFDO1lBT2xCLGFBQVEsR0FBWSxLQUFLLENBQUM7WUFJMUIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7WUFDekIsZUFBVSxHQUFXLFNBQVMsQ0FBQztZQUMvQixjQUFTLEdBQVksS0FBSyxDQUFDO1lBQzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7WUFDMUIsYUFBUSxHQUFXLGdCQUFnQixDQUFDO1lBQ3BDLFlBQU8sR0FBWSxJQUFJLENBQUM7WUFFcEUsYUFBUSxHQUFXLFNBQVMsQ0FBQztZQUt0QyxnQkFBVyxHQUFRLEVBQUUsQ0FBQztZQUN0Qix5QkFBb0IsR0FBVyxFQUFFLENBQUM7WUFDbEMsaUNBQTRCLEdBQVcsR0FBRyxDQUFDO1lBQzNDLG9CQUFlLEdBQVksS0FBSyxDQUFDO1lBQ2pDLHVCQUFrQixHQUFZLEtBQUssQ0FBQztZQUVwQyxnQkFBVyxHQUFZLEtBQUssQ0FBQztZQVNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztZQUV2QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7WUFFdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFDLG1CQUE0QjtnQkFDdkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtvQkFDdEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7b0JB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YSxDQUFDLGlCQUFpQixDQUFDO1lBQ2hDLDhCQUFVLEVBQUU7NkNBNkNvQixtQ0FBZSxFQUFVLGVBQU0sRUFBYSw2QkFBUztXQTVDekUsY0FBYyxDQW1LMUI7UUFBRCxxQkFBQztLQW5LRCxBQW1LQyxJQUFBO0lBbktZLHdDQUFjIiwiZmlsZSI6InJlc291cmNlcy9lbGVtZW50cy9jaGVja2JveGxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb24gfSBmcm9tIFwiLi4vY29tbW9uXCI7XHJcbmltcG9ydCBFbGVtZW50VXRpbCBmcm9tIFwiLi9jb21tb24vZWxlbWVudC11dGlsXCI7XHJcbmltcG9ydCB7YXV0b2luamVjdCwgYmluZGFibGUsIGJpbmRpbmdNb2RlLCBjdXN0b21FbGVtZW50LCBPYnNlcnZlckxvY2F0b3IsIFRhc2tRdWV1ZX0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcblxyXG4vKlxyXG4qIFRoaXMgaXMgYSBjaGVja2JveCBsaXN0XHJcbiovXHJcblxyXG5AY3VzdG9tRWxlbWVudChcImNlLWNoZWNrYm94bGlzdFwiKVxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBDRUNoZWNrYm94TGlzdCB7XHJcbiAgICBwdWJsaWMgY29tbW9uOiBDb21tb247XHJcbiAgICBwdWJsaWMgdGFza1F1ZXVlOiBUYXNrUXVldWU7XHJcbiAgICBwdWJsaWMgb2JzZXJ2ZXJMb2NhdG9yOiBPYnNlcnZlckxvY2F0b3I7XHJcblxyXG5cclxuICAgIC8qKiBAcGFyYW0gKi9cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyB0eXBlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGl0ZW1zOiBBcnJheTxhbnk+O1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHNlbGVjdGVkSXRlbXM6IEFycmF5PGFueT47XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgZGlzcGxheUF0dHJpYnV0ZTogc3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHZhbHVlQXR0cmlidXRlOiBzdHJpbmc7XHJcblxyXG4gICAgLy8gZGVmYXVsdCBvcHRpb25zIGZvciBhbGwgZWxlbWVudHMsIG11c3QgYmUgc2V0IGhlcmUsIGJlY2F1c2UgYmFzZSBjbGFzcyBjYW50IGRlY2xhcmUgYmluZGFibGVzXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHByZTogc3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGluc3RydWN0aW9uczogc3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHdhcm5pbmdNc2c6IHN0cmluZyA9IFwiV2FybmluZ1wiO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGlzV2FybmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgZXJyb3JNc2c6IHN0cmluZyA9IFwiVmFsdWUgcmVxdWlyZWRcIjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpc1ZhbGlkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBAYmluZGFibGUgcHVibGljIGZvcm1OYW1lOiBzdHJpbmcgPSBcImRlZmF1bHRcIjtcclxuICAgIEBiaW5kYWJsZSBwdWJsaWMgY2hhbmdpbmc6IEZ1bmN0aW9uO1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyBjaGFuZ2U6IEZ1bmN0aW9uO1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyB2YWxpZGF0ZTogRnVuY3Rpb247XHJcblxyXG4gICAgcHJpdmF0ZSBfZW1wdHlWYWx1ZTogYW55ID0gW107XHJcbiAgICBwcml2YXRlIF9jaGFyTGltaXRGb3JTdGFja2VkOiBOdW1iZXIgPSA0MjtcclxuICAgIHByaXZhdGUgX2NoYXJMaW1pdEZvclN0YWNrZWRMb25nVGV4dDogTnVtYmVyID0gMTIwO1xyXG4gICAgcHJpdmF0ZSBfaXNTdGFja2VkQ2xhc3M6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2lzU3RhY2tlZExvbmdUZXh0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfYXJlT2JqZWN0czogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfYWN0aXZlTWFwOiBib29sZWFuW107XHJcbiAgICBwcml2YXRlIF9hcnJheU9ic2VydmVyOiBhbnk7XHJcbiAgICBwcml2YXRlIF92YWxpZGF0ZTogRnVuY3Rpb247XHJcbiAgICBwcml2YXRlIF9mb3JtR3JvdXA6IEhUTUxFbGVtZW50OyAvLyBlbGVtZW50IHJlZlxyXG4gICAgcHJpdmF0ZSBfY2xlYXI6IEZ1bmN0aW9uOyAvLyBzZXQgaW4gaW5oZXJpdG9yXHJcbiAgICBwcml2YXRlIF9teVZhbGlkYXRvcjogRnVuY3Rpb247IC8vIHNldCBpbiBpbmhlcml0b3JcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvYnNlcnZlckxvY2F0b3I6IE9ic2VydmVyTG9jYXRvciwgY29tbW9uOiBDb21tb24sIHRhc2tRdWV1ZTogVGFza1F1ZXVlKSB7XHJcbiAgICAgICAgdGhpcy5jb21tb24gPSBjb21tb247XHJcbiAgICAgICAgdGhpcy50YXNrUXVldWUgPSB0YXNrUXVldWU7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlckxvY2F0b3IgPSBvYnNlcnZlckxvY2F0b3I7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlID0gdGhpcy5kZWZhdWx0VmFsaWRhdGU7XHJcbiAgICAgICAgLy8gY2xlYXIgaXMgY2FsbGVkIGJ5IHRoZSBcclxuICAgICAgICB0aGlzLl9jbGVhciA9IChvbmx5Q2xlYXJWYWxpZGF0aW9uOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICghb25seUNsZWFyVmFsaWRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnNwbGljZSgwLCB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FjdGl2ZU1hcCA9IEVsZW1lbnRVdGlsLmFjdGl2ZU1hcCh0aGlzLml0ZW1zLCB0aGlzLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fbXlWYWxpZGF0b3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXF1aXJlZCAmJiBFbGVtZW50VXRpbC5pc1Zpc2libGUodGhpcy5fZm9ybUdyb3VwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9ICB0aGlzLl92YWxpZGF0ZSh7IGl0ZW1zOiB0aGlzLnNlbGVjdGVkSXRlbXMgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkOyB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmlzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRlKSB7IHRoaXMuX3ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZTsgfVxyXG4gICAgICAgIEVsZW1lbnRVdGlsLmF0dGFjaGVkKHRoaXMuY29tbW9uLCB0aGlzLmZvcm1OYW1lLCB0aGlzLnJlcXVpcmVkLCB0aGlzLl9jbGVhciwgdGhpcy5fbXlWYWxpZGF0b3IpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtc0NoYW5nZWQodGhpcy5zZWxlY3RlZEl0ZW1zLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGl0ZW1zQ2hhbmdlZChuZXdWYWx1ZTogYW55LCBvbGRWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fYXJlT2JqZWN0cyA9IEVsZW1lbnRVdGlsLmFyZU9iamVjdHModGhpcy5pdGVtcyk7XHJcbiAgICAgICAgLy9FbGVtZW50VXRpbC5jaGVja01heENoYXJzKHRoaXMuaXRlbXMsIHRoaXMuX2FyZU9iamVjdHMsIHRoaXMuZGlzcGxheUF0dHJpYnV0ZSk7XHJcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9IG51bGwgJiYgdGhpcy5zZWxlY3RlZEl0ZW1zICE9IG51bGwgJiYgdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZ2V0IGN1cnJlbnQgb2JqZWN0IGZyb20gc2VsZWN0ZWQgZGlzcGxheSBhdHRyaWJ1dGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hY3RpdmVNYXAgPSBFbGVtZW50VXRpbC5hY3RpdmVNYXAodGhpcy5pdGVtcywgdGhpcy5zZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWZhdWx0VmFsaWRhdGUoYXJncykge1xyXG4gICAgICAgIC8vIHdlIGFyZSBvbmx5IHZhbGlkYXRpbmcgdGhhdCB0aGVyZSBJUyBPTkUgdmFsdWVcclxuICAgICAgICByZXR1cm4gYXJncy5pdGVtcyAhPSBudWxsICYmIGFyZ3MuaXRlbXMubGVuZ3RoID4gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRJdGVtc0NoYW5nZWQobmV3VmFsdWU6IGFueSwgb2xkVmFsdWU6IGFueSkge1xyXG4gICAgICAgIC8vIGZpcmVkIHdoZW4gYXJyYXkgYWN0dWFsbHkgY2hhbmdlcywgdGhpcyBtZWFucyB0aGUgQVJSQVkgV0FTIFJFUExBQ0VEXHJcbiAgICAgICAgLy8gV2UgbmVlZCB0byByZXN1YnNjcmliZS5cclxuICAgICAgICB0aGlzLl9hcnJheU9ic2VydmVyID0gdGhpcy5vYnNlcnZlckxvY2F0b3IuZ2V0QXJyYXlPYnNlcnZlcih0aGlzLnNlbGVjdGVkSXRlbXMpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNlbGVjdGVkSXRlbXNIYXNDaGFuZ2VkKCkpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtc0hhc0NoYW5nZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRJdGVtc0hhc0NoYW5nZWQoKSB7XHJcbiAgICAgICAgLy8gd2UgZG9udCB3YW50IHRvIHZhbGlkYXRlIHN0dWZmIGJlZm9yZSBzdHVmZiBpcyBsb2FkZWQgICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVtYXBBY3RpdmVNYXAoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgRWxlbWVudFV0aWwuaXNWaXNpYmxlKHRoaXMuX2Zvcm1Hcm91cCkgKSB7IC8vICYmIHRoaXMuX3NlbGVjdGVkSXRlbXMgIT0gdGhpcy5zZWxlY3RlZEl0ZW1zICkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0aGlzLl92YWxpZGF0ZSh7IGl0ZW1zOiB0aGlzLnNlbGVjdGVkSXRlbXMgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHVwZGF0ZVNlbGVjdGlvbigpIHtcclxuICAgICAgICB0aGlzLnRhc2tRdWV1ZS5xdWV1ZVRhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZm9ybUdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbXMgPSBBcnJheS5mcm9tKHRoaXMuX2Zvcm1Hcm91cC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuXCIpKTtcclxuICAgICAgICAgICAgICAgIEVsZW1lbnRVdGlsLnNldEFjdGl2ZUZyb21BY3RpdmVNYXAoZWxlbXMsIHRoaXMuX2FjdGl2ZU1hcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIHRoaXMgaXMgZmlyZWQgQUZURVIgdGhlIGl0ZW0gY2hhbmdlcywgXHJcbiAgICAvLyBhbmQgb25seSBpZiB0aGUgaXRlbSBjaGFuZ2VzIGZyb20gVEhJUyBjb250cm9sLCBub3QgZnJvbSBleHRlcm5hbCBzb3VyY2VcclxuICAgIHB1YmxpYyBfY2hhbmdlZChldjogTW91c2VFdmVudCwgaW5kZXgpIHtcclxuXHJcbiAgICAgICAgLy8gZml4IHRoZSBhY3RpdmUvbm90IGFjdGl2ZSBjbGFzcyBiYXNlZCBvbiB2YWx1ZSwgXHJcbiAgICAgICAgLy8gbm90ZSB0aGF0IHRoaXMgaXMgaW5pdGlhbGx5IHNldCB2aWEgY29tbW9uLmlzQWN0aXZlIGJ1dCB0aGF0IG9ubHkgZXhlY3V0ZXMgb25jZVxyXG4gICAgICAgIC8vIHRoaXMuX2RpcnR5QWN0aXZlVHJpZ2dlciA9ICF0aGlzLl9kaXJ0eUFjdGl2ZVRyaWdnZXI7XHJcbiAgICAgICAgdGhpcy5yZW1hcEFjdGl2ZU1hcCgpO1xyXG4gICAgICAgIGxldCBhcmdzID0ge1xyXG4gICAgICAgICAgICBldmVudDogZXYsXHJcbiAgICAgICAgICAgIGl0ZW1zOiB0aGlzLnNlbGVjdGVkSXRlbXMsXHJcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh0aGlzLmNoYW5naW5nKSB7IHRoaXMuY2hhbmdpbmcoYXJncyk7IH1cclxuXHJcbiAgICAgICAgdGhpcy50YXNrUXVldWUucXVldWVNaWNyb1Rhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGFuZ2UpIHsgdGhpcy5jaGFuZ2UoKTsgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXRhY2hlZCgpIHtcclxuICAgICAgICBFbGVtZW50VXRpbC5kZXRhY2hlZCh0aGlzLmNvbW1vbiwgdGhpcy5mb3JtTmFtZSwgdGhpcy5yZXF1aXJlZCwgdGhpcy5fY2xlYXIsIHRoaXMuX215VmFsaWRhdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB3dGYgaXMgdGhpcyB5b3UgbWlnaHQgYXNrLlxyXG4gICAgLy8gc2VlIHlvdSBtYXkgaGF2ZSBhbiBhcnJheSwgYW5kIHRoYXQgYXJyYXkgbWF5IGNoYW5nZWRcclxuICAgIC8vIHRoYXQgYXJyYXkgbWlnaHQgaGF2ZSBvdGhlciB0aGluZ3MgYm91bmQgdG8gaXQuLi5cclxuICAgIC8vIHRoaXMgd2lsbCBlbnN1cmUgdG8gcmViaW5kIHRoZSBhY3RpdmUgdmFyaWFibGUgd2hlbiB0aGUgc2VsZWN0ZWRJdGVtcyBhcnJheSBpcyBtb2RpZmllZFxyXG4gICAgcHJpdmF0ZSByZW1hcEFjdGl2ZU1hcCgpIHtcclxuICAgICAgICBsZXQgbmV3TWFwOiBib29sZWFuW10gPSBbXTtcclxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdmFsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5mb3JFYWNoKChzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hcmVPYmplY3RzICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBETyBOT1QgQ0hBTkdFIFRIRVNFIFRPID09PSAgIFwiMVwiICE9IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVBdHRyaWJ1dGUgJiYgcyA9PSBvYmpbdGhpcy52YWx1ZUF0dHJpYnV0ZV0pIHsgdmFsID0gdHJ1ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghdmFsICYmIHMgPT0gb2JqKSB7IHZhbCA9IHRydWU7IH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocyA9PT0gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbmV3TWFwLnB1c2godmFsKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9hY3RpdmVNYXAgPSBuZXdNYXA7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/datepicker',["require", "exports", "aurelia-framework", "moment", "../common", "./common/element-util", "pickadate", "pickadate/date"], function (require, exports, aurelia_framework_1, moment, common_1, element_util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CEDatepicker = (function () {
        function CEDatepicker(common, taskQueue) {
            var _this = this;
            this.iconPlacement = "post";
            this.btnClass = "btn-secondary";
            this.disabled = false;
            this.placeholder = "Select Date";
            this.warningMsg = "Warning";
            this.isWarning = false;
            this.required = false;
            this.errorMsg = "Value required";
            this.isValid = true;
            this.isOverrideInvalid = false;
            this.options = {};
            this.showInlineHelp = false;
            this.showInlineHelpLink = false;
            this.inlineHelpMsg = "Bind Help Text HERE";
            this.inlineHelpMsgAfterLink = ".";
            this.inlineHelpLinkText = "More";
            this.inlineHelpLink = "http://www.google.com";
            this.formName = "default";
            this._emptyValue = null;
            this._isOpen = false;
            this.common = common;
            this.taskQueue = taskQueue;
            this._validate = this.defaultValidate;
            this._options = {};
            this._options.format = "mm/dd/yyyy";
            this._options.editable = !this.common.mobilecheck();
            this._options.selectMonths = true;
            this._options.selectYears = 80;
            this._options.editable = true;
            this._options.container = "#dtpickerdialog";
            this._clear = function (onlyClearValidation) {
                _this.isValid = true;
                if (!onlyClearValidation) {
                    _this.date = _this._emptyValue;
                    _this._datevalue = '';
                }
            };
            this._myValidator = function () {
                if (_this.required && element_util_1.default.isVisible(_this._formGroup)) {
                    _this.isValid = _this._validate({ date: _this.date });
                }
                return _this.isValid;
            };
        }
        CEDatepicker.prototype.attached = function () {
            var _this = this;
            this.isValid = true;
            if (this.validate) {
                this._validate = this.validate;
            }
            element_util_1.default.attached(this.common, this.formName, this.required, this._clear, this._myValidator);
            for (var p in this.options) {
                this._options[p] = this.options[p];
            }
            if (this._input) {
                var _dp = jQuery(this._input).pickadate(this._options);
                this._dp = _dp.pickadate("picker");
                this._dp.on("set", function (arg) { _this.dp_set(arg); });
                this._dp.on("open", function (arg) { _this.dp_open(); });
                this._dp.on("close", function (arg) { _this.dp_closed(); });
                if (this.date) {
                    this._dp.set("select", this.date);
                }
            }
            else {
                this.taskQueue.queueMicroTask(function () {
                    var _dp = jQuery(_this._input).pickadate(_this._options);
                    _this._dp = _dp.pickadate("picker");
                    _this._dp.on("set", function (arg) { _this.dp_set(arg); });
                    _this._dp.on("open", function (arg) { _this.dp_open(); });
                    _this._dp.on("close", function (arg) { _this.dp_closed(); });
                    if (_this.date) {
                        _this._dp.set("select", _this.date);
                    }
                });
            }
        };
        CEDatepicker.prototype.show = function () {
            this._dp.open();
        };
        CEDatepicker.prototype.dp_open = function () {
            this._isOpen = true;
        };
        CEDatepicker.prototype.dp_closed = function () {
            this._isOpen = false;
        };
        CEDatepicker.prototype.dp_set = function (arg) {
            var _this = this;
            if (arg.clear) {
                this._date = null;
                if (this.date != null) {
                    this.date = this._date;
                    if (this.required && element_util_1.default.isVisible(this._formGroup)) {
                        this.isValid = this._validate({ date: this.date });
                    }
                    if (this.changing) {
                        this.changing({ date: this.date });
                    }
                    this.taskQueue.queueMicroTask(function () {
                        if (_this.change) {
                            _this.change();
                        }
                    });
                }
            }
            else if (arg.select) {
                this._date = moment(arg.select).toDate();
                if (this.date == null || this.date.valueOf() !== this._date.valueOf()) {
                    this.date = this._date;
                    if (this.required && element_util_1.default.isVisible(this._formGroup)) {
                        this.isValid = this._validate({ date: this.date });
                    }
                    if (this.changing) {
                        this.changing({ date: this.date });
                    }
                    this.taskQueue.queueMicroTask(function () {
                        if (_this.change) {
                            _this.change();
                        }
                    });
                }
            }
        };
        CEDatepicker.prototype.dateChanged = function (newValue, oldValue) {
            if (this.date == null && this._date != null) {
                if (this._dp) {
                    this._dp.clear();
                }
            }
            else if (this.date != null && this.date.constructor != Date) {
                console.log("Critical Data Error: Trying to set Date to string.");
            }
            else if (this.date != null && this._date == null
                || (this.date != null && this._date != null
                    && this.date.valueOf() !== this._date.valueOf())) {
                if (this._dp) {
                    this._dp.set("select", this.date);
                }
                if (this.required && element_util_1.default.isVisible(this._formGroup)) {
                    this.isValid = this._validate({ date: this.date });
                }
            }
            else if (this.date == null) {
                this._datevalue = '';
            }
        };
        CEDatepicker.prototype._changed = function (ev, index) {
            var _this = this;
            if (this.changing) {
                this.changing({
                    date: this.date,
                    event: ev
                });
            }
            this.taskQueue.queueMicroTask(function () {
                if (_this.change) {
                    _this.change();
                }
            });
            if (this.required && element_util_1.default.isVisible(this._formGroup)) {
                this.isValid = this._validate({ date: this.date });
            }
            return true;
        };
        CEDatepicker.prototype.defaultValidate = function (args) {
            return args.date != null && args.date !== "";
        };
        CEDatepicker.prototype.detached = function () {
            element_util_1.default.detached(this.common, this.formName, this.required, this._clear, this._myValidator);
        };
        CEDatepicker.prototype._blurFunc = function (ev) {
            if (this._datevalue !== this.datevalue) {
                this.datevalue = this._datevalue;
                var m = moment(this._datevalue, "MM-DD-YYYY");
                if (m !== null && m.isValid()) {
                    this._date = m.toDate();
                    this._dp.set("select", m.toDate());
                }
            }
            if (!this._datevalue && !ev.target.value) {
                this._clear();
            }
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], CEDatepicker.prototype, "date", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], CEDatepicker.prototype, "iconPlacement", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], CEDatepicker.prototype, "btnClass", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CEDatepicker.prototype, "disabled", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEDatepicker.prototype, "label", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEDatepicker.prototype, "pre", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEDatepicker.prototype, "instructions", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEDatepicker.prototype, "placeholder", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEDatepicker.prototype, "warningMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CEDatepicker.prototype, "isWarning", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CEDatepicker.prototype, "required", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEDatepicker.prototype, "errorMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CEDatepicker.prototype, "isValid", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CEDatepicker.prototype, "isOverrideInvalid", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], CEDatepicker.prototype, "options", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CEDatepicker.prototype, "showInlineHelp", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CEDatepicker.prototype, "showInlineHelpLink", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEDatepicker.prototype, "inlineHelpMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEDatepicker.prototype, "inlineHelpMsgAfterLink", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEDatepicker.prototype, "inlineHelpLinkText", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEDatepicker.prototype, "inlineHelpLink", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], CEDatepicker.prototype, "formName", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], CEDatepicker.prototype, "changing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], CEDatepicker.prototype, "change", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], CEDatepicker.prototype, "validate", void 0);
        CEDatepicker = __decorate([
            aurelia_framework_1.customElement("ce-datepicker"),
            aurelia_framework_1.autoinject(),
            __metadata("design:paramtypes", [common_1.Common, aurelia_framework_1.TaskQueue])
        ], CEDatepicker);
        return CEDatepicker;
    }());
    exports.CEDatepicker = CEDatepicker;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy9kYXRlcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQVdBO1FBbURJLHNCQUFZLE1BQWMsRUFBRSxTQUFvQjtZQUFoRCxpQkEyQkM7WUF0RWdCLGtCQUFhLEdBQVcsTUFBTSxDQUFDO1lBQy9CLGFBQVEsR0FBVyxlQUFlLENBQUM7WUFFUyxhQUFRLEdBQVksS0FBSyxDQUFDO1lBSTFCLGdCQUFXLEdBQVcsYUFBYSxDQUFDO1lBQ3BDLGVBQVUsR0FBVyxTQUFTLENBQUM7WUFDL0IsY0FBUyxHQUFZLEtBQUssQ0FBQztZQUMzQixhQUFRLEdBQVksS0FBSyxDQUFDO1lBQzFCLGFBQVEsR0FBVyxnQkFBZ0IsQ0FBQztZQUNwQyxZQUFPLEdBQVksSUFBSSxDQUFDO1lBQ3hCLHNCQUFpQixHQUFZLEtBQUssQ0FBQztZQUNuQyxZQUFPLEdBQVEsRUFBRSxDQUFDO1lBQ2xCLG1CQUFjLEdBQVksS0FBSyxDQUFDO1lBQ2hDLHVCQUFrQixHQUFZLEtBQUssQ0FBQztZQUNwQyxrQkFBYSxHQUFXLHFCQUFxQixDQUFDO1lBQzlDLDJCQUFzQixHQUFXLEdBQUcsQ0FBQztZQUNyQyx1QkFBa0IsR0FBVyxNQUFNLENBQUM7WUFDcEMsbUJBQWMsR0FBVyx1QkFBdUIsQ0FBQztZQUU3RixhQUFRLEdBQVcsU0FBUyxDQUFDO1lBa0J0QyxnQkFBVyxHQUFRLElBQUksQ0FBQztZQUN4QixZQUFPLEdBQVksS0FBSyxDQUFDO1lBRzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBRTNCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUV0QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7WUFDcEMsSUFBSSxDQUFDLFFB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VyxDQUFDLE1BQU0sRUFBRSxDQUFDOzs0REFBd0M7UUFDdkM7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7O2dFQUE0QztRQUMzQztZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7MkRBQXNEO1FBQ3JEO1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOztvRUFBNkM7UUFDNUM7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7O2dFQUE0QztRQUMzQztZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7NERBQXlEO1FBRXBHO1lBQVQsNEJBQVE7O3NEQUFxQztRQUNwQztZQUFULDRCQUFRO3NDQUFrQixRQUFRO3NEQUFDO1FBQzFCO1lBQVQsNEJBQVE7c0NBQWdCLFFBQVE7b0RBQUM7UUFDeEI7WUFBVCw0QkFBUTtzQ0FBa0IsUUFBUTtzREFBQztRQWpDM0IsWUFBWTtZQUZ4QixpQ0FBYSxDQUFDLGVBQWUsQ0FBQztZQUM5Qiw4QkFBVSxFQUFFOzZDQW9EVyxlQUFNLEVBQWEsNkJBQVM7V0FuRHZDLFlBQVksQ0F1UHhCO1FBQUQsbUJBQUM7S0F2UEQsQUF1UEMsSUFBQTtJQXZQWSxvQ0FBWSIsImZpbGUiOiJyZXNvdXJjZXMvZWxlbWVudHMvZGF0ZXBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgY3VzdG9tRWxlbWVudCwgVGFza1F1ZXVlfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7IENvbW1vbiB9IGZyb20gXCIuLi9jb21tb25cIjtcclxuaW1wb3J0IEVsZW1lbnRVdGlsIGZyb20gXCIuL2NvbW1vbi9lbGVtZW50LXV0aWxcIjtcclxuXHJcbmltcG9ydCBcInBpY2thZGF0ZVwiO1xyXG5pbXBvcnQgXCJwaWNrYWRhdGUvZGF0ZVwiO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoXCJjZS1kYXRlcGlja2VyXCIpXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIENFRGF0ZXBpY2tlciB7XHJcbiAgICBwdWJsaWMgY29tbW9uOiBDb21tb247XHJcbiAgICBwdWJsaWMgdGFza1F1ZXVlOiBUYXNrUXVldWU7XHJcblxyXG4gICAgIC8qKiBkYXRlcGlja2VyIG9wdGlvbnMgKi9cclxuICAgIHB1YmxpYyBfb3B0aW9uczogUGlja2FkYXRlLkRhdGVPcHRpb25zO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBkYXRlOiBhbnk7XHJcbiAgICBAYmluZGFibGUgcHVibGljIGljb25QbGFjZW1lbnQ6IHN0cmluZyA9IFwicG9zdFwiOyAvLyBvciBcInByZVwiXHJcbiAgICBAYmluZGFibGUgcHVibGljIGJ0bkNsYXNzOiBzdHJpbmcgPSBcImJ0bi1zZWNvbmRhcnlcIjsgLy8gb3IgYnRuLXByaW1hcnlcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHByZTogc3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGluc3RydWN0aW9uczogc3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIlNlbGVjdCBEYXRlXCI7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgd2FybmluZ01zZzogc3RyaW5nID0gXCJXYXJuaW5nXCI7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaXNXYXJuaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBlcnJvck1zZzogc3RyaW5nID0gXCJWYWx1ZSByZXF1aXJlZFwiO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGlzVmFsaWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGlzT3ZlcnJpZGVJbnZhbGlkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgb3B0aW9uczogYW55ID0ge307XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgc2hvd0lubGluZUhlbHA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBzaG93SW5saW5lSGVscExpbms6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpbmxpbmVIZWxwTXNnOiBzdHJpbmcgPSBcIkJpbmQgSGVscCBUZXh0IEhFUkVcIjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpbmxpbmVIZWxwTXNnQWZ0ZXJMaW5rOiBzdHJpbmcgPSBcIi5cIjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpbmxpbmVIZWxwTGlua1RleHQ6IHN0cmluZyA9IFwiTW9yZVwiO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGlubGluZUhlbHBMaW5rOiBzdHJpbmcgPSBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbVwiO1xyXG4gICAgXHJcbiAgICBAYmluZGFibGUgcHVibGljIGZvcm1OYW1lOiBzdHJpbmcgPSBcImRlZmF1bHRcIjtcclxuICAgIEBiaW5kYWJsZSBwdWJsaWMgY2hhbmdpbmc6IEZ1bmN0aW9uO1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyBjaGFuZ2U6IEZ1bmN0aW9uOyAvLyBjYWxsIHZpYSBjaGFuZ2UuY2FsbD1cImZ1bmN0aW9uTmFtZVwiXHJcbiAgICBAYmluZGFibGUgcHVibGljIHZhbGlkYXRlOiBGdW5jdGlvbjtcclxuXHJcbiAgICAvKiogX2RhdGUgSW50ZXJuYWwgZGF0ZSBmaWVsZCAqL1xyXG4gICAgcHJpdmF0ZSBfZGF0ZTogRGF0ZTtcclxuXHJcbiAgICBwcml2YXRlIGRhdGV2YWx1ZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfZGF0ZXZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBfZHA6IGFueTtcclxuICAgIHByaXZhdGUgX2lucHV0OiBFbGVtZW50O1xyXG5cclxuICAgIHByaXZhdGUgX3ZhbGlkYXRlOiBGdW5jdGlvbjtcclxuICAgIHByaXZhdGUgX2Zvcm1Hcm91cDogYW55OyAvLyBlbGVtZW50IHJlZlxyXG4gICAgcHJpdmF0ZSBfY2xlYXI6IEZ1bmN0aW9uOyAvLyBzZXQgaW4gaW5oZXJpdG9yXHJcbiAgICBwcml2YXRlIF9teVZhbGlkYXRvcjogRnVuY3Rpb247IC8vIHNldCBpbiBpbmhlcml0b3JcclxuICAgIHByaXZhdGUgX2VtcHR5VmFsdWU6IGFueSA9IG51bGw7ICAvLyB3aWxsIGJlIG51bGwgaWYgb2JqZWN0cywgXCJcIiBpZiBzdHJpbmdcclxuICAgIHByaXZhdGUgX2lzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbW1vbjogQ29tbW9uLCB0YXNrUXVldWU6IFRhc2tRdWV1ZSkge1xyXG4gICAgICAgIHRoaXMuY29tbW9uID0gY29tbW9uO1xyXG4gICAgICAgIHRoaXMudGFza1F1ZXVlID0gdGFza1F1ZXVlO1xyXG5cclxuICAgICAgICB0aGlzLl92YWxpZGF0ZSA9IHRoaXMuZGVmYXVsdFZhbGlkYXRlO1xyXG5cclxuICAgICAgICB0aGlzLl9vcHRpb25zID0ge307XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5mb3JtYXQgPSBcIm1tL2RkL3l5eXlcIjtcclxuICAgICAgICB0aGlzLl9vcHRpb25zLmVkaXRhYmxlID0gIXRoaXMuY29tbW9uLm1vYmlsZWNoZWNrKCk7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5zZWxlY3RNb250aHMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMuc2VsZWN0WWVhcnMgPSA4MDtcclxuICAgICAgICB0aGlzLl9vcHRpb25zLmVkaXRhYmxlID0gdHJ1ZTtcclxuICAgICAgICAvLyB0aGlzLl9vcHRpb25zLmNvbnRhaW5lckhpZGRlbiA9IFwiI2R0cGlja2VyZGlhbG9nXCI7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5jb250YWluZXIgPSBcIiNkdHBpY2tlcmRpYWxvZ1wiO1xyXG4gICAgICAgIC8vdGhpcy5fb3B0aW9ucy5tYXggPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLl9jbGVhciA9IChvbmx5Q2xlYXJWYWxpZGF0aW9uOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICghb25seUNsZWFyVmFsaWRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlID0gdGhpcy5fZW1wdHlWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGV2YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fbXlWYWxpZGF0b3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlcXVpcmVkICYmIEVsZW1lbnRVdGlsLmlzVmlzaWJsZSh0aGlzLl9mb3JtR3JvdXApKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSAgdGhpcy5fdmFsaWRhdGUoeyBkYXRlOiB0aGlzLmRhdGUgfSk7IH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZDsgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0ZSkgeyB0aGlzLl92YWxpZGF0ZSA9IHRoaXMudmFsaWRhdGU7IH1cclxuICAgICAgICBFbGVtZW50VXRpbC5hdHRhY2hlZCh0aGlzLmNvbW1vbiwgdGhpcy5mb3JtTmFtZSwgdGhpcy5yZXF1aXJlZCwgdGhpcy5fY2xlYXIsIHRoaXMuX215VmFsaWRhdG9yKTtcclxuXHJcbiAgICAgICAgZm9yKHZhciBwIGluIHRoaXMub3B0aW9ucyl7XHJcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnNbcF0gPSB0aGlzLm9wdGlvbnNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGluaXRpYWxpemUgcGlja2FkYXRlXHJcbiAgICAgICAgaWYodGhpcy5faW5wdXQpIHtcclxuICAgICAgICAgICAgbGV0IF9kcCA9IGpRdWVyeSh0aGlzLl9pbnB1dCkucGlja2FkYXRlKHRoaXMuX29wdGlvbnMpO1xyXG4gICAgICAgICAgICB0aGlzLl9kcCA9IF9kcC5waWNrYWRhdGUoXCJwaWNrZXJcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX2RwLm9uKFwic2V0XCIsIChhcmc6IGFueSkgPT4geyB0aGlzLmRwX3NldChhcmcpOyB9ICk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RwLm9uKFwib3BlblwiLCAoYXJnOiBhbnkpID0+IHsgdGhpcy5kcF9vcGVuKCk7IH0gKTtcclxuICAgICAgICAgICAgdGhpcy5fZHAub24oXCJjbG9zZVwiLCAoYXJnOiBhbnkpID0+IHsgdGhpcy5kcF9jbG9zZWQoKTsgfSApO1xyXG5cclxuICAgICAgICAgICAgLy8gdGhlIGRhdGVDaGFuZ2VkIG1heSBiZSBmaXJlZCBiZWZvcmUgYXR0YWNoZWQsIHRoZXJlZm9yZSB3ZSBuZWVkIHRvIHNldCB0aGUgZGF0ZXBpY2tlciBoZXJlIGlmIGl0IHdhcyBhbHJlYWR5IHNldFxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kcC5zZXQoXCJzZWxlY3RcIiwgdGhpcy5kYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLnRhc2tRdWV1ZS5xdWV1ZU1pY3JvVGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgX2RwID0galF1ZXJ5KHRoaXMuX2lucHV0KS5waWNrYWRhdGUodGhpcy5fb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kcCA9IF9kcC5waWNrYWRhdGUoXCJwaWNrZXJcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kcC5vbihcInNldFwiLCAoYXJnOiBhbnkpID0+IHsgdGhpcy5kcF9zZXQoYXJnKTsgfSApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZHAub24oXCJvcGVuXCIsIChhcmc6IGFueSkgPT4geyB0aGlzLmRwX29wZW4oKTsgfSApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZHAub24oXCJjbG9zZVwiLCAoYXJnOiBhbnkpID0+IHsgdGhpcy5kcF9jbG9zZWQoKTsgfSApO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAvLyB0aGUgZGF0ZUNoYW5nZWQgbWF5IGJlIGZpcmVkIGJlZm9yZSBhdHRhY2hlZCwgdGhlcmVmb3JlIHdlIG5lZWQgdG8gc2V0IHRoZSBkYXRlcGlja2VyIGhlcmUgaWYgaXQgd2FzIGFscmVhZHkgc2V0XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHAuc2V0KFwic2VsZWN0XCIsIHRoaXMuZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvdygpIHsgLy8gRm9yIHNob3cgYnV0dG9uIG9ubHlcclxuICAgICAgICB0aGlzLl9kcC5vcGVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayB3aGVuIHRoZSBkYXRlcGlja2VyIGlzIG9wZW5lZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZHBfb3BlbigpIHtcclxuICAgICAgICB0aGlzLl9pc09wZW4gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgd2hlbiB0aGUgZGF0ZXBpY2tlciBpcyBvcGVuZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRwX2Nsb3NlZCgpIHtcclxuICAgICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHdoZW4gdGhlIGRhdGVwaWNrZXIgaXMgc2V0XHJcbiAgICAgKiBAcGFyYW0gYXJnIHtzZWxlY3Q6IGRhdGUgPSBEYXRlLnZhbHVlT2Ygb3IgY2xlYXI6IG51bGwgfVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZHBfc2V0KGFyZzogYW55KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXJnKTtcclxuICAgICAgICAvLyBhcmcuc2VsZWN0ID0gZGF0ZVxyXG4gICAgICAgIC8vIGFyZy5jbGVhciA9IG51bGxcclxuXHJcbiAgICAgICAgaWYgKGFyZy5jbGVhcikge1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRlID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGUgPSB0aGlzLl9kYXRlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlcXVpcmVkICYmIEVsZW1lbnRVdGlsLmlzVmlzaWJsZSh0aGlzLl9mb3JtR3JvdXApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5fdmFsaWRhdGUoeyBkYXRlOiB0aGlzLmRhdGUgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGFuZ2luZykgeyB0aGlzLmNoYW5naW5nKHtkYXRlOiB0aGlzLmRhdGV9KTsgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1F1ZXVlLnF1ZXVlTWljcm9UYXNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGFuZ2UpIHsgdGhpcy5jaGFuZ2UoKTsgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYXJnLnNlbGVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRlID0gbW9tZW50KGFyZy5zZWxlY3QpLnRvRGF0ZSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRlID09IG51bGwgfHwgdGhpcy5kYXRlLnZhbHVlT2YoKSAhPT0gdGhpcy5fZGF0ZS52YWx1ZU9mKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZSA9IHRoaXMuX2RhdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgRWxlbWVudFV0aWwuaXNWaXNpYmxlKHRoaXMuX2Zvcm1Hcm91cCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0aGlzLl92YWxpZGF0ZSh7IGRhdGU6IHRoaXMuZGF0ZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoYW5naW5nKSB7IHRoaXMuY2hhbmdpbmcoe2RhdGU6IHRoaXMuZGF0ZX0pOyB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrUXVldWUucXVldWVNaWNyb1Rhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoYW5nZSkgeyB0aGlzLmNoYW5nZSgpOyB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcyBpcyBmaXJlZCBiZWZvcmUgdGhlIGRhdGUgY2hhbmdlcyxcclxuICAgIC8vIGFuZCBpZiB0aGUgZGF0ZSBpcyBjaGFuZ2VkIGV4dGVybmFsbHkgb3IgaW50ZXJuYWxseS5cclxuICAgIHB1YmxpYyBkYXRlQ2hhbmdlZChuZXdWYWx1ZTogYW55LCBvbGRWYWx1ZTogYW55KSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGUgPT0gbnVsbCAmJiB0aGlzLl9kYXRlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kcC5jbGVhcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5kYXRlICE9IG51bGwgJiYgdGhpcy5kYXRlLmNvbnN0cnVjdG9yICE9IERhdGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDcml0aWNhbCBEYXRhIEVycm9yOiBUcnlpbmcgdG8gc2V0IERhdGUgdG8gc3RyaW5nLlwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmRhdGUgIT0gbnVsbCAmJiB0aGlzLl9kYXRlID09IG51bGxcclxuICAgICAgICAgICAgICAgICB8fCAodGhpcy5kYXRlICE9IG51bGwgJiYgdGhpcy5fZGF0ZSAhPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgJiYgdGhpcy5kYXRlLnZhbHVlT2YoKSAhPT0gdGhpcy5fZGF0ZS52YWx1ZU9mKCkpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kcCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZHAuc2V0KFwic2VsZWN0XCIsIHRoaXMuZGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgRWxlbWVudFV0aWwuaXNWaXNpYmxlKHRoaXMuX2Zvcm1Hcm91cCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRoaXMuX3ZhbGlkYXRlKHsgZGF0ZTogdGhpcy5kYXRlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZGF0ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGV2YWx1ZSA9ICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcyBpcyBmaXJlZCBBRlRFUiB0aGUgZGF0ZSBjaGFuZ2VzLFxyXG4gICAgLy8gYW5kIG9ubHkgaWYgdGhlIGRhdGUgY2hhbmdlcyBmcm9tIFRISVMgY29udHJvbCwgbm90IGZyb20gZXh0ZXJuYWwgc291cmNlXHJcbiAgICBwdWJsaWMgX2NoYW5nZWQoZXYsIGluZGV4KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbmdpbmcpIHsgdGhpcy5jaGFuZ2luZyh7XHJcbiAgICAgICAgICAgIGRhdGU6IHRoaXMuZGF0ZSxcclxuICAgICAgICAgICAgZXZlbnQ6IGV2fSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRhc2tRdWV1ZS5xdWV1ZU1pY3JvVGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYW5nZSkgeyB0aGlzLmNoYW5nZSgpOyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgRWxlbWVudFV0aWwuaXNWaXNpYmxlKHRoaXMuX2Zvcm1Hcm91cCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5fdmFsaWRhdGUoeyBkYXRlOiB0aGlzLmRhdGUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWZhdWx0VmFsaWRhdGUoYXJncyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIHdlIGFyZSBvbmx5IHZhbGlkYXRpbmcgdGhhdCB0aGVyZSBpcyBhbiBkYXRlLCBhbmQgaXQgaXMgbG9uZ2VyIHRoYW4gXCJcIlxyXG4gICAgICAgIHJldHVybiBhcmdzLmRhdGUgIT0gbnVsbCAmJiBhcmdzLmRhdGUgIT09IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRldGFjaGVkKCkge1xyXG4gICAgICAgIEVsZW1lbnRVdGlsLmRldGFjaGVkKHRoaXMuY29tbW9uLCB0aGlzLmZvcm1OYW1lLCB0aGlzLnJlcXVpcmVkLCB0aGlzLl9jbGVhciwgdGhpcy5fbXlWYWxpZGF0b3IpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIF9ibHVyRnVuYyhldikge1xyXG4gICAgICAgIC8vIFNldCBDaGFuZ2VkIG9uIEJsdXJcclxuICAgICAgICBpZiAodGhpcy5fZGF0ZXZhbHVlICE9PSB0aGlzLmRhdGV2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGV2YWx1ZSA9IHRoaXMuX2RhdGV2YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgbSA9IG1vbWVudCh0aGlzLl9kYXRldmFsdWUsIFwiTU0tREQtWVlZWVwiKTtcclxuICAgICAgICAgICAgaWYgKG0gIT09IG51bGwgJiYgbS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGUgPSBtLnRvRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZHAuc2V0KFwic2VsZWN0XCIsIG0udG9EYXRlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5fZGF0ZXZhbHVlICYmICFldi50YXJnZXQudmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2xlYXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKHRoaXMucmVxdWlyZWQgJiYgRWxlbWVudFV0aWwuaXNWaXNpYmxlKHRoaXMuX2Zvcm1Hcm91cCkpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5fdmFsaWRhdGUoeyBkYXRlOiB0aGlzLmRhdGUgfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/dropdown',["require", "exports", "aurelia-framework", "lodash", "../common", "./common/element-util"], function (require, exports, aurelia_framework_1, _, common_1, element_util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DropDown = (function () {
        function DropDown(common, taskQueue) {
            var _this = this;
            this.type = "radiolist";
            this.disabled = false;
            this.placeholder = "";
            this.warningMsg = "Warning";
            this.infoMsg = "";
            this.isWarning = false;
            this.required = false;
            this.errorMsg = "Value required";
            this.isValid = true;
            this.formName = "default";
            this.isRadio = false;
            this.isOverrideInvalid = false;
            this._item = null;
            this._areObjects = false;
            this._emptyValue = null;
            this.common = common;
            this.taskQueue = taskQueue;
            this._validate = this.defaultValidate;
            this._clear = function (onlyClearValidation) {
                _this.isValid = true;
                if (!onlyClearValidation) {
                    _this._item = _this._emptyValue;
                    _this.item = _this._emptyValue;
                    _this._activeMap = element_util_1.default.activeMap(_this.items, _this._item);
                    _this.updateSelection();
                }
            };
            this._myValidator = function () {
                if (_this.required && element_util_1.default.isVisible(_this._formGroup)) {
                    _this.isValid = _this._validate({ item: _this.item });
                }
                return _this.isValid;
            };
        }
        DropDown.prototype.attached = function () {
            this.isValid = true;
            if (this.validate) {
                this._validate = this.validate;
            }
            element_util_1.default.attached(this.common, this.formName, this.required, this._clear, this._myValidator);
            if (this.item != null) {
                this.itemChanged(this.item, null);
            }
        };
        DropDown.prototype.itemsChanged = function (newValue, oldValue) {
            this._areObjects = element_util_1.default.areObjects(this.items);
            if (newValue != null && this.item != null) {
                this._activeMap = element_util_1.default.activeMap(this.items, this._item);
                this.updateSelection();
            }
        };
        DropDown.prototype.itemChanged = function (newValue, oldValue) {
            if (!this.items) {
                return;
            }
            var wasChanged = false;
            if (!this._areObjects) {
                if (this._item !== newValue) {
                    this._item = newValue;
                    wasChanged = true;
                }
            }
            else if (this._areObjects) {
                if (newValue == null || newValue === "") {
                    if (this._item != null) {
                        this._item = null;
                        wasChanged = true;
                    }
                }
                else {
                    var selected = null;
                    if (newValue.constructor === String || newValue.constructor === Number) {
                        selected = this.findItemByAttribute(newValue, this.valueAttribute);
                        if (!_.isEqual(selected, this._item)) {
                            this._item = selected;
                            wasChanged = true;
                        }
                    }
                    else {
                        if (!_.isEqual(newValue, this._item)) {
                            this._item = newValue;
                            wasChanged = true;
                        }
                    }
                }
            }
            if (wasChanged) {
                this._activeMap = element_util_1.default.activeMap(this.items, this._item);
                this.updateSelection();
            }
            if (this.required && element_util_1.default.isVisible(this._formGroup)) {
                this.isValid = this._validate({ item: this.item });
            }
        };
        DropDown.prototype.updateSelection = function () {
            var _this = this;
            this.taskQueue.queueTask(function () {
                if (_this._formGroup) {
                    if (_this.type === "dropdown") {
                        var elems = Array.from(_this._formGroup.getElementsByTagName("option"));
                        element_util_1.default.setOptionFromActiveMap(elems, _this._activeMap);
                    }
                    else {
                        element_util_1.default.removeAllActiveChildren(_this._formGroup);
                        var elems = Array.from(_this._formGroup.getElementsByClassName("btn"));
                        element_util_1.default.setActiveFromActiveMap(elems, _this._activeMap);
                    }
                }
            });
        };
        DropDown.prototype._itemChanged = function () {
            var wasChanged = false;
            if (!this._areObjects) {
                if (this.item !== this._item) {
                    this.item = this._item;
                    wasChanged = true;
                }
            }
            if (this._areObjects) {
                if (this.valueAttribute) {
                    if (this.item !== this._item[this.valueAttribute]) {
                        this.item = this._item[this.valueAttribute];
                        wasChanged = true;
                    }
                }
                if (!this.valueAttribute) {
                    if (this.item !== this._item) {
                        this.item = this._item;
                        wasChanged = true;
                    }
                }
            }
            if (wasChanged) {
                this._activeMap = element_util_1.default.activeMap(this.items, this._item);
                this.updateSelection();
            }
        };
        DropDown.prototype.defaultValidate = function (args) {
            return args.item !== "" && args.item != null;
        };
        DropDown.prototype.findItemByAttribute = function (attrValue, prop) {
            var selected = null;
            if (attrValue.constructor !== String
                && attrValue.constructor !== Number) {
                attrValue = attrValue[prop];
            }
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i][prop] === attrValue && selected == null) {
                    selected = this.items[i];
                }
            }
            return selected;
        };
        DropDown.prototype._changed = function (ev, index) {
            var _this = this;
            this._itemChanged();
            if (this.changing) {
                this.changing({
                    event: ev,
                    item: this.item,
                    index: index
                });
            }
            this.taskQueue.queueMicroTask(function () {
                if (_this.change) {
                    _this.change();
                }
            });
            element_util_1.default.removeAllActiveChildren(this._formGroup);
            ev.target.parentElement.classList.add("active");
            return true;
        };
        DropDown.prototype.detached = function () {
            element_util_1.default.detached(this.common, this.formName, this.required, this._clear, this._myValidator);
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], DropDown.prototype, "type", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], DropDown.prototype, "item", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], DropDown.prototype, "items", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], DropDown.prototype, "displayAttribute", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], DropDown.prototype, "valueAttribute", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], DropDown.prototype, "disabledAttribute", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], DropDown.prototype, "visibleAttribute", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], DropDown.prototype, "disabled", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], DropDown.prototype, "label", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], DropDown.prototype, "pre", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], DropDown.prototype, "instructions", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], DropDown.prototype, "placeholder", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], DropDown.prototype, "warningMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], DropDown.prototype, "infoMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], DropDown.prototype, "isWarning", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], DropDown.prototype, "required", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], DropDown.prototype, "errorMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], DropDown.prototype, "isValid", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], DropDown.prototype, "formName", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], DropDown.prototype, "isRadio", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], DropDown.prototype, "changing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], DropDown.prototype, "change", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], DropDown.prototype, "validate", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], DropDown.prototype, "isOverrideInvalid", void 0);
        DropDown = __decorate([
            aurelia_framework_1.customElement("ce-dropdown"),
            aurelia_framework_1.autoinject(),
            __metadata("design:paramtypes", [common_1.Common, aurelia_framework_1.TaskQueue])
        ], DropDown);
        return DropDown;
    }());
    exports.DropDown = DropDown;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy9kcm9wZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFVQTtRQTRDSSxrQkFBWSxNQUFjLEVBQUUsU0FBb0I7WUFBaEQsaUJBcUJDO1lBN0Q0RCxTQUFJLEdBQVcsV0FBVyxDQUFDO1lBUzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7WUFJMUIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7WUFDekIsZUFBVSxHQUFXLFNBQVMsQ0FBQztZQUMvQixZQUFPLEdBQVcsRUFBRSxDQUFDO1lBQ3JCLGNBQVMsR0FBWSxLQUFLLENBQUM7WUFDM0IsYUFBUSxHQUFZLEtBQUssQ0FBQztZQUMxQixhQUFRLEdBQVcsZ0JBQWdCLENBQUM7WUFDcEMsWUFBTyxHQUFZLElBQUksQ0FBQztZQUVwRSxhQUFRLEdBQVcsU0FBUyxDQUFDO1lBQzdCLFlBQU8sR0FBWSxLQUFLLENBQUM7WUFJbUIsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1lBS3hGLFVBQUssR0FBUSxJQUFJLENBQUM7WUFDbEIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7WUFNN0IsZ0JBQVcsR0FBUSxJQUFJLENBQUM7WUFHNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFFM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBRXRDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBQyxtQkFBNEI7Z0JBQ3ZDLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsbUJBQW1CLEVBQUU7b0JBQ3RCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQztvQkFDOUIsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDO29CQUM3QixLQUFJLENBQUMsVUFBVSxHQUFHLHNCQUFXLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNoRSxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7aUJBQzFCO1lBQ0wsQ0FBQyxDQUFBO1lBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRztnQkFDaEIsSUFBSSxLQUFJLENBQUMsUUFBUSxJQUFJLHNCQUFXLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDekQsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2lCQUN0RDtnQkFDRCxPQUFPLEtBQUksQ0FBQyxPQUFPLENBQUM7WUFDeEIsQ0FBQyxDQUFDO1FBQ04sQ0FBQztRQUVNLDJCQUFRLEdBQWY7WUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQUU7WUFDdEQsc0JBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFaEcsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3JDO1FBQ0wsQ0FBQztRQUVNLCtCQUFZLEdBQW5CLFVBQW9CLFFBQWEsRUFBRSxRQUFhO1lBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsc0JBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBTXRELElBQUksUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtnQkFFdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxzQkFBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQzFCO1FBQ0wsQ0FBQztRQUlNLDhCQUFXLEdBQWxCLFVBQW1CLFFBQWEsRUFBRSxRQUFhO1lBRTNDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUViLE9BQU87YUFDVjtZQUVELElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztZQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDbkIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtvQkFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7b0JBQ3RCLFVBQVUsR0FBRyxJQUFJLENBQUM7aUJBQ3JCO2FBQ0o7aUJBRUksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUN2QixJQUFJLFFBQVEsSUFBSSxJQUFJLElBQUksUUFBUSxLQUFLLEVBQUUsRUFBRTtvQkFDckMsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTt3QkFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7d0JBQ2xCLFVBQVUsR0FBRyxJQUFJLENBQUM7cUJBQ3JCO2lCQUNKO3FCQUNJO29CQUVELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztvQkFFcEIsSUFBSSxRQUFRLENBQUMsV0FBVyxLQUFLLE1BQU0sSUFBSSxRQUFRLENBQUMsV0FBVyxLQUFLLE1BQU0sRUFBRTt3QkFFcEUsUUFBUSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUNuRSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFOzRCQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQzs0QkFDdEIsVUFBVSxHQUFHLElBQUksQ0FBQzt5QkFDckI7cUJBQ0o7eUJBRUk7d0JBQ0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTs0QkFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7NEJBQ3RCLFVBQVUsR0FBRyxJQUFJLENBQUM7eUJBQ3JCO3FCQUNKO2lCQUVKO2FBQ0o7WUFFRCxJQUFJLFVBQVUsRUFBRTtnQkFDWixJQUFJLENBQUMsVUFBVSxHQUFHLHNCQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDMUI7WUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksc0JBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7YUFDdEQ7UUFDTCxDQUFDO1FBRU0sa0NBQWUsR0FBdEI7WUFBQSxpQkFjQztZQWJHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO2dCQUNyQixJQUFJLEtBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ2pCLElBQUksS0FBSSxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7d0JBQzFCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUN2RSxzQkFBVyxDQUFDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7cUJBQzlEO3lCQUNJO3dCQUNELHNCQUFXLENBQUMsdUJBQXVCLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUNyRCxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDdEUsc0JBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3FCQUM5RDtpQkFDSjtZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVNLCtCQUFZLEdBQW5CO1lBQ0ksSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBR3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNuQixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO29CQUN2QixVQUFVLEdBQUcsSUFBSSxDQUFDO2lCQUNyQjthQUNKO1lBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUVsQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7b0JBQ3JCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTt3QkFDL0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQzt3QkFDNUMsVUFBVSxHQUFHLElBQUksQ0FBQztxQkFDckI7aUJBQ0o7Z0JBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7b0JBQ3RCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO3dCQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7d0JBQ3ZCLFVBQVUsR0FBRyxJQUFJLENBQUM7cUJBQ3JCO2lCQUNKO2FBQ0o7WUFDRCxJQUFJLFVBQVUsRUFBRTtnQkFDWixJQUFJLENBQUMsVUFBVSxHQUFHLHNCQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDMUI7UUFDTCxDQUFDO1FBRU0sa0NBQWUsR0FBdEIsVUFBdUIsSUFBSTtZQUd2QixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO1FBQ2pELENBQUM7UUFFTSxzQ0FBbUIsR0FBMUIsVUFBMkIsU0FBYyxFQUFFLElBQVk7WUFDbkQsSUFBSSxRQUFRLEdBQVEsSUFBSSxDQUFDO1lBRXpCLElBQUksU0FBUyxDQUFDLFdBQVcsS0FBSyxNQUFNO21CQUM3QixTQUFTLENBQUMsV0FBVyxLQUFLLE1BQU0sRUFBRTtnQkFDckMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMvQjtZQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO29CQUN2RCxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDNUI7YUFDSjtZQUNELE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7UUFJTSwyQkFBUSxHQUFmLFVBQWdCLEVBQWMsRUFBRSxLQUFLO1lBQXJDLGlCQWdCQztZQWZHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUVwQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDL0IsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO29CQUNmLEtBQUssRUFBRSxLQUFLO2lCQUNmLENBQUMsQ0FBQzthQUFFO1lBR0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUM7Z0JBQzFCLElBQUksS0FBSSxDQUFDLE1BQU0sRUFBRTtvQkFBRSxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQUU7WUFDdkMsQ0FBQyxDQUFDLENBQUM7WUFDSCxzQkFBVyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN2QyxFQUFFLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9ELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFTSwyQkFBUSxHQUFmO1lBQ0ksc0JBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEcsQ0FBQztRQTlPcUQ7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7OzhDQUFtQztRQUVsQztZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7OENBQWtCO1FBQ2pCO1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOzsrQ0FBbUI7UUFDbEI7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7OzBEQUFpQztRQUNoQztZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7d0RBQStCO1FBQzlCO1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOzsyREFBa0M7UUFDakM7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7OzBEQUFpQztRQUVoQztZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7a0RBQWtDO1FBQ2pDO1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOzsrQ0FBc0I7UUFDckI7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7OzZDQUFvQjtRQUNuQjtZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7c0RBQTZCO1FBQzVCO1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOztxREFBaUM7UUFDaEM7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7O29EQUF1QztRQUN0QztZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7aURBQTZCO1FBQzVCO1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOzttREFBbUM7UUFDbEM7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7O2tEQUFrQztRQUNqQztZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7a0RBQTRDO1FBQzNDO1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOztpREFBZ0M7UUFFM0U7WUFBVCw0QkFBUTs7a0RBQXFDO1FBQ3BDO1lBQVQsNEJBQVE7O2lEQUFpQztRQUNoQztZQUFULDRCQUFRO3NDQUFrQixRQUFRO2tEQUFDO1FBQzFCO1lBQVQsNEJBQVE7c0NBQWdCLFFBQVE7Z0RBQUM7UUFDeEI7WUFBVCw0QkFBUTtzQ0FBa0IsUUFBUTtrREFBQztRQUNrQjtZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7MkRBQTJDO1FBOUJ2RixRQUFRO1lBRnBCLGlDQUFhLENBQUMsYUFBYSxDQUFDO1lBQzVCLDhCQUFVLEVBQUU7NkNBNkNXLGVBQU0sRUFBYSw2QkFBUztXQTVDdkMsUUFBUSxDQW9QcEI7UUFBRCxlQUFDO0tBcFBELEFBb1BDLElBQUE7SUFwUFksNEJBQVEiLCJmaWxlIjoicmVzb3VyY2VzL2VsZW1lbnRzL2Ryb3Bkb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCwgYmluZGFibGUsIGJpbmRpbmdNb2RlLCBjdXN0b21FbGVtZW50LCBUYXNrUXVldWUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IENvbW1vbiB9IGZyb20gXCIuLi9jb21tb25cIjtcclxuaW1wb3J0IEVsZW1lbnRVdGlsIGZyb20gXCIuL2NvbW1vbi9lbGVtZW50LXV0aWxcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIGEgZHJvcGRvd25cclxuICovXHJcbkBjdXN0b21FbGVtZW50KFwiY2UtZHJvcGRvd25cIilcclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgRHJvcERvd24ge1xyXG4gICAgcHVibGljIGNvbW1vbjogQ29tbW9uO1xyXG4gICAgcHVibGljIHRhc2tRdWV1ZTogVGFza1F1ZXVlO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyB0eXBlOiBzdHJpbmcgPSBcInJhZGlvbGlzdFwiO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpdGVtOiBhbnk7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaXRlbXM6IGFueTtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBkaXNwbGF5QXR0cmlidXRlOiBzdHJpbmc7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgdmFsdWVBdHRyaWJ1dGU6IHN0cmluZzsgLy8gc2V0IHRoaXMgaWYgdGhlIHVzZXIgd2FudHMgYSBzdHJpbmdcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBkaXNhYmxlZEF0dHJpYnV0ZTogc3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHZpc2libGVBdHRyaWJ1dGU6IHN0cmluZztcclxuICAgIFxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgbGFiZWw6IHN0cmluZztcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBwcmU6IHN0cmluZztcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpbnN0cnVjdGlvbnM6IHN0cmluZztcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nID0gXCJcIjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyB3YXJuaW5nTXNnOiBzdHJpbmcgPSBcIldhcm5pbmdcIjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpbmZvTXNnOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGlzV2FybmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgZXJyb3JNc2c6IHN0cmluZyA9IFwiVmFsdWUgcmVxdWlyZWRcIjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpc1ZhbGlkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBAYmluZGFibGUgcHVibGljIGZvcm1OYW1lOiBzdHJpbmcgPSBcImRlZmF1bHRcIjtcclxuICAgIEBiaW5kYWJsZSBwdWJsaWMgaXNSYWRpbzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyBjaGFuZ2luZzogRnVuY3Rpb247XHJcbiAgICBAYmluZGFibGUgcHVibGljIGNoYW5nZTogRnVuY3Rpb247IC8vIGNhbGwgdmlhIGNoYW5nZS5jYWxsPVwiZnVuY3Rpb25OYW1lXCJcclxuICAgIEBiaW5kYWJsZSBwdWJsaWMgdmFsaWRhdGU6IEZ1bmN0aW9uO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGlzT3ZlcnJpZGVJbnZhbGlkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfaW5wdXQ6IEVsZW1lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfYWN0aXZlTWFwOiBib29sZWFuW107XHJcbiAgICBwcml2YXRlIF9pdGVtOiBhbnkgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfYXJlT2JqZWN0czogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudDtcclxuICAgIHByaXZhdGUgX3ZhbGlkYXRlOiBGdW5jdGlvbjtcclxuICAgIHByaXZhdGUgX2Zvcm1Hcm91cDogSFRNTEVsZW1lbnQ7IC8vIGVsZW1lbnQgcmVmXHJcbiAgICBwcml2YXRlIF9jbGVhcjogRnVuY3Rpb247IC8vIHNldCBpbiBpbmhlcml0b3JcclxuICAgIHByaXZhdGUgX215VmFsaWRhdG9yOiBGdW5jdGlvbjsgLy8gc2V0IGluIGluaGVyaXRvclxyXG4gICAgcHJpdmF0ZSBfZW1wdHlWYWx1ZTogYW55ID0gbnVsbDsgIC8vIHdpbGwgYmUgbnVsbCBpZiBvYmplY3RzLCBcIlwiIGlmIHN0cmluZ1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbW1vbjogQ29tbW9uLCB0YXNrUXVldWU6IFRhc2tRdWV1ZSkge1xyXG4gICAgICAgIHRoaXMuY29tbW9uID0gY29tbW9uO1xyXG4gICAgICAgIHRoaXMudGFza1F1ZXVlID0gdGFza1F1ZXVlO1xyXG5cclxuICAgICAgICB0aGlzLl92YWxpZGF0ZSA9IHRoaXMuZGVmYXVsdFZhbGlkYXRlO1xyXG4gICAgICAgIC8vIGNsZWFyIGlzIGNhbGxlZCBieSBodGVcclxuICAgICAgICB0aGlzLl9jbGVhciA9IChvbmx5Q2xlYXJWYWxpZGF0aW9uOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICghb25seUNsZWFyVmFsaWRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXRlbSA9IHRoaXMuX2VtcHR5VmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLl9lbXB0eVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aXZlTWFwID0gRWxlbWVudFV0aWwuYWN0aXZlTWFwKHRoaXMuaXRlbXMsIHRoaXMuX2l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9teVZhbGlkYXRvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgRWxlbWVudFV0aWwuaXNWaXNpYmxlKHRoaXMuX2Zvcm1Hcm91cCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRoaXMuX3ZhbGlkYXRlKHsgaXRlbTogdGhpcy5pdGVtIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQ7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0ZSkgeyB0aGlzLl92YWxpZGF0ZSA9IHRoaXMudmFsaWRhdGU7IH1cclxuICAgICAgICBFbGVtZW50VXRpbC5hdHRhY2hlZCh0aGlzLmNvbW1vbiwgdGhpcy5mb3JtTmFtZSwgdGhpcy5yZXF1aXJlZCwgdGhpcy5fY2xlYXIsIHRoaXMuX215VmFsaWRhdG9yKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNoYW5nZWQodGhpcy5pdGVtLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGl0ZW1zQ2hhbmdlZChuZXdWYWx1ZTogYW55LCBvbGRWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fYXJlT2JqZWN0cyA9IEVsZW1lbnRVdGlsLmFyZU9iamVjdHModGhpcy5pdGVtcyk7XHJcblxyXG4gICAgICAgIC8vIGlmIChuZXdWYWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaXRlbUNoYW5nZWQodGhpcy5pdGVtLCBudWxsKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vIGdldCBjdXJyZW50IG9iamVjdCBmcm9tIHNlbGVjdGVkIGRpc3BsYXkgYXR0cmlidXRlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZiAobmV3VmFsdWUgIT0gbnVsbCAmJiB0aGlzLml0ZW0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyBnZXQgY3VycmVudCBvYmplY3QgZnJvbSBzZWxlY3RlZCBkaXNwbGF5IGF0dHJpYnV0ZTtcclxuICAgICAgICAgICAgdGhpcy5fYWN0aXZlTWFwID0gRWxlbWVudFV0aWwuYWN0aXZlTWFwKHRoaXMuaXRlbXMsIHRoaXMuX2l0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzIGlzIGZpcmVkIGJlZm9yZSB0aGUgaXRlbSBjaGFuZ2VzLFxyXG4gICAgLy8gaWYgdGhlIGl0ZW0gaXMgY2hhbmdlZCBleHRlcm5hbGx5LlxyXG4gICAgcHVibGljIGl0ZW1DaGFuZ2VkKG5ld1ZhbHVlOiBhbnksIG9sZFZhbHVlOiBhbnkpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgICAgIC8vIHdlIGRvbid0IGtub3cgaWYgdGhlIGl0ZW0gaXMgYW4gb2JqZWN0IG9yIG5vdCB5ZXQuLi4uXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB3YXNDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgLy8gaWYgYXJlU3RyaW5nc1xyXG4gICAgICAgIGlmICghdGhpcy5fYXJlT2JqZWN0cykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faXRlbSAhPT0gbmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW0gPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHdhc0NoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmIG9iamVjdHNcclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9hcmVPYmplY3RzKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PSBudWxsIHx8IG5ld1ZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgd2FzQ2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBLZWVwIGluIG1pbmQgdGhhdCB0aGVyZSBtYXkgb3IgbWF5IG5vdCBiZSBhIHZhbHVlQXR0cmlidXRlLCB3ZSBjb3VsZCBiZSBzZWxlY3Rpbmcgb2JqZWN0cyBpbnN0ZWFkIG9mIGEgcHJvcCBvZiBhbiBvYmplY3QuXHJcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIFN0cmluZ3MgYW5kIE51bWJlcnNcclxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5jb25zdHJ1Y3RvciA9PT0gU3RyaW5nIHx8IG5ld1ZhbHVlLmNvbnN0cnVjdG9yID09PSBOdW1iZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIGJ5IHByb3BlcnR5IGJlY2F1c2Ugd2UncmUgc2VsZWN0aW5nIGFuIHByb3Agb3V0IG9mIHRoZSBvYmplY3RcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRoaXMuZmluZEl0ZW1CeUF0dHJpYnV0ZShuZXdWYWx1ZSwgdGhpcy52YWx1ZUF0dHJpYnV0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfLmlzRXF1YWwoc2VsZWN0ZWQsIHRoaXMuX2l0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW0gPSBzZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2FzQ2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIE9iamVjdHMgKGlmIHRoZXJlIGlzIG5vIHZhbHVlQXR0cmlidXRlKVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfLmlzRXF1YWwobmV3VmFsdWUsIHRoaXMuX2l0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW0gPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2FzQ2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHdhc0NoYW5nZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYWN0aXZlTWFwID0gRWxlbWVudFV0aWwuYWN0aXZlTWFwKHRoaXMuaXRlbXMsIHRoaXMuX2l0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgRWxlbWVudFV0aWwuaXNWaXNpYmxlKHRoaXMuX2Zvcm1Hcm91cCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5fdmFsaWRhdGUoeyBpdGVtOiB0aGlzLml0ZW0gfSk7ICAvLyB0b2RvOiB3cm9uZyBwbGFjZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlU2VsZWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMudGFza1F1ZXVlLnF1ZXVlVGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9mb3JtR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT09IFwiZHJvcGRvd25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtcyA9IEFycmF5LmZyb20odGhpcy5fZm9ybUdyb3VwLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwib3B0aW9uXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50VXRpbC5zZXRPcHRpb25Gcm9tQWN0aXZlTWFwKGVsZW1zLCB0aGlzLl9hY3RpdmVNYXApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudFV0aWwucmVtb3ZlQWxsQWN0aXZlQ2hpbGRyZW4odGhpcy5fZm9ybUdyb3VwKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbXMgPSBBcnJheS5mcm9tKHRoaXMuX2Zvcm1Hcm91cC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50VXRpbC5zZXRBY3RpdmVGcm9tQWN0aXZlTWFwKGVsZW1zLCB0aGlzLl9hY3RpdmVNYXApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIF9pdGVtQ2hhbmdlZCgpIHtcclxuICAgICAgICBsZXQgd2FzQ2hhbmdlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBpZiBhcmVTdHJpbmdzXHJcbiAgICAgICAgaWYgKCF0aGlzLl9hcmVPYmplY3RzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW0gIT09IHRoaXMuX2l0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IHRoaXMuX2l0ZW07XHJcbiAgICAgICAgICAgICAgICB3YXNDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiBvYmplY3RzXHJcbiAgICAgICAgaWYgKHRoaXMuX2FyZU9iamVjdHMpIHtcclxuICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSB2YWx1ZUF0dHJpYnV0ZSwgdGhlbiB0aGlzLml0ZW0gbmVlZHMgdG8gYmUgYSBzdHJpbmdcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVBdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW0gIT09IHRoaXMuX2l0ZW1bdGhpcy52YWx1ZUF0dHJpYnV0ZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLl9pdGVtW3RoaXMudmFsdWVBdHRyaWJ1dGVdO1xyXG4gICAgICAgICAgICAgICAgICAgIHdhc0NoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vdCBhIHZhbHVlQXR0cmlidXRlLCB0aGVuIHRoaXMuaXRlbSBuZWVkcyB0byBiZSBhbiBPQkpFQ1RcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnZhbHVlQXR0cmlidXRlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtICE9PSB0aGlzLl9pdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gdGhpcy5faXRlbTtcclxuICAgICAgICAgICAgICAgICAgICB3YXNDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAod2FzQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9hY3RpdmVNYXAgPSBFbGVtZW50VXRpbC5hY3RpdmVNYXAodGhpcy5pdGVtcywgdGhpcy5faXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWZhdWx0VmFsaWRhdGUoYXJncyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIHdlIGFyZSBvbmx5IHZhbGlkYXRpbmcgdGhhdCB0aGVyZSBJUyBhIHZhbHVlXHJcbiAgICAgICAgLy8gcmVtZW1iZXIgdGhpcyBtYXkgYmUgYW4gb2JqZWN0IG9yIGEgc3RyaW5nXHJcbiAgICAgICAgcmV0dXJuIGFyZ3MuaXRlbSAhPT0gXCJcIiAmJiBhcmdzLml0ZW0gIT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmluZEl0ZW1CeUF0dHJpYnV0ZShhdHRyVmFsdWU6IGFueSwgcHJvcDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkOiBhbnkgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoYXR0clZhbHVlLmNvbnN0cnVjdG9yICE9PSBTdHJpbmdcclxuICAgICAgICAgICAgJiYgYXR0clZhbHVlLmNvbnN0cnVjdG9yICE9PSBOdW1iZXIpIHtcclxuICAgICAgICAgICAgYXR0clZhbHVlID0gYXR0clZhbHVlW3Byb3BdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zW2ldW3Byb3BdID09PSBhdHRyVmFsdWUgJiYgc2VsZWN0ZWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0aGlzLml0ZW1zW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZWxlY3RlZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzIGlzIGZpcmVkIGJlZm9yZSBpdGVtIGNoYW5nZXMuXHJcbiAgICAvLyBhbmQgb25seSBpZiB0aGUgaXRlbSBjaGFuZ2VzIGZyb20gVEhJUyBjb250cm9sLCBub3QgZnJvbSBleHRlcm5hbCBzb3VyY2VcclxuICAgIHB1YmxpYyBfY2hhbmdlZChldjogTW91c2VFdmVudCwgaW5kZXgpIHtcclxuICAgICAgICB0aGlzLl9pdGVtQ2hhbmdlZCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jaGFuZ2luZykgeyB0aGlzLmNoYW5naW5nKHtcclxuICAgICAgICAgICAgZXZlbnQ6IGV2LFxyXG4gICAgICAgICAgICBpdGVtOiB0aGlzLml0ZW0sXHJcbiAgICAgICAgICAgIGluZGV4OiBpbmRleFxyXG4gICAgICAgIH0pOyB9XHJcbiAgICAgICAgLy8gVG9kbywgdXNlIHRoaXMgZXZlcnl3aGVyZS5cclxuICAgICAgICAvLyB0aGlzIHdpbGwgY2FsbCBjaGFuZ2UgYWZ0ZXIgdGhlIHZhbHVlcyBvZiBiaW5kYWJsZXMgYXJlIHVwZGF0ZWRcclxuICAgICAgICB0aGlzLnRhc2tRdWV1ZS5xdWV1ZU1pY3JvVGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYW5nZSkgeyB0aGlzLmNoYW5nZSgpOyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgRWxlbWVudFV0aWwucmVtb3ZlQWxsQWN0aXZlQ2hpbGRyZW4odGhpcy5fZm9ybUdyb3VwKTtcclxuICAgICAgICAoPEhUTUxFbGVtZW50PmV2LnRhcmdldCkucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXRhY2hlZCgpIHtcclxuICAgICAgICBFbGVtZW50VXRpbC5kZXRhY2hlZCh0aGlzLmNvbW1vbiwgdGhpcy5mb3JtTmFtZSwgdGhpcy5yZXF1aXJlZCwgdGhpcy5fY2xlYXIsIHRoaXMuX215VmFsaWRhdG9yKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/duelingpicklist',["require", "exports", "../common", "./common/element-util", "aurelia-framework"], function (require, exports, common_1, element_util_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CEDuelingpicklist = (function () {
        function CEDuelingpicklist(observerLocator, common, taskQueue) {
            var _this = this;
            this.type = "";
            this.disabled = false;
            this.placeholder = "";
            this.warningMsg = "Warning";
            this.isWarning = false;
            this.required = false;
            this.errorMsg = "Value required";
            this.isValid = true;
            this.formName = "default";
            this._emptyValue = [];
            this._charLimitForStacked = 42;
            this._charLimitForStackedLongText = 120;
            this._isStackedClass = false;
            this._isStackedLongText = false;
            this._areObjects = false;
            this.common = common;
            this.taskQueue = taskQueue;
            this.observerLocator = observerLocator;
            this._validate = this.defaultValidate;
            this._clear = function (onlyClearValidation) {
                _this.isValid = true;
                if (!onlyClearValidation) {
                    _this.selectedItems.splice(0, _this.selectedItems.length);
                    _this._activeMap = element_util_1.default.activeMap(_this.items, _this.selectedItems);
                    _this.updateSelection();
                }
            };
            this._myValidator = function () {
                if (_this.required && element_util_1.default.isVisible(_this._formGroup)) {
                    _this.isValid = _this._validate({ items: _this.selectedItems });
                }
                return _this.isValid;
            };
        }
        CEDuelingpicklist.prototype.attached = function () {
            this.isValid = true;
            if (this.validate) {
                this._validate = this.validate;
            }
            element_util_1.default.attached(this.common, this.formName, this.required, this._clear, this._myValidator);
            if (this.selectedItems) {
                this.selectedItemsChanged(this.selectedItems, null);
            }
        };
        CEDuelingpicklist.prototype.itemsChanged = function (newValue, oldValue) {
            this._areObjects = element_util_1.default.areObjects(this.items);
            if (newValue != null && this.selectedItems != null && this.selectedItems.length) {
                this._activeMap = element_util_1.default.activeMap(this.items, this.selectedItems);
                this.updateSelection();
            }
        };
        CEDuelingpicklist.prototype.defaultValidate = function (args) {
            return args.items != null && args.items.length > 0;
        };
        CEDuelingpicklist.prototype.selectedItemsChanged = function (newValue, oldValue) {
            var _this = this;
            this._arrayObserver = this.observerLocator.getArrayObserver(this.selectedItems).subscribe(function () { return _this.selectedItemsHasChanged(); });
            this.selectedItemsHasChanged();
        };
        CEDuelingpicklist.prototype.selectedItemsHasChanged = function () {
            this.remapActiveMap();
            if (this.required && element_util_1.default.isVisible(this._formGroup)) {
                this.isValid = this._validate({ items: this.selectedItems });
            }
        };
        CEDuelingpicklist.prototype.updateSelection = function () {
            var _this = this;
            this.taskQueue.queueTask(function () {
                if (_this._formGroup) {
                    var elems = Array.from(_this._formGroup.getElementsByClassName("btn"));
                    element_util_1.default.setActiveFromActiveMap(elems, _this._activeMap);
                }
            });
        };
        CEDuelingpicklist.prototype._changed = function (ev, index) {
            var _this = this;
            this.remapActiveMap();
            var args = {
                event: ev,
                items: this.selectedItems,
                index: index,
            };
            if (this.changing) {
                this.changing(args);
            }
            this.taskQueue.queueMicroTask(function () {
                if (_this.change) {
                    _this.change();
                }
            });
            return true;
        };
        CEDuelingpicklist.prototype.detached = function () {
            element_util_1.default.detached(this.common, this.formName, this.required, this._clear, this._myValidator);
        };
        CEDuelingpicklist.prototype.remapActiveMap = function () {
            var _this = this;
            var newMap = [];
            this.items.forEach(function (obj) {
                var val = false;
                _this.selectedItems.forEach(function (s) {
                    if (!val) {
                        if (_this._areObjects) {
                            if (_this.valueAttribute && s == obj[_this.valueAttribute]) {
                                val = true;
                            }
                            else if (!val && s == obj) {
                                val = true;
                            }
                        }
                        else if (s === obj) {
                            val = true;
                        }
                    }
                });
                newMap.push(val);
            });
            this._activeMap = newMap;
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEDuelingpicklist.prototype, "type", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Array)
        ], CEDuelingpicklist.prototype, "items", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Array)
        ], CEDuelingpicklist.prototype, "selectedItems", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEDuelingpicklist.prototype, "displayAttribute", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEDuelingpicklist.prototype, "valueAttribute", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CEDuelingpicklist.prototype, "disabled", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEDuelingpicklist.prototype, "label", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEDuelingpicklist.prototype, "pre", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEDuelingpicklist.prototype, "instructions", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEDuelingpicklist.prototype, "placeholder", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEDuelingpicklist.prototype, "warningMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CEDuelingpicklist.prototype, "isWarning", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CEDuelingpicklist.prototype, "required", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEDuelingpicklist.prototype, "errorMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CEDuelingpicklist.prototype, "isValid", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], CEDuelingpicklist.prototype, "formName", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], CEDuelingpicklist.prototype, "changing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], CEDuelingpicklist.prototype, "change", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], CEDuelingpicklist.prototype, "validate", void 0);
        CEDuelingpicklist = __decorate([
            aurelia_framework_1.customElement("ce-duelingpicklist"),
            aurelia_framework_1.autoinject(),
            __metadata("design:paramtypes", [aurelia_framework_1.ObserverLocator, common_1.Common, aurelia_framework_1.TaskQueue])
        ], CEDuelingpicklist);
        return CEDuelingpicklist;
    }());
    exports.CEDuelingpicklist = CEDuelingpicklist;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy9kdWVsaW5ncGlja2xpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBVUE7UUE0Q0ksMkJBQVksZUFBZ0MsRUFBRSxNQUFjLEVBQUUsU0FBb0I7WUFBbEYsaUJBb0JDO1lBekQ0RCxTQUFJLEdBQVcsRUFBRSxDQUFDO1lBT2xCLGFBQVEsR0FBWSxLQUFLLENBQUM7WUFJMUIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7WUFDekIsZUFBVSxHQUFXLFNBQVMsQ0FBQztZQUMvQixjQUFTLEdBQVksS0FBSyxDQUFDO1lBQzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7WUFDMUIsYUFBUSxHQUFXLGdCQUFnQixDQUFDO1lBQ3BDLFlBQU8sR0FBWSxJQUFJLENBQUM7WUFFcEUsYUFBUSxHQUFXLFNBQVMsQ0FBQztZQUt0QyxnQkFBVyxHQUFRLEVBQUUsQ0FBQztZQUN0Qix5QkFBb0IsR0FBVyxFQUFFLENBQUM7WUFDbEMsaUNBQTRCLEdBQVcsR0FBRyxDQUFDO1lBQzNDLG9CQUFlLEdBQVksS0FBSyxDQUFDO1lBQ2pDLHVCQUFrQixHQUFZLEtBQUssQ0FBQztZQUVwQyxnQkFBVyxHQUFZLEtBQUssQ0FBQztZQVNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztZQUV2QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7WUFFdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFDLG1CQUE0QjtnQkFDdkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtvQkFDdEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7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LGlDQUFhLENBQUMsb0JBQW9CLENBQUM7WUFDbkMsOEJBQVUsRUFBRTs2Q0E2Q29CLG1DQUFlLEVBQVUsZUFBTSxFQUFhLDZCQUFTO1dBNUN6RSxpQkFBaUIsQ0FtSzdCO1FBQUQsd0JBQUM7S0FuS0QsQUFtS0MsSUFBQTtJQW5LWSw4Q0FBaUIiLCJmaWxlIjoicmVzb3VyY2VzL2VsZW1lbnRzL2R1ZWxpbmdwaWNrbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbiB9IGZyb20gXCIuLi9jb21tb25cIjtcclxuaW1wb3J0IEVsZW1lbnRVdGlsIGZyb20gXCIuL2NvbW1vbi9lbGVtZW50LXV0aWxcIjtcclxuaW1wb3J0IHthdXRvaW5qZWN0LCBiaW5kYWJsZSwgYmluZGluZ01vZGUsIGN1c3RvbUVsZW1lbnQsIE9ic2VydmVyTG9jYXRvciwgVGFza1F1ZXVlfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuXHJcbi8qXHJcbiogVGhpcyBpcyBhIGNoZWNrYm94IGxpc3RcclxuKi9cclxuXHJcbkBjdXN0b21FbGVtZW50KFwiY2UtZHVlbGluZ3BpY2tsaXN0XCIpXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIENFRHVlbGluZ3BpY2tsaXN0IHtcclxuICAgIHB1YmxpYyBjb21tb246IENvbW1vbjtcclxuICAgIHB1YmxpYyB0YXNrUXVldWU6IFRhc2tRdWV1ZTtcclxuICAgIHB1YmxpYyBvYnNlcnZlckxvY2F0b3I6IE9ic2VydmVyTG9jYXRvcjtcclxuXHJcblxyXG4gICAgLyoqIEBwYXJhbSAqL1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHR5cGU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaXRlbXM6IEFycmF5PGFueT47XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgc2VsZWN0ZWRJdGVtczogQXJyYXk8YW55PjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBkaXNwbGF5QXR0cmlidXRlOiBzdHJpbmc7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgdmFsdWVBdHRyaWJ1dGU6IHN0cmluZztcclxuXHJcbiAgICAvLyBkZWZhdWx0IG9wdGlvbnMgZm9yIGFsbCBlbGVtZW50cywgbXVzdCBiZSBzZXQgaGVyZSwgYmVjYXVzZSBiYXNlIGNsYXNzIGNhbnQgZGVjbGFyZSBiaW5kYWJsZXNcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgcHJlOiBzdHJpbmc7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaW5zdHJ1Y3Rpb25zOiBzdHJpbmc7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgd2FybmluZ01zZzogc3RyaW5nID0gXCJXYXJuaW5nXCI7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaXNXYXJuaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBlcnJvck1zZzogc3RyaW5nID0gXCJWYWx1ZSByZXF1aXJlZFwiO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGlzVmFsaWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBiaW5kYWJsZSBwdWJsaWMgZm9ybU5hbWU6IHN0cmluZyA9IFwiZGVmYXVsdFwiO1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyBjaGFuZ2luZzogRnVuY3Rpb247XHJcbiAgICBAYmluZGFibGUgcHVibGljIGNoYW5nZTogRnVuY3Rpb247XHJcbiAgICBAYmluZGFibGUgcHVibGljIHZhbGlkYXRlOiBGdW5jdGlvbjtcclxuXHJcbiAgICBwcml2YXRlIF9lbXB0eVZhbHVlOiBhbnkgPSBbXTtcclxuICAgIHByaXZhdGUgX2NoYXJMaW1pdEZvclN0YWNrZWQ6IE51bWJlciA9IDQyO1xyXG4gICAgcHJpdmF0ZSBfY2hhckxpbWl0Rm9yU3RhY2tlZExvbmdUZXh0OiBOdW1iZXIgPSAxMjA7XHJcbiAgICBwcml2YXRlIF9pc1N0YWNrZWRDbGFzczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfaXNTdGFja2VkTG9uZ1RleHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9hcmVPYmplY3RzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9hY3RpdmVNYXA6IGJvb2xlYW5bXTtcclxuICAgIHByaXZhdGUgX2FycmF5T2JzZXJ2ZXI6IGFueTtcclxuICAgIHByaXZhdGUgX3ZhbGlkYXRlOiBGdW5jdGlvbjtcclxuICAgIHByaXZhdGUgX2Zvcm1Hcm91cDogSFRNTEVsZW1lbnQ7IC8vIGVsZW1lbnQgcmVmXHJcbiAgICBwcml2YXRlIF9jbGVhcjogRnVuY3Rpb247IC8vIHNldCBpbiBpbmhlcml0b3JcclxuICAgIHByaXZhdGUgX215VmFsaWRhdG9yOiBGdW5jdGlvbjsgLy8gc2V0IGluIGluaGVyaXRvclxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9ic2VydmVyTG9jYXRvcjogT2JzZXJ2ZXJMb2NhdG9yLCBjb21tb246IENvbW1vbiwgdGFza1F1ZXVlOiBUYXNrUXVldWUpIHtcclxuICAgICAgICB0aGlzLmNvbW1vbiA9IGNvbW1vbjtcclxuICAgICAgICB0aGlzLnRhc2tRdWV1ZSA9IHRhc2tRdWV1ZTtcclxuICAgICAgICB0aGlzLm9ic2VydmVyTG9jYXRvciA9IG9ic2VydmVyTG9jYXRvcjtcclxuXHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdGUgPSB0aGlzLmRlZmF1bHRWYWxpZGF0ZTtcclxuICAgICAgICAvLyBjbGVhciBpcyBjYWxsZWQgYnkgdGhlIFxyXG4gICAgICAgIHRoaXMuX2NsZWFyID0gKG9ubHlDbGVhclZhbGlkYXRpb246IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKCFvbmx5Q2xlYXJWYWxpZGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMuc3BsaWNlKDAsIHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aXZlTWFwID0gRWxlbWVudFV0aWwuYWN0aXZlTWFwKHRoaXMuaXRlbXMsIHRoaXMuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9teVZhbGlkYXRvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlcXVpcmVkICYmIEVsZW1lbnRVdGlsLmlzVmlzaWJsZSh0aGlzLl9mb3JtR3JvdXApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gIHRoaXMuX3ZhbGlkYXRlKHsgaXRlbXM6IHRoaXMuc2VsZWN0ZWRJdGVtcyB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQ7IH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGUpIHsgdGhpcy5fdmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlOyB9XHJcbiAgICAgICAgRWxlbWVudFV0aWwuYXR0YWNoZWQodGhpcy5jb21tb24sIHRoaXMuZm9ybU5hbWUsIHRoaXMucmVxdWlyZWQsIHRoaXMuX2NsZWFyLCB0aGlzLl9teVZhbGlkYXRvcik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zQ2hhbmdlZCh0aGlzLnNlbGVjdGVkSXRlbXMsIG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXRlbXNDaGFuZ2VkKG5ld1ZhbHVlOiBhbnksIG9sZFZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9hcmVPYmplY3RzID0gRWxlbWVudFV0aWwuYXJlT2JqZWN0cyh0aGlzLml0ZW1zKTtcclxuICAgICAgICAvL0VsZW1lbnRVdGlsLmNoZWNrTWF4Q2hhcnModGhpcy5pdGVtcywgdGhpcy5fYXJlT2JqZWN0cywgdGhpcy5kaXNwbGF5QXR0cmlidXRlKTtcclxuICAgICAgICBpZiAobmV3VmFsdWUgIT0gbnVsbCAmJiB0aGlzLnNlbGVjdGVkSXRlbXMgIT0gbnVsbCAmJiB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBnZXQgY3VycmVudCBvYmplY3QgZnJvbSBzZWxlY3RlZCBkaXNwbGF5IGF0dHJpYnV0ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FjdGl2ZU1hcCA9IEVsZW1lbnRVdGlsLmFjdGl2ZU1hcCh0aGlzLml0ZW1zLCB0aGlzLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3Rpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlZmF1bHRWYWxpZGF0ZShhcmdzKSB7XHJcbiAgICAgICAgLy8gd2UgYXJlIG9ubHkgdmFsaWRhdGluZyB0aGF0IHRoZXJlIElTIE9ORSB2YWx1ZVxyXG4gICAgICAgIHJldHVybiBhcmdzLml0ZW1zICE9IG51bGwgJiYgYXJncy5pdGVtcy5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxlY3RlZEl0ZW1zQ2hhbmdlZChuZXdWYWx1ZTogYW55LCBvbGRWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgLy8gZmlyZWQgd2hlbiBhcnJheSBhY3R1YWxseSBjaGFuZ2VzLCB0aGlzIG1lYW5zIHRoZSBBUlJBWSBXQVMgUkVQTEFDRURcclxuICAgICAgICAvLyBXZSBuZWVkIHRvIHJlc3Vic2NyaWJlLlxyXG4gICAgICAgIHRoaXMuX2FycmF5T2JzZXJ2ZXIgPSB0aGlzLm9ic2VydmVyTG9jYXRvci5nZXRBcnJheU9ic2VydmVyKHRoaXMuc2VsZWN0ZWRJdGVtcykuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2VsZWN0ZWRJdGVtc0hhc0NoYW5nZWQoKSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zSGFzQ2hhbmdlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxlY3RlZEl0ZW1zSGFzQ2hhbmdlZCgpIHtcclxuICAgICAgICAvLyB3ZSBkb250IHdhbnQgdG8gdmFsaWRhdGUgc3R1ZmYgYmVmb3JlIHN0dWZmIGlzIGxvYWRlZCAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZW1hcEFjdGl2ZU1hcCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5yZXF1aXJlZCAmJiBFbGVtZW50VXRpbC5pc1Zpc2libGUodGhpcy5fZm9ybUdyb3VwKSApIHsgLy8gJiYgdGhpcy5fc2VsZWN0ZWRJdGVtcyAhPSB0aGlzLnNlbGVjdGVkSXRlbXMgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRoaXMuX3ZhbGlkYXRlKHsgaXRlbXM6IHRoaXMuc2VsZWN0ZWRJdGVtcyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdXBkYXRlU2VsZWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMudGFza1F1ZXVlLnF1ZXVlVGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9mb3JtR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbGVtcyA9IEFycmF5LmZyb20odGhpcy5fZm9ybUdyb3VwLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG5cIikpO1xyXG4gICAgICAgICAgICAgICAgRWxlbWVudFV0aWwuc2V0QWN0aXZlRnJvbUFjdGl2ZU1hcChlbGVtcywgdGhpcy5fYWN0aXZlTWFwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gdGhpcyBpcyBmaXJlZCBBRlRFUiB0aGUgaXRlbSBjaGFuZ2VzLCBcclxuICAgIC8vIGFuZCBvbmx5IGlmIHRoZSBpdGVtIGNoYW5nZXMgZnJvbSBUSElTIGNvbnRyb2wsIG5vdCBmcm9tIGV4dGVybmFsIHNvdXJjZVxyXG4gICAgcHVibGljIF9jaGFuZ2VkKGV2OiBNb3VzZUV2ZW50LCBpbmRleCkge1xyXG5cclxuICAgICAgICAvLyBmaXggdGhlIGFjdGl2ZS9ub3QgYWN0aXZlIGNsYXNzIGJhc2VkIG9uIHZhbHVlLCBcclxuICAgICAgICAvLyBub3RlIHRoYXQgdGhpcyBpcyBpbml0aWFsbHkgc2V0IHZpYSBjb21tb24uaXNBY3RpdmUgYnV0IHRoYXQgb25seSBleGVjdXRlcyBvbmNlXHJcbiAgICAgICAgLy8gdGhpcy5fZGlydHlBY3RpdmVUcmlnZ2VyID0gIXRoaXMuX2RpcnR5QWN0aXZlVHJpZ2dlcjtcclxuICAgICAgICB0aGlzLnJlbWFwQWN0aXZlTWFwKCk7XHJcbiAgICAgICAgbGV0IGFyZ3MgPSB7XHJcbiAgICAgICAgICAgIGV2ZW50OiBldixcclxuICAgICAgICAgICAgaXRlbXM6IHRoaXMuc2VsZWN0ZWRJdGVtcyxcclxuICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbmdpbmcpIHsgdGhpcy5jaGFuZ2luZyhhcmdzKTsgfVxyXG5cclxuICAgICAgICB0aGlzLnRhc2tRdWV1ZS5xdWV1ZU1pY3JvVGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYW5nZSkgeyB0aGlzLmNoYW5nZSgpOyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRldGFjaGVkKCkge1xyXG4gICAgICAgIEVsZW1lbnRVdGlsLmRldGFjaGVkKHRoaXMuY29tbW9uLCB0aGlzLmZvcm1OYW1lLCB0aGlzLnJlcXVpcmVkLCB0aGlzLl9jbGVhciwgdGhpcy5fbXlWYWxpZGF0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHd0ZiBpcyB0aGlzIHlvdSBtaWdodCBhc2suXHJcbiAgICAvLyBzZWUgeW91IG1heSBoYXZlIGFuIGFycmF5LCBhbmQgdGhhdCBhcnJheSBtYXkgY2hhbmdlZFxyXG4gICAgLy8gdGhhdCBhcnJheSBtaWdodCBoYXZlIG90aGVyIHRoaW5ncyBib3VuZCB0byBpdC4uLlxyXG4gICAgLy8gdGhpcyB3aWxsIGVuc3VyZSB0byByZWJpbmQgdGhlIGFjdGl2ZSB2YXJpYWJsZSB3aGVuIHRoZSBzZWxlY3RlZEl0ZW1zIGFycmF5IGlzIG1vZGlmaWVkXHJcbiAgICBwcml2YXRlIHJlbWFwQWN0aXZlTWFwKCkge1xyXG4gICAgICAgIGxldCBuZXdNYXA6IGJvb2xlYW5bXSA9IFtdO1xyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB2YWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLmZvckVhY2goKHMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FyZU9iamVjdHMgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERPIE5PVCBDSEFOR0UgVEhFU0UgVE8gPT09ICAgXCIxXCIgIT0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZUF0dHJpYnV0ZSAmJiBzID09IG9ialt0aGlzLnZhbHVlQXR0cmlidXRlXSkgeyB2YWwgPSB0cnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCF2YWwgJiYgcyA9PSBvYmopIHsgdmFsID0gdHJ1ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzID09PSBvYmopIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBuZXdNYXAucHVzaCh2YWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2FjdGl2ZU1hcCA9IG5ld01hcDtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/input',["require", "exports", "aurelia-framework", "../common", "./common/element-util"], function (require, exports, aurelia_framework_1, common_1, element_util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Text = (function () {
        function Text(common, taskQueue) {
            var _this = this;
            this.isNumber = false;
            this.isPositive = true;
            this.isLong = false;
            this.disabled = false;
            this.placeholder = "";
            this.warningMsg = "Warning";
            this.isWarning = false;
            this.required = false;
            this.errorMsg = "Value required";
            this.showError = true;
            this.isValid = true;
            this.isOverrideInvalid = false;
            this.showInlineHelp = false;
            this.showInlineHelpLink = false;
            this.inlineHelpMsg = "Bind Help Text HERE";
            this.inlineHelpMsgAfterLink = ".";
            this.inlineHelpLinkText = "More";
            this.inlineHelpLink = "http://www.google.com";
            this.formName = "default";
            this._programaticErrorMessage = "Error When Binding Input.";
            this._emptyValue = null;
            this.common = common;
            this.taskQueue = taskQueue;
            this._validate = this.defaultValidate;
            this._clear = function (onlyClearValidation) {
                _this.isValid = true;
                if (!onlyClearValidation) {
                    _this.item = _this._emptyValue;
                }
            };
            this._myValidator = function () {
                if (_this.required && element_util_1.default.isVisible(_this._formGroup)) {
                    _this.isValid = _this._validate({ item: _this.item });
                }
                return _this.isValid;
            };
        }
        Text.prototype.attached = function () {
            this.isValid = true;
            if (this.validate) {
                this._validate = this.validate;
            }
            element_util_1.default.attached(this.common, this.formName, this.required, this._clear, this._myValidator);
        };
        Text.prototype.itemChanged = function (newValue, oldValue) {
            if (this.required && element_util_1.default.isVisible(this._formGroup) && newValue !== oldValue) {
                this.isValid = this._validate({ item: this.item });
            }
        };
        Text.prototype._changed = function (ev, index) {
            var _this = this;
            if (this.isNumber && this.isPositive
                && this.item != null && this.item !== "" && this.item.indexOf("-") >= 0) {
                this.item = this.item.replace("-", "");
            }
            if (this.changing) {
                this.changing({
                    event: ev,
                    item: this.item,
                });
            }
            this.taskQueue.queueMicroTask(function () {
                if (_this.change) {
                    _this.change();
                }
            });
            return true;
        };
        Text.prototype.defaultValidate = function (args) {
            return args.item != null && args.item !== "";
        };
        Text.prototype.detached = function () {
            element_util_1.default.detached(this.common, this.formName, this.required, this._clear, this._myValidator);
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], Text.prototype, "item", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], Text.prototype, "isNumber", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], Text.prototype, "isPositive", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], Text.prototype, "isLong", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Text.prototype, "disabled", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "label", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "pre", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "instructions", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "placeholder", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "warningMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Text.prototype, "isWarning", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Text.prototype, "required", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "errorMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Text.prototype, "showError", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Text.prototype, "isValid", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Text.prototype, "isOverrideInvalid", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Text.prototype, "showInlineHelp", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Text.prototype, "showInlineHelpLink", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "inlineHelpMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "inlineHelpMsgAfterLink", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "inlineHelpLinkText", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "inlineHelpLink", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], Text.prototype, "formName", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], Text.prototype, "changing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], Text.prototype, "change", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], Text.prototype, "validate", void 0);
        Text = __decorate([
            aurelia_framework_1.customElement("ce-input"),
            aurelia_framework_1.autoinject(),
            __metadata("design:paramtypes", [common_1.Common, aurelia_framework_1.TaskQueue])
        ], Text);
        return Text;
    }());
    exports.Text = Text;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy9pbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFPQTtRQTJDSSxjQUFZLE1BQWMsRUFBRSxTQUFvQjtZQUFoRCxpQkFnQkM7WUF0RGdCLGFBQVEsR0FBWSxLQUFLLENBQUM7WUFDMUIsZUFBVSxHQUFZLElBQUksQ0FBQztZQUMzQixXQUFNLEdBQVksS0FBSyxDQUFDO1lBQ29CLGFBQVEsR0FBWSxLQUFLLENBQUM7WUFJMUIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7WUFDekIsZUFBVSxHQUFXLFNBQVMsQ0FBQztZQUMvQixjQUFTLEdBQVksS0FBSyxDQUFDO1lBQzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7WUFDMUIsYUFBUSxHQUFXLGdCQUFnQixDQUFDO1lBQ3BDLGNBQVMsR0FBWSxJQUFJLENBQUM7WUFDMUIsWUFBTyxHQUFZLElBQUksQ0FBQztZQUN4QixzQkFBaUIsR0FBWSxLQUFLLENBQUM7WUFDbkMsbUJBQWMsR0FBWSxLQUFLLENBQUM7WUFDaEMsdUJBQWtCLEdBQVksS0FBSyxDQUFDO1lBQ3BDLGtCQUFhLEdBQVcscUJBQXFCLENBQUM7WUFDOUMsMkJBQXNCLEdBQVcsR0FBRyxDQUFDO1lBQ3JDLHVCQUFrQixHQUFXLE1BQU0sQ0FBQztZQUNwQyxtQkFBYyxHQUFXLHVCQUF1QixDQUFDO1lBRzdGLGFBQVEsR0FBVyxTQUFTLENBQUM7WUFVdEMsNkJBQXdCLEdBQVcsMkJBQTJCLENBQUM7WUFHL0QsZ0JBQVcsR0FBUSxJQUFJLENBQUM7WUFHNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFFM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBRXRDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBQyxtQkFBNEI7Z0JBQ3ZDLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dC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O1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOzt1REFBMkM7UUFDMUM7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7O29EQUF3QztRQUN2QztZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7d0RBQTRDO1FBQzNDO1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOzttREFBc0Q7UUFDckQ7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7OzREQUE2QztRQUM1QztZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7d0RBQTRDO1FBQzNDO1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOztvREFBeUQ7UUFHcEc7WUFBVCw0QkFBUTs7OENBQXFDO1FBQ3BDO1lBQVQsNEJBQVE7c0NBQWtCLFFBQVE7OENBQUM7UUFDMUI7WUFBVCw0QkFBUTtzQ0FBZ0IsUUFBUTs0Q0FBQztRQUN4QjtZQUFULDRCQUFRO3NDQUFrQixRQUFROzhDQUFDO1FBL0IzQixJQUFJO1lBRmhCLGlDQUFhLENBQUMsVUFBVSxDQUFDO1lBQ3pCLDhCQUFVLEVBQUU7NkNBNENXLGVBQU0sRUFBYSw2QkFBUztXQTNDdkMsSUFBSSxDQXNHaEI7UUFBRCxXQUFDO0tBdEdELEFBc0dDLElBQUE7SUF0R1ksb0JBQUkiLCJmaWxlIjoicmVzb3VyY2VzL2VsZW1lbnRzL2lucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCwgYmluZGFibGUsIGJpbmRpbmdNb2RlLCBjdXN0b21FbGVtZW50LCBUYXNrUXVldWV9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgQ29tbW9uIH0gZnJvbSBcIi4uL2NvbW1vblwiO1xyXG5pbXBvcnQgRWxlbWVudFV0aWwgZnJvbSBcIi4vY29tbW9uL2VsZW1lbnQtdXRpbFwiO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoXCJjZS1pbnB1dFwiKVxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBUZXh0IHtcclxuICAgIHB1YmxpYyBjb21tb246IENvbW1vbjtcclxuICAgIHB1YmxpYyB0YXNrUXVldWU6IFRhc2tRdWV1ZTtcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaXRlbTogYW55O1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyBpc051bWJlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyBpc1Bvc2l0aXZlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBiaW5kYWJsZSBwdWJsaWMgaXNMb25nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHByZTogc3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGluc3RydWN0aW9uczogc3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHdhcm5pbmdNc2c6IHN0cmluZyA9IFwiV2FybmluZ1wiO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGlzV2FybmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgZXJyb3JNc2c6IHN0cmluZyA9IFwiVmFsdWUgcmVxdWlyZWRcIjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBzaG93RXJyb3I6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGlzVmFsaWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGlzT3ZlcnJpZGVJbnZhbGlkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgc2hvd0lubGluZUhlbHA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBzaG93SW5saW5lSGVscExpbms6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpbmxpbmVIZWxwTXNnOiBzdHJpbmcgPSBcIkJpbmQgSGVscCBUZXh0IEhFUkVcIjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpbmxpbmVIZWxwTXNnQWZ0ZXJMaW5rOiBzdHJpbmcgPSBcIi5cIjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpbmxpbmVIZWxwTGlua1RleHQ6IHN0cmluZyA9IFwiTW9yZVwiO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGlubGluZUhlbHBMaW5rOiBzdHJpbmcgPSBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbVwiO1xyXG5cclxuXHJcbiAgICBAYmluZGFibGUgcHVibGljIGZvcm1OYW1lOiBzdHJpbmcgPSBcImRlZmF1bHRcIjtcclxuICAgIEBiaW5kYWJsZSBwdWJsaWMgY2hhbmdpbmc6IEZ1bmN0aW9uO1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyBjaGFuZ2U6IEZ1bmN0aW9uOyAvLyBjYWxsIHZpYSBjaGFuZ2UuY2FsbD1cImZ1bmN0aW9uTmFtZVwiXHJcbiAgICBAYmluZGFibGUgcHVibGljIHZhbGlkYXRlOiBGdW5jdGlvbjtcclxuXHJcbiAgICBwcml2YXRlIF9pbnB1dDogRWxlbWVudDtcclxuXHJcbiAgICBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfdmFsaWRhdGU6IEZ1bmN0aW9uO1xyXG4gICAgcHJpdmF0ZSBfZm9ybUdyb3VwOiBhbnk7IC8vIGVsZW1lbnQgcmVmXHJcbiAgICBwcml2YXRlIF9wcm9ncmFtYXRpY0Vycm9yTWVzc2FnZTogc3RyaW5nID0gXCJFcnJvciBXaGVuIEJpbmRpbmcgSW5wdXQuXCI7XHJcbiAgICBwcml2YXRlIF9jbGVhcjogRnVuY3Rpb247IC8vIHNldCBpbiBpbmhlcml0b3JcclxuICAgIHByaXZhdGUgX215VmFsaWRhdG9yOiBGdW5jdGlvbjsgLy8gc2V0IGluIGluaGVyaXRvclxyXG4gICAgcHJpdmF0ZSBfZW1wdHlWYWx1ZTogYW55ID0gbnVsbDsgIC8vIHdpbGwgYmUgbnVsbCBpZiBvYmplY3RzLCBcIlwiIGlmIHN0cmluZ1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbW1vbjogQ29tbW9uLCB0YXNrUXVldWU6IFRhc2tRdWV1ZSkge1xyXG4gICAgICAgIHRoaXMuY29tbW9uID0gY29tbW9uO1xyXG4gICAgICAgIHRoaXMudGFza1F1ZXVlID0gdGFza1F1ZXVlO1xyXG5cclxuICAgICAgICB0aGlzLl92YWxpZGF0ZSA9IHRoaXMuZGVmYXVsdFZhbGlkYXRlO1xyXG4gICAgICAgIC8vIGNsZWFyIGlzIGNhbGxlZCBieSBodGVcclxuICAgICAgICB0aGlzLl9jbGVhciA9IChvbmx5Q2xlYXJWYWxpZGF0aW9uOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICghb25seUNsZWFyVmFsaWRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gdGhpcy5fZW1wdHlWYWx1ZTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX215VmFsaWRhdG9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgRWxlbWVudFV0aWwuaXNWaXNpYmxlKHRoaXMuX2Zvcm1Hcm91cCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9ICB0aGlzLl92YWxpZGF0ZSh7IGl0ZW06IHRoaXMuaXRlbSB9KTsgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZDsgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0ZSkgeyB0aGlzLl92YWxpZGF0ZSA9IHRoaXMudmFsaWRhdGU7IH1cclxuICAgICAgICBFbGVtZW50VXRpbC5hdHRhY2hlZCh0aGlzLmNvbW1vbiwgdGhpcy5mb3JtTmFtZSwgdGhpcy5yZXF1aXJlZCwgdGhpcy5fY2xlYXIsIHRoaXMuX215VmFsaWRhdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzIGlzIGZpcmVkIGJlZm9yZSB0aGUgaXRlbSBjaGFuZ2VzLFxyXG4gICAgLy8gYW5kIGlmIHRoZSBpdGVtIGlzIGNoYW5nZWQgZXh0ZXJuYWxseSBvciBpbnRlcm5hbGx5LlxyXG4gICAgcHVibGljIGl0ZW1DaGFuZ2VkKG5ld1ZhbHVlOiBhbnksIG9sZFZhbHVlOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5yZXF1aXJlZCAmJiBFbGVtZW50VXRpbC5pc1Zpc2libGUodGhpcy5fZm9ybUdyb3VwKSAmJiBuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5fdmFsaWRhdGUoeyBpdGVtOiB0aGlzLml0ZW0gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoaXMgaXMgZmlyZWQgQUZURVIgdGhlIGl0ZW0gY2hhbmdlcyxcclxuICAgIC8vIGFuZCBvbmx5IGlmIHRoZSBpdGVtIGNoYW5nZXMgZnJvbSBUSElTIGNvbnRyb2wsIG5vdCBmcm9tIGV4dGVybmFsIHNvdXJjZVxyXG4gICAgcHVibGljIF9jaGFuZ2VkKGV2LCBpbmRleCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTnVtYmVyICYmIHRoaXMuaXNQb3NpdGl2ZVxyXG4gICAgICAgICAgICAmJiB0aGlzLml0ZW0gIT0gbnVsbCAmJiB0aGlzLml0ZW0gIT09IFwiXCIgJiYgdGhpcy5pdGVtLmluZGV4T2YoXCItXCIpID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtID0gdGhpcy5pdGVtLnJlcGxhY2UoXCItXCIsIFwiXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbmdpbmcpIHsgdGhpcy5jaGFuZ2luZyh7XHJcbiAgICAgICAgICAgIGV2ZW50OiBldixcclxuICAgICAgICAgICAgaXRlbTogdGhpcy5pdGVtLFxyXG4gICAgICAgIH0pOyB9XHJcblxyXG4gICAgICAgIHRoaXMudGFza1F1ZXVlLnF1ZXVlTWljcm9UYXNrKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hhbmdlKSB7IHRoaXMuY2hhbmdlKCk7IH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVmYXVsdFZhbGlkYXRlKGFyZ3MpOiBib29sZWFuIHtcclxuICAgICAgICAvLyB3ZSBhcmUgb25seSB2YWxpZGF0aW5nIHRoYXQgdGhlcmUgaXMgYW4gaXRlbSwgYW5kIGl0IGlzIGxvbmdlciB0aGFuIFwiXCJcclxuICAgICAgICByZXR1cm4gYXJncy5pdGVtICE9IG51bGwgJiYgYXJncy5pdGVtICE9PSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXRhY2hlZCgpIHtcclxuICAgICAgICBFbGVtZW50VXRpbC5kZXRhY2hlZCh0aGlzLmNvbW1vbiwgdGhpcy5mb3JtTmFtZSwgdGhpcy5yZXF1aXJlZCwgdGhpcy5fY2xlYXIsIHRoaXMuX215VmFsaWRhdG9yKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/modal',["require", "exports", "aurelia-framework", "../common"], function (require, exports, aurelia_framework_1, common_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Modal = (function () {
        function Modal(common) {
            this.blnIsErrorModal = false;
            this.common = common;
        }
        Modal.prototype._callback = function () {
            if (this.callback) {
                this.callback();
            }
        };
        Modal.prototype._altCallback = function () {
            if (this.altCallback) {
                this.altCallback();
            }
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], Modal.prototype, "item", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Modal.prototype, "headerText", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Modal.prototype, "instructions", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Modal.prototype, "buttonText", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Modal.prototype, "altButtonText", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Modal.prototype, "icon", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Modal.prototype, "blnIsErrorModal", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], Modal.prototype, "callback", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], Modal.prototype, "altCallback", void 0);
        Modal = __decorate([
            aurelia_framework_1.customElement("ce-modal"),
            aurelia_framework_1.autoinject(),
            __metadata("design:paramtypes", [common_1.Common])
        ], Modal);
        return Modal;
    }());
    exports.Modal = Modal;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy9tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFPQTtRQWNJLGVBQVksTUFBYztZQUxtQyxvQkFBZSxHQUFZLEtBQUssQ0FBQztZQU0xRixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QixDQUFDO1FBRUQseUJBQVMsR0FBVDtZQUNJLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFBRTtRQUMxQyxDQUFDO1FBQ0QsNEJBQVksR0FBWjtZQUNJLElBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFBRTtRQUNoRCxDQUFDO1FBcEJxRDtZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7MkNBQWtCO1FBQ2pCO1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOztpREFBMkI7UUFDMUI7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7O21EQUE2QjtRQUM1QjtZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7aURBQTJCO1FBQzFCO1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOztvREFBOEI7UUFDN0I7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7OzJDQUFxQjtRQUNwQjtZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7c0RBQXlDO1FBRXBGO1lBQVQsNEJBQVE7c0NBQWtCLFFBQVE7K0NBQUM7UUFDMUI7WUFBVCw0QkFBUTtzQ0FBcUIsUUFBUTtrREFBQztRQVo5QixLQUFLO1lBRmpCLGlDQUFhLENBQUMsVUFBVSxDQUFDO1lBQ3pCLDhCQUFVLEVBQUU7NkNBZVcsZUFBTTtXQWRqQixLQUFLLENBd0JqQjtRQUFELFlBQUM7S0F4QkQsQUF3QkMsSUFBQTtJQXhCWSxzQkFBSyIsImZpbGUiOiJyZXNvdXJjZXMvZWxlbWVudHMvbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0LCBiaW5kYWJsZSwgYmluZGluZ01vZGUsIGN1c3RvbUVsZW1lbnQsIFRhc2tRdWV1ZX0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyBDb21tb24gfSBmcm9tIFwiLi4vY29tbW9uXCI7XHJcbmltcG9ydCBFbGVtZW50VXRpbCBmcm9tIFwiLi9jb21tb24vZWxlbWVudC11dGlsXCI7XHJcblxyXG5AY3VzdG9tRWxlbWVudChcImNlLW1vZGFsXCIpXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIE1vZGFsIHtcclxuICAgIHB1YmxpYyBjb21tb246IENvbW1vbjtcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaXRlbTogYW55O1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGhlYWRlclRleHQ6IHN0cmluZztcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpbnN0cnVjdGlvbnM6IHN0cmluZztcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBidXR0b25UZXh0OiBzdHJpbmc7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgYWx0QnV0dG9uVGV4dDogc3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGljb246IHN0cmluZztcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBibG5Jc0Vycm9yTW9kYWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAYmluZGFibGUgcHVibGljIGNhbGxiYWNrOiBGdW5jdGlvbjtcclxuICAgIEBiaW5kYWJsZSBwdWJsaWMgYWx0Q2FsbGJhY2s6IEZ1bmN0aW9uO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihjb21tb246IENvbW1vbikge1xyXG4gICAgICAgIHRoaXMuY29tbW9uID0gY29tbW9uO1xyXG4gICAgfVxyXG5cclxuICAgIF9jYWxsYmFjaygpIHtcclxuICAgICAgICBpZih0aGlzLmNhbGxiYWNrKSB7IHRoaXMuY2FsbGJhY2soKTsgfVxyXG4gICAgfVxyXG4gICAgX2FsdENhbGxiYWNrKCkge1xyXG4gICAgICAgIGlmKHRoaXMuYWx0Q2FsbGJhY2spIHsgdGhpcy5hbHRDYWxsYmFjaygpOyB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/money',["require", "exports", "aurelia-framework", "../common", "./common/element-util"], function (require, exports, aurelia_framework_1, common_1, element_util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CEMoney = (function () {
        function CEMoney(common, taskQueue) {
            var _this = this;
            this.isPositive = true;
            this.iconPlacement = "pre";
            this.iconClass = "fa-usd";
            this.btnClass = "btn-secondary";
            this.disabled = false;
            this.placeholder = "";
            this.warningMsg = "Warning";
            this.isWarning = false;
            this.required = false;
            this.errorMsg = "Value required";
            this.isValid = true;
            this.formName = "default";
            this._programaticErrorMessage = "Error When Binding Input.";
            this._emptyValue = null;
            this.common = common;
            this.taskQueue = taskQueue;
            this._validate = this.defaultValidate;
            this._clear = function (onlyClearValidation) {
                _this.isValid = true;
                if (!onlyClearValidation) {
                    _this.item = _this._emptyValue;
                }
            };
            this._myValidator = function () {
                if (_this.required && element_util_1.default.isVisible(_this._formGroup)) {
                    _this.isValid = _this._validate({ item: _this.item });
                }
                ;
                return _this.isValid;
            };
        }
        CEMoney.prototype.attached = function () {
            this.isValid = true;
            if (this.validate) {
                this._validate = this.validate;
            }
            element_util_1.default.attached(this.common, this.formName, this.required, this._clear, this._myValidator);
        };
        CEMoney.prototype.itemChanged = function (newValue, oldValue) {
            if (this.required && element_util_1.default.isVisible(this._formGroup) && newValue !== oldValue) {
                this.isValid = this._validate({ item: this.item });
            }
        };
        CEMoney.prototype._changed = function (ev, index) {
            var _this = this;
            if (this.isPositive
                && this.item != null && this.item !== "" && this.item.indexOf("-") >= 0) {
                this.item = this.item.replace("-", "");
            }
            if (this.changing) {
                this.changing({
                    event: ev,
                    item: this.item,
                });
            }
            this.taskQueue.queueMicroTask(function () {
                if (_this.change) {
                    _this.change();
                }
            });
            return true;
        };
        CEMoney.prototype.defaultValidate = function (args) {
            return args.item != null && args.item !== "";
        };
        CEMoney.prototype.detached = function () {
            element_util_1.default.detached(this.common, this.formName, this.required, this._clear, this._myValidator);
        };
        CEMoney.prototype.focus = function () {
            this._input.focus();
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], CEMoney.prototype, "item", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], CEMoney.prototype, "isPositive", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], CEMoney.prototype, "iconPlacement", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], CEMoney.prototype, "iconClass", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], CEMoney.prototype, "btnClass", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CEMoney.prototype, "disabled", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEMoney.prototype, "label", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEMoney.prototype, "pre", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEMoney.prototype, "instructions", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEMoney.prototype, "placeholder", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEMoney.prototype, "warningMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CEMoney.prototype, "isWarning", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CEMoney.prototype, "required", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEMoney.prototype, "errorMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CEMoney.prototype, "isValid", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], CEMoney.prototype, "formName", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], CEMoney.prototype, "changing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], CEMoney.prototype, "change", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], CEMoney.prototype, "validate", void 0);
        CEMoney = __decorate([
            aurelia_framework_1.customElement("ce-money"),
            aurelia_framework_1.autoinject(),
            __metadata("design:paramtypes", [common_1.Common, aurelia_framework_1.TaskQueue])
        ], CEMoney);
        return CEMoney;
    }());
    exports.CEMoney = CEMoney;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy9tb25leS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFPQTtRQXFDSSxpQkFBWSxNQUFjLEVBQUUsU0FBb0I7WUFBaEQsaUJBZ0JDO1lBaERnQixlQUFVLEdBQVksSUFBSSxDQUFDO1lBQzNCLGtCQUFhLEdBQVcsS0FBSyxDQUFDO1lBQzlCLGNBQVMsR0FBVyxRQUFRLENBQUM7WUFDN0IsYUFBUSxHQUFXLGVBQWUsQ0FBQztZQUdTLGFBQVEsR0FBWSxLQUFLLENBQUM7WUFJMUIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7WUFDekIsZUFBVSxHQUFXLFNBQVMsQ0FBQztZQUMvQixjQUFTLEdBQVksS0FBSyxDQUFDO1lBQzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7WUFDMUIsYUFBUSxHQUFXLGdCQUFnQixDQUFDO1lBQ3BDLFlBQU8sR0FBWSxJQUFJLENBQUM7WUFFcEUsYUFBUSxHQUFXLFNBQVMsQ0FBQztZQVV0Qyw2QkFBd0IsR0FBVywyQkFBMkIsQ0FBQztZQUcvRCxnQkFBVyxHQUFRLElBQUksQ0FBQztZQUc1QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUUzQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7WUFFdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFDLG1CQUE0QjtnQkFDdkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtvQkFDdEIsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDO2lCQUMvQjtZQUNOLENBQUMsQ0FBQTtZQUNELElBQUksQ0FBQyxZQUFZLEdBQUc7Z0JBQ1osSUFBSSxLQUFJLENBQUMsUUFBUSxJQUFJLHNCQUFXLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFB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ZUFBTSxFQUFhLDZCQUFTO1dBckN2QyxPQUFPLENBbUduQjtRQUFELGNBQUM7S0FuR0QsQUFtR0MsSUFBQTtJQW5HWSwwQkFBTyIsImZpbGUiOiJyZXNvdXJjZXMvZWxlbWVudHMvbW9uZXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0LCBiaW5kYWJsZSwgYmluZGluZ01vZGUsIGN1c3RvbUVsZW1lbnQsIFRhc2tRdWV1ZX0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyBDb21tb24gfSBmcm9tIFwiLi4vY29tbW9uXCI7XHJcbmltcG9ydCBFbGVtZW50VXRpbCBmcm9tIFwiLi9jb21tb24vZWxlbWVudC11dGlsXCI7XHJcblxyXG5AY3VzdG9tRWxlbWVudChcImNlLW1vbmV5XCIpXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIENFTW9uZXkge1xyXG4gICAgcHVibGljIGNvbW1vbjogQ29tbW9uO1xyXG4gICAgcHVibGljIHRhc2tRdWV1ZTogVGFza1F1ZXVlO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpdGVtOiBhbnk7XHJcbiAgICBAYmluZGFibGUgcHVibGljIGlzUG9zaXRpdmU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyBpY29uUGxhY2VtZW50OiBzdHJpbmcgPSBcInByZVwiOyAvLyBvciBcInBvc3RcIlxyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyBpY29uQ2xhc3M6IHN0cmluZyA9IFwiZmEtdXNkXCI7XHJcbiAgICBAYmluZGFibGUgcHVibGljIGJ0bkNsYXNzOiBzdHJpbmcgPSBcImJ0bi1zZWNvbmRhcnlcIjsgLy8gb3IgYnRuLXByaW1hcnlcclxuXHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgbGFiZWw6IHN0cmluZztcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBwcmU6IHN0cmluZztcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpbnN0cnVjdGlvbnM6IHN0cmluZztcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nID0gXCJcIjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyB3YXJuaW5nTXNnOiBzdHJpbmcgPSBcIldhcm5pbmdcIjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpc1dhcm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGVycm9yTXNnOiBzdHJpbmcgPSBcIlZhbHVlIHJlcXVpcmVkXCI7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaXNWYWxpZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyBmb3JtTmFtZTogc3RyaW5nID0gXCJkZWZhdWx0XCI7XHJcbiAgICBAYmluZGFibGUgcHVibGljIGNoYW5naW5nOiBGdW5jdGlvbjtcclxuICAgIEBiaW5kYWJsZSBwdWJsaWMgY2hhbmdlOiBGdW5jdGlvbjsgLy8gY2FsbCB2aWEgY2hhbmdlLmNhbGw9XCJmdW5jdGlvbk5hbWVcIlxyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyB2YWxpZGF0ZTogRnVuY3Rpb247XHJcblxyXG4gICAgcHJpdmF0ZSBfaW5wdXQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF92YWxpZGF0ZTogRnVuY3Rpb247XHJcbiAgICBwcml2YXRlIF9mb3JtR3JvdXA6IGFueTsgLy8gZWxlbWVudCByZWZcclxuICAgIHByaXZhdGUgX3Byb2dyYW1hdGljRXJyb3JNZXNzYWdlOiBzdHJpbmcgPSBcIkVycm9yIFdoZW4gQmluZGluZyBJbnB1dC5cIjtcclxuICAgIHByaXZhdGUgX2NsZWFyOiBGdW5jdGlvbjsgLy8gc2V0IGluIGluaGVyaXRvclxyXG4gICAgcHJpdmF0ZSBfbXlWYWxpZGF0b3I6IEZ1bmN0aW9uOyAvLyBzZXQgaW4gaW5oZXJpdG9yXHJcbiAgICBwcml2YXRlIF9lbXB0eVZhbHVlOiBhbnkgPSBudWxsOyAgLy8gd2lsbCBiZSBudWxsIGlmIG9iamVjdHMsIFwiXCIgaWYgc3RyaW5nXHJcblxyXG4gICAgY29uc3RydWN0b3IoY29tbW9uOiBDb21tb24sIHRhc2tRdWV1ZTogVGFza1F1ZXVlKSB7XHJcbiAgICAgICAgdGhpcy5jb21tb24gPSBjb21tb247XHJcbiAgICAgICAgdGhpcy50YXNrUXVldWUgPSB0YXNrUXVldWU7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlID0gdGhpcy5kZWZhdWx0VmFsaWRhdGU7XHJcbiAgICAgICAgLy8gY2xlYXIgaXMgY2FsbGVkIGJ5IGh0ZVxyXG4gICAgICAgIHRoaXMuX2NsZWFyID0gKG9ubHlDbGVhclZhbGlkYXRpb246IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKCFvbmx5Q2xlYXJWYWxpZGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLl9lbXB0eVZhbHVlO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9teVZhbGlkYXRvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlcXVpcmVkICYmIEVsZW1lbnRVdGlsLmlzVmlzaWJsZSh0aGlzLl9mb3JtR3JvdXApKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSAgdGhpcy5fdmFsaWRhdGUoeyBpdGVtOiB0aGlzLml0ZW0gfSk7IH07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkOyB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmlzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRlKSB7IHRoaXMuX3ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZTsgfVxyXG4gICAgICAgIEVsZW1lbnRVdGlsLmF0dGFjaGVkKHRoaXMuY29tbW9uLCB0aGlzLmZvcm1OYW1lLCB0aGlzLnJlcXVpcmVkLCB0aGlzLl9jbGVhciwgdGhpcy5fbXlWYWxpZGF0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoaXMgaXMgZmlyZWQgYmVmb3JlIHRoZSBpdGVtIGNoYW5nZXMsXHJcbiAgICAvLyBhbmQgaWYgdGhlIGl0ZW0gaXMgY2hhbmdlZCBleHRlcm5hbGx5IG9yIGludGVybmFsbHkuXHJcbiAgICBwdWJsaWMgaXRlbUNoYW5nZWQobmV3VmFsdWU6IGFueSwgb2xkVmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlcXVpcmVkICYmIEVsZW1lbnRVdGlsLmlzVmlzaWJsZSh0aGlzLl9mb3JtR3JvdXApICYmIG5ld1ZhbHVlICE9PSBvbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0aGlzLl92YWxpZGF0ZSh7IGl0ZW06IHRoaXMuaXRlbSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcyBpcyBmaXJlZCBBRlRFUiB0aGUgaXRlbSBjaGFuZ2VzLFxyXG4gICAgLy8gYW5kIG9ubHkgaWYgdGhlIGl0ZW0gY2hhbmdlcyBmcm9tIFRISVMgY29udHJvbCwgbm90IGZyb20gZXh0ZXJuYWwgc291cmNlXHJcbiAgICBwdWJsaWMgX2NoYW5nZWQoZXYsIGluZGV4KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNQb3NpdGl2ZVxyXG4gICAgICAgICAgICAmJiB0aGlzLml0ZW0gIT0gbnVsbCAmJiB0aGlzLml0ZW0gIT09IFwiXCIgJiYgdGhpcy5pdGVtLmluZGV4T2YoXCItXCIpID49IDApe1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLml0ZW0ucmVwbGFjZShcIi1cIiwgXCJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jaGFuZ2luZykgeyB0aGlzLmNoYW5naW5nKHtcclxuICAgICAgICAgICAgZXZlbnQ6IGV2LFxyXG4gICAgICAgICAgICBpdGVtOiB0aGlzLml0ZW0sXHJcbiAgICAgICAgfSk7IH1cclxuXHJcbiAgICAgICAgdGhpcy50YXNrUXVldWUucXVldWVNaWNyb1Rhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGFuZ2UpIHsgdGhpcy5jaGFuZ2UoKTsgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWZhdWx0VmFsaWRhdGUoYXJncyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIHdlIGFyZSBvbmx5IHZhbGlkYXRpbmcgdGhhdCB0aGVyZSBpcyBhbiBpdGVtLCBhbmQgaXQgaXMgbG9uZ2VyIHRoYW4gXCJcIlxyXG4gICAgICAgIHJldHVybiBhcmdzLml0ZW0gIT0gbnVsbCAmJiBhcmdzLml0ZW0gIT09IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRldGFjaGVkKCkge1xyXG4gICAgICAgIEVsZW1lbnRVdGlsLmRldGFjaGVkKHRoaXMuY29tbW9uLCB0aGlzLmZvcm1OYW1lLCB0aGlzLnJlcXVpcmVkLCB0aGlzLl9jbGVhciwgdGhpcy5fbXlWYWxpZGF0b3IpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZvY3VzKCkgeyAvLyBvbiBidXR0b24gY2xpY2tcclxuICAgICAgICB0aGlzLl9pbnB1dC5mb2N1cygpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/multiselect',["require", "exports", "../common", "./common/element-util", "aurelia-framework"], function (require, exports, common_1, element_util_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CEMultiselect = (function () {
        function CEMultiselect(observerLocator, common, taskQueue) {
            var _this = this;
            this.type = "";
            this.disabled = false;
            this.placeholder = "";
            this.warningMsg = "Warning";
            this.isWarning = false;
            this.required = false;
            this.errorMsg = "Value required";
            this.isValid = true;
            this.formName = "default";
            this._emptyValue = [];
            this._charLimitForStacked = 42;
            this._charLimitForStackedLongText = 120;
            this._isStackedClass = false;
            this._isStackedLongText = false;
            this._areObjects = false;
            this.common = common;
            this.taskQueue = taskQueue;
            this.observerLocator = observerLocator;
            this._validate = this.defaultValidate;
            this._clear = function (onlyClearValidation) {
                _this.isValid = true;
                if (!onlyClearValidation) {
                    _this.selectedItems.splice(0, _this.selectedItems.length);
                    _this._activeMap = element_util_1.default.activeMap(_this.items, _this.selectedItems);
                    _this.updateSelection();
                }
            };
            this._myValidator = function () {
                if (_this.required && element_util_1.default.isVisible(_this._formGroup)) {
                    _this.isValid = _this._validate({ items: _this.selectedItems });
                }
                return _this.isValid;
            };
        }
        CEMultiselect.prototype.attached = function () {
            this.isValid = true;
            if (this.validate) {
                this._validate = this.validate;
            }
            element_util_1.default.attached(this.common, this.formName, this.required, this._clear, this._myValidator);
            if (this.selectedItems) {
                this.selectedItemsChanged(this.selectedItems, null);
            }
        };
        CEMultiselect.prototype.itemsChanged = function (newValue, oldValue) {
            this._areObjects = element_util_1.default.areObjects(this.items);
            if (newValue != null && this.selectedItems != null && this.selectedItems.length) {
                this._activeMap = element_util_1.default.activeMap(this.items, this.selectedItems);
                this.updateSelection();
            }
        };
        CEMultiselect.prototype.defaultValidate = function (args) {
            return args.items != null && args.items.length > 0;
        };
        CEMultiselect.prototype.selectedItemsChanged = function (newValue, oldValue) {
            var _this = this;
            this._arrayObserver = this.observerLocator.getArrayObserver(this.selectedItems).subscribe(function () { return _this.selectedItemsHasChanged(); });
            this.selectedItemsHasChanged();
        };
        CEMultiselect.prototype.selectedItemsHasChanged = function () {
            this.remapActiveMap();
            if (this.required && element_util_1.default.isVisible(this._formGroup)) {
                this.isValid = this._validate({ items: this.selectedItems });
            }
        };
        CEMultiselect.prototype.updateSelection = function () {
            var _this = this;
            this.taskQueue.queueTask(function () {
                if (_this._formGroup) {
                    var elems = Array.from(_this._formGroup.getElementsByClassName("btn"));
                    element_util_1.default.setActiveFromActiveMap(elems, _this._activeMap);
                }
            });
        };
        CEMultiselect.prototype._changed = function (ev, index) {
            var _this = this;
            this.remapActiveMap();
            var args = {
                event: ev,
                items: this.selectedItems,
                index: index,
            };
            if (this.changing) {
                this.changing(args);
            }
            this.taskQueue.queueMicroTask(function () {
                if (_this.change) {
                    _this.change();
                }
            });
            return true;
        };
        CEMultiselect.prototype.detached = function () {
            element_util_1.default.detached(this.common, this.formName, this.required, this._clear, this._myValidator);
        };
        CEMultiselect.prototype.remapActiveMap = function () {
            var _this = this;
            var newMap = [];
            this.items.forEach(function (obj) {
                var val = false;
                _this.selectedItems.forEach(function (s) {
                    if (!val) {
                        if (_this._areObjects) {
                            if (_this.valueAttribute && s == obj[_this.valueAttribute]) {
                                val = true;
                            }
                            else if (!val && s == obj) {
                                val = true;
                            }
                        }
                        else if (s === obj) {
                            val = true;
                        }
                    }
                });
                newMap.push(val);
            });
            this._activeMap = newMap;
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEMultiselect.prototype, "type", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Array)
        ], CEMultiselect.prototype, "items", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Array)
        ], CEMultiselect.prototype, "selectedItems", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEMultiselect.prototype, "displayAttribute", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEMultiselect.prototype, "valueAttribute", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CEMultiselect.prototype, "disabled", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEMultiselect.prototype, "label", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEMultiselect.prototype, "pre", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEMultiselect.prototype, "instructions", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEMultiselect.prototype, "placeholder", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEMultiselect.prototype, "warningMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CEMultiselect.prototype, "isWarning", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CEMultiselect.prototype, "required", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], CEMultiselect.prototype, "errorMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], CEMultiselect.prototype, "isValid", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], CEMultiselect.prototype, "formName", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], CEMultiselect.prototype, "changing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], CEMultiselect.prototype, "change", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], CEMultiselect.prototype, "validate", void 0);
        CEMultiselect = __decorate([
            aurelia_framework_1.customElement("ce-multiselect"),
            aurelia_framework_1.autoinject(),
            __metadata("design:paramtypes", [aurelia_framework_1.ObserverLocator, common_1.Common, aurelia_framework_1.TaskQueue])
        ], CEMultiselect);
        return CEMultiselect;
    }());
    exports.CEMultiselect = CEMultiselect;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy9tdWx0aXNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFVQTtRQTRDSSx1QkFBWSxlQUFnQyxFQUFFLE1BQWMsRUFBRSxTQUFvQjtZQUFsRixpQkFvQkM7WUF6RDRELFNBQUksR0FBVyxFQUFFLENBQUM7WUFPbEIsYUFBUSxHQUFZLEtBQUssQ0FBQztZQUkxQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztZQUN6QixlQUFVLEdBQVcsU0FBUyxDQUFDO1lBQy9CLGNBQVMsR0FBWSxLQUFLLENBQUM7WUFDM0IsYUFBUSxHQUFZLEtBQUssQ0FBQztZQUMxQixhQUFRLEdBQVcsZ0JBQWdCLENBQUM7WUFDcEMsWUFBTyxHQUFZLElBQUksQ0FBQztZQUVwRSxhQUFRLEdBQVcsU0FBUyxDQUFDO1lBS3RDLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1lBQ3RCLHlCQUFvQixHQUFXLEVBQUUsQ0FBQztZQUNsQyxpQ0FBNEIsR0FBVyxHQUFHLENBQUM7WUFDM0Msb0JBQWUsR0FBWSxLQUFLLENBQUM7WUFDakMsdUJBQWtCLEdBQVksS0FBSyxDQUFDO1lBRXBDLGdCQUFXLEdBQVksS0FBSyxDQUFDO1lBU2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1lBRXZDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUV0QyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQUMsbUJBQTRCO2dCQUN2QyxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFO29CQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFD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LENBQUMsZ0JBQWdCLENBQUM7WUFDL0IsOEJBQVUsRUFBRTs2Q0E2Q29CLG1DQUFlLEVBQVUsZUFBTSxFQUFhLDZCQUFTO1dBNUN6RSxhQUFhLENBbUt6QjtRQUFELG9CQUFDO0tBbktELEFBbUtDLElBQUE7SUFuS1ksc0NBQWEiLCJmaWxlIjoicmVzb3VyY2VzL2VsZW1lbnRzL211bHRpc2VsZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uIH0gZnJvbSBcIi4uL2NvbW1vblwiO1xyXG5pbXBvcnQgRWxlbWVudFV0aWwgZnJvbSBcIi4vY29tbW9uL2VsZW1lbnQtdXRpbFwiO1xyXG5pbXBvcnQge2F1dG9pbmplY3QsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgY3VzdG9tRWxlbWVudCwgT2JzZXJ2ZXJMb2NhdG9yLCBUYXNrUXVldWV9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5cclxuLypcclxuKiBUaGlzIGlzIGEgY2hlY2tib3ggbGlzdFxyXG4qL1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoXCJjZS1tdWx0aXNlbGVjdFwiKVxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBDRU11bHRpc2VsZWN0IHtcclxuICAgIHB1YmxpYyBjb21tb246IENvbW1vbjtcclxuICAgIHB1YmxpYyB0YXNrUXVldWU6IFRhc2tRdWV1ZTtcclxuICAgIHB1YmxpYyBvYnNlcnZlckxvY2F0b3I6IE9ic2VydmVyTG9jYXRvcjtcclxuXHJcblxyXG4gICAgLyoqIEBwYXJhbSAqL1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHR5cGU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaXRlbXM6IEFycmF5PGFueT47XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgc2VsZWN0ZWRJdGVtczogQXJyYXk8YW55PjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBkaXNwbGF5QXR0cmlidXRlOiBzdHJpbmc7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgdmFsdWVBdHRyaWJ1dGU6IHN0cmluZztcclxuXHJcbiAgICAvLyBkZWZhdWx0IG9wdGlvbnMgZm9yIGFsbCBlbGVtZW50cywgbXVzdCBiZSBzZXQgaGVyZSwgYmVjYXVzZSBiYXNlIGNsYXNzIGNhbnQgZGVjbGFyZSBiaW5kYWJsZXNcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgcHJlOiBzdHJpbmc7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaW5zdHJ1Y3Rpb25zOiBzdHJpbmc7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgd2FybmluZ01zZzogc3RyaW5nID0gXCJXYXJuaW5nXCI7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaXNXYXJuaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBlcnJvck1zZzogc3RyaW5nID0gXCJWYWx1ZSByZXF1aXJlZFwiO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGlzVmFsaWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBiaW5kYWJsZSBwdWJsaWMgZm9ybU5hbWU6IHN0cmluZyA9IFwiZGVmYXVsdFwiO1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyBjaGFuZ2luZzogRnVuY3Rpb247XHJcbiAgICBAYmluZGFibGUgcHVibGljIGNoYW5nZTogRnVuY3Rpb247XHJcbiAgICBAYmluZGFibGUgcHVibGljIHZhbGlkYXRlOiBGdW5jdGlvbjtcclxuXHJcbiAgICBwcml2YXRlIF9lbXB0eVZhbHVlOiBhbnkgPSBbXTtcclxuICAgIHByaXZhdGUgX2NoYXJMaW1pdEZvclN0YWNrZWQ6IE51bWJlciA9IDQyO1xyXG4gICAgcHJpdmF0ZSBfY2hhckxpbWl0Rm9yU3RhY2tlZExvbmdUZXh0OiBOdW1iZXIgPSAxMjA7XHJcbiAgICBwcml2YXRlIF9pc1N0YWNrZWRDbGFzczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfaXNTdGFja2VkTG9uZ1RleHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9hcmVPYmplY3RzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9hY3RpdmVNYXA6IGJvb2xlYW5bXTtcclxuICAgIHByaXZhdGUgX2FycmF5T2JzZXJ2ZXI6IGFueTtcclxuICAgIHByaXZhdGUgX3ZhbGlkYXRlOiBGdW5jdGlvbjtcclxuICAgIHByaXZhdGUgX2Zvcm1Hcm91cDogSFRNTEVsZW1lbnQ7IC8vIGVsZW1lbnQgcmVmXHJcbiAgICBwcml2YXRlIF9jbGVhcjogRnVuY3Rpb247IC8vIHNldCBpbiBpbmhlcml0b3JcclxuICAgIHByaXZhdGUgX215VmFsaWRhdG9yOiBGdW5jdGlvbjsgLy8gc2V0IGluIGluaGVyaXRvclxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9ic2VydmVyTG9jYXRvcjogT2JzZXJ2ZXJMb2NhdG9yLCBjb21tb246IENvbW1vbiwgdGFza1F1ZXVlOiBUYXNrUXVldWUpIHtcclxuICAgICAgICB0aGlzLmNvbW1vbiA9IGNvbW1vbjtcclxuICAgICAgICB0aGlzLnRhc2tRdWV1ZSA9IHRhc2tRdWV1ZTtcclxuICAgICAgICB0aGlzLm9ic2VydmVyTG9jYXRvciA9IG9ic2VydmVyTG9jYXRvcjtcclxuXHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdGUgPSB0aGlzLmRlZmF1bHRWYWxpZGF0ZTtcclxuICAgICAgICAvLyBjbGVhciBpcyBjYWxsZWQgYnkgdGhlIFxyXG4gICAgICAgIHRoaXMuX2NsZWFyID0gKG9ubHlDbGVhclZhbGlkYXRpb246IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKCFvbmx5Q2xlYXJWYWxpZGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMuc3BsaWNlKDAsIHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aXZlTWFwID0gRWxlbWVudFV0aWwuYWN0aXZlTWFwKHRoaXMuaXRlbXMsIHRoaXMuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9teVZhbGlkYXRvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlcXVpcmVkICYmIEVsZW1lbnRVdGlsLmlzVmlzaWJsZSh0aGlzLl9mb3JtR3JvdXApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gIHRoaXMuX3ZhbGlkYXRlKHsgaXRlbXM6IHRoaXMuc2VsZWN0ZWRJdGVtcyB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQ7IH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGUpIHsgdGhpcy5fdmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlOyB9XHJcbiAgICAgICAgRWxlbWVudFV0aWwuYXR0YWNoZWQodGhpcy5jb21tb24sIHRoaXMuZm9ybU5hbWUsIHRoaXMucmVxdWlyZWQsIHRoaXMuX2NsZWFyLCB0aGlzLl9teVZhbGlkYXRvcik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zQ2hhbmdlZCh0aGlzLnNlbGVjdGVkSXRlbXMsIG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXRlbXNDaGFuZ2VkKG5ld1ZhbHVlOiBhbnksIG9sZFZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9hcmVPYmplY3RzID0gRWxlbWVudFV0aWwuYXJlT2JqZWN0cyh0aGlzLml0ZW1zKTtcclxuICAgICAgICAvL0VsZW1lbnRVdGlsLmNoZWNrTWF4Q2hhcnModGhpcy5pdGVtcywgdGhpcy5fYXJlT2JqZWN0cywgdGhpcy5kaXNwbGF5QXR0cmlidXRlKTtcclxuICAgICAgICBpZiAobmV3VmFsdWUgIT0gbnVsbCAmJiB0aGlzLnNlbGVjdGVkSXRlbXMgIT0gbnVsbCAmJiB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBnZXQgY3VycmVudCBvYmplY3QgZnJvbSBzZWxlY3RlZCBkaXNwbGF5IGF0dHJpYnV0ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FjdGl2ZU1hcCA9IEVsZW1lbnRVdGlsLmFjdGl2ZU1hcCh0aGlzLml0ZW1zLCB0aGlzLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3Rpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlZmF1bHRWYWxpZGF0ZShhcmdzKSB7XHJcbiAgICAgICAgLy8gd2UgYXJlIG9ubHkgdmFsaWRhdGluZyB0aGF0IHRoZXJlIElTIE9ORSB2YWx1ZVxyXG4gICAgICAgIHJldHVybiBhcmdzLml0ZW1zICE9IG51bGwgJiYgYXJncy5pdGVtcy5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxlY3RlZEl0ZW1zQ2hhbmdlZChuZXdWYWx1ZTogYW55LCBvbGRWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgLy8gZmlyZWQgd2hlbiBhcnJheSBhY3R1YWxseSBjaGFuZ2VzLCB0aGlzIG1lYW5zIHRoZSBBUlJBWSBXQVMgUkVQTEFDRURcclxuICAgICAgICAvLyBXZSBuZWVkIHRvIHJlc3Vic2NyaWJlLlxyXG4gICAgICAgIHRoaXMuX2FycmF5T2JzZXJ2ZXIgPSB0aGlzLm9ic2VydmVyTG9jYXRvci5nZXRBcnJheU9ic2VydmVyKHRoaXMuc2VsZWN0ZWRJdGVtcykuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2VsZWN0ZWRJdGVtc0hhc0NoYW5nZWQoKSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zSGFzQ2hhbmdlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxlY3RlZEl0ZW1zSGFzQ2hhbmdlZCgpIHtcclxuICAgICAgICAvLyB3ZSBkb250IHdhbnQgdG8gdmFsaWRhdGUgc3R1ZmYgYmVmb3JlIHN0dWZmIGlzIGxvYWRlZCAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZW1hcEFjdGl2ZU1hcCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5yZXF1aXJlZCAmJiBFbGVtZW50VXRpbC5pc1Zpc2libGUodGhpcy5fZm9ybUdyb3VwKSApIHsgLy8gJiYgdGhpcy5fc2VsZWN0ZWRJdGVtcyAhPSB0aGlzLnNlbGVjdGVkSXRlbXMgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRoaXMuX3ZhbGlkYXRlKHsgaXRlbXM6IHRoaXMuc2VsZWN0ZWRJdGVtcyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdXBkYXRlU2VsZWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMudGFza1F1ZXVlLnF1ZXVlVGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9mb3JtR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbGVtcyA9IEFycmF5LmZyb20odGhpcy5fZm9ybUdyb3VwLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG5cIikpO1xyXG4gICAgICAgICAgICAgICAgRWxlbWVudFV0aWwuc2V0QWN0aXZlRnJvbUFjdGl2ZU1hcChlbGVtcywgdGhpcy5fYWN0aXZlTWFwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gdGhpcyBpcyBmaXJlZCBBRlRFUiB0aGUgaXRlbSBjaGFuZ2VzLCBcclxuICAgIC8vIGFuZCBvbmx5IGlmIHRoZSBpdGVtIGNoYW5nZXMgZnJvbSBUSElTIGNvbnRyb2wsIG5vdCBmcm9tIGV4dGVybmFsIHNvdXJjZVxyXG4gICAgcHVibGljIF9jaGFuZ2VkKGV2OiBNb3VzZUV2ZW50LCBpbmRleCkge1xyXG5cclxuICAgICAgICAvLyBmaXggdGhlIGFjdGl2ZS9ub3QgYWN0aXZlIGNsYXNzIGJhc2VkIG9uIHZhbHVlLCBcclxuICAgICAgICAvLyBub3RlIHRoYXQgdGhpcyBpcyBpbml0aWFsbHkgc2V0IHZpYSBjb21tb24uaXNBY3RpdmUgYnV0IHRoYXQgb25seSBleGVjdXRlcyBvbmNlXHJcbiAgICAgICAgLy8gdGhpcy5fZGlydHlBY3RpdmVUcmlnZ2VyID0gIXRoaXMuX2RpcnR5QWN0aXZlVHJpZ2dlcjtcclxuICAgICAgICB0aGlzLnJlbWFwQWN0aXZlTWFwKCk7XHJcbiAgICAgICAgbGV0IGFyZ3MgPSB7XHJcbiAgICAgICAgICAgIGV2ZW50OiBldixcclxuICAgICAgICAgICAgaXRlbXM6IHRoaXMuc2VsZWN0ZWRJdGVtcyxcclxuICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbmdpbmcpIHsgdGhpcy5jaGFuZ2luZyhhcmdzKTsgfVxyXG5cclxuICAgICAgICB0aGlzLnRhc2tRdWV1ZS5xdWV1ZU1pY3JvVGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYW5nZSkgeyB0aGlzLmNoYW5nZSgpOyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRldGFjaGVkKCkge1xyXG4gICAgICAgIEVsZW1lbnRVdGlsLmRldGFjaGVkKHRoaXMuY29tbW9uLCB0aGlzLmZvcm1OYW1lLCB0aGlzLnJlcXVpcmVkLCB0aGlzLl9jbGVhciwgdGhpcy5fbXlWYWxpZGF0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHd0ZiBpcyB0aGlzIHlvdSBtaWdodCBhc2suXHJcbiAgICAvLyBzZWUgeW91IG1heSBoYXZlIGFuIGFycmF5LCBhbmQgdGhhdCBhcnJheSBtYXkgY2hhbmdlZFxyXG4gICAgLy8gdGhhdCBhcnJheSBtaWdodCBoYXZlIG90aGVyIHRoaW5ncyBib3VuZCB0byBpdC4uLlxyXG4gICAgLy8gdGhpcyB3aWxsIGVuc3VyZSB0byByZWJpbmQgdGhlIGFjdGl2ZSB2YXJpYWJsZSB3aGVuIHRoZSBzZWxlY3RlZEl0ZW1zIGFycmF5IGlzIG1vZGlmaWVkXHJcbiAgICBwcml2YXRlIHJlbWFwQWN0aXZlTWFwKCkge1xyXG4gICAgICAgIGxldCBuZXdNYXA6IGJvb2xlYW5bXSA9IFtdO1xyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB2YWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLmZvckVhY2goKHMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FyZU9iamVjdHMgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERPIE5PVCBDSEFOR0UgVEhFU0UgVE8gPT09ICAgXCIxXCIgIT0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZUF0dHJpYnV0ZSAmJiBzID09IG9ialt0aGlzLnZhbHVlQXR0cmlidXRlXSkgeyB2YWwgPSB0cnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCF2YWwgJiYgcyA9PSBvYmopIHsgdmFsID0gdHJ1ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzID09PSBvYmopIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBuZXdNYXAucHVzaCh2YWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2FjdGl2ZU1hcCA9IG5ld01hcDtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/phone',["require", "exports", "aurelia-framework", "../common", "./common/element-util"], function (require, exports, aurelia_framework_1, common_1, element_util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Text = (function () {
        function Text(common, taskQueue) {
            var _this = this;
            this.isNumber = false;
            this.isPositive = true;
            this.isLong = false;
            this.disabled = false;
            this.placeholder = "";
            this.warningMsg = "Warning";
            this.isWarning = false;
            this.required = false;
            this.errorMsg = "Value required";
            this.invalidMsg = "Invalid Phone format";
            this.showError = true;
            this.isValid = true;
            this.isOverrideInvalid = false;
            this.maxlength = "12";
            this.minlength = 12;
            this.formName = "default";
            this._programaticErrorMessage = "Error When Binding Input.";
            this._emptyValue = null;
            this.common = common;
            this.taskQueue = taskQueue;
            this._validate = this.defaultValidate;
            this._clear = function (onlyClearValidation) {
                _this.isValid = true;
                if (!onlyClearValidation) {
                    _this.item = _this._emptyValue;
                }
            };
            this._myValidator = function () {
                if (_this.required && element_util_1.default.isVisible(_this._formGroup)) {
                    _this.isValid = _this._validate({ item: _this.item });
                }
                return _this.isValid;
            };
        }
        Text.prototype.attached = function () {
            this.isValid = true;
            if (this.validate) {
                this._validate = this.validate;
            }
            element_util_1.default.attached(this.common, this.formName, this.required, this._clear, this._myValidator);
        };
        Text.prototype.itemChanged = function (newValue, oldValue) {
            if (this.required && element_util_1.default.isVisible(this._formGroup) && newValue !== oldValue) {
                this.isValid = this._validate({ item: this.item });
            }
        };
        Text.prototype._changed = function (ev, index) {
            var _this = this;
            if (this.isNumber && this.isPositive
                && this.item != null && this.item !== "" && this.item.indexOf("-") >= 0) {
                this.item = this.item.replace("-", "");
            }
            if (this.changing) {
                this.changing({
                    event: ev,
                    item: this.item,
                });
            }
            this.taskQueue.queueMicroTask(function () {
                if (_this.change) {
                    _this.change();
                }
            });
            return true;
        };
        Text.prototype.defaultValidate = function (args) {
            if (this.required) {
                return args.item != null && args.item != "" && args.item.length == this.minlength;
            }
            else {
                return ((args.item == null || args.item == "") || (args.item.length == this.minlength));
            }
        };
        Text.prototype.keyupFunc = function (e) {
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
                (e.keyCode >= 35 && e.keyCode <= 40)) {
                return;
            }
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
            this.formatPhone();
        };
        Text.prototype.onblurFunc = function (e) {
            this.isValid = this._validate({ item: this.item });
        };
        Text.prototype.formatPhone = function () {
            if (this.item) {
                var val = this.item.replace(/\D/g, '');
                var newVal = '';
                if (val.length > 4) {
                    this.item = val;
                }
                if ((val.length > 3) && (val.length < 7)) {
                    newVal += val.substr(0, 3) + '-';
                    val = val.substr(3);
                }
                if (val.length > 6) {
                    newVal += val.substr(0, 3) + '-';
                    newVal += val.substr(3, 3) + '-';
                    val = val.substr(6);
                }
                newVal += val;
                this.item = newVal.substring(0, 12);
            }
        };
        Text.prototype.detached = function () {
            element_util_1.default.detached(this.common, this.formName, this.required, this._clear, this._myValidator);
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], Text.prototype, "item", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], Text.prototype, "isNumber", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], Text.prototype, "isPositive", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], Text.prototype, "isLong", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Text.prototype, "disabled", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "label", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "pre", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "instructions", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "placeholder", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "warningMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Text.prototype, "isWarning", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Text.prototype, "required", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "errorMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "invalidMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Text.prototype, "showError", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Text.prototype, "isValid", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Text.prototype, "isOverrideInvalid", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "maxlength", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Number)
        ], Text.prototype, "minlength", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], Text.prototype, "formName", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], Text.prototype, "changing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], Text.prototype, "change", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], Text.prototype, "validate", void 0);
        Text = __decorate([
            aurelia_framework_1.customElement("ce-phone"),
            aurelia_framework_1.autoinject(),
            __metadata("design:paramtypes", [common_1.Common, aurelia_framework_1.TaskQueue])
        ], Text);
        return Text;
    }());
    exports.Text = Text;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy9waG9uZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFTQTtRQXVDSSxjQUFZLE1BQWMsRUFBRSxTQUFvQjtZQUFoRCxpQkFnQkM7WUFsRGdCLGFBQVEsR0FBWSxLQUFLLENBQUM7WUFDMUIsZUFBVSxHQUFZLElBQUksQ0FBQztZQUMzQixXQUFNLEdBQVksS0FBSyxDQUFDO1lBQ29CLGFBQVEsR0FBWSxLQUFLLENBQUM7WUFJMUIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7WUFDekIsZUFBVSxHQUFXLFNBQVMsQ0FBQztZQUMvQixjQUFTLEdBQVksS0FBSyxDQUFDO1lBQzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7WUFDMUIsYUFBUSxHQUFXLGdCQUFnQixDQUFDO1lBQ3BDLGVBQVUsR0FBVyxzQkFBc0IsQ0FBQztZQUM1QyxjQUFTLEdBQVksSUFBSSxDQUFDO1lBQzFCLFlBQU8sR0FBWSxJQUFJLENBQUM7WUFDeEIsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1lBQ25DLGNBQVMsR0FBVyxJQUFJLENBQUM7WUFDekIsY0FBUyxHQUFXLEVBQUUsQ0FBQztZQUVuRSxhQUFRLEdBQVcsU0FBUyxDQUFDO1lBVXRDLDZCQUF3QixHQUFXLDJCQUEyQixDQUFDO1lBRy9ELGdCQUFXLEdBQVEsSUFBSSxDQUFDO1lBRzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBRTNCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUV0QyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQUMsbUJBQTRCO2dCQUN2QyxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFO29CQUN0QixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUM7aUJBQy9CO1lBQ04sQ0FB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QUM7OzZDQUFnQztRQUMvQjtZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7dURBQTJDO1FBQzFDO1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOzsrQ0FBaUM7UUFDaEM7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7OytDQUErQjtRQUUxRTtZQUFULDRCQUFROzs4Q0FBcUM7UUFDcEM7WUFBVCw0QkFBUTtzQ0FBa0IsUUFBUTs4Q0FBQztRQUMxQjtZQUFULDRCQUFRO3NDQUFnQixRQUFROzRDQUFDO1FBQ3hCO1lBQVQsNEJBQVE7c0NBQWtCLFFBQVE7OENBQUM7UUEzQjNCLElBQUk7WUFGaEIsaUNBQWEsQ0FBQyxVQUFVLENBQUM7WUFDekIsOEJBQVUsRUFBRTs2Q0F3Q1csZUFBTSxFQUFhLDZCQUFTO1dBdkN2QyxJQUFJLENBNEloQjtRQUFELFdBQUM7S0E1SUQsQUE0SUMsSUFBQTtJQTVJWSxvQkFBSSIsImZpbGUiOiJyZXNvdXJjZXMvZWxlbWVudHMvcGhvbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0LCBiaW5kYWJsZSwgYmluZGluZ01vZGUsIGN1c3RvbUVsZW1lbnQsIFRhc2tRdWV1ZX0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyBDb21tb24gfSBmcm9tIFwiLi4vY29tbW9uXCI7XHJcbmltcG9ydCBFbGVtZW50VXRpbCBmcm9tIFwiLi9jb21tb24vZWxlbWVudC11dGlsXCI7XHJcbi8qXHJcbiogVGhpcyBpcyBhIFBob25lIGlucHV0LlxyXG4qL1xyXG5AY3VzdG9tRWxlbWVudChcImNlLXBob25lXCIpXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIFRleHQge1xyXG4gICAgcHVibGljIGNvbW1vbjogQ29tbW9uO1xyXG4gICAgcHVibGljIHRhc2tRdWV1ZTogVGFza1F1ZXVlO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpdGVtOiBhbnk7XHJcbiAgICBAYmluZGFibGUgcHVibGljIGlzTnVtYmVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgcHVibGljIGlzUG9zaXRpdmU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyBpc0xvbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgcHJlOiBzdHJpbmc7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaW5zdHJ1Y3Rpb25zOiBzdHJpbmc7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgd2FybmluZ01zZzogc3RyaW5nID0gXCJXYXJuaW5nXCI7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaXNXYXJuaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBlcnJvck1zZzogc3RyaW5nID0gXCJWYWx1ZSByZXF1aXJlZFwiO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGludmFsaWRNc2c6IHN0cmluZyA9IFwiSW52YWxpZCBQaG9uZSBmb3JtYXRcIjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBzaG93RXJyb3I6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGlzVmFsaWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGlzT3ZlcnJpZGVJbnZhbGlkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgbWF4bGVuZ3RoOiBzdHJpbmcgPSBcIjEyXCI7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgbWlubGVuZ3RoOiBudW1iZXIgPSAxMjtcclxuXHJcbiAgICBAYmluZGFibGUgcHVibGljIGZvcm1OYW1lOiBzdHJpbmcgPSBcImRlZmF1bHRcIjtcclxuICAgIEBiaW5kYWJsZSBwdWJsaWMgY2hhbmdpbmc6IEZ1bmN0aW9uO1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyBjaGFuZ2U6IEZ1bmN0aW9uOyAvLyBjYWxsIHZpYSBjaGFuZ2UuY2FsbD1cImZ1bmN0aW9uTmFtZVwiXHJcbiAgICBAYmluZGFibGUgcHVibGljIHZhbGlkYXRlOiBGdW5jdGlvbjtcclxuXHJcbiAgICBwcml2YXRlIF9pbnB1dDogRWxlbWVudDtcclxuXHJcbiAgICBwcml2YXRlIF9lbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgX3ZhbGlkYXRlOiBGdW5jdGlvbjtcclxuICAgIHByaXZhdGUgX2Zvcm1Hcm91cDogYW55OyAvLyBlbGVtZW50IHJlZlxyXG4gICAgcHJpdmF0ZSBfcHJvZ3JhbWF0aWNFcnJvck1lc3NhZ2U6IHN0cmluZyA9IFwiRXJyb3IgV2hlbiBCaW5kaW5nIElucHV0LlwiO1xyXG4gICAgcHJpdmF0ZSBfY2xlYXI6IEZ1bmN0aW9uOyAvLyBzZXQgaW4gaW5oZXJpdG9yXHJcbiAgICBwcml2YXRlIF9teVZhbGlkYXRvcjogRnVuY3Rpb247IC8vIHNldCBpbiBpbmhlcml0b3JcclxuICAgIHByaXZhdGUgX2VtcHR5VmFsdWU6IGFueSA9IG51bGw7ICAvLyB3aWxsIGJlIG51bGwgaWYgb2JqZWN0cywgXCJcIiBpZiBzdHJpbmdcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb21tb246IENvbW1vbiwgdGFza1F1ZXVlOiBUYXNrUXVldWUpIHtcclxuICAgICAgICB0aGlzLmNvbW1vbiA9IGNvbW1vbjtcclxuICAgICAgICB0aGlzLnRhc2tRdWV1ZSA9IHRhc2tRdWV1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdGUgPSB0aGlzLmRlZmF1bHRWYWxpZGF0ZTtcclxuICAgICAgICAvLyBjbGVhciBpcyBjYWxsZWQgYnkgaHRlXHJcbiAgICAgICAgdGhpcy5fY2xlYXIgPSAob25seUNsZWFyVmFsaWRhdGlvbjogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoIW9ubHlDbGVhclZhbGlkYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IHRoaXMuX2VtcHR5VmFsdWU7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9teVZhbGlkYXRvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlcXVpcmVkICYmIEVsZW1lbnRVdGlsLmlzVmlzaWJsZSh0aGlzLl9mb3JtR3JvdXApKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSAgdGhpcy5fdmFsaWRhdGUoeyBpdGVtOiB0aGlzLml0ZW0gfSk7IH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQ7IH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGUpIHsgdGhpcy5fdmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlOyB9XHJcbiAgICAgICAgRWxlbWVudFV0aWwuYXR0YWNoZWQodGhpcy5jb21tb24sIHRoaXMuZm9ybU5hbWUsIHRoaXMucmVxdWlyZWQsIHRoaXMuX2NsZWFyLCB0aGlzLl9teVZhbGlkYXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcyBpcyBmaXJlZCBiZWZvcmUgdGhlIGl0ZW0gY2hhbmdlcyxcclxuICAgIC8vIGFuZCBpZiB0aGUgaXRlbSBpcyBjaGFuZ2VkIGV4dGVybmFsbHkgb3IgaW50ZXJuYWxseS5cclxuICAgIHB1YmxpYyBpdGVtQ2hhbmdlZChuZXdWYWx1ZTogYW55LCBvbGRWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgRWxlbWVudFV0aWwuaXNWaXNpYmxlKHRoaXMuX2Zvcm1Hcm91cCkgJiYgbmV3VmFsdWUgIT09IG9sZFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRoaXMuX3ZhbGlkYXRlKHsgaXRlbTogdGhpcy5pdGVtIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzIGlzIGZpcmVkIEFGVEVSIHRoZSBpdGVtIGNoYW5nZXMsXHJcbiAgICAvLyBhbmQgb25seSBpZiB0aGUgaXRlbSBjaGFuZ2VzIGZyb20gVEhJUyBjb250cm9sLCBub3QgZnJvbSBleHRlcm5hbCBzb3VyY2VcclxuICAgIHB1YmxpYyBfY2hhbmdlZChldiwgaW5kZXgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc051bWJlciAmJiB0aGlzLmlzUG9zaXRpdmVcclxuICAgICAgICAgICAgJiYgdGhpcy5pdGVtICE9IG51bGwgJiYgdGhpcy5pdGVtICE9PSBcIlwiICYmIHRoaXMuaXRlbS5pbmRleE9mKFwiLVwiKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbSA9IHRoaXMuaXRlbS5yZXBsYWNlKFwiLVwiLCBcIlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNoYW5naW5nKSB7IHRoaXMuY2hhbmdpbmcoe1xyXG4gICAgICAgICAgICBldmVudDogZXYsXHJcbiAgICAgICAgICAgIGl0ZW06IHRoaXMuaXRlbSxcclxuICAgICAgICB9KTsgfVxyXG4gICAgICAgIHRoaXMudGFza1F1ZXVlLnF1ZXVlTWljcm9UYXNrKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hhbmdlKSB7IHRoaXMuY2hhbmdlKCk7IH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVmYXVsdFZhbGlkYXRlKGFyZ3MpOiBib29sZWFuIHtcclxuICAgICAgICAvLyB3ZSBhcmUgb25seSB2YWxpZGF0aW5nIHRoYXQgdGhlcmUgaXMgYW4gaXRlbSwgYW5kIGl0IGlzIGxvbmdlciB0aGFuIFwiXCJcclxuICAgICAgICBpZih0aGlzLnJlcXVpcmVkKXtcclxuICAgICAgICAgICAgcmV0dXJuIGFyZ3MuaXRlbSAhPSBudWxsICYmIGFyZ3MuaXRlbSAhPSBcIlwiICYmIGFyZ3MuaXRlbS5sZW5ndGggPT0gdGhpcy5taW5sZW5ndGg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICgoYXJncy5pdGVtID09IG51bGwgfHwgYXJncy5pdGVtID09IFwiXCIpIHx8IChhcmdzLml0ZW0ubGVuZ3RoID09IHRoaXMubWlubGVuZ3RoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAga2V5dXBGdW5jKGUpIHtcclxuICAgICAgICAvLyBBbGxvdzogYmFja3NwYWNlLCBkZWxldGUsIHRhYiwgZXNjYXBlLCBlbnRlciBhbmQgLlxyXG4gICAgICAgIGlmICgkLmluQXJyYXkoZS5rZXlDb2RlLCBbNDYsIDgsIDksIDI3LCAxMywgMTEwLCAxOTBdKSAhPT0gLTEgfHxcclxuICAgICAgICAgICAgIC8vIEFsbG93OiBDdHJsK0EsIENvbW1hbmQrQVxyXG4gICAgICAgICAgICAoZS5rZXlDb2RlID09PSA2NSAmJiAoZS5jdHJsS2V5ID09PSB0cnVlIHx8IGUubWV0YUtleSA9PT0gdHJ1ZSkpIHx8XHJcbiAgICAgICAgICAgICAvLyBBbGxvdzogaG9tZSwgZW5kLCBsZWZ0LCByaWdodCwgZG93biwgdXBcclxuICAgICAgICAgICAgKGUua2V5Q29kZSA+PSAzNSAmJiBlLmtleUNvZGUgPD0gNDApKSB7XHJcbiAgICAgICAgICAgICAgICAgLy8gbGV0IGl0IGhhcHBlbiwgZG9uJ3QgZG8gYW55dGhpbmdcclxuICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEVuc3VyZSB0aGF0IGl0IGlzIGEgbnVtYmVyIGFuZCBzdG9wIHRoZSBrZXlwcmVzc1xyXG4gICAgICAgIGlmICgoZS5zaGlmdEtleSB8fCAoZS5rZXlDb2RlIDwgNDggfHwgZS5rZXlDb2RlID4gNTcpKSAmJiAoZS5rZXlDb2RlIDwgOTYgfHwgZS5rZXlDb2RlID4gMTA1KSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vRm9ybWF0IFBob25lIE51bWJlclxyXG4gICAgICAgIHRoaXMuZm9ybWF0UGhvbmUoKTtcclxuICAgIH1cclxuICAgIG9uYmx1ckZ1bmMoZSkge1xyXG4gICAgICAgIHRoaXMuaXNWYWxpZCA9IHRoaXMuX3ZhbGlkYXRlKHsgaXRlbTogdGhpcy5pdGVtIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZvcm1hdFBob25lKCkge1xyXG4gICAgICAgIGlmKHRoaXMuaXRlbSl7XHJcbiAgICAgICAgICAgIGxldCB2YWw6IHN0cmluZyA9IHRoaXMuaXRlbS5yZXBsYWNlKC9cXEQvZywgJycpO1xyXG4gICAgICAgICAgICBsZXQgbmV3VmFsOiBzdHJpbmcgPSAnJztcclxuICAgICAgICAgICAgaWYodmFsLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtID0gdmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCh2YWwubGVuZ3RoID4gMykgJiYgKHZhbC5sZW5ndGggPCA3KSkge1xyXG4gICAgICAgICAgICBuZXdWYWwgKz0gdmFsLnN1YnN0cigwLCAzKSArICctJztcclxuICAgICAgICAgICAgdmFsID0gdmFsLnN1YnN0cigzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodmFsLmxlbmd0aCA+IDYpIHtcclxuICAgICAgICAgICAgbmV3VmFsICs9IHZhbC5zdWJzdHIoMCwgMykgKyAnLSc7XHJcbiAgICAgICAgICAgIG5ld1ZhbCArPSB2YWwuc3Vic3RyKDMsIDMpICsgJy0nO1xyXG4gICAgICAgICAgICB2YWwgPSB2YWwuc3Vic3RyKDYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld1ZhbCArPSB2YWw7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbSA9IG5ld1ZhbC5zdWJzdHJpbmcoMCwgMTIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBkZXRhY2hlZCgpIHtcclxuICAgICAgICBFbGVtZW50VXRpbC5kZXRhY2hlZCh0aGlzLmNvbW1vbiwgdGhpcy5mb3JtTmFtZSwgdGhpcy5yZXF1aXJlZCwgdGhpcy5fY2xlYXIsIHRoaXMuX215VmFsaWRhdG9yKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/radiogroup',["require", "exports", "aurelia-framework", "../common", "./common/element-util", "lodash"], function (require, exports, aurelia_framework_1, common_1, element_util_1, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RadioGroup = (function () {
        function RadioGroup(common, taskQueue) {
            var _this = this;
            this.type = "radiolist";
            this.disabled = false;
            this.placeholder = "";
            this.warningMsg = "Warning";
            this.isWarning = false;
            this.required = false;
            this.errorMsg = "Value required";
            this.isValid = true;
            this.formName = "default";
            this.isRadio = false;
            this.isOverrideInvalid = false;
            this._isStackedClass = false;
            this._isStackedLongText = false;
            this._item = null;
            this._areObjects = false;
            this._emptyValue = null;
            this.common = common;
            this.taskQueue = taskQueue;
            this._id = this.common.getID();
            this._validate = this.defaultValidate;
            this._clear = function (onlyClearValidation) {
                _this.isValid = true;
                if (!onlyClearValidation) {
                    _this._item = _this._emptyValue;
                    _this.item = _this._emptyValue;
                    _this._activeMap = element_util_1.default.activeMap(_this.items, _this._item);
                    _this.updateSelection();
                }
            };
            this._myValidator = function () {
                if (_this.required && element_util_1.default.isVisible(_this._formGroup)) {
                    _this.isValid = _this._validate({ item: _this.item });
                }
                return _this.isValid;
            };
        }
        RadioGroup.prototype.attached = function () {
            this.isValid = true;
            if (this.validate) {
                this._validate = this.validate;
            }
            element_util_1.default.attached(this.common, this.formName, this.required, this._clear, this._myValidator);
            if (this.item != null) {
                this.itemChanged(this.item, null);
            }
        };
        RadioGroup.prototype.itemsChanged = function (newValue, oldValue) {
            this._areObjects = element_util_1.default.areObjects(this.items);
            if (newValue != null && this.item != null) {
                this._activeMap = element_util_1.default.activeMap(this.items, this._item);
                this.updateSelection();
            }
        };
        RadioGroup.prototype.itemChanged = function (newValue, oldValue) {
            if (!this.items) {
                return;
            }
            var wasChanged = false;
            if (!this._areObjects) {
                if (this._item !== newValue) {
                    this._item = newValue;
                    wasChanged = true;
                }
            }
            else if (this._areObjects) {
                if (newValue == null || newValue === "") {
                    if (this._item != null) {
                        this._item = null;
                        wasChanged = true;
                    }
                }
                else {
                    var selected = null;
                    if (newValue.constructor === String || newValue.constructor === Number) {
                        selected = this.findItemByAttribute(newValue, this.valueAttribute);
                        if (!_.isEqual(selected, this._item)) {
                            this._item = selected;
                            wasChanged = true;
                        }
                    }
                    else {
                        if (!_.isEqual(newValue, this._item)) {
                            this._item = newValue;
                            wasChanged = true;
                        }
                    }
                }
            }
            if (wasChanged) {
                this._activeMap = element_util_1.default.activeMap(this.items, this._item);
                this.updateSelection();
            }
            if (this.required && element_util_1.default.isVisible(this._formGroup)) {
                this.isValid = this._validate({ item: this.item });
            }
        };
        RadioGroup.prototype.updateSelection = function () {
            var _this = this;
            this.taskQueue.queueTask(function () {
                if (_this._formGroup) {
                    if (_this.type === "dropdown") {
                        var elems = Array.from(_this._formGroup.getElementsByTagName("option"));
                        element_util_1.default.setOptionFromActiveMap(elems, _this._activeMap);
                    }
                    else {
                        element_util_1.default.removeAllActiveChildren(_this._formGroup);
                        var elems = Array.from(_this._formGroup.getElementsByClassName("btn"));
                        element_util_1.default.setActiveFromActiveMap(elems, _this._activeMap);
                    }
                }
            });
        };
        RadioGroup.prototype._itemChanged = function () {
            var wasChanged = false;
            if (!this._areObjects) {
                if (this.item !== this._item) {
                    this.item = this._item;
                    wasChanged = true;
                }
            }
            if (this._areObjects) {
                if (this.valueAttribute) {
                    if (this.item !== this._item[this.valueAttribute]) {
                        this.item = this._item[this.valueAttribute];
                        wasChanged = true;
                    }
                }
                if (!this.valueAttribute) {
                    if (this.item !== this._item) {
                        this.item = this._item;
                        wasChanged = true;
                    }
                }
            }
            if (wasChanged) {
                this._activeMap = element_util_1.default.activeMap(this.items, this._item);
                this.updateSelection();
            }
        };
        RadioGroup.prototype.defaultValidate = function (args) {
            var valid = args.item !== "" && args.item != null;
            return valid;
        };
        RadioGroup.prototype.findItemByAttribute = function (attrValue, prop) {
            var selected = null;
            if (attrValue.constructor !== String
                && attrValue.constructor !== Number) {
                attrValue = attrValue[prop];
            }
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i][prop] === attrValue && selected == null) {
                    selected = this.items[i];
                }
            }
            return selected;
        };
        RadioGroup.prototype._changed = function (ev, index) {
            var _this = this;
            this._itemChanged();
            var args = {
                event: ev,
                item: this.item,
                index: index
            };
            if (this.changing) {
                this.changing(args);
            }
            this.taskQueue.queueMicroTask(function () {
                if (_this.change) {
                    _this.change();
                }
            });
            element_util_1.default.removeAllActiveChildren(this._formGroup);
            ev.target.parentElement.classList.add("active");
            return true;
        };
        RadioGroup.prototype.detached = function () {
            element_util_1.default.detached(this.common, this.formName, this.required, this._clear, this._myValidator);
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], RadioGroup.prototype, "type", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], RadioGroup.prototype, "item", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], RadioGroup.prototype, "items", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], RadioGroup.prototype, "displayAttribute", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], RadioGroup.prototype, "valueAttribute", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], RadioGroup.prototype, "disabled", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], RadioGroup.prototype, "label", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], RadioGroup.prototype, "pre", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], RadioGroup.prototype, "instructions", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], RadioGroup.prototype, "placeholder", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], RadioGroup.prototype, "warningMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], RadioGroup.prototype, "isWarning", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], RadioGroup.prototype, "required", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], RadioGroup.prototype, "errorMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], RadioGroup.prototype, "isValid", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], RadioGroup.prototype, "formName", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], RadioGroup.prototype, "isRadio", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], RadioGroup.prototype, "changing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], RadioGroup.prototype, "change", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], RadioGroup.prototype, "validate", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], RadioGroup.prototype, "isOverrideInvalid", void 0);
        RadioGroup = __decorate([
            aurelia_framework_1.customElement("ce-radiogroup"),
            aurelia_framework_1.autoinject(),
            __metadata("design:paramtypes", [common_1.Common, aurelia_framework_1.TaskQueue])
        ], RadioGroup);
        return RadioGroup;
    }());
    exports.RadioGroup = RadioGroup;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy9yYWRpb2dyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQVVBO1FBNENJLG9CQUFZLE1BQWMsRUFBRSxTQUFvQjtZQUFoRCxpQkFzQkM7WUE5RDRELFNBQUksR0FBVyxXQUFXLENBQUM7WUFPM0IsYUFBUSxHQUFZLEtBQUssQ0FBQztZQUkxQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztZQUN6QixlQUFVLEdBQVcsU0FBUyxDQUFDO1lBQy9CLGNBQVMsR0FBWSxLQUFLLENBQUM7WUFDM0IsYUFBUSxHQUFZLEtBQUssQ0FBQztZQUMxQixhQUFRLEdBQVcsZ0JBQWdCLENBQUM7WUFDcEMsWUFBTyxHQUFZLElBQUksQ0FBQztZQUVwRSxhQUFRLEdBQVcsU0FBUyxDQUFDO1lBQzdCLFlBQU8sR0FBWSxLQUFLLENBQUM7WUFJbUIsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1lBS3hGLG9CQUFlLEdBQVksS0FBSyxDQUFDO1lBQ2pDLHVCQUFrQixHQUFZLEtBQUssQ0FBQztZQUVwQyxVQUFLLEdBQVEsSUFBSSxDQUFDO1lBQ2xCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1lBTTdCLGdCQUFXLEdBQVEsSUFBSSxDQUFDO1lBRzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUUvQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7WUFFdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFDLG1CQUE0QjtnQkFDdkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtvQkFDdEIsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDO29CQUM5QixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUM7b0JBQzdCLEtBQUksQ0FBQyxVQUFVLEdBQUcsc0JBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2hFLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztpQkFDMUI7WUFDTCxDQUFDLENBQUE7WUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHO2dCQUNoQixJQUFJLEtBQUksQ0FBQyxRQUFRLElBQUksc0JBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUN6RCxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7aUJBQ3REO2dCQUNELE9BQU8sS0FBSSxDQUFDLE9BQU8sQ0FBQztZQUN4QixDQUFDLENBQUM7UUFDTixDQUFDO1FBRU0sNkJBQVEsR0FBZjtZQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7YUFBRTtZQUN0RCxzQkFBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUVoRyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDckM7UUFDTCxDQUFDO1FBRU0saUNBQVksR0FBbkIsVUFBb0IsUUFBYSxFQUFFLFFBQWE7WUFDNUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxzQkFBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFRdEQsSUFBSSxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUV2QyxJQUFJLENBQUMsVUFBVSxHQUFHLHNCQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDMUI7UUFDTCxDQUFDO1FBSU0sZ0NBQVcsR0FBbEIsVUFBbUIsUUFBYSxFQUFFLFFBQWE7WUFFM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBRWIsT0FBTzthQUNWO1lBRUQsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNuQixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFO29CQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztvQkFDdEIsVUFBVSxHQUFHLElBQUksQ0FBQztpQkFDckI7YUFDSjtpQkFFSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3ZCLElBQUksUUFBUSxJQUFJLElBQUksSUFBSSxRQUFRLEtBQUssRUFBRSxFQUFFO29CQUNyQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO3dCQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzt3QkFDbEIsVUFBVSxHQUFHLElBQUksQ0FBQztxQkFDckI7aUJBQ0o7cUJBQ0k7b0JBRUQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUVwQixJQUFJLFFBQVEsQ0FBQyxXQUFXLEtBQUssTUFBTSxJQUFJLFFBQVEsQ0FBQyxXQUFXLEtBQUssTUFBTSxFQUFFO3dCQUVwRSxRQUFRLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7d0JBQ25FLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7NEJBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDOzRCQUN0QixVQUFVLEdBQUcsSUFBSSxDQUFDO3lCQUNyQjtxQkFDSjt5QkFFSTt3QkFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFOzRCQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQzs0QkFDdEIsVUFBVSxHQUFHLElBQUksQ0FBQzt5QkFDckI7cUJBQ0o7aUJBRUo7YUFDSjtZQUVELElBQUksVUFBVSxFQUFFO2dCQUNaLElBQUksQ0FBQyxVQUFVLEdBQUcsc0JBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUMxQjtZQUVELElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxzQkFBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3pELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUN0RDtRQUNMLENBQUM7UUFFTSxvQ0FBZSxHQUF0QjtZQUFBLGlCQWNDO1lBYkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7Z0JBQ3JCLElBQUksS0FBSSxDQUFDLFVBQVUsRUFBRTtvQkFDakIsSUFBSSxLQUFJLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTt3QkFDMUIsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZFLHNCQUFXLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztxQkFDOUQ7eUJBQ0k7d0JBQ0Qsc0JBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQ3JELElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUN0RSxzQkFBVyxDQUFDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7cUJBQzlEO2lCQUNKO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRU0saUNBQVksR0FBbkI7WUFDSSxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFHdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ25CLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7b0JBQ3ZCLFVBQVUsR0FBRyxJQUFJLENBQUM7aUJBQ3JCO2FBQ0o7WUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBRWxCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtvQkFDckIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO3dCQUMvQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUM1QyxVQUFVLEdBQUcsSUFBSSxDQUFDO3FCQUNyQjtpQkFDSjtnQkFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtvQkFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7d0JBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzt3QkFDdkIsVUFBVSxHQUFHLElBQUksQ0FBQztxQkFDckI7aUJBQ0o7YUFDSjtZQUNELElBQUksVUFBVSxFQUFFO2dCQUNaLElBQUksQ0FBQyxVQUFVLEdBQUcsc0JBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUMxQjtRQUNMLENBQUM7UUFFTSxvQ0FBZSxHQUF0QixVQUF1QixJQUFJO1lBR3ZCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO1lBQ2xELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFHTSx3Q0FBbUIsR0FBMUIsVUFBMkIsU0FBYyxFQUFFLElBQVk7WUFDbkQsSUFBSSxRQUFRLEdBQVEsSUFBSSxDQUFDO1lBRXpCLElBQUksU0FBUyxDQUFDLFdBQVcsS0FBSyxNQUFNO21CQUM3QixTQUFTLENBQUMsV0FBVyxLQUFLLE1BQU0sRUFBRTtnQkFDckMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMvQjtZQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO29CQUN2RCxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDNUI7YUFDSjtZQUNELE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7UUFJTSw2QkFBUSxHQUFmLFVBQWdCLEVBQWMsRUFBRSxLQUFLO1lBQXJDLGlCQWlCQztZQWhCRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFFcEIsSUFBSSxJQUFJLEdBQUc7Z0JBQ1AsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLEtBQUssRUFBRSxLQUFLO2FBQ2YsQ0FBQztZQUNGLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQUU7WUFHM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUM7Z0JBQzFCLElBQUksS0FBSSxDQUFDLE1BQU0sRUFBRTtvQkFBRSxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQUU7WUFDdkMsQ0FBQyxDQUFDLENBQUM7WUFDSCxzQkFBVyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN2QyxFQUFFLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9ELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFJTSw2QkFBUSxHQUFmO1lBQ0ksc0JBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEcsQ0FBQztRQXRQcUQ7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7O2dEQUFtQztRQUVsQztZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7Z0RBQWtCO1FBQ2pCO1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOztpREFBbUI7UUFDbEI7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7OzREQUFpQztRQUNoQztZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7MERBQStCO1FBRTlCO1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOztvREFBa0M7UUFDakM7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7O2lEQUFzQjtRQUNyQjtZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7K0NBQW9CO1FBQ25CO1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOzt3REFBNkI7UUFDNUI7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7O3VEQUFpQztRQUNoQztZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7c0RBQXVDO1FBQ3RDO1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOztxREFBbUM7UUFDbEM7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7O29EQUFrQztRQUNqQztZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7b0RBQTRDO1FBQzNDO1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOzttREFBZ0M7UUFFM0U7WUFBVCw0QkFBUTs7b0RBQXFDO1FBQ3BDO1lBQVQsNEJBQVE7O21EQUFpQztRQUNoQztZQUFULDRCQUFRO3NDQUFrQixRQUFRO29EQUFDO1FBQzFCO1lBQVQsNEJBQVE7c0NBQWdCLFFBQVE7a0RBQUM7UUFDeEI7WUFBVCw0QkFBUTtzQ0FBa0IsUUFBUTtvREFBQztRQUNrQjtZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7NkRBQTJDO1FBM0J2RixVQUFVO1lBRnRCLGlDQUFhLENBQUMsZUFBZSxDQUFDO1lBQzlCLDhCQUFVLEVBQUU7NkNBNkNXLGVBQU0sRUFBYSw2QkFBUztXQTVDdkMsVUFBVSxDQTRQdEI7UUFBRCxpQkFBQztLQTVQRCxBQTRQQyxJQUFBO0lBNVBZLGdDQUFVIiwiZmlsZSI6InJlc291cmNlcy9lbGVtZW50cy9yYWRpb2dyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCwgYmluZGFibGUsIGJpbmRpbmdNb2RlLCBjdXN0b21FbGVtZW50LCBUYXNrUXVldWUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQ29tbW9uIH0gZnJvbSBcIi4uL2NvbW1vblwiO1xyXG5pbXBvcnQgRWxlbWVudFV0aWwgZnJvbSBcIi4vY29tbW9uL2VsZW1lbnQtdXRpbFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIGEgcmFkaW8gbGlzdFxyXG4qL1xyXG5AY3VzdG9tRWxlbWVudChcImNlLXJhZGlvZ3JvdXBcIilcclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgUmFkaW9Hcm91cCB7XHJcbiAgICBwdWJsaWMgY29tbW9uOiBDb21tb247XHJcbiAgICBwdWJsaWMgdGFza1F1ZXVlOiBUYXNrUXVldWU7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHR5cGU6IHN0cmluZyA9IFwicmFkaW9saXN0XCI7XHJcblxyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGl0ZW06IGFueTtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpdGVtczogYW55O1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGRpc3BsYXlBdHRyaWJ1dGU6IHN0cmluZztcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyB2YWx1ZUF0dHJpYnV0ZTogc3RyaW5nOyAvLyBzZXQgdGhpcyBpZiB0aGUgdXNlciB3YW50cyBhIHN0cmluZ1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgcHJlOiBzdHJpbmc7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaW5zdHJ1Y3Rpb25zOiBzdHJpbmc7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgd2FybmluZ01zZzogc3RyaW5nID0gXCJXYXJuaW5nXCI7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaXNXYXJuaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBlcnJvck1zZzogc3RyaW5nID0gXCJWYWx1ZSByZXF1aXJlZFwiO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGlzVmFsaWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBiaW5kYWJsZSBwdWJsaWMgZm9ybU5hbWU6IHN0cmluZyA9IFwiZGVmYXVsdFwiO1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyBpc1JhZGlvOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgcHVibGljIGNoYW5naW5nOiBGdW5jdGlvbjtcclxuICAgIEBiaW5kYWJsZSBwdWJsaWMgY2hhbmdlOiBGdW5jdGlvbjsgLy8gY2FsbCB2aWEgY2hhbmdlLmNhbGw9XCJmdW5jdGlvbk5hbWVcIlxyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyB2YWxpZGF0ZTogRnVuY3Rpb247XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaXNPdmVycmlkZUludmFsaWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9pbnB1dDogRWxlbWVudDtcclxuXHJcbiAgICBwcml2YXRlIF9pZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfaXNTdGFja2VkQ2xhc3M6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2lzU3RhY2tlZExvbmdUZXh0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9hY3RpdmVNYXA6IGJvb2xlYW5bXTtcclxuICAgIHByaXZhdGUgX2l0ZW06IGFueSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9hcmVPYmplY3RzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfdmFsaWRhdGU6IEZ1bmN0aW9uO1xyXG4gICAgcHJpdmF0ZSBfZm9ybUdyb3VwOiBIVE1MRWxlbWVudDsgLy8gZWxlbWVudCByZWZcclxuICAgIHByaXZhdGUgX2NsZWFyOiBGdW5jdGlvbjsgLy8gc2V0IGluIGluaGVyaXRvclxyXG4gICAgcHJpdmF0ZSBfbXlWYWxpZGF0b3I6IEZ1bmN0aW9uOyAvLyBzZXQgaW4gaW5oZXJpdG9yXHJcbiAgICBwcml2YXRlIF9lbXB0eVZhbHVlOiBhbnkgPSBudWxsOyAgLy8gd2lsbCBiZSBudWxsIGlmIG9iamVjdHMsIFwiXCIgaWYgc3RyaW5nXHJcblxyXG4gICAgY29uc3RydWN0b3IoY29tbW9uOiBDb21tb24sIHRhc2tRdWV1ZTogVGFza1F1ZXVlKSB7XHJcbiAgICAgICAgdGhpcy5jb21tb24gPSBjb21tb247XHJcbiAgICAgICAgdGhpcy50YXNrUXVldWUgPSB0YXNrUXVldWU7XHJcbiAgICAgICAgdGhpcy5faWQgPSB0aGlzLmNvbW1vbi5nZXRJRCgpO1xyXG5cclxuICAgICAgICB0aGlzLl92YWxpZGF0ZSA9IHRoaXMuZGVmYXVsdFZhbGlkYXRlO1xyXG4gICAgICAgIC8vIGNsZWFyIGlzIGNhbGxlZCBieSBodGVcclxuICAgICAgICB0aGlzLl9jbGVhciA9IChvbmx5Q2xlYXJWYWxpZGF0aW9uOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICghb25seUNsZWFyVmFsaWRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXRlbSA9IHRoaXMuX2VtcHR5VmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLl9lbXB0eVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aXZlTWFwID0gRWxlbWVudFV0aWwuYWN0aXZlTWFwKHRoaXMuaXRlbXMsIHRoaXMuX2l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9teVZhbGlkYXRvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgRWxlbWVudFV0aWwuaXNWaXNpYmxlKHRoaXMuX2Zvcm1Hcm91cCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRoaXMuX3ZhbGlkYXRlKHsgaXRlbTogdGhpcy5pdGVtIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQ7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0ZSkgeyB0aGlzLl92YWxpZGF0ZSA9IHRoaXMudmFsaWRhdGU7IH1cclxuICAgICAgICBFbGVtZW50VXRpbC5hdHRhY2hlZCh0aGlzLmNvbW1vbiwgdGhpcy5mb3JtTmFtZSwgdGhpcy5yZXF1aXJlZCwgdGhpcy5fY2xlYXIsIHRoaXMuX215VmFsaWRhdG9yKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNoYW5nZWQodGhpcy5pdGVtLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGl0ZW1zQ2hhbmdlZChuZXdWYWx1ZTogYW55LCBvbGRWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fYXJlT2JqZWN0cyA9IEVsZW1lbnRVdGlsLmFyZU9iamVjdHModGhpcy5pdGVtcyk7XHJcbiAgICAgICAgLy8gdGhpcy50YXNrUXVldWUucXVldWVUYXNrKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgRWxlbWVudFV0aWwuY2hlY2tNYXhDaGFycyh0aGlzLml0ZW1zLCB0aGlzLl9hcmVPYmplY3RzLCB0aGlzLmRpc3BsYXlBdHRyaWJ1dGUpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIGlmIChuZXdWYWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaXRlbUNoYW5nZWQodGhpcy5pdGVtLCBudWxsKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vIGdldCBjdXJyZW50IG9iamVjdCBmcm9tIHNlbGVjdGVkIGRpc3BsYXkgYXR0cmlidXRlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZiAobmV3VmFsdWUgIT0gbnVsbCAmJiB0aGlzLml0ZW0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyBnZXQgY3VycmVudCBvYmplY3QgZnJvbSBzZWxlY3RlZCBkaXNwbGF5IGF0dHJpYnV0ZTtcclxuICAgICAgICAgICAgdGhpcy5fYWN0aXZlTWFwID0gRWxlbWVudFV0aWwuYWN0aXZlTWFwKHRoaXMuaXRlbXMsIHRoaXMuX2l0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzIGlzIGZpcmVkIGJlZm9yZSB0aGUgaXRlbSBjaGFuZ2VzLFxyXG4gICAgLy8gaWYgdGhlIGl0ZW0gaXMgY2hhbmdlZCBleHRlcm5hbGx5LlxyXG4gICAgcHVibGljIGl0ZW1DaGFuZ2VkKG5ld1ZhbHVlOiBhbnksIG9sZFZhbHVlOiBhbnkpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgICAgIC8vIHdlIGRvbid0IGtub3cgaWYgdGhlIGl0ZW0gaXMgYW4gb2JqZWN0IG9yIG5vdCB5ZXQuLi4uXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB3YXNDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgLy8gaWYgYXJlU3RyaW5nc1xyXG4gICAgICAgIGlmICghdGhpcy5fYXJlT2JqZWN0cykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faXRlbSAhPT0gbmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW0gPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHdhc0NoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmIG9iamVjdHNcclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9hcmVPYmplY3RzKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PSBudWxsIHx8IG5ld1ZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgd2FzQ2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBLZWVwIGluIG1pbmQgdGhhdCB0aGVyZSBtYXkgb3IgbWF5IG5vdCBiZSBhIHZhbHVlQXR0cmlidXRlLCB3ZSBjb3VsZCBiZSBzZWxlY3Rpbmcgb2JqZWN0cyBpbnN0ZWFkIG9mIGEgcHJvcCBvZiBhbiBvYmplY3QuXHJcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIFN0cmluZ3MgYW5kIE51bWJlcnNcclxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5jb25zdHJ1Y3RvciA9PT0gU3RyaW5nIHx8IG5ld1ZhbHVlLmNvbnN0cnVjdG9yID09PSBOdW1iZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIGJ5IHByb3BlcnR5IGJlY2F1c2Ugd2UncmUgc2VsZWN0aW5nIGFuIHByb3Agb3V0IG9mIHRoZSBvYmplY3RcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRoaXMuZmluZEl0ZW1CeUF0dHJpYnV0ZShuZXdWYWx1ZSwgdGhpcy52YWx1ZUF0dHJpYnV0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfLmlzRXF1YWwoc2VsZWN0ZWQsIHRoaXMuX2l0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW0gPSBzZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2FzQ2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIE9iamVjdHMgKGlmIHRoZXJlIGlzIG5vIHZhbHVlQXR0cmlidXRlKVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfLmlzRXF1YWwobmV3VmFsdWUsIHRoaXMuX2l0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW0gPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2FzQ2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHdhc0NoYW5nZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYWN0aXZlTWFwID0gRWxlbWVudFV0aWwuYWN0aXZlTWFwKHRoaXMuaXRlbXMsIHRoaXMuX2l0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgRWxlbWVudFV0aWwuaXNWaXNpYmxlKHRoaXMuX2Zvcm1Hcm91cCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5fdmFsaWRhdGUoeyBpdGVtOiB0aGlzLml0ZW0gfSk7ICAvLyB0b2RvOiB3cm9uZyBwbGFjZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlU2VsZWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMudGFza1F1ZXVlLnF1ZXVlVGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9mb3JtR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT09IFwiZHJvcGRvd25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtcyA9IEFycmF5LmZyb20odGhpcy5fZm9ybUdyb3VwLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwib3B0aW9uXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50VXRpbC5zZXRPcHRpb25Gcm9tQWN0aXZlTWFwKGVsZW1zLCB0aGlzLl9hY3RpdmVNYXApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudFV0aWwucmVtb3ZlQWxsQWN0aXZlQ2hpbGRyZW4odGhpcy5fZm9ybUdyb3VwKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbXMgPSBBcnJheS5mcm9tKHRoaXMuX2Zvcm1Hcm91cC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50VXRpbC5zZXRBY3RpdmVGcm9tQWN0aXZlTWFwKGVsZW1zLCB0aGlzLl9hY3RpdmVNYXApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIF9pdGVtQ2hhbmdlZCgpIHtcclxuICAgICAgICBsZXQgd2FzQ2hhbmdlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBpZiBhcmVTdHJpbmdzXHJcbiAgICAgICAgaWYgKCF0aGlzLl9hcmVPYmplY3RzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW0gIT09IHRoaXMuX2l0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IHRoaXMuX2l0ZW07XHJcbiAgICAgICAgICAgICAgICB3YXNDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiBvYmplY3RzXHJcbiAgICAgICAgaWYgKHRoaXMuX2FyZU9iamVjdHMpIHtcclxuICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSB2YWx1ZUF0dHJpYnV0ZSwgdGhlbiB0aGlzLml0ZW0gbmVlZHMgdG8gYmUgYSBzdHJpbmdcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVBdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW0gIT09IHRoaXMuX2l0ZW1bdGhpcy52YWx1ZUF0dHJpYnV0ZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLl9pdGVtW3RoaXMudmFsdWVBdHRyaWJ1dGVdO1xyXG4gICAgICAgICAgICAgICAgICAgIHdhc0NoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vdCBhIHZhbHVlQXR0cmlidXRlLCB0aGVuIHRoaXMuaXRlbSBuZWVkcyB0byBiZSBhbiBPQkpFQ1RcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnZhbHVlQXR0cmlidXRlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtICE9PSB0aGlzLl9pdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gdGhpcy5faXRlbTtcclxuICAgICAgICAgICAgICAgICAgICB3YXNDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAod2FzQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9hY3RpdmVNYXAgPSBFbGVtZW50VXRpbC5hY3RpdmVNYXAodGhpcy5pdGVtcywgdGhpcy5faXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWZhdWx0VmFsaWRhdGUoYXJncyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIHdlIGFyZSBvbmx5IHZhbGlkYXRpbmcgdGhhdCB0aGVyZSBJUyBhIHZhbHVlXHJcbiAgICAgICAgLy8gcmVtZW1iZXIgdGhpcyBtYXkgYmUgYW4gb2JqZWN0IG9yIGEgc3RyaW5nXHJcbiAgICAgICAgbGV0IHZhbGlkID0gYXJncy5pdGVtICE9PSBcIlwiICYmIGFyZ3MuaXRlbSAhPSBudWxsO1xyXG4gICAgICAgIHJldHVybiB2YWxpZDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGZpbmRJdGVtQnlBdHRyaWJ1dGUoYXR0clZhbHVlOiBhbnksIHByb3A6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZDogYW55ID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGF0dHJWYWx1ZS5jb25zdHJ1Y3RvciAhPT0gU3RyaW5nXHJcbiAgICAgICAgICAgICYmIGF0dHJWYWx1ZS5jb25zdHJ1Y3RvciAhPT0gTnVtYmVyKSB7XHJcbiAgICAgICAgICAgIGF0dHJWYWx1ZSA9IGF0dHJWYWx1ZVtwcm9wXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc1tpXVtwcm9wXSA9PT0gYXR0clZhbHVlICYmIHNlbGVjdGVkID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdGhpcy5pdGVtc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2VsZWN0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcyBpcyBmaXJlZCBiZWZvcmUgaXRlbSBjaGFuZ2VzLlxyXG4gICAgLy8gYW5kIG9ubHkgaWYgdGhlIGl0ZW0gY2hhbmdlcyBmcm9tIFRISVMgY29udHJvbCwgbm90IGZyb20gZXh0ZXJuYWwgc291cmNlXHJcbiAgICBwdWJsaWMgX2NoYW5nZWQoZXY6IE1vdXNlRXZlbnQsIGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5faXRlbUNoYW5nZWQoKTtcclxuXHJcbiAgICAgICAgbGV0IGFyZ3MgPSB7XHJcbiAgICAgICAgICAgIGV2ZW50OiBldixcclxuICAgICAgICAgICAgaXRlbTogdGhpcy5pdGVtLFxyXG4gICAgICAgICAgICBpbmRleDogaW5kZXhcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh0aGlzLmNoYW5naW5nKSB7IHRoaXMuY2hhbmdpbmcoYXJncyk7IH1cclxuICAgICAgICAvLyBUb2RvLCB1c2UgdGhpcyBldmVyeXdoZXJlLlxyXG4gICAgICAgIC8vIHRoaXMgd2lsbCBjYWxsIGNoYW5nZSBhZnRlciB0aGUgdmFsdWVzIG9mIGJpbmRhYmxlcyBhcmUgdXBkYXRlZFxyXG4gICAgICAgIHRoaXMudGFza1F1ZXVlLnF1ZXVlTWljcm9UYXNrKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hhbmdlKSB7IHRoaXMuY2hhbmdlKCk7IH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBFbGVtZW50VXRpbC5yZW1vdmVBbGxBY3RpdmVDaGlsZHJlbih0aGlzLl9mb3JtR3JvdXApO1xyXG4gICAgICAgICg8SFRNTEVsZW1lbnQ+ZXYudGFyZ2V0KS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgZGV0YWNoZWQoKSB7XHJcbiAgICAgICAgRWxlbWVudFV0aWwuZGV0YWNoZWQodGhpcy5jb21tb24sIHRoaXMuZm9ybU5hbWUsIHRoaXMucmVxdWlyZWQsIHRoaXMuX2NsZWFyLCB0aGlzLl9teVZhbGlkYXRvcik7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/radiolist',["require", "exports", "aurelia-framework", "../common", "./common/element-util", "lodash"], function (require, exports, aurelia_framework_1, common_1, element_util_1, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RadioList = (function () {
        function RadioList(common, taskQueue) {
            var _this = this;
            this.type = "radiolist";
            this.disabled = false;
            this.placeholder = "";
            this.warningMsg = "Warning";
            this.isWarning = false;
            this.required = false;
            this.errorMsg = "Value required";
            this.isValid = true;
            this.formName = "default";
            this.isRadio = false;
            this.isOverrideInvalid = false;
            this._isStackedClass = false;
            this._isStackedLongText = false;
            this._item = null;
            this._areObjects = false;
            this._emptyValue = null;
            this.common = common;
            this.taskQueue = taskQueue;
            this._validate = this.defaultValidate;
            this._clear = function (onlyClearValidation) {
                _this.isValid = true;
                if (!onlyClearValidation) {
                    _this._item = _this._emptyValue;
                    _this.item = _this._emptyValue;
                    _this._activeMap = element_util_1.default.activeMap(_this.items, _this._item);
                    _this.updateSelection();
                }
            };
            this._myValidator = function () {
                if (_this.required && element_util_1.default.isVisible(_this._formGroup)) {
                    _this.isValid = _this._validate({ item: _this.item });
                }
                return _this.isValid;
            };
        }
        RadioList.prototype.attached = function () {
            this.isValid = true;
            if (this.validate) {
                this._validate = this.validate;
            }
            element_util_1.default.attached(this.common, this.formName, this.required, this._clear, this._myValidator);
            if (this.item != null) {
                this.itemChanged(this.item, null);
            }
        };
        RadioList.prototype.itemsChanged = function (newValue, oldValue) {
            this._areObjects = element_util_1.default.areObjects(this.items);
            if (newValue != null && this.item != null) {
                this._activeMap = element_util_1.default.activeMap(this.items, this._item);
                this.updateSelection();
            }
        };
        RadioList.prototype.itemChanged = function (newValue, oldValue) {
            if (!this.items) {
                return;
            }
            var wasChanged = false;
            if (!this._areObjects) {
                if (this._item !== newValue) {
                    this._item = newValue;
                    wasChanged = true;
                }
            }
            else if (this._areObjects) {
                if (newValue == null || newValue === "") {
                    if (this._item != null) {
                        this._item = null;
                        wasChanged = true;
                    }
                }
                else {
                    var selected = null;
                    if (newValue.constructor === String || newValue.constructor === Number) {
                        selected = this.findItemByAttribute(newValue, this.valueAttribute);
                        if (!_.isEqual(selected, this._item)) {
                            this._item = selected;
                            wasChanged = true;
                        }
                    }
                    else {
                        if (!_.isEqual(newValue, this._item)) {
                            this._item = newValue;
                            wasChanged = true;
                        }
                    }
                }
            }
            if (wasChanged) {
                this._activeMap = element_util_1.default.activeMap(this.items, this._item);
                this.updateSelection();
            }
            if (this.required && element_util_1.default.isVisible(this._formGroup)) {
                this.isValid = this._validate({ item: this.item });
            }
        };
        RadioList.prototype.updateSelection = function () {
            var _this = this;
            this.taskQueue.queueTask(function () {
                if (_this._formGroup) {
                    if (_this.type === "dropdown") {
                        var elems = Array.from(_this._formGroup.getElementsByTagName("option"));
                        element_util_1.default.setOptionFromActiveMap(elems, _this._activeMap);
                    }
                    else {
                        element_util_1.default.removeAllActiveChildren(_this._formGroup);
                        var elems = Array.from(_this._formGroup.getElementsByClassName("btn"));
                        element_util_1.default.setActiveFromActiveMap(elems, _this._activeMap);
                    }
                }
            });
        };
        RadioList.prototype._itemChanged = function () {
            var wasChanged = false;
            if (!this._areObjects) {
                if (this.item !== this._item) {
                    this.item = this._item;
                    wasChanged = true;
                }
            }
            if (this._areObjects) {
                if (this.valueAttribute) {
                    if (this.item !== this._item[this.valueAttribute]) {
                        this.item = this._item[this.valueAttribute];
                        wasChanged = true;
                    }
                }
                if (!this.valueAttribute) {
                    if (this.item !== this._item) {
                        this.item = this._item;
                        wasChanged = true;
                    }
                }
            }
            if (wasChanged) {
                this._activeMap = element_util_1.default.activeMap(this.items, this._item);
                this.updateSelection();
            }
        };
        RadioList.prototype.defaultValidate = function (args) {
            var valid = args.item !== "" && args.item != null;
            return valid;
        };
        RadioList.prototype.findItemByAttribute = function (attrValue, prop) {
            var selected = null;
            if (attrValue.constructor !== String
                && attrValue.constructor !== Number) {
                attrValue = attrValue[prop];
            }
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i][prop] === attrValue && selected == null) {
                    selected = this.items[i];
                }
            }
            return selected;
        };
        RadioList.prototype._changed = function (ev, index) {
            var _this = this;
            this._itemChanged();
            var args = {
                event: ev,
                item: this.item,
                index: index
            };
            if (this.changing) {
                this.changing(args);
            }
            this.taskQueue.queueMicroTask(function () {
                if (_this.change) {
                    _this.change();
                }
            });
            element_util_1.default.removeAllActiveChildren(this._formGroup);
            ev.target.parentElement.classList.add("active");
            return true;
        };
        RadioList.prototype.detached = function () {
            element_util_1.default.detached(this.common, this.formName, this.required, this._clear, this._myValidator);
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], RadioList.prototype, "type", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], RadioList.prototype, "item", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], RadioList.prototype, "items", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], RadioList.prototype, "displayAttribute", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], RadioList.prototype, "valueAttribute", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], RadioList.prototype, "disabled", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], RadioList.prototype, "label", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], RadioList.prototype, "pre", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], RadioList.prototype, "instructions", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], RadioList.prototype, "placeholder", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], RadioList.prototype, "warningMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], RadioList.prototype, "isWarning", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], RadioList.prototype, "required", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], RadioList.prototype, "errorMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], RadioList.prototype, "isValid", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], RadioList.prototype, "formName", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], RadioList.prototype, "isRadio", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], RadioList.prototype, "changing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], RadioList.prototype, "change", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], RadioList.prototype, "validate", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], RadioList.prototype, "isOverrideInvalid", void 0);
        RadioList = __decorate([
            aurelia_framework_1.customElement("ce-radiolist"),
            aurelia_framework_1.autoinject(),
            __metadata("design:paramtypes", [common_1.Common, aurelia_framework_1.TaskQueue])
        ], RadioList);
        return RadioList;
    }());
    exports.RadioList = RadioList;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy9yYWRpb2xpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBVUE7UUEyQ0ksbUJBQVksTUFBYyxFQUFFLFNBQW9CO1lBQWhELGlCQXFCQztZQTVENEQsU0FBSSxHQUFXLFdBQVcsQ0FBQztZQU8zQixhQUFRLEdBQVksS0FBSyxDQUFDO1lBSTFCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1lBQ3pCLGVBQVUsR0FBVyxTQUFTLENBQUM7WUFDL0IsY0FBUyxHQUFZLEtBQUssQ0FBQztZQUMzQixhQUFRLEdBQVksS0FBSyxDQUFDO1lBQzFCLGFBQVEsR0FBVyxnQkFBZ0IsQ0FBQztZQUNwQyxZQUFPLEdBQVksSUFBSSxDQUFDO1lBRXBFLGFBQVEsR0FBVyxTQUFTLENBQUM7WUFDN0IsWUFBTyxHQUFZLEtBQUssQ0FBQztZQUltQixzQkFBaUIsR0FBWSxLQUFLLENBQUM7WUFJeEYsb0JBQWUsR0FBWSxLQUFLLENBQUM7WUFDakMsdUJBQWtCLEdBQVksS0FBSyxDQUFDO1lBRXBDLFVBQUssR0FBUSxJQUFJLENBQUM7WUFDbEIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7WUFNN0IsZ0JBQVcsR0FBUSxJQUFJLENBQUM7WUFHNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFFM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBRXRDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBQyxtQkFBNEI7Z0JBQ3ZDLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsbUJBQW1CLEVBQUU7b0JBQ3RCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQztvQkFDOUIsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDO29CQUM3QixLQUFJLENBQUMs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QUFRO2lEQUFDO1FBQ3hCO1lBQVQsNEJBQVE7c0NBQWtCLFFBQVE7bURBQUM7UUFDa0I7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7OzREQUEyQztRQTNCdkYsU0FBUztZQUZyQixpQ0FBYSxDQUFDLGNBQWMsQ0FBQztZQUM3Qiw4QkFBVSxFQUFFOzZDQTRDVyxlQUFNLEVBQWEsNkJBQVM7V0EzQ3ZDLFNBQVMsQ0EwUHJCO1FBQUQsZ0JBQUM7S0ExUEQsQUEwUEMsSUFBQTtJQTFQWSw4QkFBUyIsImZpbGUiOiJyZXNvdXJjZXMvZWxlbWVudHMvcmFkaW9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCwgYmluZGFibGUsIGJpbmRpbmdNb2RlLCBjdXN0b21FbGVtZW50LCBUYXNrUXVldWUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQ29tbW9uIH0gZnJvbSBcIi4uL2NvbW1vblwiO1xyXG5pbXBvcnQgRWxlbWVudFV0aWwgZnJvbSBcIi4vY29tbW9uL2VsZW1lbnQtdXRpbFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIGEgcmFkaW8gbGlzdFxyXG4qL1xyXG5AY3VzdG9tRWxlbWVudChcImNlLXJhZGlvbGlzdFwiKVxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBSYWRpb0xpc3Qge1xyXG4gICAgcHVibGljIGNvbW1vbjogQ29tbW9uO1xyXG4gICAgcHVibGljIHRhc2tRdWV1ZTogVGFza1F1ZXVlO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyB0eXBlOiBzdHJpbmcgPSBcInJhZGlvbGlzdFwiO1xyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpdGVtOiBhbnk7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaXRlbXM6IGFueTtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBkaXNwbGF5QXR0cmlidXRlOiBzdHJpbmc7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgdmFsdWVBdHRyaWJ1dGU6IHN0cmluZzsgLy8gc2V0IHRoaXMgaWYgdGhlIHVzZXIgd2FudHMgYSBzdHJpbmdcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHByZTogc3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGluc3RydWN0aW9uczogc3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHdhcm5pbmdNc2c6IHN0cmluZyA9IFwiV2FybmluZ1wiO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGlzV2FybmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgZXJyb3JNc2c6IHN0cmluZyA9IFwiVmFsdWUgcmVxdWlyZWRcIjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpc1ZhbGlkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBAYmluZGFibGUgcHVibGljIGZvcm1OYW1lOiBzdHJpbmcgPSBcImRlZmF1bHRcIjtcclxuICAgIEBiaW5kYWJsZSBwdWJsaWMgaXNSYWRpbzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyBjaGFuZ2luZzogRnVuY3Rpb247XHJcbiAgICBAYmluZGFibGUgcHVibGljIGNoYW5nZTogRnVuY3Rpb247IC8vIGNhbGwgdmlhIGNoYW5nZS5jYWxsPVwiZnVuY3Rpb25OYW1lXCJcclxuICAgIEBiaW5kYWJsZSBwdWJsaWMgdmFsaWRhdGU6IEZ1bmN0aW9uO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGlzT3ZlcnJpZGVJbnZhbGlkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfaW5wdXQ6IEVsZW1lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNTdGFja2VkQ2xhc3M6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2lzU3RhY2tlZExvbmdUZXh0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9hY3RpdmVNYXA6IGJvb2xlYW5bXTtcclxuICAgIHByaXZhdGUgX2l0ZW06IGFueSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9hcmVPYmplY3RzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfdmFsaWRhdGU6IEZ1bmN0aW9uO1xyXG4gICAgcHJpdmF0ZSBfZm9ybUdyb3VwOiBIVE1MRWxlbWVudDsgLy8gZWxlbWVudCByZWZcclxuICAgIHByaXZhdGUgX2NsZWFyOiBGdW5jdGlvbjsgLy8gc2V0IGluIGluaGVyaXRvclxyXG4gICAgcHJpdmF0ZSBfbXlWYWxpZGF0b3I6IEZ1bmN0aW9uOyAvLyBzZXQgaW4gaW5oZXJpdG9yXHJcbiAgICBwcml2YXRlIF9lbXB0eVZhbHVlOiBhbnkgPSBudWxsOyAgLy8gd2lsbCBiZSBudWxsIGlmIG9iamVjdHMsIFwiXCIgaWYgc3RyaW5nXHJcblxyXG4gICAgY29uc3RydWN0b3IoY29tbW9uOiBDb21tb24sIHRhc2tRdWV1ZTogVGFza1F1ZXVlKSB7XHJcbiAgICAgICAgdGhpcy5jb21tb24gPSBjb21tb247XHJcbiAgICAgICAgdGhpcy50YXNrUXVldWUgPSB0YXNrUXVldWU7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlID0gdGhpcy5kZWZhdWx0VmFsaWRhdGU7XHJcbiAgICAgICAgLy8gY2xlYXIgaXMgY2FsbGVkIGJ5IGh0ZVxyXG4gICAgICAgIHRoaXMuX2NsZWFyID0gKG9ubHlDbGVhclZhbGlkYXRpb246IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKCFvbmx5Q2xlYXJWYWxpZGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pdGVtID0gdGhpcy5fZW1wdHlWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IHRoaXMuX2VtcHR5VmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hY3RpdmVNYXAgPSBFbGVtZW50VXRpbC5hY3RpdmVNYXAodGhpcy5pdGVtcywgdGhpcy5faXRlbSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX215VmFsaWRhdG9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZXF1aXJlZCAmJiBFbGVtZW50VXRpbC5pc1Zpc2libGUodGhpcy5fZm9ybUdyb3VwKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5fdmFsaWRhdGUoeyBpdGVtOiB0aGlzLml0ZW0gfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZDtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmlzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRlKSB7IHRoaXMuX3ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZTsgfVxyXG4gICAgICAgIEVsZW1lbnRVdGlsLmF0dGFjaGVkKHRoaXMuY29tbW9uLCB0aGlzLmZvcm1OYW1lLCB0aGlzLnJlcXVpcmVkLCB0aGlzLl9jbGVhciwgdGhpcy5fbXlWYWxpZGF0b3IpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pdGVtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ2hhbmdlZCh0aGlzLml0ZW0sIG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXRlbXNDaGFuZ2VkKG5ld1ZhbHVlOiBhbnksIG9sZFZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9hcmVPYmplY3RzID0gRWxlbWVudFV0aWwuYXJlT2JqZWN0cyh0aGlzLml0ZW1zKTtcclxuICAgICAgICAvLyB0aGlzLnRhc2tRdWV1ZS5xdWV1ZVRhc2soKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBFbGVtZW50VXRpbC5jaGVja01heENoYXJzKHRoaXMuaXRlbXMsIHRoaXMuX2FyZU9iamVjdHMsIHRoaXMuZGlzcGxheUF0dHJpYnV0ZSk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gaWYgKG5ld1ZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5pdGVtQ2hhbmdlZCh0aGlzLml0ZW0sIG51bGwpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gZ2V0IGN1cnJlbnQgb2JqZWN0IGZyb20gc2VsZWN0ZWQgZGlzcGxheSBhdHRyaWJ1dGU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPSBudWxsICYmIHRoaXMuaXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIGdldCBjdXJyZW50IG9iamVjdCBmcm9tIHNlbGVjdGVkIGRpc3BsYXkgYXR0cmlidXRlO1xyXG4gICAgICAgICAgICB0aGlzLl9hY3RpdmVNYXAgPSBFbGVtZW50VXRpbC5hY3RpdmVNYXAodGhpcy5pdGVtcywgdGhpcy5faXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoaXMgaXMgZmlyZWQgYmVmb3JlIHRoZSBpdGVtIGNoYW5nZXMsXHJcbiAgICAvLyBpZiB0aGUgaXRlbSBpcyBjaGFuZ2VkIGV4dGVybmFsbHkuXHJcbiAgICBwdWJsaWMgaXRlbUNoYW5nZWQobmV3VmFsdWU6IGFueSwgb2xkVmFsdWU6IGFueSkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXRlbXMpIHtcclxuICAgICAgICAgICAgLy8gd2UgZG9uJ3Qga25vdyBpZiB0aGUgaXRlbSBpcyBhbiBvYmplY3Qgb3Igbm90IHlldC4uLi5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHdhc0NoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICAvLyBpZiBhcmVTdHJpbmdzXHJcbiAgICAgICAgaWYgKCF0aGlzLl9hcmVPYmplY3RzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pdGVtICE9PSBuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXRlbSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgd2FzQ2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgb2JqZWN0c1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2FyZU9iamVjdHMpIHtcclxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlID09IG51bGwgfHwgbmV3VmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pdGVtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB3YXNDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIEtlZXAgaW4gbWluZCB0aGF0IHRoZXJlIG1heSBvciBtYXkgbm90IGJlIGEgdmFsdWVBdHRyaWJ1dGUsIHdlIGNvdWxkIGJlIHNlbGVjdGluZyBvYmplY3RzIGluc3RlYWQgb2YgYSBwcm9wIG9mIGFuIG9iamVjdC5cclxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgU3RyaW5ncyBhbmQgTnVtYmVyc1xyXG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmNvbnN0cnVjdG9yID09PSBTdHJpbmcgfHwgbmV3VmFsdWUuY29uc3RydWN0b3IgPT09IE51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgYnkgcHJvcGVydHkgYmVjYXVzZSB3ZSdyZSBzZWxlY3RpbmcgYW4gcHJvcCBvdXQgb2YgdGhlIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdGhpcy5maW5kSXRlbUJ5QXR0cmlidXRlKG5ld1ZhbHVlLCB0aGlzLnZhbHVlQXR0cmlidXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIV8uaXNFcXVhbChzZWxlY3RlZCwgdGhpcy5faXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faXRlbSA9IHNlbGVjdGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3YXNDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgT2JqZWN0cyAoaWYgdGhlcmUgaXMgbm8gdmFsdWVBdHRyaWJ1dGUpXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIV8uaXNFcXVhbChuZXdWYWx1ZSwgdGhpcy5faXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faXRlbSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3YXNDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAod2FzQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9hY3RpdmVNYXAgPSBFbGVtZW50VXRpbC5hY3RpdmVNYXAodGhpcy5pdGVtcywgdGhpcy5faXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5yZXF1aXJlZCAmJiBFbGVtZW50VXRpbC5pc1Zpc2libGUodGhpcy5fZm9ybUdyb3VwKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0aGlzLl92YWxpZGF0ZSh7IGl0ZW06IHRoaXMuaXRlbSB9KTsgIC8vIHRvZG86IHdyb25nIHBsYWNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVTZWxlY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy50YXNrUXVldWUucXVldWVUYXNrKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2Zvcm1Hcm91cCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gXCJkcm9wZG93blwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1zID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtR3JvdXAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJvcHRpb25cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIEVsZW1lbnRVdGlsLnNldE9wdGlvbkZyb21BY3RpdmVNYXAoZWxlbXMsIHRoaXMuX2FjdGl2ZU1hcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50VXRpbC5yZW1vdmVBbGxBY3RpdmVDaGlsZHJlbih0aGlzLl9mb3JtR3JvdXApO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtcyA9IEFycmF5LmZyb20odGhpcy5fZm9ybUdyb3VwLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIEVsZW1lbnRVdGlsLnNldEFjdGl2ZUZyb21BY3RpdmVNYXAoZWxlbXMsIHRoaXMuX2FjdGl2ZU1hcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX2l0ZW1DaGFuZ2VkKCkge1xyXG4gICAgICAgIGxldCB3YXNDaGFuZ2VkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIGlmIGFyZVN0cmluZ3NcclxuICAgICAgICBpZiAoIXRoaXMuX2FyZU9iamVjdHMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbSAhPT0gdGhpcy5faXRlbSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gdGhpcy5faXRlbTtcclxuICAgICAgICAgICAgICAgIHdhc0NoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmIG9iamVjdHNcclxuICAgICAgICBpZiAodGhpcy5fYXJlT2JqZWN0cykge1xyXG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIHZhbHVlQXR0cmlidXRlLCB0aGVuIHRoaXMuaXRlbSBuZWVkcyB0byBiZSBhIHN0cmluZ1xyXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZUF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbSAhPT0gdGhpcy5faXRlbVt0aGlzLnZhbHVlQXR0cmlidXRlXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IHRoaXMuX2l0ZW1bdGhpcy52YWx1ZUF0dHJpYnV0ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgd2FzQ2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm90IGEgdmFsdWVBdHRyaWJ1dGUsIHRoZW4gdGhpcy5pdGVtIG5lZWRzIHRvIGJlIGFuIE9CSkVDVFxyXG4gICAgICAgICAgICBpZiAoIXRoaXMudmFsdWVBdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW0gIT09IHRoaXMuX2l0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLl9pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdhc0NoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh3YXNDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2ZU1hcCA9IEVsZW1lbnRVdGlsLmFjdGl2ZU1hcCh0aGlzLml0ZW1zLCB0aGlzLl9pdGVtKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3Rpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlZmF1bHRWYWxpZGF0ZShhcmdzKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gd2UgYXJlIG9ubHkgdmFsaWRhdGluZyB0aGF0IHRoZXJlIElTIGEgdmFsdWVcclxuICAgICAgICAvLyByZW1lbWJlciB0aGlzIG1heSBiZSBhbiBvYmplY3Qgb3IgYSBzdHJpbmdcclxuICAgICAgICBsZXQgdmFsaWQgPSBhcmdzLml0ZW0gIT09IFwiXCIgJiYgYXJncy5pdGVtICE9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZmluZEl0ZW1CeUF0dHJpYnV0ZShhdHRyVmFsdWU6IGFueSwgcHJvcDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkOiBhbnkgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoYXR0clZhbHVlLmNvbnN0cnVjdG9yICE9PSBTdHJpbmdcclxuICAgICAgICAgICAgJiYgYXR0clZhbHVlLmNvbnN0cnVjdG9yICE9PSBOdW1iZXIpIHtcclxuICAgICAgICAgICAgYXR0clZhbHVlID0gYXR0clZhbHVlW3Byb3BdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zW2ldW3Byb3BdID09PSBhdHRyVmFsdWUgJiYgc2VsZWN0ZWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0aGlzLml0ZW1zW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZWxlY3RlZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzIGlzIGZpcmVkIGJlZm9yZSBpdGVtIGNoYW5nZXMuXHJcbiAgICAvLyBhbmQgb25seSBpZiB0aGUgaXRlbSBjaGFuZ2VzIGZyb20gVEhJUyBjb250cm9sLCBub3QgZnJvbSBleHRlcm5hbCBzb3VyY2VcclxuICAgIHB1YmxpYyBfY2hhbmdlZChldjogTW91c2VFdmVudCwgaW5kZXgpIHtcclxuICAgICAgICB0aGlzLl9pdGVtQ2hhbmdlZCgpO1xyXG5cclxuICAgICAgICBsZXQgYXJncyA9IHtcclxuICAgICAgICAgICAgZXZlbnQ6IGV2LFxyXG4gICAgICAgICAgICBpdGVtOiB0aGlzLml0ZW0sXHJcbiAgICAgICAgICAgIGluZGV4OiBpbmRleFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbmdpbmcpIHsgdGhpcy5jaGFuZ2luZyhhcmdzKTsgfVxyXG4gICAgICAgIC8vIFRvZG8sIHVzZSB0aGlzIGV2ZXJ5d2hlcmUuXHJcbiAgICAgICAgLy8gdGhpcyB3aWxsIGNhbGwgY2hhbmdlIGFmdGVyIHRoZSB2YWx1ZXMgb2YgYmluZGFibGVzIGFyZSB1cGRhdGVkXHJcbiAgICAgICAgdGhpcy50YXNrUXVldWUucXVldWVNaWNyb1Rhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGFuZ2UpIHsgdGhpcy5jaGFuZ2UoKTsgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIEVsZW1lbnRVdGlsLnJlbW92ZUFsbEFjdGl2ZUNoaWxkcmVuKHRoaXMuX2Zvcm1Hcm91cCk7XHJcbiAgICAgICAgKDxIVE1MRWxlbWVudD5ldi50YXJnZXQpLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBkZXRhY2hlZCgpIHtcclxuICAgICAgICBFbGVtZW50VXRpbC5kZXRhY2hlZCh0aGlzLmNvbW1vbiwgdGhpcy5mb3JtTmFtZSwgdGhpcy5yZXF1aXJlZCwgdGhpcy5fY2xlYXIsIHRoaXMuX215VmFsaWRhdG9yKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/ssn',["require", "exports", "aurelia-framework", "../common", "./common/element-util"], function (require, exports, aurelia_framework_1, common_1, element_util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Text = (function () {
        function Text(common, taskQueue) {
            var _this = this;
            this.isNumber = false;
            this.isPositive = true;
            this.isLong = false;
            this.disabled = false;
            this.placeholder = "";
            this.warningMsg = "Warning";
            this.isWarning = false;
            this.required = false;
            this.errorMsg = "Value required";
            this.invalidMsg = "Invalid SSN format";
            this.showError = true;
            this.isValid = true;
            this.isOverrideInvalid = false;
            this.maxlength = "11";
            this.minlength = 11;
            this.formName = "default";
            this._programaticErrorMessage = "Error When Binding Input.";
            this._emptyValue = null;
            this.common = common;
            this.taskQueue = taskQueue;
            this._validate = this.defaultValidate;
            this._clear = function (onlyClearValidation) {
                _this.isValid = true;
                if (!onlyClearValidation) {
                    _this.item = _this._emptyValue;
                }
            };
            this._myValidator = function () {
                if (_this.required && element_util_1.default.isVisible(_this._formGroup)) {
                    _this.isValid = _this._validate({ item: _this.item });
                }
                return _this.isValid;
            };
        }
        Text.prototype.attached = function () {
            this.isValid = true;
            if (this.validate) {
                this._validate = this.validate;
            }
            element_util_1.default.attached(this.common, this.formName, this.required, this._clear, this._myValidator);
        };
        Text.prototype.itemChanged = function (newValue, oldValue) {
            if (this.required && element_util_1.default.isVisible(this._formGroup) && newValue !== oldValue) {
                this.isValid = this._validate({ item: this.item });
            }
        };
        Text.prototype._changed = function (ev, index) {
            var _this = this;
            if (this.isNumber && this.isPositive
                && this.item != null && this.item !== "" && this.item.indexOf("-") >= 0) {
                this.item = this.item.replace("-", "");
            }
            if (this.changing) {
                this.changing({
                    event: ev,
                    item: this.item,
                });
            }
            this.taskQueue.queueMicroTask(function () {
                if (_this.change) {
                    _this.change();
                }
            });
            return true;
        };
        Text.prototype.defaultValidate = function (args) {
            if (this.required) {
                return args.item != null && args.item != "" && args.item.length == this.minlength;
            }
            else {
                return ((args.item == null || args.item == "") || (args.item.length == this.minlength));
            }
        };
        Text.prototype.keyupFunc = function (e) {
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
                (e.keyCode >= 35 && e.keyCode <= 40)) {
                return;
            }
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
            this.formatSSN();
        };
        Text.prototype.onblurFunc = function (e) {
            this.isValid = this._validate({ item: this.item });
        };
        Text.prototype.formatSSN = function () {
            if (this.item) {
                var val = this.item.replace(/\D/g, '');
                var newVal = '';
                if (val.length > 4) {
                    this.item = val;
                }
                if ((val.length > 3) && (val.length < 6)) {
                    newVal += val.substr(0, 3) + '-';
                    val = val.substr(3);
                }
                if (val.length > 5) {
                    newVal += val.substr(0, 3) + '-';
                    newVal += val.substr(3, 2) + '-';
                    val = val.substr(5);
                }
                newVal += val;
                this.item = newVal.substring(0, 11);
            }
        };
        Text.prototype.detached = function () {
            element_util_1.default.detached(this.common, this.formName, this.required, this._clear, this._myValidator);
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], Text.prototype, "item", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], Text.prototype, "isNumber", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], Text.prototype, "isPositive", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], Text.prototype, "isLong", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Text.prototype, "disabled", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "label", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "pre", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "instructions", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "placeholder", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "warningMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Text.prototype, "isWarning", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Text.prototype, "required", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "errorMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "invalidMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Text.prototype, "showError", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Text.prototype, "isValid", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Text.prototype, "isOverrideInvalid", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "maxlength", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Number)
        ], Text.prototype, "minlength", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], Text.prototype, "formName", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], Text.prototype, "changing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], Text.prototype, "change", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], Text.prototype, "validate", void 0);
        Text = __decorate([
            aurelia_framework_1.customElement("ce-ssn"),
            aurelia_framework_1.autoinject(),
            __metadata("design:paramtypes", [common_1.Common, aurelia_framework_1.TaskQueue])
        ], Text);
        return Text;
    }());
    exports.Text = Text;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Ozs2Q0FBZ0M7UUFDL0I7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7O3VEQUEyQztRQUMxQztZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7K0NBQWlDO1FBQ2hDO1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOzsrQ0FBK0I7UUFFMUU7WUFBVCw0QkFBUTs7OENBQXFDO1FBQ3BDO1lBQVQsNEJBQVE7c0NBQWtCLFFBQVE7OENBQUM7UUFDMUI7WUFBVCw0QkFBUTtzQ0FBZ0IsUUFBUTs0Q0FBQztRQUN4QjtZQUFULDRCQUFRO3NDQUFrQixRQUFROzhDQUFDO1FBM0IzQixJQUFJO1lBRmhCLGlDQUFhLENBQUMsUUFBUSxDQUFDO1lBQ3ZCLDhCQUFVLEVBQUU7NkNBd0NXLGVBQU0sRUFBYSw2QkFBUztXQXZDdkMsSUFBSSxDQTRJaEI7UUFBRCxXQUFDO0tBNUlELEFBNElDLElBQUE7SUE1SVksb0JBQUkiLCJmaWxlIjoicmVzb3VyY2VzL2VsZW1lbnRzL3Nzbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgY3VzdG9tRWxlbWVudCwgVGFza1F1ZXVlfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IENvbW1vbiB9IGZyb20gXCIuLi9jb21tb25cIjtcclxuaW1wb3J0IEVsZW1lbnRVdGlsIGZyb20gXCIuL2NvbW1vbi9lbGVtZW50LXV0aWxcIjtcclxuLypcclxuKiBUaGlzIGlzIGEgU1NOIGlucHV0LlxyXG4qL1xyXG5AY3VzdG9tRWxlbWVudChcImNlLXNzblwiKVxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBUZXh0IHtcclxuICAgIHB1YmxpYyBjb21tb246IENvbW1vbjtcclxuICAgIHB1YmxpYyB0YXNrUXVldWU6IFRhc2tRdWV1ZTtcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaXRlbTogYW55O1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyBpc051bWJlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyBpc1Bvc2l0aXZlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBiaW5kYWJsZSBwdWJsaWMgaXNMb25nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHByZTogc3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGluc3RydWN0aW9uczogc3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHdhcm5pbmdNc2c6IHN0cmluZyA9IFwiV2FybmluZ1wiO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGlzV2FybmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgZXJyb3JNc2c6IHN0cmluZyA9IFwiVmFsdWUgcmVxdWlyZWRcIjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpbnZhbGlkTXNnOiBzdHJpbmcgPSBcIkludmFsaWQgU1NOIGZvcm1hdFwiO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHNob3dFcnJvcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaXNWYWxpZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaXNPdmVycmlkZUludmFsaWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBtYXhsZW5ndGg6IHN0cmluZyA9IFwiMTFcIjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBtaW5sZW5ndGg6IG51bWJlciA9IDExO1xyXG5cclxuICAgIEBiaW5kYWJsZSBwdWJsaWMgZm9ybU5hbWU6IHN0cmluZyA9IFwiZGVmYXVsdFwiO1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyBjaGFuZ2luZzogRnVuY3Rpb247XHJcbiAgICBAYmluZGFibGUgcHVibGljIGNoYW5nZTogRnVuY3Rpb247IC8vIGNhbGwgdmlhIGNoYW5nZS5jYWxsPVwiZnVuY3Rpb25OYW1lXCJcclxuICAgIEBiaW5kYWJsZSBwdWJsaWMgdmFsaWRhdGU6IEZ1bmN0aW9uO1xyXG5cclxuICAgIHByaXZhdGUgX2lucHV0OiBFbGVtZW50O1xyXG5cclxuICAgIHByaXZhdGUgX2VsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfdmFsaWRhdGU6IEZ1bmN0aW9uO1xyXG4gICAgcHJpdmF0ZSBfZm9ybUdyb3VwOiBhbnk7IC8vIGVsZW1lbnQgcmVmXHJcbiAgICBwcml2YXRlIF9wcm9ncmFtYXRpY0Vycm9yTWVzc2FnZTogc3RyaW5nID0gXCJFcnJvciBXaGVuIEJpbmRpbmcgSW5wdXQuXCI7XHJcbiAgICBwcml2YXRlIF9jbGVhcjogRnVuY3Rpb247IC8vIHNldCBpbiBpbmhlcml0b3JcclxuICAgIHByaXZhdGUgX215VmFsaWRhdG9yOiBGdW5jdGlvbjsgLy8gc2V0IGluIGluaGVyaXRvclxyXG4gICAgcHJpdmF0ZSBfZW1wdHlWYWx1ZTogYW55ID0gbnVsbDsgIC8vIHdpbGwgYmUgbnVsbCBpZiBvYmplY3RzLCBcIlwiIGlmIHN0cmluZ1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbW1vbjogQ29tbW9uLCB0YXNrUXVldWU6IFRhc2tRdWV1ZSkge1xyXG4gICAgICAgIHRoaXMuY29tbW9uID0gY29tbW9uO1xyXG4gICAgICAgIHRoaXMudGFza1F1ZXVlID0gdGFza1F1ZXVlO1xyXG5cclxuICAgICAgICB0aGlzLl92YWxpZGF0ZSA9IHRoaXMuZGVmYXVsdFZhbGlkYXRlO1xyXG4gICAgICAgIC8vIGNsZWFyIGlzIGNhbGxlZCBieSBodGVcclxuICAgICAgICB0aGlzLl9jbGVhciA9IChvbmx5Q2xlYXJWYWxpZGF0aW9uOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICghb25seUNsZWFyVmFsaWRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gdGhpcy5fZW1wdHlWYWx1ZTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX215VmFsaWRhdG9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgRWxlbWVudFV0aWwuaXNWaXNpYmxlKHRoaXMuX2Zvcm1Hcm91cCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9ICB0aGlzLl92YWxpZGF0ZSh7IGl0ZW06IHRoaXMuaXRlbSB9KTsgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZDsgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0ZSkgeyB0aGlzLl92YWxpZGF0ZSA9IHRoaXMudmFsaWRhdGU7IH1cclxuICAgICAgICBFbGVtZW50VXRpbC5hdHRhY2hlZCh0aGlzLmNvbW1vbiwgdGhpcy5mb3JtTmFtZSwgdGhpcy5yZXF1aXJlZCwgdGhpcy5fY2xlYXIsIHRoaXMuX215VmFsaWRhdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzIGlzIGZpcmVkIGJlZm9yZSB0aGUgaXRlbSBjaGFuZ2VzLFxyXG4gICAgLy8gYW5kIGlmIHRoZSBpdGVtIGlzIGNoYW5nZWQgZXh0ZXJuYWxseSBvciBpbnRlcm5hbGx5LlxyXG4gICAgcHVibGljIGl0ZW1DaGFuZ2VkKG5ld1ZhbHVlOiBhbnksIG9sZFZhbHVlOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5yZXF1aXJlZCAmJiBFbGVtZW50VXRpbC5pc1Zpc2libGUodGhpcy5fZm9ybUdyb3VwKSAmJiBuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5fdmFsaWRhdGUoeyBpdGVtOiB0aGlzLml0ZW0gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoaXMgaXMgZmlyZWQgQUZURVIgdGhlIGl0ZW0gY2hhbmdlcyxcclxuICAgIC8vIGFuZCBvbmx5IGlmIHRoZSBpdGVtIGNoYW5nZXMgZnJvbSBUSElTIGNvbnRyb2wsIG5vdCBmcm9tIGV4dGVybmFsIHNvdXJjZVxyXG4gICAgcHVibGljIF9jaGFuZ2VkKGV2LCBpbmRleCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTnVtYmVyICYmIHRoaXMuaXNQb3NpdGl2ZVxyXG4gICAgICAgICAgICAmJiB0aGlzLml0ZW0gIT0gbnVsbCAmJiB0aGlzLml0ZW0gIT09IFwiXCIgJiYgdGhpcy5pdGVtLmluZGV4T2YoXCItXCIpID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtID0gdGhpcy5pdGVtLnJlcGxhY2UoXCItXCIsIFwiXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbmdpbmcpIHsgdGhpcy5jaGFuZ2luZyh7XHJcbiAgICAgICAgICAgIGV2ZW50OiBldixcclxuICAgICAgICAgICAgaXRlbTogdGhpcy5pdGVtLFxyXG4gICAgICAgIH0pOyB9XHJcbiAgICAgICAgdGhpcy50YXNrUXVldWUucXVldWVNaWNyb1Rhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGFuZ2UpIHsgdGhpcy5jaGFuZ2UoKTsgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWZhdWx0VmFsaWRhdGUoYXJncyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIHdlIGFyZSBvbmx5IHZhbGlkYXRpbmcgdGhhdCB0aGVyZSBpcyBhbiBpdGVtLCBhbmQgaXQgaXMgbG9uZ2VyIHRoYW4gXCJcIlxyXG4gICAgICAgIGlmKHRoaXMucmVxdWlyZWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gYXJncy5pdGVtICE9IG51bGwgJiYgYXJncy5pdGVtICE9IFwiXCIgJiYgYXJncy5pdGVtLmxlbmd0aCA9PSB0aGlzLm1pbmxlbmd0aDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKChhcmdzLml0ZW0gPT0gbnVsbCB8fCBhcmdzLml0ZW0gPT0gXCJcIikgfHwgKGFyZ3MuaXRlbS5sZW5ndGggPT0gdGhpcy5taW5sZW5ndGgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBrZXl1cEZ1bmMoZSkge1xyXG4gICAgICAgIC8vIEFsbG93OiBiYWNrc3BhY2UsIGRlbGV0ZSwgdGFiLCBlc2NhcGUsIGVudGVyIGFuZCAuXHJcbiAgICAgICAgaWYgKCQuaW5BcnJheShlLmtleUNvZGUsIFs0NiwgOCwgOSwgMjcsIDEzLCAxMTAsIDE5MF0pICE9PSAtMSB8fFxyXG4gICAgICAgICAgICAgLy8gQWxsb3c6IEN0cmwrQSwgQ29tbWFuZCtBXHJcbiAgICAgICAgICAgIChlLmtleUNvZGUgPT09IDY1ICYmIChlLmN0cmxLZXkgPT09IHRydWUgfHwgZS5tZXRhS2V5ID09PSB0cnVlKSkgfHxcclxuICAgICAgICAgICAgIC8vIEFsbG93OiBob21lLCBlbmQsIGxlZnQsIHJpZ2h0LCBkb3duLCB1cFxyXG4gICAgICAgICAgICAoZS5rZXlDb2RlID49IDM1ICYmIGUua2V5Q29kZSA8PSA0MCkpIHtcclxuICAgICAgICAgICAgICAgICAvLyBsZXQgaXQgaGFwcGVuLCBkb24ndCBkbyBhbnl0aGluZ1xyXG4gICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRW5zdXJlIHRoYXQgaXQgaXMgYSBudW1iZXIgYW5kIHN0b3AgdGhlIGtleXByZXNzXHJcbiAgICAgICAgaWYgKChlLnNoaWZ0S2V5IHx8IChlLmtleUNvZGUgPCA0OCB8fCBlLmtleUNvZGUgPiA1NykpICYmIChlLmtleUNvZGUgPCA5NiB8fCBlLmtleUNvZGUgPiAxMDUpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9Gb3JtYXQgU1NOIE51bWJlclxyXG4gICAgICAgIHRoaXMuZm9ybWF0U1NOKCk7XHJcbiAgICB9XHJcbiAgICBvbmJsdXJGdW5jKGUpIHtcclxuICAgICAgICB0aGlzLmlzVmFsaWQgPSB0aGlzLl92YWxpZGF0ZSh7IGl0ZW06IHRoaXMuaXRlbSB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBmb3JtYXRTU04oKSB7XHJcbiAgICAgICAgaWYodGhpcy5pdGVtKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWw6IHN0cmluZyA9IHRoaXMuaXRlbS5yZXBsYWNlKC9cXEQvZywgJycpO1xyXG4gICAgICAgICAgICBsZXQgbmV3VmFsOiBzdHJpbmcgPSAnJztcclxuICAgICAgICAgICAgaWYodmFsLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtID0gdmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCh2YWwubGVuZ3RoID4gMykgJiYgKHZhbC5sZW5ndGggPCA2KSkge1xyXG4gICAgICAgICAgICBuZXdWYWwgKz0gdmFsLnN1YnN0cigwLCAzKSArICctJztcclxuICAgICAgICAgICAgdmFsID0gdmFsLnN1YnN0cigzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodmFsLmxlbmd0aCA+IDUpIHtcclxuICAgICAgICAgICAgbmV3VmFsICs9IHZhbC5zdWJzdHIoMCwgMykgKyAnLSc7XHJcbiAgICAgICAgICAgIG5ld1ZhbCArPSB2YWwuc3Vic3RyKDMsIDIpICsgJy0nO1xyXG4gICAgICAgICAgICB2YWwgPSB2YWwuc3Vic3RyKDUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld1ZhbCArPSB2YWw7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbSA9IG5ld1ZhbC5zdWJzdHJpbmcoMCwgMTEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBkZXRhY2hlZCgpIHtcclxuICAgICAgICBFbGVtZW50VXRpbC5kZXRhY2hlZCh0aGlzLmNvbW1vbiwgdGhpcy5mb3JtTmFtZSwgdGhpcy5yZXF1aXJlZCwgdGhpcy5fY2xlYXIsIHRoaXMuX215VmFsaWRhdG9yKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/text',["require", "exports", "aurelia-framework", "../common", "./common/element-util"], function (require, exports, aurelia_framework_1, common_1, element_util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Text = (function () {
        function Text(common, taskQueue) {
            var _this = this;
            this.isNumber = false;
            this.isPositive = true;
            this.isLong = false;
            this.isDate = false;
            this.disabled = false;
            this.placeholder = "";
            this.warningMsg = "Warning";
            this.isWarning = false;
            this.required = false;
            this.errorMsg = "Value required";
            this.showError = true;
            this.isValid = true;
            this.isOverrideInvalid = false;
            this.formName = "default";
            this._programaticErrorMessage = "Error When Binding Input.";
            this._emptyValue = null;
            this.common = common;
            this.taskQueue = taskQueue;
            this._validate = this.defaultValidate;
            this._clear = function (onlyClearValidation) {
                _this.isValid = true;
                if (!onlyClearValidation) {
                    _this.item = _this._emptyValue;
                }
            };
            this._myValidator = function () {
                if (_this.required && element_util_1.default.isVisible(_this._formGroup)) {
                    _this.isValid = _this._validate({ item: _this.item });
                }
                return _this.isValid;
            };
        }
        Text.prototype.attached = function () {
            this.isValid = true;
            if (this.validate) {
                this._validate = this.validate;
            }
            if (this.disabled && this.isDate && typeof this.item.getMonth === 'function') {
                this.item = (this.item.getMonth() + 1) + '/' + this.item.getDate() + '/' + this.item.getFullYear();
            }
            element_util_1.default.attached(this.common, this.formName, this.required, this._clear, this._myValidator);
        };
        Text.prototype.itemChanged = function (newValue, oldValue) {
            if (this.required && element_util_1.default.isVisible(this._formGroup) && newValue !== oldValue) {
                this.isValid = this._validate({ item: this.item });
            }
        };
        Text.prototype._changed = function (ev, index) {
            var _this = this;
            if (this.isNumber && this.isPositive
                && this.item != null && this.item !== "" && this.item.indexOf("-") >= 0) {
                this.item = this.item.replace("-", "");
            }
            if (this.disabled && this.isDate && typeof this.item.getMonth === 'function') {
                this.item = (this.item.getMonth() + 1) + '/' + this.item.getDate() + '/' + this.item.getFullYear();
            }
            if (this.changing) {
                this.changing({
                    event: ev,
                    item: this.item,
                });
            }
            this.taskQueue.queueMicroTask(function () {
                if (_this.change) {
                    _this.change();
                }
            });
            return true;
        };
        Text.prototype.defaultValidate = function (args) {
            return args.item != null && args.item !== "";
        };
        Text.prototype.detached = function () {
            element_util_1.default.detached(this.common, this.formName, this.required, this._clear, this._myValidator);
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], Text.prototype, "item", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], Text.prototype, "isNumber", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], Text.prototype, "isPositive", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], Text.prototype, "isLong", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], Text.prototype, "isDate", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Text.prototype, "disabled", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "label", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "text", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "pre", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "instructions", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "placeholder", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "warningMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Text.prototype, "isWarning", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Text.prototype, "required", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], Text.prototype, "errorMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Text.prototype, "showError", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Text.prototype, "isValid", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], Text.prototype, "isOverrideInvalid", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], Text.prototype, "formName", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], Text.prototype, "changing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], Text.prototype, "change", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], Text.prototype, "validate", void 0);
        Text = __decorate([
            aurelia_framework_1.customElement("ce-text"),
            aurelia_framework_1.autoinject(),
            __metadata("design:paramtypes", [common_1.Common, aurelia_framework_1.TaskQueue])
        ], Text);
        return Text;
    }());
    exports.Text = Text;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy90ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQU9BO1FBc0NJLGNBQVksTUFBYyxFQUFFLFNBQW9CO1lBQWhELGlCQWdCQztZQWpEZ0IsYUFBUSxHQUFZLEtBQUssQ0FBQztZQUMxQixlQUFVLEdBQVksSUFBSSxDQUFDO1lBQzNCLFdBQU0sR0FBWSxLQUFLLENBQUM7WUFDeEIsV0FBTSxHQUFZLEtBQUssQ0FBQztZQUNvQixhQUFRLEdBQVksS0FBSyxDQUFDO1lBSzFCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1lBQ3pCLGVBQVUsR0FBVyxTQUFTLENBQUM7WUFDL0IsY0FBUyxHQUFZLEtBQUssQ0FBQztZQUMzQixhQUFRLEdBQVksS0FBSyxDQUFDO1lBQzFCLGFBQVEsR0FBVyxnQkFBZ0IsQ0FBQztZQUNwQyxjQUFTLEdBQVksSUFBSSxDQUFDO1lBQzFCLFlBQU8sR0FBWSxJQUFJLENBQUM7WUFDeEIsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1lBRS9FLGFBQVEsR0FBVyxTQUFTLENBQUM7WUFVdEMsNkJBQXdCLEdBQVcsMkJBQTJCLENBQUM7WUFHL0QsZ0JBQVcsR0FBUSxJQUFJLENBQUM7WUFHNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFFM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBRXRDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBQyxtQkFBNEI7Z0JBQ3ZDLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsbUJBQW1CLEVBQUU7b0JBQ3RCLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQztpQkFDL0I7WUFDTixDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsWUFBWSxHQUFHO2dCQUNaLElBQUksS0FBSSxDQUFDLFFB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dCB7IGF1dG9pbmplY3QsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgY3VzdG9tRWxlbWVudCwgVGFza1F1ZXVlfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IENvbW1vbiB9IGZyb20gXCIuLi9jb21tb25cIjtcclxuaW1wb3J0IEVsZW1lbnRVdGlsIGZyb20gXCIuL2NvbW1vbi9lbGVtZW50LXV0aWxcIjtcclxuXHJcbkBjdXN0b21FbGVtZW50KFwiY2UtdGV4dFwiKVxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBUZXh0IHtcclxuICAgIHB1YmxpYyBjb21tb246IENvbW1vbjtcclxuICAgIHB1YmxpYyB0YXNrUXVldWU6IFRhc2tRdWV1ZTtcclxuXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaXRlbTogYW55O1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyBpc051bWJlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyBpc1Bvc2l0aXZlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBiaW5kYWJsZSBwdWJsaWMgaXNMb25nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgcHVibGljIGlzRGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgbGFiZWw6IHN0cmluZztcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyB0ZXh0OiBzdHJpbmc7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgcHJlOiBzdHJpbmc7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaW5zdHJ1Y3Rpb25zOiBzdHJpbmc7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgd2FybmluZ01zZzogc3RyaW5nID0gXCJXYXJuaW5nXCI7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaXNXYXJuaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBlcnJvck1zZzogc3RyaW5nID0gXCJWYWx1ZSByZXF1aXJlZFwiO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHNob3dFcnJvcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaXNWYWxpZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaXNPdmVycmlkZUludmFsaWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAYmluZGFibGUgcHVibGljIGZvcm1OYW1lOiBzdHJpbmcgPSBcImRlZmF1bHRcIjtcclxuICAgIEBiaW5kYWJsZSBwdWJsaWMgY2hhbmdpbmc6IEZ1bmN0aW9uO1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyBjaGFuZ2U6IEZ1bmN0aW9uOyAvLyBjYWxsIHZpYSBjaGFuZ2UuY2FsbD1cImZ1bmN0aW9uTmFtZVwiXHJcbiAgICBAYmluZGFibGUgcHVibGljIHZhbGlkYXRlOiBGdW5jdGlvbjtcclxuXHJcbiAgICBwcml2YXRlIF9pbnB1dDogRWxlbWVudDtcclxuXHJcbiAgICBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfdmFsaWRhdGU6IEZ1bmN0aW9uO1xyXG4gICAgcHJpdmF0ZSBfZm9ybUdyb3VwOiBhbnk7IC8vIGVsZW1lbnQgcmVmXHJcbiAgICBwcml2YXRlIF9wcm9ncmFtYXRpY0Vycm9yTWVzc2FnZTogc3RyaW5nID0gXCJFcnJvciBXaGVuIEJpbmRpbmcgSW5wdXQuXCI7XHJcbiAgICBwcml2YXRlIF9jbGVhcjogRnVuY3Rpb247IC8vIHNldCBpbiBpbmhlcml0b3JcclxuICAgIHByaXZhdGUgX215VmFsaWRhdG9yOiBGdW5jdGlvbjsgLy8gc2V0IGluIGluaGVyaXRvclxyXG4gICAgcHJpdmF0ZSBfZW1wdHlWYWx1ZTogYW55ID0gbnVsbDsgIC8vIHdpbGwgYmUgbnVsbCBpZiBvYmplY3RzLCBcIlwiIGlmIHN0cmluZ1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbW1vbjogQ29tbW9uLCB0YXNrUXVldWU6IFRhc2tRdWV1ZSkge1xyXG4gICAgICAgIHRoaXMuY29tbW9uID0gY29tbW9uO1xyXG4gICAgICAgIHRoaXMudGFza1F1ZXVlID0gdGFza1F1ZXVlO1xyXG5cclxuICAgICAgICB0aGlzLl92YWxpZGF0ZSA9IHRoaXMuZGVmYXVsdFZhbGlkYXRlO1xyXG4gICAgICAgIC8vIGNsZWFyIGlzIGNhbGxlZCBieSBodGVcclxuICAgICAgICB0aGlzLl9jbGVhciA9IChvbmx5Q2xlYXJWYWxpZGF0aW9uOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICghb25seUNsZWFyVmFsaWRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gdGhpcy5fZW1wdHlWYWx1ZTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX215VmFsaWRhdG9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgRWxlbWVudFV0aWwuaXNWaXNpYmxlKHRoaXMuX2Zvcm1Hcm91cCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9ICB0aGlzLl92YWxpZGF0ZSh7IGl0ZW06IHRoaXMuaXRlbSB9KTsgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZDsgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0ZSkgeyB0aGlzLl92YWxpZGF0ZSA9IHRoaXMudmFsaWRhdGU7IH1cclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCAmJiB0aGlzLmlzRGF0ZSAgJiYgdHlwZW9mIHRoaXMuaXRlbS5nZXRNb250aCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgdGhpcy5pdGVtID0gKHRoaXMuaXRlbS5nZXRNb250aCgpICsgMSkgKyAnLycgKyB0aGlzLml0ZW0uZ2V0RGF0ZSgpICsgJy8nICsgIHRoaXMuaXRlbS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBFbGVtZW50VXRpbC5hdHRhY2hlZCh0aGlzLmNvbW1vbiwgdGhpcy5mb3JtTmFtZSwgdGhpcy5yZXF1aXJlZCwgdGhpcy5fY2xlYXIsIHRoaXMuX215VmFsaWRhdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzIGlzIGZpcmVkIGJlZm9yZSB0aGUgaXRlbSBjaGFuZ2VzLFxyXG4gICAgLy8gYW5kIGlmIHRoZSBpdGVtIGlzIGNoYW5nZWQgZXh0ZXJuYWxseSBvciBpbnRlcm5hbGx5LlxyXG4gICAgcHVibGljIGl0ZW1DaGFuZ2VkKG5ld1ZhbHVlOiBhbnksIG9sZFZhbHVlOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5yZXF1aXJlZCAmJiBFbGVtZW50VXRpbC5pc1Zpc2libGUodGhpcy5fZm9ybUdyb3VwKSAmJiBuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5fdmFsaWRhdGUoeyBpdGVtOiB0aGlzLml0ZW0gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoaXMgaXMgZmlyZWQgQUZURVIgdGhlIGl0ZW0gY2hhbmdlcyxcclxuICAgIC8vIGFuZCBvbmx5IGlmIHRoZSBpdGVtIGNoYW5nZXMgZnJvbSBUSElTIGNvbnRyb2wsIG5vdCBmcm9tIGV4dGVybmFsIHNvdXJjZVxyXG4gICAgcHVibGljIF9jaGFuZ2VkKGV2LCBpbmRleCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTnVtYmVyICYmIHRoaXMuaXNQb3NpdGl2ZVxyXG4gICAgICAgICAgICAmJiB0aGlzLml0ZW0gIT0gbnVsbCAmJiB0aGlzLml0ZW0gIT09IFwiXCIgJiYgdGhpcy5pdGVtLmluZGV4T2YoXCItXCIpID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtID0gdGhpcy5pdGVtLnJlcGxhY2UoXCItXCIsIFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCAmJiB0aGlzLmlzRGF0ZSAgJiYgdHlwZW9mIHRoaXMuaXRlbS5nZXRNb250aCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgdGhpcy5pdGVtID0gKHRoaXMuaXRlbS5nZXRNb250aCgpICsgMSkgKyAnLycgKyB0aGlzLml0ZW0uZ2V0RGF0ZSgpICsgJy8nICsgIHRoaXMuaXRlbS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jaGFuZ2luZykgeyB0aGlzLmNoYW5naW5nKHtcclxuICAgICAgICAgICAgZXZlbnQ6IGV2LFxyXG4gICAgICAgICAgICBpdGVtOiB0aGlzLml0ZW0sXHJcbiAgICAgICAgfSk7IH1cclxuXHJcbiAgICAgICAgdGhpcy50YXNrUXVldWUucXVldWVNaWNyb1Rhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGFuZ2UpIHsgdGhpcy5jaGFuZ2UoKTsgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWZhdWx0VmFsaWRhdGUoYXJncyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIHdlIGFyZSBvbmx5IHZhbGlkYXRpbmcgdGhhdCB0aGVyZSBpcyBhbiBpdGVtLCBhbmQgaXQgaXMgbG9uZ2VyIHRoYW4gXCJcIlxyXG4gICAgICAgIHJldHVybiBhcmdzLml0ZW0gIT0gbnVsbCAmJiBhcmdzLml0ZW0gIT09IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRldGFjaGVkKCkge1xyXG4gICAgICAgIEVsZW1lbnRVdGlsLmRldGFjaGVkKHRoaXMuY29tbW9uLCB0aGlzLmZvcm1OYW1lLCB0aGlzLnJlcXVpcmVkLCB0aGlzLl9jbGVhciwgdGhpcy5fbXlWYWxpZGF0b3IpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/typeahead',["require", "exports", "aurelia-framework", "../../resources/data", "../common", "./common/element-util"], function (require, exports, aurelia_framework_1, data_1, common_1, element_util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ATypeahead = (function () {
        function ATypeahead(common, taskQueue, data) {
            var _this = this;
            this.hasOtherText = "Company not found, use this name";
            this.hasOtherValue = null;
            this.hasOtherLabel = null;
            this.btnClass = "btn-secondary";
            this.disabled = false;
            this.placeholder = "Type to search";
            this.warningMsg = "Warning";
            this.isWarning = false;
            this.required = false;
            this.errorMsg = "This field is required";
            this.isValid = true;
            this.isOverrideInvalid = false;
            this.defaultresults = [];
            this.showInlineHelp = false;
            this.showInlineHelpLink = false;
            this.inlineHelpMsg = "Bind Help Text HERE";
            this.inlineHelpMsgAfterLink = ".";
            this.inlineHelpLinkText = "More";
            this.inlineHelpLink = "http://www.google.com";
            this.formName = "default";
            this._isSelected = false;
            this._selection = null;
            this.testList = ["you", "should", "bind", "something", "to", "source"];
            this.query = "";
            this.results = [];
            this._maxResults = 5;
            this.common = common;
            this.taskQueue = taskQueue;
            this.data = data;
            this._validate = this.defaultValidate;
            this._clear = function (onlyClearValidation) {
                if (_this.addingOther) {
                    _this.addingOther = false;
                }
                _this.isValid = true;
                if (!onlyClearValidation) {
                    _this.selected = null;
                }
            };
            this._myValidator = function () {
                if (_this.required && element_util_1.default.isVisible(_this._formGroup)) {
                    _this.isValid = _this._validate({ item: _this.selected });
                }
                return _this.isValid;
            };
        }
        ATypeahead.prototype.addNew = function () {
            if (this.addNewCallback) {
                this.addNewCallback();
            }
        };
        ATypeahead.prototype.defaultSelection = function () {
            var selectionPropertySplit = this.selectionProperty ? this.selectionProperty.split(".") : [this.selectionProperty];
            if (selectionPropertySplit.length > 1) {
                return this.selectionProperty ? this.selected[selectionPropertySplit[0]][selectionPropertySplit[1]] : this.parseForString(this.selected);
            }
            else {
                return this.selectionProperty ? this.selected[this.selectionProperty] : this.parseForString(this.selected);
            }
        };
        ATypeahead.prototype.attached = function () {
            element_util_1.default.attached(this.common, this.formName, this.required, this._clear, this._myValidator);
            if (!this.template) {
                this.template = this.defaultTemplate;
            }
            if (!this.source) {
                this.source = this.testList;
            }
            if (!this.selection) {
                this.selection = this.defaultSelection;
            }
            if (this.selected) {
                this.selectedChanged(this.selected, null);
            }
            if (this.hasOtherSelected) {
                this.selectingOther();
            }
        };
        ATypeahead.prototype.defaultValidate = function (args) {
            return args.item != null;
        };
        ATypeahead.prototype.clearSelection = function () {
            if (this.addingOther) {
                this.addingOther = false;
            }
            this._isSelected = false;
            this._selection = "";
            this.selected = null;
            this.clearOther();
            this._changed("Cleared");
        };
        ATypeahead.prototype.clearOther = function () {
            this.hasOtherSelected = false;
            this.hasOtherValue = null;
        };
        ATypeahead.prototype._queryChanged = function (ev) {
            if (this.selected) {
                this.selected = null;
            }
            if (this.amISearching()) {
                if (this.select) {
                    this.queryResults(this.select, this.query);
                }
                else {
                    this.queryCallback(this.defaultFilter(this.query));
                }
            }
            else {
                this.isOpen = false;
                if (this.required && element_util_1.default.isVisible(this._formGroup)) {
                    this.isValid = this._validate({ item: this.selected });
                }
            }
        };
        ATypeahead.prototype.queryResults = function (select, query) {
            var _this = this;
            var sel = "SELECT " + select.fields;
            if (select.extended) {
                sel += " " + select.extended;
            }
            sel += " FROM " + select.object;
            var terms = query.split(" ");
            for (var k = 0; k < select.searchField.length; k++) {
                sel += k == 0 ? " WHERE ((" : " OR (";
                for (var i = 0; i < terms.length; i++) {
                    sel += i == 0 ? "" : " AND ";
                    sel += select.searchField[k] + " LIKE '%" + terms[i] + "%'";
                }
                sel += k + 1 == select.searchField.length ? "))" : ")";
            }
            if (select.additionalWhere) {
                sel += select.additionalWhere;
            }
            if (select.limit) {
                sel += " LIMIT " + select.limit;
            }
            this.data.sforceQuery(sel)
                .then(function (result) {
                if (result.records) {
                    if (result.records.length) {
                        _this.queryCallback(result.records);
                    }
                    else {
                        _this.queryCallback([result.records]);
                    }
                }
                else {
                    _this.queryCallback([]);
                }
            }).catch(this.common.errorHandler);
        };
        ATypeahead.prototype.selectedChanged = function (newValue, oldValue) {
            if (newValue !== oldValue) {
                if (newValue == null) {
                    this.clearSelection();
                }
                else {
                    this.query = "";
                    this._isSelected = true;
                    if (this.selection) {
                        this._selection = this.selection();
                    }
                    if (this.required && element_util_1.default.isVisible(this._formGroup)) {
                        this.isValid = this._validate({ item: this.selected });
                    }
                }
            }
        };
        ATypeahead.prototype._changed = function (ev) {
            var _this = this;
            if (this.changing) {
                this.changing({
                    event: ev,
                    item: this.selected,
                });
            }
            this.taskQueue.queueMicroTask(function () {
                if (_this.change) {
                    _this.change();
                }
            });
        };
        ATypeahead.prototype.queryCallback = function (res) {
            this.clearArray(this.results);
            var regEx = new RegExp("(" + this.query + ")(?!([^<]+)?>)", "gi");
            for (var i = 0; i < res.length; i++) {
                this.results.push({
                    html: this.template(res[i], i),
                    item: res[i],
                });
            }
            if (this.hasOther || res.length > 0) {
                this.isOpen = true;
            }
        };
        ATypeahead.prototype.show = function () {
            this._input.focus();
        };
        ATypeahead.prototype._focusFunc = function (ev) {
            if (this.amISearching() && this.results && (this.hasOther || this.results.length > 0)) {
                this.isOpen = true;
            }
            else if (!this.amISearching() && this.defaultresults && this.defaultresults.length > 0) {
                this.queryCallback(this.defaultresults);
            }
        };
        ATypeahead.prototype._blurFunc = function (ev) {
            this.isOpen = false;
        };
        ATypeahead.prototype.selectingFunc = function (ev, res) {
            var areDifferent = (this.selected !== res.item);
            this.selected = res.item;
            var selectionPropertySplit = this.selectionProperty ? this.selectionProperty.split(".") : [this.selectionProperty];
            if (selectionPropertySplit.length > 1) {
                this.query = this.selectionProperty ? this.selected[selectionPropertySplit[0]][selectionPropertySplit[1]] : this.parseForString(res.html);
            }
            else {
                this.query = this.selectionProperty ? this.selected[this.selectionProperty] : this.parseForString(res.html);
            }
            this._changed("Selected");
            this.queryCallback(this.defaultFilter(this.query));
            if (this.required && element_util_1.default.isVisible(this._formGroup) && areDifferent) {
                this.isValid = this._validate({ item: this.selected });
            }
            return true;
        };
        ATypeahead.prototype.selectingOther = function () {
            this.addingOther = true;
            if (this.query != "") {
                this.hasOtherValue = this.query;
            }
            this.query = "";
            this._isSelected = true;
            this.isOpen = false;
            this.hasOtherSelected = true;
        };
        ATypeahead.prototype.defaultFilter = function (query) {
            var res = [];
            if (this.source) {
                for (var i = 0; i < this.source.length; i++) {
                    var obj = this.source[i];
                    if (this.filter) {
                        if (this.filter(obj, query)) {
                            res.push(obj);
                        }
                    }
                    else {
                        if (obj.toLowerCase().indexOf(query.toLowerCase()) > -1) {
                            res.push(obj);
                        }
                    }
                    if (res.length > this._maxResults) {
                        break;
                    }
                }
            }
            return res;
        };
        ATypeahead.prototype.highlightVisibleMatches = function (html, regEx) {
            html = html.replace(regEx, "<span class=\"tt-highlight\">$1</span>");
            return html;
        };
        ATypeahead.prototype.defaultTemplate = function (data, i) {
            return "<div id=\"listbox-option-unique-id-" + i + "\" class=\"slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta\" role=\"option\"><span class=\"slds-media__body\"><span class=\"slds-listbox__option-text slds-listbox__option-text_entity\">" + data.Name + "</span></span></div>";
        };
        ATypeahead.prototype.parseForString = function (html) {
            return html.replace(/<(.*?)>/g, "");
        };
        ATypeahead.prototype.amISearching = function () {
            return this.query.trim().length > 0;
        };
        ATypeahead.prototype.clearArray = function (arr) {
            for (var i = arr.length; i > 0; i--) {
                arr.pop();
            }
        };
        ATypeahead.prototype.detached = function () {
            this.query = "";
            element_util_1.default.detached(this.common, this.formName, this.required, this._clear, this._myValidator);
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Function)
        ], ATypeahead.prototype, "selection", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], ATypeahead.prototype, "selected", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Array)
        ], ATypeahead.prototype, "source", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], ATypeahead.prototype, "selectionProperty", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], ATypeahead.prototype, "hasOther", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], ATypeahead.prototype, "hasOtherText", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], ATypeahead.prototype, "hasOtherSelected", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], ATypeahead.prototype, "hasOtherValue", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], ATypeahead.prototype, "hasOtherLabel", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Function)
        ], ATypeahead.prototype, "filter", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], ATypeahead.prototype, "select", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Function)
        ], ATypeahead.prototype, "template", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], ATypeahead.prototype, "btnClass", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], ATypeahead.prototype, "disabled", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], ATypeahead.prototype, "label", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], ATypeahead.prototype, "pre", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], ATypeahead.prototype, "instructions", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], ATypeahead.prototype, "placeholder", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], ATypeahead.prototype, "warningMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], ATypeahead.prototype, "isWarning", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], ATypeahead.prototype, "required", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], ATypeahead.prototype, "errorMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], ATypeahead.prototype, "isValid", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], ATypeahead.prototype, "isOverrideInvalid", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], ATypeahead.prototype, "selectedrecordicon", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Array)
        ], ATypeahead.prototype, "defaultresults", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], ATypeahead.prototype, "showInlineHelp", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], ATypeahead.prototype, "showInlineHelpLink", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], ATypeahead.prototype, "inlineHelpMsg", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], ATypeahead.prototype, "inlineHelpMsgAfterLink", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], ATypeahead.prototype, "inlineHelpLinkText", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], ATypeahead.prototype, "inlineHelpLink", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], ATypeahead.prototype, "formName", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], ATypeahead.prototype, "changing", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], ATypeahead.prototype, "change", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], ATypeahead.prototype, "validate", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], ATypeahead.prototype, "addNewCallback", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], ATypeahead.prototype, "addingOther", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Function)
        ], ATypeahead.prototype, "isVisible", void 0);
        ATypeahead = __decorate([
            aurelia_framework_1.customElement("ce-typeahead"),
            aurelia_framework_1.autoinject(),
            __metadata("design:paramtypes", [common_1.Common, aurelia_framework_1.TaskQueue, data_1.Data])
        ], ATypeahead);
        return ATypeahead;
    }());
    exports.ATypeahead = ATypeahead;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy90eXBlYWhlYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBbUJBO1FBNkZJLG9CQUFZLE1BQWMsRUFBRSxTQUFvQixFQUFFLElBQVU7WUFBNUQsaUJBc0JDO1lBcEdnQixpQkFBWSxHQUFXLGtDQUFrQyxDQUFDO1lBRWQsa0JBQWEsR0FBVyxJQUFJLENBQUM7WUFDN0Isa0JBQWEsR0FBVyxJQUFJLENBQUM7WUE2QnpFLGFBQVEsR0FBVyxlQUFlLENBQUM7WUFFUyxhQUFRLEdBQVksS0FBSyxDQUFDO1lBSTFCLGdCQUFXLEdBQVcsZ0JBQWdCLENBQUM7WUFDdkMsZUFBVSxHQUFXLFNBQVMsQ0FBQztZQUMvQixjQUFTLEdBQVksS0FBSyxDQUFDO1lBQzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7WUFDMUIsYUFBUSxHQUFXLHdCQUF3QixDQUFDO1lBQzVDLFlBQU8sR0FBWSxJQUFJLENBQUM7WUFDeEIsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1lBRW5DLG1CQUFjLEdBQWUsRUFBRSxDQUFDO1lBQ2hDLG1CQUFjLEdBQVksS0FBSyxDQUFDO1lBQ2hDLHVCQUFrQixHQUFZLEtBQUssQ0FBQztZQUNwQyxrQkFBYSxHQUFXLHFCQUFxQixDQUFDO1lBQzlDLDJCQUFzQixHQUFXLEdBQUcsQ0FBQztZQUNyQyx1QkFBa0IsR0FBVyxNQUFNLENBQUM7WUFDcEMsbUJBQWMsR0FBVyx1QkFBdUIsQ0FBQztZQUU3RixhQUFRLEdBQVcsU0FBUyxDQUFDO1lBWXRDLGdCQUFXLEdBQVksS0FBSyxDQUFDO1lBQzdCLGVBQVUsR0FBUSxJQUFJLENBQUM7WUFDdkIsYUFBUSxHQUFhLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUU1RSxVQUFLLEdBQVcsRUFBRSxDQUFDO1lBQ25CLFlBQU8sR0FBZSxFQUFFLENBQUM7WUFDekIsZ0JBQVcs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LENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOzs4REFBNEM7UUFDM0M7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7O3lEQUFzRDtRQUNyRDtZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7a0VBQTZDO1FBQzVDO1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOzs4REFBNEM7UUFDM0M7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7OzBEQUF5RDtRQUVwRztZQUFULDRCQUFROztvREFBcUM7UUFDcEM7WUFBVCw0QkFBUTtzQ0FBa0IsUUFBUTtvREFBQztRQUMxQjtZQUFULDRCQUFRO3NDQUFnQixRQUFRO2tEQUFDO1FBQ3hCO1lBQVQsNEJBQVE7c0NBQWtCLFFBQVE7b0RBQUM7UUFDMUI7WUFBVCw0QkFBUTtzQ0FBd0IsUUFBUTswREFBQztRQUNZO1lBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOzt1REFBNkI7UUFDNUI7WUFBckQsNEJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLCtCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7c0NBQW1CLFFBQVE7cURBQUM7UUEzRXhFLFVBQVU7WUFGdEIsaUNBQWEsQ0FBQyxjQUFjLENBQUM7WUFDN0IsOEJBQVUsRUFBRTs2Q0E4RlcsZUFBTSxFQUFhLDZCQUFTLEVBQVEsV0FBSTtXQTdGbkQsVUFBVSxDQTJZdEI7UUFBRCxpQkFBQztLQTNZRCxBQTJZQyxJQUFBO0lBM1lZLGdDQUFVIiwiZmlsZSI6InJlc291cmNlcy9lbGVtZW50cy90eXBlYWhlYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgYXV0b2luamVjdCwgYmluZGFibGUsIGJpbmRpbmdNb2RlLCBjdXN0b21FbGVtZW50LCBUYXNrUXVldWUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvZGF0YVwiO1xyXG5pbXBvcnQgeyBDb21tb24gfSBmcm9tIFwiLi4vY29tbW9uXCI7XHJcbmltcG9ydCBFbGVtZW50VXRpbCBmcm9tIFwiLi9jb21tb24vZWxlbWVudC11dGlsXCI7XHJcblxyXG4vLyBpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgYXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG4vLyBpbXBvcnQgeyBCYXNlRWxlbWVudCB9IGZyb20gXCIuL2EtYmFzZVwiO1xyXG4vKlxyXG4gIFRoaXMgaXMgYSB0eXBlYWhlYWQuXHJcbiAgV2hhdCBkb2VzIHRoaXMgZWxlbWVudCBkbz9cclxuICAxLiAgUHJvdmlkZSBhbiBpbnB1dC5cclxuICAyLiAgUHJvdmlkZSBhIGJpbmRhYmxlIHNlbGVjdGVkIG9iamVjdC9zdHJpbmcgZm9yIGhvbGRpbmcgdGhlIHNlbGVjdGVkIGl0ZW0uXHJcbiAgMy4gIFdoZW4gYSB1c2VyIHR5cGVzLCBhIGRhdGEgc2V0IGlzIHNlYXJjaGVkIGZvciB0aGF0IHNlYXJjaCB0ZXh0LiAgIElmIGZvdW5kLCB0aGUgcmVzdWx0cyB3aWxsIGRpc3BsYXkgaW4gYSBkcm9wIGRvd24gbGlzdCB3aXRoIG1hdGNoZWQgdGV4dCBoaWdobGlnaHRlZC5cclxuICA0LiAgSWYgYSB1c2VyIGNsZWFycyB0aGUgdGV4dCBib3gsIHRoZW4gdGhlIHNlbGVjdGVkIGl0ZW0gc2hvdWxkIGNsZWFyLlxyXG4gIFRPRE86IEV4cGFuZCB0byBzdXBwb3J0IGEgSFRUUCBzZWFyY2hcclxuKi9cclxuQGN1c3RvbUVsZW1lbnQoXCJjZS10eXBlYWhlYWRcIilcclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgQVR5cGVhaGVhZCB7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgc2VsZWN0aW9uOiBGdW5jdGlvbjtcclxuXHJcbiAgICAvKiogQHBhcmFtIHNlbGVjdGVkIC0gd2lsbCBiZSBzZXQgdG8gdGhlIHNlbGVjdGVkIGl0ZW0gKG9iamVjdCBvciBzdHJpbmcpICovXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgc2VsZWN0ZWQ6IGFueTtcclxuICAgIC8qKiBAcGFyYW0gY2hhbmdlLmRlbGVnYXRlIC0gb3B0aW9uYWwgY2FsbGJhY2sgd2hlbiBpdGVtIHNlbGVjdGVkICovXHJcblxyXG4gICAgLyoqIEBwYXJhbSBzb3VyY2UgLSBzb3VyY2UgZm9yIHRoZSBzZWFyY2gsIHNob3VsZCBiZSBBcnJheSBvZiBvYmplY3Qgb3Igc3RyaW5nICovXHJcbiAgICBAYmluZGFibGUgcHVibGljIHNvdXJjZTogQXJyYXk8YW55PjtcclxuICAgIC8qKiBAcGFyYW0gc2VsZWN0aW9uUHJvcGVydHkgLSBzb3VuY2UgZm9yIHRoZSBpbnB1dCBzdHJpbmcgYWZ0ZXIgc2VsZWN0ZWQgKi9cclxuICAgIEBiaW5kYWJsZSBwdWJsaWMgc2VsZWN0aW9uUHJvcGVydHk6IHN0cmluZztcclxuXHJcbiAgICAvLyBPdGhlciBvcHRpb25zXHJcbiAgICAvLyBAYmluZGFibGUgcHVibGljIGhhc090aGVyOiBzdHJpbmc7XHJcbiAgICBAYmluZGFibGUgcHVibGljIGhhc090aGVyOiBib29sZWFuO1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyBoYXNPdGhlclRleHQ6IHN0cmluZyA9IFwiQ29tcGFueSBub3QgZm91bmQsIHVzZSB0aGlzIG5hbWVcIjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBoYXNPdGhlclNlbGVjdGVkOiBib29sZWFuO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGhhc090aGVyVmFsdWU6IHN0cmluZyA9IG51bGw7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaGFzT3RoZXJMYWJlbDogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBmaWx0ZXIgc2hvdWxkIHJldHVybiBhIGJvb2wsIGl0IGlzIHJ1biBvbmNlIHBlciBpdGVtOlxyXG4gICAgICogZnVuY3Rpb24ob2JqLCBxdWVyeSkge1xyXG4gICAgICogICBpZihvYmoucHJvcC5pbmRleE9mKHF1ZXJ5KSA+IC0xICkgcmV0dXJuIHRydWU7XHJcbiAgICAgKiAgIHJldHVybiBmYWxzZTtcclxuICAgICAqIH1cclxuICAgICAqL1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGZpbHRlcjogRnVuY3Rpb247XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VsZWN0IHNob3VsZCBiZSBhbiBvYmplY3Q6XHJcbiAgICAgKiB7IFxyXG4gICAgICogZmllbGRzOiBcIklkLCBOYW1lXCJcclxuICAgICAqIGV4dGVuZGVkOiBcIihTZWxlY3QgU3ViUXVlcnkpXCIgLSBvcHRpb25hbFxyXG4gICAgICogb2JqZWN0OiBcIkFjY291bnRfX2NcIlxyXG4gICAgICogc2VhcmNoRmllbGQ6IFtcIklkXCIsIFwiTmFtZVwiXVxyXG4gICAgICogbGltaXQ6IDE1XHJcbiAgICAgKiB9XHJcbiAgICAgKi9cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBzZWxlY3Q7XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIC8qKiBAcGFyYW0gdGVtcGxhdGUgLSB0YWtlcyBpdGVtIG9iaiBvciBzdHJpbmcsIHNob3VsZCByZXR1cm4gaHRtbCBmb3IgZHJvcGRvd24gbGlzdCBpdGVtICovXHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgdGVtcGxhdGU6IEZ1bmN0aW9uO1xyXG5cclxuICAgIEBiaW5kYWJsZSBwdWJsaWMgYnRuQ2xhc3M6IHN0cmluZyA9IFwiYnRuLXNlY29uZGFyeVwiOyAvLyBvciBidG4tcHJpbWFyeVxyXG5cclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgcHJlOiBzdHJpbmc7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgaW5zdHJ1Y3Rpb25zOiBzdHJpbmc7XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9IFwiVHlwZSB0byBzZWFyY2hcIjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyB3YXJuaW5nTXNnOiBzdHJpbmcgPSBcIldhcm5pbmdcIjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpc1dhcm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGVycm9yTXNnOiBzdHJpbmcgPSBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpc1ZhbGlkOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpc092ZXJyaWRlSW52YWxpZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIHNlbGVjdGVkcmVjb3JkaWNvbjogc3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGRlZmF1bHRyZXN1bHRzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheSB9KSBwdWJsaWMgc2hvd0lubGluZUhlbHA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBzaG93SW5saW5lSGVscExpbms6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpbmxpbmVIZWxwTXNnOiBzdHJpbmcgPSBcIkJpbmQgSGVscCBUZXh0IEhFUkVcIjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpbmxpbmVIZWxwTXNnQWZ0ZXJMaW5rOiBzdHJpbmcgPSBcIi5cIjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpbmxpbmVIZWxwTGlua1RleHQ6IHN0cmluZyA9IFwiTW9yZVwiO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgcHVibGljIGlubGluZUhlbHBMaW5rOiBzdHJpbmcgPSBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbVwiO1xyXG4gICAgXHJcbiAgICBAYmluZGFibGUgcHVibGljIGZvcm1OYW1lOiBzdHJpbmcgPSBcImRlZmF1bHRcIjtcclxuICAgIEBiaW5kYWJsZSBwdWJsaWMgY2hhbmdpbmc6IEZ1bmN0aW9uO1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyBjaGFuZ2U6IEZ1bmN0aW9uO1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyB2YWxpZGF0ZTogRnVuY3Rpb247XHJcbiAgICBAYmluZGFibGUgcHVibGljIGFkZE5ld0NhbGxiYWNrOiBGdW5jdGlvbjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBhZGRpbmdPdGhlcjogYm9vbGVhbjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5IH0pIHB1YmxpYyBpc1Zpc2libGU6IEZ1bmN0aW9uO1xyXG4gXHJcbiAgICBwdWJsaWMgY29tbW9uOiBDb21tb247XHJcbiAgICBwdWJsaWMgZGF0YTogRGF0YTtcclxuICAgIHB1YmxpYyB0YXNrUXVldWU6IFRhc2tRdWV1ZTtcclxuICAgIHByaXZhdGUgX2lucHV0OiBhbnk7IC8vIHJlZlxyXG4gICAgcHJpdmF0ZSBfaXNTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfc2VsZWN0aW9uOiBhbnkgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB0ZXN0TGlzdDogc3RyaW5nW10gPSBbXCJ5b3VcIiwgXCJzaG91bGRcIiwgXCJiaW5kXCIsIFwic29tZXRoaW5nXCIsIFwidG9cIiwgXCJzb3VyY2VcIl07XHJcbiAgICBwcml2YXRlIGlzT3BlbjogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgcXVlcnk6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIHJlc3VsdHM6IEFycmF5PGFueT4gPSBbXTtcclxuICAgIHByaXZhdGUgX21heFJlc3VsdHM6IG51bWJlciA9IDU7XHJcbiAgICBwcml2YXRlIF92YWxpZGF0ZTogRnVuY3Rpb247XHJcbiAgICBwcml2YXRlIF9jbGVhcjogRnVuY3Rpb247XHJcbiAgICBwcml2YXRlIF9teVZhbGlkYXRvcjogRnVuY3Rpb247XHJcbiAgICBwcml2YXRlIF9mb3JtR3JvdXA6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb21tb246IENvbW1vbiwgdGFza1F1ZXVlOiBUYXNrUXVldWUsIGRhdGE6IERhdGEpIHtcclxuICAgICAgICB0aGlzLmNvbW1vbiA9IGNvbW1vbjtcclxuICAgICAgICB0aGlzLnRhc2tRdWV1ZSA9IHRhc2tRdWV1ZTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG5cclxuICAgICAgICB0aGlzLl92YWxpZGF0ZSA9IHRoaXMuZGVmYXVsdFZhbGlkYXRlO1xyXG4gICAgICAgIC8vIGNsZWFyIGlzIGNhbGxlZCBieSB0aGVcclxuICAgICAgICB0aGlzLl9jbGVhciA9IChvbmx5Q2xlYXJWYWxpZGF0aW9uOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFkZGluZ090aGVyKSB7IHRoaXMuYWRkaW5nT3RoZXIgPSBmYWxzZTsgfVxyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoIW9ubHlDbGVhclZhbGlkYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5fYmxvY2tJdGVtQ2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl9teVZhbGlkYXRvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgRWxlbWVudFV0aWwuaXNWaXNpYmxlKHRoaXMuX2Zvcm1Hcm91cCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRoaXMuX3ZhbGlkYXRlKHsgaXRlbTogdGhpcy5zZWxlY3RlZCB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZE5ldygpIHtcclxuICAgICAgICBpZiAodGhpcy5hZGROZXdDYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLmFkZE5ld0NhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWZhdWx0U2VsZWN0aW9uKCkge1xyXG4gICAgICAgIGxldCBzZWxlY3Rpb25Qcm9wZXJ0eVNwbGl0OiBBcnJheTxhbnk+ID0gdGhpcy5zZWxlY3Rpb25Qcm9wZXJ0eSA/IHRoaXMuc2VsZWN0aW9uUHJvcGVydHkuc3BsaXQoXCIuXCIpIDogW3RoaXMuc2VsZWN0aW9uUHJvcGVydHldO1xyXG4gICAgICAgIGlmKHNlbGVjdGlvblByb3BlcnR5U3BsaXQubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25Qcm9wZXJ0eSA/IHRoaXMuc2VsZWN0ZWRbc2VsZWN0aW9uUHJvcGVydHlTcGxpdFswXV1bc2VsZWN0aW9uUHJvcGVydHlTcGxpdFsxXV0gOiB0aGlzLnBhcnNlRm9yU3RyaW5nKHRoaXMuc2VsZWN0ZWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvblByb3BlcnR5ID8gdGhpcy5zZWxlY3RlZFt0aGlzLnNlbGVjdGlvblByb3BlcnR5XSA6IHRoaXMucGFyc2VGb3JTdHJpbmcodGhpcy5zZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hlZCgpIHtcclxuICAgICAgICBFbGVtZW50VXRpbC5hdHRhY2hlZCh0aGlzLmNvbW1vbiwgdGhpcy5mb3JtTmFtZSwgdGhpcy5yZXF1aXJlZCwgdGhpcy5fY2xlYXIsIHRoaXMuX215VmFsaWRhdG9yKTtcclxuXHJcbiAgICAgICAgLyoqIE9uIGF0dGFjaGVkLCB3ZSB3aWxsIGhhdmUgYWNjZXNzIHRvIHRoZSBiaW5kYWJsZWQgcHJvcGVydGllcyBpZiB3ZSBhcmUgaWYuYmluZCBvbiB0aGUgZWxlbWVudCBzbyBpdCBpcyBjcmVhdGVkIGFuZCBkZXN0cm95ZWQgKi9cclxuICAgICAgICBpZiAoIXRoaXMudGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuZGVmYXVsdFRlbXBsYXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnNvdXJjZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IHRoaXMudGVzdExpc3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdGhpcy5kZWZhdWx0U2VsZWN0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENoYW5nZWQodGhpcy5zZWxlY3RlZCwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmhhc090aGVyU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RpbmdPdGhlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVmYXVsdFZhbGlkYXRlKGFyZ3MpIHtcclxuICAgICAgICAvLyB3ZSBhcmUgb25seSB2YWxpZGF0aW5nIHRoYXQgdGhlcmUgaXMgYW4gaXRlbSwgYW5kIGl0IGlzIGxvbmdlciB0aGFuIFwiXCJcclxuICAgICAgICByZXR1cm4gYXJncy5pdGVtICE9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyU2VsZWN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkZGluZ090aGVyKSB7IHRoaXMuYWRkaW5nT3RoZXIgPSBmYWxzZTsgfVxyXG4gICAgICAgIHRoaXMuX2lzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9zZWxlY3Rpb24gPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY2xlYXJPdGhlcigpO1xyXG4gICAgICAgIHRoaXMuX2NoYW5nZWQoXCJDbGVhcmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhck90aGVyKCkge1xyXG4gICAgICAgIHRoaXMuaGFzT3RoZXJTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaGFzT3RoZXJWYWx1ZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIF9xdWVyeUNoYW5nZWQoZXYpIHtcclxuICAgICAgICAvLyBkdWRlIHlvdXIgc2VsZWN0aW9uIGlzIGNsZWFyZWQgbm93LlxyXG5cclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFtSVNlYXJjaGluZygpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVyeVJlc3VsdHModGhpcy5zZWxlY3QsIHRoaXMucXVlcnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVyeUNhbGxiYWNrKHRoaXMuZGVmYXVsdEZpbHRlcih0aGlzLnF1ZXJ5KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZXF1aXJlZCAmJiBFbGVtZW50VXRpbC5pc1Zpc2libGUodGhpcy5fZm9ybUdyb3VwKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5fdmFsaWRhdGUoeyBpdGVtOiB0aGlzLnNlbGVjdGVkIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VsZWN0IHNob3VsZCBiZSBhbiBvYmplY3Q6XHJcbiAgICAgKiB7IFxyXG4gICAgICogZmllbGRzOiBcIklkLCBOYW1lXCJcclxuICAgICAqIGV4dGVuZGVkOiBcIihTZWxlY3QgU3ViUXVlcnkpXCIgLSBvcHRpb25hbFxyXG4gICAgICogb2JqZWN0OiBcIkFjY291bnRfX2NcIlxyXG4gICAgICogc2VhcmNoRmllbGQ6IFtcIklkXCIsIFwiTmFtZVwiXVxyXG4gICAgICogbGltaXQ6IDE1XHJcbiAgICAgKiB9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBxdWVyeVJlc3VsdHMoc2VsZWN0OiBhbnksIHF1ZXJ5KSB7XHJcbiAgICAgICAgLy9CdWlsZCBxdWVyeVxyXG4gICAgICAgIGxldCBzZWw6IHN0cmluZyA9IFwiU0VMRUNUIFwiICsgc2VsZWN0LmZpZWxkcztcclxuICAgICAgICBpZihzZWxlY3QuZXh0ZW5kZWQpIHsgc2VsICs9IFwiIFwiICsgc2VsZWN0LmV4dGVuZGVkOyB9XHJcbiAgICAgICAgc2VsICs9IFwiIEZST00gXCIgKyBzZWxlY3Qub2JqZWN0O1xyXG5cclxuICAgICAgICBsZXQgdGVybXM6IHN0cmluZ1tdID0gcXVlcnkuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGZvcihsZXQgayA9IDA7IGsgPCBzZWxlY3Quc2VhcmNoRmllbGQubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgc2VsICs9IGsgPT0gMCA/IFwiIFdIRVJFICgoXCIgOiBcIiBPUiAoXCI7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGVybXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHNlbCArPSBpID09IDAgPyBcIlwiIDogXCIgQU5EIFwiO1xyXG4gICAgICAgICAgICAgICAgc2VsICs9IHNlbGVjdC5zZWFyY2hGaWVsZFtrXSArIFwiIExJS0UgJyVcIiArIHRlcm1zW2ldICsgXCIlJ1wiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZWwgKz0gaysxID09IHNlbGVjdC5zZWFyY2hGaWVsZC5sZW5ndGggPyBcIikpXCIgOiBcIilcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHNlbGVjdC5hZGRpdGlvbmFsV2hlcmUpIHsgc2VsICs9IHNlbGVjdC5hZGRpdGlvbmFsV2hlcmU7ICB9XHJcblxyXG4gICAgICAgIGlmKHNlbGVjdC5saW1pdCkgeyBzZWwgKz0gXCIgTElNSVQgXCIgKyBzZWxlY3QubGltaXQ7IH1cclxuXHJcbiAgICAgICAgdGhpcy5kYXRhLnNmb3JjZVF1ZXJ5KHNlbClcclxuICAgICAgICAudGhlbigocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgLy9TYWxlc2ZvcmNlIGlzIGZ1Y2tpbmcgYnJpbGxpYW50LCBpZiB0aGlzIG9ubHkgcmV0cmlldmVzIDEgcmVjb3JkLCB0aGV5IGRvbid0IG1ha2UgaXQgYW55IGFycmF5LlxyXG4gICAgICAgICAgICBpZihyZXN1bHQucmVjb3Jkcykge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0LnJlY29yZHMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXJ5Q2FsbGJhY2socmVzdWx0LnJlY29yZHMpO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZWxzZSB7IC8vaWYgbm90LCBtYWtlIGl0IGFuIGFycmF5Li4uIEkgbWVhbiBpdHMgY2FsbGVkIHJlY29yZFM/XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWVyeUNhbGxiYWNrKFtyZXN1bHQucmVjb3Jkc10pO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXJ5Q2FsbGJhY2soW10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2godGhpcy5jb21tb24uZXJyb3JIYW5kbGVyKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZWxlY3RlZENoYW5nZWQobmV3VmFsdWU6IGFueSwgb2xkVmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlcnkgPSBcIlwiOyAgLy8gY2xlYXIgcXVlcnlcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzU2VsZWN0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbikgeyB0aGlzLl9zZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbigpOyB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgRWxlbWVudFV0aWwuaXNWaXNpYmxlKHRoaXMuX2Zvcm1Hcm91cCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0aGlzLl92YWxpZGF0ZSh7IGl0ZW06IHRoaXMuc2VsZWN0ZWQgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIF9jaGFuZ2VkKGV2KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbmdpbmcpIHsgdGhpcy5jaGFuZ2luZyh7XHJcbiAgICAgICAgICAgIGV2ZW50OiBldixcclxuICAgICAgICAgICAgaXRlbTogdGhpcy5zZWxlY3RlZCxcclxuICAgICAgICB9KTsgfVxyXG4gICAgICAgIHRoaXMudGFza1F1ZXVlLnF1ZXVlTWljcm9UYXNrKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hhbmdlKSB7IHRoaXMuY2hhbmdlKCk7IH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcXVlcnlDYWxsYmFjayhyZXMpIHtcclxuICAgICAgICB0aGlzLmNsZWFyQXJyYXkodGhpcy5yZXN1bHRzKTsgLy8gY2xlYXIgYXJyYXlcclxuICAgICAgICBsZXQgcmVnRXggPSBuZXcgUmVnRXhwKFwiKFwiICsgdGhpcy5xdWVyeSArIFwiKSg/IShbXjxdKyk/PilcIiwgXCJnaVwiKTsgIC8vIGNvbXBpbGUgb25jZSBmb3IgYWxsIHRoZSBsb29wLlxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIC8vIGh0bWw6IHRoaXMuaGlnaGxpZ2h0VmlzaWJsZU1hdGNoZXModGhpcy50ZW1wbGF0ZShyZXNbaV0sIGkpLCByZWdFeCksXHJcbiAgICAgICAgICAgICAgICBodG1sOiB0aGlzLnRlbXBsYXRlKHJlc1tpXSwgaSksXHJcbiAgICAgICAgICAgICAgICBpdGVtOiByZXNbaV0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaGFzT3RoZXIgfHwgcmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzaG93KCkgeyAvLyBvbiBidXR0b24gY2xpY2tcclxuICAgICAgICB0aGlzLl9pbnB1dC5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBfZm9jdXNGdW5jKGV2KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW1JU2VhcmNoaW5nKCkgJiYgdGhpcy5yZXN1bHRzICYmICh0aGlzLmhhc090aGVyIHx8IHRoaXMucmVzdWx0cy5sZW5ndGggPiAwKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmKCF0aGlzLmFtSVNlYXJjaGluZygpICYmIHRoaXMuZGVmYXVsdHJlc3VsdHMgJiYgdGhpcy5kZWZhdWx0cmVzdWx0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIFNldCB0aGUgZGVmYXVsdCBsaXN0IGl0ZW1zIHRvIHRoZSBCb3VuZCBkZWZhdWx0IGF2YWlsYWJsZSByZXN1bHRzXHJcbiAgICAgICAgICAgIHRoaXMucXVlcnlDYWxsYmFjayh0aGlzLmRlZmF1bHRyZXN1bHRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIF9ibHVyRnVuYyhldikge1xyXG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGVjdGluZ0Z1bmMoZXYsIHJlcykge1xyXG4gICAgICAgIGNvbnN0IGFyZURpZmZlcmVudCA9ICh0aGlzLnNlbGVjdGVkICE9PSByZXMuaXRlbSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHJlcy5pdGVtO1xyXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBTZWxlY3Rpb24gUHJvcGVydHkgaXMgYSBsZXZlbCBkb3duXHJcbiAgICAgICAgbGV0IHNlbGVjdGlvblByb3BlcnR5U3BsaXQ6IEFycmF5PGFueT4gPSB0aGlzLnNlbGVjdGlvblByb3BlcnR5ID8gdGhpcy5zZWxlY3Rpb25Qcm9wZXJ0eS5zcGxpdChcIi5cIikgOiBbdGhpcy5zZWxlY3Rpb25Qcm9wZXJ0eV07XHJcbiAgICAgICAgaWYoc2VsZWN0aW9uUHJvcGVydHlTcGxpdC5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVlcnkgPSB0aGlzLnNlbGVjdGlvblByb3BlcnR5ID8gdGhpcy5zZWxlY3RlZFtzZWxlY3Rpb25Qcm9wZXJ0eVNwbGl0WzBdXVtzZWxlY3Rpb25Qcm9wZXJ0eVNwbGl0WzFdXSA6IHRoaXMucGFyc2VGb3JTdHJpbmcocmVzLmh0bWwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVlcnkgPSB0aGlzLnNlbGVjdGlvblByb3BlcnR5ID8gdGhpcy5zZWxlY3RlZFt0aGlzLnNlbGVjdGlvblByb3BlcnR5XSA6IHRoaXMucGFyc2VGb3JTdHJpbmcocmVzLmh0bWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jaGFuZ2VkKFwiU2VsZWN0ZWRcIik7XHJcbiAgICAgICAgLy8gZ28gYWhlYWQgYW5kIGZpbHRlciB0byB0aGlzIHNlbGVjdGlvbiBvbmx5Li4uIGJlY2F1c2UgcmVhc29ucy5cclxuICAgICAgICB0aGlzLnF1ZXJ5Q2FsbGJhY2sodGhpcy5kZWZhdWx0RmlsdGVyKHRoaXMucXVlcnkpKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgRWxlbWVudFV0aWwuaXNWaXNpYmxlKHRoaXMuX2Zvcm1Hcm91cCkgJiYgYXJlRGlmZmVyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRoaXMuX3ZhbGlkYXRlKHsgaXRlbTogdGhpcy5zZWxlY3RlZCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGVjdGluZ090aGVyKCkge1xyXG4gICAgICAgIHRoaXMuYWRkaW5nT3RoZXIgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLnF1ZXJ5ICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5oYXNPdGhlclZhbHVlID0gdGhpcy5xdWVyeTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucXVlcnkgPSBcIlwiOyAgLy8gY2xlYXIgcXVlcnlcclxuICAgICAgICB0aGlzLl9pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaGFzT3RoZXJTZWxlY3RlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGVmYXVsdCBxdWVyeSBpcyBqdXN0IGEgc3RyaW5nIG1hdGNoLlxyXG4gICAgcHVibGljIGRlZmF1bHRGaWx0ZXIocXVlcnkpIHtcclxuICAgICAgICAvLyB3aGlsZSBmaWx0ZXIgbWlnaHQgYmUgcHJldHRpZXIsIHdlIG5lZWQgdG8gbGltaXQgb3VyIG1hdGNoZXMgZm9yIHNwZWVkLlxyXG4gICAgICAgIGxldCByZXM6IEFycmF5PGFueT4gPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc291cmNlKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zb3VyY2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBvYmogPSB0aGlzLnNvdXJjZVtpXTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgY3VzdG9tIGZpbHRlciBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlcihvYmosIHF1ZXJ5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMucHVzaChvYmopO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2Ugc2hhbGwgcnVuIG91ciBvd24gZmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnkudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMucHVzaChvYmopO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyZXMubGVuZ3RoID4gdGhpcy5fbWF4UmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZ2hsaWdodFZpc2libGVNYXRjaGVzKGh0bWwsIHJlZ0V4KSB7XHJcbiAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZShyZWdFeCwgXCI8c3BhbiBjbGFzcz1cXFwidHQtaGlnaGxpZ2h0XFxcIj4kMTwvc3Bhbj5cIik7XHJcbiAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGVmYXVsdCBodG1sIGZvciBhIHJlc3VsdC5cclxuICAgIHB1YmxpYyBkZWZhdWx0VGVtcGxhdGUoZGF0YSxpKSB7XHJcbiAgICAgICAgLy8gYXNzdW1pbmcgYSBsaXN0IG9mIHN0cmluZ3MgaXMgYmVpbmcgc2VhcmNoZWQuXHJcbiAgICAgICAgLy8gcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwidHQtc3VnZ2VzdGlvbiB0dC1zZWxlY3RhYmxlXFxcIj48c3BhbiBjbGFzcz1cXFwidHQtY29udGVudFxcXCI+XCIgKyBkYXRhICsgXCI8L3NwYW4+PC9kaXY+XCI7XHJcbiAgICAgICAgcmV0dXJuIFwiPGRpdiBpZD1cXFwibGlzdGJveC1vcHRpb24tdW5pcXVlLWlkLVwiICsgaSArIFwiXFxcIiBjbGFzcz1cXFwic2xkcy1tZWRpYSBzbGRzLWxpc3Rib3hfX29wdGlvbiBzbGRzLWxpc3Rib3hfX29wdGlvbl9lbnRpdHkgc2xkcy1saXN0Ym94X19vcHRpb25faGFzLW1ldGFcXFwiIHJvbGU9XFxcIm9wdGlvblxcXCI+PHNwYW4gY2xhc3M9XFxcInNsZHMtbWVkaWFfX2JvZHlcXFwiPjxzcGFuIGNsYXNzPVxcXCJzbGRzLWxpc3Rib3hfX29wdGlvbi10ZXh0IHNsZHMtbGlzdGJveF9fb3B0aW9uLXRleHRfZW50aXR5XFxcIj5cIiArIGRhdGEuTmFtZSArIFwiPC9zcGFuPjwvc3Bhbj48L2Rpdj5cIlxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwYXJzZUZvclN0cmluZyhodG1sKSB7XHJcbiAgICAgICAgcmV0dXJuIGh0bWwucmVwbGFjZSgvPCguKj8pPi9nLCBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYW1JU2VhcmNoaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5LnRyaW0oKS5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENsZWFycyBhbGwgaXRlbXMgZnJvbSBhbiBhcnJheVxyXG4gICAgcHVibGljIGNsZWFyQXJyYXkoYXJyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGg7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICAgICAgYXJyLnBvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGV0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5xdWVyeSA9IFwiXCI7XHJcbiAgICAgICAgRWxlbWVudFV0aWwuZGV0YWNoZWQodGhpcy5jb21tb24sIHRoaXMuZm9ybU5hbWUsIHRoaXMucmVxdWlyZWQsIHRoaXMuX2NsZWFyLCB0aGlzLl9teVZhbGlkYXRvcik7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/elements/common/element-util',["require", "exports", "lodash"], function (require, exports, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ElementUtil;
    (function (ElementUtil) {
        function attached(common, formName, required, clear, myValidator) {
            if (!common.globalInputClearFunctions[formName]) {
                common.globalInputClearFunctions[formName] = [];
            }
            common.globalInputClearFunctions[formName].push(clear);
            if (required) {
                if (!common.globalValidationFunctions[formName]) {
                    common.globalValidationFunctions[formName] = [];
                }
                common.globalValidationFunctions[formName].push(myValidator);
            }
        }
        ElementUtil.attached = attached;
        function detached(common, formName, required, clear, myValidator) {
            if (common.globalInputClearFunctions[formName]) {
                for (var i = 0; i < common.globalInputClearFunctions[formName].length; i++) {
                    if (common.globalInputClearFunctions[formName][i] === clear) {
                        common.globalInputClearFunctions[formName].splice(i, 1);
                    }
                }
            }
            if (required) {
                if (common.globalValidationFunctions[formName]) {
                    for (var i = 0; i < common.globalValidationFunctions[formName].length; i++) {
                        if (common.globalValidationFunctions[formName][i] === myValidator) {
                            common.globalValidationFunctions[formName].splice(i, 1);
                        }
                    }
                }
            }
        }
        ElementUtil.detached = detached;
        function isVisible(e) {
            return e && e.offsetParent != null;
        }
        ElementUtil.isVisible = isVisible;
        var LongTextResult = (function () {
            function LongTextResult() {
                this.isStackedClass = false;
                this.isStackedLongText = false;
            }
            return LongTextResult;
        }());
        function activeMap(items, item) {
            var newMap = [];
            if (!items) {
                return newMap;
            }
            items.forEach(function (obj) {
                var val = false;
                if (ElementUtil.areObjects(items)) {
                    val = _.isEqual(item, obj);
                }
                else {
                    val = item === obj;
                }
                newMap.push(val);
            });
            return newMap;
        }
        ElementUtil.activeMap = activeMap;
        function areObjects(items) {
            return !(items
                && items.length
                && items.length > 0
                && items[0].constructor === String);
        }
        ElementUtil.areObjects = areObjects;
        function removeAllActiveChildren(elem) {
            if (elem) {
                var list = Array.from(elem.getElementsByClassName("active"));
                if (list && list.length > 0) {
                    list.forEach(function (e) {
                        if (e.classList.contains("active")) {
                            e.classList.remove("active");
                        }
                    });
                }
            }
        }
        ElementUtil.removeAllActiveChildren = removeAllActiveChildren;
        function setActiveFromActiveMap(elems, activeMap) {
            if (elems) {
                for (var i = 0; i < elems.length; i++) {
                    if (activeMap[i]) {
                        elems[i].classList.add("active");
                    }
                }
            }
        }
        ElementUtil.setActiveFromActiveMap = setActiveFromActiveMap;
        function setActiveNonZeroFromActiveMap(elems, activeMap) {
            if (elems) {
                var wasTrue = false;
                for (var i = 1; i < elems.length; i++) {
                    if (activeMap[i - 1]) {
                        wasTrue = true;
                        elems[i].classList.add("active");
                    }
                }
                if (!wasTrue) {
                    elems[0].classList.add("active");
                }
            }
        }
        ElementUtil.setActiveNonZeroFromActiveMap = setActiveNonZeroFromActiveMap;
        function setOptionFromActiveMap(elems, activeMap) {
            var wasTrue = false;
            if (elems && elems.length > 0) {
                for (var i = 1; i < elems.length; i++) {
                    elems[i].selected = activeMap[i - 1];
                    if (activeMap[i - 1]) {
                        wasTrue = true;
                    }
                }
                if (!wasTrue) {
                    elems[0].selected = true;
                }
            }
        }
        ElementUtil.setOptionFromActiveMap = setOptionFromActiveMap;
    })(ElementUtil || (ElementUtil = {}));
    exports.default = ElementUtil;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy9jb21tb24vZWxlbWVudC11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUdBLElBQU8sV0FBVyxDQWdIakI7SUFoSEQsV0FBTyxXQUFXO1FBQ2Qsa0JBQXlCLE1BQWMsRUFBRSxRQUFnQixFQUFFLFFBQWlCLEVBQUUsS0FBZSxFQUFFLFdBQXFCO1lBQ2hILElBQUksQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQUUsTUFBTSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUFFO1lBQ3JHLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFdkQsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFBRSxNQUFNLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO2lCQUFFO2dCQUNyRyxNQUFNLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2hFO1FBQ0wsQ0FBQztRQVJlLG9CQUFRLFdBUXZCLENBQUE7UUFFRCxrQkFBeUIsTUFBYyxFQUFFLFFBQWdCLEVBQUUsUUFBaUIsRUFBRSxLQUFlLEVBQUUsV0FBcUI7WUFFaEgsSUFBSSxNQUFNLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzVDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUN4RSxJQUFJLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVB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QUcsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDckMsSUFBSSxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUFFLE9BQU8sR0FBRyxJQUFJLENBQUM7cUJBQUU7aUJBQzVDO2dCQUNELElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7aUJBQUU7YUFDOUM7UUFFTCxDQUFDO1FBVmUsa0NBQXNCLHlCQVVyQyxDQUFBO0lBQ0wsQ0FBQyxFQWhITSxXQUFXLEtBQVgsV0FBVyxRQWdIakI7SUFFRCxrQkFBZSxXQUFXLENBQUMiLCJmaWxlIjoicmVzb3VyY2VzL2VsZW1lbnRzL2NvbW1vbi9lbGVtZW50LXV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgQ29tbW9uIH0gZnJvbSBcIi4uLy4uL2NvbW1vblwiO1xyXG5cclxubW9kdWxlIEVsZW1lbnRVdGlsIHtcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBhdHRhY2hlZChjb21tb246IENvbW1vbiwgZm9ybU5hbWU6IHN0cmluZywgcmVxdWlyZWQ6IGJvb2xlYW4sIGNsZWFyOiBGdW5jdGlvbiwgbXlWYWxpZGF0b3I6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFjb21tb24uZ2xvYmFsSW5wdXRDbGVhckZ1bmN0aW9uc1tmb3JtTmFtZV0pIHsgY29tbW9uLmdsb2JhbElucHV0Q2xlYXJGdW5jdGlvbnNbZm9ybU5hbWVdID0gW107IH1cclxuICAgICAgICBjb21tb24uZ2xvYmFsSW5wdXRDbGVhckZ1bmN0aW9uc1tmb3JtTmFtZV0ucHVzaChjbGVhcik7XHJcblxyXG4gICAgICAgIGlmIChyZXF1aXJlZCkge1xyXG4gICAgICAgICAgICBpZiAoIWNvbW1vbi5nbG9iYWxWYWxpZGF0aW9uRnVuY3Rpb25zW2Zvcm1OYW1lXSkgeyBjb21tb24uZ2xvYmFsVmFsaWRhdGlvbkZ1bmN0aW9uc1tmb3JtTmFtZV0gPSBbXTsgfVxyXG4gICAgICAgICAgICBjb21tb24uZ2xvYmFsVmFsaWRhdGlvbkZ1bmN0aW9uc1tmb3JtTmFtZV0ucHVzaChteVZhbGlkYXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBkZXRhY2hlZChjb21tb246IENvbW1vbiwgZm9ybU5hbWU6IHN0cmluZywgcmVxdWlyZWQ6IGJvb2xlYW4sIGNsZWFyOiBGdW5jdGlvbiwgbXlWYWxpZGF0b3I6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgLy8gcmVtb3ZlIGZyb20gZ2xvYmFsY2xlYXJcclxuICAgICAgICBpZiAoY29tbW9uLmdsb2JhbElucHV0Q2xlYXJGdW5jdGlvbnNbZm9ybU5hbWVdKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tbW9uLmdsb2JhbElucHV0Q2xlYXJGdW5jdGlvbnNbZm9ybU5hbWVdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tbW9uLmdsb2JhbElucHV0Q2xlYXJGdW5jdGlvbnNbZm9ybU5hbWVdW2ldID09PSBjbGVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdtYXRjaCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbi5nbG9iYWxJbnB1dENsZWFyRnVuY3Rpb25zW2Zvcm1OYW1lXS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlcXVpcmVkKSB7IC8vIHJlbW92ZSBmcm9tIGdsb2JhbFZhbGlkYXRpb25cclxuICAgICAgICAgICAgaWYgKGNvbW1vbi5nbG9iYWxWYWxpZGF0aW9uRnVuY3Rpb25zW2Zvcm1OYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21tb24uZ2xvYmFsVmFsaWRhdGlvbkZ1bmN0aW9uc1tmb3JtTmFtZV0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tbW9uLmdsb2JhbFZhbGlkYXRpb25GdW5jdGlvbnNbZm9ybU5hbWVdW2ldID09PSBteVZhbGlkYXRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbWF0Y2gnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbW9uLmdsb2JhbFZhbGlkYXRpb25GdW5jdGlvbnNbZm9ybU5hbWVdLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGlzVmlzaWJsZShlOiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBlICYmIGUub2Zmc2V0UGFyZW50ICE9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgTG9uZ1RleHRSZXN1bHQge1xyXG4gICAgICAgIHB1YmxpYyBpc1N0YWNrZWRDbGFzczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIHB1YmxpYyBpc1N0YWNrZWRMb25nVGV4dDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBhY3RpdmVNYXAoaXRlbXM6IGFueVtdLCBpdGVtOiBhbnkpOiBib29sZWFuW10ge1xyXG4gICAgICAgIGxldCBuZXdNYXA6IGJvb2xlYW5bXSA9IFtdO1xyXG4gICAgICAgIGlmICghaXRlbXMpIHsgcmV0dXJuIG5ld01hcDsgfVxyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdmFsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChFbGVtZW50VXRpbC5hcmVPYmplY3RzKGl0ZW1zKSkge1xyXG4gICAgICAgICAgICAgICAgdmFsID0gXy5pc0VxdWFsKGl0ZW0sIG9iaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YWwgPSBpdGVtID09PSBvYmo7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV3TWFwLnB1c2godmFsKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbmV3TWFwO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBhcmVPYmplY3RzKGl0ZW1zOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gIShpdGVtc1xyXG4gICAgICAgICAgICAmJiBpdGVtcy5sZW5ndGhcclxuICAgICAgICAgICAgJiYgaXRlbXMubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAmJiBpdGVtc1swXS5jb25zdHJ1Y3RvciA9PT0gU3RyaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsQWN0aXZlQ2hpbGRyZW4oZWxlbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoZWxlbSkge1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0OiBFbGVtZW50W10gPSBBcnJheS5mcm9tKGVsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFjdGl2ZVwiKSk7XHJcbiAgICAgICAgICAgIGlmIChsaXN0ICYmIGxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gc2V0QWN0aXZlRnJvbUFjdGl2ZU1hcChlbGVtczogYW55W10sIGFjdGl2ZU1hcDogYm9vbGVhbltdKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGVsZW1zKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVNYXBbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtc1tpXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBzZXRBY3RpdmVOb25aZXJvRnJvbUFjdGl2ZU1hcChlbGVtczogYW55W10sIGFjdGl2ZU1hcDogYm9vbGVhbltdKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGVsZW1zKSB7XHJcbiAgICAgICAgICAgIGxldCB3YXNUcnVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZWxlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVNYXBbaSAtIDFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2FzVHJ1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbXNbaV0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXdhc1RydWUpIHsgZWxlbXNbMF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTsgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gc2V0T3B0aW9uRnJvbUFjdGl2ZU1hcChlbGVtczogYW55W10sIGFjdGl2ZU1hcDogYm9vbGVhbltdKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHdhc1RydWUgPSBmYWxzZTtcclxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGVsZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtc1tpXS5zZWxlY3RlZCA9IGFjdGl2ZU1hcFtpIC0gMV07XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZlTWFwW2kgLSAxXSkgeyB3YXNUcnVlID0gdHJ1ZTsgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghd2FzVHJ1ZSkgeyBlbGVtc1swXS5zZWxlY3RlZCA9IHRydWU7IH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50VXRpbDtcclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template><div><div class=\"slds-page-header slds-page-header_record-home\"><div class=\"slds-page-header__row\"><div class=\"slds-page-header__col-title\"><div class=\"slds-media\"><div class=\"slds-media__figure\"><span class=\"slds-icon_container slds-icon-standard-case\"><svg class=\"slds-icon slds-page-header__icon\" aria-hidden=\"true\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/resource/lightningdesign/icons/standard-sprite/svg/symbols.svg#case\"/></svg></span></div><div class=\"slds-media__body\"><div class=\"slds-page-header__name\"><div class=\"slds-page-header__name-title\"><h1><span>HACKATHON</span> <span if.bind=\"RecordTypeName == 'General_Requests'\" class=\"slds-page-header__title slds-truncate\" title=\"New Chat\">Tiny Slack</span></h1></div></div></div></div></div></div></div><div class=\"slds-section slds-is-open full forcePageBlockSection forcePageBlockSectionEdit\"><fieldset class=\"slds-box slds-theme--default slds-container--large\" if.bind=\"isLoaded && !blnIsSaving\"><legend class=\"slds-text-heading--small slds-p-vertical--medium\">Tiny Slack</legend><h3 class=\"slds-section__title slds-theme--shade\"><span class=\"section-header-title slds-p-horizontal--small slds-truncate\">Chat Here</span></h3><div class=\"slds-section__content section__content\"><div class=\"slds-form slds-form_horizontal\"><div class=\"slds-grid slds-gutters_small\"><div class=\"slds-col slds-has-flexi-truncate slds-grid\"><div class=\"slds-col\"><ce-input label=\"Message\" item.bind=\"strMessage\" required.bind=\"true\"></ce-input></div></div></div></div></div><footer class=\"slds-card__footer slds-align_absolute-center\"><button type=\"button\" class=\"slds-button slds-button_brand\" click.delegate=\"Save()\">Send Message</button></footer></fieldset></div><ce-modal bln-is-error-modal=\"true\" show.bind=\"currentErrorMessage != null && currentErrorMessage != ''\" icon=\"error\" instructions.bind=\"currentErrorMessage\" button-text=\"Close\" callback.bind=\"closeError\"></ce-modal><div class=\"slds-spinner_container\" show.bind=\"isLoading\"><div role=\"status\" class=\"slds-spinner slds-spinner_large slds-spinner_brand\"><span class=\"slds-assistive-text\">Loading</span><div class=\"slds-spinner__dot-a\"></div><div class=\"slds-spinner__dot-b\"></div></div></div></div></template>"; });
define('text!resources/elements/checkboxlist.html', ['module'], function(module) { module.exports = "<template><label class=\"label\" if.bind=\"label\">${label} <span class=\"sub-label\" if.bind=\"instructions\">${instructions}</span></label><p class=\"help is-danger\" if.bind=\"required && !isValid\">${errorMsg}</p><p class=\"help is-warning\" if.bind=\"isWarning\">${warningMsg}</p><div class=\"control\" ref=\"_formGroup\" if.bind=\"_areObjects && !valueAttribute\" repeat.for=\"i of items\"><label class=\"checkbox\"><input class=\"${required && !isValid ? 'has-text-danger' : ''} ${isOverrideInvalid ? 'has-text-danger': ''}\" type=\"checkbox\" disabled.bind=\"disabled\" checked.bind=\"selectedItems\" model.bind=\"i\" change.delegate=\"_changed($event, $index)\"> ${i[displayAttribute]} </label></div><div class=\"control\" ref=\"_formGroup\" if.bind=\"_areObjects && valueAttribute\" repeat.for=\"i of items\"><label class=\"checkbox\"><input class=\"${required && !isValid ? 'has-text-danger' : ''} ${isOverrideInvalid ? 'has-text-danger': ''}\" type=\"checkbox\" disabled.bind=\"disabled\" checked.bind=\"selectedItems\" value.bind=\"i[valueAttribute]\" change.delegate=\"_changed($event, $index)\"> ${i[displayAttribute]} </label></div><div class=\"control\" ref=\"_formGroup\" if.bind=\"!_areObjects\" repeat.for=\"i of items\"><label class=\"checkbox\"><input class=\"${required && !isValid ? 'has-text-danger' : ''} ${isOverrideInvalid ? 'has-text-danger': ''}\" type=\"checkbox\" disabled.bind=\"disabled\" checked.bind=\"selectedItems\" model.bind=\"i\" change.delegate=\"_changed($event, $index)\"> ${i} </label></div></template>"; });
define('text!resources/elements/datepicker.html', ['module'], function(module) { module.exports = "<template><div class=\"slds-form-element slds-p-vertical_xx-small ${required && !isValid ? 'slds-has-error' : ''} ${isOverrideInvalid ? 'slds-has-error': ''}\"><label class=\"slds-form-element__label ${required ? 'required' : ''}\" if.bind=\"label\" for=\"text-input-id-1\"><abbr if.bind=\"required\" class=\"${required ? 'slds-required' : ''}\" title=\"required\">*</abbr>${label} <span class=\"sub-label\" if.bind=\"instructions\">${instructions}</span></label><div class=\"slds-form-element__control slds-input-has-icon slds-input-has-icon_right\" ref=\"_formGroup\"><input class=\"slds-input ${required && !isValid ? 'is-danger' : ''} ${isOverrideInvalid ? 'is-danger': ''}\" ref=\"_input\" disabled.bind=\"disabled\" change.delegate=\"_changed($event)\" blur.trigger=\"_blurFunc($event)\" focus.trigger=\"show()\" placeholder.bind=\"placeholder\" value.bind=\"_datevalue\"> <button class=\"slds-button slds-button_icon slds-input__icon slds-input__icon_right\" title=\"Select a date\" click.delegate=\"show()\"><svg class=\"slds-button__icon\" aria-hidden=\"true\"><use xlink:href=\"/resource/lightningdesign/icons/utility-sprite/svg/symbols.svg#event\"></use></svg> <span class=\"slds-assistive-text\">Select a date</span></button><p class=\"help is-danger\" if.bind=\"required && !isValid\">${errorMsg}</p><p class=\"help is-warning\" if.bind=\"isWarning\">${warningMsg}</p></div><div show.bind=\"_isOpen\" id=\"dtpickerdialog\" class=\"slds-datepicker slds-dropdown\" role=\"dialog\"></div><div class=\"slds-form-element__control\" show.bind=\"showInlineHelp && !_isOpen\"><div class=\"slds-form-element__help\"><span if.bind=\"!showInlineHelpLink\">${inlineHelpMsg}</span><a if.bind=\"showInlineHelpLink\" href.bind=\"inlineHelpLink\" class=\"slds-text-link_reset\" target=\"_blank\">${inlineHelpMsg}<span class=\"slds-text-link\">${inlineHelpLinkText}</span>${inlineHelpMsgAfterLink}</a></div></div></div></template>"; });
define('text!resources/elements/dropdown.html', ['module'], function(module) { module.exports = "<template><div class=\"slds-form-element slds-p-vertical_xx-small ${required && !isValid ? 'slds-has-error' : ''} ${isOverrideInvalid ? 'slds-has-error': ''}\"><label class=\"slds-form-element__label ${required && !isValid ? 'has-text-danger' : ''} ${isOverrideInvalid ? 'has-text-danger': ''}\" if.bind=\"label\"><abbr if.bind=\"required\" class=\"slds-required\" title=\"required\">*</abbr> ${label}</label><div class=\"slds-form-element__control\" ref=\"_formGroup\"><div class=\"slds-select_container ${required && !isValid ? 'is-danger' : ''} ${isOverrideInvalid ? 'is-danger': ''}\"><select aria-describedby=\"error-02\" class=\"slds-select\" value.bind=\"_item\" change.delegate=\"_changed($event, $index)\" disabled.bind=\"disabled\"><option>Please select</option><option repeat.for=\"i of items\" selected.bind=\"_activeMap[$index]\" model.bind=\"i\" innerhtml.bind=\"_areObjects ? i[displayAttribute] : i\"></option></select></div><div class=\"slds-form-element__help\" id=\"error-02\" if.bind=\"required && !isValid\">${errorMsg}</div><div class=\"slds-form-element__help\" id=\"error-03\" if.bind=\"isWarning\">${warningMsg}</div><div if.bind=\"infoMsg\" class=\"slds-notify slds-notify_alert slds-theme_alert-texture slds-theme_info\" role=\"alert\"><span class=\"slds-assistive-text\">info</span> <span class=\"slds-icon_container slds-icon-utility-info_alt slds-m-right_x-small\"><svg class=\"slds-icon slds-icon_x-small\" aria-hidden=\"true\"><use xlink:href=\"/resource/lightningdesign/icons/utility-sprite/svg/symbols.svg#info_alt\"></use></svg></span><h2>${infoMsg} </h2></div></div></div></template>"; });
define('text!resources/elements/duelingpicklist.html', ['module'], function(module) { module.exports = "<template><div class=\"slds-form-element\"><span id=\"picklist-group-label\" class=\"slds-form-element__label slds-form-element__legend\">${label}</span><div class=\"slds-form-element__control\"><div class=\"slds-dueling-list\"><div class=\"slds-assistive-text\" id=\"drag-live-region\"></div><div class=\"slds-assistive-text\" id=\"option-drag-label\">Press space bar when on an item, to move it within the list. CMD plus left and right arrow keys, to move items between lists.</div><div class=\"slds-dueling-list__column\"><span class=\"slds-form-element__label\" id=\"label-27\">Available</span><div class=\"slds-dueling-list__options\"><div><select multiple=\"multiple\" value.bind=\"selectedValues\" ref=\"sel\" style=\"width:10em\"><option value=\"opt1\">Atlas - Security</option><option value=\"opt2\">BI Connector</option><option value=\"opt3\">Compass</option><option value=\"opt4\">Configuration</option></select></div><ul aria-describedby=\"option-drag-label\" aria-labelledby=\"label-27\" aria-multiselectable=\"true\" class=\"slds-listbox slds-listbox_vertical\" role=\"listbox\"><li role=\"presentation\" class=\"slds-listbox__item\"><div class=\"slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline\" draggable=\"true\" role=\"option\" tabindex=\"-1\" aria-selected=\"true\"><span class=\"slds-media__body\"><span class=\"slds-truncate\" title=\"Arabic\">Atlas - Security</span></span></div></li><li role=\"presentation\" class=\"slds-listbox__item\"><div class=\"slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline\" draggable=\"true\" role=\"option\" tabindex=\"-1\" aria-selected=\"false\"><span class=\"slds-media__body\"><span class=\"slds-truncate\" title=\"Dutch\">BI Connector</span></span></div></li></ul></div></div><div class=\"slds-dueling-list__column\"><button class=\"slds-button slds-button_icon slds-button_icon-container\" title=\"Move Selection to Selected Languages\"><svg class=\"slds-button__icon\" aria-hidden=\"true\"><use xlink:href=\"/assets/icons/utility-sprite/svg/symbols.svg#right\"></use></svg> <span class=\"slds-assistive-text\">Move Selection to Selected Components</span></button> <button class=\"slds-button slds-button_icon slds-button_icon-container\" title=\"Move Selection to Available Languages\"><svg class=\"slds-button__icon\" aria-hidden=\"true\"><use xlink:href=\"/assets/icons/utility-sprite/svg/symbols.svg#left\"></use></svg> <span class=\"slds-assistive-text\">Move Selection to Available Components</span></button></div><div class=\"slds-dueling-list__column\"><span class=\"slds-form-element__label\" id=\"label-28\">Chosen</span><div class=\"slds-dueling-list__options\"><ul aria-describedby=\"option-drag-label\" aria-labelledby=\"label-28\" aria-multiselectable=\"true\" class=\"slds-listbox slds-listbox_vertical\" role=\"listbox\"><li role=\"presentation\" class=\"slds-listbox__item\"><div class=\"slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline\" draggable=\"true\" role=\"option\" tabindex=\"0\"><span class=\"slds-media__body\"><span class=\"slds-truncate\" title=\"Chinese\">Compass</span></span></div></li><li role=\"presentation\" class=\"slds-listbox__item\"><div class=\"slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline\" draggable=\"true\" role=\"option\" tabindex=\"-1\"><span class=\"slds-media__body\"><span class=\"slds-truncate\" title=\"English\">Configuration</span></span></div></li></ul></div></div></div></div></div></template>"; });
define('text!resources/elements/input.html', ['module'], function(module) { module.exports = "<template><div class=\"slds-form-element slds-p-vertical_xx-small ${required && !isValid ? 'slds-has-error' : ''} ${isOverrideInvalid ? 'slds-has-error': ''}\"><label class=\"slds-form-element__label ${required ? 'required' : ''}\" if.bind=\"label\" for=\"text-input-id-1\"><abbr if.bind=\"required\" class=\"${required ? 'slds-required' : ''}\" title=\"required\">*</abbr>${label} <span class=\"sub-label\" if.bind=\"instructions\">${instructions}</span></label><div class=\"slds-form-element__control\" ref=\"_formGroup\"><input aria-describedby=\"error-message\" id=\"text-input-id-1\" class=\"slds-input ${required && !isValid ? 'is-danger' : ''} ${isOverrideInvalid ? 'is-danger': ''}\" placeholder.bind=\"placeholder\" disabled.bind=\"disabled\" if.bind=\"!isLong && !isNumber\" change.delegate=\"_changed($event)\" input.bind=\"input($event)\" value.bind=\"item\"> <input aria-describedby=\"error-message\" id=\"text-input-id-1\" class=\"slds-input ${required && !isValid ? 'is-danger' : ''} ${isOverrideInvalid ? 'is-danger': ''}\" placeholder.bind=\"placeholder\" disabled.bind=\"disabled\" if.bind=\"!isLong && isNumber\" type=\"number\" change.delegate=\"_changed($event)\" input.bind=\"input($event)\" value.bind=\"item\"> <textarea aria-describedby=\"error-message\" id=\"text-input-id-1\" class=\"slds-textarea ${required && !isValid ? 'is-danger' : ''} ${isOverrideInvalid ? 'is-danger': ''}\" placeholder.bind=\"placeholder\" disabled.bind=\"disabled\" if.bind=\"isLong\" change.delegate=\"_changed($event)\" input.bind=\"input($event)\" value.bind=\"item\" maxlength=\"32000\" rows=\"6\"></textarea><div class=\"slds-form-element__help\" if.bind=\"showInlineHelp\"><span if.bind=\"!showInlineHelpLink\">${inlineHelpMsg}</span><a if.bind=\"showInlineHelpLink\" href.bind=\"inlineHelpLink\" class=\"slds-text-link_reset\" target=\"_blank\">${inlineHelpMsg}<span class=\"slds-text-link\">${inlineHelpLinkText}</span>${inlineHelpMsgAfterLink}</a></div><div id=\"error-message\" class=\"slds-form-element__help\" if.bind=\"required && !isValid && showError\">${errorMsg}</div><div id=\"error-message\" class=\"slds-form-element__help\" if.bind=\"isWarning\">${warningMsg}</div></div></div></template>"; });
define('text!resources/elements/modal.html', ['module'], function(module) { module.exports = "<template><div><section role=\"dialog\" tabindex=\"-1\" aria-labelledby=\"modal-heading-01\" aria-modal=\"true\" aria-describedby=\"modal-content-id-1\" class=\"slds-modal slds-fade-in-open\"><div class=\"slds-modal__container\" style=\"max-width:60em;width:100%\"><header class=\"slds-modal__header\" if.bind=\"blnIsErrorModal\"><div class=\"demo-only\" style=\"height:4rem\"><div class=\"slds-notify_container slds-is-relative\"><div class=\"slds-notify slds-notify_toast slds-theme_error\" role=\"alert\"><span class=\"slds-assistive-text\">error</span> <span class=\"slds-icon_container slds-icon-utility-error slds-m-right_small slds-no-flex slds-align-top\" title=\"Description of icon when needed\"><svg class=\"slds-icon slds-icon_small\" aria-hidden=\"true\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/resource/lightningdesign/icons/utility-sprite/svg/symbols.svg#${icon}\"/></svg></span><div class=\"slds-notify__content\"><h2 class=\"slds-text-heading_small\">There was an error with this app, the details on the error are below.</h2></div></div></div></div></header><header class=\"slds-modal__header\" if.bind=\"!blnIsErrorModal\"><h2 id=\"modal-heading-01\" class=\"slds-text-heading_small slds-hyphenate\" innerhtml.bind=\"headerText\"></h2></header><div if.bind=\"instructions\" class=\"slds-modal__content slds-p-around_medium\" style=\"height:20rem\" id=\"modal-content-id-1\"><p innerhtml.bind=\"instructions\"></p></div><footer class=\"slds-modal__footer\"><button if.bind=\"buttonText\" class=\"slds-button slds-button_brand\" click.delegate=\"_callback()\">${buttonText}</button> <button if.bind=\"altButtonText\" class=\"slds-button slds-button_neutral\" click.delegate=\"_altCallback()\">${altButtonText}</button></footer></div></section><div class=\"slds-backdrop slds-backdrop_open\"></div></div></template>"; });
define('text!resources/elements/multiselect.html', ['module'], function(module) { module.exports = "<template><div class=\"slds-form-element\"><label class=\"slds-form-element__label ${required ? 'required' : ''}\" if.bind=\"label\" for=\"text-input-id-1\"><abbr if.bind=\"required\" class=\"${required ? 'slds-required' : ''}\" title=\"required\">*</abbr>${label} <span class=\"sub-label\" if.bind=\"instructions\">${instructions}</span></label><div class=\"slds-form-element__control\"><div class=\"slds-dueling-list\"><div class=\"slds-assistive-text\" id=\"drag-live-region\"></div><div class=\"slds-assistive-text\" id=\"option-drag-label\">Press space bar when on an item, to move it within the list. CMD plus left and right arrow keys, to move items between lists.</div><div class=\"slds-dueling-list__column\"><span class=\"slds-form-element__label\" id=\"label-27\">Available</span><div><select multiple=\"multiple\" value.bind=\"selectedItems\" ref=\"sel\" class=\"slds-dueling-list__options slds-picklist__options\"><option value.bind=\"i.value\" repeat.for=\"i of items\">${i.label}</option></select></div></div><div class=\"slds-dueling-list__column\"><button disabled=\"disabled\" class=\"slds-button slds-button_icon slds-button_icon-container\" title=\"\"></button></div><div class=\"slds-dueling-list__column\"><span class=\"slds-form-element__label\" id=\"label-28\">Chosen</span><div><select disabled=\"disabled\" multiple=\"multiple\" ref=\"selectedlist\" class=\"slds-dueling-list__options slds-picklist__options\"><option value.bind=\"i\" repeat.for=\"i of selectedItems\">${i}</option></select></div></div></div><div id=\"error-message\" class=\"slds-form-element__help\" if.bind=\"required && !isValid\">${errorMsg}</div><div id=\"error-message\" class=\"slds-form-element__help\" if.bind=\"isWarning\">${warningMsg}</div></div></div></template>"; });
define('text!resources/elements/typeahead.html', ['module'], function(module) { module.exports = "<template><div class=\"slds-form-element slds-p-vertical_xx-small ${required && !isValid ? 'slds-has-error' : ''} ${isOverrideInvalid ? 'slds-has-error': ''}\" if.bind=\"_isSelected\"><label class=\"slds-form-element__label\" if.bind=\"label\" ref=\"_formGroup\"><abbr if.bind=\"required\" class=\"${required ? 'slds-required' : ''}\" title=\"required\">*</abbr>${!hasOtherSelected ? label : hasOtherLabel} <span class=\"slds-form-element__label\" if.bind=\"instructions\">${instructions}</span></label><div class=\"slds-form-element__control slds-input-has-icon ${selectedrecordicon ? 'slds-input-has-icon_left-right' : 'slds-input-has-icon_right'}\"><div class=\"slds-combobox__form-element slds-input-has-icon slds-input-has-icon_left-right\"><span if.bind=\"selectedrecordicon\" class=\"slds-icon_container slds-icon-standard-${selectedrecordicon} slds-combobox__input-entity-icon\" title=\"${selectedrecordicon}\"><svg class=\"slds-icon slds-icon_small\" aria-hidden=\"true\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/resource/lightningdesign/icons/standard-sprite/svg/symbols.svg#${selectedrecordicon}\"/></svg> <span class=\"slds-assistive-text\">${selectedrecordicon}</span></span><span class=\"slds-input disabled ${required && !isValid ? 'is-danger' : ''} ${isOverrideInvalid ? 'is-danger': ''}\" innerhtml.bind=\"_selection ? _selection : hasOtherValue\"></span> <button class=\"slds-button slds-button_icon slds-input__icon slds-input__icon_right\" title=\"Remove selected option\" click.delegate=\"clearSelection()\"><svg class=\"slds-button__icon\" aria-hidden=\"true\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/resource/lightningdesign/icons/utility-sprite/svg/symbols.svg#close\"/></svg> <span class=\"slds-assistive-text\">Remove selected option</span></button></div></div></div><div class=\"slds-form-element slds-p-vertical_xx-small ${required && !isValid ? 'slds-has-error' : ''} ${isOverrideInvalid ? 'slds-has-error': ''}\" if.bind=\"!_isSelected\"><label class=\"slds-form-element__label\" if.bind=\"label\" ref=\"_formGroup\"><abbr if.bind=\"required\" class=\"${required ? 'slds-required' : ''}\" title=\"required\">*</abbr>${!hasOtherSelected ? label : hasOtherLabel} <span class=\"slds-form-element__label\" if.bind=\"instructions\">${instructions}</span></label><div class=\"slds-form-element__control\"><div class=\"slds-combobox_container slds-has-inline-listbox\"><div class=\"slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click ${isOpen ? 'slds-is-open' : 'slds-combobox-lookup'}\" aria-expanded=\"false\" aria-haspopup=\"listbox\" role=\"combobox\"><div class=\"slds-form-element__control slds-input-has-icon slds-input-has-icon_right\"><svg class=\"slds-icon slds-input__icon slds-input__icon_right slds-icon-text-default\" aria-hidden=\"true\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"/resource/lightningdesign/icons/utility-sprite/svg/symbols.svg#search\"/></svg> <input class=\"slds-input slds-combobox__input\" aria-activedescendant=\"listbox-option-unique-id-01\" ref=\"_input\" type=\"text\" aria-describedby=\"error-message\" aria-autocomplete=\"list\" aria-controls=\"listbox-unique-id\" autocomplete=\"off\" disabled.bind=\"disabled\" placeholder.bind=\"placeholder\" input.delegate=\"_queryChanged($event) & throttle:200 & debounce:600\" focus.trigger=\"_focusFunc($event)\" blur.trigger=\"_blurFunc($event)\" value.bind=\"query\"></div><div id=\"listbox-unique-id\" role=\"listbox\" class=\"slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid\" show.bind=\"isOpen\"><ul class=\"slds-listbox slds-listbox_vertical slds-dropdown_fluid\" role=\"presentation\"><li show.bind=\"query\" role=\"presentation\" class=\"slds-listbox__item\" style=\"margin-left:0!important\"><div aria-selected=\"true\" id=\"option0\" class=\"slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_term\" role=\"option\"><span class=\"slds-media__figure slds-listbox__option-icon\"><span class=\"slds-icon_container slds-icon-utility-search\" title=\"Search for term: \"><svg class=\"slds-icon slds-icon_x-small slds-icon-text-default\" aria-hidden=\"true\"><use xlink:href=\"/resource/lightningdesign/icons/utility-sprite/svg/symbols.svg#search\"></use></svg><span class=\"slds-assistive-text\">Search for term: </span></span></span><span class=\"slds-media__body\"><span class=\"slds-listbox__option-text slds-listbox__option-text_entity\">${query}</span></span></div></li><li role=\"presentation\" class=\"slds-listbox__item\" repeat.for=\"res of results\" innerhtml.bind=\"res.html\" mousedown.delegate=\"selectingFunc($event, res)\" style=\"margin-left:0!important\"></li></ul></div></div></div><div id=\"error-message\" class=\"slds-form-element__help\" if.bind=\"required && !isValid\">${errorMsg}</div><div class=\"slds-form-element__help\" if.bind=\"showInlineHelp\"><span if.bind=\"!showInlineHelpLink\">${inlineHelpMsg}</span><a if.bind=\"showInlineHelpLink\" href.bind=\"inlineHelpLink\" class=\"slds-text-link_reset\" target=\"_blank\">${inlineHelpMsg}<span class=\"slds-text-link\">${inlineHelpLinkText}</span>${inlineHelpMsgAfterLink}</a></div></div></div></template>"; });
define('text!resources/elements/checkbox.html', ['module'], function(module) { module.exports = "<template><div class=\"control\" ref=\"_formGroup\"><label class=\"checkbox\"><input class=\"${item === true ? 'active' : ''} ${required &amp;&amp; !isValid ? 'has-text-danger' : ''} ${isOverrideInvalid ? 'has-text-danger': + ''}\" type=\"checkbox\" checked.bind=\"item\" value.one-way=\"item\" disabled.bind=\"disabled\"> ${label}<span class=\"sub-label\" if.bind=\"secondaryLabel\">${secondaryLabel}</span></label><p class=\"help is-danger\" if.bind=\"required &amp;&amp; !isValid\">${errorMsg}</p><p class=\"help is-warning\" if.bind=\"isWarning\">${warningMsg}</p></div></template>"; });
define('text!resources/elements/fileupload.html', ['module'], function(module) { module.exports = "<template><form class=\"uplodr\"><div class=\"containr\"><i class=\"fa fa-upload fa-2x\"></i><p class=\"field\">Drag Files Here</p><p class=\"field hr-word\">or</p><span class=\"button is-primary is-medium\">Browse</span></div><input class=\"inpt\" id=\"image_uploads\" type=\"file\" name=\"image_uploads\" accept=\".jpg, .jpeg, .png\" multiple=\"\"></form><ul class=\"uplodr-list\"><li class=\"uplodr-list-item\"><a class=\"fa fa-times is-info remove\" href=\"#\"></a>{name of file}<span class=\"status\">Complete</span></li><li class=\"uplodr-list-item\"><a class=\"fa fa-times is-info remove\" href=\"#\"></a>{name of file}<span class=\"status\">Complete</span></li><li class=\"uplodr-list-item has-error\"><a class=\"fa fa-times is-info remove\" href=\"#\"></a>{name of file}<span class=\"status\">File too large</span></li></ul></template>"; });
define('text!resources/elements/money.html', ['module'], function(module) { module.exports = "<template><label class=\"label ${required &amp;&amp; !isValid ? 'has-text-danger' : ''} ${isOverrideInvalid ? 'has-text-danger': ''}\">${label}<span class=\"sub-label\" if.bind=\"instructions\">${instructions}</span></label><div class=\"control has-icons-left\" ref=\"_formGroup\"><input class=\"input ${required &amp;&amp; !isValid ? 'is-danger' : ''} ${isOverrideInvalid ? 'is-danger': ''}\" placeholder.bind=\"placeholder\" disabled.bind=\"disabled\" type=\"number\" change.delegate=\"_changed($event)\" input.bind=\"input($event)\" value.bind=\"item\"><span class=\"icon is-left\"><i class=\"fa fa-usd\"></i></span></div><p class=\"help is-danger\" if.bind=\"required &amp;&amp; !isValid\">${errorMsg}</p><p class=\"help is-warning\" if.bind=\"isWarning\">${warningMsg}</p></template>"; });
define('text!resources/elements/phone.html', ['module'], function(module) { module.exports = "<template><label class=\"label ${required ? 'required' : ''} ${!isValid ? 'has-text-danger' : ''} ${isOverrideInvalid ? 'has-text-danger': ''}\" if.bind=\"label\">${label}<span class=\"sub-label\" if.bind=\"instructions\">${instructions}</span></label><div class=\"control\" ref=\"_formGroup\"><input class=\"input ${required &amp;&amp; !isValid ? 'is-danger' : ''} ${isOverrideInvalid ? 'is-danger': ''}\" ref=\"_input\" maxlength.bind=\"maxlength\" keyup.trigger=\"keyupFunc($event)\" blur.trigger=\"onblurFunc($event)\" placeholder.bind=\"placeholder\" disabled.bind=\"disabled\" if.bind=\"!isLong &amp;&amp; !isNumber\" change.delegate=\"_changed($event)\" input.bind=\"input($event)\" value.bind=\"item\"><input class=\"input ${required &amp;&amp; !isValid ? 'is-danger' : ''} ${isOverrideInvalid ? 'is-danger': ''}\" ref=\"_input\" maxlength.bind=\"maxlength\" keyup.trigger=\"keyupFunc($event)\" blur.trigger=\"onblurFunc($event)\" placeholder.bind=\"placeholder\" disabled.bind=\"disabled\" if.bind=\"!isLong &amp;&amp; isNumber\" type=\"number\" change.delegate=\"_changed($event)\" input.bind=\"input($event)\" value.bind=\"item\"><textarea class=\"textarea ${required &amp;&amp; !isValid ? 'is-danger' : ''} ${isOverrideInvalid ? 'is-danger': ''}\" placeholder.bind=\"placeholder\" disabled.bind=\"disabled\" if.bind=\"isLong\" change.delegate=\"_changed($event)\" input.bind=\"input($event)\" value.bind=\"item\"></textarea><p class=\"help is-danger\" if.bind=\"required &amp;&amp; !isValid &amp;&amp; showError\">${errorMsg}</p><p class=\"help is-danger\" if.bind=\"!required &amp;&amp; !isValid &amp;&amp; showError\">${invalidMsg}</p><p class=\"help is-warning\" if.bind=\"isWarning\">${warningMsg}</p></div></template>"; });
define('text!resources/elements/radiogroup.html', ['module'], function(module) { module.exports = "<template><label class=\"label ${required &amp;&amp; !isValid ? 'has-text-danger' : ''} ${isOverrideInvalid ? 'has-text-danger': ''}\" if.bind=\"label\">${label}<span class=\"sub-label\" if.bind=\"instructions\">${instructions}</span></label><div class=\"controls has-radio-group\" ref=\"_formGroup\"><div class=\"control\" repeat.for=\"i of items\"><input id.bind=\"_id+$index\" type=\"radio\" disabled.bind=\"disabled\" checked.bind=\"_item\" model.bind=\"i\" change.delegate=\"_changed($event, $index)\" name.bind=\"_id\"><label for.bind=\"_id+$index\">${ _areObjects ? i[displayAttribute] : i}</label></div></div><p class=\"help is-danger\" if.bind=\"required &amp;&amp; !isValid\">${errorMsg}</p><p class=\"help is-warning\" if.bind=\"isWarning\">${warningMsg}</p></template>"; });
define('text!resources/elements/radiolist.html', ['module'], function(module) { module.exports = "<template><label class=\"label ${required &amp;&amp; !isValid ? 'has-text-danger' : ''} ${isOverrideInvalid ? 'has-text-danger': ''}\" if.bind=\"label\">${label}<span class=\"sub-label\" if.bind=\"instructions\">${instructions}</span></label><p class=\"help is-danger\" if.bind=\"required &amp;&amp; !isValid\">${errorMsg}</p><p class=\"help is-warning\" if.bind=\"isWarning\">${warningMsg}</p><div class=\"control\" ref=\"_formGroup\" repeat.for=\"i of items\"><label class=\"radio\"><input type=\"radio\" disabled.bind=\"disabled\" checked.bind=\"_item\" model.bind=\"i\" change.delegate=\"_changed($event, $index)\"> ${ _areObjects ? i[displayAttribute] : i}</label></div></template>"; });
define('text!resources/elements/ssn.html', ['module'], function(module) { module.exports = "<template><label class=\"label ${required ? 'required' : ''} ${required &amp;&amp; !isValid ? 'has-text-danger' : ''} ${isOverrideInvalid ? 'has-text-danger': ''}\" if.bind=\"label\">${label}<span class=\"sub-label\" if.bind=\"instructions\">${instructions}</span></label><div class=\"control\" ref=\"_formGroup\"><input class=\"input ${required &amp;&amp; !isValid ? 'is-danger' : ''} ${isOverrideInvalid ? 'is-danger': ''}\" ref=\"_input\" maxlength.bind=\"maxlength\" keyup.trigger=\"keyupFunc($event)\" blur.trigger=\"onblurFunc($event)\" placeholder.bind=\"placeholder\" disabled.bind=\"disabled\" if.bind=\"!isLong &amp;&amp; !isNumber\" change.delegate=\"_changed($event)\" input.bind=\"input($event)\" value.bind=\"item\"><input class=\"input ${required &amp;&amp; !isValid ? 'is-danger' : ''} ${isOverrideInvalid ? 'is-danger': ''}\" ref=\"_input\" maxlength.bind=\"maxlength\" keyup.trigger=\"keyupFunc($event)\" blur.trigger=\"onblurFunc($event)\" placeholder.bind=\"placeholder\" disabled.bind=\"disabled\" if.bind=\"!isLong &amp;&amp; isNumber\" type=\"number\" change.delegate=\"_changed($event)\" input.bind=\"input($event)\" value.bind=\"item\"><textarea class=\"textarea ${required &amp;&amp; !isValid ? 'is-danger' : ''} ${isOverrideInvalid ? 'is-danger': ''}\" placeholder.bind=\"placeholder\" disabled.bind=\"disabled\" if.bind=\"isLong\" change.delegate=\"_changed($event)\" input.bind=\"input($event)\" value.bind=\"item\"></textarea><p class=\"help is-danger\" if.bind=\"required &amp;&amp; !isValid &amp;&amp; showError\">${errorMsg}</p><p class=\"help is-danger\" if.bind=\"!required &amp;&amp; !isValid &amp;&amp; showError\">${invalidMsg}</p><p class=\"help is-warning\" if.bind=\"isWarning\">${warningMsg}</p></div></template>"; });
define('text!resources/elements/text.html', ['module'], function(module) { module.exports = "<template><label class=\"label text ${required ? 'required' : ''} ${required &amp;&amp; !isValid ? 'has-text-danger' : ''} ${isOverrideInvalid ? 'has-text-danger': ''}\" if.bind=\"label\">${label}<span class=\"sub-label\" if.bind=\"instructions\">${instructions}</span></label><div class=\"control text\" ref=\"_formGroup\"><span class=\"${required &amp;&amp; !isValid ? 'is-danger' : ''} ${isOverrideInvalid ? 'is-danger': ''} ${inline ? 'inline' : ''}\" placeholder.bind=\"placeholder\" disabled.bind=\"disabled\" change.delegate=\"_changed($event)\" input.bind=\"input($event)\">${item}</span><p class=\"help is-danger\" if.bind=\"required &amp;&amp; !isValid &amp;&amp; showError\">${errorMsg}</p><p class=\"help is-warning\" if.bind=\"isWarning\">${warningMsg}</p></div></template>"; });
//# sourceMappingURL=app-bundle.js.map