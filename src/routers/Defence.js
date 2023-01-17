import divstyles from "../css/Div.module.css";
import Footer from "../components/Footer";
import styles from "../css/styles.css";
import { Link } from "react-router-dom";

function Defence() {
    return(
        <>
        <div className={divstyles.maindiv}>
            <h1>포켓몬 타입상성 계산기</h1>
            <ul>
                <li><Link to="/Offence">공격</Link></li>
                <li><Link to="/Defence">방어</Link></li>
            </ul>
            <div className={divstyles.contentsdiv}>
                <div className={divstyles.partsdiv}>

                </div>
                <div className={divstyles.partsdiv}>

                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default Defence;