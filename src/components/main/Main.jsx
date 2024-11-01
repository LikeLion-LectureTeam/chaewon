import { useState } from 'react';
import './Main.css';

export function Main(props) {

    const [field, setField] = useState('');
    const [time, setTime] = useState('');
    const [day, setDay] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setDay(Math.ceil(10000 / parseInt(time)));
    }

    return(
        <main>
            <form className="cont-inp" onSubmit={handleSubmit}>
                <p className="txt-wannabe">I will master <input type="text" placeholder="programming" onChange={(event) => setField(event.target.value)} />.</p>
                <p className="txt-time">So I will spend <input type="number" placeholder="5" onChange={(event) => setTime(event.target.value)} /> hours of training every day.</p>
                <button className="btn-exc" type="submit">How many days will I need to train in order to reach 10,000 hours?</button>
            </form>
            {day && <section className="cont-result">
                <h2 className="a11y">Get my results</h2>
                <p className="txt-wannabe">In order to become a master at <strong>{field}</strong>, <br /> you must spend <strong>{day}</strong> days of training.</p>
                <button type="button" className="btn-go" onClick={() => props.modalOpen(true)}>GO GO!</button>
                <button type="button" className="btn-share">Share</button>

            </section> }
        </main>

    )
}