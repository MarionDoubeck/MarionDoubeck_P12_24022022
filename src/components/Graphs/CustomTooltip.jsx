import React from "react"
import { PropTypes } from "prop-types"

/**
 * @description This function will return the linear chart's legend
 * @param {bool} active recharts automatic param : legend active
 * @param {array} payload recharts automatic param : legend data
 * @returns {HTMLElement} duration legend of the linear duration graph
 */
const CustomToolTip = ({ active, payload }) => {
  if (active && payload.length)  {
    return (
      <div className="tooltip">
        {payload[0].value} min
      </div>
    )
  }  
  return null
}

CustomToolTip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array
}

export default CustomToolTip