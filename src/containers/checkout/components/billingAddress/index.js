import React from 'react';
import PropTypes from 'prop-types';

import {
  FirstName,
  LastName,
  Email,
  AddressLine,
  Country,
  PrefectureState,
  PostalCode,
  City,
  PhoneNumber,
  SameAsBilling,
} from './component.imports';

function BillingAddress({
  sameAsBilling,
  handleSameAsBilling,
}) {
  return (
    <div className="checkout__billing">
      <div className="title">
        <h3>Billing Address</h3>
      </div>
      <div className="input__row">
        <FirstName />
        <LastName />
      </div>

      <Email />

      <AddressLine lineNumber={1} />

      <AddressLine lineNumber={2} />

      <Country />

      <PrefectureState />

      <PostalCode />

      <City />

      <PhoneNumber />

      <SameAsBilling
        sameAsBilling={sameAsBilling}
        handleSameAsBilling={handleSameAsBilling}
      />
    </div>
  );
}
BillingAddress.propTypes = {
  sameAsBilling: PropTypes.func.isRequired,
  handleSameAsBilling: PropTypes.string.isRequired,
};
export default BillingAddress;
