import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { PropTypes } from "prop-types"

/**
 * @description This function will accept performance data and return a radarchart
 * @param {{data: Array, id: number, kind: Array}} props contains : 
 *        "data" an array of objects withs 3 keys "value", "kind", "type" ("kind"=type of activity number, "type"=type of activity written on frontend)
 *        "id" the client id
 *        "kind" an array og object with a numeral key and the corresponding type of activity 
 * @returns {HTMLElement} RadarChart
 */
const ActivityType = (props) => {
  const {data} = props;
  data.data[0].type="Cardio";
  data.data[1].type="Energie";
  data.data[2].type="Endurance";
  data.data[3].type="Force";
  data.data[4].type="Vitesse";
  data.data[5].type="Intensité";
  let dataNewOrder=[];
  let lgt = data.data.length;
  for (let i=0; i<lgt; i++){
    dataNewOrder[i]=data.data[lgt-i-1];
  }
  return (
    <ResponsiveContainer id="activityTypes">
      <RadarChart cx="50%" cy="50%" fill="white" outerRadius="70%" data={dataNewOrder}>
          <PolarGrid />
          <PolarAngleAxis dataKey="type"/>
          <Radar name="Activity Types" dataKey="value"  fill="red" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

ActivityType.propTypes = {
  data: PropTypes.object
}

export default ActivityType;