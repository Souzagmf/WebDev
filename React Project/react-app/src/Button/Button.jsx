import styles from "./Button.module.css"

function Button(){
    return(
        <div className={styles.button}>
            <h1>Button Section</h1>
            <button>Click Me</button>
        </div>
    );
}

export default Button