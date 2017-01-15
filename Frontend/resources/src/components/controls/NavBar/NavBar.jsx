/**
 * Created by Onkarjit Singh on 8-11-2016.
 */

import React from "react";
import UserStore from '../../../stores/UserStore';

export default class NavBar extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <nav className="navbar navbar-inverse sidebar" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">SIS</a>
                        <p>

                        </p>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li >
                                <a href="/">
                                    Home
                                    <span className="pull-right hidden-xs showopacity glyph-nav glyphicons-home"></span>
                                </a>
                            </li>
                            <li>
                                <a href="/progress">
                                    Progress
                                    <span className="pull-right hidden-xs showopacity glyph-nav glyphicons-dashboard"></span>
                                </a>
                            </li>
                            <li>
                                <a href="/requirements">
                                    Study Requirements
                                    <span className="pull-right hidden-xs showopacity glyph-nav glyphicons-newspaper"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Remedial
                                    <span  className="pull-right hidden-xs showopacity glyph-nav glyphicons-clock"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Studyplan
                                    <span className="pull-right hidden-xs showopacity glyph-nav glyphicons-calendar"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Profile
                                    <span className="pull-right hidden-xs showopacity glyph-nav glyphicons-user"></span>
                                </a>
                            </li>
                            <li>
                                <a href="notifications">
                                    Notifications
                                    <span className="pull-right hidden-xs showopacity glyph-nav glyphicons-envelope"></span>
                                </a>
                            </li>
                            <li>
                                <a href="retakes">
                                    Herkansingen
                                    <span className="pull-right hidden-xs showopacity glyph-nav glyphicon-align-center"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}