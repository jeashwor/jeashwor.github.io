import React from "react";
import Project from "../components/Project";

const projects = [
    {
        id: 1,
        name: "Show Me The Brews",
        img: "/images/brewsScreenShot.png",
        description: "A Node.js based application that allows a user to create an account, log favorite beers, and search for new breweries to visit in other areas Admin level allows for review of all users and favorite beers, in addition to granting admin permission to other users.",
        pageLink: "https://mighty-mesa-69962.herokuapp.com/",
        repo: "https://github.com/jeashwor/The_Silent_Turtles"
    },
    {
        id: 2,
        name: "Impetus",
        img: "/images/Project1_ScreenShot.png",
        description: "Get a better start to your day with this landing page. A JavaScript based html application that allows a user to start their day with an inspirational quote, current local weather, local events, and much more.",
        pageLink: "https://jeashwor.github.io/Project_One/",
        repo: "https://github.com/jeashwor/Project_One"
    },
    {
        id: 3,
        name: "React Employee Directory",
        img: "/images/EmployeeScreenShot.png",
        description: "A React based employee directory that allows a user to filter a list of employees based on column categories. User can narrow down list using input field, in addition to sorting employ list alphabetically by there last name.",
        pageLink: "https://jeashwor.github.io/react_employee_directory/",
        repo: "https://github.com/jeashwor/react_employee_directory"
    },
    {
        id: 4,
        name: "PWA Budget Tracker",
        img: "/images/PWAimage.png",
        description: "A Progressive Web Application allowing a user to keep track of there daily budget while both on and offline. Application uses IndexedDB in order to store offline transactions, and on connection will transfer the stored transactions to the MongoDB database. Application uses MongoDB, Express.JS, and service workers to accomplish the task.",
        pageLink: "https://lit-lake-70806.herokuapp.com/",
        repo: "https://github.com/jeashwor/PWA_Budget_Tracker"
    },
    {
        id: 5,
        name: "Fitness Tracker",
        img: "/images/FitnessImage.png",
        description: "A Node.js based application using a combination of Express and MongoDB in order to View, Create, and Track daily workouts. User is able to log multiple exercises in a workout on a given day, and track stats for exercises completed.",
        pageLink: "https://ancient-peak-58816.herokuapp.com/?id=5f8b77034051ac0022f05811",
        repo: "https://github.com/jeashwor/Fitness_Tracker_JEA"
    },
    {
        id: 6,
        name: "Eat Da Burger App",
        img: "/images/BurgerScreenshot.png",
        description: "A restaurant style app using MySQL, Node, Express, Handlebars, and a homemade ORM that allows a users to keep track of tasty burgers they would like to eat or have eaten.",
        pageLink: "https://peaceful-hamlet-07367.herokuapp.com/",
        repo: "https://github.com/jeashwor/JEA-Eat_Da_Burger"
    }
]
function Portfolio() {
    return (
        <div className="container-sm area content">
            <div className="row no-gutters justify-content-md-center area">
                {projects.map(proj => (
                    <Project {...proj} />
                ))}
            </div>
            
        </div>
    )
}

export default Portfolio;