# AnimeJourney
## Project Descriptoin
 It's a solo project, where you can track you favorite animes, newest anime and upcoming anime. If you make an account you will be able to make your own anime list by marking them as watching, on-hold, drop and plan to watch, you can give it a score from 1-10 and leave a review if you want. It's not a streaming application, but maybe in the future will be, this project is still work in progress.

![image](https://github.com/IacobOliver/AnimeJourney/assets/119490133/7ffbb2af-cc30-4dfe-9a2f-7682486e25a6)

 ## Tehnologies Used : 
 
 - Spring: Accelerated Java application development, creating necessary APIs and database repositories.
 - PostgreSQL : A local relational database for storing the anime and the users and thier anime lists
 - React :  A popular web application library known for its effectiveness in creating interactive and dynamic UI components.
 - Tailwind: Used for impressive and responsive styling, in addition to custom CSS.
 - CSS: Additional custom styling.

## Challenges

- For now, the biggest challenge is to make the page look more and more professional and to decide how the page will look on different sizes
- One more challenge that i think i will have when implementing users it's to save their anime list, because i want to make it efficient. Currently I am using jikan api, and i saved some data form the api in my db, the biggest flaw of this api is that it has a limit of 3 requests per second, so i need to think twice as much about what i save and how i save in my db.

## Future Plans

- for now, finishing the detailed page of an anime
 ![image](https://github.com/IacobOliver/AnimeJourney/assets/119490133/1270ac60-e807-498c-9e43-4e455642898e)

- implementing users with spring security
- making the search page and adding filters for searching the anime, now i have just the autocomplete

  ![image](https://github.com/IacobOliver/AnimeJourney/assets/119490133/7474b41a-4c02-4265-87e5-bdb3d93afb25)

  
- maybe if i have the resouces to stream some anime on it
- maybe some premium options that you will ne to pay for

## Setup 
- i i know this part is a little hard, but i didn't have a choice, the api that i used forced me to do this. In the future i want to make a script that automaticaly creates a db in your postgre application and doind all by itself the populate

 ### Backend Setup

1. Prerequisites:
 - Ensure you have the latest LTS (Long Term Support) version of Java Development Kit (JDK) installed on your system.
 - If needed, reload Maven dependencies by right-clicking the pom.xml file and selecting "Maven -> Reload Project."
 - have PostreSQL installed and make a db for this project to store the data

2. Run the server :
   - start the backend server by runnning the AnimeJourney class
  

### Frontend Setup

1. Prerequisites:
- Make sure Node.js is installed and properly configured on your system.

2. Install the dependecies
- Navigate to the Frontend directory in your terminal with ``` cd ./frontend```
- - Run the following command to install the necessary dependencies:
      ```
      npm install
      ```
      (Alternatively, you can use `pnpm install`.)
3. Populate the database
- Navigate to the populate folder in frontend with ``` cd./frontend/populate```
- here you need to run the command ```node populateNewAnimeSeasons``` and when it says "POPULATE DONE" run ```node populateTopAnime``` and wait for it to finish
- you are now setup, navigate back in the frontend folder with ```cd ..``` and run ``` npm run dev``` then ```Ctrl + Click``` on the first link
- make sure you have both the frontend and the backend :)

## How to Use 

- in the top layout you can search for anime and login or create your account
- you can navigate through the top anime carrousel using the arrows or let it flow
- you have the section of the new seasons anime where you use the arrows to select the next or previous, and also you can select your wanted filter
- in the bottom right corner you have a list with 9 random upcoming anime, you can see more by pressing on the refresh button
- when you enter on an anime you can control the trailer setting and in the future i will fill this page with more info and a formular to add the anime to you list with the status that you want
  
