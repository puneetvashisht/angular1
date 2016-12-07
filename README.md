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
  - MVC
  - Factory (Reusable object, singleton)
  - Use module injection
    
Filters
  - Existing (lowercase, uppercase, orderBy, limitTo)  - Custom (Capitalize) 
  - filter :filter
  - ngRepeat
  
Directives
  - Basic directives using templates
  - restrict, replace
  - templateUrl
  - link(scope,element,attrs) - predefined function
  - Isloation in scopes (@)
  - Transclude
  - Compliation in Directives ($compiler --> compile(optimization)/link)
  
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
 
 
 
 Project Sequence:
 1. On landling page do Ajax to fetch tickets data
 2. Display Tickets
 3. Create a Ticket directive using bootstrap
 4. Display tickets using directive
 
 var tickets = [{
 id: 345436,
 summary: 'Internet not working',
 status: 'Open/Closed'
 severity: '3',
 description: 'Internet not working because some issue with proxy'
 }]
 
 
 

<h2>Setting proxy</h2>
 - npm config set proxy http://genpactproxy.headstrong.com:3120 
 - npm config set https-proxy http://genpactproxy.headstrong.com:3120

