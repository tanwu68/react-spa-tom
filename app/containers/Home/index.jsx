import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link, hashHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <h1><Link to="/Login">{this.props.userinfo.cityName}</Link></h1>
            </div>
        )
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
)(Home);
