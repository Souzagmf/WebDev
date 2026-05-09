import profilePic from './assets/duck-style.png'

function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="image" />
            <h2>Gabriel Souza</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, delectus. Modi, earum ex dolorem cumque suscipit illo labore molestiae odio similique, recusandae quia iusto rerum tenetur reprehenderit minima nihil distinctio.</p>
        </div>
    );
}

export default Card