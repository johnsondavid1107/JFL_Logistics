import React from "react"

function JumbotronMain() {

    const styles = {
        back: {
            backgroundColor: "white",
            opacity: ".8",
            position: "relative",
            paddingTop: "20px",
            paddingBottom: "20px"
        },
        textColor: {
            color: "black"
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
                    <p className="lead" style={styles.textColor}>"We get it done, when you NEED it done!".</p>
                </div>
            </div>

            <div className="jumbotron jumbotron-fluid" style={styles.baby}>

            </div>

        </div>
    )
}

export default JumbotronMain