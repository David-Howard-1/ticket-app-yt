'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const TicketForm = ({ ticket }) => {
  const EDITMODE = ticket._id === 'new' ? false : true;

  const router = useRouter();

  const startingTicketData = {
    title: '',
    description: '',
    priority: 1,
    progress: 0,
    status: 'Not started',
    category: 'Hardware Problem',
  };

  if (EDITMODE) {
    startingTicketData['title'] = ticket.title;
    startingTicketData['description'] = ticket.description;
    startingTicketData['priority'] = ticket.priority;
    startingTicketData['progress'] = ticket.progress;
    startingTicketData['status'] = ticket.status;
    startingTicketData['category'] = ticket.category;
  }

  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDITMODE) {
      const res = await fetch(`/api/tickets/${ticket._id}`, {
        method: 'PUT',
        body: JSON.stringify({ formData }),
        'content-type': 'application/json',
      });

      if (!res.ok) {
        throw new Error('Failed to update ticket.');
      }
    } else {
      const res = await fetch('/api/tickets', {
        method: 'POST',
        body: JSON.stringify({ formData }),
        'content-type': 'application/json',
      });

      if (!res.ok) {
        throw new Error('Failed to create ticket.');
      }
    }

    router.push('/');
    router.refresh();
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col w-2/3 md:w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3 className="text-center">
          {EDITMODE ? 'Update Your Ticket' : 'Create Your Ticket'}
        </h3>
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
          className="shadow-none border-none"
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
        <input
          type="submit"
          className="btn max-w-sm mt-10 mx-auto"
          value={EDITMODE ? 'Update Ticket' : 'Create Ticket'}
        />
      </form>
    </div>
  );
};

export default TicketForm;
