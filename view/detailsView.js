// const selectTransportType=({onType,station})=>
// <div>


//   {/* const types = ["Metros", "Trains", "Buses","Ships","Trams"]; */}

// {/* <span>
//   <label for="stations">Choose a station:</label>
//   <select name="station" id={"selected"} onChange={(event) => onType(event.target.value)}>
//     <option value="Metros">Metros</option>
//     <option value="Buses">Buses</option>
//     <option value="Trams">Trams</option>
//     <option value="Trains">Trains</option>
//   </select>
//   </span> */}


// </div>;
// {/* <select id={"selected"} onChange={(event) => onType(event.target.value)}>
// <option value="" >Choose Transport Mode:</option>

// {types.map(k => <option key={k} value={k}>{k}</option>)}

// </select>

//   */}

const DetailsView = ({ station, back: [navCallback, navLabel]}) => {
  const transportTypes = ["Buses", "Trains", "Metros", "Ships", "Trams"];
  const transportTypesFilter = ["bus", "train", "metro", "ship", "tram"];
  var filtered = [];
  var all = [];
  Object.keys(station).forEach(function (key) {
    if (transportTypes.includes(key)) { all.push(station[key]) };//to put all transportTypes in one array
  });
  all = all.flat();

  const [type, setType] = React.useState("");
  if(type==""){
    filtered = [...all];
  }
  else {
    filtered = [];
    filtered = all.filter(t => t.TransportMode.toLowerCase() === type);
  }


  return <div class="transportDetails">
    <div>
    <button onClick={() => navCallback()}>{navLabel} Back To Search</button>
    <span>
      <select id={"selected"} onChange={(event) => setType(event.target.value)}>

        {transportTypesFilter.map(k => <option key={k} value={k}>{k}</option>)}

      </select>
      </span>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>Transport Mode</th>
            <th>Destination</th>
            <th>Time and Date</th>
            <th>Display Time</th>
            <th>Line Number</th>
            <th>Group of Line</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(avg => (

            <tr key={avg.StopAreaName}>
              <td>{avg.TransportMode}</td>
              <td>{avg.Destination}</td>
              <td>{avg.TimeTabledDateTime}</td>
              <td>{avg.DisplayTime}</td>
              <td>{avg.LineNumber}</td>
              <td>{avg.GroupOfLine}</td>
            </tr>

          ))
          }
        </tbody>
      </table>
    </div>



  </div>;
}




