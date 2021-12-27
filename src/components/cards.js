import React from 'react'
import "./cards.css"
import PropTypes from 'prop-types'

function Cards(props) {
    return (
        <>
            <div className="card" >
                <img src={props.card_img} alt="card-pic" className="card_img" />
                <div className="card-body">
                    <span className="card-text">
                        {props.card_category}
                    </span>
                    <h3 className="card-title">
                        {props.card_title}
                    </h3>
                    <a href={props.card_redirect} target="_blank" className="btn btn-primary">
                        Watch Now
                    </a>
                </div>
            </div>
        </>
    )
}

Cards.propTypes = {
    card_img:PropTypes.string,
    card_category:PropTypes.string,
    card_title:PropTypes.string,
    card_redirect:PropTypes.string
}

export default Cards