import React, { useState } from "react";

function Navbar({add}) {


  const [title, settitle] = useState("") 
  const [description, setdescription] = useState("")
  const [rating, setrating] = useState("")



  const handleSearchSubmit = (event) => {
    event.preventDefault();
  add (title,description,rating)
  };
  const handleClick=()=>{
    add(title.description.rating)
  }


  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
        
          <form className="d-flex" onSubmit={handleSearchSubmit}>
            <input className="form-control me-2" onChange={(e)=>settitle(e.target.value)}/>
            <input className="form-control me-2" onChange={(e)=>setdescription(e.target.value)}/>
            <input className="form-control me-2" type= "number" min={0}
  max={5}  onChange={(e)=>setrating(e.target.value)}/>
            <button className="btn btn-outline-success" type="submit">
              Add 
            
            </button>
            </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
