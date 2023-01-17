import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Offence({id}) {
    const [types, setTypes] = useState([]);
    const getPokemonTypes = async () => { //전달받은 id에 해당하는 포켓몬 타입 api 가져옴
        const json = await(
            await fetch(`https://pokeapi.co/api/v2/type/${id}/`)
        ).json();
        console.log(json);
        setTypes(json.results);
    };
    useEffect(()=>{
        getPokemonTypes();
    },[setTypes])
    return(
        <>
            <p>전달받은 id에 해당하는 공격시 효과에 대해 알려줌</p>
            <div>
                {types.map((type) => (
                    <ul>
                        {type.double_damage_to.map((ddt) => (
                            <li key={type.id}>{ddt.name}</li>
                        ))}
                        {type.half_damage_to.map((hdt) => (
                            <li key={type.id}>{hdt.name}</li>
                        ))}
                        {type.no_damage_to.map((ndt) => (
                            <li key={type.id}>{ndt.name}</li>
                        ))}
                    </ul>
                ))}
            </div>

        </>
    )
}

export default Offence;