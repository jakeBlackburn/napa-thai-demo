# Napa Thai Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.

This app is a simple single page Angular app served with express and uses a service called GloriaFood to make online ordering and payment easy to configure. A live demo is up @ - https://napa-thai-demo.herokuapp.com . The page includes an image gallery, information about the restaurant, and a google map created with @angular/google-maps. It includes an HTML snippet found in the buttons component - (src/app/buttons) which links to the GloriaFood API, retrieving the menu/reservation options associated with the restaurant profile. Because this is just a demo, the buttons lead to "demo restaurant" with limited options, but changing things such as adding a new item to the menu is as simple as logging in to the GloriaFood dashboard and updating the details/configuration.

p.s. - 
The live demo does not have a working map, this is because the google maps api key is not accesible on heroku without exposing it publicly. I've looked into solutions for this, but angular does not have much native support for env variables in the first place, and Im using a custom webpack builder to inject the API key into the HTML so I can't get it to work without making the .env file public.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files. Also you'll need to add a .env file with your google maps api key set to "NG_APP_GOOGLE_MAPS_API_KEY".
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Start

Run `npm start` to serve the app with express on localhost:3000. you will need to build the app with ng build first. 

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
