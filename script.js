// ===================================
// GreenNest Landing Page JavaScript
// ===================================

document.addEventListener(
	"DOMContentLoaded",
	() => {
		// Initialize all interactive features
		initMobileMenu();
		initScrollEffects();
		initProductFilters();
		initTestimonialSlider();
		initNewsletterForm();
		initSmoothScrolling();
		initScrollToTop();
		initNavbarScroll();
	}
);

// ===================================
// Mobile Menu Toggle
// ===================================

function initMobileMenu() {
	const menuToggle = document.querySelector(
		".mobile-menu-toggle"
	);
	const navMenu =
		document.querySelector(".nav-menu");
	const body = document.body;

	if (!menuToggle || !navMenu) return;

	menuToggle.addEventListener("click", () => {
		navMenu.classList.toggle("active");
		menuToggle.classList.toggle("active");
		body.style.overflow =
			navMenu.classList.contains("active")
				? "hidden"
				: "";

		// Animate hamburger icon
		const spans =
			menuToggle.querySelectorAll("span");
		if (menuToggle.classList.contains("active")) {
			spans[0].style.transform =
				"rotate(45deg) translate(8px, 8px)";
			spans[1].style.opacity = "0";
			spans[2].style.transform =
				"rotate(-45deg) translate(7px, -6px)";
		} else {
			spans[0].style.transform = "none";
			spans[1].style.opacity = "1";
			spans[2].style.transform = "none";
		}
	});

	// Close menu when clicking on a link
	const navLinks = navMenu.querySelectorAll("a");
	navLinks.forEach((link) => {
		link.addEventListener("click", () => {
			if (window.innerWidth <= 768) {
				navMenu.classList.remove("active");
				menuToggle.classList.remove("active");
				body.style.overflow = "";

				const spans =
					menuToggle.querySelectorAll("span");
				spans[0].style.transform = "none";
				spans[1].style.opacity = "1";
				spans[2].style.transform = "none";
			}
		});
	});

	// Close menu when clicking outside
	document.addEventListener("click", (e) => {
		if (
			!navMenu.contains(e.target) &&
			!menuToggle.contains(e.target) &&
			navMenu.classList.contains("active")
		) {
			navMenu.classList.remove("active");
			menuToggle.classList.remove("active");
			body.style.overflow = "";

			const spans =
				menuToggle.querySelectorAll("span");
			spans[0].style.transform = "none";
			spans[1].style.opacity = "1";
			spans[2].style.transform = "none";
		}
	});
}

// ===================================
// Navbar Scroll Effect
// ===================================

function initNavbarScroll() {
	const navbar =
		document.getElementById("navbar");
	if (!navbar) return;

	let lastScroll = 0;

	window.addEventListener("scroll", () => {
		const currentScroll = window.pageYOffset;

		// Add shadow when scrolled
		if (currentScroll > 50) {
			navbar.style.boxShadow =
				"0 4px 16px rgba(0, 0, 0, 0.1)";
		} else {
			navbar.style.boxShadow =
				"0 2px 8px rgba(0, 0, 0, 0.08)";
		}

		lastScroll = currentScroll;
	});
}

// ===================================
// Smooth Scrolling
// ===================================

function initSmoothScrolling() {
	document
		.querySelectorAll('a[href^="#"]')
		.forEach((anchor) => {
			anchor.addEventListener(
				"click",
				function (e) {
					const href = this.getAttribute("href");

					// Skip if href is just "#"
					if (href === "#" || !href) return;

					const target =
						document.querySelector(href);
					if (!target) return;

					e.preventDefault();

					const navbarHeight =
						document.querySelector(".navbar")
							?.offsetHeight || 0;
					const targetPosition =
						target.getBoundingClientRect().top +
						window.pageYOffset -
						navbarHeight;

					window.scrollTo({
						top: targetPosition,
						behavior: "smooth",
					});
				}
			);
		});
}

