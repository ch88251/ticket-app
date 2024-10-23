"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {
  const router = useRouter();
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({formData}),
      "content-type": "application/json"
    });

    if (!res.ok) {
      throw new Error("Failed to create ticket!");
    }

    router.refresh();
    router.push("/");
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
        <input 
          id="title" 
          name="title" 
          type="text" 
          onChange={handleChange} 
          required={true} 
          value={formData.title}/>

        <label>Description</label>
        <textarea 
          id="description" 
          name="description" 
          onChange={handleChange} 
          required={true} 
          value={formData.description} 
          rows="5"/>       

        <label>Category</label>
        <select 
          className="w-44" 
          name="category" 
          value={formData.category}
          onChange={handleChange}>   
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Network Problem">Network Problem</option>
        </select>     

        <label>Priority</label>
        <select 
          className="w-20" 
          name="priority" 
          value={formData.priority}
          onChange={handleChange}>   
          <option value="1">P1</option>
          <option value="2">P2</option>
          <option value="3">P3</option>
          <option value="4">P4</option>
          <option value="5">P5</option>
        </select>                     

        <label>Progress</label>
        <input 
          type="range" 
          id="progress" 
          name="progress" 
          value="{formData.progress}"
          min="0"
          max="100"
          onChange={handleChange}
        />

        <label>Status</label>
        <select
          className="w-60"
          name="status" 
          value={formData.status}
          onChange={handleChange}>   
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>

        <input type="submit" className="btn w-60" value="Create Ticket" />
      </form>
    </div>
  );
}

export default TicketForm;
