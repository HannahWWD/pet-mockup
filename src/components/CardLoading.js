import React from 'react'
import './Card.scss';
import ReactBodymovin from 'react-bodymovin';
import loading from '../assets/loading-lottie.json'

export default function CardLoading(props) {
    const loadingOptions = {
        loop: true,
        autoplay: true,
        prerender: true,
        animationData: loading
    }

    setTimeout(()=>{
        props.history.push('/result')
    }, 3000)
    return (
        <div className="card-wrapper">
            <div><ReactBodymovin options={loadingOptions} /></div>
            <h3>Generating results...</h3>

        </div>
    )
}
