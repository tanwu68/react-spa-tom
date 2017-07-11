import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

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
                    <div className="inputtype lefts">
                        <input className="phone" type="tel" placeholder="请输入手机号码" maxLength="11" />
                    </div>
                    <div className="inputtype rights">
                        <input className="password" type="password" placeholder="请输入密码" />
                        <span className="yanjing"></span>
                    </div>
                    <a className="logonbottom" >登 录</a>
                </div>
            </div>
        )
    }

}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default Detail
module.exports = SignIn;