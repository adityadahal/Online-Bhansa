import React, {useState, useEffect} from "react";
import { TextField } from "@mui/material";
import "./review.css";


const Review = () =>{
    return(
<>
  <div class="what-say">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div id="testimonial-slider" class="owl-carousel">
            <div class="testimonial">
              <div class="testimonial-content">
                <div class="testimonial-icon">
                  <i class="fa fa-quote-left"></i>
                </div>
                <p class="description">
                  Best Food in the town
                </p>
              </div>
              <h3 class="title">Anonymous</h3>
              <span class="post">Customer</span>
            </div>

            <div class="testimonial">
              <div class="testimonial-content">
                <div class="testimonial-icon">
                  <i class="fa fa-quote-left"></i>
                </div>
                <p class="description">
                  You Guys should try this food out.
                </p>
              </div>
              <h3 class="title">Anonymous</h3>
              <span class="post">Customer</span>
            </div>

            <div class="testimonial">
              <div class="testimonial-content">
                <div class="testimonial-icon">
                  <i class="fa fa-quote-left"></i>
                </div>
                <p class="description">
                 Wow. 5 Starsss from my Side...........
                </p>
              </div>
              <h3 class="title">Anonymous</h3>
              <span class="post">Customer</span>
            </div>

            <div class="testimonial">
              <div class="testimonial-content">
                <div class="testimonial-icon">
                  <i class="fa fa-quote-left"></i>
                </div>
                <p class="description">
                  Momo was fantastic..... Fried Rice could have been better. Overall 5 stars
                </p>
              </div>
              <h3 class="title">Anonymous</h3>
              <span class="post">Customer</span>
            </div>
             <div class="testimonial">
              <div class="testimonial-content">
                <div class="testimonial-icon">
                  <i class="fa fa-quote-left"></i>
                </div>
                <p class="description">
                 This cafe was too good experience for us. I will surely review this cafe to all of my friends.
                </p>
              </div>
              <h3 class="title">Anonymous</h3>
              <span class="post">Customer</span>
            </div>
            <div class="container">
    <form>
      <div class="form-group">
        <textarea class="form-control status-box" rows="3" placeholder="Please give your review..."></textarea>
      </div>
    </form>
    <div class="button-group pull-right">
      <p class="counter">250</p>
      <a href="" class="btn btn-primary">Post</a>
    </div>
    <ul class="posts">
    </ul>
  </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  </>


    );
}


export default Review;