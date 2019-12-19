import React, {Component, Fragment} from 'react';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';


class Navigation extends Component {

    render() {
        function unCheck(e) {
            let checkbox = document.getElementById('navi-toggle');
            checkbox.click();
        }

        return(
        <Fragment>
            <div className="navigation">
                <input type="checkbox" className="navigation__checkbox" id="navi-toggle"></input>

                <label for="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>

                <div className="navigation__background">&nbsp;</div>

                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item">
                            <Link to='/skyLogin' onClick={unCheck} className="navigation__link">Sky Theme</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to='/carDriving' onClick={unCheck} className="navigation__link">Drive Theme</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to='/images' onClick={unCheck} className="navigation__link">Images Styles</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to='/buttonsHover' onClick={unCheck} className="navigation__link">Buttons Styles</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to='/loading' onClick={unCheck} className="navigation__link">Loading Styles</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Fragment>
        );
    }
}

export default Navigation;