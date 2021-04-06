import './App.css';
import {Card} from './components/Card'
import {NavBar} from './components/NavBar'
import {CardPergunta} from './components/CardPergunta'
import img1 from './resources/img1.png'
import img2 from './resources/img2.png'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <section>
        <Card titulo='Título 1' img={img1} content='Content..  ... content. ... content.. .. content.. .. content .. 
          content....content....content....content....content....
          content....content....' button='Botão para detalhes....'/>

        <Card titulo='Título 2' img={img2} content='Content..  ... content. ... content.. .. content.. .. content .. 
          content....content....content....content....content....
          content....content....' button='Botão para detalhes....'/>

        <CardPergunta/>
      </section>
    </div>
  );
}

export default App;
