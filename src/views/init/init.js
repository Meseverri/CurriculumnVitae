import "./init.css";

export const init = (app) => {
  const main$$ = document.createElement("main");
  const ret = `
    <section class="aboutme" id="aboutme">
    <h2>About me</h2>
    <img class="avatar" src="https://i.pinimg.com/736x/8f/c2/ad/8fc2adfb17b261162bbd9a4af5239c64.jpg" alt="Peter"
      parker="">
    <ul>
      <li>
        <p>HTML5</p>
      </li>
      <li>
        <p>CSS3</p>
      </li>
      <li>
        <p>JavaScript</p>
      </li>
      <li>
        <p>React</p>
      </li>
      <li>
        <p>Node.js</p>
      </li>
      <li>
        <p>Express.js</p>
      </li>
      <li>
        <p>MongoDB</p>
      </li>
      <li>
        <p>RESTful API</p>
      </li>
      <li>
        <p>Git</p>
      </li>
      <li>
        <p>Frontend and Backend Development</p>
      </li>
    </ul>
    <p>I'm a passionate photographer, web developer, and journalist with a diverse educational background. I hold a
      Bachelor's degree in Science, a Web Development Certification, and a Master's in Journalism. My work experience
      includes capturing exclusive images as a photographer, developing web applications, and reporting on news
      stories. I'm committed to continuous learning and contributing to both the digital world and quality journalism.
    </p>
    <p>123 Main Street, New York, NY</p>
    <a href="mailto:peter.parker@email.com">Contact me</a>
  </section>

  <div class="change-container">
    <button id="change">Show Experience</button>
  </div>

  <div id="content">
    <section class="experience" id="experience">
      <h2>Experience</h2>
      <ul>
        
        <li>
          <h3>2013 - Present</h3>
          <h4>Tech Solutions Inc.</h4>
          <h4>Web Developer</h4>
          <p>As a key member of the development team, I have contributed to various projects, from creating interactive web applications to optimizing database performance.</p>
        </li>
        
        <li>
          <h3>2012 - 2013</h3>
          <h4>Self-employed</h4>
          <h4>Freelance Web Developer</h4>
          <p>During my freelancing period, I collaborated with clients from diverse industries, delivering tailor-made websites that met their unique needs and goals.</p>
        </li>
        
      </ul>
    </section>
  </div>

  <div id="content">

    <section class="education" id="education">
      <h2>Education</h2>
      <h3>Bachelor of Science in Computer Science</h3>
      <h4>City University of New York</h4>
      <p>2012</p>
      <p>Summa Cum Laude</p>
      <h3>Relevant Courses</h3>
      <ul id="relevantcourses">

        <li>
          <p>Web Development Fundamentals</p>
        </li>

        <li>
          <p>Data Structures and Algorithms</p>
        </li>

        <li>
          <p>Database Design</p>
        </li>

        <li>
          <p>User Interface Design</p>
        </li>

      </ul>
    </section>

  </div>

  <section class="projects" id="projects">
    <h2>Recent Projects</h2>
    <ul>

      <li>
        <img
          src="https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww&amp;w=500"
          alt="E-commerce" website="">
        <h3>E-commerce Website</h3>
        <p>Designed and developed a feature-rich e-commerce platform with advanced product search, user reviews, and a
          secure payment system, resulting in a 30% increase in sales for the client.</p>
        <a href="http://github.com/#">Know more...</a>
      </li>

      <li>
        <img
          src="https://plus.unsplash.com/premium_photo-1684581214880-2043e5bc8b8b?auto=format&amp;fit=crop&amp;q=80&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;w=2070"
          alt="Blog" platform="">
        <h3>Blog Platform</h3>
        <p>Created a customizable blog platform with dynamic content creation, user authentication, comment
          functionality, and social media integration, leading to a 50% growth in user engagement.</p>
        <a href="http://github.com/#">Know more...</a>
      </li>

      <li>
        <img
          src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&amp;fit=crop&amp;q=80&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;w=2071"
          alt="Portfolio" website="">
        <h3>Portfolio Website</h3>
        <p>Built a professional portfolio website to showcase my web development skills and projects. The site
          features a clean, responsive design and highlights my work as a developer.</p>
        <a href="http://github.com/#">Know more...</a>
      </li>

    </ul>
  </section>
    `;
  main$$.innerHTML = ret;
  app.append(main$$);
};
