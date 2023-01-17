import divstyles from "../css/Div.module.css";
import Footer from "../components/Footer";
import Offence from "./Offence";
import Defence from "./Defence";
import styles from "../css/styles.css";
import { useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";

function Typecal() {
    const [menu, setMenu] = useState(0);
    const onClick = (event) => {
        setMenu(event.target.value);
    };

    const [checkedItems, setCheckedItems] = useState(new Set());
    const checkedItemHandler = (id, isChecked) => {
      
    }
    const [ischeck, setIsCheck] = useState(false)

    const onCheck = () => {

    }
    const [types, setTypes] = useState([]);
    const getPokemonTypes = async () => { //포켓몬 타입 api 가져옴
        const json = await(
            await fetch(`https://pokeapi.co/api/v2/type`)
        ).json();
        console.log(json);
        setTypes(json.results);
    };
    useEffect(() => {
        getPokemonTypes();
    },[]);
    return(
        <>
        <div className={divstyles.maindiv}>
            <h1>포켓몬 타입상성 계산기</h1>
            <ul>
                <li><button onClick={onClick} value="0">공격</button></li>
                <li><button onClick={onClick} value="1">방어</button></li>
            </ul>
            <div className={divstyles.contentsdiv}>
                <div className={divstyles.partsdiv}>
                    {menu === "0" ? (types.map((type) => 
                        <>
                        <input
                            type="checkbox"
                            id={type.id}
                            onCheck={onCheck} />
                        <label>{type.name} </label>
                        </>
                    )) : null}
                 <p>체크박스를 누르면, 누른 체크박스의 id가 offence의 프로퍼티로 가고, Offence.js에서 받은 props로 계산하여 결과창을 보여준다.</p>
                    {menu === "1" ? <Defence /> : null}
                </div>
                <div className={divstyles.partsdiv}>
                    <Offence />
                    <p>체크값이 true인것들에 대해서 props 전달.</p>
                </div>
            </div>
            
        </div>

        <Footer />
        </>
    )
}
export default Typecal;