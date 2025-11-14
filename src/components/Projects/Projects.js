import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import otomycosis from "../../Assets/Projects/otomycosis.png";
import movie from "../../Assets/Projects/movie.png";
import genai from "../../Assets/Projects/genai.png";
import jobportal from "../../Assets/Projects/jobportal.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import todo from "../../Assets/Projects/todo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              title="Let's Shop"
              description="I built a full e-commerce app where users can shop, cart, un-cart, re-cart, checkout, and stalk their orders like it’s a thriller movie—while I control everything from the admin panel like a supermarket overlord. Works perfectly on all devices, even the ones begging for replacement"
              ghLink="https://github.com/adityaRawat14/lets-shop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobportal}
              title="JobSelect"
              description="I built a full-stack e-commerce app using React, Node.js, Express, MongoDB, JWT, and Tailwind, where users can shop, abandon carts, and checkout after dramatic hesitation. It has secure login, order tracking, an admin panel, and works smoothly even on phones held together with tape"
              ghLink="https://github.com/bhavyasac/job-portal"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              title="MovieMuse"
              description="I built a movie recommendation system that guesses what you want to watch based on your ratings, mood, and occasional chaos clicks. Powered by Python, Pandas, and Scikit-Learn, it basically stalks your taste so you don’t have to scroll for 40 minutes"
              ghLink="https://github.com/Devansh699/Movie-Recommender-System"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              title="AuraSphere"
              description="I built AuraSphere, a MERN-based to-do list app that turns productivity into a competition. Users add tasks, complete them to earn points, 
              and then flex those points on a global leaderboard while silently judging their friends’ laziness. The app tracks progress, syncs everything in real time, and makes getting things done feel almost like a game—minus the rage quitting"
              ghLink="https://github.com/SauravChaudhary26/AuraSphere"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={otomycosis}
              title="Otomycosis"
              description="Built an Otomycosis detection system using CNNs, ResNet50, and InceptionV3 to let AI spot ear fungal infections—so humans don’t have to zoom into questionable ear photos. It analyzes images, predicts infections quickly, and makes ear diagnosis way less awkward"
              ghLink="https://github.com/bhavyasac/otomycosis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={genai}
              title="Image to Speech GenAI Tool"
              description="I built an AI Image-to-Speech tool that basically turns pictures into dramatic audio short stories—like your images hired a voice actor. Using LangChain to coordinate the chaos, GPT-3.5 and HuggingFace vision-language models to invent the story, and TTS to speak it out loud, the whole thing runs on Streamlit and HuggingFace Spaces so anyone can make their photos talk. It’s multimodal madness, but in a fun, very functional way"
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
