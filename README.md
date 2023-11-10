# AnimeJourney
## Project Description
 It's a solo project, where you can track you favorite animes, newest anime and upcoming anime. If you make an account you will be able to make your own anime list by marking them as watching, on-hold, drop and plan to watch, you can give it a score from 1-10 and leave a review if you want. It's not a streaming application, but in the future will be, PROJECT PROVIDES A FULL RESPONSIVE DESING, this project is still work in progress.
 

![image](https://github.com/IacobOliver/AnimeJourney/assets/119490133/e998cbf0-0bf3-4fd0-a625-5d70c8d25df0)


 ## Tehnologies Used : 
 
 - SpringBoot : Accelerated Java application development, creating necessary APIs and database repositories.
 - SpringSecurity : It provides protection against attacks like session fixation, clickjacking, cross site request forgery, etc.
 - ![image](https://github.com/IacobOliver/AnimeJourney/assets/119490133/d27542bf-575c-4300-8aac-0d89534335e5)

 - Supabase : A remote relational database, you can use it for a fast setup to visit the site !
 - PostgreSQL : A local relational database for storing the anime and the users and thier anime lists (OPTIONAL for a better performance)
 - React :  A popular web application library known for its effectiveness in creating interactive and dynamic UI components.
 - Tailwind: Used for impressive and responsive styling, in addition to custom CSS.
 - CSS: Additional custom styling.

## Challenges

- For now, the biggest challenge is to make the page look more and more professional and to decide how the page will look on different sizes
- making the users to customize their own list with an efficient strategy

## Future Plans

- for now, finishing the detailed page of an anime
 ![image](https://github.com/IacobOliver/AnimeJourney/assets/119490133/2354d096-831d-47f3-8641-d65b19f19b35)



- making the search page and adding filters for searching the anime

  ![image](https://github.com/IacobOliver/AnimeJourney/assets/119490133/7474b41a-4c02-4265-87e5-bdb3d93afb25)

  
- if i have the resouces, I'll stream some anime on it
- implementing some premium options that you will ne to pay for
- a page to see what anime you added to your list along with filter and others
- a page to contact the developer for bugs or reviews
- a page for profile, to edit user details and profile image or if you want an avatar image
- a settings page
  ![image](https://github.com/IacobOliver/AnimeJourney/assets/119490133/9137570b-582c-48e4-9d6f-a7d9a8322937)


## Setup 

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
    
3. Populate the database on local db (OPTIONAL)
IMPORTANT !!! -> If the site won't load if you did everything right, it's very possible for the SupabaseDB to be down due to inactivity, mail me at olialexander08@gmail.com and I will get it back up again!
- For a beeter performance you can save the animes on your local db, you need to have postgreSQL installed and create a db in pgAdmin, then in the project in backend/src/main/resources/application.properties
- you need to modify this with your info
   ```
     spring.datasource.url=jdbc:postgresql://jdbc:postgresql://localhost:5432/  YOUR DATABASE NAME
    spring.datasource.username= YOUR USERNAME
    spring.datasource.password=  YOUR PASSWORD
   ```
- Navigate to the populate folder in frontend with ``` cd./frontend/populate```
- here you need to run the command ```node populateNewAnimeSeasons``` and when it says "POPULATE DONE" and  run ```node populateTopAnime``` and wait for it to show the same message
- you are now setup, navigate back in the frontend folder with ```cd ..``` and run ``` npm run dev``` then ```Ctrl + Click``` on the first link
- make sure you have both the frontend and the backend :)

## How to Use 

- in the top layout you can search for anime and login or create your account
- you can navigate through the top anime carrousel using the arrows or let it flow
- you have the section of the new seasons anime where you use the arrows to select the next or previous, and also you can select your wanted filter
- in the bottom right corner you have a list with 9 random upcoming anime, you can see more by pressing on the refresh button
- when you enter on an anime you can control the trailer setting and in the future i will fill this page with more info and a formular to add the anime to you list with the status that you want
  
