import './style.scss';
import { MenuItemsContainer } from '@zocom/menu-container';
import { Styles, Wrapper } from '@zocom/wrapper';
import { addItem } from '@zocom/cart-actions';
import { RootState } from '@zocom/store';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '@zocom/types';
import { CartButton, CartButtonStyles, Animation } from '@zocom/cart-button';
import { useEffect, useState } from 'react';
import { SauceButtons } from '@zocom/sauce-buttons';
import { MenuButton } from '@zocom/menu-button';

//TODO: Get from backend
const sauceList = [
  'sweet chili',
  'sweet and sour',
  'guacamole',
  'wonton sd',
  'hot mango',
  'chili mayo',
];

const menuItems = [
  {
    name: 'Karlstad',
    desc: 'En god friterad wonton.',
    ingredients: ['kantarell', 'scharlottenlök', 'morot', 'bladpersilja'],
    price: 9,
  },
  {
    name: 'Bangkok',
    desc: 'En god friterad wonton.',
    ingredients: ['kantarell', 'scharlottenlök', 'morot', 'bladpersilja'],
    price: 9,
  },
  {
    name: 'Oaxaca',
    desc: 'En god friterad wonton.',
    ingredients: ['kantarell', 'scharlottenlök', 'morot', 'bladpersilja'],
    price: 9,
  },
  {
    name: 'Paris',
    desc: 'En god friterad wonton.',
    ingredients: ['kantarell', 'scharlottenlök', 'morot', 'bladpersilja'],
    price: 9,
  },
];

export const Menu = () => {
  const [animate, setAnimate] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart?.items);
  const [selectedSauces, setSelectedSauces] = useState<string[]>([]);
  console.log(cartItems);
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (animate) {
      // Remove the animation class after it completes
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 600); // This should match the duration of your animation
      return () => clearTimeout(timer);
    }
  }, [animate]);

  return (
    <Wrapper style={Styles.MAIN}>
      <MenuItemsContainer>
        <CartButton
          style={CartButtonStyles.MENU}
          animate={animate ? Animation.ANIMATE : Animation.NONE}
        ></CartButton>
        <MenuButton
          menuItem={['WONTON', '9 sek', 'persilja']}
          onClick={() => handleAddItem(menuItems[0])}
        />
        <MenuButton
          menuItem={['WONTON', '9 sek', 'persilja']}
          onClick={() => handleAddItem(menuItems[1])}
        />
        <MenuButton
          menuItem={['WONTON', '9 sek', 'persilja']}
          onClick={() => handleAddItem(menuItems[2])}
        />
        <MenuButton
          menuItem={['WONTON', '9 sek', 'persilja']}
          onClick={() => handleAddItem(menuItems[3])}
        />
        <SauceButtons
          sauceList={sauceList}
          setSelectedSauces={setSelectedSauces}
          selectedSauces={selectedSauces}
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
