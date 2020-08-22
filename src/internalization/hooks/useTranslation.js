import { useContext } from 'react';

import InternalizationContext from '../context';
import findEntry from '../utils/findEntry';

export default function useTranslation(iKey) {
  const translations = useContext(InternalizationContext);
  return findEntry(translations, iKey);
}