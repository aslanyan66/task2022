import { AiOutlineMenu } from 'react-icons/ai';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';

const BurgerNav = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const openDrawer = (e) => {
    e.stopPropagation();
    setIsOpenDrawer(true);
  };
  const disableDrawer = () => {
    setIsOpenDrawer(false);
  };

  useEffect(() => {
    window.addEventListener('click', disableDrawer);

    return () => {
      window.removeEventListener('click', disableDrawer);
    };
  }, []);

  return (
    <>
      <button className={styles.burgerNav} type="button" onClick={openDrawer}>
        <AiOutlineMenu size={'27px'} />
      </button>
      <div
        className={isOpenDrawer ? styles.drawerActive : styles.drawerDisable}
        onClick={(e) => e.stopPropagation()}>
        Drawer
      </div>
    </>
  );
};

export default BurgerNav;
