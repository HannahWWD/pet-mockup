import React from 'react'
import CardStart from '../components/CardStart';
import './Questions.scss';

export default function Home(props) {
    return (
        <div className="main-container-questions">
        <CardStart history={props.history}/>
            
        </div>
    )
}
