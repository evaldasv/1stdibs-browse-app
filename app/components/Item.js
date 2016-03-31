import React from 'react'
import BrowseStyles from '../styles/browse.css'
import FavIcon from '../components/FavIcon'

const Item = React.createClass({

    propTypes: {
        id: React.PropTypes.string.isRequired,
        data: React.PropTypes.object.isRequired,
    },

    render() {
        let price = this.props.data &&
                    this.props.data.price &&
                    this.props.data.price.amounts.USD ||
                    'Price Upon Request'
        ;
        return (
            <div className={BrowseStyles.item}>
                <a href={'/pdp/' + this.props.id}>
                    <img src={this.props.data.image} />
                </a>
                <div className={BrowseStyles.item_price_label}>
                    {price}
                    <FavIcon item={this.props.data.id}/>
                </div>
            </div>
        )
    }
})

export default Item