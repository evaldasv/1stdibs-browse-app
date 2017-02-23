import React from 'react'
import style from './style.css'
import classnames from 'classnames'

import FavoriteService from '../../services/favoriteService'

class FavIcon extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            active: FavoriteService.getStatus(props.id)
        }
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick() {
        FavoriteService.handle(this.props.id)
        this.setState({
            active: ! this.state.active
        })
    }

    render() {
        const activeKlass = this.state.active
            ? style.fav_icon_active
            : null
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