document.addEventListener('DOMContentLoaded', () => {
  // Loading screen
  const loadingScreen = document.querySelector('.loading-screen');
  setTimeout(() => {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }, 3000);

  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger-menu');
  const verticalNav = document.querySelector('.vertical-nav');
  const mobileOverlay = document.querySelector('.mobile-nav-overlay');

  hamburger.addEventListener('click', () => {
    verticalNav.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
  });

  mobileOverlay.addEventListener('click', () => {
    verticalNav.classList.remove('active');
    mobileOverlay.classList.remove('active');
  });

  // Typewriter effect
  const roles = ["Frontend Developer", "UI/UX Designer", "Problem Solver", "Creative Thinker"];
  let roleIndex = 0;

  function typeRoles() {
    const element = document.getElementById("role-text");
    const currentRole = roles[roleIndex];
    let charIndex = 0;
    
    element.textContent = "";
    
    const typingInterval = setInterval(() => {
      if (charIndex < currentRole.length) {
        element.textContent += currentRole.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(eraseRole, 2000);
      }
    }, 100);
  }

  function eraseRole() {
    const element = document.getElementById("role-text");
    const currentText = element.textContent;
    
    if (currentText.length > 0) {
      element.textContent = currentText.substring(0, currentText.length - 1);
      setTimeout(eraseRole, 50);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRoles, 500);
    }
  }

  typeRoles();

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        verticalNav.classList.remove('active');
        mobileOverlay.classList.remove('active');
      }
    });
  });


