import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
          Welcome to the VAT blog! This blog was created by vidhya khule, aakanksha mitkare and tejasvini bhande
          as a group project to share his thoughts and ideas with the world. VAJ is a passionate students who love to write about technology,
          coding, and everything in between. 
        </p>
        <p>
          On this blog, you will find weekly article and tutorials on topics such as 
          wen development, software engineering, and programming languages.
          VAJ always learning and exploring new technologies, so be sure to check back often for new content!
        </p>
        <p>
          We encourage you to leave the comments on our posts and engage with other readers.
          You can like other peoples  comments and replay to them as well. You before that community
          of learners can help each other grow and improve.

        </p>
        
      </div>
    </article>
  );
};

export default About;