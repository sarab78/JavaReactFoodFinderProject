import React from 'react';
import {Link} from 'react-router-dom';

const InOutContainer = (props) => {


  const inRoute = '/in/recipe-list'
  const outRoute = '/out'

  return(
    <div>
      <p>TestIn/Out</p>
        <Link to={inRoute}>
          <button type='button'>IN</button>
        </Link>
        <Link to={outRoute}>
          <button type='button'>OUT</button>
        </Link>
    </div>
  )
};

export default InOutContainer;
