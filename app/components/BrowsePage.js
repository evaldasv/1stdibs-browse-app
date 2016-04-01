import React from 'react'
import AppStore from '../stores/AppStore'
import AppActions from '../actions/AppActions'
import classnames from 'classnames'
import Item from '../components/Item'
import Header from '../components/Header'

import browseStyles from '../styles/browse.css'
import baseStyles from '../styles/base.css'

const PRODUCT_THRESHOLD = 5;

const BrowsePage = React.createClass({

    getInitialState() {
        return this.getStateFromStores();
    },

    getStateFromStores() {
        return {
            items: AppStore.getItems(),
            threshold: PRODUCT_THRESHOLD
        }
    },

    componentWillMount() {
        AppActions.getItems();
    },

    componentDidMount() {
        AppStore.addChangeListener(this.change);
    },

    componentWillUnmount() {
        AppStore.removeChangeListener(this.change);
    },

    change() {
        this.setState(this.getStateFromStores());
    },

    handleLoadMore() {
        let threshold = this.state.threshold + PRODUCT_THRESHOLD;
        let total = this.getTotalItems();
        let itemsToLoad = (threshold > total)
            ? total
            : threshold
        ;
        
        this.setState({threshold: itemsToLoad });
    },

    getTotalItems() {
        return this.state.items.length;
    },

    renderSingleItem(item, index) {
        while(index < this.state.threshold) {
            return (
                <Item
                    key={item.integerId}
                    id={item.integerId}
                    data={item}
                />
            );
        }
    },

    renderItems() {
        let singleItems = [];
        let items = this.state.items;

        if (items && this.getTotalItems()) {
            singleItems = items.map(this.renderSingleItem);
        }
        return singleItems;
    },

    render() {
        let disableButton = this.state.threshold === this.getTotalItems();
        let klass = disableButton ? browseStyles.disabled : null; 
        return (
            <div>
                <Header title="Browse page" />
                <div className={browseStyles.wrapper}>
                    {this.renderItems()}
                </div>
                <div className={browseStyles.button_container}>
                    <button className={klass} onClick={this.handleLoadMore}>Load More</button>
                </div>
            </div>
        );
    }

});

export default BrowsePage