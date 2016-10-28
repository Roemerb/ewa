/**
 * Created by Rene on 27-10-2016.
 */
import React from 'react'

import ProgressBar from '../ProgressBar'

export default class ProgressStats extends  React.Component {
    render() {
        return (
            <div className="puntenOverzicht">
                <ProgressBar behaald={this.props.behaald} vereist={this.props.vereist} />

                <p>Studiepunten (eenh.): {this.props.vereist} vereist, {this.props.behaald} behaald, {this.props.vereist - this.props.behaald} nodig</p>
                <p>Studiedelen: 13 vereist, 6 behaald, 7 nodig</p>
                <button disabled>Propedeuse verzoek genereren</button>
            </div>

        );
    }
}