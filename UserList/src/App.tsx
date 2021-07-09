
import { useState} from 'react';
import UserList from './UserList';

// import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';



function App() {

  const [page,setPage] =useState(1);

  return (
    <>
    <UserList page={page} pageTitle="Favourite Page" />
    <div className="flex w-full justify-evenly">
      <button className="px-4 py-2 rounded-lg bg-purple-500 " onClick={()=>{page>1 && setPage(page - 1)}}> Previous Page </button>
      <div>Page No: {page}</div>
      <button className="px-4 py-2 rounded-lg bg-purple-500" onClick={()=> setPage(page + 1)}> Next Page </button>
    </div>
    </>
  );
}

export default App;
