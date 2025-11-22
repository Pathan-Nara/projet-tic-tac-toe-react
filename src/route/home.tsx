import '../style/home.css'

function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <h1>Bienvenue sur mon super tic tac toe trop styleyyyyy</h1>
                    <p>Choisissez contre qui vous voulez jouer :</p>
                </div>
                <div className="home-interactive">
                    <img src="https://www.lamaisondubillard.com/img/cms/BLOG/Tout%20savoir%20sur%20le%20jeu%20du%20Tic%20Tac%20Toe/Plateau-morpion.jpg" alt="Tic Tac Toe" className="home-image" />
                    <div className='buttonLayout'>
                        <button className='homeButton button-primary'>Joueur vs Joueur</button>
                        <button className='homeButton button-secondary'>Joueur vs IA</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home