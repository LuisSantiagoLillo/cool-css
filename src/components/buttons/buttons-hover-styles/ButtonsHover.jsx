import React, {Component} from 'react';
import './ButtonsHover.css';


class ButtonsHover extends Component {

    state = {
    }


    render() {

        return(
            <div className="content content-buttons">
                <section>
                    <a className="btn-hover background-botton-left">Hover Me</a>
                    <a className="btn-hover background-top-right">Hover Me</a>
                    <a className="btn-hover background-fromToptoBotton">Hover Me</a>
                    <a className="btn-hover background-fromLeftToRight">Hover Me</a>
                    <a className="btn-hover background-fromRightToLeft">Hover Me</a>
                    <a className="btn-hover background-cross">Hover Me</a>
                    <a className="btn-hover background-substitute">Hover Me</a>
                    <a className="btn-hover background-flash">Hover Me</a>
                    <a className="btn-hover background-replace">Hover Me</a>
                    <a className="btn-hover background-zoom">Hover Me</a>
                    <a className="btn-hover background-blob">Hover Me</a>
                    <a className="btn-hover background-blob2">Hover Me</a>
                    <a className="btn-hover background-multiple">Hover Me</a>
                    <a className="btn-hover background-boomerang">Hover Me</a>
                    <a className="btn-hover background-boomerang2">Hover Me</a>
                    <a className="btn-hover shaking-hover">Hover Me</a>
                    <a className="btn-hover animated-flash">Hover Me</a>
                    <a className="btn-hover smoky-button">
                        <ul className="animated-smoky">
                            <li className="left">H</li>
                            <li className="left">O</li>
                            <li className="top">V</li>
                            <li className="right">E</li>
                            <li className="right">R</li>
                        </ul>
                    </a>
                    <a className="btn-hover container-fill">
                        <div className="animated-fill">   
                            <h4>Hover</h4>
                        </div> 
                    </a>
                    <a className="btn-hover hover-created"><span className="span-created"></span>Hover Me</a>
                </section>
                <section>
                    <a className="btn-hover background-spacing">Hover Me</a>
                </section>
                <section>
                    <ul className="icon-hover-rounded mr-4">
                        <li><i className="fas fa-heart"></i></li>
                        <li><i className="fas fa-gift"></i></li>
                    </ul>
                    <div className="button-pulse mt-2">
                        <i className="fas fa-phone"></i>
                    </div>
                </section>

                <section>
                <div className="container-icons">
                    <a className="icon" href="#">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="icon" href="#">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="icon" href="#">
                        <i className="fab fa-google"></i>
                    </a>

                </div>
                </section>

            </div>
        );
    }
}

export default ButtonsHover;