// ===================================
// Scroll to Top Button
// ===================================

function initScrollToTop() {
	const scrollBtn = document.querySelector(
		".scroll-to-top"
	);
	if (!scrollBtn) return;

	window.addEventListener("scroll", () => {
		if (window.pageYOffset > 500) {
			scrollBtn.classList.add("visible");
		} else {
			scrollBtn.classList.remove("visible");
		}
	});

	scrollBtn.addEventListener("click", () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});
}

// ===================================
// Product Filters
// ===================================

function initProductFilters() {
	const filterBtns = document.querySelectorAll(
		".filter-btn"
	);
	const productCards = document.querySelectorAll(
		".product-card"
	);

	if (!filterBtns.length || !productCards.length)
		return;

	filterBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			// Update active button
			filterBtns.forEach((b) =>
				b.classList.remove("active")
			);
			btn.classList.add("active");

			const filter = btn.getAttribute(
				"data-filter"
			);

			// Filter products with animation
			productCards.forEach((card) => {
				const categories = card.getAttribute(
					"data-category"
				);

				if (
					filter === "all" ||
					categories.includes(filter)
				) {
					card.style.display = "block";
					setTimeout(() => {
						card.style.opacity = "1";
						card.style.transform =
							"translateY(0)";
					}, 10);
				} else {
					card.style.opacity = "0";
					card.style.transform =
						"translateY(20px)";
					setTimeout(() => {
						card.style.display = "none";
					}, 300);
				}
			});
		});
	});

	// Add to cart button functionality
	const addToCartBtns = document.querySelectorAll(
		".btn-product"
	);
	addToCartBtns.forEach((btn) => {
		btn.addEventListener("click", function (e) {
			e.preventDefault();

			// Get product name
			const productCard = this.closest(
				".product-card"
			);
			const productName =
				productCard.querySelector(
					"h3"
				).textContent;

			// Change button text temporarily
			const originalText = this.textContent;
			this.textContent = "✓ Added!";
			this.style.backgroundColor = "#4a6b4f";

			// Show notification
			showNotification(
				`${productName} added to cart!`
			);

			// Reset button after delay
			setTimeout(() => {
				this.textContent = originalText;
				this.style.backgroundColor = "";
			}, 2000);
		});
	});
}

// ===================================
// Testimonial Slider
// ===================================

