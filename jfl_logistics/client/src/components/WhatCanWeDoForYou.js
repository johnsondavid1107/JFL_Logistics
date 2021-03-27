import React from "react"
import Warehouse from "./photos/warehouse.jpg"
import NinetyFive from "./photos/95.jpg"
import Truck from "./photos/truckImage.jpeg"
import "./CSS/WhatCanWeDoForYou.css"

function WhatCanWeDoForYou() {


    const styles = {
        back: {
            backgroundColor: "white",
            borderLeft: "5px solid #cc1d00",
            borderRight: "5px solid #cc1d00",
            borderTop: "5px solid #cc1d00",
            marginBottom: 0
        },


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
                                <p className="card-text fontStyle">
                                    Plenty of space available for your storage needs.  We use state of the art equipment to accurately and safely store your items!
                                    </p>
                            </div>

                        </div>
                        <h2 className="text-center fontStyle">Warehousing</h2>

                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="card" >
                            <img className="card-img-top imgSize" src={Truck} alt="trucks" />
                            <div className="card-body">
                                <p className="card-text fontStyle">
                                    Different cargo trucks available for your delivery needs!  Call for more details!
                                    </p>
                            </div>
                        </div>

                        <h2 className="text-center fontStyle">Transportation</h2>
                    </div>
                    <div className="col-12 col-lg-4">

                        <div className="card" >
                            <img className="card-img-top imgSize" src={NinetyFive} alt="route sign" />
                            <div className="card-body">
                                <p className="card-text fontStyle">
                                    Serving all of the tri-state area <br />
                                    (New York, New Jersey and Conneticut) and more!  Call for details to know how far we can serve you!
                                    </p>
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