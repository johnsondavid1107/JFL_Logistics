/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillFacebook } from "react-icons/ai"
import { GiPositionMarker } from "react-icons/gi"
import { AiFillMail } from "react-icons/ai"
import "./CSS/SocialMediaFooter.css"



function SocialMediaFooter() {

    const styles = {
        noPadding: {
            padding: 0,
            marginTop: "0px"

        },
        color: {
            backgroundColor: "#cc1d00",
            paddingTop: "10px",
            paddingBottom: "10px"
        }
    }
    return (
        <div className="container-fluid" style={styles.noPadding}>
            <footer className="footer">

                <div className="container-fluid" style={styles.color}>

                    <div className="row d-flex justify-content-center">
                        <div className="col-4"></div>
                        <div className="col-7">
                            <a href="https://www.linkedin.com/in/mike-lapi-0794bb36/" target="_blank">
                                <AiFillLinkedin className={"iconFooter"} size={"2em"} />
                            </a>
                            <b className="iconText">JFL LinkedIn</b>
                        </div>
                        <div className="col-4"></div>
                        <div className="col-7">
                            <AiFillFacebook className={"iconFooter"} size={"2em"} />
                            <b className="iconText">JFL Facebook</b>
                        </div>

                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className="col-4"></div>

                        <div className="col-7">
                            <a href="https://www.google.com/maps/place/178+3rd+Ave,+Paterson,+NJ+07514/@40.9364382,-74.145322,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2fc8a6b98371d:0x9b161454cf375a5a!8m2!3d40.9364382!4d-74.1431333" target="_blank">
                                <GiPositionMarker className={"iconFooter"} size={"2em"} />
                            </a>
                            <a href="https://www.google.com/maps/place/178+3rd+Ave,+Paterson,+NJ+07514/@40.9364382,-74.145322,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2fc8a6b98371d:0x9b161454cf375a5a!8m2!3d40.9364382!4d-74.1431333" target="_blank">
                                <b className="iconText">178-184 3rd Ave, Paterson, NJ 07514</b>
                            </a>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-4"></div>
                        <div className="col-7">
                            <a href="mailto:alpinemike902@aol.com"> <AiFillMail className={"iconFooter"} size={"2em"} /></a>
                            <a href="mailto:alpinemike902@aol.com"><b className="iconText"> alpinemike902@aol.com</b></a>

                        </div>
                    </div>




                </div>


            </footer>

        </div>
    )
}
export default SocialMediaFooter