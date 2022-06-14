export const CreateRequest = async (path, params, method = 'GET') => {
  if (method === 'GET') {
    const urlParams = new URLSearchParams();

    Object.entries(params).forEach(([name, value]) => {
      urlParams.append(name, value);
    });

    path += '?' + urlParams.toString();
  }

  const response = await fetch(`${process.env.REACT_APP_NEWS_HOST}${path}`);
  return await response.json();
};
