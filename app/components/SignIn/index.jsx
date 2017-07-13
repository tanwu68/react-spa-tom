import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less';

class LoginComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div id="signin-container">
                <div className="loginbox">
                    <div className="inputtype lefts">
                        <input
                            className="phone"
                            type="tel"
                            placeholder="请输入手机号码"
                            maxLength="11"
                            onChange={this.changePhoneHandle.bind(this)}
                            value={this.state.username}
                        />
                    </div>
                    <div className="inputtype rights">
                        <input
                            className="password"
                            type="password"
                            placeholder="请输入密码"
                            onChange={this.changePassWordHandle.bind(this)}
                            value={this.state.password}
                        />
                        <span className="yanjing"></span>
                    </div>
                    <button className="logonbottom" onClick={this.clickHandle.bind(this)}>登 录</button>
                </div>
            </div>
        )
    }

    changePhoneHandle(e){
        this.setState({
            username: e.target.value
        });
    }
    changePassWordHandle(e){
        this.setState({
            password: e.target.value
        });
    }

    clickHandle(){
        const username = this.state.username;
        const password = this.state.password;
        const loginHandle = this.props.loginHandle;
        loginHandle(username,password);
    };

}

export default LoginComponent;