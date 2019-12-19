import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Date extends Component {

    render() {
        const date =  this.props.date;

        return(
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                    <div className="media mt-3">
                    <div className="media-body">
                        <h3 className="mt-0">{date.mascota}</h3>
                        <p className="card-text"><span>Nombre Dueño: </span> {date.propietario} </p>
                        <p className="card-text"><span>Nivel de urgencia: </span> {date.nivel} </p>
                        <p className="card-text"><span>Sintomas: </span> </p>
                        <p className="card-text">{date.sintomas}</p>
            
                        <button
                            className="btn btn-danger"
                            onClick={() => this.props.removeDate(date.id)}
                        >Borrar &times;</button>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        );
    }
}

Date.propTypes = {
    date : PropTypes.object.isRequired,
    removeDate : PropTypes.func.isRequired
}


export default Date;