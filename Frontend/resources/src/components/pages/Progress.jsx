import React, {Component, PropTypes} from 'react';
import ProgressYearTabs from '../controls/Progress/ProgressTabs/ProgressYearTabs';

export default React.createClass({

    getInitialState() {
        return {
            userLoaded: false
        }
    },

    componentDidMount() {
        fetch('http://localhost:8080/user/1').then((userResponse) => {
            userResponse.json().then((userData) => {
                this.user = userData;

                this.setState({
                    userLoaded: true
                });
            });
        });
    },

    render() {
        if (this.state.userLoaded) {
            return (
                <div>
                    <div className="push-30"></div>
                    <h1 className="title">Voorgang</h1>
                    <p>
                        Hi {this.user.fullName}.
                        Hieronder zie je een overzicht van alle vakken in je studie (<b>{this.user.group.study_program.name}</b>).
                    </p>
                    <ProgressYearTabs user={this.user}/>
                </div>
            );
        }
        else {
            return (
                <p>Informatie wordt opgehaald...</p>
            )
        }
    }
});