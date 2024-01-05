'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const TicketForm = () => {
  const startingTicketData = {
    title: '',
    description: '',
    priority: 1,
    progress: 0,
    status: 'Not started',
    category: 'Hardware Problem',
  };

  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('form submited');
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-2 w-3/4 xl:w-2/3 2xl:w-5/6"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create Your Ticket</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        />

        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>

        <label>Priority</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            className="select-priority"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1} // using two equal signs in case the value could be a string or number
          />
          <label>1</label>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            className="select-priority"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2} // using two equal signs in case the value could be a string or number
          />
          <label>2</label>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            className="select-priority"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3} // using two equal signs in case the value could be a string or number
          />
          <label>3</label>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            className="select-priority"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4} // using two equal signs in case the value could be a string or number
          />
          <label>4</label>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            className="select-priority"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5} // using two equal signs in case the value could be a string or number
          />
          <label>5</label>
        </div>
        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Not started">Not started</option>
          <option value="Started">Started</option>
          <option value="Done">Done</option>
        </select>
        <input type="submit" className="btn max-w-sm" value="Create Ticket" />
      </form>
    </div>
  );
};

export default TicketForm;
