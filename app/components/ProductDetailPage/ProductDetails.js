import React from 'react'
import classnames from 'classnames'
import style from './style.css'

class CTAButtons extends React.Component {
    render() {
        return (
            <div className={style.button_container}>
                <div className={classnames([style.cta_btn, style.cta_btn_purchase])}>
                    Purchase
                </div>
                <div className={style.cta_btn}>
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
            <p className={style.product_measurements}>
                <span className={style.bold_label}>Measurements:</span>
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
            <div className={style.details_container}>
                <div className={style.details_block_top}>
                    <div className={style.details_block_info}>
                        <div className={classnames([style.title, style.bold_label])}>
                            {item.title}
                        </div>
                        <div className={style.price}>
                            {this.getItemPrice()}
                        </div>
                        <ProductMeasurements item={item} />
                    </div>
                    <CTAButtons />
                </div>
                <div className={style.details_block}>
                    <p>{item.description}</p>
                    <div className={style.creator_container}>
                        <div className={style.bold_label}>Creator: &nbsp;</div>
                        <div>{item.creators || 'N/A'}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetails