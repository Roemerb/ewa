/**
 * Created by Onkarjit Singh on 8-11-2016.
 */

import React from "react";

export default class NavBar extends React.Component {

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
                    </div>

                    <div className="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a href="/dashboard">
                                    Dashboard
                                    <span className="pull-right hidden-xs showopacity glyph-nav glyphicons-dashboard"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Subscriptions
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
                                <a href="#">
                                    Messages
                                    <span className="pull-right hidden-xs showopacity glyph-nav glyphicons-envelope"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}