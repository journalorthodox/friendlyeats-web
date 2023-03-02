/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

FriendlyEats.prototype.addRestaurant = function(data) {
  /*
    TODO: Implement adding a document
  */
};

FriendlyEats.prototype.getAllRestaurants = function(renderer) {
  /*
    TODO: Retrieve list of restaurants
  */
};

FriendlyEats.prototype.getDocumentsInQuery = function(query, renderer) {
  query.onSnapshot(function(snapshot) {
    if (!snapshot.size) return renderer.empty(); // Display "There are no restaurants".

    snapshot.docChanges().forEach(function(change) {
      if (change.type === 'removed') {
        renderer.remove(change.doc);
      } else {
        renderer.display(change.doc);
      }
    });
  });
};
In the code above, query.onSnapshot will trigger its callback every time there's a change to the result of the query.

The first time, the callback is triggered with the entire result set of the query – meaning the whole restaurants collection from Cloud Firestore. It then passes all the individual documents to the renderer.display function.
When a document is deleted, change.type equals to removed. So in this case, we'll call a function that removes the restaurant from the UI.
Now that we've implemented both methods, refresh the app and verify that the restaurants we saw earlier in the Firebase console are now visible in the app. If you completed this section successfully, then your app is now reading and writing data with Cloud Firestore!

As your list of restaurants changes, this listener will keep updating automatically. Try going to the Firebase console and manually deleting a restaurant or changing its name - you'll see the changes show up on your site immediately!

Note: It's also possible to fetch documents from Cloud Firestore once, rather than listening for real time updates using the Query.get() method.

img5.png

Back

FriendlyEats.prototype.getRestaurant = function(id) {
  /*
    TODO: Retrieve a single restaurant
  */
};

FriendlyEats.prototype.getFilteredRestaurants = function(filters, renderer) {
  /*
    TODO: Retrieve filtered list of restaurants
  */
};

FriendlyEats.prototype.addRating = function(restaurantID, rating) {
  /*
    TODO: Retrieve add a rating to a restaurant
  */
};