document.querySelector('.resume-btn').addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'Resume/huncho-resume.pdf'; // Path to your PDF
  link.download = 'huncho-resume.pdf';     // Optional: custom download name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});


  // Scroll animations
  const animateElements = document.querySelectorAll('.animate, .fade-in, .slide-up, .slide-left, .slide-right, .zoom-in, .rotate-in, .flip-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        entry.target.classList.remove('exit');
      } else {
        entry.target.classList.add('exit');
        entry.target.classList.remove('active');
      }
    });
  }, {
    threshold: 0.2
  });

  animateElements.forEach(element => {
    observer.observe(element);
  });

  // Active nav link based on scroll position
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Project data
  const projects = {
    client: [
      {
        jobType: "Remote",
        projectName: "TechCorp E-commerce Platform",
        duration: "Jan–Apr 2024",
        hours: "320",
        price: "$12,500",
        techStack: ["React", "Node.js", "MongoDB", "Stripe"],
        description: "Built a custom e-commerce solution with payment integration and admin dashboard.",
        features: [
          "Stripe payment processing",
          "Product management system",
          "User authentication",
          "Inventory tracking",
          "Order fulfillment system"
        ],
        testimonial: "Exceptional work delivered on time with great attention to detail.",
        client: "TechCorp CEO",
        previewLink: "https://notegpt.io/ai-story-generator",
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=300&h=200&auto=format&fit=crop"
      },
      {
        jobType: "Onsite",
        projectName: "Healthcare Management System",
        duration: "Sep–Dec 2023",
        hours: "450",
        price: "$18,000",
        techStack: ["Angular", "Firebase", "Python", "Django"],
        description: "Developed a comprehensive healthcare management system for clinics.",
        features: [
          "Patient records management",
          "Appointment scheduling",
          "Billing system",
          "HIPAA compliant",
          "Telemedicine integration"
        ],
        testimonial: "Transformed our clinic operations with this efficient system.",
        client: "MediCare Director",
        previewLink: "https://www.feedough.com/ai-product-requirements-document-prd-generator/",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&h=200&auto=format&fit=crop"
      },
      {
        jobType: "Hybrid",
        projectName: "Real Estate Portal",
        duration: "May–Aug 2023",
        hours: "280",
        price: "$10,000",
        techStack: ["Vue.js", "Express", "PostgreSQL", "Mapbox"],
        description: "Created a property listing platform with interactive maps and search filters.",
        features: [
          "Interactive property maps",
          "Advanced search filters",
          "Virtual tours",
          "Agent management",
          "Lead generation"
        ],
        testimonial: "Our sales increased by 40% after launching this platform.",
        client: "Prime Properties",
        previewLink: "https://jit.dev/i/psoxa1u7bbrolpqdecgr",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&auto=format&fit=crop"
      },
      {
        jobType: "Remote",
        projectName: "E-commerce landingpage",
        duration: "Feb–Apr 2023",
        hours: "380",
        price: "$15,000",
        techStack: ["React", "GraphQL", "MongoDB", "AWS"],
        description: "Built a landingpage for an e-commerce company (NexTech)",
        features: [
          "Course management",
          "Video streaming",
          "Interactive quizzes",
          "Progress tracking",
          "Discussion forums"
        ],
        testimonial: "Working with Huncho on this project was a game-changer for our startup. He understood our vision immediately and executed with precision, delivering ahead of schedule while maintaining the highest quality standards. He even added by stating out compettion and how to be ahead.",
        client: "Founder & CEO, NexTech",
        previewLink: "https://css.glass/",
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=300&h=200&auto=format&fit=crop"
      },
      {
        jobType: "Remote",
        projectName: "Online Shoping platform",
        duration: "jan–jun 2023",
        hours: "980",
        price: "$26,000",
        techStack: ["MongoDB", "GraphQL", "AWS"],
        description: "Built a landingpage for an online shoping brand company (VESTRA)",
        features: [
          "Course management",
          "Video streaming",
          "Interactive quizzes",
          "Progress tracking",
          "Discussion forums"
        ],
        testimonial: "Working with Huncho on this project was a game-changer for our startup. He understood our vision immediately and executed with precision, delivering ahead of schedule while maintaining the highest quality standards. He even added by stating out compettion and how to be ahead.",
        client: "Founder & CEO, VESTRA",
        previewLink: "#",
        image: "Assets/vestra.jpg"
      }
    ],
    personal: [
      {
        projectName: "AI Image Generator",
        duration: "Feb–Mar 2024",
        techStack: ["Python", "TensorFlow", "Flask", "React"],
        description: "Machine learning model that generates unique artwork based on text prompts.",
        features: [
          "Custom trained GAN model",
          "Web interface for interaction",
          "Style transfer capabilities",
          "Image upscaling",
          "Batch processing"
        ],
        previewLink: "#",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&auto=format&fit=crop"
      },
      {
        projectName: "Task Management App",
        duration: "Nov–Dec 2023",
        techStack: ["React Native", "Firebase", "Redux"],
        description: "Cross-platform task management application with real-time sync.",
        features: [
          "Task organization",
          "Priority levels",
          "Due date reminders",
          "Collaboration",
          "Offline support"
        ],
        previewLink: "#",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&auto=format&fit=crop"
      },
      {
        projectName: "Weather Dashboard",
        duration: "Aug 2023",
        techStack: ["JavaScript", "OpenWeather API", "Chart.js"],
        description: "Interactive weather dashboard with forecasts and historical data.",
        features: [
          "5-day forecast",
          "Hourly predictions",
          "Historical data",
          "Multiple locations",
          "Custom alerts"
        ],
        previewLink: "#",
        image: "https://images.unsplash.com/photo-1601134467661-3d775b99c335?w=300&h=200&auto=format&fit=crop"
      },
      {
        projectName: "Recipe Finder",
        duration: "Jun 2023",
        techStack: ["Vue.js", "Spoonacular API", "IndexedDB"],
        description: "Application to discover recipes based on available ingredients.",
        features: [
          "Ingredient search",
          "Nutritional information",
          "Meal planning",
          "Shopping list",
          "Favorite recipes"
        ],
        previewLink: "#",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&auto=format&fit=crop"
      }
    ]
  };

  // DOM elements
  const overlay = document.querySelector('.overlay');
  const overlayContent = document.querySelector('.overlay-content');
  const closeBtn = document.querySelector('.close-btn');
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  const clientCarousel = document.querySelector('.client-projects');
  const personalCarousel = document.querySelector('.personal-projects');

  // Initialize carousels
  function initializeCarousel(carousel, projectType) {
    const carouselTrack = document.createElement('div');
    carouselTrack.className = 'carousel-track';
    carousel.innerHTML = '';
    carousel.appendChild(carouselTrack);

    // Duplicate projects for seamless looping
    const projectsToShow = [...projects[projectType], ...projects[projectType]];
    
    projectsToShow.forEach((project, index) => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <div class="card-content">
          <img src="${project.image}" alt="${project.projectName}">
          <div class="card-title">${project.projectName}</div>
          <div class="info-btn-container">
            <button class="info-btn">View Details</button>
          </div>
        </div>
      `;
      carouselTrack.appendChild(card);
    });

    // Add event listeners to info buttons
    const infoButtons = carouselTrack.querySelectorAll('.info-btn');
    infoButtons.forEach((button, index) => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        const projectIndex = index % projects[projectType].length;
        showProjectDetails(projects[projectType][projectIndex]);
      });
    });
  }

  // Show project details in overlay
  function showProjectDetails(project) {
    document.querySelector('.job-type').textContent = project.jobType || 'N/A';
    document.querySelector('.project-name').textContent = project.projectName;
    document.querySelector('.duration').textContent = project.duration;
    document.querySelector('.hours').textContent = project.hours || 'N/A';
    document.querySelector('.price').textContent = project.price || 'N/A';
    
    const techStackContainer = document.querySelector('.tech-stack');
    techStackContainer.innerHTML = '';
    project.techStack.forEach(tech => {
      const tag = document.createElement('span');
      tag.className = 'tech-tag';
      tag.textContent = tech;
      techStackContainer.appendChild(tag);
    });
    
    document.querySelector('.description').textContent = project.description;
    
    const featuresContainer = document.querySelector('.features');
    featuresContainer.innerHTML = '';
    project.features.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      featuresContainer.appendChild(li);
    });
    
    if (project.testimonial) {
      document.querySelector('.testimonial').innerHTML = 
        `"${project.testimonial}"<cite>- ${project.client}</cite>`;
      document.querySelector('.testimonial').style.display = 'block';
    } else {
      document.querySelector('.testimonial').style.display = 'none';
    }
    
    document.querySelector('.preview-btn').href = project.previewLink;
    
    // Show overlay
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Initialize both carousels
  initializeCarousel(clientCarousel, 'client');
  initializeCarousel(personalCarousel, 'personal');

  // Toggle between client and personal projects
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.dataset.target;
      
      toggleButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      document.querySelectorAll('.carousel').forEach(carousel => {
        carousel.classList.remove('active');
        if (carousel.classList.contains(`${target}-projects`)) {
          carousel.classList.add('active');
        }
      });
    });
  });

  // Close overlay
  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  // Close overlay when clicking outside content
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  // Close overlay with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      overlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  // Pause animation on hover
  document.querySelectorAll('.carousel-track').forEach(track => {
    track.addEventListener('mouseenter', () => {
      track.style.animationPlayState = 'paused';
    });
    
    track.addEventListener('mouseleave', () => {
      track.style.animationPlayState = 'running';
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
      const track = document.querySelector('.track');
      const cards = document.querySelectorAll('.card');
      const dots = document.querySelectorAll('.dot');
      const prevBtn = document.querySelector('.prev');
      const nextBtn = document.querySelector('.next');
      let currentIndex = 0;
      const cardCount = cards.length;
      
      function updateCarousel() {
        const offset = -currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
        
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentIndex);
        });
      }
      
      function goToIndex(index) {
        currentIndex = index;
        updateCarousel();
      }
      
      function nextSlide() {
        currentIndex = (currentIndex + 1) % cardCount;
        updateCarousel();
      }
      
      function prevSlide() {
        currentIndex = (currentIndex - 1 + cardCount) % cardCount;
        updateCarousel();
      }
      
      dots.forEach(dot => {
        dot.addEventListener('click', () => {
          goToIndex(parseInt(dot.dataset.index));
        });
      });
      
      nextBtn.addEventListener('click', nextSlide);
      prevBtn.addEventListener('click', prevSlide);
      
      // Auto-rotate every 6 seconds
      let interval = setInterval(nextSlide, 6000);
      
      // Pause on hover
      track.addEventListener('mouseenter', () => {
        clearInterval(interval);
      });
      
      track.addEventListener('mouseleave', () => {
        interval = setInterval(nextSlide, 6000);
      });
      
      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
      });
    });


  
  const form = document.querySelector('.contact-form');
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Show loading state
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      // Send form using EmailJS
      emailjs.sendForm("service_ik95d7o", "template_i964qko", this)
        .then(() => {
          // Success
          submitBtn.textContent = 'Message Sent!';
          submitBtn.style.backgroundColor = '#4CAF50';

          // Reset form after delay
          setTimeout(() => {
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.style.backgroundColor = '';
            submitBtn.disabled = false;
          }, 2000);
        })
        .catch((error) => {
          alert("❌ Failed to send. Please try again.");
          console.error("EmailJS Error:", error);
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        });
    });

    // Input validation styling
    document.querySelectorAll('input, textarea, select').forEach(input => {
      input.addEventListener('input', function () {
        if (this.checkValidity()) {
          this.style.borderColor = '#00ffe1';
        } else {
          this.style.borderColor = '#ff4444';
        }
      });
    });