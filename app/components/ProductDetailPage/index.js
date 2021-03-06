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
        AppActions.getSingleItem(this.props.params.pdpID)
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
        window.location.replace('/')
    }

    render() {
        const item = this.state.item

        if (! Object.keys(item).length) {
            return null
        }

        return (
            <div>
                <Header title={item.seller}>
                    <div className={style.back_button} onClick={this.handleBackButton}>
                        <div className={style.arrow_btn}>&lt;</div>
                        <span>Home</span>
                    </div>
                </Header>
                <div className={style.container}>
                    <div className={style.details}>
                        <div className={style.image_container}>
                            <img src={item.image} />
                            <FavIcon id={item.id} className={style.fav_icon} />
                        </div>
                        <ProductDetails item={item} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductPage