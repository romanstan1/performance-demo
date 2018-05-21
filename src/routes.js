import Home from "./Home";
import ListingStriped from "./ProductListing/Striped";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/listing-striped",
    exact: true,
    component: ListingStriped
  }
];

export default routes;
