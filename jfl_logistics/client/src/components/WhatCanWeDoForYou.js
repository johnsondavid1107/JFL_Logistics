import React from "react"
import Warehouse from "./photos/warehouse.jpg"
import NinetyFive from "./photos/95.jpg"
import Truck from "./photos/Truck.jpeg"
import "./CSS/WhatCanWeDoForYou.css"

function WhatCanWeDoForYou() {


    const styles = {
        back: {
            backgroundColor: "white",
            borderLeft: "5px solid #cc1d00",
            borderRight: "5px solid #cc1d00",
            marginBottom: 0
        },
        textColor: {
            color: "#ffd700"
        },
        imgBorder: {
            border: "5px solid #ff2400"
        }
    }

    return (

        <div className="jumbotron jumbotron-fluid" style={styles.back}>
            <div className="container">
                <h3 className="fontStyle">What We Can Do For You</h3>
                <span className="line"></span>
                <div className="row">
                    <div className="col-12 col-lg-4">

                        <div className="card" >
                            <img className="card-img-top imgSize" src={Warehouse} alt="warehouse" />
                            <div className="card-body">
                                <p className="card-text fontStyle">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>

                        </div>
                        <h2 className="text-center fontStyle">Warehousing</h2>

                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="card" >
                            <img className="card-img-top imgSize" src={Truck} alt="trucks" />
                            <div className="card-body">
                                <p className="card-text fontStyle">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>

                        <h2 className="text-center fontStyle">Transportation</h2>
                    </div>
                    <div className="col-12 col-lg-4">

                        <div className="card" >
                            <img className="card-img-top imgSize" src={NinetyFive} alt="route sign" />
                            <div className="card-body">
                                <p className="card-text fontStyle">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <h2 className="text-center fontStyle">Multi-Location</h2>





                    </div>


                </div>
            </div>
        </div>

    )
}
export default WhatCanWeDoForYou