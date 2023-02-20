import { Outlet } from 'react-router-dom';

import { SiJsonwebtokens } from 'react-icons/si';
import { DiGithubAlt } from 'react-icons/di';


import styles from './styles/portfolio.module.scss';

const Portfolio = () => {
  return (
    <>
        <div className={styles.Portfolio}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>My Portfolio</h1>
                <p>Some of my works:</p>
            </div>
            <ul>
                <li>
                   <div className={styles.element}>
                        <img src="./../weather.png" />
                        <div className={styles.buttonsContainer}>
                            <a href="https://antonellaschillaci.github.io/today-weather-app-in-Palermo/" target="_blanck" className={styles.link1}><SiJsonwebtokens /></a>
                            <a href="https://github.com/AntonellaSchillaci/today-weather-app-in-Palermo" target="_blanck" className={styles.link2}><DiGithubAlt /></a>
                        </div>
                   </div>
                </li>

                <li>
                   <div className={styles.element}>
                        <img src="./../poke.png" />
                        <div className={styles.buttonsContainer}>
                            <a href="https://antonellaschillaci.github.io/Pokedex/" target="_blanck" className={styles.link1}><SiJsonwebtokens /></a>
                            <a href="https://github.com/AntonellaSchillaci/Pokedex" target="_blanck" className={styles.link2}><DiGithubAlt /></a>
                        </div>
                   </div>
                </li>

                <li>
                   <div className={styles.element}>
                        <img src="./../users.png" />
                        <div className={styles.buttonsContainer}>
                            <a href="https://react-router-tau-nine.vercel.app/" target="_blanck" className={styles.link1}><SiJsonwebtokens /></a>
                            <a href="https://github.com/AntonellaSchillaci/react-router" target="_blanck" className={styles.link2}><DiGithubAlt /></a>
                        </div>
                   </div>
                </li>

                <li>
                   <div className={styles.element}>
                        <img src="./../blog.png" />
                        <div className={styles.buttonsContainer}>
                            <a href="https://next-blog-coral-seven.vercel.app/" target="_blanck" className={styles.link1}><SiJsonwebtokens /></a>
                            <a href="https://github.com/AntonellaSchillaci/next-blog" target="_blanck" className={styles.link2}><DiGithubAlt /></a>
                        </div>
                   </div>
                </li>

                <li>
                   <div className={styles.element}>
                        <img src="./../todolist.png" />
                        <div className={styles.buttonsContainer}>
                            <a href="https://react-todolist-pi-two.vercel.app/" target="_blanck" className={styles.link1}><SiJsonwebtokens /></a>
                            <a href="https://github.com/AntonellaSchillaci/react-todolist" target="_blanck" className={styles.link2}><DiGithubAlt /></a>
                        </div>
                   </div>
                </li>

                <li>
                   <div className={styles.element}>
                        <img src="./../cheep.png" />
                        <div className={styles.buttonsContainer}>
                            <a href="https://cheep-pearl.vercel.app/" target="_blanck" className={styles.link1}><SiJsonwebtokens /></a>
                            <a href="https://github.com/AntonellaSchillaci/cheep" target="_blanck" className={styles.link2}><DiGithubAlt /></a>
                        </div>
                   </div>
                </li>

                <li>
                   <div className={styles.element}>
                        <img src="./../note.png" />
                        <div className={styles.buttonsContainer}>
                            <a href="https://react-note-lovat.vercel.app/" target="_blanck" className={styles.link1}><SiJsonwebtokens /></a>
                            <a href="https://github.com/AntonellaSchillaci/react-note" target="_blanck" className={styles.link2}><DiGithubAlt /></a>
                        </div>
                   </div>
                </li>
            </ul>
        </div>
      <Outlet />
      </>
  );
};

export default Portfolio;
