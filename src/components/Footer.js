import React from 'react';


export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="page-footer font-small blue" style={{ backgroundColor: "skyblue" }}>

                <div className="footer-copyright text-center py-3">© 2018 Copyright:
    <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
                </div>

            </footer>
        );
    };
}