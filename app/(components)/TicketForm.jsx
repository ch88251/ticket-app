"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    console.log("submit form")
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "backlog",
    category: "General"
  };

  const [formData, setFormData] = useState(startingTicketData);

  return (
    <div className="flex justify-center">
      <form className="flex flex-col gap-3 w-1/2" method="post" onSubmit={handleSubmit}>
        <h3>Create Ticket</h3>
        <label>Title</label>
        <input id="title" name="title" type="text" 
               onChange={handleChange} required={true} value={formData.title}/>
        <label>Description</label>
        <textarea id="description" name="description" type="text" 
               onChange={handleChange} required={true} 
               value={formData.description} rows="5"/>       
        <label>Category</label>
        <select className="w-44" name="category" value={formData.category}
               onChange={handleChange}>   
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Network Problem">Network Problem</option>
        </select>     
        <label>Priority</label>
        <select className="w-20" name="priority" value={formData.priority}
               onChange={handleChange}>   
          <option value="P1">P1</option>
          <option value="P2">P2</option>
          <option value="P3">P3</option>
        </select>                     
      </form>
    </div>
  );
}

export default TicketForm;
