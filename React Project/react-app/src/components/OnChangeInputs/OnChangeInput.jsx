import style from "./OnChangeInput.module.css"
import { useState } from "react"

function OnChangeInput() {

    const [name, setName] = useState("Igor")
    const [age, setAge] = useState(22)
    const [textbox, setTextbox] = useState("...!")
    const [animalFavorite, setAnimalFavorite] = useState("dog")
    const [chooseMore, setChooseMore] = useState("yes")

    function handdleName(event) {
        const value = event.target.value
        setName(value)
    }

    function handdleAge(event) {
        const value = event.target.value
        setAge(value)
    }

    function handdleTextbox(event) {
        const value = event.target.value
        setTextbox(value)
    }

    function handdleAnimalFavorite(event) {
        const value = event.target.value
        setAnimalFavorite(value)
    }

    function handdleChooseMore(event) {
        const value = event.target.value
        setChooseMore(value)
    }

    return (
        <>
            <h1 className="title-h1">Form Change</h1>
            <div className={style.formBox}>
                <p>Name </p><input name="name" value={name} type="text" placeholder="Type your name" onChange={handdleName} />
                <p>Age </p> <input type="number" value={age} name="age" min="0" max="120" placeholder="Type your age" onChange={handdleAge} onInput="if(this.value.length > 2) this.value = this.value.slice(0, 2);" /><br />
                <p>Text a phrase</p>

                <textarea name="textbox" value={textbox} onChange={handdleTextbox} /><br />
                <span>
                    <p>Favorite Animal</p>
                    <select onChange={handdleAnimalFavorite}>
                        <option value="none">Select a animal</option>
                        <option value="cat">Cat</option>
                        <option value="dog">Dog</option>
                        <option value="bird">Bird</option>
                        <option value="turtle">Turtle</option>
                    </select>
                </span>
                <p>Did you want to have more animals?</p>
                <span>
                    <label>
                        <input type="radio" value="yes" checked={chooseMore === "yes"} onChange={handdleChooseMore} /> Yes
                    </label>
                    <br />
                    <label>
                        <input type="radio" value="no" checked={chooseMore === "no"} onChange={handdleChooseMore} /> No
                    </label>
                </span>
            </div>
            <div className={style.responses}>
                <p className={style["namePhrase"]}>You look a nice person {name}, you has {age}.</p>
                <div className={style["phrase"]}>
                    <h4 className={style["title"]}>Your phrase:</h4>
                    <p>{textbox}</p>
                </div>
                <p>Do you like a {animalFavorite}, it´s a good friend and you said {chooseMore} to others animals!</p>

            </div>
        </>
    );
}

export default OnChangeInput