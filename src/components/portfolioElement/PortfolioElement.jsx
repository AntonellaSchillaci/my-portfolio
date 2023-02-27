import { useState } from 'react';
import { SiJsonwebtokens } from 'react-icons/si';
import { DiGithubAlt } from 'react-icons/di';
import styles from './index.module.scss';

const PortfolioElement = ({ isMouseOver, image, link1, link2, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className={styles.element}
      onMouseOver={() => setShowDescription(true)}
      onMouseOut={() => setShowDescription(false)}>
      {showDescription || isMouseOver ? (
        <div className={styles.description}>
          <p>{description}</p>
        </div>
      ) : (
        <img src={image} alt="portfolio item" />
      )}
      <div className={styles.buttonsContainer}>
        <a href={link1} target="_blanck" className={styles.link1}><SiJsonwebtokens /></a>
        <a href={link2} target="_blanck" className={styles.link2}><DiGithubAlt /></a>
      </div>
    </div>
  );
};

export default PortfolioElement;

  