/**
 * Retrieves the translation from language map according to the current locale.
 * 
 * @param component the component containing the translations
 */
export function getTranslatedText(component) {
  return localStorage.getItem('lang') && component && component[localStorage.getItem('lang')] ? 
        component[localStorage.getItem('lang')].text
    : component && component.en && component.en.text;
}

