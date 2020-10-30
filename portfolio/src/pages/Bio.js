import React from "react";

function Bio() {
    return (
        <div>
            <main className="row no-gutters area">
                <div className="card col-sm-12">
                    <video className="card-img" width="100%" height="auto" controls autoPlay>
                        <source src="/images/Profile_Video.mp4" type="video/mp4" />
                    </video>
                </div>
            </main>
            <div className="row no-gutters area">
                <h1 className="col-md-12 text-center headerColor" id="bio">Bio</h1>
                <div className="card col-sm-12">
                    <div className="row no-gutters">
                        <div className="col-sm-4">
                            <img src="/images/NorwayHike.jpg" className="card-img" id="bioImg" alt="Jacob Ashworth" />
                        </div>
                        <div className="col-sm-8">
                            <div className="card-body">
                                <p>
                                    I am a North Carolina native who grew up on the beautiful
                                    Outer Banks. I spent a great deal of time outdoors exploring.
                                    When I wasn't outdoors, I was hanging out with my dad and
                                    grandfather at his machine shop. While picking up as much as I
                                    could in terms of fabrication techniques I also learned the
                                    importance of precision and process.
                            </p>
                                <p>
                                    As a recent graduate of Georgia Tech's Full Stack Web Development BootCamp, I
                                    have added Full Stack Application Developer to my tool belt. Armed with a
                                    strong knowledge of JavaScript based applications and MERN Stack Development,
                                    I am excited to build onto the name I have made for myself in the
                                    world of live events and trade shows. I have managed to carve
                                    out a specialized niche of the industry where I am able to
                                    combine my love of design and the implementation of current
                                    technology to give a WOW factor to face-to-face marketing
                                    experiences.
                            </p>
                                <div className="d-flex flex-row-reverse">
                                    <a className="socialLink" href="https://github.com/jeashwor" target="_blank">
                                        <img className="imageLink" src="/images/github_PNG20.png" alt="GitHub Link" />
                                    </a>
                                    <a className="socialLink" href="https://www.linkedin.com/in/jeashwor" target="_blank">
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

export default Bio
