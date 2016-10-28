/**
 * Created by Rene on 27-10-2016.
 */
import React from 'react';

export default class ProgressBar extends React.Component {

    render() {
        const percentageBehaald = (this.props.behaald / this.props.vereist) * 100;

        const progressStyle = {
            width: percentageBehaald + '%'
        };
        return (
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={percentageBehaald} aria-valuemin="0" aria-valuemax="100" style={progressStyle}>
                    <span >{this.props.behaald} punten gehaald</span>
                </div>
            </div>
        );
    }

}