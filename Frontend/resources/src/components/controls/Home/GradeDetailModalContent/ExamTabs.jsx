import React from 'react';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';

export default class ExamTabs extends React.Component {

    constructor(props)
    {
        super(props);
        console.log('Exams received: ', this.props);
    }

    render() {
        return (
            <Tabs defaultActiveKey={1} id="exam-tabs">
                {
                    this.props.exams.map((exam) => {
                        console.log(exam);
                        var type = '';
                        switch(exam.type)
                        {
                            case 'regular':
                            case 'REGULAR':
                                type = 'Tentamen';
                                break;
                            case 'REEXAM':
                            case 'RE-EXAM':
                                type = 'Hertentamen';
                                break;
                        }

                        return (
                            <Tab eventKey={exam.id} title={type}>

                            </Tab>
                        )
                    })
                }
            </Tabs>
        );
    }
}