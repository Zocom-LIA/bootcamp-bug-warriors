import './style.scss';
import { MenuItemsContainer } from '@zocom/menu-container';
import { Styles, Wrapper } from '@zocom/wrapper';
import { addItem, decrease, increase } from '@zocom/cart-actions';
import { RootState } from '@zocom/store';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '@zocom/types';
import { Button } from '@zocom/button';
import { CartButton, CartButtonStyles, Animation } from '@zocom/cart-button';
import { useEffect, useState } from 'react';
import { SauceButtons } from '@zocom/sauce-buttons';

//TODO: Get from backend
const sauceList = [
  'sweet chili',
  'sweet and sour',
  'guacamole',
  'wonton sd',
  'hot mango',
  'chili mayo',
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
  const handleIncrease = (item: Product) => {
    dispatch(increase(item));
  };
  const handleDecrease = (item: Product) => {
    dispatch(decrease(item));
  };

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
        <h1 className='quote'>Karlstad</h1>
        <Button
          onClick={() =>
            handleAddItem({
              name: 'Karlstad',
              desc: 'En god friterad wonton.',
              ingredients: [
                'kantarell',
                'scharlottenlök',
                'morot',
                'bladpersilja',
              ],
              price: 9,
            })
          }
        >
          Add item
        </Button>
        <Button
          onClick={() =>
            handleIncrease({
              name: 'Karlstad',
              desc: 'En god friterad wonton.',
              ingredients: [
                'kantarell',
                'scharlottenlök',
                'morot',
                'bladpersilja',
              ],
              price: 9,
            })
          }
        >
          +
        </Button>
        <Button
          onClick={() =>
            handleDecrease({
              name: 'Karlstad',
              desc: 'En god friterad wonton.',
              ingredients: [
                'kantarell',
                'scharlottenlök',
                'morot',
                'bladpersilja',
              ],
              price: 9,
            })
          }
        >
          -
        </Button>
        <h1 className='quote'>Bangkok</h1>
        <Button
          onClick={() =>
            handleAddItem({
              name: 'Bangkok',
              desc: 'En god friterad wonton.',
              ingredients: [
                'kantarell',
                'scharlottenlök',
                'morot',
                'bladpersilja',
              ],
              price: 9,
            })
          }
        >
          Add item
        </Button>
        <Button
          onClick={() =>
            handleIncrease({
              name: 'Bangkok',
              desc: 'En god friterad wonton.',
              ingredients: [
                'kantarell',
                'scharlottenlök',
                'morot',
                'bladpersilja',
              ],
              price: 9,
            })
          }
        >
          +
        </Button>
        <Button
          onClick={() =>
            handleDecrease({
              name: 'Bangkok',
              desc: 'En god friterad wonton.',
              ingredients: [
                'kantarell',
                'scharlottenlök',
                'morot',
                'bladpersilja',
              ],
              price: 9,
            })
          }
        >
          -
        </Button>
        <h1 className='quote'>Paris</h1>
        <Button
          onClick={() =>
            handleAddItem({
              name: 'Paris',
              desc: 'En god friterad wonton.',
              ingredients: [
                'kantarell',
                'scharlottenlök',
                'morot',
                'bladpersilja',
              ],
              price: 9,
            })
          }
        >
          Add item
        </Button>
        <Button
          onClick={() =>
            handleIncrease({
              name: 'Paris',
              desc: 'En god friterad wonton.',
              ingredients: [
                'kantarell',
                'scharlottenlök',
                'morot',
                'bladpersilja',
              ],
              price: 9,
            })
          }
        >
          +
        </Button>
        <Button
          onClick={() =>
            handleDecrease({
              name: 'Paris',
              desc: 'En god friterad wonton.',
              ingredients: [
                'kantarell',
                'scharlottenlök',
                'morot',
                'bladpersilja',
              ],
              price: 9,
            })
          }
        >
          -
        </Button>
        <h1 className='quote'>Oaxaca</h1>
        <Button
          onClick={() =>
            handleAddItem({
              name: 'Oaxaca',
              desc: 'En god friterad wonton.',
              ingredients: [
                'kantarell',
                'scharlottenlök',
                'morot',
                'bladpersilja',
              ],
              price: 9,
            })
          }
        >
          Add item
        </Button>
        <Button
          onClick={() =>
            handleIncrease({
              name: 'Oaxaca',
              desc: 'En god friterad wonton.',
              ingredients: [
                'kantarell',
                'scharlottenlök',
                'morot',
                'bladpersilja',
              ],
              price: 9,
            })
          }
        >
          +
        </Button>
        <Button
          onClick={() =>
            handleDecrease({
              name: 'Oaxaca',
              desc: 'En god friterad wonton.',
              ingredients: [
                'kantarell',
                'scharlottenlök',
                'morot',
                'bladpersilja',
              ],
              price: 9,
            })
          }
        >
          -
        </Button>
        <SauceButtons
          sauceList={sauceList}
          setSelectedSauces={setSelectedSauces}
          selectedSauces={selectedSauces!}
        />
      </MenuItemsContainer>
    </Wrapper>
  );
};

// import "./style.scss";

// /* Import dependencies */
// import { useState } from "react";
// import { Button } from "@zocom/button";
// import { useData, ChuckNorrisResponse } from "..";
// import { MenuContainer } from "@zocom/menu-container";
// import { Styles, Wrapper } from "@zocom/wrapper";

// export const MenuPage = () => {
//   const [quote, setQuote] = useState<ChuckNorrisResponse | null>(null);

//   const { fetchQuote } = useData();

//   async function handleFetchQuote() {
//     const quote = await fetchQuote();
//     setQuote(quote ? quote : null);
//   }

//   return (
//     <Wrapper style={Styles.MAIN}></Wrapper>
//       <MenuContainer>
//         <h1 className="quote">{quote?.value}</h1>
//         <Button onClick={() => handleFetchQuote()}>Fetch a quote!</Button>
//       </MenuContainer>
//     </Wrapper>
//   );
// };
