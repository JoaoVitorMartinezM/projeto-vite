
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import lista from './ListCards';
import ListCourses from './components/ListCourses';
import AreaSearch from './components/Search';

function App() {

  const cardList = lista;

  return (
    <div className="App">
      <Navbar/>
      <main>
        <AreaSearch/>
        <ListCourses list={cardList}/>
      </main>
      
      <Footer/>
      
    </div>
  )
}

export default App
