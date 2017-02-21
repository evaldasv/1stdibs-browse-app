import React from 'react'
import AppStore from '../../stores/AppStore'
import AppActions from '../../actions/AppActions'
import AppConstants from '../../constants'
import classnames from 'classnames'
import Header from '../Header'
import FavIcon from '../FavIcon'
import ProductDetails from './ProductDetails'

import pdpStyles from '../../styles/pdp.css'
import baseStyles from '../../styles/base.css'

function getProductId() {
    return window.location.pathname.split('/').pop()
}

const getStateFromStores = () => {
    return {
        item: AppStore.getSingleItem()
    }
}

class ProductPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = getStateFromStores()
        this.change = this.change.bind(this)
    }

    componentDidMount() {
        AppActions.getSingleItem(getProductId())
        AppStore.addChangeListener(this.change)
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this.change)
    }

    change() {
        this.setState(getStateFromStores())
    }

    handleBackButton(e) {
        e.preventDefault()
        window.history.go(-1)
    }

    render() {
        const item = this.state.item
        
        if (! Object.keys(item).length) {
            return null
        }

        const headerTitle = item.seller && item.seller.company

        return (
            <div>
                <Header 
                    title={headerTitle}
                    type="pdp"
                    onClick={this.handleBackButton}
                    className={pdpStyles.back_button}
                    arrowButtonClass={pdpStyles.arrow_btn} 
                />

                <div className={pdpStyles.wrapper}>
                    <div className={pdpStyles.image_container}>
                        <img src={item.image} />
                        <FavIcon id={item.id} className={pdpStyles.fav_icon} />
                    </div>
                    <ProductDetails item={item} />
                </div>

            </div>
        )
    }
}

export default ProductPage