import styles from '../styles/Home.module.css';

import ShoppingListApp from '../projects/Nanodegree_05_React/00_Fundamentals_Exercises/L3. State Management/5. Controlled Components II/MySolution/src/App.js'
import GamesPlayedApp from '../projects/Nanodegree_05_React/00_Fundamentals_Exercises/L3. State Management/6. All Together/MySolution/src/App.js'
import ChatApp from '../projects/Nanodegree_05_React/00_Fundamentals_Exercises/L4. Hooks/1. State Management Recap/MySolution/src/App.js'
import MathGame from '../projects/Nanodegree_05_React/00_Fundamentals_Exercises/L4. Hooks/2. State and Side Effects/MySolution/src/App.js'

const ShowCase = () => {

    return (
        <div className={styles['show-case']}>
            <div className={styles['show-case-example']}> <ChatApp /> </div>
            <div className={styles['show-case-example']}> <ShoppingListApp/> </div>
            <div className={styles['show-case-example']}> <GamesPlayedApp /> </div>
            {/* <div className={styles['show-case-example']}> <MathGame/> </div> */}
        </div>
  );
};

export default ShowCase;
