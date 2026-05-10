function List(props) {
    //     const fruits = [
    //         { id: 1, name: "apple", calories: 95 },
    //         { id: 2, name: "orange", calories: 62 },
    //         { id: 3, name: "banana", calories: 105 },
    //         { id: 4, name: "pineapple", calories: 50 },
    //         { id: 5, name: "strawberry", calories: 33 },
    //         { id: 6, name: "grape", calories: 67 },
    //         { id: 7, name: "watermelon", calories: 30 },
    //         { id: 8, name: "mango", calories: 60 }
    //     ];

    //     //fruits.sort((a, b) => a.name.localeCompare(b.name)); //APHABETICAL
    //     //fruits.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE APHABETICAL
    //     //fruits.sort((a, b) => a.calories - b.calories); //NUMERIC
    //     //fruits.sort((a, b) => b.calories - a.calories); //REVERSE NUMERIC

    //     //const lowCalFruit = fruits.filter(fruit => fruit.calories < 65)
    //     //const highCalFruit = fruits.filter(fruit => fruit.calories >= 65)


    const fruits = props.items;
    const category = props.category;

    const listItems = fruits.map(fruit => (
        <li key={fruit.id}>
            {fruit.name}: <b>{fruit.calories}</b>
        </li>));

    return (
        <>
            <div className="list-content">
                <h3>{category}</h3>
                <ol>{listItems}</ol>
            </div>
        </>
    );
}

export default List