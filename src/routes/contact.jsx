import { Outlet } from 'react-router-dom';
import styles from './styles/contact.module.scss';

const Contact = () => {
  return (
    <>
        <div className={styles.contactPage}>
            <h1 className={styles.title}>Contact Me <img src="./../letter.png"></img></h1>
            <form action="https://formspree.io/f/mbjegwjr" method="POST">
                <div className={styles.container}>
                    <input type="text" name="name" placeholder="Your Name" autoComplete='off' required/>
                    <input type="email" name="email" placeholder="Your Email" autoComplete='off' required/>
                    <textarea name="message" placeholder="Your Message" autoComplete='off' required></textarea>
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
        <Outlet />
      </>
  );
};

export default Contact;
