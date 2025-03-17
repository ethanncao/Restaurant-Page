const description = "A cozy, modern bistro specializing in wood-fired dishes and fresh, herb-infused flavors. Ember & Thyme offers a warm ambiance with an open kitchen concept, where guests can watch chefs craft rustic yet refined meals. The menu highlights seasonal ingredients, with a focus on flame-grilled meats, roasted vegetables, and house-made artisanal bread. Perfect for date nights or casual gatherings, the restaurant pairs its dishes with a curated selection of wines and handcrafted cocktails."

export function homePage() {
  const content = document.getElementById('content');

  //appending a header to content
  const header = document.createElement('div');
  header.id = 'header';
  content.appendChild(header);

  //appending a title to the header
  const restaurantName = document.createElement('div');
  restaurantName.id = 'title';
  restaurantName.innerHTML = "Ember & Thyme";
  header.appendChild(restaurantName);

  //appending a desc to the header
  const desc = document.createElement('div');
  desc.id = 'desc';
  desc.innerHTML = description;
  header.appendChild(desc);

  //appending hours to content
  const hours = document.createElement('div');
  hours.id = 'hours';
  content.appendChild(hours);

  //appending hours title and info to hours
  const hoursTitle = document.createElement('div');
  const hoursOne = document.createElement('div');
  const hoursTwo = document.createElement('div');
  const hoursThree = document.createElement('div');
  hoursTitle.id = 'title';

  hoursTitle.innerHTML = "Hours";
  hoursOne.innerHTML = "Monday - Thursday: 11:00 AM - 9:00 PM";
  hoursTwo.innerHTML = "Friday - Saturday: 11:00AM - 10:30 PM";
  hoursThree.innerHTML = "Sunday: 10:00 AM - 8:00 PM (Brunch served from 10:00AM - 2:00 PM)";

  hours.appendChild(hoursTitle);
  hours.appendChild(hoursOne);
  hours.appendChild(hoursTwo);
  hours.appendChild(hoursThree);

  //appending an address holder to content
  const address = document.createElement('div');
  address.id = 'address';
  content.appendChild(address);

  //adding a title to address
  const addressTitle = document.createElement('div');
  addressTitle.id = 'title';
  addressTitle.innerHTML = "Address";
  address.appendChild(addressTitle);

  //adding the address and append to address
  const addy = document.createElement('div');
  addy.innerHTML = "2475 Willowcrest Ave, Portland, OR 97205";
  address.appendChild(addy);
};