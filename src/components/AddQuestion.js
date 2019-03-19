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
        }
        console.log('component initialisation called...'); 
        
    }

    componentWillMount() {
        console.log('component will mount is triggered...'); 
    }

    componentDidMount() {
        console.log('component did mount is triggered...'); 
    }

    componentWillReceiveProps(){
        console.log('component will receive props is triggered...'); 
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('nextState' ,nextState);
        return true;
    }    

    componentWillUpdate() {
        console.log('component will update is triggered...'); 
    }

    componentDidUpdate() {
        console.log('component did update is triggered...');        
    }

    render() {
        console.log('render is triggered...'); 
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
                    <ComboBox items={this.props.options}
                        selectedValue={this.props.options[0].value}
                        onItemSelected={this.onItemSelected}></ComboBox>
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
        this.setState({ Answer: item });
    }
}

const mapDispatchToProps = (dispatch) => ({
    addQuestion: (item) => dispatch(actions.addQuestion(item)),
});

const mapStateToProps = (store) => ({
    options: store.comboBoxOptions,
});


export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);


AddQuestion.propTypes = {
    AddQuestion: PropTypes.func,
}