import React from "react"
import Mike from "./photos/Mike.jpg"
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
                <div className="row">
                    <div className="col-10">
                        <h2>About Me</h2>
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

                        <p>
                            Michael Lapi is the president and CEO of JFL Logistics.  He has been in the warehouse and trucking industry for over 25 years.  Wide network of trucking and warehouse and can get the job DONE!  Mike has been known to do what ever he can to get the job done and is a straight-shooter.  An honest abe and all around well-rounded kinda guy! He can get the job done when you NEED it done!
                            </p>





                    </div>



                </div>

            </div>
        </div>

    )
}
export default AboutMain