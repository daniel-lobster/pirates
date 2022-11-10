import { useState , useEffect} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import { useParams, useNavigate } from 'react-router-dom'

const New = () => {

    const navigate = useNavigate()
    

    // STATE
    const [name, setName] = useState("")
    const [image_url, setImageURL] = useState("")
    const [number_of_chests, setNumberOfChests] = useState(0)
    const [catch_phrase, setCatchPhrase] = useState("")
    const [crew_position, setCrewPosition] = useState("captain")
    const [peg_leg, setPegLeg] = useState(false)
    const [eye_patch, setEyePatch] = useState(false)
    const [hook_hand, setHookHand] = useState(false)
    const [errors, setErrors] = useState([]); 
    const [submit, setSubmit] = useState(false); 

    const createPirate = (e) => {
        e.preventDefault()
        // CREATE BODY TO SEND OVER TO API
        let body = {
            name,
            image_url,
            number_of_chests,
            catch_phrase,
            crew_position,
            peg_leg,
            eye_patch,
            hook_hand
        }
        // MAKE A AXIOS POST TO MY API
        axios.post("http://localhost:8000/api/pirates", body)
            .then(res => {
                console.log(res.data)
                navigate('/pirates')
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
        
    }

    return (
        <fieldset>
            <legend>new.jsx</legend>
            <Link to={`/pirates`}>Home</Link>
            <form onSubmit={createPirate}>
                <p>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </p>
                <p>
                    Image URL:
                    <input type="text" value={image_url} onChange={(e) => setImageURL(e.target.value)} />
                </p>
                <p>
                    Number of Chests:
                    <input type="number" value={number_of_chests} onChange={(e) => setNumberOfChests(e.target.value)} />
                </p>
                <p>
                    Catch Phrase:
                    <input type="text" value={catch_phrase} onChange={(e) => setCatchPhrase(e.target.value)} />
                </p>
                <p>
                    Crew Position:
                    <select onChange={(e) => setCrewPosition(e.target.value)}>
                        <option value="captain">Captain</option>
                        <option value="first_mate">First Mate</option>
                        <option value="quarter_master">Quarter Master</option>
                        <option value="boatswain">Boatswain</option>
                        <option value="powder_monkey">Powder Monkey</option>
                    </select>
                </p>
                <p>
                    Peg Leg?:
                    <input type="checkbox" checked={peg_leg} onChange={(e) => setPegLeg(e.target.checked)} />
                </p>
                <p>
                    Eye Patch?:
                    <input type="checkbox" checked={eye_patch} onChange={(e) => setEyePatch(e.target.checked)} />
                </p>
                <p>
                    Hook Hand?:
                    <input type="checkbox" checked={hook_hand} onChange={(e) => setHookHand(e.target.checked)} />
                </p>
                <button disabled={name.length > 1 && image_url.length > 1 && catch_phrase.length > 1 ?false:true}>Add Pirate</button>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
            </form>
        </fieldset>
    )
}

export default New