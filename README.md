# REQUIREJS + ANGULAR EXAMPLE

## OVERVIEW
This project serves as an example of how to integrate [RequireJS](http://requirejs.org) with [AngularJS](https://angularjs.org/) in a [NodeJS](https://nodejs.org/) website for better javascript module dependency management and optimization. In this example, the developers are able to define all of a client-side modules dependencies within the javascript code (basically adding import-like syntax to client-side JS). When the code is not optimizied/minified, RequireJS handles the asyncronous loading of each module's dependencies. When the code is optimized/minified, RequireJS recursively traverses each one of a module's dependencies and generates and single minified javascript file for each page. In this example, client-side scripts are only optimized when the `NODE_ENV` variable is set to `production`.

* **To see scripts unoptimized/unminfied run:** `npm start`
* **To see scripts optimized/minified run:** `NODE_ENV=production npm start`

Benefits:

* Developers no longer need to worry about adding/removing script tags to the page for each individual javascript library/module.
* No need for external build tools for applications. Instead, optimization is run once on app startup in production environments.
* With the use of the [RequireJS text plugin](https://github.com/requirejs/text), angular template files can be defined as dependencies and loaded asyncronously or compiled (depending on environment) the same way that javascript dependencies are.