import './style.scss';

/* Import dependencies */
import { useState } from 'react';
import { Button } from '@zocom/button';
import { useData, ChuckNorrisResponse } from '..';
import { MenuContainer } from '@zocom/menu-container';

export const MenuPage = () => {

    const [quote, setQuote] = useState<ChuckNorrisResponse|null>(null);

    const { fetchQuote } = useData();

    async function handleFetchQuote(){
        const quote = await fetchQuote();
        setQuote(quote ? quote: null);
    }   

    return (
    <MenuContainer>
        <h1 className='quote'>{quote?.value}</h1>
        <Button onClick={() => handleFetchQuote()}>Fetch a quote!</Button>
    </MenuContainer>
    )
}