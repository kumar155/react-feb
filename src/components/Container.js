import React from 'react';
import Footer from './Footer';
import Header from './Header';
import QuestionsList from './QuestionsList';
import AddQuestion from './AddQuestion';
import { testData } from '../data/inputData';


export default class Container extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <Header />
                <div className="row">
                    <div className="col-md-8"> <QuestionsList /></div>
                    <div className="col-md-4"> <AddQuestion /></div>
                </div>
                <Footer />
            </div>
        );
    }
}