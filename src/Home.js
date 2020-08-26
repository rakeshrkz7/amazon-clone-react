import React from "react";
import "./home.css";
import Product from "./Product";
import CurrencyFormat from "react-currency-format";

function Home() {
  return (
    <div className="home">
      {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/02/"/> */}
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      {/* Product --> id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id={12321341}
          title="Apple Watch Series 5 (GPS + Cellular, 44mm) - Space Gray Black Sport Band"
          price={
            <CurrencyFormat
              decimalScale={2}
              value={53500}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₹"}
            />
          }
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71fp5ankbqL._SL1500_.jpg"
        />
        <Product
          id={12321342}
          title="Vivo VZ1 Pro (Sonic Blue, 4GB RAM, 64GB Storage)"
          price={
            <CurrencyFormat
              decimalScale={2}
              value={15999}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₹"}
            />
          }
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61oDQUfHImL._SY741_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={12321346}
          title="Rich Dad Poor Dad(paperback)"
          price={
            <CurrencyFormat
              decimalScale={2}
              value={459}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₹"}
            />
          }
          rating={4}
          image="https://m.media-amazon.com/images/I/91VokXkn8hL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id={12321344}
          title="Apple iPhone 11 Pro Max (64GB) - Midnight Green"
          price={
            <CurrencyFormat
              decimalScale={2}
              value={117100}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₹"}
            />
          }
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61jgfLBydjL._SL1024_.jpg"
        />
        <Product
          id={12321345}
          title="Sony Bravia 138.8 cm (55 inches) 4K Ultra HD (Black)"
          price={
            <CurrencyFormat
              decimalScale={2}
              value={77500}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₹"}
            />
          }
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/91QD0vRZdVL._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={12321343}
          title="Acer Nitro 5 (9th Gen Intel Core i5-9300H /8GB/1TB+256GB SSD/NVIDIA GTX 1650), Black"
          price={
            <CurrencyFormat
              decimalScale={2}
              value={65990}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₹"}
            />
          }
          rating={4}
          image="https://m.media-amazon.com/images/I/71QXJg8uOCL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
