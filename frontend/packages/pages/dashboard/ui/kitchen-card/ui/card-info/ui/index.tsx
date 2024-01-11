import React from "react";
import "./style.scss";

/* To-Do: 
Hämta order obj 
*/


export function CardInfo() {

  
  return (
    <article className="card-info">
      <section className="card-info__prod">
        <p>Produkt &nbsp; </p>
        <aside></aside>
        <p>&nbsp;  3 st</p>
      </section>
      <section className="card-info__total">
        <p>27 sek</p>
      </section>
    </article>
  );
}
