import React from 'react'
import AppStore from '../../stores/AppStore'
import AppActions from '../../actions/AppActions'
import AppConstants from '../../constants'
import classnames from 'classnames'
import Header from '../Header'
import FavIcon from '../FavIcon'
import ProductDetails from './ProductDetails'

import style from './style.css'
import baseStyle from '../base.css'

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
        const headerTitle = item.seller && item.seller.company

        return (
            <div>
                <Header 
                    title={headerTitle}
                    type="pdp"
                    onClick={this.handleBackButton}
                    className={style.back_button}
                    arrowButtonClass={style.arrow_btn} 
                />

                <div className={style.wrapper}>
                    <div className={style.image_container}>
                        <img src={item.image} />
                        <FavIcon id={item.id} className={style.fav_icon} />
                    </div>
                    <ProductDetails item={item} />
                </div>

            </div>
        )
    }
}

export default ProductPage