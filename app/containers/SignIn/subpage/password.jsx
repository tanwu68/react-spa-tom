import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class PassWord extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            password: ''
        }
    }

    render() {
        return (
            <div className="inputtype rights">
                <input
                    className="password"
                    type="password"
                    placeholder="请输入密码"
                    onChange={this.changeHandle.bind(this)}
                    value={this.props.password}
                />
                <span className="yanjing"></span>
            </div>
        )
    }

    changeHandle(e) {
        this.setState({
            password: e.target.value
        })
    }

}

export default PassWord;
