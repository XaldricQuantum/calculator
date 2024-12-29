

function Display(props) {

    return (
        <div className="display">
            <div className="result-display"><p>{props.state.displayValue}</p></div>
            <div className="current-display">{props.state.currentValue}</div>
        </div>
    )

}

export default Display