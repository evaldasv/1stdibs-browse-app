import React from 'react'

const Header = React.createClass({
    renderHomeButton() {
        return (
            <div className={this.props.className} onClick={this.props.onClick}>
            <div className={this.props.arrowButtonClass}>&lt;</div>
            <span>Home</span>
            </div>
        )
    },
    render() {
        let homeButton = this.props.type === 'pdp' 
            ? this.renderHomeButton()
            : null;

        return (
            <header>
                {homeButton}
                {this.props.title}
            </header>
        )
    }
})

export default Header