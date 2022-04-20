import React from 'react';
import LogoImg from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { PropTypes } from "prop-types"

/**
 * @description This function will return the link to user's main page on the logo
 * @param {object} props memberId
 * @returns {HTMLElement} link to user's main page on the logo
 */
const Logo = (props) => {
  let {memberId} = props;
  return (
    <div>
      <NavLink exact="true" to={`/${memberId}`}>
        <img className="logo" src={LogoImg} alt="logo" />
      </NavLink>
    </div>
  );
};

Logo.propTypes = {
  props: PropTypes.object,
  memberId: PropTypes.string
}
export default Logo;