import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

class Kullyc extends Component {
  render() {
    return (
      <>
      <article className="bestItem">
        <h2 className="title2">이 상품 어때요??</h2>
        <ul className="product_list">
          <li><img src={`${process.env.PUBLIC_URL}/images/product01.jpg`} alt="" /></li>
          <li><img src={`${process.env.PUBLIC_URL}/images/product02.jpg`} alt="" /></li>
          <li><img src={`${process.env.PUBLIC_URL}/images/product03.jpg`} alt="" /></li>
          <li><img src={`${process.env.PUBLIC_URL}/images/product04.jpg`} alt="" /></li>
        </ul>
        <p>
          <FontAwesomeIcon icon={faHouse} />
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        </p>
        </article>
      </>
    );
  }
}

export default Kullyc;