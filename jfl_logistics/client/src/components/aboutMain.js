import React from "react"
import Mike from "./photos/Mike.jpg"
import { AiFillPhone } from "react-icons/ai"
import './CSS/aboutMain.css'

function AboutMain() {

    const styles = {
        cardWidth: {
            width: "18rem",
            margin: "0"
        }
    }
    return (

        <div className="jumbotron jumbotron-fluid aboutMeStyle">
            <div className="container">
                <h2 className="fontStyle">About Me</h2>
                <span className="line"></span>
                <div className="row">

                    <div className="col-12 text-center">

                        <br />
                    </div>
                    <div className="col-4"></div>

                </div>
                <div className="row">
                    <div className="col-lg-4 d-flex justify-content-center">
                        <div className="card" style={styles.cardWidth}>
                            <img src={Mike} alt=""></img>


                        </div>
                    </div>
                    <div className="col-lg-8">

                        <h5 className="fontStyle underline">
                            Do you NEED the job done?  Well.. Mike and JFL Logistics is who you gotta call! </h5>

                        <br />


                        <p className="fontStyle">
                            Mike Lapi is the president and CEO of JFL Logistics.  He has been in the warehouse and trucking industry for over 30 years.  With a wide network of trucking and warehouse contacts, he can get the job DONE!  Mike has been known to do what-ever he can to get the job done and get it done right!  He is a real straight-shooter and what tell you like it is.  An honest abe and well-rounded kinda guy! He can get the job done when you NEED it done!
                            </p>

                        <p className="fontStyle">
                            Mike has lived his whole whole life in Bergen County, New Jersey.  A family man with a beautiful loving wife and 5 strong-willed loving children. Mike has made a lot of friends in the Warehousing and Deliveries business.  Over the years, developing contacts, and relationships has added to his success.  He knows what he is doing.. and if you haven't guessed it yet, can get the job DONE!  Still don't believe?  Give'em a call and find out!
                            </p>


                        <a href="tel:1-201-902-4012"><h4 className="text-center"> <AiFillPhone />  201-926-4012 </h4> </a>








                    </div>



                </div>

            </div>
        </div >

    )
}
export default AboutMain