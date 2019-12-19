import React, {Component} from 'react';
import './Images.css';


class Images extends Component {

    state = {
    }


    render() {

        return(
            <div class="content content-images">
                <div class="row">
                    <div class="col-12">
                        <div class="card-columns">
                            <div class="card container-img1">
                                <img src={require('../../assets/img/undraw_dev_productivity_umsq.svg')} alt="hey" class="img1 img-fluid img-thumbnail"/>
                                <div class="caption-img1">
                                    <h1>STEP 1</h1>
                                    <p>organize your time</p>
                                </div>
                            </div>

                            <div class="card container-img2">
                                <img src={require('../../assets/img/undraw_female_avatar_l3ey.svg')} alt="" class="img2 img-fluid img-thumbnail"/>
                                <div class="caption-img2">
                                    <h1>PROFILE</h1>
                                    <p></p>
                                </div>
                            </div>

                            <div class="card container-img3">
                                <img src={require('../../assets/img/undraw_two_factor_authentication_namy.svg')} alt="" class="img3 img-fluid img-thumbnail"/>
                                <div class="caption-img3">
                                    <h1></h1>
                                    <p>Authentication is KEY</p>
                                </div>
                            </div>

                            <div class="card container-img4">
                                <img src={require('../../assets/img/undraw_personal_data_29co.svg')} alt="" class="img4 img-fluid img-thumbnail"/>
                                <div class="caption-img4">
                                    <h1></h1>
                                    <p>Keep your data safe</p>
                                </div>
                            </div>

                            <div class="card container-img5">
                                <img src={require('../../assets/img/undraw_dev_focus_b9xo.svg')} alt="" class="img5 img-fluid img-thumbnail"/>
                                <div class="caption-img5">
                                    <h1>Stay Focused</h1>
                                    <h5>you can do anything!</h5>
                                </div>
                            </div>

                            <div class="card container-img6">
                                <img src={require('../../assets/img/undraw_unicorn_dp2f.svg')} alt="" class="img6 img-fluid img-thumbnail"/>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Images;