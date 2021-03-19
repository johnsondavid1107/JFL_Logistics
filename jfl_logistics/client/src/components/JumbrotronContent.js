import React from "react"
import Warehouse from "./photos/warehouse.jpg"
import NinetyFive from "./photos/95.jpg"
import Truck from "./photos/Truck.jpeg"
import "./JumbotronContent.css"

function JumbotronContent() {


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
                <h1 className="display-4">What we do!</h1>
                <span className="line"></span>
                <div className="row">
                    <div className="col-12 col-lg-4">

                        <div className="card" >
                            <img className="card-img-top imgSize" src={Warehouse} alt="warehouse" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>

                        </div>
                        <h2 className="text-center">Warehouseing</h2>

                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="card" >
                            <img className="card-img-top imgSize" src={Truck} alt="trucks" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>

                        <h2 className="text-center">Transportation</h2>
                    </div>
                    <div className="col-12 col-lg-4">

                        <div className="card" >
                            <img className="card-img-top imgSize" src={NinetyFive} alt="route sign" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <h2 className="text-center">Multi-Location</h2>





                    </div>


                </div>
            </div>
        </div>

    )
}
export default JumbotronContent