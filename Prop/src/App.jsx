// props = read-only properties that are shared between components.
//         A parent component can send data to a child component...
//         <component key=value />

import Student from './Student.jsx'


function App() {
    return(
      <>
        <Student name="Sponge-Bob" age={30} isStudent={true}/>
        <hr></hr>
        <Student name="Tom-Sprea" age={50} isStudent={false}/>
        <hr></hr>
        <Student/>
      </>
    );
}

export default App
