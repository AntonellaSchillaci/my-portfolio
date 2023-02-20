import { useState } from 'react';
import styles from './index.module.scss';

export default function Skill({ icon, name }) {
  const [hover, setHover] = useState(false);

  return (
    <li
      className={styles.skill}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {icon}
      {hover && <div className={styles.skillName}>{name}</div>}
    </li>
  );
}

