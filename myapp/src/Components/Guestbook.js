import React, {useState, useEffect} from 'react'
import config from '../config'
import { motion, useAnimation } from "framer-motion"
const firebase = require('firebase')

function Guestbook(props) {
    const [data, setData] = useState([])
    const [shouldRender, setShouldRender] = useState(true)

    const [name, setName]=useState("")
    const [des, setDes]=useState("")
    const [message, setMessage]=useState("")
    const [visibility, setVisibility]=useState("")
    const [emailAddr, setEmailAddr]=useState("")
    
    useEffect(() => {
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        }
        let ref = firebase.database().ref('messages')
        var loaded = false
        ref.on('child_added', (childSnapshot, prevChildKey) => {
            const newChild = childSnapshot.val()
            setData(curData => [newChild, ...curData])
        })
    }, [shouldRender])

    const handleSubmit = (event) => {
        event.preventDefault()
        var error = []
        if(name.length <= 5 || name.length >= 20) {
            error.push("Your name should be longer than 5 characters, less than 20.")
        }
        if(des.length >= 100) {
            error.push("Your desription should be shorter than 100 characters.")
        }
        if(message.length <= 15 || message.length >= 500){
            error.push("Your message should be longer than 15 characters, less than 500 characters.")
        }
        if(error.length > 0) {
            alert("ERROR:\n".concat(error.join("\n")))    
            return
        }
        var time = new Date().toLocaleString()
        firebase.database().ref('messages').push().set({
            "name": name,
            "des": des,
            "message": message,
            "visibility": visibility,
            "emailAddr": emailAddr,
            "time": time
        })
        setName("")
        setDes("")
        setMessage("")
        setVisibility(false)
        setEmailAddr("")
        alert("Your Question/Comment has been received. Thank you for checking out my webpage!")   
    }

    return (    
        <div className="QC">
            <div className="QCParent">
                <div className="QCChild1">
                    <h2>
                        Tell me your:
                    </h2> 
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name
                            <input type="text" value={name} onChange={event => setName(event.target.value)}/>
                        </label>
                        <label>
                            *Description about yourself
                            <input type="text" value={des} onChange={event => setDes(event.target.value)}/>
                        </label>
                        <label>
                            Any Questions or Comments?
                            <input type="text" value={message} onChange={event => setMessage(event.target.value)}/>
                        </label>
                        <label>
                            Are you willing to show your message on this page?
                            <select value={visibility} onChange={event => setVisibility(event.target.value)}>
                                <option value={false}>No</option>
                                <option value={true}>Yes</option>
                            </select>
                        </label>
                        <label>
                            *Email(will not be showed)
                            <input type="text" value={emailAddr} onChange={event => setEmailAddr(event.target.value)}/>
                        </label>
                        <input type="Submit" value="Submit"/>
                    </form>
                </div>
                <div className="QCChild2">
                    <h2>
                        Received!
                    </h2>
                    {data.map((d, index) => (
                        <div>
                            <p className="name">Name: {d.name}</p>
                            <p className="des">Description: {d.des}</p>
                            <p className="time">Time: {d.time}</p>
                            {d.visibility && <p className="message">Message: {d.message}</p>}
                        </div> 
                    ))}
                </div>
            </div>
        </div>    
    )
}
export default Guestbook