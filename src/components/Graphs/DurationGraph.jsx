import React from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer} from 'recharts';
import CustomToolTip from './CustomTooltip';
import { PropTypes } from "prop-types"

/**
 * @description This function will accept client's sessions data and return a line chart
 * @param {{id: number, sessions: array}} props contains :
 *        "id" the client id
 *        "sessions" an array of objects containing 3 keys : "day", "sessionLength", "dayLetter" (first letter of day name)
 * @returns {HTMLElement} LineChart
 */
const DurationGraph = (props) => {
  const {data} = props;
  const semaine = ["L", "M", "M", "J", "V", "S", "D"]
  for (let i=0; i<data.sessions.length; i++){
    data.sessions[i].dayLetter = semaine[i];
  }
  return (
    <ResponsiveContainer id="duration">
      <LineChart  width="100%" height="100%" data={data.sessions}>
        <Tooltip 
          cursor={ {stroke: 'green', strokeWidth: 1} } 
          contentStyle={{width: '20px', height: '7px'}} 
          content={<CustomToolTip />}
        />
        <XAxis dataKey="dayLetter" stroke='rgba(255, 255, 255, 0.5)' strokeWidth={0} fontSize={16}/>
        <Line id="durationLine" type="monotone" dataKey="sessionLength" stroke="rgba(255, 255, 255, 0.5)" dot={false} strokeWidth={2}/>
      </LineChart>
    </ResponsiveContainer>
  );
};

DurationGraph.propTypes = {
  props: PropTypes.object
}
export default DurationGraph;