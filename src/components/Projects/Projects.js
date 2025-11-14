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
              description="I built a fully functional e-commerce web application that lets users browse products, search for their favorites, view detailed descriptions, and add or remove items from their cart as many 
              times as their indecisive heart desires. The app includes secure user authentication, a wishlist for all the “I’ll buy this later” items nobody ever buys, and a smooth checkout flow where users can review their orders before placing them and instantly regretting their expenses. 
              It also provides an order history section so users can keep track of everything they’ve purchased (or deny buying at 3 AM). On the admin side, the application includes a complete management panel to add, edit, or delete products and handle orders with absolute control. The entire platform is fully responsive, so users can shop comfortably whether they’re on a laptop, tablet, or a phone with a cracked screen."
              ghLink="https://github.com/adityaRawat14/lets-shop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobportal}
              title="JobSelect"
              description="I built a fully functional e-commerce web application where users can browse products, search efficiently, view detailed descriptions, and manage their cart with instant updates (perfect for indecisive shoppers). The app includes secure authentication, 
              a wishlist, a smooth checkout flow, and an order history section to track past purchases. It also features an admin panel for managing products and orders, all wrapped in a clean, responsive UI that works seamlessly across devices—yes, even the cracked-screen ones."
              ghLink="https://github.com/bhavyasac/job-portal"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              title="MovieMuse"
              description="I built a movie recommendation system that analyzes user preferences and viewing history to suggest films they’ll actually enjoy (instead of scrolling for 40 minutes and watching nothing). 
              The system lets users explore movies by genre, rating, or popularity, view detailed movie info, and receive personalized recommendations powered by content-based or collaborative filtering models. The interface is clean and responsive, making it easy for users to discover new movies without getting lost in endless lists. Overall, it delivers smart, relevant suggestions—basically acting as that one friend who always knows what you should watch next."
              ghLink="https://github.com/Devansh699/Movie-Recommender-System"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              title="AuraSphere"
              description="I created Aura Sphere, a gamified to-do list application that turns everyday tasks into a friendly competition. 
              Users can add and manage their tasks, earn points for completing them, and climb the leaderboard to compete with friends—because nothing motivates productivity like bragging rights. The app tracks progress, rewards consistency, and provides a clean, 
              responsive interface that makes staying organized feel less like a chore and more like a game. Overall, Aura Sphere blends productivity and fun to help users get things done while enjoying a bit of healthy rivalry."
              ghLink="https://github.com/SauravChaudhary26/AuraSphere"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={otomycosis}
              title="Otomycosis"
              description="I developed an Otomycosis detection system that uses deep learning to identify fungal ear infections from medical images, making diagnosis faster and far less confusing than googling your symptoms. The model is built using CNN architectures like ResNet50, InceptionV3, and other transfer-learning techniques to accurately classify infected and healthy 
              cases. The system presents results in a clean, user-friendly interface, helping users and clinicians understand the condition without getting lost in medical jargon. Overall, the project combines medical imaging and AI to make early detection of otomycosis smarter, quicker, and a little less scary."
              ghLink="https://github.com/bhavyasac/otomycosis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={genai}
              title="Image to Speech GenAI Tool"
              description="I built an Image-to-Speech GenAI tool that converts images into meaningful spoken descriptions, making visual content more accessible and way less mysterious. 
              The system uses advanced vision models to analyze the image, extract key details, and generate natural-sounding speech that explains exactly what’s happening—no guesswork required. Powered by deep learning and generative AI techniques, it delivers clear, 
              context-aware audio output and works seamlessly across different image types. Overall, the tool combines computer"
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
