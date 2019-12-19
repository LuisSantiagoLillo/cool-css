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
            <div class="navigation">
                <input type="checkbox" class="navigation__checkbox" id="navi-toggle"></input>

                <label for="navi-toggle" class="navigation__button">
                    <span class="navigation__icon">&nbsp;</span>
                </label>

                <div class="navigation__background">&nbsp;</div>

                <nav class="navigation__nav">
                    <ul class="navigation__list">
                        <li class="navigation__item">
                            <Link to='/skyLogin' onClick={unCheck} class="navigation__link">Sky Theme</Link>
                        </li>
                        <li class="navigation__item">
                            <Link to='/carDriving' onClick={unCheck} class="navigation__link">Drive Theme</Link>
                        </li>
                        <li class="navigation__item">
                            <Link to='/images' onClick={unCheck} class="navigation__link">Images Styles</Link>
                        </li>
                        <li class="navigation__item">
                            <Link to='/buttonsHover' onClick={unCheck} class="navigation__link">Buttons Styles</Link>
                        </li>
                        <li class="navigation__item">
                            <Link to='/loading' onClick={unCheck} class="navigation__link">Loading Styles</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Fragment>
        );
    }
}

export default Navigation;