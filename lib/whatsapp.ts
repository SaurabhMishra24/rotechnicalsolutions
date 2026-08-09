export interface WhatsAppBookingParams {
  name: string;
  phone: string;
  city: string;
  brand: string;
  serviceType: string;
  problem: string;
  preferredTime: string;
}

export function generateWhatsAppLink(params: WhatsAppBookingParams): string {
  const phoneNumber = '919876543210'; // Dummy phone number as requested
  
  const text = `Hello RO Technical Solutions,

I would like to book an RO service.

• Name: ${params.name || 'Not provided'}
• Phone: ${params.phone || 'Not provided'}
• City/Area: ${params.city || 'Nagpur'}
• RO Brand: ${params.brand || 'Kent / Aquaguard / Other'}
• Service Needed: ${params.serviceType || 'RO Repair'}
• Problem Details: ${params.problem || 'Standard Service'}
• Preferred Time: ${params.preferredTime || 'Today (As soon as possible)'}

Please assign a certified technician to my location.`;

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
}

export const DUMMY_CONTACT = {
  phoneDisplay: '+91 98765 43210',
  phoneRaw: '+919876543210',
  whatsappDisplay: '+91 98765 43210',
  whatsappRaw: '919876543210',
  email: 'support@rotechnicalsolutions.com',
  address: 'Plot 42, Central Avenue, Coffee House Square, Dharampeth, Nagpur, MH 440010',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41727289569!2d79.00247659999999!3d21.1458004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d15c0c541a!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
};
