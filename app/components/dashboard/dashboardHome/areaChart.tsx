"use client"
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  
  {
    name: 'Students',
    total: 200,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'HOD | Dean',
    total: 10,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Lecturers',
    total: 45,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Research Diretors',
    total: 40,
    pv: 4800,
    amt: 2181,
  }

];

export default class AreaChartGraph extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/area-chart-in-responsive-container-e6dx0';

  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
