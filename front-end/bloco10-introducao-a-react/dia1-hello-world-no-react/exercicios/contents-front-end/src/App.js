import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <body>
    <header>
        <Header />
      </header>
      <main className='Contents'>
        <Content />
      </main>
      <footer>
        <Footer />

      </footer>
    </body>
  );
}

export default App;
