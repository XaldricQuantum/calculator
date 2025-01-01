

function Display(props) {
    // console.log(`display in comp${props.state.displayValue}`);
    

    return (
        <div className="display">
            <div className="result-display">{props.state.displayValue}</div>
            <div className="current-display" id="display">{props.state.currentValue}</div>
        </div>
        // <div className="display" id="display">
        //     <p>{props.state.currentValue}</p>
        // </div>
        // <div className="display" id="display">
        //     {props.state.displayValue.join("") || props.state.currentValue}
        // </div>

    )

}

export default Display