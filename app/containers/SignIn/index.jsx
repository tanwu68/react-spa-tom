import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Phone from './subpage/phone';
import PassWord from './subpage/password';
import { Link, hashHistory } from 'react-router';

import './style.less';

class SignIn extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div id="signin-container">
                <div className="loginbox">
                    <Phone />
                    <PassWord />
                    <Link className="logonbottom" onClick={this.clickHandle.bind(this)}>登 录</Link>
                </div>
            </div>
        )
    }

    componentDidMount(){
        //console.log(this.props.username);
        //console.log(this.props.password);
    }

    clickHandle(){

    }

}

module.exports = SignIn;