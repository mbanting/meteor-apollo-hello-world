import React, { Component, PropTypes } from 'react';

export class MessageForm extends Component {
    constructor(props) {
        super(props);

        // bind event handlers to this
        this.submitMessage = this.submitMessage.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);

        // initialize component refs
        this.messageInput = null;

        // initialize the state
        this.state = {
            message: null
        };
    }

    render() {
        return (
            <div className="row">
                <form className="input-field col s12" onSubmit={this.submitMessage}>
                    <div className="input-field col s6">
                        <input ref={(c) => this.messageInput = c} placeholder="Message" id="message" type="text" className="validate" onChange={this.handleMessageChange} required />
                        <label htmlFor="message">Enter your message</label>
                    </div>
                </form>
            </div>
        )
    }

    handleMessageChange(e) {
        this.setState({message: e.target.value});
    }

    submitMessage(event) {
        event.preventDefault();
        this.props.submit(this.state.message);
        this.messageInput.value = "";
    }

}

MessageForm.propTypes = {
    submit: PropTypes.func.isRequired,
};
