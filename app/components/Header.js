import React from 'react'

class Header extends React.Component {
    renderHomeButton() {
        return (
            <div className={this.props.className} onClick={this.props.onClick}>
                <div className={this.props.arrowButtonClass}>&lt;</div>
                <span>Home</span>
            </div>
        )
    }

    render() {
        const homeButton = this.props.type === 'pdp' 
            ? this.renderHomeButton()
            : null

        return (
            <header>
                {homeButton}
                {this.props.title}
            </header>
        )
    }
}

export default Header