import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer  } from 'recharts';
import { PropTypes } from "prop-types"

/**
 * @description This function will accept client's data and return a bar chart
 * @param {{id: number, sessions: array}} props contains :
 *        "id" the client id
 *        "sessions" an array of objects containing 3 keys : "day", "kilogram", "calories"
 * @returns {HTMLElement} BarChart
 */
const DailyActivityGraph = (props) => {
  const {data} = props;
  return (
    <ResponsiveContainer id="dailyActivity">
      <BarChart 
        width="100%" 
        height="100%" 
        verticalAlign="bottom"
        data={data.sessions}
        barSize={7}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis dataKey="calories" orientation='left' yAxisId={0} />
        <YAxis dataKey="kilogram" orientation='right' yAxisId={1} />
        <Tooltip />
        <Legend verticalAlign="top" align="right" iconType="circle" iconSize={8} wrapperStyle={{paddingBottom: "20px"}}/>
        <Bar dataKey="kilogram" fill="black" radius={[10, 10, 0, 0]} yAxisId={1}/>
        <Bar dataKey="calories" fill="red" radius={[10, 10, 0, 0]} yAxisId={0}/>
      </BarChart>
    </ResponsiveContainer>
  );
};

DailyActivityGraph.propTypes = {
  props: PropTypes.object
}

export default DailyActivityGraph;