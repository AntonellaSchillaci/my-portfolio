import {AiFillHome} from 'react-icons/ai';
import {GiSkills} from 'react-icons/gi';
import {MdWork} from 'react-icons/md';
import {RiContactsBook2Fill} from 'react-icons/ri';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.logo}>
          <img src="./developer.png" alt="logo" />
      </div>
      <ul>
        <li>
          <Link to="/" className={styles.link}><AiFillHome className={styles.icon} />Home</Link>
        </li>
        <li>
          <Link to="/skills" className={styles.link}><GiSkills className={styles.icon}/>Skills</Link>
        </li>
        <li>
          <Link to="/portfolio" className={styles.link}><MdWork className={styles.icon}/>Portfolio</Link>
        </li>
        <li>
          <Link to="/contact" className={styles.link}><RiContactsBook2Fill className={styles.icon}/>Contact</Link>
        </li>
      </ul>
    </nav>
  );
  };
  
  export default Navbar;
  

  
  
  
  
  
  