export const getDelay = (delay) => {
  const data = {
    '10 sec': 10000,
    '30 sec': 30000,
    '1 min': 60000,
    '10 min': 600000
  };

  return data[delay];
};
