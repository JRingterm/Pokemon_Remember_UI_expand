import styles from "../css/layout.module.css";

function Header({title}){
    return (
        <header className={styles.header}>    
            <h1>{title}</h1>
            <hr/>
        </header>
    );
};

export default Header;