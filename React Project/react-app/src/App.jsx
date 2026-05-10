import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Card from "./Card.jsx"
import Button from "./components/Button/Button.jsx"
import Student from "./Student.jsx"
import List from "./List.jsx"
import Counter from "./components/Counter/Counter.jsx"
import OnChangeInput from "./components/OnChangeInputs/OnChangeInput.jsx"


function App() {

    const vegetables = [
        { id: 1, name: "broccoli", calories: 34 },
        { id: 2, name: "carrot", calories: 41 },
        { id: 3, name: "spinach", calories: 23 },
        { id: 4, name: "potato", calories: 77 },
        { id: 5, name: "cucumber", calories: 15 },
        { id: 6, name: "tomato", calories: 18 },
        { id: 7, name: "bell pepper", calories: 20 },
        { id: 8, name: "zucchini", calories: 17 }
    ];

    const meats = [
        { id: 9, name: "beef steak", calories: 271 },
        { id: 10, name: "chicken breast", calories: 165 },
        { id: 11, name: "pork chop", calories: 242 },
        { id: 12, name: "salmon fillet", calories: 208 },
        { id: 13, name: "lamb chop", calories: 294 },
        { id: 14, name: "bacon", calories: 541 },
        { id: 15, name: "turkey", calories: 135 },
        { id: 16, name: "tilapia", calories: 128 }
    ];

    const fastFood = [
        { id: 17, name: "cheeseburger", calories: 300 },
        { id: 18, name: "french fries", calories: 365 },
        { id: 19, name: "pizza slice", calories: 285 },
        { id: 20, name: "hot dog", calories: 150 },
        { id: 21, name: "chicken nuggets", calories: 280 },
        { id: 22, name: "taco", calories: 170 },
        { id: 23, name: "milkshake", calories: 500 },
        { id: 24, name: "onion rings", calories: 400 }
    ];

    const desserts = [
        { id: 25, name: "chocolate cake", calories: 340 },
        { id: 26, name: "ice cream", calories: 207 },
        { id: 27, name: "apple pie", calories: 237 },
        { id: 28, name: "pudding", calories: 160 },
        { id: 29, name: "cheesecake", calories: 250 },
        { id: 30, name: "brownie", calories: 132 },
        { id: 31, name: "cookie", calories: 78 },
        { id: 32, name: "donut", calories: 190 }
    ];

    const drinks = [
        { id: 33, name: "water", calories: 0 },
        { id: 34, name: "orange juice", calories: 45 },
        { id: 35, name: "cola soda", calories: 140 },
        { id: 36, name: "coffee (black)", calories: 2 },
        { id: 37, name: "green tea", calories: 1 },
        { id: 38, name: "beer", calories: 150 },
        { id: 39, name: "red wine", calories: 85 },
        { id: 40, name: "lemonade", calories: 40 }
    ];

    const fruits = [
        { id: 41, name: "apple", calories: 95 },
        { id: 42, name: "orange", calories: 62 },
        { id: 43, name: "banana", calories: 105 },
        { id: 44, name: "pineapple", calories: 50 },
        { id: 45, name: "strawberry", calories: 33 },
        { id: 46, name: "grape", calories: 67 },
        { id: 47, name: "watermelon", calories: 30 },
        { id: 48, name: "mango", calories: 60 }
    ];

    return (
        <>
            <Header />

            <div className="buttom-box">
                <Button />
            </div>

            <div className="card-box">
                <Card />
                <Card />
                <Card />
            </div>

            <h1 className="title-h1">Students</h1>
            <div className="student-box">
                <Student name="Laura Phillips" age={30} isStudent={true} />
                <Student name="Patrick Ross" age={21} isStudent={false} />
                <Student name="Steve Rogers" age={27} isStudent={true} />
                <Student name="Marlon Rock" age={54} isStudent={true} />
                <Student name="Celine River" age={28} isStudent={true} />
                <Student />
            </div>
            <h1 className="title-h1">List Foods</h1>
            <div className="list-box">
                <List items={fruits} category="Fruits" />
                <List items={vegetables} category="Vegetables" />
                <List items={fastFood} category="Fast Food" />
                <List items={meats} category="Meats" />
                <List items={desserts} category="Desserts" />
                <List items={drinks} category="Drinks" />
            </div>

            <Counter />

            <OnChangeInput />

            <Footer />
        </>
    );
}

export default App
