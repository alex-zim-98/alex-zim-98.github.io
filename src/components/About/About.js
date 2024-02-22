import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/android.svg"
            alt="android-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Alex</strong>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eros tellus, mattis ac ex a, sagittis tincidunt orci. In eu est eu lorem tristique fermentum in id justo. Maecenas rutrum metus mauris, quis blandit mi rhoncus ut. Vivamus cursus elementum quam, vel lobortis nisl varius vitae.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            Quisque suscipit augue orci, quis pretium tellus consectetur ac. Pellentesque nec bibendum arcu. Curabitur non nulla orci. Suspendisse placerat quam lacus, id dapibus urna euismod et. Suspendisse lobortis, elit at convallis consequat, erat quam condimentum diam, ut porta ante justo dignissim sapien.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            Donec egestas aliquam magna, ut aliquet erat faucibus et. In eget mi quis eros dictum rhoncus in pellentesque orci. Praesent in ultricies lectus. Nulla vitae tortor consequat, dictum nisl sit amet, pretium est. Integer id placerat lacus. Donec quis luctus elit, id consequat justo. Morbi pretium massa quis malesuada iaculis.
              <div className="tagline2">
              In practice, I have used the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
