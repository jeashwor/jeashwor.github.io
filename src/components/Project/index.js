import React from 'react'

function Project(props) {
    console.log(props);
    return (
        <div className="card col-md-5 m-2" key={props.id}>
            <img src={props.img} className="card-img-top" alt={props.name} />
            <div className="card-body">
                <h4 className="card-title text-center">{props.name}</h4>
                <p className="card-text text-center">{props.description}</p>
                <div className="cardBtns">
                    <a href={props.pageLink} className="btn btn-primary mx-2" target="_blank" rel="noreferrer">Go To Page</a>
                    <a href={props.repo} className="btn btn-primary mx-2" target="_blank" rel="noreferrer">GitHub Repo</a>
                </div>
            </div>
        </div>
    )
}

export default Project
