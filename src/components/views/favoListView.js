import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"
import firebase from 'firebase/app'
import 'firebase/database'
import { useAuth } from "../../contexts/AuthContext"

const FavoListView = () => {
    const { currentUser } = useAuth()
    const [favListF, setfavListF] = React.useState('');

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
            // console.log(favList)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const deleteFav = (toDel) => {
        const delFavRef = firebase.database().ref(currentUser.uid).child(toDel);
        delFavRef.remove();
    };

    return (
        <>

            {favListF ? favListF.length > 0 ? <Card>
                <Card.Body className="sidebar">
                <p>{currentUser.displayName} : Favorite list</p>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>
                                    My favorites stations!
                                </th>
                                <th>Delete?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {favListF.map((fav, index) =>

                                <tr key={index}>
                                    <td>
                                        <Link to={`/detail/${fav.Favorite}`}>{fav.Station}</Link>
                                    </td>
                                    <td>
                                        <button onClick={() => deleteFav(fav.id)}>Delete</button>
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </table>

                </Card.Body>
            </Card>
                :<Card>
                <Card.Body className="sidebar">
                     <p className="text-center mb-4">No favorite stations added</p>
                     </Card.Body>            </Card>
                :<div className="sidebar">
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                    </div>
                </div></div>
            }
        </>
    );
};
export default FavoListView;