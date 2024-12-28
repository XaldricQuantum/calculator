

function Keypad () {

    const handleClear = () => {
        console.log("clear");
        
    };

    const handleNumber = (event) => {
        console.log(event);
        
    };

    const handleOperator = (event) => {
        console.log(event.target.id);
        
    };

    const handEqual = (event) => {
        console.log(event.target.id);
        
    }

    return (
        <div className="key-pad">
            <button className="ac-button" id="clear" onClick={handleClear}>
            <p>AC</p>
            </button>
            <button className="operator" id="divide" onClick={handleOperator}>
            <p>/</p>
            </button>
            <button className="operator" id="multiply" onClick={handleOperator} >
            <p>X</p>
            </button>
            <button className="number" id="seven" onClick={handleNumber} >
            <p>7</p>
            </button>
            <button className="number" id="eight" onClick={handleNumber}>
            <p>8</p>
            </button>
            <button className="number" id="nine" onClick={handleNumber} >
            <p>9</p>
            </button>
            <button className="operator" id="subtract" onClick={handleOperator} >
            <p>-</p>
            </button>
            <button className="number" id="four" onClick={handleNumber} >
            <p>4</p>
            </button>
            <button className="number" id="five" onClick={handleNumber} >
            <p>5</p>
            </button>
            <button className="number" id="six" onClick={handleNumber} >
            <p>6</p>
            </button>
            <button className="operator" id="add" onClick={handleOperator} >
            <p>+</p>
            </button>
            <button className="number" id="one" onClick={handleNumber} >
            <p>1</p>
            </button>
            <button className="number" id="two" onClick={handleNumber} >
            <p>2</p>
            </button>
            <button className="number" id="three" onClick={handleNumber}>
            <p>3</p>
            </button>
            <button className="equal" id="equal" onClick={handEqual}>
            <p>=</p>
            </button>
            <button className="number" id="zero" onClick={handleNumber}>
            <p>0</p>
            </button>
            <button className="number" id="decimal" onClick={handleNumber} >
            <p>.</p>
            </button>
        </div>
    )
}

export default Keypad