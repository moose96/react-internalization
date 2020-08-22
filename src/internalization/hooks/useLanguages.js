import checkTranslations from '../utils/CheckTranslations';

export default function useLanguages(translations) {
  const checkedTranslations = checkTranslations(translations);

  if (!checkedTranslations.state) {
    throw Error(checkedTranslations.data);
  }

  return Object.keys(translations).map(element => element);
}