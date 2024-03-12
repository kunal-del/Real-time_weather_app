/**
 * @license MIT
 * @fileoverview Menage all routes
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */
'use strict';

import { updateWeather, error404 } from "./app.js" ;
const defautLocation = "#/weather?lat=51.5073219&lon=-0.1276474" // london
const currentLocation = function () {
    window.navigator.geolocation.getCurrentPosition ( res => {
        const {latitued , longitude} = res.coords;

        updateWeather(`lat=${latitued}`, `lon=${longitude}`);
      err => {
          window.location.hash = defautLocation;
    }
    })
}

/** 
 * @param {string} query Searched query
 * 
 * 
 * **/

const searchedLocation = query => updateWeather(...query.split("&"));
// updateWeather("lat=51.5073219", "lon=-0.1276474")

const routes = new Map ([
    ["/current-location", currentLocation],
    ["/weather", searchedLocation]
]);

const checkHash = function () {
    const requestURL = window.location.hash.slice(1);
   const [route , query] =  requestURL.includes ? requestURL.split("?") : [requestURL]

   routes.get(route)
}

window.addEventListener("hashchange", checkHash);
window.addEventListener("load", function () {
    if(!window.location.hash) {
        window.location.hash = "#/current-location"
    }else {
        checkHash();
    }
});