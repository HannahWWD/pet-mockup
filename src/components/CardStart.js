import React from 'react'
import './Card.scss';
import './CardStart.scss';
import icon from '../assets/icon-search.png'

export default function CardStart() {
    return (
        <div className="card-wrapper card-start">
            <div>
            <div className="icon"><img src={icon} alt="search icon" width="72"/></div>
            
            <h3>Tell us a bit about you</h3>
            <p>To find the right companion for you, please answer the following 10 questions. Based on your answers, we will show you a list of matched pets in your nearby animal shelters.</p>
            </div>
            <button className="button-fill">Let's start!</button>
        </div>
    )
}
