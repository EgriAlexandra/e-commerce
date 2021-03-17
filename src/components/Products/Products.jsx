import React from "react";
import { Grid } from "@material-ui/core";

import Product from '../Products/Product/Product';
import useStyles from './styles';

// const products=[
//     {id:1, name:"Shoes", description:"Running shoes",  price: "$5", image:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1b8d26cc-913f-4825-bd26-be4cee840009/air-max-95-shoe-8pVwjT.jpg"},
//     {id:2, name:"Macbook", description:"Apple product",  price: "$100", image:"https://s1.flanco.ro/catalog/product/cache/368/image/650x650/9df78eab33525d08d6e5fb8d27136e95/m/m/mmgf2za_u001_1.jpg" }
// ];

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justify="center" spaicing={4}>
        {products.map((product) => {
            return(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} onAddToCart={onAddToCart}/>
            </Grid>
            ) 
        })}

        </Grid>
    </main>
    )
}

export default Products;