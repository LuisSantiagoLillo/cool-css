import React, {Component} from 'react';
import './FormAnimals.css';
import NewDate from './NewDate';
import ListDates from './ListDates';


class FormAnimals extends Component {

    state = {
        dates: []
    }

    componentDidMount() {
        const datesLS = localStorage.getItem('dates');
        if(datesLS) {
          this.setState({
            dates : JSON.parse(datesLS)
          })
        }
        console.log(this.state.dates)
      }


    createNewDate = data => {
        // copy state
        const dates = [...this.state.dates, data];
        //dates.push(data)
        console.log(dates)
        // add new date
        this.setState({
            dates
        })
        localStorage.setItem('dates', JSON.stringify(dates));
    }

    removeDate = id => {
        // copy state
        const currentDates = [...this.state.dates];
        // delete date with filter
        const dates = currentDates.filter(date => date.id !== id)
        // update state
        this.setState({
            dates
        })
        localStorage.setItem('dates', JSON.stringify(dates));
    }

    render() {

        return(
            <div class="container margin-header">
                <div class="row">
                    <div class="col-12 m-5">
                        <NewDate
                        createNewDate = {this.createNewDate}
                        />
                    </div>
                    <div class="col-12 m-5">
                        <ListDates
                            dates={this.state.dates}
                            removeDate={this.removeDate}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default FormAnimals;