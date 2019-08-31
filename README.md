# DotnetCorePaging
.Net Core 2.1 Web API and Angular 8 Pagination

## Paging.WebApi

* Create database then Users file https://github.com/yadaskinn/DotnetCorePaging/blob/master/Users.sql
* appsettings.json database connection
* Startup.cs Configure database and cors
* Create models and controller

## paging-angular-spa

* To check the installed version of Node.js, open the command prompt.
* Type the “npm -v” command to check the Node.js installation and version.
* If you don't have version please download Node.js
* Open the link https://cli.angular.io/ and follow the instructions to install Angular CLI and to create your first  Angular app.
* Type the command “npm install -g @angular/cli” on the command prompt and press enter to install Angular cli.
* Type “ng new paging-angular-spa” and hit enter to create the Paging Angular app.
* Finally, the "Paging Angular" Angular app is created; now type “ng serve --open ”.
* Now, open the browser and type http://localhost:4200  in the address bar and hit enter to run the Paging Angular Angular app in the browser
### Component and Package installation
* npm i bootstrap
* npm i font-awesome
* We tell you that we will use the packages to the Angular.json file. Exp: https://github.com/yadaskinn/DotnetCorePaging/blob/master/paging-angular-spa/angular.json "styles": ["node_modules/bootstrap/dist/css/bootstrap.min.css"],
* npm i ngx-pagination
* Import app.module.ts NgxPaginationModule  module.  https://github.com/yadaskinn/DotnetCorePaging/blob/master/paging-angular-spa/src/app/app.module.ts
* Create route.ts https://github.com/yadaskinn/DotnetCorePaging/blob/master/paging-angular-spa/src/app/route.ts
* Import app.module.ts RouterModule module. Import route.ts. RouterModule.forRoot(appRoutes)
* Create the users component. Please import the app.module.ts . You can look at the models, codes that are needed from the repository.
* You can reach from info@yusufdaskin.com


