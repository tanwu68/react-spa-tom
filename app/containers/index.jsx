import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import localStore from '../util/localStore';
import { CITYNAME } from '../config/localStoreKey';
import * as userInfoActionsFromOtherFile from '../actions/userinfo';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        };
    }

    render() {
        return (
            <div>
                {
                    this.state.initDone ? this.props.children : <div>正在加载中...</div>
                }
            </div>
        )
    }

    componentDidMount(){
        //获取位置信息
        let cityName = localStore.getItem(CITYNAME);
        if(cityName == null){
            cityName = '登录';
        }
        this.props.userinfoActions.update({
            cityName: cityName
        });
        this.setState({
            initDone: true
        });
    }
}

//-------------------redux react 绑定--------------------
function mapStateToProps(state){
    return {

    };
}

function mapDispatchToProps(dispatch){
    return {
        userinfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
