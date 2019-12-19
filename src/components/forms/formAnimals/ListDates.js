import React, {Component} from 'react';
import Date from './Date';
import PropTypes from 'prop-types';

class ListDates extends Component {

    render() {
        const mensage = Object.keys(this.props.dates).length === 0 ? 'No hay citas' : 'Administra las citas aqui';
        const dates =  this.props.dates;
        return(
            <div className="card mt-2 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{mensage}</h2>
                    <div className="lista-citas">
                        {dates.map(date => (
                            <Date 
                                key={date.id}
                                date={date}
                                removeDate={this.props.removeDate}
                            />
                        ))}
                    </div>

                </div>
            </div>
        );
    }
}

ListDates.propTypes = {
    dates : PropTypes.array.isRequired,
    removeDate : PropTypes.func.isRequired
}

export default ListDates;