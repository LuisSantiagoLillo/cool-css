import React, {Component} from 'react';
import './SkyLogin.css';
import Swal from "sweetalert2";  

class SkyLogin extends Component {

    constructor() {  
        super();  
        this.showAlert = this.showAlert.bind(this);  
    }  
  
    showAlert() {  
        Swal.fire({
            title: 'This is only a login interface, there is not any logic inside the button.',
            showClass: {
              popup: 'animated fadeInDown faster'
            },
            hideClass: {
              popup: 'animated fadeOutUp faster'
            }
        })
    } 
    
    render() {

        return(
            <div className="">
                <div className="landscape">
                    <form>
                        <div className="text-center">
                            <h1 className="title_app">- DREAMS -</h1>
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
                
                        <button type="button" className="btn btn-primary btn-block mt-5"
                        onClick={this.showAlert}
                        >Submit</button>

                    </form>
                </div>
                <div className="filter"></div>

        
                <div className="animation-area">
                    <div className="moon-area">
                        <div className="moon"></div>
                    </div>

                    <ul className="box-area">
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