import styles from "./Button.module.css";
import stylesAdded from "./AddedStyles.module.css";

export default function Button({variant = "primary"}) {

    const buttonClass = `${styles.button} ${styles.secondary}`;
    const buttonClassPrimary = `${styles.button} ${styles[variant]}`;

    return (

        <div className={styles.gap}>
            <div >
                 <button className={styles.button}>Button</button>
        <button className={buttonClass}>Button</button>
        <button className={buttonClassPrimary}>Button</button>
            </div>
       <div>
        <a href="#" className={stylesAdded.link}>LINK</a>
        <br />
        <div className={styles["bottom-block"]}>
            Block
        </div>
       </div>
        
        </div>
    )
}