import React from 'react'
import BrowseStyles from '../styles/browse.css'
import FavIcon from '../components/FavIcon'

class Item extends React.Component {

    render() {
        const item = this.props.item
        const price = item &&
            item.price &&
            item.price.amounts.USD ||
            'Price Upon Request'

        return (
            <div className={BrowseStyles.item}>
                <a href={'/pdp/' + item.id}>
                    <img src={item.image} />
                </a>
                <div className={BrowseStyles.item_price_label}>
                    {price}
                    <FavIcon id={item.id}/>
                </div>
            </div>
        )
    }
}

Item.propTypes = {
    item: React.PropTypes.object.isRequired
}

export default Item