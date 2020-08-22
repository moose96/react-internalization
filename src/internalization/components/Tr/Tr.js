import React from 'react';
import PropTypes from 'prop-types';

import useTranslation from '../../hooks/useTranslation';

function Tr({ component, iKey, ...props }) {
  const text = useTranslation(iKey);

  if (text) {
    return React.cloneElement(component, {...props}, text);
  } else {
    return component;
  }
}

Tr.propTypes = {
  component: PropTypes.node.isRequired,
  iKey: PropTypes.string.isRequired
}

export default Tr;

//
//<Tr component={<h2 />} name={'MessageBox.Yes'} />
//<Tr component={<a href="" />} name={'About'} />
//<Tr name={'MessageBox.Yes}>
//  <h2></h2>
//</Tr>
//const keys = useTranslations('MessageBox');