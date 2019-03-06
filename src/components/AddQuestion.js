import React from 'react';
import InputField from '../common/InputField';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

export class AddQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Question: '',
            Option1: '',
            Option2: '',
            Option3: '',
            Option4: '',
            Answer: '',
        }
    }

    render() {
        return (
            <div className="form" style={{ border: '1px solid gray', padding: 10 }}>
                <div className="form-group">
                    <label>Question</label>
                    <InputField onInputChange={(value) => this.setState({ Question: value })} placeHolder='Enter Question' />
                </div>
                <div className="form-group">
                    <label>Option1</label>
                    <InputField onInputChange={(value) => this.setState({ Option1: value })} placeHolder='Enter Option1' />
                </div>
                <div className="form-group">
                    <label>Option2</label>
                    <InputField onInputChange={(value) => this.setState({ Option2: value })} placeHolder='Enter Option2' />
                </div>
                <div className="form-group">
                    <label>Option3</label>
                    <InputField onInputChange={(value) => this.setState({ Option3: value })} placeHolder='Enter Option3' />
                </div>
                <div className="form-group">
                    <label  >Option4</label>
                    <InputField onInputChange={(value) => this.setState({ Option4: value })} placeHolder='Enter Option4' />
                </div>
                <div className="form-group">
                    <label  >Answer</label>
                    <InputField onInputChange={(value) => this.setState({ Answer: value })} placeHolder='Enter Answer' />
                </div>
                <button type="submit" className="btn btn-primary"
                    onClick={() => this.submitChanges()}>Submit</button>
            </div>
        );
    }

    submitChanges = () => {
        this.props.addQuestion(this.state);
    }
}

const mapDispatchToProps = (dispatch) => ({
    addQuestion: (item) => dispatch(actions.addQuestion(item)),
})


export default connect(null, mapDispatchToProps)(AddQuestion);


AddQuestion.propTypes = {
    AddQuestion: PropTypes.func,
}