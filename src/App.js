import logo from './logo.svg';
import './App.css';
import Helloworld from "./components/Helloworld";
import MyClass from "./components/MyClass";
import Condition from "./components/Condition";
import Loop from "./components/Loop";
import Form from "./components/Form";
import LoadUp from "./components/LoadUp";
import {Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";

function App() {

  function clickMe(){
    alert("Clicked in App.js")
  }

  return (
    <div className="App">
    <Nav/>
      {/*<h1>This is my web site - in App.js</h1>*/}
      {/*  <Helloworld name={'Lei Song'} age={45}/>*/}
      {/*  <MyClass name={'Lei Song'} age={45} myclick={clickMe}/>*/}
      {/*<button onClick={clickMe}>Click Me</button>*/}
      {/*<Condition/>*/}
      {/*<Loop/>*/}
      {/*  <Form/>*/}
      {/*  <LoadUp/>*/}
      <Routes>
        <Route path={"/"} element={<Loop/>}/>
          <Route path={"/form"} element={<Form/>}/>
          <Route path={"/loadup"} element={<LoadUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
