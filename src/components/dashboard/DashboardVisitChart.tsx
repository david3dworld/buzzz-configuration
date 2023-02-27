import React from 'react';
import {
  Line, ComposedChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

interface IProps {
  width: number,
  height: number,
  stroke: string,
  data: any
}

const DashboardVisitChart = (props: IProps) => {
  const {
    width, height, stroke, data,
  } = props;

  return (
    <div>
      <ComposedChart
        width={width}
        height={height}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="15.32%" stopColor="rgba(0, 108, 103)" stopOpacity={0.1} />
            <stop offset="85.58%" stopColor="rgba(0, 108, 103)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke="rgba(15, 57, 59, 0.1)" strokeDasharray="4" />
        <XAxis hide dataKey="name" />
        <YAxis />
        <Tooltip
          offset={-55}
          labelStyle={{
            fontFamily: 'Aeonik', fontStyle: 'normal', fontWeight: '500', fontSize: '14.6597px', lineHeight: '18px',
          }}
          contentStyle={{ border: 'none', borderRadius: '9.16229px', filter: 'drop-shadow(0px 0px 40px rgba(0, 0, 0, 0.08))' }}
          cursor={{ stroke: 'rgba(83, 75, 190, 0.13)', strokeWidth: 2, strokeDasharray: '7' }}
        />
        <Line
          type="monotone"
          unit="M"
          strokeLinecap="round"
          strokeWidth={2}
          dataKey="close"
          stroke="red"
          dot={false}
          legendType="none"
        />
        <Area
          type="monotone"
          dataKey="Total"
          stroke={stroke}
          fill="url(#colorPv)"
          strokeWidth={4}
          fillOpacity={1}
          activeDot={{ r: 10 }}
        />
      </ComposedChart>
    </div>
  );
};

export default DashboardVisitChart;
