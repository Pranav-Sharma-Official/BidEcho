// 3D Flip Effect
function flipCard() {
    const card = document.getElementById('card');
    card.classList.toggle('flipped');
}

// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size between 5px and 15px
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration (10s to 20s)
        const duration = Math.random() * 10 + 10;
        particle.style.animationDuration = `${duration}s`;
        
        // Random delay
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Mouse Move 3D Tilt Effect
document.addEventListener('mousemove', (e) => {
    const card = document.getElementById('card');
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    if (!card.classList.contains('flipped')) {
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    } else {
        card.style.transform = `rotateY(${180 - xAxis}deg) rotateX(${yAxis}deg)`;
    }
});

// Reset position when mouse leaves
document.addEventListener('mouseleave', () => {
    const card = document.getElementById('card');
    if (!card.classList.contains('flipped')) {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    } else {
        card.style.transform = 'rotateY(180deg) rotateX(0deg)';
    }
});

// Form submission handling
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formType = this.parentElement.classList.contains('front') ? 'Login' : 'Register';
        let isValid = true;
        
        // Validate all required fields
        this.querySelectorAll('input[required]').forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.border = '1px solid red';
                setTimeout(() => {
                    input.style.border = 'none';
                }, 2000);
            }
        });

        if (isValid) {
            alert(`${formType} successful!\n\n(In a real app, this would send data to server)`);
            // Reset form after successful submission
            if (formType === 'Register') {
                flipCard(); // Flip back to login after registration
            }
            this.reset();
        } else {
            alert('Please fill all required fields');
        }

        window.location.href='index.html'
    });
});

// Initialize particles
createParticles();