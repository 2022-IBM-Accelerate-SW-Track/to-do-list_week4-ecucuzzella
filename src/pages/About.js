import React, { Component } from "react";
import "./About.css";
import profilePicture from "../assets/profilePicture.png";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profilePicture}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Elizabeth Cucuzzella</div>
            <div className="brief_description">
              My name is Elizabeth and I am a junior at Tufts University School of Engineering majoring in Data Science with a concentration in Environmental Science and Mathematics. In my spare time, I enjoy reading and skating (both ice and roller). My favorite music is indie pop, and my favorite band is Misterwives. I have seen them in concert 3 times and plan to see them again in August. I am originally from Baltimore (let's go O's), and my pronouns are she/her. After undergrad, I hope to get my PhD in Applied Mathematics as I want to pursue research of environmental and climate math.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
