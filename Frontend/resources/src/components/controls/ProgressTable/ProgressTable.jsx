GITLABEWA2016 / Student Dashboard - Team 5

Search in this project
User activity
You won't be able to pull or push project code via SSH until you add an SSH key to your profile Don't show again | Remind later
Files
Commits
Network
Graphs
Issues 0
Merge Requests 0
Wiki
Wall
Snippets
e720e9c3971dd3f345e8ddbe2fdec9c55f79e595


student-dashboard-team-5  ..  ProgressTable  ProgressTable.jsx
e720e9c39   Responsive + 404 working Browse Code »
Onkarjit Singh 43 minutes ago
ProgressTable.jsx 1.48 KB editrawblamehistory
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
/**
 * Created by Rene on 27-10-2016.
 */
import React from "react";
import TableTr from "./TableTr";
import ProgressBar from "../ProgressBar";
export default class ProgressTable extends React.Component {

    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-xs-6">

                        <h2>Periode</h2>
                    </div>
                    <div className="col-xs-6 rem-padding-right">
                        <div className="pull-right blok-progressbar">
                            <ProgressBar behaald="5" vereist="15"/>
                            19 behaald, nog 3 nodig voor dit blok<br/>
                            Gemiddelde: 17 punten
                        </div>
                    </div>
                    <div className="col-xs-12">
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



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

}
