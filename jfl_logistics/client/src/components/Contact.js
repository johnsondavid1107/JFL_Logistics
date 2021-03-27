import { React, useState } from "react"
import emailjs from "emailjs-com"
import { init } from "emailjs-com"
import { useToasts } from "react-toast-notifications"

function Contact() {

    init("user_Dd7t64AVJTOGd0UtzbGU2")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [radio, setRadio] = useState("");
    const { addToast } = useToasts()

    const styles = {
        sides: {
            borderLeft: "5px solid #cc1d00",
            borderRight: "5px solid #cc1d00",
            borderTop: "5px solid #cc1d00",
            margin: 0,
            padding: "50px"
        }
    }

    function sendMessage() {


        const templateParams = {
            from_name: email,
            to_name: "johnsondavid1107@gmail.com",
            message: message,
            radio: radio,
            phone_number: number
        };
        emailjs.send("contact_service", "contact_form", templateParams)
            .then(function (response) {
                console.log("message sent")
                console.log(response)
                addToast("Message Sent Successfully", { appearance: 'success', autoDismiss: true })
            }, function (err) {
                console.log(err)
                addToast("Unknown Error.. Please try again", { appearance: "error", autoDismiss: true })
            })

            

    }



    function handleClick(e) {
        e.preventDefault()
        sendMessage()
    }

    function handleEmailChange(event) {
        const { value } = event.target
        setEmail(value)
        console.log(value)

    }
    function handleMessageChange(event) {
        const { value } = event.target
        setMessage(value)
        console.log(value)
    }
    function handleNumberChange(event) {
        const { value } = event.target
        setNumber(value)
        console.log(value)
    }
    function handleFormClick(event) {
        const { name } = event.target

        setRadio(name)
        console.log(name)

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

                                    <div className="form-group" >
                                        <div className="row">

                                            <div className="col-6">
                                                <label> Email Address</label>
                                                <input type="email" className="form-control" name={email} onChange={handleEmailChange}></input>

                                            </div>

                                            <div className="col-6">
                                                <label> Phone Number</label>
                                                <input type="text" className="form-control" name={number} onChange={handleNumberChange}></input>

                                            </div>
                                        </div>

                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" onClick={handleFormClick} name="Warehouseing" />
                                        <label className="form-check-label">
                                            Warehousing
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" onClick={handleFormClick} name="Transportation" />
                                        <label className="form-check-label">
                                            Transportation
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" onClick={handleFormClick} name="General Information" />
                                        <label className="form-check-label">
                                            General Information
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" onClick={handleFormClick} name="defaultCheck1" />
                                        <label className="form-check-label">
                                            Distrubution
                                        </label>
                                    </div>




                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={handleMessageChange}></textarea>
                                    </div>
                                    <div className="row justify-content-end">
                                        <button className="btn btn-outline-danger my-2 my-sm-0" type="submit" onClick={handleClick}>Submit</button>
                                    </div>
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