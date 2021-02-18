import React from "react"
import Delivery from "./delivery.jpg"

function JumbotronContent() {


    const styles = {
        back: {
            backgroundColor: "#ffd700"
        },
        textColor: {
            color: "#ffd700"
        },
        imgBorder: {
            border: "5px solid #ff2400"
        }
    }

    return (
        <div>
            <div className="jumbotron jumbotron-fluid" style={styles.back}>
                <div className="container">
                    <h1 className="display-4">What we do!</h1>
                    <div className="row">
                        <div className="col-7"><p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p></div>
                        <div className="col-5">
                            <img src={Delivery} alt="photoop" style={styles.imgBorder}></img>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default JumbotronContent