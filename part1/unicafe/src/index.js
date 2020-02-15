import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Statistic = (props) => {
    return (
        <div>
            {props.text} {props.value}
        </div>
    )
}

const Statistics = (props) => {
   const all = props.good + props.neutral + props.bad
   if (all === 0) {
       return (
           <div>
               <p>Statistics</p>
               No feedback yet<br/>
           </div>
       )
   }
   const average = (props.good - props.bad) / all
   const positive = props.good / all
    return(
        <div>
            <p>Statistics</p>
            <Statistic text="good" value={props.good}/>
            <Statistic text="neutral" value={props.neutral}/>
            <Statistic text="bad" value={props.bad}/>
            <Statistic text="all" value={all}/>
            <Statistic text="average" value={average}/>
            <Statistic text="positive" value={positive}/>
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <p>
            give feedback
            </p>
            <Button handleClick={() => setGood(good + 1)} text="Good"/>
            <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral"/>
            <Button handleClick={() => setBad(bad + 1)} text="Bad"/>
            <br/>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
