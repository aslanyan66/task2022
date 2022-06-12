export const getOrder = (order) => {
  const data = {
    'top rated': 'top',
    latest: 'latest',
    popular: 'retweeted',
    'most read': 'read'
  };

  return data[order] || '';
};
