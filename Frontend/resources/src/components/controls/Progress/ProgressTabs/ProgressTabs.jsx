import React from 'react';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';

export default class ProgressTabs extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Tabs defaultActiveKey={1} id="progressYearTabs">
                <Tab eventKey={1} title="Tab 1">And this is the content</Tab>
            </Tabs>
        );
    }
}