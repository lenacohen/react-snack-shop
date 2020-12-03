import './App.css';
import FilteredList from './FilteredList.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

{/* List of snacks with fields */}
const productList = [
  { name: "Peanuts", size: "Small", taste: "Natural", price: 4, image: "http://appforhealth.com/wp-content/uploads/2011/05/peanuts.jpg"},
  { name: "Potato Chips", size: "Medium", taste: "Salty", price: 5, image: "https://www.weightwatchers.com/images/1033/dynamic/foodandrecipes/2012/09/bakedsweetpotatochips_n_lg.jpg"},
  { name: "Pizza", size: "Large", taste: "Salty", price: 10, image: "https://pantograph0.goldbely.com/s410/uploads/product_image/image/27402/new-york-pizza-16-giant-slices.232ecc6bae28243345e6134b12023bc3.jpg"},
  { name: "Pretzels", size: "Small", taste: "Salty", price: 3, image: "http://www.eatingonadime.com/wp-content/uploads/2016/11/seasoned-pretzels-square-300x300.jpg"},
  { name: "Cookies", size: "Medium", taste: "Sweet", price: 4, image: "https://2.bp.blogspot.com/-lq8-K18_M1U/V-2TjNzsDlI/AAAAAAAAECY/onMK5a55DAU2pK5EiNkBIj5BI7uV6NcIACLcB/s1600/chocolate-chip-cookies.jpg"},
  { name: "Cake", size: "Large", taste: "Sweet", price: 12, image: "http://assets.goodhousekeeping.co.uk/main/galleries/11293/chocolate-fudge-cake-010414-de_496_496_90__large.jpg?20170206143030"},
  { name: "Candy", size: "Small", taste: "Sweet", price: 5, image: "https://www.gbjournal.org/wp-content/uploads/m-and-ms.jpg"},
  { name: "Peach", size: "Medium", taste: "Natural", price: 2, image: "https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Kader-Peach-Tree-350-THUMB_grande.jpg?v=1549683242"},
  { name: "Watermelon", size: "Large", taste: "Natural", price: 7, image: "https://aka.weightwatchers.ca/images/4105/dynamic/GCMSImages/mf_Watermelon_2324149_n_lg.jpg"},
  { name: "Apple", size: "Small", taste: "Natural", price: 1, image: "https://images.heb.com/is/image/HEBGrocery/prd-email/apple-slices-with-peanut-butter-snack-recipe.jpg"},
  { name: "Burrito", size: "Large", taste: "Salty", price: 8, image: "http://del.h-cdn.co/assets/cm/15/10/54f6d87bb74ae_-_easy-sausage-egg-breakfast-burrito-recipe-jd0114-rm4yhv-xl.jpg"},
  { name: "Salad", size: "Medium", taste: "Natural", price: 6, image: "https://www.epicurus.com/food/recipes/wp-content/uploads/2011/10/salad-ala-russe.jpg"}
 ]
 
{/* Render the title and pass the snack list into a FilteredList component, 
which renders the DisplayList and DisplayCart*/}
function App() {
  return (
    <div className="App">
      <hr></hr>
      <h1 style={{color: 'black'}}>Snazzy Snack Shack</h1> 
      <hr></hr>
		  <FilteredList list={productList}/>
    </div>
  );
}

export default App;
