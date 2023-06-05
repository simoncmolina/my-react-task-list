import Header from './componentes/Header';
import TaskList from './componentes/TaskList';
import './App.css'

const listaTareas = [
  { name: "Estudiar React"},
  { name: "Asignar Inventario"},
  { name: "Tareas del hogar"},
]

function App() {
  return <div className='App'>
    <Header />
    <TaskList list={listaTareas}/>
    
  </div>;
}
  

export default App
