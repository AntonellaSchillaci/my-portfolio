import {Outlet} from 'react-router-dom';
import Type from './components/type';
import styles from './App.module.scss';

function App()  {

  return (
    <>
      <div className={styles.App}>
        <div className={styles.title}>
          <h4>Hello 
            <span className={styles.hello}>
                👋🏻
            </span> , I'm
          </h4>
          <h1>
            <img className={styles.set} src="./../set.gif"></img>
              Antonella Schillaci
            <img className={styles.set2} src="./../set2.png"></img>
          </h1>
          <h2>
            <Type />
          </h2>
          <img className={styles.image} src="./../img-home.png" alt="image"></img>
        </div>
      </div>
      <Outlet />
    </>
  )

}


export default App;
