import React, {Component} from 'react';
import './Loadings.css';


class Loadings extends Component {

    state = {
    }


    render() {

        return(
            <div className="content content-loadings">
                <div className="m-2">
                    <div className="loading-heart"></div>
                    <h2>Loadings with CSS animation</h2>
                </div>
                <div className="container">
                    <div className="row">

                        <div className="col-12 m-5">
                            <div className="container-loading-floating">
                            <div className="loading-floating" data-text="LOADING!">LOADING!</div>
                            </div>
                        </div>


                        <div className="col-12 m-5">
                            <div className="container-loading-rotate">
                                <h1 className="loading-rotate">LOADING!</h1>
                            </div>
                        </div>
                        
                        <div className="col-12 m-5">
                            <div className="container-loading-text">
                                <h1 className="loading-text">Loading <span></span></h1>
                            </div>
                        </div>

                        <div className="col-12 m-5">
                            <ul className="loading-lighting">
                                <li>L</li>
                                <li>O</li>
                                <li>A</li>
                                <li>D</li>
                                <li>I</li>
                                <li>N</li>
                                <li>G</li>
                                <li>!</li>
                            </ul>
                        </div>

                        <div className="col-12 m-5">
                            <ul className="loading-flashing">
                                <li>L</li>
                                <li>O</li>
                                <li>A</li>
                                <li>D</li>
                                <li>I</li>
                                <li>N</li>
                                <li>G</li>
                                <li>!</li>
                            </ul>
                        </div>

                        <div className="col-12 m-5">
                            <div className="container-linear">
                                <h2 className="linear-background">Loading!</h2>
                            </div>
                        </div>

                        <div className="col-12 m-5">
                            <div className="container-moving">
                                <ul className="loading-moving">
                                    <li>L</li>
                                    <li>O</li>
                                    <li>A</li>
                                    <li>D</li>
                                    <li>I</li>
                                    <li>N</li>
                                    <li>G</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 m-5">
                            <div className="container-moving">
                                <ul className="loading-moving2">
                                    <li>L</li>
                                    <li>O</li>
                                    <li>A</li>
                                    <li>D</li>
                                    <li>I</li>
                                    <li>N</li>
                                    <li>G</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 m-5">
                            <div className="container-changing-background">
                                <h1 className="loading-changing-background m-2">LOADING!</h1>
                            </div>
                        </div>

                        <div className="col-12 m-5">
                            <div className="container-loading-smoky">
                                <ul className="loading-smoky m-2">
                                    <li>L</li>
                                    <li>O</li>
                                    <li>A</li>
                                    <li>D</li>
                                    <li>I</li>
                                    <li>N</li>
                                    <li>G</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-12 m-5">
                            <div className="container-loading-fill">
                                <h1 className="loading-fill">LOADING</h1>
                            </div>
                        </div>

                        <div className="col-12 m-5">
                            <div className="banner">
                                <h3 className="loading-rotate2">LOADING</h3>
                            </div>
                        </div>

                        <div className="col-12 m-5">
                            <div className="container-bouncing-balls">
                                <ul className="loading-bouncing-balls">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 m-5">
                            <div className="container-cradle-balls">
                                <div className="cradle">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        );
    }
}

export default Loadings;