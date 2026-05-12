import { useState } from "react"
import style from "./ColorPicker.module.css"

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF")

    const handleColorPicker = (event) => {
        setColor(event.target.value)
    }

    return (
        <div className={style.colorPickerBox}>
            <h1 className="title-h1">Color Picker</h1>
            <div className={style["color-label"]} style={{ backgroundColor: color }}>{color}</div>
            <div className={style["color-box"]}>
                <label>Select a color</label>
                <input type="color" value={color} onChange={handleColorPicker} />
            </div>
        </div>
    );
}

export default ColorPicker