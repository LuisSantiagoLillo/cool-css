import React, {Component} from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const stateInit = { 
    date : {
        mascota : '',
        propietario : '',
        nivel : '',
        sintomas : ''
    }, 
    error: false
 }

class NewDate extends Component {
    state = { ...stateInit  }

    handleChange = e => {
        // console.log(e.target.name + ': ' + e.target.value)
        this.setState({
            date: {
                ...this.state.date,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSUbmit = e => {
        // e.preventDefault();
        const { mascota, propietario, nivel, sintomas } = this.state.date;

        if(mascota === '' || propietario === '' || nivel === '' || sintomas === '') {
            this.setState({
                error: true
            });
            return;
         }

         const newDate = {...this.state.date}
         newDate.id = uuid();

         this.props.createNewDate(newDate)

         this.setState({
             ...stateInit
         })

    }

    render() {

        const { error } = this.state;

        return(
            <div class="">
                <h3> Crear nueva cita </h3>
                { error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div>  : null  }
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="mascota">Nombre Mascota</label>
                        <input type="text" class="form-control" name="mascota" id="mascota" placeholder="Nombre Mascota" onChange={this.handleChange} value={this.state.date.mascota}></input>
                    </div>
                    <div class="form-group">
                        <label for="propietario">Nombre Dueño</label>
                        <input type="text" class="form-control" name="propietario" id="propietario" placeholder="Nombre Dueño" onChange={this.handleChange} value={this.state.date.propietario}></input>
                    </div>
                    <div class="form-group">
                        <label for="nivel">Nivel de urgencia</label>
                        <select class="form-control" name="nivel" id="nivel" onChange={this.handleChange} value={this.state.date.nivel}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="sintomas">Sintomas</label>
                        <textarea class="form-control" name="sintomas" id="sintomas" rows="4" onChange={this.handleChange} value={this.state.date.sintomas}></textarea>
                    </div>

                    <input type="button" onClick={this.handleSUbmit} className="py-3 mt-2 btn btn-success btn-block" value="Agregar Nueva Cita" />

                </form>
            </div>
        );
    }
}

NewDate.propTypes = {
    createNewDate : PropTypes.func.isRequired
}

export default NewDate;