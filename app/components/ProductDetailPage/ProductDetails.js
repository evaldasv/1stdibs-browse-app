import React from 'react'
import classnames from 'classnames'
import pdpStyles from '../../styles/pdp.css'

class CTAButtons extends React.Component {
    render() {
        return (
            <div className={pdpStyles.button_container}>
                <div className={classnames([pdpStyles.cta_btn, pdpStyles.cta_btn_purchase])}>
                    Purchase
                </div>
                <div className={pdpStyles.cta_btn}>
                    Make Offer
                </div>
            </div>
        )
    }
}

class ProductMeasurements extends React.Component {
    render() {
        const item = this.props.item;
        const measurements = item.measurements && item.measurements.display;
        return (
            <p className={pdpStyles.product_measurements}>
                <span className={pdpStyles.bold_label}>Measurements:</span>
                <br />
                {measurements}
            </p>
        )
    }
}

class ProductDetails extends React.Component {

    getItemPrice() {
        const item = this.props.item
        return item &&
            item.price &&
            item.price.amounts.USD ||
            'Price Upon Request'
    }

    render() {
        const item = this.props.item;
        return (
            <div className={pdpStyles.product_info}>
                <div className={pdpStyles.details_block_top}>
                    <div className={pdpStyles.details_block_info}>
                        <div className={classnames([pdpStyles.title, pdpStyles.bold_label])}>
                            {item.title}
                        </div>
                        <div className={pdpStyles.price}>
                            {this.getItemPrice()}
                        </div>
                        <ProductMeasurements item={item} />
                    </div>
                    <CTAButtons />
                </div>
                <div className={pdpStyles.details_block}>
                    <p>{item.description}</p>
                    <div className={pdpStyles.creator_container}>
                        <div className={pdpStyles.bold_label}>Creator: &nbsp;</div>
                        <div>{item.creators || 'N/A'}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetails