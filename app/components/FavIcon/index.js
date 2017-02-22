import React from 'react'
import style from './style.css'
import classnames from 'classnames'

class FavIcon extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            active: this.checkFavoriteStatus()
        }

        this.handleClick = this.handleClick.bind(this)
    }

    checkFavoriteStatus() {
        return this.getFavorites()
            .some((fav) => 
                fav === this.props.id
            )
    }

    getFavorites() {
        return JSON.parse(localStorage.getItem('favorite_items')) || []
    }

    handleFavorites() {
        const favorites = this.getFavorites()
        const index = favorites.indexOf(this.props.id)

        if (index === -1) {
            favorites.push(this.props.id)
        } else {
            favorites.splice(index, 1)
        }

        localStorage.setItem('favorite_items', JSON.stringify(favorites))
    }

    handleClick() {
        this.handleFavorites()
        this.setState({
            active: ! this.state.active
        })
    }

    render() {
        const activeKlass = this.state.active ? style.fav_icon_active : null
        const classes = classnames( ['fa fa-heart-o fa-lg',
                                style.fav_icon,
                                activeKlass,
                                this.props.className] )
        return (
            <i 
                ref="favIcon"
                className={classes}
                onClick={this.handleClick}>
            </i>
        )
    }
}

FavIcon.propTypes = {
    id: React.PropTypes.string.isRequired,
    className: React.PropTypes.string
}

export default FavIcon