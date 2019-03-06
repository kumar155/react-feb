import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class QuestionsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Option1</th>
                            <th>Option2</th>
                            <th>Option3</th>
                            <th>Option4</th>
                            <th>Answer</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.questions.map((item, index) => TableRow(item, index))}
                    </tbody>
                </table>
            </div>
        )
    }
};

const mapStateToProps = (store) => ({
    questions: store.questions,
})

export default connect(mapStateToProps, null)(QuestionsList);

QuestionsList.propTypes = {
    questions: PropTypes.arrayOf(Object).isRequired,
}

export const TableRow = (item, index) => (
    <tr key={index}>
        <td>{item.Question}</td>
        <td>{item.Option1}</td>
        <td>{item.Option2}</td>
        <td>{item.Option3}</td>
        <td>{item.Option4}</td>
        <td>{item.Answer}</td>
        <td><input type="button" className="btn btn-danger" value="Delete" />
            <input type="button" className="btn btn-primary" value="Edit" style={{ marginLeft: 10 }} />
        </td>
    </tr>
);
