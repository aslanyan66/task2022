import styles from './styles.module.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import Button from '../button';
import { useState } from 'react';

const getPercentClassname = (percent) => {
  switch (true) {
    case percent < 40:
      return 'orange';
    case percent < 50:
      return 'yellow';
    default:
      return 'green';
  }
};

const StoryCard = ({ story }) => {
  const {
    title,
    description,
    url,
    imageUrls,
    dynamic_cfscore: { value: percent },
    domain_cached_logo_url: logoSmall,
    domain_cached_large_logo_url: logoLarge,
    type,
    domain_name
  } = story;

  const [isDescription, setIsDescription] = useState(false);
  const handleDescription = () => setIsDescription((prev) => !prev);

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        {imageUrls?.[0] && (
          <div className={styles.container_left}>
            <a href={url} target="_blank" rel="noreferrer">
              <img src={imageUrls[0]} alt="news logo" className={styles.container_left_img} />
            </a>
          </div>
        )}
        <div className={styles.container_right}>
          <div>
            <div className={styles.container_right_titleBlock}>
              <p className={styles.title}>
                <a href={url} target="_blank" rel="noreferrer">
                  {title}
                </a>
              </p>
            </div>
            <p className={isDescription ? styles.descriptionOpen : styles.descriptionHide}>
              {description}
            </p>
            <div className={styles.company}>
              <img src={logoSmall} alt="company logo" className={styles.company_logo} />
              <p className={styles.domain}>{domain_name}</p>
              <p className={styles.day}>1d</p>
            </div>
          </div>
          <div className={styles.container_right_block}>
            <div className={styles[getPercentClassname(percent)]}>{parseInt(percent)}%</div>
            <Button
              type="button"
              onClick={handleDescription}
              className={isDescription ? styles.rotate : styles.transition}>
              <IoIosArrowDown color="#8c8c8c" />
            </Button>
          </div>
        </div>
      </div>
      <div className={isDescription ? styles.footerOpen : styles.footerHide}>
        <Button type="button" className={styles.btn}>
          <AiOutlineLike color="#292929" size={'18px'} />
          <span>Like</span>
        </Button>
        <Button type="button" className={styles.btn}>
          <AiOutlineDislike color="#292929" size={'18px'} />
          <span>Dislike</span>
        </Button>
        <Button type="button" className={styles.btn}>
          <BsBookmark color="#292929" size={'18px'} />
          <span>Bookmark</span>
        </Button>
      </div>
    </div>
  );
};

export default StoryCard;
