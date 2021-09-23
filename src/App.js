import './css/style.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Aside from './components/Aside';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Header />
            <section className='content'>
                <Menu />
                <main>
                    <Aside />
                </main>
            </section>
            <Footer />
        </div>
    );
}

export default App;
