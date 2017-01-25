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
                        <a className="navbar-brand" href="/">Student</a>
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
                                    Voortgang
                                    <span className="pull-right hidden-xs showopacity glyph-nav glyphicons-dashboard"></span>
                                </a>
                            </li>
                            <li>
                                <a href="/studyplanning">
                                    Studieplan
                                    <span className="pull-right hidden-xs showopacity glyph-nav glyphicons-dashboard"></span>
                                </a>
                            </li>
                            <a className="navbar-brand" href="/">Docent</a>
                            <li>
                                <a href="/registergrade">
                                    Cijfer registreren
                                    <span className="pull-right hidden-xs showopacity glyph-nav glyphicons-newspaper"></span>
                                </a>
                            </li>
                            <a className="navbar-brand" href="/">Manager</a>
                            <li>
                                <a href="/manageprograms">
                                    Beheer Opleidingen
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
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}