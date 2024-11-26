import { useState } from "react";

function Contact(){

  const [formData, setFormData] = useState({name: '', email: '', message: ''});

  const handleChange = (e) => {   // Handle change using usestate to update the form data 
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,  // assigns the value of the dom 'name' element to the forms key/value pair 
    });
  }; 

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(/api/send-email, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData),
    }).then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('error:', error))


  }


  return (
    <div>
      <form action="">
        <label>Email </label>

      </form>
    </div>
  );

};

export default Contact;