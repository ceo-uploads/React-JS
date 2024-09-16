// protoTypes = a mechanism that ensures that the passed value
//              is of the correrct dataType...
//              age: PropTypes.number...
import PropTypes from 'prop-types'
function Student(props) {
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

// defaultProps = default values for props in case thay are not
//                passed from the parent component;
//                name: "Guest"

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Student