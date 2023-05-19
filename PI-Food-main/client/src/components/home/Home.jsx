import './Home.css';
import Cards from "../Cards/Cards";
import Nav from "../Nav/Nav";
import SearchBar from "../Nav/SearchBar/SearchBar";
import Footer from '../Footer/Footer';


//componente Home
const Home = () => {

    return (
        <div className="home-page">
            <header className="title">
                <h1>APP Food</h1>
            </header>
            <main>
            <Nav />
            <SearchBar />
            <Cards />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
};



export default Home;
