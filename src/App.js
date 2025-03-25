import logo from './logo.svg';
import './App.css';
import './component/ThemeSwitcher'
import ThemeSwitcher  from './component/ThemeSwitcher';
import Counter from './component/Counter';
import Todolist from './component/Todolist';


function App() {
  return (
    <div>
    {/*<ThemeSwitcher />*/}
    {/*<Counter />*/}
    
    <Todolist />
    
    </div>
  );
}

export default App;
