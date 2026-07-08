/* ── ARTICLES DATA (unchanged) ── */
const articles = [
  { title:"How Certificate-Based Authentication Works",date:"May 11, 2025",tags:["Security","CAS++"],cat:"Security",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkzIf0bixYDk4VYW9mx3uRzOaAlf5WrNtJmWrDwkC6GvBIEQGnnQT7VcgWv1g9SohvZ94&usqp=CAU",url:"https://dev.to/dhanush_kaving_f68718582/how-certificate-based-authentication-works-explained-with-cas-and-smart-cards-4fme"},
  { title:"Why Math and Programming Are My Best Friends",date:"Aug 2025",tags:["Math","Problem Solving"],cat:"Mathematics",img:"https://i.pinimg.com/1200x/89/75/a0/8975a0590ec3afb603781fe9dd44734a.jpg",url:"https://medium.com/@dhanushkavinofficial/why-math-and-programming-are-my-best-friends-1db77ecb0da8"},
  { title:"Understanding Process Management in Operating Systems",date:"Jul 16, 2025",tags:["OS","Systems"],cat:"OS",img:"https://i.pinimg.com/736x/eb/58/c1/eb58c120f8a34114597a645689308a10.jpg",url:"https://medium.com/@dhanushkavinofficial/understanding-process-management-in-operating-systems-9bd9300a223d"},
  { title:"Implementing JWT Authentication in Java",date:"Jul 11, 2025",tags:["Java","Security"],cat:"Java",img:"https://i.pinimg.com/736x/f6/b7/7f/f6b77f354db412f9bd3c2aad879f1cd1.jpg",url:"https://medium.com/@dhanushkavinofficial/securing-java-applications-a-practical-guide-to-implementing-jwt-authentication-0f6f7555eb82"},
  { title:"Understanding UML in Low-Level Design (LLD)",date:"Aug 15, 2025",tags:["LLD","UML"],cat:"Design",img:"https://miro.medium.com/v2/resize:fit:1100/format:webp/0*FNbIgRGvsI2JEjfK.jpg",url:"https://medium.com/@dhanushkavinofficial/understanding-uml-in-low-level-design-lld-a-complete-guide-for-developers-bc5f8bbc09d0"},
  { title:"Why JavaScript Code Logic Feels… Different?",date:"Aug 3, 2025",tags:["JavaScript","Dev"],cat:"JavaScript",img:"https://i.pinimg.com/1200x/f8/ec/99/f8ec99fafcb9e61ec32cce42b880c48d.jpg",url:"https://medium.com/@dhanushkavinofficial/why-javascript-code-logic-feels-different-5631da62211f"},
  { title:"Java x F1: Building a High-Performance System",date:"Sep 1, 2025",tags:["Java","Systems"],cat:"Java",img:"https://i.pinimg.com/1200x/31/8b/51/318b51facc5796c8ec561703ad848076.jpg",url:"https://medium.com/@dhanushkavinofficial/java-x-f1-building-a-high-performance-system-race-engineering-edition-10b80ab6dee3"},
  { title:"Why C is Essential for Understanding OS Concepts",date:"Aug 26, 2025",tags:["C","OS"],cat:"OS",img:"https://i.pinimg.com/1200x/2a/f5/c3/2af5c31e165838241e48eeb733a5006b.jpg",url:"https://medium.com/@dhanushkavinofficial/why-learning-c-programming-is-essential-for-understanding-operating-system-concepts-06d7eef87ec9"},
  { title:"Multithreading in Java, Explained Plainly",date:"Nov 25, 2025",tags:["Java","Threads"],cat:"Java",img:"https://i.pinimg.com/736x/e5/9a/52/e59a522e5010613ae986ede14b8916a3.jpg",url:"https://medium.com/@dhanushkavinofficial/multithreading-in-java-explained-like-youre-15-but-in-a-way-a7c6d148edb3"},
  { title:"Math: The Silent Force Behind Every SDE's Success",date:"Dec 8, 2025",tags:["Math","SDE"],cat:"Mathematics",img:"https://i.pinimg.com/736x/17/c4/2f/17c42f496478fa4413a9bf0c0cbdb142.jpg",url:"https://medium.com/@dhanushkavinofficial/math-the-silent-force-behind-every-software-engineers-success-c7cd71a477e5"},
  { title:"C++: The Language Everyone Thinks Is Dead",date:"Sep 11, 2025",tags:["C++","Systems"],cat:"Systems",img:"https://i.pinimg.com/736x/2d/35/4d/2d354ddd22d021b27fbd652ce54f738d.jpg",url:"https://medium.com/@dhanushkavinofficial/c-the-language-everyone-thinks-is-dead-but-actually-rules-the-world-0f2ee437095e"},
  { title:"LLD vs HLD: Mastering Software Engineering",date:"Sep 15, 2025",tags:["LLD","HLD"],cat:"Design",img:"https://i.pinimg.com/1200x/44/c9/2c/44c92cb68d2c5ed569d2cbb96691b958.jpg",url:"https://medium.com/@dhanushkavinofficial/mastering-software-engineering-from-small-modules-to-big-systems-2ff209928b87"},
  { title:"Why AI Can't Replace Skilled Software Engineers",date:"Sep 26, 2025",tags:["AI","SDE"],cat:"Career",img:"https://i.pinimg.com/736x/7f/2c/67/7f2c6745f75061036b16f43c8145ba75.jpg",url:"https://medium.com/@dhanushkavinofficial/why-ai-cant-replace-skilled-software-engineers-the-under-the-hood-truth-a0d6ff824659"},
  { title:"Srinivasa Ramanujan: The Mathematics Behind the Modern World",date:"Jan 12, 2026",tags:["Math","History"],cat:"Mathematics",img:"https://miro.medium.com/v2/resize:fit:500/format:webp/0*R7XnHz9bMPOCf03M.jpg",url:"https://medium.com/@dhanushkavinofficial/srinivasa-ramanujan-the-mathematics-behind-the-modern-world-8e777484b8e5"}
];

function renderArticles() {
  document.getElementById('articlesGrid').innerHTML = articles.map(a => `
    <a class="art-card" href="${a.url}" target="_blank" rel="noopener">
      <div class="art-img-bg" style="background-image:url('${a.img}')">
        <div class="art-cat">${a.cat}</div>
      </div>
      <div class="art-body">
        <div class="art-title">${a.title}</div>
        <div class="art-meta"><span><i class="fas fa-calendar" style="margin-right:5px"></i>${a.date}</span></div>
        <div class="art-tags">${a.tags.map(t=>`<span class="art-tag">${t}</span>`).join('')}</div>
      </div>
    </a>
  `).join('');
}
renderArticles();
