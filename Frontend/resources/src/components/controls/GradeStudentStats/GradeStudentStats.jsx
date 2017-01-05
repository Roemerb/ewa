/**
 * Created by Joshua on 20-12-2016.
 */
import React from "react";

export default class GradeStudentStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: 'joshua'} ;
    }

    render() {
        return (
        //get all students from the selected Study and Class
            <tr>
                <td><select> <option value="SE">Software Engineer</option></select></td>
                <td><select> <option value="Class">IS205</option></select></td>
                <td><select> <option value="Student #">500728417</option></select></td>
                <td><select> <option value="Student">Joshua Turpijn</option></select></td>
                <td><input type="text" name="Grade"></input></td>
                <td><select> <option value="Passed">✓</option></select></td>
            </tr>
        );
    }
}