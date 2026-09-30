// Centralized website configuration for Logic Break Solution

export const SITE_CONFIG = {
  // WhatsApp Configuration
  // Phone number formatted for WhatsApp API (no +, spaces, or dashes)
  whatsappNumber: '919994049254',
  
  // Display formatted phone number for UI labels
  whatsappDisplayPhone: '+91 99940 49254',

  // Contact Email
  contactEmail: 'hello@logicbreaksolution.com',

  // Client Counter Configuration
  // Default initial client count as required by specification
  initialClientCount: 15,

  // Backend API Base URL for live counter (overridable via VITE_API_URL env var)
  apiBaseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3001',
};
