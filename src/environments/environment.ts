// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyA7wyeICLni8ynPl_RCYjzKDW_ukhjI7ho",
    authDomain: "my-blog-62c9a.firebaseapp.com",
    databaseURL: "https://my-blog-62c9a.firebaseio.com",
    projectId: "my-blog-62c9a",
    storageBucket: "my-blog-62c9a.appspot.com",
    messagingSenderId: "540404408869"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
