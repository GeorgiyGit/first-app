// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: "https://events-rivne.azurewebsites.net/",
  emailMinLength:10,
  emailMaxLength:200,
  
  userMinLength:5,
  userMaxLength:100,

  passwordSort:"^(?=.*\d)(?!.*\s)(?=.*[a-zA-Z]).{8,20}$",


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
