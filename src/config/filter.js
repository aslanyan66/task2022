import { v4 as uuidv4 } from 'uuid';

export const autoRefresh = {
  tenSec: {
    name: 'tenSec',
    label: '10 sec',
    isActive: false,
    id: uuidv4()
  },
  thirtySec: {
    name: 'thirtySec',
    label: '30 sec',
    isActive: false,
    id: uuidv4()
  },
  oneMin: {
    name: 'oneMin',
    label: '1 min',
    isActive: false,
    id: uuidv4()
  },
  tenMin: {
    name: 'tenMin',
    label: '10 min',
    isActive: false,
    id: uuidv4()
  }
};
export const order = {
  topRated: {
    name: 'topRated',
    label: 'Top Rated',
    isActive: false,
    id: uuidv4()
  },
  latest: {
    name: 'latest',
    label: 'Latest',
    isActive: false,
    id: uuidv4()
  },
  mostRead: {
    name: 'mostRead',
    label: 'Most Read',
    isActive: false,
    id: uuidv4()
  },
  popular: {
    name: 'popular',
    label: 'Popular',
    isActive: false,
    id: uuidv4()
  }
};
export const languages = {
  selectAll: {
    name: 'selectAll',
    label: 'Select / Unselect All',
    isActive: false,
    id: uuidv4()
  },
  en: {
    name: 'en',
    label: 'English',
    isActive: false,
    id: uuidv4()
  },
  de: {
    name: 'de',
    label: 'German',
    isActive: false,
    id: uuidv4()
  },
  zh: {
    name: 'zh',
    label: 'Chinese',
    isActive: false,
    id: uuidv4()
  },
  it: {
    name: 'it',
    label: 'Italian',
    isActive: false,
    id: uuidv4()
  }
};
export const chose = {
  autoRefresh: {
    name: 'autoRefresh',
    value: ''
    // value: '1min'
  },
  order: {
    name: 'order',
    value: ''
    // value: 'top rated'
  },
  languages: {
    name: 'languages',
    // value: 'all languages'
    value: ''
  }
};
