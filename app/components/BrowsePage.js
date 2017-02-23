import React from 'react'
import AppStore from '../stores/AppStore'
import AppActions from '../actions/AppActions'
import classnames from 'classnames'
import Item from '../components/Item'
import Header from '../components/Header'

import browseStyle from './browse.css'
import baseStyle from './base.css'

const PRODUCT_THRESHOLD = 6

const getStateFromStores = () => {
    return {
        items: AppStore.getItems(),
        threshold: PRODUCT_THRESHOLD
    }
}

class BrowsePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = getStateFromStores()
        this.change = this.change.bind(this)
        this.handleLoadMore = this.handleLoadMore.bind(this)
    }

    componentDidMount() {
        AppActions.getItems()
        AppStore.addChangeListener(this.change)
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this.change)
    }

    change() {
        this.setState(getStateFromStores())
    }

    handleLoadMore() {
        const threshold = this.state.threshold + PRODUCT_THRESHOLD
        const total = this.getItemCount()
        const itemsToLoad = (threshold > total)
            ? total
            : threshold
        
        this.setState({threshold: itemsToLoad })
    }

    getItemCount() {
        return this.state.items.length
    }

    renderSingleItem(item, index) {
        if (index < this.state.threshold) {
            return (
                <Item
                    key={item.integerId}
                    item={item}
                />
            )
        }
        return null
    }

    render() {
        const buttonClass = this.state.threshold === this.getItemCount() 
            ? browseStyle.disabled
            : null

        return (
            <div>
                <Header title="Browse page" />
                <div className={browseStyle.container}>
                    {this.state.items.map(this.renderSingleItem, this)}
                </div>
                <div className={browseStyle.button_container}>
                    <button className={buttonClass} onClick={this.handleLoadMore}>Load More</button>
                </div>
            </div>
        )
    }

}

export default BrowsePage