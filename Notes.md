
## React.CreateElement()
- To make these kind of elements in react , it becomes a little clumsy and lengthy process.So, facebook developers created some thing known as JSX. Its a syntax for writing react code / creating react elements. JSX is different than React.

## JSX
- JSX is not HTML inside JS. It is having HTML LIKE SYNTAX.
- JSX is converted to React.CreateElement() using Babel.
- JSX written in single line is a valid JSX.
- In case you want to write in multiple lines then JSX needs to be wrapped inside paranthesis () to be valid. Since babel has to understand the JSX for compilation, it has be inside paranthesis in case of multiple lines JSX.

## Components in React
- Class Based Components - OLD way of writing code where we use JS Classes to create components.
- Functional Components - New way of writing code where we use JS Functions to create components.
- legacy projects are still using Class Based components.
- Name the component starting with Capital Letter , this would make react understand that it is a component. 
- So basically function component can be defined as an arrow function which would return us a JSX element.
- A function which returns a JSX Component (React Element) is known as functional component.

## Example While Rendering
- if u want to render a react element -> ```root.render({reactElement you have created})```.
- if u want to render a react component -> ```root.render(<{ReactComponent} />```).

```
const headingReactElement = <h1 id="heading">This is a React Element</h1>;
root.render(headingReactElement);

const HeadingReactComponent = () => <h1 id="heading">This is a React Component</h1>;
root.render(<HeadingReactComponent />);
```

## Nested Rendering
- to render multiple components inside a component Example
```
const Title = () => <h1>This is Title Component</h1>

const Heading = () => (
    <div id = "container">
        <Title />
        <h1> This is Heading Component </h1>
    </div>
)

```
- To Compose two components inside one another, it is known as __Component Composition__.

## Amazing Super Power of JSX
- You can inject anything inside JSX using *curly braces {}*.
- This can be used in a use case where you want to inject a React Element inside a React Component.
- Example can be shown as below.

```
const title = <h1>This is Title React Element </h1>;
const Heading = () => (
    <div id = "container">
        {title}
        <h1> This is Heading Component </h1>
    </div>
);
```

- If anything is being sent inside these curly braces, JSX sanitizes that data.
- In JSX inside curly braces, you can pass anything made of JS
- so calling a component can be shown in 3 ways as shown below

```
const Title = () => <h1>This is a Title Component</h1>;
const Heading = () => (
    <div id="container">
        {Title()}
        <Title />
        <Title></Title>
        <h1> This is Heading Component </h1>
    </div>
)
```

- Props -> pass data dynamically to a component
- So like Functional Components are basically JavaScript functions, similarly props are basically arguments passed to a function
- So we can say that passing the props to React Component , is same as passing arguments to a function
