// Import GSAP library
const gsap = window.gsap

// Navigation function
function navigate(sectionId) {
    // Remove active class from all sections and nav items
    document.querySelectorAll(".section").forEach((sec) => sec.classList.remove("active"))
    document.querySelectorAll(".nav-item").forEach((nav) => nav.classList.remove("active"))

    // Add active class to target section and nav item
    const activeSection = document.getElementById(sectionId)
    const activeNavItem = document.querySelector(`[onclick="navigate('${sectionId}')"]`)

    activeSection.classList.add("active")
    if (activeNavItem) activeNavItem.classList.add("active")

    // GSAP animation for smooth transition
    gsap.fromTo(activeSection, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })

    // Section-specific animations
    setTimeout(() => {
        animateSectionElements(sectionId)
    }, 200)

    // Close mobile menu if open
    const mobileNav = document.getElementById("mobileNav")
    if (mobileNav.classList.contains("active")) {
        mobileNav.classList.remove("active")
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" })
}

// Section-specific animations
function animateSectionElements(sectionId) {
    switch (sectionId) {
        case "home":
            animateHome()
            break
        case "about":
            animateAbout()
            break
        case "skills":
            animateSkills()
            break
        case "projects":
            animateProjects()
            break
        case "certificates":
            animateCertificates()
            break
        case "experience":
            animateExperience()
            break
        case "articles":
            animateArticles()
            break
        case "contact":
            animateContact()
            break
    }
}

// Home section animations
function animateHome() {
    gsap.fromTo(
        ".hero-title .title-line",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
    )

    gsap.fromTo(
        ".hero-description",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: "power2.out" },
    )

    gsap.fromTo(
        ".stat-item",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, delay: 0.8, ease: "back.out(1.7)" },
    )

    gsap.fromTo(
        ".hero-actions button",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 1, ease: "power2.out" },
    )

    gsap.fromTo(
        ".code-preview",
        { opacity: 0, x: 50, rotationY: 15 },
        { opacity: 1, x: 0, rotationY: 0, duration: 1, delay: 0.4, ease: "power2.out" },
    )
}

// About section animations
function animateAbout() {
    gsap.fromTo(
        ".about-image",
        { opacity: 0, scale: 0.8, rotation: -10 },
        { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "back.out(1.7)" },
    )

    gsap.fromTo(
        ".highlight-item",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.2, delay: 0.3, ease: "power2.out" },
    )

    gsap.fromTo(
        ".about-actions > *",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.8, ease: "power2.out" },
    )
}

// Skills section animations
function animateSkills() {
    gsap.fromTo(
        ".category-item",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
    )

    // Animate skill bars
    setTimeout(() => {
        document.querySelectorAll(".skill-progress").forEach((bar) => {
            const width = bar.getAttribute("data-width")
            gsap.to(bar, { width: width + "%", duration: 1.5, ease: "power2.out" })
        })
    }, 500)
}

// Projects section animations
function animateProjects() {
    gsap.fromTo(
        ".filter-btn",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
    )

    gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.1, delay: 0.3, ease: "back.out(1.7)" },
    )
}

