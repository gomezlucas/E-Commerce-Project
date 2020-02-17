import React, { Component } from 'react'
import { ProductConsumer } from '../Context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, company, img, info, price, title, inCart } = value.details
                    return (
                        <div className='container py-5'>
                            {/* Title*/}
                            <div class="row">
                                <div class="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1> {title} </h1>
                                </div>
                            </div>
                            {/* end Title*/}
                            {/* product info*/}
                            <div class="row">
                                <div class="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className='img-fluid' alt='phone' />
                                </div>
                                {/* product text*/}
                                <div class="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h3> model: {title}</h3>
                                    <h4 className='text-title text-uppercase text-muted mt-3 mb-2'> made by:
                                        <span className='upper-case'> {company} </span>
                                    </h4>
                                    <h4 className='text-blue'> <strong> price: ${price} </strong></h4>
                                    <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                                        some info about product:
                                    </p>
                                    <p className='text-muted lead'>{info} </p>
                                    {/* buttons*/}
                                    <div class="">
                                        <Link to='/'>
                                            <ButtonContainer> back to products</ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                            cart
                                            disable={inCart ? true : false}
                                            onClick={() => {
                                                value.addToCart(id)
                                                value.openModal(id)
                                            }
                                            }
                                        >
                                            {inCart ? 'inCart ' : 'add to cart'}
                                        </ButtonContainer>

                                    </div>
                                    {/* end buttons*/}
                                </div>
                                {/* endproduct text*/}
                            </div>
                            {/* end product info*/}


                        </div>

                    )

                }
                }
            </ProductConsumer >


        )
    }
}
