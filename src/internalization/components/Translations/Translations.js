import React from 'react';
import PropTypes from 'prop-types';

// import checkTranslations from '../../utils/CheckTranslations';
import useLanguages from '../../hooks/useLanguages';

function Translations({ children, translations }) {
  // const checkedTranslations = checkTranslations(translations);

  // if (!checkedTranslations.state) {
  //   throw Error(checkedTranslations.data);
  // }

  const languages = useLanguages(translations);

  return (
    <div>
      {languages.map((element, index) => children(element, index))}
    </div>
  )

  // return (
  //   <div>
  //     {Object.keys(translations).map((element, index) => children(element, index))}
  //   </div>
  // );
}

Translations.propTypes = {
  children: PropTypes.func.isRequired,
  translations: PropTypes.objectOf(PropTypes.object)
}

export default Translations;