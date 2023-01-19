import React from "react";
import "./index.css";
//import MessagesList from "./components/MessagesList";
import MessageForms from "./components/Form";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <SearchBar />
      <MessageForms />
      {/* <MessagesList /> */}
    </div>
  );
}

export default App;
