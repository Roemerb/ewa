/**
 * Created by Rene on 27-10-2016.
 */
import React from "react";

export default class TableTr extends React.Component {

    render() {
        return (
                <tr>
                    <td>{this.props.blok}</td>
                    <td>PS001</td>
                    <td>Theorie</td>
                    <td>Behaald</td>
                    <td>Blok 3(aanvragen)</td>
                    <td>7</td>
                </tr>
        );
    }

}