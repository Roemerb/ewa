/**
 * Created by Joshua on 27-12-2016.
 */
import React from "react";
import StudyPlanningTable from '../Table/StudyPlanningTable';

export default React.createClass ({

    getInitialState() {
        return {
            planningLoaded: false
        }
    },

    componentDidMount() {
                fetch('http://localhost:8080/user/1/planning').then((planningResponse) => {
                    console.log(planningResponse);
                    planningResponse.json().then((planningData) => {
                        this.study_plan = planningData;
                        this.setState({
                            planningLoaded: true
                        });
                });
            });
    },


    render() {
        if (this.state.planningLoaded == true) {
            return (
                <div>
                    <StudyPlanningTable planning={this.study_plan}/>
                </div>
            );
        }else {
            return (
                <h2>Fetching Study planning...</h2>
            );
        }
    }
})