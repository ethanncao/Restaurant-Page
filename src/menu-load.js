export function menuPage() {
  const content = document.getElementById('content');

  //creating an appetizer holder to append to content
  const appetizers = document.createElement('div');
  appetizers.id = 'appetizers-content';
  appetizers.innerHTML = "Appetizers";
  content.appendChild(appetizers);

  //creating main dishes holder to append to content
  const mainDish = document.createElement('div');
  mainDish.id = 'main-dish-content';
  mainDish.innerHTML = "Main Dishes";
  content.appendChild(mainDish);

  //creating beverages
  const bev = document.createElement('div');
  bev.id = 'bev-content';
  bev.innerHTML = "Beverages";
  content.appendChild(bev);
};