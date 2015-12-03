'use strict';

import classNames from 'classnames';
import React, { PropTypes } from 'react';

const Bullet = (props) => {

  const handleClick = () => {
    props.onClick(props.index, true);
  };

  const classes = classNames(
    'viewport-slider-paginator-bullet',
    { 'is-active': props.active }
  )

  return (
    <a href={`#viewport-slide-${props.index}`}
      className={classes}
      onClick={handleClick} />
  );

};

Bullet.propTypes = {
  active: PropTypes.bool,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

export default Bullet;
