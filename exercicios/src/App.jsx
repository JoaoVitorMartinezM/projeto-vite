
// import './App.css'
import PropTypes from 'prop-types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import ListCourses from './components/ListCourses';

function App() {

  const cardList = [
    {
      name:"Teste",
      category:"Front-End",
      duration:"8h",
      description:"Uma descrição para o curso de React",
      imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  
    },
    {
      name:"Teste",
      category:"Front-End",
      duration:"8h",
      description:"Uma descrição para o curso de React",
      imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  
    },
    {
      name:"Teste",
      category:"Front-End",
      duration:"8h",
      description:"Uma descrição para o curso de React",
      imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  
    },
    {
      name:"Teste",
      category:"Front-End",
      duration:"8h",
      description:"Uma descrição para o curso de React",
      imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  
    },
    {
      name:"Teste",
      category:"Front-End",
      duration:"8h",
      description:"Uma descrição para o curso de React",
      imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  
    },
    {
      name:"Teste",
      category:"Front-End",
      duration:"8h",
      description:"Uma descrição para o curso de React",
      imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  
    },
    {
      name:"Teste",
      category:"Front-End",
      duration:"8h",
      description:"Uma descrição para o curso de React",
      imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  
    },
    {
      name:"Teste",
      category:"Front-End",
      duration:"8h",
      description:"Uma descrição para o curso de React",
      imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  
    }
]

  return (
    <div className="App">
      <Navbar/>
      <ListCourses list={cardList}/>
      <Footer/>
      
    </div>
  )
}

export default App
