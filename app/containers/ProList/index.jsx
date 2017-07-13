import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { get } from '../../fetch/get';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Product from './Item/product';

class ProList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div id="container">
                <div className="tabC">
                    <div className="tabTitle setOn" id="dcTab">定期理财<em id="regularCount"></em></div>
                    <div className="tabTitle" id="zqTab">债权转让<em id="creditorCount"></em></div>
                </div>
                <div className="warpbox touziliebiao">
                    <div className="pdbox" data-view="proList">
                        <Product data={this.state.data}/>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        var param_data = {
            pageNum: 1,
            pageSize: 8,
            type: "wap"
        };
        get('/api/product/wap/list',param_data).then(ret => {
            this.setState({
                data: ret.data.pageData
            });
        });
    }

}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProList);