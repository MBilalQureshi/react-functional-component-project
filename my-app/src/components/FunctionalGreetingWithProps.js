import React from "react"

// Option 1: Use regular function if complex
// function FunctionalGreeting(){
//     return <h1>Hello from React!</h1>
// }

// Option 2: Use aerow function if not complex(ES6)
const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <h1>Functional Greeting With Props says, {props.greetings} My name is {props.name} and age is {props.age}</h1>;
}

export default FunctionalGreetingWithProps;