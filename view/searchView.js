const SearchResultsView = ({searchResults, getId,nav:[navCallback, navLabel],stationAdded, trips}) =>
<div>
{searchResults.map((station) => (
    <span key={station.siteId} className="searchResult">
           <div>
        
        <button onClick={()=> navCallback()} >{navLabel}
        <span  onClick={()=> {getId(station.SiteId)}} >{station.Name}</span>
        </button >
        <button onClick={()=>stationAdded(station)}>
        Add to Fav
        </button>
       
      </div>
      
    </span>
    ))}
<div> Current Trips!
        {trips.map(trip=>
          <div>{trip.Name}</div>
        )}
      </div>
</div>  

  const SearchFormView = ({ onSearch, onText }) =>
      <div>
  
          <input type={"text"} placeholder="Station" onChange={(event) => onText(event.target.value)}/>
              
  
              <button onClick={(event) => onSearch(event.target.value)} >Search!</button>
      </div>