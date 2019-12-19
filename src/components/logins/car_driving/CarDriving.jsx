import React, {Component} from 'react';
import './CarDriving.css';

class CarDriving extends Component {

    state = {
    }


    render() {

        function jump() {
            let motorbike = document.getElementById('motorbike');
            let btnMotorbike = document.getElementById('jumpMotorbike');
            let containerSmoke = document.getElementById('containerSmoke');

            if(btnMotorbike.classList.contains("disabled") == false) {
                motorbike.classList.add("jump");
                btnMotorbike.classList.add("disabled");
                containerSmoke.classList.add("invisible");
                setTimeout(()=>{
                    btnMotorbike.classList.remove("disabled");
                    motorbike.classList.remove("jump");
                    containerSmoke.classList.remove("invisible");
                }, 2000);
            }
        }


        const circleLarge = '<div class="circle-large"></div>';
        const buttonJump = '<button type="button" id="jumpMotorbike" class="btn btn-primary" onClick={jump}>JUMP</button>';

        return(
            <div className="container-car-driving">

                <div className="" id="containerSmoke">
                    <div id="smoke">
                        <span className="s0"></span>
                        <span className="s1"></span>
                        <span className="s2"></span>
                        <span className="s3"></span>
                        <span className="s4"></span>
                        <span className="s5"></span>
                        <span className="s6"></span>
                        <span className="s7"></span>
                        <span className="s8"></span>
                        <span className="s9"></span>
                    </div>
                </div>

                <img src={require('../../../assets/img/motorbike.png')} alt="" id="motorbike" className="motorbike"/>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form className="container-form p-5">
                                <div className="text-center">
                                    <h4 className="title_app">MOTOR INSURANCES</h4>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com"></input>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="******"></input>
                                </div>
                        
                                <button type="button" className="btn btn-primary btn-block mt-5">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarDriving;