import React, { useEffect, useState } from "react";
import axios from "axios";
import DetailView from "../views/detailView";

function Detail ({match}){
    const [avg, setAvg] = useState('');

    useEffect(()=>{
        axios(`	https://cors-omario.herokuapp.com/https://api.sl.se/api2/realtimedeparturesV4.json?key=6b96962a523f496581fd630b3e44db22&siteid=${match.params.id}`, {
            method: "GET",
        }).then((ResponseData) => {
            if (ResponseData.status === 200) {
                setAvg(ResponseData.data.ResponseData)
            }
        });
    },[match.params.id])

    return (
        <div>
            <DetailView
                avg = {avg}
            />
        </div>
    );
}
export default Detail;