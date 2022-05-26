import React from "react";
import Card from "./Card";

function Section() {
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Card name="Fancy Product" price="$40.00 - $80.00" />
            <Card
              name="Special Item"
              OrigPrice="$20.00"
              price="$18.00"
              sale="true"
              reviews="true"
            />
            <Card
              name="Sale Item"
              sale="true"
              OrigPrice="$50.00"
              price="$25.00"
            />
            <Card name="Popular Item" reviews="true" price="$40.00" />
            <Card
              name="Sale Item"
              sale="true"
              OrigPrice="$50.00"
              price="$25.00"
            />
            <Card name="Fancy Product" price="$120.00 - $280.00" />
            <Card
              name="Special Item"
              sale="true"
              reviews="true"
              OrigPrice="$20.00"
              price="$18.00"
            />
            <Card name="Popular Item" reviews="true" price="$40.00" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;
