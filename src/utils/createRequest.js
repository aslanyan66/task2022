export const CreateRequest = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
