/**
 * Created by Rene on 27-10-2016.
 */
import React from "react";
import TableTr from "./TableTr";
export default class ProgressTable extends React.Component {

    render() {

        return (
            <table>
                <thead>
                <tr>
                    <th>Blok</th>
                    <th>Vaknr</th>
                    <th>Onderdelen</th>
                    <th>Status</th>
                    <th>Herkansingsperiode</th>
                    <th>Gemiddelde</th>
                </tr>
                </thead>
                <tbody>

                <TableTr blok={3} />
                <TableTr blok="3"/>
                <TableTr blok="3"/>
                <TableTr blok="3"/>
                </tbody>
            </table>
        );
    }

}