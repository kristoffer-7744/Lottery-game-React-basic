import { useState } from "react";

export default function Button(){
    let [n1, setN1state] = useState(0);
    let [n2, setN2state] = useState(0);
    let [n3, setN3state] = useState(0);

    function generateNewTicket(){
        setN1state(() => Math.floor(Math.random() * 10) + 1);
        setN2state(() => Math.floor(Math.random() * 10) + 1);
        setN3state(() => Math.floor(Math.random() * 10) + 1);
    }
    
    const sum = n1+n2+n3;
    return (
        <>
            <div>
                <h1>{n1}&nbsp;&nbsp;{n2}&nbsp;&nbsp;{n3}</h1>   
                { sum == 15 ?
                    <h2 style={{backgroundColor: "green", borderRadius: "2rem"}}>!! You Won The Lottery <i class="fa-solid fa-heart" style={{color: "white", fontSize: "1.6rem"}}></i> !!</h2>:
                    <h2 style={{backgroundColor: "red", borderRadius: "2rem"}}>!! Better Luck Next Time <i class="fa-solid fa-heart-crack"style={{color: "white", fontSize: "1.6rem"}}></i> !!</h2>}
                <button onClick={generateNewTicket}>Try Your Luck</button>
            </div>
        </>
    )
}