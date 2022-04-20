import React from 'react';
import Navigation from '../components/Navigation';
import LeftBar from '../components/LeftBar';
import Logo from '../components/Logo';
import { PropTypes } from "prop-types"

/**
 * @description This function will return a page content
 * @param {string} memberId
 */
const Profil = (props) => {
  let {memberId} = props;
  return (
    <div className='profil generalContent'>
      <div className="logo"><Logo memberId={memberId}/></div>
      <div className="navigation"><Navigation memberId={memberId}/></div>
      <div className="leftBar"><LeftBar /></div>
      <div className="content">
        Profil du membre n° {memberId}
      </div>
    </div>
  );
};
Profil.propTypes = {
  props: PropTypes.object,
  memberId: PropTypes.string
}
export default Profil;