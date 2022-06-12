import StoryCard from '../storyCard';
import styles from './styles.module.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import { v4 as uuidv4 } from 'uuid';
import Loader from '../loader';

const NewsList = ({ fetchMoreData, stories }) => {
  return (
    <InfiniteScroll
      dataLength={stories.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<Loader />}
      height={'600px'}>
      <ul className={styles.container}>
        {stories.map((story) => (
          <li key={uuidv4()}>
            <StoryCard story={story} />
          </li>
        ))}
      </ul>
    </InfiniteScroll>
  );
};
export default NewsList;
