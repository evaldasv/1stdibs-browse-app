import React from 'react'
import favStyle from '../styles/favicon'
import classnames from 'classnames'

const FavIcon = React.createClass({

    propTypes: {
        item: React.PropTypes.string.isRequired
    },

    getInitialState() {
        return {
            active: false
        }
    },

    componentDidMount() {
        this.setState({active: this.checkCurrentStatus()});
    },

    checkCurrentStatus() {
        let favorites = this.getFavorites();
        let self = this;
        let status = favorites.some(function(favorite) {
            return favorite === self.props.item;
        });
        return status;
    },

    getFavorites() {
        return JSON.parse(localStorage.getItem('favorite_items')) || [];
    },

    handleFavorites() {
        let favorites = this.getFavorites();
        let index = favorites.indexOf(this.props.item);
        if ( index === -1 ) {
            favorites.push(this.props.item);
        } else {
            favorites.splice(index, 1);
        }
        localStorage.setItem('favorite_items', JSON.stringify(favorites));
    },

    handleClick() {
        this.handleFavorites();
        this.setState({
            active: !this.state.active
        })
    },

    render() {
        const activeKlass = this.state.active ? favStyle.fav_icon_active : null;
        const klass = classnames(['fa fa-heart-o fa-lg', favStyle.fav_icon, activeKlass, this.props.className]);
        return (
            <i 
                ref="favIcon"
                className={klass}
                onClick={this.handleClick}>
            </i>
        );
    }
});

export default FavIcon