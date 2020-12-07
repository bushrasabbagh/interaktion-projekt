const SearchResultsView = ({ searchResults, getId, nav:[navCallback, navLabel]}) =>
  searchResults.map((station) => (
    <span key={station.siteId} className="searchResult">
      <div>
        <button  onClick={()=> {getId(station.SiteId)}}>choose!
        <button onClick={()=> navCallback()}>{navLabel}</button>
        

        </button >
        <p >{station.Name}</p>
      </div>
    </span>
  ));


  const SearchFormView = ({ onSearch, onText }) =>
      <div>
  
          <input type={"text"} placeholder="Station" onChange={(event) => onText(event.target.value)}/>
              
  
              <button onClick={(event) => onSearch(event.target.value)} >Search!</button>
      </div>