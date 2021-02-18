import React from "react"
import JFLTruck from "../components/jflTruck.jpg"
import JumbotronMain from "../components/JumbotronMain";
import JumbotronContent from "../components/JumbrotronContent"
import AboutMain from "../components/aboutMain";
import Contact from "../components/Contact";

function Home() {
    const styles = {
        parallax: {
            width: "100%",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${JFLTruck})`,
            height: "400px"

        }
    }
    return (
        <div>
            <JumbotronMain />
            <div className="row">
                <div className="col-12">
                    <div src={JFLTruck} alt="truck" style={styles.parallax}></div>

                </div>
            </div>
            <JumbotronContent />
            <AboutMain />
            <Contact />

        </div>

    )
}
export default Home