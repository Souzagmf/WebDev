import {useState} from "react"
import style from "./Counter.module.css"

function Counter() {

    const [counterValue, setCountValue] = useState(0);
    const [value, setValue] = useState(1)
    const incrementValue = () => {
        counterValue >= 99 ? setCountValue(0) : setCountValue(c => c + value);
    }

    const decrementValue = () => {
        counterValue <= -99 ? setCountValue(0) : setCountValue(c => c - value);
    }

    const resetValue = () => {
        setCountValue(0);
    }

    const changeValue = (event) => {
        const value = event.target.value
        setValue(Number(value))
    }


    return(
        <div className={style.counterBox}>
            <h1 className="title-h1">Counter</h1>
            <div className={style["middleSpans"]}>
                <span>{counterValue}</span>
                <div className={style["changeValueButtons"]}>
                    <button onClick={changeValue} value={1}>1</button>
                    <button onClick={changeValue} value={5}>5</button>
                    <button onClick={changeValue} value={10}>10</button>
                </div>
            </div>

            <div className="buttonsActions">
                <button onClick={decrementValue}>-{value}</button>
                <button onClick={resetValue}>0</button>
                <button onClick={incrementValue}>+{value}</button>
            </div>
        </div>
    );

}

export default Counter