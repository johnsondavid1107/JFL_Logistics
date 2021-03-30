import React from "react"
import './CSS/aboutMain.css'
import Location from "./photos/Location.jpg"
import Overview from "./photos/Overview.jpg"


function AboutJFL() {

    const styles = {
        picture: {
            width: "100%",
            position: "relative"
        }
    }

    return (
        <div className="container-fluid aboutMeStyle">

            <h1 className="fontStyle">JFL Logistics Warehouse Location</h1>
            <span className="line"></span>

            <div className="row d-flex justify-content-center">
                <h4 className="fontStyle space">Address: 178 3rd Avenue Patterson, New Jersey 07514</h4>

            </div>

            <div className="row d-flex justify-content-center">
                <div className="col-lg-6 col-12 text-center">
                    {/* <img src={Location} style={styles.picture} alt="map" />

                    <h3 className="bottom fontStyle">North Jersey</h3> */}

                    <div style={styles.picture}>
                        <iframe
                            width="100%"
                            height="600"
                            frameBorder="0"
                            scrolling="no" marginHeight="0" marginWidth="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=178%203rd%20Ave,%20Paterson,%20NJ%2007514+(JFL%20Logistics)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            title="JFL Logistics"
                        ></iframe>
                        <a href="https://www.maps.ie/route-planner.htm">Road Trip Planner</a></div>

                </div>


            </div>

            <div className="row">

                <div className="col-12 d-flex justify-content-center">

                    <ul className="fontStyle">
                        <h3>Convenience</h3>

                        <li>
                            20 mins from GWB
                        </li>
                        <li>
                            Near I-95 Highway
                        </li>
                        <li>
                            Near I-287 Highway
                        </li>

                    </ul>


                    <ul className="fontStyle">
                        <h3>Accessibility</h3>
                        <li>
                            30 mins from New York City
                        </li>
                        <li>
                            30-45 mins from all major ports
                        </li>
                        <li>
                            Near Route 208
                        </li>

                    </ul>

                </div>

            </div>






        </div>
    )

}

export default AboutJFL