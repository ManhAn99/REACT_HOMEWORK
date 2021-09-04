import React from 'react'
import {Card,CardMedia, CardContent,Typography} from '@material-ui/core'

import useStyles from './style'
const ProductCard = ({product}) => {
    const classes = useStyles()
    return (
        <Card className = {classes.root}>
         <CardMedia className = {classes.media} image = {product.image} title = {product.name} />
         <CardContent>
             <div className = {classes.cardContent}>
                 <Typography variant = 'h5' gutterBottom>
                   {product.name}
                 </Typography>
                 <Typography variant = 'h5' >
                   $ {product.price}
                 </Typography>
             </div>
             <Typography variant = 'body2' color = 'textSecondary'>{product.description}</Typography>
         </CardContent>

       </Card>
    )
}

export default ProductCard
