const DetailsView = ({ station ,back:[navCallback, navLabel]}) => (
  <div class="transportDetails">
        <button onClick={() => navCallback()}>{navLabel} Back To Search</button>
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
        { station.Metros.map((mtr) => (
        <tbody>
        <tr>
          <td>{mtr.TransportMode}</td>
          <td>{mtr.Destination}</td>
          <td>{mtr.TimeTabledDateTime}</td>
          <td>{mtr.DisplayTime}</td>
          <td>{mtr.LineNumber}</td>
          <td>{mtr.GroupOfLine}</td>
        </tr>
        </tbody>))}
        { station.Buses.map((mtr) => (
        <tbody>
        <tr>
          <td>{mtr.TransportMode}</td>
          <td>{mtr.Destination}</td>
          <td>{mtr.TimeTabledDateTime}</td>
          <td>{mtr.DisplayTime}</td>
          <td>{mtr.LineNumber}</td>
          <td>{mtr.GroupOfLine}</td>
        </tr>
        </tbody>))}

        { station.Trains.map((mtr) => (
        <tbody>
        <tr>
          <td>{mtr.TransportMode}</td>
          <td>{mtr.Destination}</td>
          <td>{mtr.TimeTabledDateTime}</td>
          <td>{mtr.DisplayTime}</td>
          <td>{mtr.LineNumber}</td>
          <td>{mtr.GroupOfLine}</td>
        </tr>
        </tbody>))}

        { station.Trams.map((mtr) => (
        <tbody>
        <tr>
          <td>{mtr.TransportMode}</td>
          <td>{mtr.Destination}</td>
          <td>{mtr.TimeTabledDateTime}</td>
          <td>{mtr.DisplayTime}</td>
          <td>{mtr.LineNumber}</td>
          <td>{mtr.GroupOfLine}</td>
        </tr>
        </tbody>))}

        { station.Ships.map((mtr) => (
        <tbody>
        <tr>
          <td>{mtr.TransportMode}</td>
          <td>{mtr.Destination}</td>
          <td>{mtr.TimeTabledDateTime}</td>
          <td>{mtr.DisplayTime}</td>
          <td>{mtr.LineNumber}</td>
          <td>{mtr.GroupOfLine}</td>
        </tr>
        </tbody>))}
       
      </table>
    </div>


  
  </div>);
      
  
      
      
      