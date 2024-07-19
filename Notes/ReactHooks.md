# React Hooks

- Industry Convention for Folder Structure
    - Source Code should be placed in __src__ folder.
    - Move the components inside src/components folder.
    - once moved we need to export them individually
    - we can do that using export default <ComponentName>

- There are 2 types of exports
    - Default export -> where a file would export only one thing from a file ```export default Header```
    - named export -> when we need to export multiple things from a file ``` export const ABC, export const DEF```

- Two types of import as well
    - Default import -> ``` import Header from ./components/Header ```
    - Named import -> ``` import {ABC} from ./utils/constants```

- Why React is fast -> because of faster DOM manipulation
- for super powered variable -> we would use state variable, and to create that we need useState ReactHook

- A HOOK is just like a normal JS function which is given to us by React as a utility function.

- Two Important Hooks
    - useState()  -> to generate superpowerful state variables in React.
        - ``` const[list, setList] = useState([{data:"abc"}]); ```
        - Whenever a state variable changes, react will re-render the component.
    - useEffect() -> 
