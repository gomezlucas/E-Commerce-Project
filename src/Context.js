import React, { Component } from 'react'
import Product from './components/Product';
import { storeProducts, detailProduct } from './data'


const ProductContext = React.createContext()


class ProductProvider extends Component {
    state = {
        products: [],
        details: '',
        cart: [],
        modalIsOpen: false,
        modalProduct: detailProduct,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0,
    }

    componentDidMount = () => {
        this.setProducts()
    }


    setProducts = () => {
        let tempArray = []
        storeProducts.forEach(item => {
            const singleItem = { ...item }
            tempArray = [...tempArray, singleItem]
        })
        this.setState(() => {
            return { products: tempArray }
        })
    }

    handleDetail = (id) => {
        let product = this.getProduct(id)
        this.setState(() => {
            return { details: product }
        })
    }

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const product = tempProducts.find(item => item.id === id)
        console.log(product, 'indexxxxxx')

        product.inCart = true
        product.count = 1
        const price = product.price
        product.total = price

        this.setState(() => {
            return ({ products: tempProducts, cart: [...this.state.cart, product] })
        }, () => this.addTotals())


    }

    getProduct = (id) => {
        let product = this.state.products.find(item => item.id === id)
        return product
    }


    openModal = (id) => {
        const product = this.getProduct(id)
        this.setState(() => {
            return { modalProduct: product, modalIsOpen: true }
        })
    }

    closeModal = () => {
        this.setState(() => {
            return { modalIsOpen: false }
        })
    }

    increment = (id) => {
        let tempCart = [...this.state.cart]

        let product = tempCart.find(item => item.id === id)

        product.count++
        product.total = product.count * product.price
        console.log(tempCart)

        this.setState({
            cart: [...tempCart]
        }, () => this.addTotals())

    }

    decrement = (id) => {
        let tempCart = [...this.state.cart]

        let product = tempCart.find(item => id === item.id)
        product.count--
        product.total = product.count * product.price

        if (product.count === 0) {
            this.removeItem(id)
        } else {
            this.setState({
                cart: tempCart
            }, () => this.addTotals())

        }


    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products]
        let tempCart = [...this.state.cart]


        tempCart = tempCart.filter(item => item.id !== id)

        let product = tempProducts.find(item => item.id === id)
        console.log(product)
        product.inCart = false
        product.count = 0
        product.total = 0



        this.setState({
            cart: [...tempCart],
            products: [...tempProducts]
        }, () => this.addTotals())
    }


    addTotals = () => {
        let subTotal = 0
        this.state.cart.map(item => subTotal += item.total)
        const tempTax = subTotal * 0.1
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax

        this.setState(() => {
            return ({
                cartSubtotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }

            )
        })
    }

    clearCart = () => {
        this.setState(() => {
            return ({ cart: [] })
        }, () => {
            this.setProducts()
            this.addTotals()
        })
    }

    render() {
        return (
            <ProductContext.Provider
                value={
                    {
                        ...this.state,
                        handleDetail: this.handleDetail,
                        addToCart: this.addToCart,
                        openModal: this.openModal,
                        closeModal: this.closeModal,
                        increment: this.increment,
                        decrement: this.decrement,
                        removeItem: this.removeItem,
                        clearCart: this.clearCart
                    }
                }
            >
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer


export { ProductProvider, ProductConsumer }

