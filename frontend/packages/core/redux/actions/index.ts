import { Product } from '@zocom/types'

export const addItem = (product: Product) => ({
    type: 'ADD_TO_CART',
    payload: product
});

export const decrease = (product: Product) => ({
    type: 'DECREASE',
    payload: product
})

export const increase = (product: Product) => ({
    type: 'INCREASE',
    payload: product
})