function initTestimonialSlider() {
	const slider = document.querySelector(
		".testimonials-slider"
	);
	const cards = document.querySelectorAll(
		".testimonial-card"
	);
	const dotsContainer = document.querySelector(
		".slider-dots"
	);
	const prevBtn = document.querySelector(
		".slider-btn.prev"
	);
	const nextBtn = document.querySelector(
		".slider-btn.next"
	);

	if (!slider || !cards.length) return;

	let currentIndex = 0;
	let isAnimating = false;

	// Create dots for mobile/tablet view
	cards.forEach((_, index) => {
		const dot = document.createElement("div");
		dot.classList.add("slider-dot");
		if (index === 0) dot.classList.add("active");
		dot.addEventListener("click", () =>
			goToSlide(index)
		);
		dotsContainer.appendChild(dot);
	});

	const dots = document.querySelectorAll(
		".slider-dot"
	);

	function updateDots() {
		dots.forEach((dot, index) => {
			dot.classList.toggle(
				"active",
				index === currentIndex
			);
		});
	}

	function goToSlide(index) {
		if (isAnimating) return;
		isAnimating = true;

		currentIndex = index;

		// Only apply transform on mobile/tablet
		if (window.innerWidth <= 768) {
			// Use scrollLeft for smooth sliding
			const cardWidth = cards[0].offsetWidth;
			slider.scrollTo({
				left: cardWidth * currentIndex,
				behavior: "smooth",
			});
		}

		updateDots();

		setTimeout(() => {
			isAnimating = false;
		}, 500);
	}

	function nextSlide() {
		const nextIndex =
			(currentIndex + 1) % cards.length;
		goToSlide(nextIndex);
	}

	function prevSlide() {
		const prevIndex =
			(currentIndex - 1 + cards.length) %
			cards.length;
		goToSlide(prevIndex);
	}

	if (prevBtn)
		prevBtn.addEventListener("click", prevSlide);
	if (nextBtn)
		nextBtn.addEventListener("click", nextSlide);

	// Auto-play slider on mobile
	let autoPlayInterval;

	function startAutoPlay() {
		if (window.innerWidth <= 768) {
			autoPlayInterval = setInterval(
				nextSlide,
				5000
			);
		}
	}

	function stopAutoPlay() {
		clearInterval(autoPlayInterval);
	}

	startAutoPlay();

	// Pause on hover
	slider.addEventListener(
		"mouseenter",
		stopAutoPlay
	);
	slider.addEventListener(
		"mouseleave",
		startAutoPlay
	);

	// Track manual scroll to update dots
	let scrollTimeout;
	slider.addEventListener("scroll", () => {
		// Only on mobile/tablet
		if (window.innerWidth <= 768) {
			clearTimeout(scrollTimeout);
			scrollTimeout = setTimeout(() => {
				// Calculate which slide is currently visible
				const scrollPosition = slider.scrollLeft;
				const cardWidth = cards[0].offsetWidth;
				const newIndex = Math.round(
					scrollPosition / cardWidth
				);

				if (
					newIndex !== currentIndex &&
					newIndex >= 0 &&
					newIndex < cards.length
				) {
					currentIndex = newIndex;
					updateDots();
				}
			}, 100);
		}
	});

	// Handle window resize
	let resizeTimer;
	window.addEventListener("resize", () => {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(() => {
			stopAutoPlay();
			if (window.innerWidth <= 768) {
				goToSlide(currentIndex);
				startAutoPlay();
			} else {
				// Reset scroll position for desktop view
				slider.scrollLeft = 0;
			}
		}, 250);
	});
}

// ===================================
// Newsletter Form
// ===================================

function initNewsletterForm() {
	const form = document.querySelector(
		".newsletter-form"
	);
	if (!form) return;

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		const emailInput = form.querySelector(
			'input[type="email"]'
		);
		const email = emailInput.value;
		const submitBtn = form.querySelector(
			'button[type="submit"]'
		);

		// Validate email
		if (!isValidEmail(email)) {
			showNotification(
				"Please enter a valid email address.",
				"error"
			);
			return;
		}

		// Simulate API call
		submitBtn.textContent = "Subscribing...";
		submitBtn.disabled = true;

		setTimeout(() => {
			// Success
			showNotification(
				"Thank you for subscribing! Check your email for confirmation.",
				"success"
			);
			emailInput.value = "";
			submitBtn.textContent = "Subscribe";
			submitBtn.disabled = false;
		}, 1500);
	});
}

// ===================================
// Scroll Animations (Intersection Observer)
// ===================================

function initScrollEffects() {
	const observerOptions = {
		threshold: 0.1,
		rootMargin: "0px 0px -100px 0px",
	};

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("fade-in");
					observer.unobserve(entry.target);
				}
			});
		},
		observerOptions
	);

	// Observe elements
	const elementsToAnimate =
		document.querySelectorAll(`
        .product-card,
        .feature-card,
        .testimonial-card,
        .blog-card,
        .impact-stats
    `);

	elementsToAnimate.forEach((el) => {
		el.style.opacity = "0";
		el.style.transform = "translateY(30px)";
		observer.observe(el);
	});
}

// ===================================
// Utility Functions
// ===================================

function isValidEmail(email) {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email);
}

