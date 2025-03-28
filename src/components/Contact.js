import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
	const { name, value } = e.target;
	setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
	e.preventDefault();
	const validationErrors = {};
	if (!form.name) validationErrors.name = 'Name is required';
	if (!form.email) validationErrors.email = 'Email is required';
	else if (!/\S+@\S+\.\S+/.test(form.email)) validationErrors.email = 'Email is invalid';
	if (!form.message) validationErrors.message = 'Message is required';
	setErrors(validationErrors);
	if (Object.keys(validationErrors).length === 0) {
	  // Handle form submission
	}
  };

  return (
	<section>
	  <h2>Contact</h2>
	  <form onSubmit={handleSubmit}>
		<div>
		  <label>Name:</label>
		  <input type="text" name="name" value={form.name} onChange={handleChange} />
		  {errors.name && <span>{errors.name}</span>}
		</div>
		<div>
		  <label>Email:</label>
		  <input type="email" name="email" value={form.email} onChange={handleChange} />
		  {errors.email && <span>{errors.email}</span>}
		</div>
		<div>
		  <label>Message:</label>
		  <textarea name="message" value={form.message} onChange={handleChange}></textarea>
		  {errors.message && <span>{errors.message}</span>}
		</div>
		<button type="submit">Submit</button>
	  </form>
	</section>
  );
};

export default Contact;
