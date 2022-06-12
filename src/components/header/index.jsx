import styles from './styles.module.scss';
import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/avatar.svg';
import UserToolBar from '../userToolBar';
import BurgerNav from './burgerNav';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <div className={styles.header_inner_left}>
          <BurgerNav />
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.header_inner_right}>
          <UserToolBar src={avatar} />
        </div>
      </div>
    </header>
  );
};

export default Header;
