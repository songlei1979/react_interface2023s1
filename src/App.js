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
import Fragment from "./components/Fragment";
import React from "react";
import ContextReceiver from "./components/ContextReceiver";
import Counter from "./components/Counter";
import FetchPosts from "./components/FetchPosts";
import Reducer from "./components/Reducer";
import LoadDataWithReducer from "./components/LoadDataWithReducer";

export const myContext = React.createContext("This is my context")

function App() {

  function clickMe(){
    alert("Clicked in App.js")
  }



  return (
    <div className="App">
      <myContext.Provider value={"This is the changed context"}>
        <ContextReceiver/>
      </myContext.Provider>
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
        <Route path={"/fragment"} element={<Fragment/>}/>
        <Route path={"/context-receiver"} element={<ContextReceiver/>}/>
      <Route path={"/counter"} element={<Counter/>}/>
        <Route path={"/fetch-posts"} element={<FetchPosts/>}/>
        <Route path={"/reducer-counter"} element={<Reducer/>}/>
        <Route path={"/reducer-load-posts"} element={<LoadDataWithReducer/>}/>
      </Routes>
    </div>
  );
}

export default App;
