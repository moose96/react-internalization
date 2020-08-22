import React from 'react';
import PropTypes from 'prop-types';

import InternalizationContext from '../../context';
import checkTranslations from '../../utils/CheckTranslations';

function Internalization({ data, lang, defaultLang, children }) {
  let translations = {};

  const checkedTranslations = checkTranslations(data);
  if (!checkedTranslations.state) {
    throw Error(checkedTranslations.data);
  }

  if (!data[lang]) {
    translations = data[defaultLang];
  } else {
    translations = data[lang];
  }

  return (
    <InternalizationContext.Provider value={translations}>
      {children}
    </InternalizationContext.Provider>
  )
}

Internalization.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  lang: PropTypes.string,
  defaultLang: PropTypes.string.isRequired,
  children: PropTypes.node
};


export default Internalization;