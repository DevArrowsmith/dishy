# Dishy (Frontend) 🍜✨

## Introduction

Dishy is a food rating and searching app. It differs from other culinary apps in that its focus isn't on the reputation of  *restaurants*, but that of *specific dishes* at specific restaurants.

This repo contains the frontend of the app. The backend can be found [here](https://github.com/hughsylinden/dishy-backend).


*This project was created by [Hugh Kristiansen](https://github.com/hughsylinden) and [David Arrowsmith](https://github.com/DevArrowsmith?tab=following) as their final project of the Manchester Codes [Software Enginnering FastTrack](https://www.manchestercodes.com/software-engineer-fasttrack/).*

---

## Concept

Suppose you craved a hotdog. Plenty of restaurants serve hotdogs, and ratings for those restaurants are available via various apps such as google, yelp and tripadvisor. But the best restaurant doesn't necessarily serve the best hotdog. It may serve a pretty average hotdog.

Dishy doesn't aggregate restaurant ratings. It aggregates **dish ratings**. It won't tell you which restaurant is the best in the city, but it **will** tell you where to get the best hotdog in the city; or the best milkshake, the best ramen, the best sundae, the best dahl...

Dishy provides two core services.
1. **Rate a Dish:** Users can submit ratings for specific dishes at specific restaurants. Ratings are out of 10.
2. **Find a Dish:** Users can search for a specific dish in their current location or in a location they input. Dishes are shown as a list ordered either by rating (best rated first) or by proximity (closest first).

---

## Running the App

To run the app locally:
- Clone this repo
- Navigate to root in a bach terminal
- Run `npm start`
- You'll also need to host the backend. The backend and instructions on its use can be found [here](https://github.com/hughsylinden/dishy-backend).

In time this app will be hosted online.

---

## Technologies

- React was used to create the UI.
- Axios was used to handle communications with the backend.
- eslint & prettier were used for linting.