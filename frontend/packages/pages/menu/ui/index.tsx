import "./style.scss";
import { MenuContainer } from "@zocom/menu-container";
import { Styles, Wrapper } from "@zocom/wrapper";
import { addItem, decrease, increase } from '@zocom/cart-actions'
import { RootState } from '@zocom/store'
import { useDispatch, useSelector } from 'react-redux'
import { Product } from '@zocom/types'
import { Button } from "@zocom/button";
import { CartButton, CartButtonStyles } from "@zocom/cart-button"


export const  Menu = () => {
    const cartItems = useSelector((state: RootState) => state.cart?.items)   
    console.log(cartItems)
    const dispatch = useDispatch()

    const handleAddItem = (item: Product) => {
        dispatch(addItem(item))
    }
    const handleIncrease = (item: Product) => {
        dispatch(increase(item))
    }
    const handleDecrease = (item: Product) => {
        dispatch(decrease(item))
    }

    return(

        <Wrapper style={Styles.MAIN}>
            <MenuContainer>
                <CartButton style={CartButtonStyles.MENU}></CartButton>
                <h1 className="quote">Karlstad</h1>
                <Button onClick={() => handleAddItem( {"name":"Karlstad","desc":"En god friterad wonton.","ingredients":["kantarell","scharlottenlök","morot","bladpersilja"],"price":9})}>Add item</Button>
                <Button onClick={() => handleIncrease({"name":"Karlstad","desc":"En god friterad wonton.","ingredients":["kantarell","scharlottenlök","morot","bladpersilja"],"price":9})}>+</Button>
                <Button onClick={() => handleDecrease({"name":"Karlstad","desc":"En god friterad wonton.","ingredients":["kantarell","scharlottenlök","morot","bladpersilja"],"price":9})}>-</Button>
                <h1 className="quote">Bangkok</h1>
                <Button onClick={() => handleAddItem( {"name":"Bangkok","desc":"En god friterad wonton.","ingredients":["kantarell","scharlottenlök","morot","bladpersilja"],"price":9})}>Add item</Button>
                <Button onClick={() => handleIncrease({"name":"Bangkok","desc":"En god friterad wonton.","ingredients":["kantarell","scharlottenlök","morot","bladpersilja"],"price":9})}>+</Button>
                <Button onClick={() => handleDecrease({"name":"Bangkok","desc":"En god friterad wonton.","ingredients":["kantarell","scharlottenlök","morot","bladpersilja"],"price":9})}>-</Button>
                <h1 className="quote">Paris</h1>
                <Button onClick={() => handleAddItem( {"name":"Paris","desc":"En god friterad wonton.","ingredients":["kantarell","scharlottenlök","morot","bladpersilja"],"price":9})}>Add item</Button>
                <Button onClick={() => handleIncrease({"name":"Paris","desc":"En god friterad wonton.","ingredients":["kantarell","scharlottenlök","morot","bladpersilja"],"price":9})}>+</Button>
                <Button onClick={() => handleDecrease({"name":"Paris","desc":"En god friterad wonton.","ingredients":["kantarell","scharlottenlök","morot","bladpersilja"],"price":9})}>-</Button>
                <h1 className="quote">Oaxaca</h1>
                <Button onClick={() => handleAddItem( {"name":"Oaxaca","desc":"En god friterad wonton.","ingredients":["kantarell","scharlottenlök","morot","bladpersilja"],"price":9})}>Add item</Button>
                <Button onClick={() => handleIncrease({"name":"Oaxaca","desc":"En god friterad wonton.","ingredients":["kantarell","scharlottenlök","morot","bladpersilja"],"price":9})}>+</Button>
                <Button onClick={() => handleDecrease({"name":"Oaxaca","desc":"En god friterad wonton.","ingredients":["kantarell","scharlottenlök","morot","bladpersilja"],"price":9})}>-</Button>
            </MenuContainer>
        </Wrapper>

    )
}




























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
