import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import styles from "../css/Button.module.css";
import divstyles from "../css/Div.module.css";
function Home() {
    return (
        <>
            <div className={divstyles.maindiv}>
                <h1>포켓몬 리멤버</h1>
                <div className={divstyles.homediv}>
                    <Link to="/Typecal">
                        <button className={styles.typebtn}>타입 상성 계산기</button>
                    </Link>
                    <Link to="/remember">
                        <button className={styles.logbtn}>실전개체 기록</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )

}

export default Home;