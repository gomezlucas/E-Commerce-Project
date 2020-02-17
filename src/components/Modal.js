import React, { Component } from 'react'
import styled from 'styled-components';
import { ProductConsumer } from '../Context'
import { ButtonContainer } from './Button'
import { Link } from 'react-router-dom'



export default class Modal extends Component {

    render() {

        return (
            <ProductConsumer>
                {
                    value => {
                        if (value.modalIsOpen) {
                            const { img, title, price } = value.modalProduct
                            return (
                                <ModalContainer>
                                    <div class="container">
                                        <div class="row">
                                            <div id='modal' class="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                                <h5> Item added to the Cart</h5>
                                                <img src={img} className='img-fluid' alt="phone" />
                                                <h5> {title}</h5>
                                                <h5 className='text-muted'>  price : ${price}</h5>
                                                <Link to='/'>
                                                    <ButtonContainer
                                                        onClick={() => value.closeModal()}
                                                        className='my-2'>Store</ButtonContainer>
                                                </Link>
                                                <Link to='/cart'>
                                                    <ButtonContainer
                                                        onClick={() => value.closeModal()}
                                                        cart className='my-2'>Go to Cart</ButtonContainer>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </ModalContainer>
                            )
                        } else {
                            return null
                        }
                    }
                }

            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
                position: fixed;
                top: 0;
                left:0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                
#modal{
                    background: var(--mainWhite);
            }
`