import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link, hashHistory } from 'react-router';

class Product extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                {
                    this.props.data.map((item, index) => {
                        return <Link to={'/detail/'+item.id}  key={index}>{item.title}<br/></Link>
                    })
                }
            </div>
        )
    }

}

export default Product;