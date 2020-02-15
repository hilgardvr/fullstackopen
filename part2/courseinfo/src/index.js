import React from 'react';
import ReactDOM from 'react-dom';

const Head = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
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
    const parts = props.parts
    return (
        <div>
            {parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises} />)}
        </div>
    )

}

const Total = ({parts}) => {
    const total = parts.reduce((acc, part) => acc + part.exercises, 0)
    return (
        <div>
            <p><b>total of {total} exercises</b></p>
        </div>
    )
}

const Course = (props) => {
    return (
        <div>
            <Head course={props.course.name}/>
            <Content parts={props.course.parts}/>
            <Total parts={props.course.parts}/>
        </div>
        )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            { 
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]
    }

    return (
        <div>
            <Course course={course} />
        </div>
        
    )
}

ReactDOM.render(<App />, document.getElementById('root'))