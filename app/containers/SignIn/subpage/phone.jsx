import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Phone extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            username: ''
        }
    }

    render() {
        return (
            <div className="inputtype lefts">
                <input
                    className="phone"
                    type="tel"
                    placeholder="请输入手机号码"
                    maxLength="11"
                    onChange={this.changeHandle.bind(this)}
                    value={this.state.username}
                />
            </div>
        )
    }

    changeHandle(e){
        this.setState({
            username: e.target.value
        });

        console.log(this.state.username);
    }

}

export default Phone;
