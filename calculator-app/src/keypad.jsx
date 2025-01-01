
let formula = "";
function Keypad (props) {

    const numbers = {
        zero: "0",
        one: "1",
        two: "2",
        three: "3",
        four: "4",
        five: "5",
        six: "6",
        seven: "7",
        eight: "8",
        nine: "9"
    }
    const operatorRegex =/[*+-/]$/;
    let isLastOpt = false;

    const updateCurrentNumber = (numStr) => props.setState((prevState) =>
                         ({...prevState, currentValue: prevState.currentValue + numStr }));
    const addToFormula = (value) => {formula += value}

    const handleClear = () => {
        console.log("clear");
        props.setState({
            currentValue: "0",
            displayValue: [],
            lastClicked: ""
        })
        formula = "";
        
    };

    const updateCurrentValue = (value) => {
        props.setState((prevState) => ({...prevState, currentValue: value}));
    }

    const addToDisplayValue = (value) => {
        if (value !== "0"){

            props.setState((prevState) => ({...prevState, displayValue: [...prevState.displayValue, value]}))
            formula += value;
        }
        console.log(`formula ${formula}`);
        console.log(`value ${value}`);
        
    }

    const removeLastDisplayValue = () => {
        props.setState((prevState) => ({...prevState, displayValue: prevState.displayValue.pop()}))
        formula = formula.slice(0, -1)
    }

    const updateLastClicked = (value) => {
        props.setState((prevState) => ({...prevState, lastClicked: value}))
    }

    const handleNumber = (event) => {
        let numberId = event.currentTarget.id;
        
        console.log(numberId);
        let number = numbers[numberId];
        if (props.state.lastClicked === 'opt') {
            console.log("last click opt");
            updateLastClicked('num')
            addToDisplayValue(props.state.currentValue)
            updateCurrentValue(number)
        } else if (props.state.lastClicked === 'num') {
            updateCurrentNumber(number)
        }
        console.log(number);
        if (parseInt(props.state.currentValue) === 0) {

            if (parseInt(number) === 0) {
            // console.log("inside if")
            return
            } else {
                updateCurrentValue(number)
            }
        } 
        
        // console.log((() => props.state.currentValue)());
        updateLastClicked('num');

        
    };

    const handleOperator = (event) => {
        console.log(event.currentTarget.id);
        console.log(props.state.displayValue[props.state.displayValue.length - 1]);
        if (props.state.displayValue[props.state.displayValue.length -1]) {
            isLastOpt = operatorRegex.test(props.state.displayValue[props.state.displayValue.length - 1]) 
            console.log(`isLastOpt= ${props.state.displayValue}`);
            console.log(`isLastOpt= ${isLastOpt}`);
        } 
        let operator = "";
        switch (event.currentTarget.id) {
            case "add":
                // console.log("case add");
                operator = '+';
                break;
            case "subtract":
                operator = '-';
                break;
            case "divide":
                operator = '/';
                break;
            case "multiply":
                operator = '*';
                break;
            default:
                console.log(operator)
                console.log("handleOperator missmatch");
        }
        if (props.state.lastClicked === "num") {
            console.log(operator)
            addToDisplayValue(props.state.currentValue)
            updateCurrentValue(operator)
            console.log(props.state.currentValue);
            console.log(props.state.displayValue);
            
        } else if (props.state.lastClicked === "opt") {
            // No subtract involved
            if (props.state.currentValue !== "-" && operator !== '-') {
                updateCurrentValue(operator)
                
                // multiple (-) entered and ignored
            } else if (props.state.currentValue === '-' && operator === '-') {
                console.log("multiple -");
                

            } else if (props.state.currentValue === '-' && operator !== '-' && isLastOpt) {
                // removeLastDisplayValue();
                // console.log("value should be removed here");
                console.log("opt + -> - -> +")
                updateCurrentValue(operator)
                removeLastDisplayValue()
                
                return
            } else if (operator === '-' && props.state.currentValue !== "-") {
                console.log("operator + -> -")
                addToDisplayValue(props.state.currentValue)
                updateCurrentValue(operator)
            }
        } else if (props.state.lastClicked === "eql") {
            // formula = props.state.currentValue;
            // props.setState((prevState) => ({...prevState, displayValue: [prevState.currentValue]}))
            // updateCurrentValue(operator)
            updateCurrentValue("0");
            addToDisplayValue(operator);
        }
        updateLastClicked('opt')
    };

    const handEqual = (event) => {
        // let formula =""
        if (props.state.lastClicked === "num") {
            addToDisplayValue(props.state.currentValue)
            console.log(`${props.state.currentValue} added to displayValue`);
            
        };
        console.log(props.state.lastClicked);
        
        updateLastClicked('eql');
        // addToDisplayValue(props.state.currentValue);
        console.log(event.currentTarget.id);
        
        // setTimeout(formula = (() => props.state.displayValue)().join(""), 1000)
        // console.log(props.state.displayValue);
        // formula = (() => props.state.displayValue)().join("");
        // formula = props.state.currentValue;
        // props.setState((prevState) => ({...prevState, displayValue: [prevState.currentValue]}))
           
        console.log(formula);
        let result = eval(formula);
        updateCurrentValue(result);
        console.log(`result: ${result}`);
        
        props.setState((prevState) => ({...prevState, displayValue: [prevState.currentValue]}))
        // props.setState((prevState) => ({...prevState, currentValue: "0"}))
        formula = result
        updateCurrentValue(result)
           
        
    }

    const handleDecimal = (event) => {
        console.log("handle decimal");
        
        if (props.state.currentValue.includes(".")) {
            return
        } else {
            updateCurrentNumber(".")
        }
        // props.setState((state) => ({...state, lastClicked: "num"}))
        updateLastClicked('num')
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
            <button className="equal" id="equals" onClick={handEqual}>
            <p>=</p>
            </button>
            <button className="number" id="zero" onClick={handleNumber}>
            <p>0</p>
            </button>
            <button className="number" id="decimal" onClick={handleDecimal} >
            <p>.</p>
            </button>
        </div>
    )
}

export default Keypad