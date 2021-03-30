import { React, useState } from "react"
import emailjs from "emailjs-com"
import { init } from "emailjs-com"
import { useToasts } from "react-toast-notifications"
import "./CSS/Contact.css"

function Contact() {

    init("user_Dd7t64AVJTOGd0UtzbGU2")
    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [radio, setRadio] = useState("");
    const [radioClick, setRadioClick] = useState()
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

    function sendMessage(event) {
        const templateParams = {
            from_name: email,
            to_name: "johnsondavid1107@gmail.com",
            message: message,
            radio: radio,
            phone_number: number
        };
        emailjs.send("contact_service", "contactform", templateParams)
            .then(function (response) {
                console.log("message sent")
                console.log(response)
                addToast("Message Sent Successfully", { appearance: 'success', autoDismiss: true })
            }, function (err) {
                console.log(err)
                addToast("Unknown Error.. Please try again", { appearance: "error", autoDismiss: true })
            })

        setlName(""); setfName(""); setEmail(""); setNumber(""); setMessage(""); setRadioClick(false);


    }

    function handleClick(e) {
        //need a preventDevault to prevent the page from reloading.  We need the toast to display
        e.preventDefault()
        sendMessage()

    }

    function handleEmailChange(event) {
        setRadioClick(undefined)
        const { value } = event.target
        setEmail(value)
        console.log(value)

    }
    function handleMessageChange(event) {
        setRadioClick(undefined)
        const { value } = event.target
        setMessage(value)
        console.log(value)
    }
    function handleNumberChange(event) {
        setRadioClick(undefined)
        const { value } = event.target
        setNumber(value)
        console.log(value)
    }
    function handlefNameChange(event) {
        setRadioClick(undefined)
        const { value } = event.target
        setfName(value)
        console.log(value)
    }
    function handlelNameChange(event) {
        setRadioClick(undefined)
        const { value } = event.target
        setlName(value)
        console.log(value)
    }
    function handleFormClick(event) {
        if (radioClick === false) {
            setRadioClick(undefined)
        }

        const { name } = event.target

        setRadio(name)
        console.log(name)





    }
    function changeRadio(e) {


        console.log(e.target.checked)
        console.log(radioClick)

    }




    return (
        <div className="container-fluid fontStyle" style={styles.sides}>
            <h1>Drop a line!</h1>
            <hr></hr>
            <strong className="addPadding">Let us know how we can help!</strong>
            <div className="row">


                <div className="col-sm-12 col-lg-9">
                    <div className="card addMargin">
                        <div className="card-body">

                            <form>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-6">


                                            <label className="required"> First Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={handlefNameChange}
                                                value={fName}
                                                placeholder="First Name"
                                                required
                                            ></input>
                                        </div>
                                        <div className="col-6">


                                            <label className="required"> Last Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={handlelNameChange}
                                                value={lName}
                                                placeholder="Last Name"
                                                required
                                            ></input>
                                        </div>

                                    </div>
                                </div>

                                <div className="form-group" >
                                    <div className="row">

                                        <div className="col-6">
                                            <label className="required"> Email Address</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name={email}
                                                value={email}
                                                onChange={handleEmailChange}
                                                placeholder="Email Address"
                                                required
                                            ></input>

                                        </div>

                                        <div className="col-6">
                                            <label className="required"> Phone Number</label>
                                            <input type="text"
                                                className="form-control"
                                                name={number}
                                                value={number}
                                                onChange={handleNumberChange}
                                                placeholder="Phone Number"
                                                required
                                            ></input>

                                        </div>
                                    </div>

                                </div>


                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox"
                                        checked={radioClick}
                                        onClick={handleFormClick}
                                        onChange={changeRadio}
                                        name="Warehouseing" />
                                    <label className="form-check-label">
                                        Warehousing
                                                </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox"
                                        checked={radioClick}
                                        onClick={handleFormClick}
                                        onChange={changeRadio}
                                        name="Transportation" />
                                    <label className="form-check-label">
                                        Transportation
                                                </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox"
                                        checked={radioClick}
                                        onClick={handleFormClick}
                                        onChange={changeRadio}
                                        name="Distribution" />
                                    <label className="form-check-label">
                                        Distrubution
                                                </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox"
                                        checked={radioClick}
                                        onClick={handleFormClick}
                                        onChange={changeRadio}
                                        name="General Information" />
                                    <label className="form-check-label">
                                        General Information
                                                </label>
                                </div>





                                <div className="form-group">
                                    <label className="addMargin">Message</label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        value={message}
                                        onChange={handleMessageChange}
                                        placeholder="Short and sweet.  Whatever it is, we will get it DONE!"
                                    ></textarea>
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
    )
}
export default Contact