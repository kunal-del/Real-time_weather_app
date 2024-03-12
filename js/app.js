/**
 * @license MIT
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */
'use strict';
import {fetchData, url} from "./api.js";
import * as module from "./module.js";

/**
 * Add event listener on multiple elements
 * @param  {NodeList} elements Elements node array
 * @param {string} eventType event type e.g.: "click", "mouseover"
 * @param {Function} callback callback 
 * 
 * **/
const addEventOnElements = function (elements, eventType, callback) {
    for(const element of elements) element.addEventListener(eventType,
        callback);
}

/**
 * Toggle search in mobile devices
 * **/

const searchView = document.querySelector("[data-search-view]");
const searchToggleers = document.querySelectorAll("[data-search-toggler]");

const toggleSearch = () => searchView.classList.toggle("active");
addEventOnElements(searchTogglers, "click", toggleSearch);

/**
 * SEARCH INTEGRATION
 * **/


const searchField = document.querySelector("[data-search-field]");
const searchResult = document.querySelector("[data-search-result]");

searchField.addEventListener("input", function () {

    searchTimeout ?? clearTimeout(searchTimeout);
    
    if(!searchField.value) {
        searchResult.classList.remove("active");
        searchResult.innerHTML = "";
        searchField.classList.remove("searching");
    } else { 

        searchField.classList.add(searching);
    }

    if(searchField.value) { 
        searchTimeout = setTimeout(() => {
            fetchData(url.geo(searchField.value), function (location){

                searchField.classList.remove("searching");
                searchResult.classList.add("active");
                searchResult.innerHTML =`
                <ul class="view-list" daat-search-list>
                    <li class="view-item">
                        <span class="m-icon">location_on</span>

                        <div>
                            <p class="item-title">London</p>
                            <p class="lable item-subtitle">State of london, GB</p>
                        </div>

                        <a href="#" class="item-list has-state" data-search-toggler=""></a>

                    </li>
                </ul>`;

                const /**   {Nodelist} | [] */ item = [];
                for (const {name, lat ,lon ,country, state} of location) {
                    
                }
            })
        }, searchTimeoutDuration)
    }
})