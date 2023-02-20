import { Outlet } from 'react-router-dom';
import { ImHtmlFive } from 'react-icons/im';
import { TbBrandJavascript } from 'react-icons/tb';
import { FaReact, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiSass} from 'react-icons/si';
import Skill from './../components/skill/index';
import styles from "./styles/skills.module.scss";
function Skills() {
  return (
    <>
      <div className={styles.skillsPage}>
        <h1 className={styles.title}>My Skills <img src="./../competence.png" /></h1>
        <ul className={styles.skillsList}>
          <div className={styles.skill1}><Skill icon={<ImHtmlFive />} name="HTML5" /></div>
          <div className={styles.skill2}><Skill icon={<TbBrandJavascript />} name="JavaScript" /></div>
          <div className={styles.skill3}><Skill icon={<FaReact />} name="React" /></div>
          <div className={styles.skill4}><Skill icon={<SiNextdotjs />} name="Next.js" /> </div>
          <div className={styles.skill5}><Skill icon={<FaCss3Alt />} name="CSS3" /></div>
          <div className={styles.skill6}><Skill icon={<SiSass />} name="Sass" /> </div>
        </ul>
      </div>
      <Outlet />
    </>
  );
}


export default Skills;
