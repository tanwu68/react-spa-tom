import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, hashHistory } from 'react-router';
import * as userInfoActionsFromOtherFile from '../../actions/userinfo';

import LoginComponent from '../../components/SignIn';
import { post } from '../../fetch/post';

class SignIn extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            checking: true
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.checking
                        ? <LoginComponent loginHandle={this.loginHandle.bind(this)} />
                        : <div></div>
                }
            </div>
        )
    }

    componentDidMount(){
        this.doCheck();
    }

    doCheck(){
        const userinfo = this.props.userinfo;
        if(userinfo.username){
            //首页

        }else{
            this.setState={
                checking: false
            }
        }
    }

    loginHandle(username){
        post('/api/signin',{account: username, password: "090c806df9e197602716130172937530"}).then(ret => {
            console.log(ret);

            const actions = this.props.userInfoActions;
            let userinfo = this.props.userinfo;
            userinfo.username = username;
            actions.update(userinfo);

            const params = this.props.params;
            const router = params.router;
            if(router){
                hashHistory.push(router);
            }else{
                this.goProList();
            }
        });
    }

    goProList(){
        hashHistory.push('/ProList');
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
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);