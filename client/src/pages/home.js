import { useState , useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Link} from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()

    // STATE
    const [allPirates, setAllPirates] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then(res => {
                res.data.sort((a, b) => {
                    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }
                    // names must be equal
                    return 0;
                  });
                setAllPirates(res.data)
                console.log(allPirates)
            })
            .catch(errors => console.log(errors))
    }, [refresh])


    const deletePirate = (pirate_id) => {
        axios.delete(`http://localhost:8000/api/pirates/${pirate_id}`)
            .then(res => {
                setRefresh(!refresh)
            })
            .catch(errors => console.log(errors))
    }

    return (
        <fieldset>
            <legend>display.jsx</legend>
            <Link to={`/pirates/new`}>Add a Pirate</Link>
                <h4>These are the pirates in the ship:</h4>
                <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                    <tbody>
                        {allPirates.map( (pirate) =>
                            <tr>
                                <td><img src={pirate.image_url} style={{height: 200,width: 200}}/></td>
                                <td>{pirate.name}</td>
                                <td><Link to={`/pirates/${pirate._id}`}>View Pirate</Link><button onClick={() => deletePirate(pirate._id)}>Walk the Plank</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
        </fieldset>
    )
}

export default Home