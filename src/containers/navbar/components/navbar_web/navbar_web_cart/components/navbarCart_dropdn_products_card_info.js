import React from 'react';
import PropTypes from 'prop-types';

function NavbarCartProductsCardInfo({
  title,
  qty,
  price,
  nicotineStrength: stringStrength,
}) {
  const numberStrength = 
  return (
    <div className="products-list-card-info">
      <div className="product-title">
        {title}
      </div>
      <div className="product-qty">
        {`${qty} x $ ${Number(price)}.00`}
      </div>
      <div className="nic-strength">
        <i>
          {`${nicotineStrength}mg`}
        </i>
      </div>
    </div>
  );
}
const { string, number } = PropTypes;
NavbarCartProductsCardInfo.defaultProps = {
  price: '',
  qty: 0,
  title: '',
  nicotineStrength: 0,
};
NavbarCartProductsCardInfo.propTypes = {
  price: string,
  qty: number,
  title: string,
  nicotineStrength: number,
};

export default NavbarCartProductsCardInfo;
