/**
 * Created by Joshua on 27-12-2016.
 */
import React from "react";
import StudyPlanningTable from '../Table/StudyPlanningTable';

export default React.createClass ({

    getInitialState() {
        return {
            gradesLoaded: false
        }
    },

    componentDidMount() {
                fetch('http://localhost:8080/user/1/grades').then((gradeResponse) => {
                    console.log(gradeResponse);
                    gradeResponse.json().then((gradeData) => {
                        this.grades = gradeData;
                        this.setState({
                            gradesLoaded: true,
                            grades: gradeData
                        });
                });
            });
    },


    render() {
        if (this.state.gradesLoaded == true) {
            return (
                <div>
                    <StudyPlanningTable grades={this.state.grades}/>
                </div>
            );
        }else {
            return (
                <h2>Laden...</h2>
            );
        }
    }
})