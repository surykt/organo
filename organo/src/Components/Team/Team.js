import React from "react";
import "./Team.css"

export default function Team({ title, primaryColor, secondaryColor }) {
  return (
    <section className="team" style={{backgroundColor: secondaryColor}}>
       <h3 style={{borderColor: primaryColor}}>{title}</h3>
    </section>
  )
}
