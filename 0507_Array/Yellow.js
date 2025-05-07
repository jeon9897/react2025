import React from 'react';
import dummy from '../data/product.json';
import '../css/product.css';

function Yellow(props) {
  return (
    <article className="product">
      <h3 className="product_title">테마로 만나는 상품</h3>
      <p>json데이터 파일을 활용하여 map함수로 데이터 출력하기</p>
      <ul className="product_list">
        {dummy.products.map(product=>(
        <li 
          key={product.id}>
          <img src={`${process.env.PUBLIC_URL}/images/${product.filename}`} alt=""/>
          <p>
            <span className="product_title2">{product.title}</span>
            <span className="price">{product.price}</span>
          </p>
        </li>
        ))}
      </ul>
    </article>
  );
}

export default Yellow;