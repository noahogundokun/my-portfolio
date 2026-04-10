import React from "react"
import './Testimonials.css'
export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Clients Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="message">"{testimonial.message}"</p>
            <h4>{testimonial.name}</h4>
            <span>{testimonial.age}, {testimonial.profession}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
const testimonials = [
  {
    name: "John Doe",
    age: "30",
    profession: "Software Engineer",
    message: "John is an exceptional developer who delivered our project on time and within budget. His attention to detail and problem-solving skills are unmatched."
  },
  {
    name: "John Doe",
    age: "30",
    profession: "Software Engineer",
    message: "John is an exceptional developer who delivered our project on time and within budget. His attention to detail and problem-solving skills are unmatched."
  },
  {
    name: "John Doe",
    age: "30",
    profession: "Software Engineer",
    message: "John is an exceptional developer who delivered our project on time and within budget. His attention to detail and problem-solving skills are unmatched."
  },
  {
    name: "John Doe",
    age: "30",
    profession: "Software Engineer",
    message: "John is an exceptional developer who delivered our project on time and within budget. His attention to detail and problem-solving skills are unmatched."
  },
  {
    name: "John Doe",
    age: "30",
    profession: "Software Engineer",
    message: "John is an exceptional developer who delivered our project on time and within budget. His attention to detail and problem-solving skills are unmatched."
  },
  {
    name: "Jane Smith",
    age: "28",
    profession: "Product Manager",
    message: "Working with John was a pleasure. He took the time to understand our requirements and provided creative solutions that exceeded our expectations."
  }
];