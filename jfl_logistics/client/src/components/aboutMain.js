import React from "react"
import Mike from "./Mike.jpg"
import './aboutMain.css'

function AboutMain() {

    const styles = {
        cardWidth: {
            width: "18rem",
            margin: "0"
        }
    }
    return (

        <div className="jumbotron jumbotron-fluid">
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

                            <div className="card-body">
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ducimus tempore unde sit blanditiis, excepturi at culpa natus sequi beatae debitis reprehenderit quia porro laboriosam id rerum, hic numquam corporis fugit, eaque ipsum repudiandae accusamus officia? Non optio, suscipit voluptatum numquam, accusantium neque sapiente ipsa impedit minus repudiandae incidunt dignissimos.</p>

                    </div>



                </div>

            </div>
        </div>

    )
}
export default AboutMain