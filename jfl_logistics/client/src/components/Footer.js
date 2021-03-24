import React from "react"

function Footer() {

    const styles = {
        noPadding: {
            padding: 0,
            marginTop: "0px"

        },
        noMargin: {
            marginBottom: 0,
            height: "100px",
            padding: 0,
            backgroundColor: "black"
        },
        white: {
            color: "white",
            paddingTop: "20px"
        }
    }
    return (
        <div className="container-fluid" style={styles.noPadding}>
            <footer className="footer">
                <div className="jumbotron jumbotron-fluid" style={styles.noMargin}>
                    <div className="container">
                        <div className="col-12">

                            <p className="lead text-center" style={styles.white}><small>Copyright 2021 | JFL Logistics and Co. Site by David Johnson </small></p>
                        </div>

                    </div>
                </div>

            </footer>

        </div>
    )
}
export default Footer