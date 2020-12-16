import React from "react";
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"
import Moment from 'moment'

const DetailView = ({
    avg,
}) => {

    const transportTypes = ["Buses", "Trains", "Metros", "Ships", "Trams"];
    const transportTypesFilter = ["bus", "train", "metro", "ship", "tram"];
    var filtered = [];
    var all = [];
    const [type, setType] = React.useState("");
    Object.keys(avg).forEach(function (key) {
        if (transportTypes.includes(key)) { all.push(avg[key]) };//to put all transportTypes in one array
    });
    all = all.flat();
    if (type === "") {
        filtered = [...all];
    }
    else {
        // filtered = [];
        filtered = all.filter(t => t.TransportMode.toLowerCase() === type);
        if (filtered.length===0){filtered.push('NODATA')}
    }

    return (
        <div>
            <Card>
                <Card.Body>
                <Link to="/search" className="btn btn-primary w-100 mt-3">
                            To Search
          </Link>
          </Card.Body></Card>
          <Card>
                <Card.Body>
                    <div>
                        <span>
                            <select id={"selected"} onChange={(event) => setType(event.target.value)}>
                                <option key={'all'} value={''}>All</option>
                                {transportTypesFilter.map(k => <option key={k} value={k}>{k}</option>)}

                            </select>
                        </span>
                    </div>
                </Card.Body></Card>

            <Card>
                <Card.Body>
                    <div>
                        {filtered.length > 1 ? <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>From station</th>
                                    <th>Transport Mode</th>
                                    <th>Destination</th>
                                    <th>Time and Date</th>
                                    <th>Display Time</th>
                                    <th>Line Number</th>
                                    <th>Group of Line</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((avg,i) => (

                                    <tr key={i}>
                                        <td>{avg.StopAreaName}</td>
                                        <td>{avg.TransportMode}</td>
                                        <td>{avg.Destination}</td>
                                        <td>{Moment(avg.TimeTabledDateTime).format('hh:mm - DD MMM')}</td>
                                        <td>{avg.DisplayTime}</td>
                                        <td>{avg.LineNumber}</td>
                                        <td>{avg.GroupOfLine}</td>
                                    </tr>

                                ))
                                }
                            </tbody>
                        </table> :filtered[0]==='NODATA'?'There is no departure for this type': <div className="d-flex justify-content-center">
  <div className="spinner-border" role="status">
  </div>
</div>

}

                    </div></Card.Body></Card>
        </div>
    );
};
export default DetailView;