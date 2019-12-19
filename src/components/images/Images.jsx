import React, {Component} from 'react';
import './Images.css';


class Images extends Component {

    state = {
    }


    render() {

        return(
            <div className="content content-images">
                <div className="row">
                    <div className="col-12">
                        <div className="card-columns">
                            <div className="card container-img1">
                                <img src={require('../../assets/img/undraw_dev_productivity_umsq.svg')} alt="hey" className="img1 img-fluid img-thumbnail"/>
                                <div className="caption-img1">
                                    <h1>STEP 1</h1>
                                    <p>organize your time</p>
                                </div>
                            </div>

                            <div className="card container-img2">
                                <img src={require('../../assets/img/undraw_female_avatar_l3ey.svg')} alt="" className="img2 img-fluid img-thumbnail"/>
                                <div className="caption-img2">
                                    <h1>PROFILE</h1>
                                    <p></p>
                                </div>
                            </div>

                            <div className="card container-img3">
                                <img src={require('../../assets/img/undraw_two_factor_authentication_namy.svg')} alt="" className="img3 img-fluid img-thumbnail"/>
                                <div className="caption-img3">
                                    <h1></h1>
                                    <p>Authentication is KEY</p>
                                </div>
                            </div>

                            <div className="card container-img4">
                                <img src={require('../../assets/img/undraw_personal_data_29co.svg')} alt="" className="img4 img-fluid img-thumbnail"/>
                                <div className="caption-img4">
                                    <h1></h1>
                                    <p>Keep your data safe</p>
                                </div>
                            </div>

                            <div className="card container-img5">
                                <img src={require('../../assets/img/undraw_dev_focus_b9xo.svg')} alt="" className="img5 img-fluid img-thumbnail"/>
                                <div className="caption-img5">
                                    <h1>Stay Focused</h1>
                                    <h5>you can do anything!</h5>
                                </div>
                            </div>

                            <div className="card container-img6">
                                <img src={require('../../assets/img/undraw_unicorn_dp2f.svg')} alt="" className="img6 img-fluid img-thumbnail"/>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Images;