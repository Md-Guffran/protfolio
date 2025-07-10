// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Typing Animation
const texts = [
    "Full Stack Web Developer",
    "Machine Learning Engineer", 
    "MERN Stack Developer",
    "Data Analyst",
    "Java Developer",
    "AI & ML Engineer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typingText');

function typeText() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeText, typeSpeed);
}

// Start typing animation
typeText();

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Skills data
const skills = [
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'JavaScript', icon: 'fab fa-js-square' },
    { name: 'MongoDB', icon: 'fas fa-database' },
    { name: 'Express', icon: 'fas fa-server' },
    { name: 'Next.js', icon: 'fas fa-code' },
    { name: 'TensorFlow', icon: 'fas fa-brain' },
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'AWS', icon: 'fab fa-aws' },
    { name: 'Firebase', icon: 'fas fa-fire' },
    { name: 'GraphQL', icon: 'fas fa-project-diagram' },
    { name: 'TypeScript', icon: 'fas fa-code' }
];

// Projects data
const projects = [
    {
        title: "Red Bus Clone",
        description: "Integrated RedBus clone with eco-friendly travel options, carbon footprint calculator, multilingual support, and seat booking system.",
        tech: "MEAN Stack (MongoDB, Express, Angular, Node.js)",
        image: "https://images.pexels.com/photos/1117485/pexels-photo-1117485.jpeg?auto=compress&cs=tinysrgb&w=400",
        github: "https://github.com/Md-Guffran/REDBUS-CLONE",
        live: "https://redbus-clone-mean.netlify.app/"
    },
    {
        title: "Gemini AI Clone",
        description: "Full-stack web application replicating core Gemini AI functionalities with intelligent chatbot capabilities.",
        tech: "MERN Stack, TypeScript, Google API",
        image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
        github: "https://github.com/Md-Guffran/gemini_ai_clone",
        live: "https://geminiaiguffran.netlify.app"
    },
    {
        title: "AI Resume Builder",
        description: "AI-powered resume generation tool with personalization features and streamlined creation process.",
        tech: "Next.js, Node.js, MongoDB",
        image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400",
        github: "https://github.com/Md-Guffran/AI-Resume-Builder",
        live: "https://ai-resume-builder-nine-mu.vercel.app/"
    },
    {
        title: "Student Tracker",
        description: "Comprehensive tracking system for daily routine, expenses, and study plans with interactive UI.",
        tech: "MERN Stack, Supabase",
        image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400",
        github: "https://github.com/Md-Guffran/Student-Tracker",
        live: "https://student-tracker-liard.vercel.app/"
    },
    {
        title: "Chat App Backend",
        description: "Scalable backend service for real-time chat application with authentication and message history.",
        tech: "Node.js, Express.js, MongoDB, Socket.io, JWT",
        image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
        github: "https://github.com/Md-Guffran/Chat-App-Backend",
        live: null
    },
    {
        title: "Stock Price Prediction",
        description: "Machine learning application predicting future stock prices using historical market data and regression models.",
        tech: "Python, Pandas, Scikit-learn, Matplotlib",
        image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400",
        github: "https://github.com/Md-Guffran/stockPricePrediction",
        live: null
    },
    {
  title: "Airline Dataset Analysis",
  description: "Performed EDA on passenger data from multiple airlines to identify trends, seasonal patterns, and performance metrics (Udemy project).",
  tech: "NumPy, Pandas, Matplotlib, Seaborn",
  image: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=400",
  github: "https://github.com/Md-Guffran/Airlines-Data-Analysis",
  live: null
},
{
  title: "Credit Card Fraud Detection",
  description: "Built a model using anomaly detection and classification techniques to identify fraudulent transactions in financial datasets.",
  tech: "Python, Scikit-learn, Pandas, NumPy, Matplotlib",
  image: "https://images.pexels.com/photos/4968381/pexels-photo-4968381.jpeg?auto=compress&cs=tinysrgb&w=400",
  github: "https://github.com/Md-Guffran/creditCardFraudDetection",
  live: null
}

];

// Populate skills
function populateSkills() {
    const skillsTrack = document.getElementById('skillsTrack');
    const duplicatedSkills = [...skills, ...skills]; // Duplicate for seamless loop
    
    duplicatedSkills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <i class="${skill.icon}"></i>
            <h6>${skill.name}</h6>
        `;
        skillsTrack.appendChild(skillItem);
    });
}

// Populate projects
function populateProjects() {
    const projectsContainer = document.getElementById('projectsContainer');
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'col-lg-4 col-md-6 mb-4';
        projectCard.setAttribute('data-aos', 'fade-up');
        projectCard.setAttribute('data-aos-delay', (index * 100).toString());
        
        projectCard.innerHTML = `
            <div class="project-card">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="project-overlay">
                        <div class="project-links">
                            <a href="${project.github}" target="_blank" class="btn btn-outline-light">
                                <i class="fab fa-github me-2"></i>Code
                            </a>
                            ${project.live ? `
                                <a href="${project.live}" target="_blank" class="btn btn-primary">
                                    <i class="fas fa-external-link-alt me-2"></i>Live
                                </a>
                            ` : ''}
                        </div>
                    </div>
                </div>
                <div class="project-content">
                    <h5>${project.title}</h5>
                    <p>${project.description}</p>
                    <span class="tech-badge">${project.tech}</span>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    populateSkills();
    populateProjects();
    
    // Add loading animation to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.getAttribute('href') && this.getAttribute('href').startsWith('http')) {
                this.classList.add('loading');
                setTimeout(() => {
                    this.classList.remove('loading');
                }, 2000);
            }
        });
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    const heroContent = document.querySelector('.hero-content');
    
    if (heroSection && heroContent) {
        const rate = scrolled * -0.5;
        heroContent.style.transform = `translateY(${rate}px)`;
    }
});

// Add hover effects to project cards
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) rotateX(5deg)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) rotateX(0)';
            });
        });
    }, 1000);
});

// Preloader (optional)
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add some interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add ripple effect to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);