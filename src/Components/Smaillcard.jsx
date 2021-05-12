import React from 'react'

const Smaillcard = (props) => {
    return (
        <div className="smallcard">
            <p className="smallcard-para">
               {props.gender}
            </p>
            <h5 className="smallcard-name">
                {props.name}
            </h5>
            <p className="smallcard-email">
                {props.email}
            </p>
        </div>
    )
}

export default Smaillcard
