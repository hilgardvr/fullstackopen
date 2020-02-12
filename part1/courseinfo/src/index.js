import React from 'react';
import ReactDOM from 'react-dom';

const Head = (props) => {
    return (
        <div>
            <h1>{props.course.name}</h1>
        </div>
    )

}

const Part = (props) => {
    return (
        <div>
            <p>
                {props.part} {props.exercises}
            </p>
        </div>
    )
}

const Content = (props) => {
    const [first, second, third] = props.parts.parts
    return (
        <div>
            <Part part={first.name} exercises={first.exercises}/>
            <Part part={second.name} exercises={second.exercises}/>
            <Part part={third.name} exercises={third.exercises}/>
        </div>
    )

}

const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises}</p>
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            { 
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Head course={course}/>
            <Content parts={course}/>
            <Total parts={course}/>
        </div>
        
    )
}

ReactDOM.render(<App />, document.getElementById('root'))