import React from 'react'
import ReactDOM from 'react-dom'
import AppStore from '../stores/AppStore'
import AppActions from '../actions/AppActions'
import AppConstants from '../constants'
import classnames from 'classnames'
import Header from './Header'
import FavIcon from './FavIcon'

import pdpStyles from '../styles/pdp.css'
import baseStyles from '../styles/base.css'

function getProductId() {
    return window.location.pathname.split('/').pop()
}

const ProductInfoBlock = React.createClass({

    getItemPrice() {
        let price = this.props.item &&
                    this.props.item.price &&
                    this.props.item.price.amounts.USD ||
                    'Price Upon Request'
        ;
        return price
    },

    render() {
        let item = this.props.item;
        return (
            <div className={pdpStyles.product_info}>
                <div className={pdpStyles.details_block_top}>
                    <div className={pdpStyles.details_block_info}>
                        <div className={classnames([pdpStyles.title, pdpStyles.bold_label])}>
                            {item.title}
                        </div>
                        <div className={pdpStyles.price}>
                            {this.getItemPrice()}
                        </div>
                        <ProductMeasurements item={item} />
                    </div>
                    <CTAButtons />
                </div>
                <div className={pdpStyles.details_block}>
                    <p>{item.description}</p>
                    <div className={pdpStyles.creator_container}>
                        <div className={pdpStyles.bold_label}>Creator: &nbsp;</div>
                        <div>{item.creators || 'N/A'}</div>
                    </div>
                </div>
            </div>
        )
    }
})

const CTAButtons = React.createClass({
    render() {
        return (
            <div className={pdpStyles.button_container}>
                <div className={classnames([pdpStyles.cta_btn, pdpStyles.cta_btn_purchase])}>
                    Purchase
                </div>
                <div className={pdpStyles.cta_btn}>
                    Make Offer
                </div>
            </div>
        )
    }
})

const ProductMeasurements = React.createClass({
    render() {
        let item = this.props.item;
        let measurements = item.measurements && item.measurements.display;
        return (
            <p className={pdpStyles.product_measurements}>
                <span className={pdpStyles.bold_label}>Measurements:</span>
                <br />
                {measurements}
            </p>
        )
    }
})

const ProductDetailPage = React.createClass({

    getInitialState() {
        return this.getStateFromStores()
    },

    getStateFromStores() {
        return {
            item: AppStore.getItems()
        }
    },

    componentWillMount() {
        AppActions.getSingleItem( getProductId() )
    },

    componentDidMount() {
        AppStore.addChangeListener(this.change)
    },

    componentWillUnmount() {
        AppStore.removeChangeListener(this.change)
    },

    change() {
        this.setState(this.getStateFromStores())
    },

    handleBackButton() {
        window.history.go(-1)
    },

    render() {
        let item = this.state.item;
        let headerTitle = item.seller && item.seller.company;
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
                        <FavIcon item={item.id} className={pdpStyles.fav_icon} />
                    </div>
                    <ProductInfoBlock item={item} />
                </div>

            </div>
        )
    }
})

export default ProductDetailPage