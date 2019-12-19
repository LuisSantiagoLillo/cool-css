import React, {Component} from 'react';
import './Loadings.css';


class Loadings extends Component {

    state = {
    }


    render() {

        return(
            <div class="content content-loadings">
                <div class="m-2">
                    <div class="loading-heart"></div>
                    <h2>Loadings with CSS animation</h2>
                </div>
                <div class="container">
                    <div class="row">

                        <div class="col-12 m-5">
                            <div class="container-loading-floating">
                            <div class="loading-floating" data-text="LOADING!">LOADING!</div>
                            </div>
                        </div>


                        <div class="col-12 m-5">
                            <div class="container-loading-rotate">
                                <h1 class="loading-rotate">LOADING!</h1>
                            </div>
                        </div>
                        
                        <div class="col-12 m-5">
                            <div class="container-loading-text">
                                <h1 class="loading-text">Loading <span></span></h1>
                            </div>
                        </div>

                        <div class="col-12 m-5">
                            <ul class="loading-lighting">
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

                        <div class="col-12 m-5">
                            <ul class="loading-flashing">
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

                        <div class="col-12 m-5">
                            <div class="container-linear">
                                <h2 class="linear-background">Loading!</h2>
                            </div>
                        </div>

                        <div class="col-12 m-5">
                            <div class="container-moving">
                                <ul class="loading-moving">
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

                        <div class="col-12 m-5">
                            <div class="container-moving">
                                <ul class="loading-moving2">
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

                        <div class="col-12 m-5">
                            <div class="container-changing-background">
                                <h1 class="loading-changing-background m-2">LOADING!</h1>
                            </div>
                        </div>

                        <div class="col-12 m-5">
                            <div class="container-loading-smoky">
                                <ul class="loading-smoky m-2">
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
                        
                        <div class="col-12 m-5">
                            <div class="container-loading-fill">
                                <h1 class="loading-fill">LOADING</h1>
                            </div>
                        </div>

                        <div class="col-12 m-5">
                            <div class="banner">
                                <h3 class="loading-rotate2">LOADING</h3>
                            </div>
                        </div>

                        <div class="col-12 m-5">
                            <div class="container-bouncing-balls">
                                <ul class="loading-bouncing-balls">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-12 m-5">
                            <div class="container-cradle-balls">
                                <div class="cradle">
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