// Certificates section animations
function animateCertificates() {
    gsap.fromTo(
        ".certificate-card",
        { opacity: 0, y: 30, rotationX: 15 },
        { opacity: 1, y: 0, rotationX: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
    )
}

// Experience section animations
function animateExperience() {
    gsap.fromTo(
        ".experience-item",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
    )

    gsap.fromTo(
        ".experience-marker",
        { scale: 0 },
        { scale: 1, duration: 0.6, stagger: 0.2, delay: 0.3, ease: "back.out(1.7)" },
    )
}

// Articles section animations
function animateArticles() {
    gsap.fromTo(
        ".article-card",
        { opacity: 0, y: 30, rotationY: 10 },
        { opacity: 1, y: 0, rotationY: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
    )
}

// Contact section animations
function animateContact() {
    gsap.fromTo(
        ".contact-item",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
    )

    gsap.fromTo(
        ".contact-form-wrapper",
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.2, ease: "power2.out" },
    )
}

// Skills category switching
function initSkillsInteraction() {
    const categoryItems = document.querySelectorAll(".category-item")
    const skillGroups = document.querySelectorAll(".skill-group")

    categoryItems.forEach((item) => {
        item.addEventListener("click", () => {
            const category = item.getAttribute("data-category")

            // Remove active class from all categories and groups
            categoryItems.forEach((cat) => cat.classList.remove("active"))
            skillGroups.forEach((group) => group.classList.remove("active"))

            // Add active class to clicked category and corresponding group
            item.classList.add("active")
            document.querySelector(`[data-group="${category}"]`).classList.add("active")

            // Animate skill bars
            setTimeout(() => {
                document.querySelectorAll(`[data-group="${category}"] .skill-progress`).forEach((bar) => {
                    const width = bar.getAttribute("data-width")
                    gsap.fromTo(bar, { width: "0%" }, { width: width + "%", duration: 1.5, ease: "power2.out" })
                })
            }, 100)
        })
    })
}

// Project filtering
function initProjectFiltering() {
    const filterBtns = document.querySelectorAll(".filter-btn")
    const projectCards = document.querySelectorAll(".project-card")

    filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const filter = btn.getAttribute("data-filter")

            // Remove active class from all filter buttons
            filterBtns.forEach((b) => b.classList.remove("active"))
            btn.classList.add("active")

            // Filter projects
            projectCards.forEach((card) => {
                const category = card.getAttribute("data-category")

                if (filter === "all" || category === filter) {
                    gsap.to(card, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" })
                    card.style.display = "block"
                } else {
                    gsap.to(card, {
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.3,
                        ease: "power2.out",
                        onComplete: () => {
                            card.style.display = "none"
                        },
                    })
                }
            })
        })
    })
}

// Contact form handling
function initContactForm() {
    const form = document.getElementById("contactForm")

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        // Get form data
        const formData = new FormData(form)
        const data = Object.fromEntries(formData)

        // Simulate form submission
        const submitBtn = form.querySelector('button[type="submit"]')
        const originalText = submitBtn.innerHTML

        submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>'
        submitBtn.disabled = true

        setTimeout(() => {
            submitBtn.innerHTML = '<span>Message Sent!</span><i class="fas fa-check"></i>'
            submitBtn.style.background = "var(--success-color)"

            setTimeout(() => {
                submitBtn.innerHTML = originalText
                submitBtn.disabled = false
                submitBtn.style.background = ""
                form.reset()
            }, 2000)
        }, 2000)
    })
}

// Dark mode toggle
function toggleMode() {
    document.body.classList.toggle("dark-mode")

    // Save preference to localStorage
    const isDarkMode = document.body.classList.contains("dark-mode")
    localStorage.setItem("darkMode", isDarkMode)

    // Animate toggle button
    const toggleBtn = document.querySelector(".toggle-btn")
    gsap.to(toggleBtn, { rotation: 360, duration: 0.6, ease: "power2.out" })
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileNav = document.getElementById("mobileNav")
    mobileNav.classList.toggle("active")

    // Animate mobile menu
    if (mobileNav.classList.contains("active")) {
        gsap.fromTo(mobileNav, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" })
    }
}

// Parallax effect for floating elements
function initParallaxEffect() {
    const floatingElements = document.querySelectorAll(".float-element")

    window.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX / window.innerWidth
        const mouseY = e.clientY / window.innerHeight

        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.5
            const x = (mouseX - 0.5) * speed * 50
            const y = (mouseY - 0.5) * speed * 50

            gsap.to(element, {
                x: x,
                y: y,
                duration: 1,
                ease: "power2.out",
            })
        })
    })
}

