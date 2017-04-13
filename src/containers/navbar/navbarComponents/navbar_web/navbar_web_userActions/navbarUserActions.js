import React, { PropTypes } from 'react';

import NavbarUserActionsNotSignedIn from './navbarUserActions_notSignedIn';
import NavbarUserActionsSignedIn from './navbarUserActions_signedIn';

/* TODO :
1. This component needs a "signed-in" prop from it's parent.  It will be used to toggle the inline-style for display: none.

2. Need to add the respective Navigation COmponent maps for the Links.
*/
const propTypes = {
  activeUser: PropTypes.bool.isRequired,
};

function NavbarUserActions({ activeUser }) {
  return (
    <div className="navbar-actionSection-upper-actions">
      {activeUser ? <NavbarUserActionsSignedIn /> : <NavbarUserActionsNotSignedIn />}
    </div>
  );
}
NavbarUserActions.propTypes = propTypes;
export default NavbarUserActions;