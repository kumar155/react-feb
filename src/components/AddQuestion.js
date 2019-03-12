import React from 'react';
import InputField from '../common/InputField';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import ComboBox from '../common/ComboBox';

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
            items: [{ value: 'Option1', text: 'Option1' },
            { value: 'Option2', text: 'Option2' },
            { value: 'Option3', text: 'Option3' },
            { value: 'Option4', text: 'Option4' }],
        }
    }

    render() {
        return (
            <div className="form" style={{ border: '1px solid gray', padding: 10 }}>
                <div className="form-group">
                    <label>Question</label>
                    <InputField
                        onInputChange={(value) => this.setState({ Question: value })}
                        placeHolder='Enter Question'
                        value={this.state.Question} />
                </div>
                <div className="form-group">
                    <label>Option1</label>
                    <InputField
                        onInputChange={(value) => this.setState({ Option1: value })}
                        placeHolder='Enter Option1'
                        value={this.state.Option1} />
                </div>
                <div className="form-group">
                    <label>Option2</label>
                    <InputField
                        onInputChange={(value) => this.setState({ Option2: value })}
                        placeHolder='Enter Option2'
                        value={this.state.Option2} />
                </div>
                <div className="form-group">
                    <label>Option3</label>
                    <InputField
                        onInputChange={(value) => this.setState({ Option3: value })}
                        placeHolder='Enter Option3'
                        value={this.state.Option3} />
                </div>
                <div className="form-group">
                    <label  >Option4</label>
                    <InputField
                        onInputChange={(value) => this.setState({ Option4: value })}
                        placeHolder='Enter Option4'
                        value={this.state.Option4} />
                </div>
                <div className="form-group">
                    <label>Answer</label>
                    <ComboBox items={this.state.items}
                        selectedValue={this.state.items[0].value}
                        onItemSelected={this.onItemSelected} ></ComboBox>
                </div>
                <button type="submit" className="btn btn-primary"
                    onClick={() => this.submitChanges()}>Submit</button>
            </div>
        );
    }

    submitChanges = () => {
        this.props.addQuestion(this.state);
        this.clearInputFields();
    }

    clearInputFields = () => {
        return this.setState({ Question: '', Option1: '', Option2: '', Option3: '', Option4: '', Answer: '' })
    }

    onItemSelected = (item) => {
        console.log('selected item is:', item);
    }
}

const mapDispatchToProps = (dispatch) => ({
    addQuestion: (item) => dispatch(actions.addQuestion(item)),
})


export default connect(null, mapDispatchToProps)(AddQuestion);


AddQuestion.propTypes = {
    AddQuestion: PropTypes.func,
}