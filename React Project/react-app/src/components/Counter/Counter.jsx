import {useState} from "react"
import style from "./Counter.module.css"

function Counter() {

    const [counterValue, setCountValue] = useState(0);

    const [value, setValue] = useState(1)
    const incrementValue = () => {
        const incValue = counterValue + value;
        
        incValue >= 99 ? setCountValue(0) : setCountValue(incValue);
    }

    const decrementValue = () => {
        const decValue = counterValue - value;
        
        decValue <= -99 ? setCountValue(0) : setCountValue(decValue);
    }

    const resetValue = () => {
        setCountValue(0);
    }

    const changeOne = () => {
        setValue(1)
    }

    const changeFive = () => {
        setValue(5)
    }
    
    const changeTen = () => {
        setValue(10)
    }


    return(
        <div className={style.counterBox}>
            <h1 className="title-h1">Counter</h1>
            <div className={style["middleSpans"]}>
                <span>{counterValue}</span>
                <div className={style["changeValueButtons"]}>
                    <button onClick={changeOne}>1</button>
                    <button onClick={changeFive}>5</button>
                    <button onClick={changeTen}>10</button>
                </div>
            </div>

            <div className="buttonsActions">
                <button onClick={decrementValue}>-1</button>
                <button onClick={resetValue}>0</button>
                <button onClick={incrementValue}>+1</button>
            </div>
        </div>
    );

}

export default Counter