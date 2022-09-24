import React, { useState } from "react";

function Form() {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");
const [formData,setFormData] = useState({
  firstName :"John",
  lastName :"Henry"
});
  // function handleFirstNameChange(event){
  //   setFirstName(event.target.value)
  // } 

  // function handleLastNameChange(event) {
  //   setLastName(event.target.value);
  // }
// function handleFirstNameChange(event){
//   setFormData({
//     ...formData,firstName:event.target.value,
//   });
// }

// function handleLastNameChange(event){
//   setFormData({
//     ...formData,
//     lastName:event.target.value,
//   });
// }

function handleChange(event){
  //name is the KEY in of the formData object we are trying to update
  const name = event.target.name;
  const value = event.target.value;

  setFormData({
    ...formData,
    [name]:value,
  })
}
  return (
    <form>
    <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
    <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
    <button type="submit">Submit</button>
  </form>
    // <form>
    //   <input type="text" name="firstName" onChange={handleFirstNameChange} value={formData.firstName} />
    //   <input type="text" name="lastName" onChange={handleLastNameChange} value={formData.lastName} />
    //   <button type="submit">Submit</button>
    // </form>
  );
}

export default Form;
