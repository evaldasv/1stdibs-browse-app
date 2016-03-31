import React from 'react'
import favStyle from '../styles/favicon'
import classnames from 'classnames'

const FavIcon = React.createClass({
    getInitialState() {
        return {
            active: false
        }
    },

    handleClick() {
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