function showNotification(
	message,
	type = "success"
) {
	// Create notification element
	const notification =
		document.createElement("div");
	notification.className = `notification notification-${type}`;
	notification.textContent = message;

	// Style notification
	Object.assign(notification.style, {
		position: "fixed",
		top: "100px",
		right: "20px",
		padding: "1rem 1.5rem",
		borderRadius: "12px",
		backgroundColor:
			type === "success" ? "#6b8f71" : "#dc2626",
		color: "white",
		fontWeight: "600",
		boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
		zIndex: "9999",
		opacity: "0",
		transform: "translateX(400px)",
		transition: "all 0.3s ease",
		maxWidth: "350px",
		fontSize: "0.95rem",
	});

	document.body.appendChild(notification);

	// Animate in
	setTimeout(() => {
		notification.style.opacity = "1";
		notification.style.transform =
			"translateX(0)";
	}, 10);

	// Remove after delay
	setTimeout(() => {
		notification.style.opacity = "0";
		notification.style.transform =
			"translateX(400px)";
		setTimeout(() => {
			document.body.removeChild(notification);
		}, 300);
	}, 4000);
}

// ===================================
// Performance Optimizations
// ===================================

// Debounce function for scroll/resize events
function debounce(func, wait) {
	let timeout;
	return function executedFunction(...args) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
}

// Lazy loading for images (native lazy loading is already implemented in HTML)
// This is a fallback for older browsers
if ("loading" in HTMLImageElement.prototype) {
	// Browser supports native lazy loading
	console.log("Native lazy loading supported");
} else {
	// Fallback for older browsers
	const images = document.querySelectorAll(
		'img[loading="lazy"]'
	);

	const imageObserver = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const img = entry.target;
					img.src = img.dataset.src || img.src;
					img.classList.add("loaded");
					observer.unobserve(img);
				}
			});
		}
	);

	images.forEach((img) =>
		imageObserver.observe(img)
	);
}

// ===================================
// Analytics & Tracking (Placeholder)
// ===================================

function trackEvent(
	category,
	action,
	label = ""
) {
	// Placeholder for analytics tracking
	// Replace with your analytics service (Google Analytics, Plausible, etc.)
	console.log(
		`Event tracked: ${category} - ${action} - ${label}`
	);
}

// Track CTA clicks
document
	.querySelectorAll(
		".btn-primary, .btn-secondary"
	)
	.forEach((btn) => {
		btn.addEventListener("click", function () {
			const buttonText = this.textContent.trim();
			trackEvent("CTA", "Click", buttonText);
		});
	});

// Track product interactions
document
	.querySelectorAll(".product-card")
	.forEach((card) => {
		card.addEventListener("click", function (e) {
			if (!e.target.closest(".btn-product")) {
				const productName =
					this.querySelector("h3").textContent;
				trackEvent(
					"Product",
					"View",
					productName
				);
			}
		});
	});

// ===================================
// Accessibility Enhancements
// ===================================

// Add keyboard navigation for slider
document.addEventListener("keydown", (e) => {
	if (e.key === "ArrowLeft") {
		document
			.querySelector(".slider-btn.prev")
			?.click();
	} else if (e.key === "ArrowRight") {
		document
			.querySelector(".slider-btn.next")
			?.click();
	}
});

// Announce dynamic content changes to screen readers
function announceToScreenReader(message) {
	const announcement =
		document.createElement("div");
	announcement.setAttribute("role", "status");
	announcement.setAttribute(
		"aria-live",
		"polite"
	);
	announcement.className = "sr-only";
	announcement.textContent = message;
	document.body.appendChild(announcement);

	setTimeout(() => {
		document.body.removeChild(announcement);
	}, 1000);
}

// ===================================
// Console Welcome Message
// ===================================

console.log(
	`
%c🌿 Welcome to GreenNest! 🌿
%cMade with 💚 for the planet
%cCare for your home, care for the planet.
`,
	"color: #6b8f71; font-size: 20px; font-weight: bold;",
	"color: #8fbc8f; font-size: 14px;",
	"color: #5d4e37; font-size: 12px; font-style: italic;"
);
