import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../Context'

export default class Productlist extends Component {

    render() {
        return (
            <div className='py-5'>
                <div className='container'>
                    <Title name='our' title='products' />
                    <div className='row'>
                        <ProductConsumer>
                            {data => {
                                return (
                                    data.products.map(product => {
                                        return <Product key={product.id} info={product} />
                                    })
                                )
                            }
                            }
                        </ProductConsumer>
                    </div>
                </div>
            </div>
        )
    }
}
