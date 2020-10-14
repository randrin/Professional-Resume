import React, { Component } from "react";
import { ResumeConsumer } from "../../context";

export default class Testimonials extends Component {
  render() {
    return (
      <ResumeConsumer>
        {(value) => {
          const { testimonials } = value;
          return (
            <div className="col-md-12 subpage-block">
              <div className="testimonials owl-carousel">
                {testimonials.map((testimonial) => (
                  <div className="testimonial-item" key={testimonial.id}>
                    <div className="testimonial-content">
                      <div className="testimonial-text">
                        <p>{testimonial.testimonial}</p>
                      </div>
                    </div>
                    <div className="testimonial-credits">
                      <div className="testimonial-picture">
                        <img src={testimonial.photo} alt={testimonial.name} />
                      </div>
                      <div className="testimonial-author-info">
                        <p className="testimonial-author">{testimonial.name}</p>
                        <p className="testimonial-firm">
                          {testimonial.expertise}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }}
      </ResumeConsumer>
    );
  }
}
