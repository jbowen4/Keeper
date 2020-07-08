import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleInput(event) {
    const {name, value} = event.target; 

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    });
  }

  function handleAdd(event){
    props.onAdd(note);
    setNote({
      title: "", 
      content: ""
    });
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input onChange={handleInput} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleInput} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
