/**
 * Site Configuration for Black & White Electrical (Paul Badenhorst)
 * 
 * Verified business details:
 * Black & White Electrical - 15 President Steyn St, Pretoria North
 * Cell: 071 213 8108 | Email: phbadenhorst@gmail.com
 */
const SITE_CONFIG = {
  businessName: "Black & White Electrical",
  ownerName: "Paul Badenhorst",
  title: "Approved Electrical Contractor",
  tagline: "Electrical Work in Black & White — Honest, Clear-Cut, No Grey Areas",
  subheading: "Prompt residential electrical repairs, fault finding, and official Certificates of Compliance (CoC) across Greater Pretoria from a trusted local craftsman.",

  // Contact details verified from directory listing & invoice
  contact: {
    // Primary phone for calls
    phoneDisplay: "071 213 8108",
    phoneTel: "+27712138108",

    // WhatsApp number
    whatsappNumber: "27712138108",
    whatsappDefaultMessage: "Hi Paul, I need assistance from Black & White Electrical for a property in Pretoria.",

    // Email address
    email: "phbadenhorst@gmail.com",

    // Physical base
    address: "15 President Steyn St, Pretoria North",
    baseRegion: "Pretoria North (Dispatching across all Pretoria & Surrounds)",

    // Operating hours
    hours: "Monday – Saturday: 07:00 – 18:00",
    emergencyAvailability: "Urgent callouts available across Greater Pretoria",
  },

  // Statutory Accreditation
  accreditation: {
    title: "Approved Electrical Contractor & Installation Electrician",
    registrationNotice: "Department of Employment & Labour Registered",
    standard: "SANS 10142-1 Wiring Code Compliant",
    cocAuthority: "Authorized to test, inspect, and issue official Certificates of Compliance (CoC) for property sales and transfers.",
  },

  // Service Areas across Greater Pretoria
  serviceRegions: [
    {
      name: "Pretoria North & Akasia (Home Base)",
      suburbs: ["Pretoria North", "Florauna", "Ninapark", "Dorandia", "Karenpark", "Wonderboom", "Annlin", "Theresapark", "Tileba"]
    },
    {
      name: "Pretoria East",
      suburbs: ["Faerie Glen", "Garsfontein", "Moreleta Park", "Lynnwood", "Waterkloof", "Menlyn", "Brooklyn", "Silver Lakes", "Constantia Park", "Elarduspark", "Equestria", "Wapadrand"]
    },
    {
      name: "Pretoria Moot & Central",
      suburbs: ["Rietfontein", "Wonderboom South", "Gezina", "Villieria", "Queenswood", "Capital Park", "Pretoria West"]
    },
    {
      name: "Centurion & Surrounds",
      suburbs: ["Wierda Park", "Eldoraigne", "Hennopspark", "Clubview", "Zwartkop", "Doringkloof"]
    }
  ],

  // Flattened list for quick suburb display
  serviceAreas: [
    "Pretoria North", "Faerie Glen", "Garsfontein", "Moreleta Park", "Florauna",
    "Lynnwood", "Waterkloof", "Menlyn", "Ninapark", "Wonderboom",
    "Brooklyn", "Silver Lakes", "Centurion", "Rietfontein", "Annlin",
    "Constantia Park", "Elarduspark", "Equestria", "Wapadrand", "Gezina"
  ],

  // Interactive Problem Selector issues
  problems: [
    {
      id: "tripping",
      label: "Power Keeps Tripping",
      badge: "Urgent",
      headline: "Earth Leakage or Main Breaker Tripping?",
      description: "A tripping breaker protects your home from fire and shock, but finding whether it's an appliance, geyser element, or faulty circuit requires systematic testing.",
      advice: "Try unplugging your kettle, microwave, and dishwasher first. If the switch still won't reset, call Paul immediately.",
      whatsappText: "Hi Paul, my power keeps tripping at home in Pretoria. Could you please assist with fault finding?"
    },
    {
      id: "coc",
      label: "Property Transfer CoC Needed",
      badge: "Home Sellers",
      headline: "Selling Your House? Need a Registered Electrical CoC?",
      description: "Transfer attorneys require a valid Certificate of Compliance before settlement. Paul conducts thorough, fair pre-transfer inspections, certifies compliant installations, and rectifies defects with no hidden surprises.",
      advice: "Book your inspection 2–3 weeks before target bond registration so any necessary rectifications can be completed smoothly.",
      whatsappText: "Hi Paul, I am selling my house in Pretoria and require an Electrical Certificate of Compliance (CoC) inspection from Black & White Electrical."
    },
    {
      id: "geyser",
      label: "Cold Geyser / Water Heater",
      badge: "High Priority",
      headline: "No Hot Water? Element or Thermostat Failure",
      description: "When the geyser circuit breaker hasn't tripped but water remains ice cold, the heating element or safety thermostat has usually burnt out. Paul diagnoses and repairs geyser electrical feeds safely.",
      advice: "Do not attempt to replace electrical elements without isolating the dedicated breaker at the distribution board.",
      whatsappText: "Hi Paul, our geyser has stopped heating up at our home in Pretoria. Are you available for a callout?"
    },
    {
      id: "outlets",
      label: "Dead Plugs, Switches or Lights",
      badge: "Standard Repair",
      headline: "Burnt Wall Outlets, Loose Switches, or Dead Lighting",
      description: "Sparks, buzzing noises, discolored socket plates, or rooms suddenly losing light indicate loose connections or fatigued wiring that must be made safe.",
      advice: "If you smell fishy burning or hear arcing (buzzing), switch off that circuit breaker immediately until Paul arrives.",
      whatsappText: "Hi Paul, I have a dead socket / light fitting issue at my place in Pretoria and would like to arrange a repair."
    },
    {
      id: "general",
      label: "General Installation & Upgrades",
      badge: "Upgrade",
      headline: "Distribution Board Tidying, Surge Protection & New Points",
      description: "Upgrade aging fuse boards to modern circuit breakers, install Eskom grid surge protectors, or add dedicated feeds for new appliances.",
      advice: "Modern surge arrestors protect sensitive TV, fridge, and computer electronics from destructive grid spikes.",
      whatsappText: "Hi Paul, I need an electrical upgrade / installation at my home in Pretoria. Let me know when you can quote or inspect."
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
}
