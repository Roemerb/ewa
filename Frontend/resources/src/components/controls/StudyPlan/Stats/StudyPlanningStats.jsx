/**
 * Created by Joshua on 27-12-2016.
 */
import React from "react";
import StudyPlanningTable from '../Table/StudyPlanningTable';

export default React.createClass ({

    getInitialState() {
        return {
            planningLoaded: false,
            study_plan: [],
        }
    },
    /**
     * Fetch data from the api with the url.
     */
    componentDidMount() {
                fetch('http://localhost:8080/user/1/planning').then((planningResponse) => {
                    console.log(planningResponse);
                    planningResponse.json().then((planningData) => {
                        this.setState({
                            study_plan: planningData,
                            planningLoaded: true,
                        });
                });
            });
    },


    render() {
        /**
         * Check if the data is loaded. Used for async.
         */
        if (this.state.planningLoaded == true) {
            return (
                <div>
                    <StudyPlanningTable planning={this.state.study_plan}/>
                </div>
            );
        }else {
            return (
                <h2>Fetching Study planning...</h2>
            );
        }
    }
})