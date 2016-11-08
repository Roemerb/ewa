/**
 * Created by Rene on 27-10-2016.
 */
import React from "react";

export default class TableTr extends React.Component {

    render() {
        return <tr>
            <td>{this.props.blok}</td>
            <td>{this.props.vaknr}</td>
            <td>{this.props.onderdeel}</td>
            <td>{this.props.status}</td>
            <td>{this.props.herkansingsperiode}</td>
            <td>{this.props.gemiddelde}</td>
        </tr>;
    }

}