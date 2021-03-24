import { React, useState } from "react"
import emailjs from "emailjs-com"
import { init } from "emailjs-com"
function Contact() {

    init("user_Dd7t64AVJTOGd0UtzbGU2")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("")

    const styles = {
        sides: {
            borderLeft: "5px solid #cc1d00",
            borderRight: "5px solid #cc1d00",
            margin: 0,
            paddingLeft: "50px",
            paddingRight: "50px"
        }
    }

    function sendMessage(event) {


        const templateParams = {
            from_name: email,
            to_name: "johnsondavid1107@gmail.com",
            message: message
        };
        emailjs.send("contact_service", "contact_form", templateParams)
            .then(function (response) {
                console.log("message sent")
                console.log(response)
            }, function (err) {
                console.log(err)
            })

    }

    function handleClick(e) {
        e.preventDefault()


        sendMessage()
    }

    function handleEmailChange(event) {
        setEmail(event.target.value)

        console.log(email)


    }
    function handleMessageChange(event) {
        setMessage(event.target.value)
        console.log(message)
    }

    return (
        <div className="container-fluid" style={styles.sides}>
            <h1>Drop a line!</h1>
            <hr></hr>
            <strong>Let us know how we can help</strong>
            <div className="row">


                <div className="col-sm-12 col-lg-9">
                    <div className="card">
                        <div className="card-body">
                            <div>
                                <form>
                                    <div className="form-group">
                                        <div className="row">


                                            <div className="col-6">


                                                <label> First Name</label>
                                                <input type="text" className="form-control"></input>
                                            </div>
                                            <div className="col-6">


                                                <label> Last Name</label>
                                                <input type="text" className="form-control"></input>
                                            </div>



                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label> Email Address</label>
                                        <input type="email" className="form-control" name={email} onChange={handleEmailChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" value={message} onChange={handleMessageChange}></textarea>
                                    </div>
                                    <button className="btn btn-outline-danger my-2 my-sm-0" type="submit" onClick={handleClick}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact