import React, { PropTypes, PureComponent } from 'react';

import NavbarOptionsLangauge from './navbarOptions_language';
import NavbarOptionsCurrency from './navbarOptions_currency';

/* TODO:
1. Pass down via props the respective class methods shown below.
- Lang change: Will set a flag in state that all SMART components will be receiving to determine how to render the language info.

- Currency Change: <Same as lang change.>

*/

class NavbarOptions extends PureComponent {
  onLanguageChange = () => console.info('changed language');

  onCurrencyChange = () => console.info('changed currency');

  render() {
    return (
      <div className="navbar acitonSection upper options">
        <NavbarOptionsLangauge />
        <NavbarOptionsCurrency />
      </div>
    );
  }
}
export default NavbarOptions;
