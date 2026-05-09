import PropTypes from "prop-types"

function Student({name = "Guest", age = 0, isStudent = false}){
    return(
        <div className="student">
            <p><span>Name:</span> {name}</p>
            <p><span>Age:</span> {age}</p>
            <p><span>Student:</span> {isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

export default Student