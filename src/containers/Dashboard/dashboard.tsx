import * as moment from 'moment';
import * as React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { getAllData, getDecimalNumber } from './dashboard-helper';
import './dashboard.scss';

interface IRecord {
  date: string;
  weight: number;
}

class Dashboard extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { data: [] };
  }
  public async componentDidMount() {
    const data = await getAllData();
    // tslint:disable-next-line: no-console
    console.log('this is data', data);
    this.setState({ data });
  }
  public render() {
    if (this.state.data.length === 0) {
      return null;
    } else {
      // tslint:disable-next-line: no-console
      console.log('this is data from api', this.state.data[0]);
      const remaining = '';
      // const remaining = this.state.data[0].weight - 180;
      return (
        <div className="dashboard-container">
          <Navbar />
          <h3>Dashboard</h3>
          <input type="number" name="weight" id="weight" />
          <button>+</button>
          <div>Goal: 180 Lbs</div>
          <div>
            Far from goal : {remaining} Lbs
      </div>
          <div>
            Total Lost :
          {getDecimalNumber(this.state.data[0].weight - this.state.data[this.state.data.length - 1].weight)} Lbs
      </div>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Weight</th>
                <th>Gain/Loss</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.data.map((record: IRecord, index: number) => (
                  <tr key={index}>
                    <td>{moment(record.date).format('MM/DD/YYYY')}</td>
                    <td>{getDecimalNumber(record.weight, 1)}</td>
                    <td>
                      {(index === (this.state.data.length - 1)) ?
                        0.0 : -getDecimalNumber(this.state.data[index === 0 ? 0 : index - 1].weight - record.weight)}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Dashboard;
