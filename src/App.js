// import logo from './logo.svg';
import './App.css';
import React from 'react';
import FetchDataTable from './Componets/Table';
import TodoApp from './Componets/Todo';
import ListUsers from './Componets/List';
import CounterValue from './Componets/Counter';
import CountFun from './Componets/UseMemo';
import ParentCom from './ParentCom';
import TodoList from './Componets/InputData';


function App() {
  return(
    <div>
      <TodoList/>
      {/* <FetchDataTable/> */}
      {/* <TodoApp/> */}
      {/* <ListUsers/> */}
      {/* <CounterValue/> */}
      {/* <CountFun/> */}
      {/* <ParentCom/> */}
    </div>
  )
}

export default App;
