import React from "react"

function JumbotronMain() {

    const styles = {
        back: {
            backgroundColor: "black",
            opacity: ".8",
            position: "relative",
            paddingTop: "20px",
            paddingBottom: "20px"
        },
        textColor: {
            color: "#ffd700"
        },
        baby: {
            position: "absolute",
            backgroundColor: "black",
            top: "1700px",
            left: "100px"
        },
        parent: {
            position: "relative"
        }
    }
    return (
        <div style={styles.parent}>
            <div className="jumbotron jumbotron-fluid" style={styles.back}>
                <div className="container">
                    <h1 className="display-4" style={styles.textColor}>JFL Logistics</h1>
                    <p className="lead" style={styles.textColor}>"Your pickup and delivery professionals!".</p>
                </div>
            </div>

            <div className="jumbotron jumbotron-fluid" style={styles.baby}>

            </div>

        </div>
    )
}

export default JumbotronMain