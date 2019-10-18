import * as React from 'react';

const data = [{
  date: 'today',
  weight: 188, // always in lb// add feature to display lb and kg or any other conversion
  // calculate gain/loss on frontend
}];

interface IRecord {
  date: string;
  weight: number;
}

const Dashboard = () => {
  return (
    <div>
      <h3>Dashboard</h3>
      <input name='weight' id='weight' value='' />
      <table>
        <thead>
          <th>Date</th>
          <th>Weight</th>
          <th>Gain/Loss</th>
        </thead>
        <tbody>
          {
            data.map((record: IRecord) => (
              <tr key={record.date}>
                <td>{record.date}</td>
                <td>{record.weight}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;

