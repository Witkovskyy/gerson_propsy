import React from "react"

export default function Contact({name,number,mail, picture}) {
    return (
        <div className="contact-card">
            <img src={picture}/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src={picture} />
                <p>{number}</p>
            </div>
            <div className="info-group">
                <img src="./mail-icon.png" />
                <p>{mail}</p>
            </div>
        </div>
    )
}