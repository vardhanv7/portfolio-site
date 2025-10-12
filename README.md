# Modern Personal Portfolio Website

A stylish, modern personal portfolio website inspired by contemporary design trends with animated transitions, colorful backgrounds, and interactive elements.

## Features

### ✨ Design & Animations
- **Modern Gradient Backgrounds** - Beautiful gradient color schemes for each section
- **Smooth Animations** - CSS animations and transitions throughout the site
- **Responsive Design** - Fully responsive layout that works on all devices
- **Interactive Elements** - Hover effects, scroll animations, and dynamic content

### 🧭 Navigation
- **Fixed Navbar** - Stays visible while scrolling with backdrop blur effect
- **Smooth Scrolling** - Seamless navigation between sections
- **Mobile Menu** - Hamburger menu for mobile devices
- **Active Link Highlighting** - Current section is highlighted in navigation

### 📱 Sections

#### 1. Home Section
- **Dynamic Role Animation** - Typing animation that cycles through different roles
- **Floating Shapes** - Animated geometric shapes with parallax effect
- **Call-to-Action Buttons** - Styled buttons with hover effects
- **Scroll Indicator** - Animated arrow indicating scrollable content

#### 2. About Me Section
- **Personal Information** - Brief introduction and background
- **Statistics Cards** - Animated counters showing achievements
- **Profile Image Placeholder** - Ready for your photo

#### 3. Skills Section
- **Animated Progress Bars** - Skills displayed as animated progress bars
- **Categorized Skills** - Frontend and Backend development skills
- **Color-coded Progress** - Visual representation of skill levels

#### 4. Certificates Section
- **Animated Carousel** - Auto-rotating certificate showcase
- **Navigation Controls** - Previous/Next buttons for manual control
- **Certificate Cards** - Beautiful cards with icons and descriptions

#### 5. Projects Section
- **Project Grid** - Responsive grid layout for projects
- **Hover Effects** - Interactive overlays with links
- **Technology Tags** - Color-coded technology stack indicators
- **External Links** - Links to live projects and GitHub repositories

#### 6. Contact Section
- **Contact Form** - Fully functional form with validation
- **Real-time Validation** - Field validation with error messages
- **Social Media Links** - Styled social media icons
- **Contact Information** - Email, phone, and location details

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation
1. Download or clone this repository
2. Open `index.html` in your web browser
3. Customize the content with your personal information

### Customization

#### 1. Personal Information
Edit the following in `index.html`:
- Replace "Your Name" with your actual name
- Update the dynamic roles in `script.js` (around line 50)
- Modify the about me content
- Update contact information

#### 2. Skills
Update the skills section with your actual skills and proficiency levels:
```html
<div class="skill-item">
    <div class="skill-info">
        <span>Your Skill</span>
        <span>85%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-width="85%"></div>
    </div>
</div>
```

#### 3. Projects
Replace the sample projects with your actual projects:
```html
<div class="project-card">
    <div class="project-image">
        <div class="project-overlay">
            <div class="project-links">
                <a href="YOUR_LIVE_LINK" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <a href="YOUR_GITHUB_LINK" class="project-link">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <h3>Your Project Title</h3>
        <p>Your project description</p>
        <div class="project-tech">
            <span class="tech-tag">Technology</span>
        </div>
    </div>
</div>
```

#### 4. Certificates
Update the certificates carousel with your certifications:
```html
<div class="certificate-card">
    <div class="certificate-icon">
        <i class="fas fa-certificate"></i>
    </div>
    <h3>Your Certificate Title</h3>
    <p>Certificate description</p>
    <span class="certificate-date">2024</span>
</div>
```

#### 5. Colors and Styling
Modify the gradient backgrounds in `styles.css`:
```css
/* Example gradient modification */
.home {
    background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}
```

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## 🎨 Color Scheme

The portfolio uses a modern color palette with gradients:
- **Primary**: Purple to Blue gradients (#667eea to #764ba2)
- **Secondary**: Coral to Orange gradients (#ff6b6b to #ee5a24)
- **Accent**: Teal to Green gradients (#4ecdc4 to #44a08d)
- **Background**: Various gradient combinations for each section

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Features

- **CSS Grid & Flexbox** - Modern layout techniques
- **CSS Custom Properties** - Dynamic styling capabilities
- **Intersection Observer API** - Scroll-based animations
- **ES6+ JavaScript** - Modern JavaScript features
- **Font Awesome Icons** - Professional icon library
- **Google Fonts** - Poppins font family

## 📈 Performance Optimizations

- Throttled scroll events for smooth performance
- Optimized animations using CSS transforms
- Lazy loading of animations based on viewport
- Efficient DOM manipulation

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Your site will be automatically deployed
3. Custom domain can be added in Netlify settings

### Vercel
1. Connect your GitHub repository to Vercel
2. Deploy with zero configuration
3. Automatic deployments on code changes

## 📞 Support

If you need help customizing your portfolio:
1. Check the code comments for guidance
2. Modify the CSS variables for easy color changes
3. Update the JavaScript arrays for dynamic content
4. Test responsiveness on different devices

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding!** 🎉 Create an amazing portfolio that showcases your skills and personality.
