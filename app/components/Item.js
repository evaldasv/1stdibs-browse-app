import React from 'react'
import BrowseStyles from './browse.css'
import FavIcon from './FavIcon'

class Item extends React.Component {

    render() {
        const item = this.props.item
        return (
            <div className={BrowseStyles.item}>
                <a href={'/pdp/' + item.id}>
                    <img src={item.image} />
                </a>
                <div className={BrowseStyles.item_price_label}>
                    {item.price}
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