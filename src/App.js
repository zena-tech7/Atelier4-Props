import logo from './logo.svg';
import './styles.css';


function CourseGoal(props) {
  return (
    <li>
      <h2>{title = props.title}</h2>
      <P>{size = props.description}</P>
    </li>
  );
}

function App() {
  return (
    <div id="App">
      <h1>"TIME TO PRACTICE"</h1>
      <h3>One course, many goals! 🎯</h3>
      <ul>
        <CourseGoal
          title={"Learn React"}
          description={"In-depth"}
        />
      </ul>
    </div>
  );
}

export default App;
