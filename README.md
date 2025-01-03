# Assignment 2 - Web API.

Name: Ryuta Ikejiri

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + THe first public page that appears allows you to jump to the sign up or login page.
 + After logging in, the word "login" on the site header has been changed to "sign out" so that users can sign out by pressing the button "sign out". 
 + A profile page was created showing the user name.
 + Added a favorites field to the user collectoin and created a button on the movie card to add to the user's favorites field, so that when pressed , the informtion is added to the database. However, on the database, it was added, but due to the errors and lack of my ability , I could not display it on the page.

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` file and what variables to put in it. Give an example of how this might be done.

REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

______________________
NODEENV=development
PORT=8080
HOST=localhost
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies | GET | Gets a list of movies 
- /api/movies/:id | GET | Get information of movie
- /api/tmdb/upcoming | GET | Get upcoming movies from tmdb api
- /api/tmdb/genres | GET | Get genres of movies from tmdb 
- /api/tmdb/popular | GET |  Get popular movies from tmdb
- /api/tmdb/movie/:id/images | GET | Get images of a movie specified from id from tmdb
- /api/tmdb/movies | GET | Get movies from tmdb api
- /api/tmdb/movie/:id | GET | Get information of specified movie by id from tmdb
- /api/tmdb/movie/:id/reviews | GET | Get reviews of a movie from tmdb
- /api/tmdb/movie/:id/credits | GET | Get movie credits of a movie from tmdb
- /api/tmdb/person/popular | GET | Get popular actors from tmdb 
- /api/tmdb/person/:id | GET | Get information of a actor
- /api/tmdb/person/:id/images | GET | Get images of a actor specified by id
- /api/users | GET | Get users in user collection
- /api/users | POST | Create a User
- /api/users/:id | PUT | Update a user 
- /api/users/favorites | GET | Get movie favorites of a user
- /api/users/favorites | POST | Add a movie as favorites of a user
- /api/favorites/:movieId | DELETE | Delete movie from favorites of a user

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).

## Security and Authentication

Give details of authentication/security implemented on the API (e.g. passport/sessions). Indicate which routes are protected.

Details:
This API uses JWT for authentication. Users must
log in to receive a JWT token. The token must be included in the "Authorization" header of subsequent requests to access protected routes. The authenticate middleware is used to validate the token and identify the user for protected routes. 

Public Routes:
- "/login" - Login page
- "/signup" - Signup page
- "/" - Public page

Protected Routes:
- "/movies/favorites" - Favorite movie page
- "/reviews/:id" - Reviews of a movie
- "/movies/:id" - Detail page of a moive
- "/home" - "home page"
- "/reviews/form"
- "/movies/upcoming" - "upcoming movies page "
- "/movies/popular" - "popular movies page"
- "/actors" - "popular actors page"
- "/actors/:id" - "details page of a actor"
- "/profile" - "profile page of a user"


## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.

Integration Details:
- The react app uses fetch to send HTTP requests to the web API. Each request includes a JWT token in the Authorization header for authentication.
- Pages that require user authentication are wrapped in a protected routes which ensurers the user is logged in before accessing the pages.

Views:
- Profile page
- Favorites page (not created properly, 
succeeded to save in database but I could't display user favorites on a page.)
- Log in page
- Sign up page
- Other pages are pages created from data retrieved from the TMDB API by the backend and data retrived from WEB-API on the front end. 

Updates from Assignment One:
- Authentication: Added login and signup pages, integrated JWT-based authentication with the Web-API.
-

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app.   
