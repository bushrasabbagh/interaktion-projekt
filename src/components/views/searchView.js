import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"
import firebase from 'firebase/app'
import 'firebase/database'
import { useAuth } from "../../contexts/AuthContext"
import Moment from 'moment'

const SearchView = ({
    station,
    siteId,
    isFetching
}) => {
    const { currentUser } = useAuth()
    const [searchstring, setSearchstring] = React.useState('');
    const [favListF, setfavListF] = React.useState('');
    const [testListF, setTestListF] = React.useState('');

    useEffect(() => {
        const isFavRef = firebase.database().ref(currentUser.uid)
        isFavRef.on('value', (snaps) => {
            const favo = snaps.val()
            const favList = []
            const testList = []
            for (let id in favo) {
                favList.push({ id, ...favo[id] })
                testList.push(favo[id].Favorite)
            }
            setfavListF(favList)
            setTestListF(testList)
            // console.log(favList)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const addFav = (id, sts) => {
        // console.log(!testListF.includes(id))
        // console.log(favListF.length === 0)
        if (testListF.includes(id) === false || favListF.length === 0) {
            const favRef = firebase.database().ref(currentUser.uid)
            const userFav = {
                Station: sts,
                Favorite: id,
                Email: currentUser.email,
                Time: Moment(Date.now()).format('hh:mm-DD/MMM')
            }
            favRef.push(userFav)
        }
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <div>
                        <Link to="/" className="btn btn-primary w-100 mt-3">
                            To Dashboard
          </Link>
                    </div>
                </Card.Body></Card>
            <Card>
                <Card.Body>
                    <div>
                        <input type={"text"} placeholder="Station" maxlength="20" onChange={(e) => setSearchstring(e.target.value)} />
                        <button onClick={() => station(searchstring)}> SEARCH </button>
                    </div>
                </Card.Body>
            </Card>

                <Card>
                    <Card.Body>
                  {siteId ?      <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>
                                        Station
                                </th>
                                    <th>Add to favorites?</th>
                                </tr>
                            </thead>
                            <tbody>

                                {siteId.map((dt, n) =>
                                    <tr key={n}>
                                        <td>
                                            <Link to={`/detail/${dt.SiteId}`} >{dt.Name}</Link>
                                        </td>
                                        <td>
                                            <button onClick={() => addFav(dt.SiteId, dt.Name)}>Add to fav</button>
                                        </td>
                                    </tr>
                                )}

                            </tbody>
                        </table>: isFetching ==='true'?<div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                    </div>
                </div>:isFetching === '1002'?'Key is invalid':'Enter station name to search'}

                    </Card.Body>
                </Card>
        </div>
    );
};
export default SearchView;