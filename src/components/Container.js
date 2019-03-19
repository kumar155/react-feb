import React from 'react';
import Footer from './Footer';
import Header from './Header';
import QuestionsList from './QuestionsList';
import AddQuestion from './AddQuestion';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import spinner from '../spinner.gif';


export class Container extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <Header />
                <div className="row">
                    <div className="col-md-8"> <QuestionsList />
                        <input type="button" value="GET_USERS"
                            className="btn btn-success"
                            onClick={() => this.getUsers()}></input>
                        {this.props.isDataLoading ? <img src={spinner} /> :
                            this.props.users.map(i => <h3>{i.first_name}</h3>)}
                    </div>
                    <div className="col-md-4"> <AddQuestion /></div>
                </div>
                <Footer />
            </div>
        );
    }

    getUsers = () => {
        this.props.getUsers();
    }
}

const mapStateToProps = (store) => ({
    isDataLoading: store.isDataLoading,
    users: store.userReducer,
});

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => dispatch(actions.getUsersData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);

Container.propTypes = {
    getUsers: PropTypes.func.isRequired,
}