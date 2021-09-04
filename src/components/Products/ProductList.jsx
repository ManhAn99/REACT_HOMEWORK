import React from 'react'
import data from '../../data.json'
import {Grid} from '@material-ui/core'
import ProductCard from './Product/ProductCard'
import useStyles from './style'

const ProductList = () => {
    const {products}  = data
    console.log(data);
    const classes = useStyles()
    return (
        <main className = {classes.content} >
            <div className = {classes.toolbar} />
           <Grid container justify = 'center' spacing = {4}>
               {products.map(product => (
                   <Grid item key = {product.id} xs = {12} sm = {6} md = {4} lg ={3}>
                       <ProductCard product = {product}/>
                   </Grid>
               ))}
            </Grid>  
        </main>
    )
}

export default ProductList
