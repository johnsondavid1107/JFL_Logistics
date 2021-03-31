import React from "react"
import JFLTruck from "../components/photos/jflTruck.jpg"
import WhatCanWeDoForYou from "../components/WhatCanWeDoForYou"
import "./Home.css"


function Home() {
    // const styles = {
    //     parallax: {
    //         width: "100%",
    //         backgroundAttachment: "fixed",
    //         backgroundRepeat: "no-repeat",
    //         backgroundSize: "cover",
    //         backgroundPosition: "center",
    //         backgroundImage: `url(${JFLTruck})`,
    //         height: "400px"

    //     }
    // }
    return (
        <div>

            <div className="row">
                <div className="block"></div>
                <div className="col-12">
                    <div src={JFLTruck} alt="truck" className="parrallax"></div>

                </div>
            </div>
            <WhatCanWeDoForYou />

        </div>

    )
}
export default Home