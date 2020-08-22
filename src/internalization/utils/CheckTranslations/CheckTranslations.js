export default function checkTranslations(translations) {
  let result = null;

  Object.keys(translations).forEach(element => {
    const matches = element.match(/[a-z]{2}/g);

    if (matches === null) {
      result = element;
    }
  });

  if (result) {
    return {
      state: false,
      data: result
    }
  } else {
    return {
      state: true
    }
  }
}