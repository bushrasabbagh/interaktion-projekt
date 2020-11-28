const SearchModel = {
    apiCall(params) {
        return fetch(BASE_URL + params, {
            "method": "GET",
           
        })
            // from headers to response data
            .then(handleHTTPError)
            .then(response => response.json());
    },

    apiCall2(params) {
        return fetch(Search_URL + params, {
            "method": "GET",
           
        })
            // from headers to response data
            .then(handleHTTPError)
            .then(response => response.json());
    }
    ,  // comma between object methods, like between any properties!  
    searchId(searchParams) {
        return this.apiCall(new URLSearchParams(searchParams))
        // dishSource.serachDishes(type: dessert, query: tiram)
        // dishSource.serachDishes(dessert,tiram)
            // leave out the unimportant parts of the response data
            .then(data => data.ResponseData )
            .catch(console.error);

    },

    searchTrip(searchParams) {
        return this.apiCall2(new URLSearchParams(searchParams))
        // dishSource.serachDishes(type: dessert, query: tiram)
        // dishSource.serachDishes(dessert,tiram)
            // leave out the unimportant parts of the response data
            .then(data => data.ResponseData)
            .catch(console.error);

    }


};

function handleHTTPError(response) {
    if (response.ok)
        return response;
    throw Error(response.statusText);
};