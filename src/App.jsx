import './App.css';
import { plans } from './plans';

export default function App() {
  return (
    <main>
      <h1>Healthfirst Health Insurance Plans</h1>
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