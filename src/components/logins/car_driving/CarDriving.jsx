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
            <div class="container-car-driving">

                <div class="" id="containerSmoke">
                    <div id="smoke">
                        <span class="s0"></span>
                        <span class="s1"></span>
                        <span class="s2"></span>
                        <span class="s3"></span>
                        <span class="s4"></span>
                        <span class="s5"></span>
                        <span class="s6"></span>
                        <span class="s7"></span>
                        <span class="s8"></span>
                        <span class="s9"></span>
                    </div>
                </div>

                <img src={require('../../../assets/img/motorbike.png')} alt="" id="motorbike" class="motorbike"/>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <form class="container-form p-5">
                                <div class="text-center">
                                    <h4 class="title_app">MOTOR INSURANCES</h4>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com"></input>
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="******"></input>
                                </div>
                        
                                <button type="button" class="btn btn-primary btn-block mt-5">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarDriving;