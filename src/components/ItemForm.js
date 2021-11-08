import {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [submissionForm,setSubmissionForm]= useState({ id:uuid(), name:"", category:"Produce" })
  const onItemSubmit = (e) => {
    e.preventDefault()
    // setSubmissionForm({...submissionForm,id:uuid()})
    onItemFormSubmit(submissionForm)
    clearForm()
  }
  const handleFormChange = (e) => {
    setSubmissionForm({...submissionForm,[e.target.name]:e.target.value})
  }
  const clearForm = () => {
    setSubmissionForm({ id:uuid(), name:"", category:"Produce" })
  }
  return (
    <form className="NewItem" onSubmit={onItemSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange = {handleFormChange} value={submissionForm.name}/>
      </label>
      <label>
        Category:
        <select name="category" onChange = {handleFormChange} value={submissionForm.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
