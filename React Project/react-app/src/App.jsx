import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Card from "./Card.jsx"
import Button from "./Button/Button.jsx"
import Student from "./Student.jsx"


function App() {
    return (
        <>
            <Header />
            <div className="card-box">
                <Card />
                <Card />
                <Card />
                
            </div>

            <div className="buttom-box">
                <Button />
            </div>

            <div className="student-box">
                <Student name="Laura Phillips" age={30} isStudent={true}/>
                <Student name="Patrick Ross" age={21} isStudent={false}/>
                <Student name="Steve Rogers" age={27} isStudent={true}/>
                <Student name="Marlon Rock" age={54} isStudent={true}/>
                <Student name="Celine River" age={28} isStudent={true}/>
                <Student />
            </div>
            <Footer />
        </>
    );
}

export default App
