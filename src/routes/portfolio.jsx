import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import { SiJsonwebtokens } from 'react-icons/si';
import { DiGithubAlt } from 'react-icons/di';
import PortfolioElement from '../components/portfolioElement/PortfolioElement';


import styles from './styles/portfolio.module.scss';

const Portfolio = () => {
    const [isMouseOver1, setIsMouseOver1] = useState(false);
    const [isMouseOver2, setIsMouseOver2] = useState(false);
    const [isMouseOver3, setIsMouseOver3] = useState(false); 
    const [isMouseOver4, setIsMouseOver4] = useState(false);
    const [isMouseOver5, setIsMouseOver5] = useState(false);
    const [isMouseOver6, setIsMouseOver6] = useState(false);
    const [isMouseOver7, setIsMouseOver7] = useState(false);
    const [isMouseOver8, setIsMouseOver8] = useState(false);


  return (
    <>
        <div className={styles.Portfolio}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>My Portfolio</h1>
                <p>Some of my works:</p>
            </div>
            <ul>
                <li>
                    <PortfolioElement
                        isMouseOver={isMouseOver1}
                        image="./../weather.png"
                        link1="https://antonellaschillaci.github.io/today-weather-app-in-Palermo/"
                        link2="https://github.com/AntonellaSchillaci/today-weather-app-in-Palermo"
                        description="The 'Today Weather App in Palermo' application provides weather information in real time for the city of Palermo (select with all cities in the province) and the world. The app was developed using HTML, CSS and JavaScript."
                    />
                </li>

                <li>
                    <PortfolioElement
                        isMouseOver={isMouseOver2}
                        image="./../poke.png"
                        link1="https://antonellaschillaci.github.io/Pokedex/"
                        link2="https://github.com/AntonellaSchillaci/Pokedex"
                        description="The 'Pokédex' application allows users to view the top 649 Pokemon and their type. Each Pokemon card features a different color, defined according to the type of Pokemon."
                    />
                </li>

                <li>
                    <PortfolioElement
                        isMouseOver={isMouseOver3}
                        image="./../users.png"
                        link1="https://react-router-tau-nine.vercel.app/"
                        link2="https://github.com/AntonellaSchillaci/react-router"
                        description="The 'React-Router' application was created to practice using this. react-router is used to manage navigation within the web application and display user information and their posts in a user-friendly way."
                    />
                </li>

                <li>
                    <PortfolioElement
                        isMouseOver={isMouseOver4}
                        image="./../blog.png"
                        link1="https://next-blog-coral-seven.vercel.app/"
                        link2="https://github.com/AntonellaSchillaci/next-blog"
                        description="The 'next-blog' app is a blog built with Next.js that presents posts and images in a column and allows users to read the full posts by clicking the 'Continue reading' button. The interface is intuitive and easy to use, making it easier for users to navigate through the blog."
                    />
                </li>

                <li>
                    <PortfolioElement
                        isMouseOver={isMouseOver5}
                        image="./../todolist.png"
                        link1="https://react-todolist-pi-two.vercel.app/"
                        link2="https://github.com/AntonellaSchillaci/react-todolist"
                        description="'To Do List' application is a to do list which allows the user to add, delete and mark as done tasks. The user interface is intuitive and easy to use, allowing the user to manage their to-do list efficiently."
                    />
                </li>

                <li>
                    <PortfolioElement
                        isMouseOver={isMouseOver6}
                        image="./../cheep.png"
                        link1="https://cheep-pearl.vercel.app/"
                        link2="https://github.com/AntonellaSchillaci/cheep"
                        description="'Cheep' is a Twitter clone with a different design. The application features a homepage, a contact list, a section of the most popular messages and a button to create a new post. The user interface is designed to be easy to use, allowing users to interact with others and share their thoughts easily and instantly."
                    />
                </li>

                <li>
                    <PortfolioElement
                        isMouseOver={isMouseOver7}
                        image="./../note.png"
                        link1="https://react-note-lovat.vercel.app/"
                        link2="https://github.com/AntonellaSchillaci/react-note"
                        description="The 'Notes' application is a web application that allows users to create, search and delete their own personal notes. The login page prompts the user to login, saving the username in the local archive."
                    />
                </li>

                <li>
                    <PortfolioElement
                        isMouseOver={isMouseOver8}
                        image="./../quiz.png"
                        link1="https://triviagame-eta.vercel.app/"
                        link2="https://github.com/AntonellaSchillaci/CB5-final-project-gruppoD"
                        description="The 'Quiz-Zone' app was developed in teams. It's a quiz game that takes place in three rounds, each with an increasing level of difficulty. The game uses Firebase to save players' score only if it exceeds 15 points. The user interface is intuitive and easy to use, creating an immersive and fun gaming experience."
                    />
                </li>

            </ul>
        </div>
      <Outlet />
      </>
  );
};

export default Portfolio;
