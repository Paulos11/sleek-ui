# Getting Started with Sleek UI

Welcome to Sleek UI, a lightweight, accessible component library for modern web projects. This guide will help you get started with using Sleek UI in your projects.

## Installation

You can use Sleek UI in your project in two ways:

### Option 1: Download the Files

1. Download the CSS and JavaScript files from the [GitHub repository](https://github.com/yourusername/sleek-ui).
2. Include them in your HTML:

```html
<link rel="stylesheet" href="path/to/sleek-ui/styles/main.css">
<script src="path/to/sleek-ui/js/main.js" defer></script>
```

### Option 2: Clone the Repository

```bash
git clone https://github.com/yourusername/sleek-ui.git
cd sleek-ui
npm install
```

## Usage

Once you've included the CSS and JavaScript files in your project, you can start using Sleek UI components.

### Basic Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Sleek UI Project</title>
  <link rel="stylesheet" href="path/to/sleek-ui/styles/main.css">
  <script src="path/to/sleek-ui/js/main.js" defer></script>
</head>
<body>
  <div class="container">
    <h1>Hello, Sleek UI!</h1>
    
    <button class="sleek-btn sleek-btn-primary">Primary Button</button>
    
    <button class="sleek-btn sleek-btn-secondary" data-sleek-modal-open="myModal">Open Modal</button>
    
    <div class="sleek-modal" id="myModal">
      <div class="sleek-modal-content">
        <div class="sleek-modal-header">
          <h4 class="sleek-modal-title">My Modal</h4>
          <button class="sleek-modal-close" data-sleek-modal-close aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <p>This is a modal dialog with some content.</p>
        <div class="sleek-modal-footer">
          <button class="sleek-btn sleek-btn-ghost" data-sleek-modal-close>Cancel</button>
          <button class="sleek-btn sleek-btn-primary">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```

## Components

Sleek UI includes several components that you can use in your projects:

### Buttons

```html
<button class="sleek-btn sleek-btn-primary">Primary Button</button>
<button class="sleek-btn sleek-btn-secondary">Secondary Button</button>
<button class="sleek-btn sleek-btn-ghost">Ghost Button</button>

<!-- Button Sizes -->
<button class="sleek-btn sleek-btn-primary sleek-btn-sm">Small</button>
<button class="sleek-btn sleek-btn-primary">Default</button>
<button class="sleek-btn sleek-btn-primary sleek-btn-lg">Large</button>

<!-- Button States -->
<button class="sleek-btn sleek-btn-primary sleek-btn-loading">Loading</button>
<button class="sleek-btn sleek-btn-primary" disabled>Disabled</button>
```

### Modals

```html
<!-- Button to open the modal -->
<button class="sleek-btn sleek-btn-primary" data-sleek-modal-open="myModal">Open Modal</button>

<!-- Modal component -->
<div class="sleek-modal" id="myModal">
  <div class="sleek-modal-content">
    <div class="sleek-modal-header">
      <h4 class="sleek-modal-title">Modal Title</h4>
      <button class="sleek-modal-close" data-sleek-modal-close aria-label="Close">
        <!-- Close icon -->
      </button>
    </div>
    <p>Modal content goes here...</p>
    <div class="sleek-modal-footer">
      <button class="sleek-btn sleek-btn-ghost" data-sleek-modal-close>Cancel</button>
      <button class="sleek-btn sleek-btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

### Forms

```html
<form class="sleek-form" id="myForm">
  <div class="sleek-form-group">
    <label class="sleek-form-label" for="name">Name <span class="sleek-form-required">*</span></label>
    <input class="sleek-form-control" type="text" id="name" name="name" required>
    <div class="sleek-form-feedback sleek-form-feedback-invalid">Please enter your name.</div>
  </div>
  
  <div class="sleek-form-group">
    <label class="sleek-form-label" for="email">Email <span class="sleek-form-required">*</span></label>
    <input class="sleek-form-control" type="email" id="email" name="email" required>
    <div class="sleek-form-feedback sleek-form-feedback-invalid">Please enter a valid email address.</div>
  </div>
  
  <div class="sleek-form-group">
    <label class="sleek-form-label" for="message">Message</label>
    <textarea class="sleek-form-control" id="message" name="message" rows="4"></textarea>
  </div>
  
  <button class="sleek-btn sleek-btn-primary" type="submit">Submit</button>
</form>
```

## JavaScript API

Sleek UI components can also be controlled via JavaScript:

### Modals

```javascript
// Get a modal instance
const modal = SleekUI.getComponent('myModal');

// Open a modal
modal.open();

// Close a modal
modal.close();

// Events
document.getElementById('myModal').addEventListener('sleek:modal:open', (event) => {
  console.log('Modal opened:', event.detail.modal);
});

document.getElementById('myModal').addEventListener('sleek:modal:close', (event) => {
  console.log('Modal closed:', event.detail.modal);
});
```

### Forms

```javascript
// Get a form instance
const form = SleekUI.getComponent('myForm');

// Validate all inputs
const isValid = form.validateAll();

// Reset the form
form.reset();

// Events
document.getElementById('myForm').addEventListener('sleek:form:submit', (event) => {
  console.log('Form submitted:', event.detail.form);
  console.log('Is valid:', event.detail.isValid);
});

document.getElementById('myForm').addEventListener('sleek:form:valid', (event) => {
  console.log('Input valid:', event.detail.input);
});

document.getElementById('myForm').addEventListener('sleek:form:invalid', (event) => {
  console.log('Input invalid:', event.detail.input);
  console.log('Error message:', event.detail.message);
});
```

## Customization

Sleek UI is designed to be customizable. You can modify the CSS variables in the `variables.css` file to match your project's design system:

```css
:root {
  /* Colors */
  --sleek-primary: #your-primary-color;
  --sleek-secondary: #your-secondary-color;
  
  /* Typography */
  --sleek-font-family: your-font-family;
  
  /* Etc. */
}
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.