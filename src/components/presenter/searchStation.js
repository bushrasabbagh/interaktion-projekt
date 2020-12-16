import React, { useState } from "react";
import SearchView from "../views/searchView";
import FavoListView from "../views/favoListView";
import axios from "axios";

function Search() {
    const [siteId, setsiteId] = useState('');
    const [loading, setLoading] = useState('');


    const FetchData = (text) => {
        if(text.length>2){
            setLoading('true')
            setsiteId()
        axios(`	https://cors-omario.herokuapp.com/https://api.sl.se/api2/typeahead.json?key=6a667f8a9277480183dadaffdec28d70&searchstring=${text}`, {
            method: "GET",
        }).then((Response) => {
            if (Response.status === 200 && Response.data.StatusCode === 1002) {
                setLoading('1002')
            }
            // else if(Response.status === 200 && Response.data.ResponseData.length===0){
            //     setLoading('NoStation')
            // }
            else if(Response.status === 200){
                setsiteId(Response.data.ResponseData);
                setLoading('false')
            }
        });
    }
    };


        return (
            <>
            <div className='wrapper'
            >
                    <FavoListView />
                <div className="main_content">
                    <SearchView
                        station={FetchData}
                        siteId={siteId}
                        isFetching={loading}

                    />    </div>





            </div>
        </>
        )
}
export default Search;