// Scroll progress indicator
function initScrollProgress() {
    const progressBar = document.createElement("div")
    progressBar.className = "scroll-progress"
    progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    z-index: 9999;
    transition: width 0.3s ease;
  `
    document.body.appendChild(progressBar)

    window.addEventListener("scroll", () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        progressBar.style.width = scrolled + "%"
    })
}

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
    // Load dark mode preference
    const savedDarkMode = localStorage.getItem("darkMode")
    if (savedDarkMode === "true") {
        document.body.classList.add("dark-mode")
    }

    // Initialize interactions
    initSkillsInteraction()
    initProjectFiltering()
    initContactForm()
    initParallaxEffect()
    initScrollProgress()

    // Initial animation for home section
    setTimeout(() => {
        animateHome()
    }, 500)

    // Add intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const elements = entry.target.querySelectorAll(
                    ".about-card, .skill-category, .project-card, .certificate-card, .experience-item, .article-card, .contact-item",
                )
                if (elements.length > 0) {
                    gsap.fromTo(
                        elements,
                        { opacity: 0, y: 30 },
                        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
                    )
                }
            }
        })
    }, observerOptions)

    // Observe all sections
    document.querySelectorAll(".section").forEach((section) => {
        observer.observe(section)
    })

    // Add hover animations for interactive elements
    document.querySelectorAll(".project-card, .certificate-card, .article-card, .contact-item").forEach((card) => {
        card.addEventListener("mouseenter", function () {
            gsap.to(this, { y: -5, duration: 0.3, ease: "power2.out" })
        })

        card.addEventListener("mouseleave", function () {
            gsap.to(this, { y: 0, duration: 0.3, ease: "power2.out" })
        })
    })

    // Add click animations for buttons
    document.querySelectorAll(".btn-primary-custom, .btn-secondary-custom, .filter-btn").forEach((btn) => {
        btn.addEventListener("click", function (e) {
            // Create ripple effect
            const ripple = document.createElement("span")
            const rect = this.getBoundingClientRect()
            const size = Math.max(rect.width, rect.height)
            const x = e.clientX - rect.left - size / 2
            const y = e.clientY - rect.top - size / 2

            ripple.style.width = ripple.style.height = size + "px"
            ripple.style.left = x + "px"
            ripple.style.top = y + "px"
            ripple.classList.add("ripple")

            this.appendChild(ripple)

            setTimeout(() => {
                ripple.remove()
            }, 600)
        })
    })

    // Typing animation for hero title
    const heroTitle = document.querySelector(".hero-title")
    if (heroTitle) {
        const titleLines = heroTitle.querySelectorAll(".title-line")
        titleLines.forEach((line, index) => {
            const text = line.textContent
            line.textContent = ""

            setTimeout(() => {
                let i = 0
                const typeWriter = () => {
                    if (i < text.length) {
                        line.textContent += text.charAt(i)
                        i++
                        setTimeout(typeWriter, 100)
                    }
                }
                typeWriter()
            }, index * 800)
        })
    }
})

// Add CSS for ripple effect
const style = document.createElement("style")
style.textContent = `
    .btn-primary-custom,
    .btn-secondary-custom,
    .filter-btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
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
    
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        z-index: 9999;
        transition: width 0.3s ease;
    }
`
document.head.appendChild(style)

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    })
})

// Add loading animation
window.addEventListener("load", () => {
    // Animate page elements on load
    gsap.fromTo("header", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out" })

    // Add stagger animation to navigation items
    gsap.fromTo(
        ".nav-item",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.5, ease: "power2.out" },
    )
})

// Add resize handler for responsive adjustments
window.addEventListener("resize", () => {
    // Close mobile menu on resize
    const mobileNav = document.getElementById("mobileNav")
    if (window.innerWidth > 992 && mobileNav.classList.contains("active")) {
        mobileNav.classList.remove("active")
    }
})

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout)
            func(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}

// Add smooth scroll behavior for better UX
document.documentElement.style.scrollBehavior = "smooth"
