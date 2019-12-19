import React, {Component} from 'react';
import './SkyLogin.css';


class SkyLogin extends Component {

    state = {
    }


    render() {

        return(
            <div class="">
                <div class="landscape">
                    <form>
                        <div class="text-center">
                            <h1 class="title_app">- DREAMS -</h1>
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
                <div class="filter"></div>

        
                <div class="animation-area">
                    <div class="moon-area">
                        <div class="moon"></div>
                    </div>

                    <ul class="box-area">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>                
                    </ul>
                </div>
            </div>
        );
    }
}

export default SkyLogin;