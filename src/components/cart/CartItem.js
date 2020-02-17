import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
export default class CartItem extends Component {
    render() {
        const { title, id, img, price, total, count } = this.props.item
        const { increment, decrement, removeItem } = this.props.value
        return (
            <div class="row my-1 text-capitalize text-center">
                <div class="col-10 mx-auto col-lg-2 ">
                    <img src={img} style={{ width: '5rem', height: '5rem' }} className='img-fluid' alt='product' />

                </div>
                <div class="col-10 mx-auto col-lg-2 ">
                    <span className='d-lg-none'>product: </span>
                    {title}
                </div>
                <div class="col-10 mx-auto col-lg-2 ">
                    <span className='d-lg-none'>price: </span>
                    {price}
                </div>

                <div class="col-10 mx-auto col-lg-2 my-2  my-lg-0">
                    <div class="d-flex justify-content-center">
                        <div>
                            <span className='btn btn-black mx-1' onClick={() => decrement(id)}> -</span>
                            <span className='btn btn-black mx-1' > {count}</span>
                            <span className='btn btn-black mx-1' onClick={() => increment(id)}> + </span>
                        </div>
                    </div>

                </div>
                <div class="col-10 mx-auto col-lg-2 ">
                    <div class="cart-icon" onClick={()=>removeItem(id)}>
                        <DeleteIcon />
                    </div>
                </div>

                <div class="col-10 mx-auto col-lg-2 ">
                    <strong>item total : $</strong>
                    {total}
                </div>
            </div>
        )
    }
}
