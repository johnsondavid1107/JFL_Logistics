import React from "react"
function Contact() {
    return (
        <div className="container">
            <h1>Drop a line!</h1>
            <hr></hr>
            <div className="row">

                <div className="col-sm-12 col-lg-9">
                    <div className="card">
                        <div className="card-body">
                            <div>
                                <form>
                                    <div className="form-group">
                                        <label> Name</label>
                                        <input type="email" className="form-control"></input>
                                    </div>
                                    <div className="form-group">
                                        <label> Email Address</label>
                                        <input type="email" className="form-control"></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                                    </div>
                                    <button className="btn btn-outline-danger my-2 my-sm-0" type="submit" >Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact