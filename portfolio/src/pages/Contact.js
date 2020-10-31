import React from 'react'

function Contact() {
    return (
        <div className="container-sm area content">
            <div className="row no-gutters area">
                <h1 className="col-md-12 text-center headerColor p-3" id="bio">Contact Me</h1>
                <div className="card col-sm-12">
                    <div className="row no-gutters">
                        <div className="col-sm-12">
                            <div className="card-body">
                                <h2 className="text-center p-5">
                                    <strong>Phone:</strong> (404) 556-9252
                                </h2>
                                <h2 className="text-center pb-5">
                                    <strong>Email: </strong>
                                    <a href="mailto:jeashwor@gmail.com?subject=Full Stack Developer">jeashwor@gmail.com</a>
                                </h2>
                                <div className="text-center pb-5">
                                    <a className="socialLink" href="https://github.com/jeashwor" rel="noreferrer" target="_blank">
                                        <img className="imageLink" src="/images/github_PNG20.png" alt="GitHub Link" />
                                    </a>
                                </div>
                                <div className="text-center pb-5">
                                    <a className="socialLink" href="https://www.linkedin.com/in/jeashwor" rel="noreferrer" target="_blank">
                                        <img className="imageLink" src="/images/linkedin-logo-vector.png"
                                            alt="Linkedin Link" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
