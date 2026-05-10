import { useState } from "react";
import styles from "./Button.module.css"
import UserGreeting from "./UserGreeting";

function Button() {

    const [isLogged,setIsLogged] = useState(false)
    const username = "Batman"
    const [buttonText, setButtonText] = useState("Login")

    const handleClick = () =>{
        isLogged ? setIsLogged(false) : setIsLogged(true);
        isLogged ? setButtonText("Login") : setButtonText("Logged")
    }

    return (
        <div className={styles.button}>
            <button onClick={() => handleClick()}>{buttonText}</button>

            <div className={styles.userGreetings}>
                <UserGreeting isLoggedIn={isLogged} username={username} />
            </div>

        </div>
    );
}

export default Button