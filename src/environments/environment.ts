// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: 'AIzaSyB9PeL7nbaLpXH3D5Hr8xKcnFw_1OURSPs',
    authDomain: 'blog-app-ee678.firebaseapp.com',
    databaseURL: 'https://blog-app-ee678.firebaseio.com',
    projectId: 'blog-app-ee678',
    storageBucket: 'blog-app-ee678.appspot.com',
    messagingSenderId: '534437626017',
    appId: '1:534437626017:web:fcde777a2a71d4887570e0',
  },
  endpoints: {
    'posts-api': 'https://blog-app-ee678.herokuapp.com/posts'
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
