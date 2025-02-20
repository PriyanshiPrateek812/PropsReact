import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Person from './components/Person';
import Employee from './components/Employee';
import Customer from './components/Customer';
function App() {
  const customer = {
    id: 1,
    name: "Mark",
    email: "m@gmail.com"
  }
  return (
    <div className="App">
      {/* <Person name="John" age="25"/>
      <Person name="Jane" age="22"/>
      <Person name="Doe" age="30"/> */}
      {/* <Employee id="1" name="John" email="john@gmail.com"/>
      <Employee id="2" name="Jane" email="jane@gmail.com"/>
      <Employee id="3" name="Doe" email="doe@gmail.com"/> */}
      <Customer data={customer} />
      <Customer data={{ id: 2, name: "John", email: "j@gmail.com"  }} />
      <Customer data={{ id: 3, name: "Smith", email: "s@gmail.com"  }} />
    </div>

  );
}

export default App;
