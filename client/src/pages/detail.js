import { useState , useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import {Link} from "react-router-dom"

const Detail = () => {

    const navigate = useNavigate()
    const { pirate_id } = useParams()

    // STATE
    const [name, setName] = useState("")
    const [image_url, setImageURL] = useState("")
    const [number_of_chests, setNumberOfChests] = useState(0)
    const [catch_phrase, setCatchPhrase] = useState("")
    const [crew_position, setCrewPosition] = useState("")
    const [peg_leg, setPegLeg] = useState(false)
    const [eye_patch, setEyePatch] = useState(false)
    const [hook_hand, setHookHand] = useState(false)
    const [submit, setSubmit] = useState(false); 

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${pirate_id}`)
            .then(res => {
                console.log(res.data)
                setName(res.data.name)
                setImageURL(res.data.image_url)
                setNumberOfChests(res.data.number_of_chests)
                setCatchPhrase(res.data.catch_phrase)
                setCrewPosition(res.data.crew_position)
                setPegLeg(res.data.peg_leg)
                setEyePatch(res.data.eye_patch)
                setHookHand(res.data.hook_hand)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <fieldset>
            <legend>detail.jsx</legend>
            <Link to={`/pirates`}>Home</Link>
                <p>
                    Name: {name}
                </p>
                <p>
                    <img src={image_url} style={{height: 250,width: 250}}/>
                </p>
                <p>
                    Number of Chests:{number_of_chests}
                </p>
                <p>
                    Catch Phrase: {catch_phrase}
                </p>
                <p>
                    Crew Position: {crew_position}
                </p>
                <p>
                    Peg Leg?: {peg_leg? "Yes":"No"}
                </p>
                <p>
                    Eye Patch?: {eye_patch? "Yes":"No"}
                </p>
                <p>
                    Hook Hand?: {hook_hand? "Yes":"No"}
                </p>
        </fieldset>
    )
}

export default Detail