import PropTypes from "prop-types"
import styles from "./Button.module.css";

function UserGreeting({username = "None", isLoggedIn = false}) {
    const wellcomeMessage = <h2 className={styles["wellcome-message"]}>Wellcome grandmaster <span className={styles["username-span"]}>{username}</span></h2>
    const loginPrompt = <h2 className={styles['login-prompt']}>Please make <span className={styles["logIn-span"]}>Login</span></h2>
    return (isLoggedIn ?  wellcomeMessage : loginPrompt)
                         
}

UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

export default UserGreeting