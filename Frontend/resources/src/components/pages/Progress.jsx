import React, {Component, PropTypes} from 'react';
import ProgressTabs from '../controls/Progress/ProgressTabs/ProgressTabs';

export default class ProgressPage extends Component {

    host = "http://localhost:8080";

    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    render() {
        return (
            <div>
                <div className="push-30"></div>
                <h1 className="title">Progress</h1>
                <ProgressTabs/>
            </div>
        )
    }
}