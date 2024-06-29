import React, { useState } from 'react';
import './App.css';
import { plans as initialPlans } from './plans';

export default function App() {
  const [plans, setPlans] = useState(initialPlans);
  const [form, setForm] = useState({
    name: '',
    type: '',
    effectiveDate: '',
    geography: '',
    costShareOverview: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlans([...plans, form]);
    setForm({
      name: '',
      type: '',
      effectiveDate: '',
      geography: '',
      costShareOverview: ''
    });
  };

  return (
    <main>
      <h1>Healthfirst Health Insurance Plans</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
          placeholder="Plan Name"
          required
        />
        <input
          type="text"
          name="type"
          value={form.type}
          onChange={handleInputChange}
          placeholder="Type"
          required
        />
        <input
          type="date"
          name="effectiveDate"
          value={form.effectiveDate}
          onChange={handleInputChange}
          placeholder="Effective Date"
          required
        />
        <input
          type="text"
          name="geography"
          value={form.geography}
          onChange={handleInputChange}
          placeholder="Geography"
          required
        />
        <input
          type="text"
          name="costShareOverview"
          value={form.costShareOverview}
          onChange={handleInputChange}
          placeholder="Cost Share Overview"
          required
        />
        <button type="submit">Add Plan</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Plan Name</th>
            <th>Type</th>
            <th>Effective Date</th>
            <th>Geography</th>
            <th>Cost Share Overview</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan, index) => (
            <tr key={index}>
              <td>{plan.name}</td>
              <td>{plan.type}</td>
              <td>{plan.effectiveDate}</td>
              <td>{plan.geography}</td>
              <td>{plan.costShareOverview}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}