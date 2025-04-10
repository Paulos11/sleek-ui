/**
 * Sleek UI - A lightweight, accessible component library
 * Version: 1.0.0
 * License: MIT
 */

// Import component modules
import "./components/modal.js";
import "./components/dropdown.js";
import "./components/form.js";
import "./components/toast.js";
import "./components/accordion.js";
import "./components/tabs.js";

// Main Sleek UI namespace
const SleekUI = {
  version: "1.0.0",

  // Component registry
  components: {},

  /**
   * Initialize all Sleek UI components
   */
  init() {
    document.addEventListener("DOMContentLoaded", () => {
      // Initialize modals
      this.initModals();

      // Initialize dropdowns
      this.initDropdowns();

      // Initialize forms
      this.initForms();

      // Initialize toasts
      this.initToasts();

      // Initialize accordions
      this.initAccordions();

      // Initialize tabs
      this.initTabs();

      // Dispatch initialization event
      document.dispatchEvent(new CustomEvent("sleek:initialized"));
    });
  },

  /**
   * Initialize modal components
   */
  initModals() {
    const modals = document.querySelectorAll(".sleek-modal");

    modals.forEach((modal) => {
      if (!modal.sleekModal) {
        const modalInstance = new SleekModal(modal);
        modal.sleekModal = modalInstance;
        this.components[modal.id] = modalInstance;
      }
    });
  },

  /**
   * Initialize dropdown components
   */
  initDropdowns() {
    const dropdowns = document.querySelectorAll(".sleek-dropdown");

    dropdowns.forEach((dropdown) => {
      if (!dropdown.sleekDropdown) {
        // Dropdown initialization will be implemented in dropdown.js
        console.log("Dropdown initialization pending");
      }
    });
  },

  /**
   * Initialize form components
   */
  initForms() {
    const forms = document.querySelectorAll(".sleek-form");

    forms.forEach((form) => {
      if (!form.sleekForm) {
        // Form initialization will be implemented in form.js
        console.log("Form initialization pending");
      }
    });
  },

  /**
   * Initialize toast components
   */
  initToasts() {
    // Toast initialization will be implemented in toast.js
    console.log("Toast initialization pending");
  },

  /**
   * Initialize accordion components
   */
  initAccordions() {
    const accordions = document.querySelectorAll(".sleek-accordion");

    accordions.forEach((accordion) => {
      if (!accordion.sleekAccordion) {
        // Accordion initialization will be implemented in accordion.js
        console.log("Accordion initialization pending");
      }
    });
  },

  /**
   * Initialize tab components
   */
  initTabs() {
    const tabs = document.querySelectorAll(".sleek-tabs");

    tabs.forEach((tab) => {
      if (!tab.sleekTabs) {
        // Tabs initialization will be implemented in tabs.js
        console.log("Tabs initialization pending");
      }
    });
  },

  /**
   * Create a toast notification
   * @param {Object} options - Toast options
   * @param {string} options.message - Toast message
   * @param {string} options.type - Toast type (success, error, warning, info)
   * @param {number} options.duration - Duration in milliseconds
   * @returns {Object} - Toast instance
   */
  toast(options) {
    // Toast creation will be implemented in toast.js
    console.log("Toast creation pending", options);
    return null;
  },

  /**
   * Get a component instance by ID
   * @param {string} id - Component ID
   * @returns {Object|null} - Component instance
   */
  getComponent(id) {
    return this.components[id] || null;
  },
};

// Initialize Sleek UI
SleekUI.init();

// Make Sleek UI available globally
window.SleekUI = SleekUI;

// Export for module usage
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = SleekUI;
}
