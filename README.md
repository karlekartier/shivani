# Shivani Portfolio

Professional portfolio website for **A. Shivani**, a Medical Writer and Pharm.D graduate. This project is designed to showcase professional achievements, research projects, and skills in a clean, modern, and medically-themed interface.

## 🚀 Features

- **Modern & Responsive UI**: Built with a mobile-first approach using Tailwind CSS and Bootstrap 5 grid.
- **Dark Mode Support**: Fully integrated theme toggle (Light/Dark) with persistent state.
- **Medical Industry Aesthetics**: Clean typography, curated color palettes (Blue/Purple/Teal), and custom illustrations.
- **Interactive Elements**:
    - Smooth scrolling navigation.
    - Hover effects on cards and buttons.
    - Filterable "Research Projects" section.
    - Animated "Get in Touch" hero section.
- **Contact Integration**: functional contact form layout (frontend only).

## 🛠️ Tech Stack

- **Core**: HTML5, Vanilla JavaScript
- **Styling**:
    - [Tailwind CSS v4](https://tailwindcss.com/) (Utility-first styling)
    - [Bootstrap 5](https://getbootstrap.com/) (Grid system & Components)
    - Custom CSS (`assets/css/style.css`, `assets/css/contact.css`)
- **Icons**:
    - [FontAwesome 6](https://fontawesome.com/)
    - [Bootstrap Icons](https://icons.getbootstrap.com/)
    - [Boxicons](https://boxicons.com/)
- **Fonts**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Google Fonts)

## 📂 Project Structure

```text
├── assets/
│   ├── css/
│   │   ├── contact.css      # Styles specific to Contact page
│   │   ├── error.css        # Styles for 404 page
│   │   ├── style.css        # Main custom overrides and global styles
│   │   └── tailwind.css     # Compiled Tailwind output (DO NOT EDIT DIRECTLY)
│   ├── img/
│   │   ├── designs/         # Decorative SVGs and backgrounds
│   │   ├── icons/           # Social media and UI icons
│   │   └── storyset/        # Main illustrations (Hero, About, etc.)
│   ├── js/
│   │   ├── main.js          # Core logic (Theme toggle, Scroll, Filters)
│   │   └── hero-animation.js # Canvas animations
│   └── pdf/                 # Downloadable resources (Resume)
├── src/
│   └── input.css            # Tailwind source directive file
├── index.html               # Main Portfolio Page
├── contact.html             # Contact Page
├── 404.html                 # Custom Error Page
├── package.json             # NPM dependencies and scripts
└── tailwind.config.js       # Tailwind configuration
```

## 💻 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended) installed on your machine.

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/shivani-portfolio.git
    cd shivani-portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

### Development

To start the Tailwind CSS watcher (compiles styles in real-time):

```bash
npm run watch:css
```

To run a local static server:

```bash
npm start
```

Open `http://localhost:3000` (or the port shown in terminal) to view the project.

## 🎨 Customization Guide

### Themes & Colors
- **Colors**: Defined in `tailwind.config.js` and CSS variables in `style.css`.
- **Dark Mode**: Controlled via `data-bs-theme="dark"` attribute on the `<html>` tag. Logic resides in `assets/js/main.js`.

### Adding Projects
1.  Open `index.html`.
2.  Navigate to the `#projects` section.
3.  Duplicate an existing `.project-card` block.
4.  Update the image, title, description, and tags.

### Modifying Contact Info
- Update email and location details in `contact.html`.
- Form submission logic requires a backend integration (currently frontend demo).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
*Built with ❤️ for Medical Professionals.*
