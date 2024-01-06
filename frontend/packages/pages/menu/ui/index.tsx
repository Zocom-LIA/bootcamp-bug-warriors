import './style.scss';
import { MenuItemsContainer } from '@zocom/menu-container';
import { Styles, Wrapper } from '@zocom/wrapper';
import { addItem } from '@zocom/cart-actions';
import { RootState } from '@zocom/store';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '@zocom/types';
// import { CartButton, CartButtonStyles, Animation } from '@zocom/cart-button';
import { useEffect, useState } from 'react';
import { TopBar } from '@zocom/top-bar';
import { fetchMenu } from '@zocom/products';
import { WontonItemComponent } from '@zocom/wontons';
import { DipItemComponent } from '@zocom/dips';
import { MenuList, DipItem } from '@zocom/types';

export const Menu = () => {
  const [menu, setMenu] = useState<MenuList | null>(null);
  const [animate, setAnimate] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart?.items);
  const [selectedDip, setSelectedDips] = useState<string[]>([]);
  const dispatch = useDispatch();
  const dipList = menu?.dip?.map((item) => item.name);
  const fullDipList: DipItem[] = menu ? menu?.dip?.map((item) => item) : [];

  useEffect(() => {
    fetchMenu()
      .then(setMenu)
      .catch((error) => console.error('Error fetching menu:', error));
  }, []);

  if (!menu) {
    return <div>Loading.....</div>;
  }

  const handleSelectDip = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;

    button.classList.toggle('sauce_button-active');
    if (selectedDip.includes(button.textContent!)) {
      setSelectedDips(
        selectedDip.filter((sauce) => sauce !== button.textContent!)
      );
    } else {
      setSelectedDips([...selectedDip, button.textContent!]);
    }
  };

  const handleAddItem = (item: Product) => {
    dispatch(addItem(item));
    setAnimate(true);
  };
  // const handleIncrease = (item: Product) => {
  //   dispatch(increase(item));
  // };
  // const handleDecrease = (item: Product) => {
  //   dispatch(decrease(item));
  // };

  // useEffect(() => {
  //   if (animate) {
  //     const timer = setTimeout(() => {
  //       setAnimate(false);
  //     }, 600);
  //     return () => clearTimeout(timer);
  //   }
  // }, [animate]);

  return (
    <Wrapper style={Styles.MAIN}>
      <TopBar />
      <MenuItemsContainer>
        <h1 className='menu-heading'>MENY</h1>
        {menu.wonton.map((item, index) => (
          <WontonItemComponent
            key={index}
            item={item}
            handleAddItem={handleAddItem}
          />
        ))}
        <DipItemComponent
          item={fullDipList}
          sauceList={dipList}
          onclick={handleSelectDip}
          selectedDip={selectedDip}
        />
      </MenuItemsContainer>
    </Wrapper>
  );
};
/*
<h1 className='quote'>Karlstad</h1>
<Button onClick={() => handleAddItem(menuItems[0])}>Add item</Button>
<Button onClick={() => handleIncrease(menuItems[0])}>+</Button>
<Button onClick={() => handleDecrease(menuItems[0])}>-</Button>
<h1 className='quote'>Bangkok</h1>
<Button onClick={() => handleAddItem(menuItems[1])}>Add item</Button>
<Button onClick={() => handleIncrease(menuItems[1])}>+</Button>
<Button onClick={() => handleDecrease(menuItems[1])}>-</Button>
*/
