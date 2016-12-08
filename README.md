<h2> -- Coverage -- </h2>
Basic JS
 - data types
 - functions (objects, return, pass as args)
 - scope
 - DOM manipulation
Jquery
 - DOM manipulation

<h3>Angular</h3>

Basic
  - Two way binding
  - Module
  - MVW
  - Factory, Services, Providers (Reusable object, singleton)
  - Use module injection
  - Angular UI Bootstrap, Angular Route
    
Filters
  - Existing (lowercase, uppercase, orderBy, limitTo)  - Custom (Capitalize) 
  - filter :filter
  - ngRepeat
  
Directives
  - Basic directives using templates
  - restrict, replace
  - templateUrl
  - link(scope,element,attrs) - predefined function
  - Isloation in scopes (@, =, &)
  - Transclude
  - Compliation in Directives ($compiler --> compile(optimization)/link)
  
  - Built in directives
    ng-app, np-controller, ng-model, ng-bind, ng-view, ng-if, ng-show, ng-include, ng-class, ng-click
    EventEmitter --> on (broadcast, emit)
  
Http
 - Basic $http.get
 - CORS (Cross origin issue)
 - Post (by including data field)
 
NodeJS
 - Server side part of JS
 - File read
 - npm install (set proxy)   -g global
 - Npm (express, cors, body-parser) : Server responds to Http GET/POST 
 - Utility (Postman)
 - create package.json (npm init)
 - npm run unittest
 
 
Routing
 - script, module injections
 - $routeProvider (when statements)
 - $routeParams .when('/magazines/:city)
 - $route
 - resolve: promises that should be resolved before rendering pages
 - Promise: Javascript object.. $q is Angular wrapper
 - Promise: resolve(), reject()

Form Validations
 - Pristine, Dirty, Valid, Invalid
 
Testing
 - karma-jasmine
 Steps
    - npm init (to create package.json)
    - npm install --save-dev karma karma-jasmine jasmine karma-chrome-launcher
    - karma init to get karma-conf.js
    - include files [libraries, source, tests]
    - write test cases using jasmine (injection in beforeeach)
    - karma start
    - package.json (script unittest: "karma start")
 
 Gulp
  - task runner
  - build task, html,css copy, minification, concat, bundling(browerify)
  - live server
  Steps:
    - npm init
    - npm install --save-dev gulp gulp-util gulp-concat gulp-browerify ...
    - create gulpfile.js
    - create tasks

 DI 
  - $injector
  - Factories(data), Services(methods), Providers(module-level config)
  - .controller('name', [dep1, dep2, function(dep1, dep2)])
  - Controllers, SErvices, Factories, Directives, Providers, module.config, module.run
  - $scope vs scope in link function
  
  
 
 Ticket Management Project Sequence:
 1. On landling page do Ajax to fetch tickets data
 2. Display Tickets
 3. Create a Ticket directive using bootstrap
 4. Display tickets using directive


<h2>Setting proxy</h2>
 - npm config set proxy http://genpactproxy.headstrong.com:3120 
 - npm config set https-proxy http://genpactproxy.headstrong.com:3120

