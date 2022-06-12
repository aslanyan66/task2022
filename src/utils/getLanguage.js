export const getLanguage = (lang) => {
  const data = {
    english: 'en',
    german: 'de',
    chinese: 'zh',
    italian: 'it'
  };
  return data[lang] || 'all';
};
