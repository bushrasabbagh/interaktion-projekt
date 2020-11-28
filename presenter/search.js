function Search(){
  const [searchstring, setSearchstring]= React.useState(""); 
  const [promise, setPromise]=React.useState(null);
    React.useEffect(()=>setPromise(SearchModel.searchId({})),
    []);

    const [data, error]= usePromise(promise);

    return h(React.Fragment, {}
        , h(SearchFormView, {  onText: text => setSearchstring(text) ,
          onSearch: ()=> {
              if (promise != null)
              setPromise(SearchModel.searchId({searchstring: searchstring})), [];
            },
         } ),
         promiseNoData(promise, data, error) || h(SearchResultsView, {
             searchResults:data, getId: siteId => {model.setCurrentStation(siteId)}
            }
            )    
      );


         
}