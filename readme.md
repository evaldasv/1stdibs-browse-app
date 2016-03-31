### 1stdibs.com front-end developer React quiz ###

Using React and Flux architecture render App with these pages:
- Browse - all the items on the page `browse.png`
- PDP - specific product detail page with more info about the item `pdp.png`

#### Server side notes ####
Steps to run local server:
- `npm install`
- `npm run dev`

At this point you should be able to access `localhost:3001` in your browser.

*Everything should work with Node `v4.0.0` and up.*

#### Client side notes ####
Page entry JavaScript files are located in `app/entries` folder.

Wepack will compile all your CSS and JS assets.

#### Requirements ####
**Browse page:**

1. Fetch items data from server side using this endpoint: `[GET] /browse/data`.
2. Render items, example layout: `browse.png`.
3. Add `Load More` button, which should fetch additional items from the same endpoint.

**Pdp:**

1. Fetch item data from server side using this endpoint: `[GET] /pdp/{id}/data`.
2. Render item, example layout: `pdp.png`

**Bonus points:**

1. Add item favoriting, examples: `favorite-browse.png` and `favorite-pdp.png`, its up to you were you store the data (server, db, browser, file or your solution).
2. Client side routing: navigating through the app should work using browser history - single page application.

**CSS:**

1. You can use any framework or just write your own styles. Don't need to totaly match given examples.

#### Tips ####
1. You can use any [Flux framework](https://github.com/voronianski/flux-comparison).
2. You can require your CSS files in your Javascript [CSS Modules](https://github.com/css-modules/css-modules) are hooked up to Webpack.
3. You can use ES6 as [Babel](https://babeljs.io/) is integrated too.
4. You can change webpack/node configs as you like.

