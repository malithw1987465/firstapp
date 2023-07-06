import logo from './logo.svg';
import './App.css';
const Style={
  color:"#282c34",
}
function Header(){
  return(
    <div className="home" style={Style}>
        <nav>
          <ul>
            <li >Home</li>
            <li>About</li>
            <li>Quiz</li>
          </ul>
        </nav>
    </div>
  );
}
function App() {
 return <Header/>;
}

export default App;
