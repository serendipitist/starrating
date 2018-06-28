import React, { Component, PropTypes} from 'react';

const Star = ({selected=false, onClick=f=>f }) => 
  <div className={(selected) ? "star selected" : "star"}
       onClick={onClick}>
  </div>

  // Star.propTypes = {
  //   onClick: PropTypes.func
  // }

export default Star;
