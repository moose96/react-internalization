import checkTranslation from './CheckTranslations';

describe('test checkTranslation utility function', () => {
  it('should pass', () => {
    const translations = {
      'pl': {},
      'en': {}
    };

    expect(checkTranslation(translations).state).toBeTruthy();
  })

  it('should fail', () => {
    const translations = {
      'pl': {},
      'e3': {}
    };;

    expect(checkTranslation(translations).state).toBeFalsy();
  })
});
