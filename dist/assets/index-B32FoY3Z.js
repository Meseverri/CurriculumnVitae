(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();const p={name:"Miguel Eseverri",address:"",email:"meseverrimarquez5@email.com",avatar:"https://i.ibb.co/nLNS8Q4/Smart-Business-Man-Business-Man-Smart-Candidate-PNG-Transparent-Image-and-Clipart-for-Free-Download.jpg",aboutMe:"I'm a web developer, data scientis  with a diverse educational background in economics and mathematics. I hold a Bachelor's degree in economie, a Web Development and data science using python Certifications. My work experience i`ve work in a organization developing adatabase infrastructure aswell as creatin kpi dashboards using powerBi, also autamatize multiple extractions using power shell, azure storage, tranformed the data with azure fnctions and a python script to later load in the Kpis Dashboard",education:{degree:"economic and mathematics",university:"Universidad Complutense Madrid",graduationYear:"2027",honors:"",relevantCourses:["Econometric","Finace","Advanced microeconomics and macroeconomics","PGC acounting"]},workExperience:[{startDate:"2013",endDate:"Present",company:"Tech Solutions Inc.",position:"Web Developer",description:"As a key member of the development team, I have contributed to various projects, from creating interactive web applications to optimizing database performance."},{startDate:"2012",endDate:"2013",company:"Self-employed",position:"Freelance Web Developer",description:"During my freelancing period, I collaborated with clients from diverse industries, delivering tailor-made websites that met their unique needs and goals."}],skills:["HTML5","CSS3","JavaScript","React","Node.js","Express.js","MongoDB","RESTful API","Git","Frontend and Backend Development"],projects:[{title:"E-commerce Website",description:"Designed and developed a feature-rich e-commerce platform with advanced product search, user reviews, and a secure payment system, resulting in a 30% increase in sales for the client.",link:"__blank",preview:"https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww&w=500"},{title:"Blog Platform",description:"Created a customizable blog platform with dynamic content creation, user authentication, comment functionality, and social media integration, leading to a 50% growth in user engagement.",link:"__blank",preview:"https://plus.unsplash.com/premium_photo-1684581214880-2043e5bc8b8b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070"},{title:"Portfolio Website",description:"Built a professional portfolio website to showcase my web development skills and projects. The site features a clean, responsive design and highlights my work as a developer.",link:"__blank",preview:"https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2071"}]},s=(n,r,e="p")=>{const t=document.createElement("ul");return t.classList.add(r),n.forEach(o=>{let i=document.createElement("li");if(e==="")i.innerHTML+=o,t.appendChild(i);else{let c=document.createElement(e);c.textContent=o,i.appendChild(c),t.appendChild(i)}}),t},h=(n,r)=>{const e=document.createElement("header"),t=document.createElement("h1");t.textContent=n.name,e.appendChild(t);const o=document.createElement("nav"),i=s(["About me","Education","Experience","Projects"],"header-nav-ul","a");o.appendChild(i),o.querySelectorAll("a").forEach(a=>{a.setAttribute("href",`#${a.innerText.replace(/\s+/g,"").toLowerCase()}`)}),e.appendChild(o),r.append(e)},l=(n,r,e)=>{const t=document.createElement("section");t.classList.add(r),t.id=r,n.forEach(o=>{t.appendChild(o)}),e.appendChild(t)},f=(n,r)=>{const e=document.createElement("h2");e.textContent="About Me";const t=document.createElement("img");t.setAttribute("class","avatar"),t.setAttribute("src",n.avatar);const o=s(n.skills,"aboutme-skills","p"),i=document.createElement("p");i.textContent=n.aboutMe;const c=document.createElement("p");c.textContent=n.address;const a=document.createElement("a");a.setAttribute("href","mailto:"+n.email),a.innerText="Contact me",l([e,t,o,i,c,a],"aboutme",r)},b=(n,r,e,t)=>`<img src="${n}" alt="${r}" website="">
    <h3>${r}</h3>
    <p>${t}</p>
    <a href="${e}">Know more...</a>`,v=n=>{let r=[];return n.forEach(e=>{const t=b(e.preview,e.title,e.link,e.description);r.push(t)}),r},x=(n,r)=>{const e=document.createElement("h2");e.textContent="Recent Projects";const t=n.projects,o=v(t),i=s(o,"projects-ul","");l([e,i],"projects",r)},g=(n,r,e,t,o)=>`<h3>${n} - ${r}</h3>
    <h4>${e}</h4>
    <h4>${t}</h4>
    <p>${o}</p>`,w=n=>{let r=[];return n.forEach(e=>{const t=g(e.startDate,e.endDate,e.company,e.position,e.description);r.push(t)}),r},m=(n,r)=>{const e=document.createElement("h2");e.textContent="Work Experience";const t=n.workExperience,o=s(w(t),"experience-ul","");l([e,o],"experience",r)},C=(n,r)=>{const e=document.createElement("h2");e.textContent="Education";const t=document.createElement("h3");t.textContent=n.education.degree;const o=document.createElement("h4");o.textContent=n.education.university;const i=document.createElement("h3");i.innerText="Relevant Courses";const c=s(n.education.relevantCourses,"relevantCourses-ul");l([e,t,o,i,c],"education",r)},u=(n,r,e,t)=>{n.removeChild(n.childNodes[0]),button.textContent=r,expBool?m(e,n):C(e,n)},E=(n,r)=>{const e=document.querySelector("#content");let t=!0;n.addEventListener("click",()=>{t?(t=!1,u(e,"Show experience",r)):(t=!0,u(e,"Show education",r))})},y=(n,r)=>{const e=document.createElement("main");f(n,e);const t=document.createElement("div");t.className="change-button";const o=document.createElement("button");o.setAttribute("class","change"),o.textContent="Show education",t.appendChild(o),e.appendChild(t);const i=document.createElement("div");i.setAttribute("id","content"),m(n,i),e.appendChild(i),x(n,e),r.appendChild(e),E(o,n)},$=()=>`
    <p>©️ Created by QuantMike</p>
  `,D=n=>{const r=document.createElement("footer");r.innerHTML=$(),n.appendChild(r)},d=document.querySelector("#app");h(p,d);y(p,d);D(d);
