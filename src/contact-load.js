export function contactPage() {
  const content = document.getElementById('content');

  const contactUs = document.createElement('div');
  contactUs.id = 'contact-content';
  contactUs.innerHTML = "Contact Us";
  content.appendChild(contactUs);
}