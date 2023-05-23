import { Home } from "./Pages/Home.jsx";
import { UserList } from "./Pages/UserList.jsx";
import { NewUser } from "./Pages/NewUser.jsx";
import { Products } from "./Pages/Products.jsx";

const routes = [
  { path: "/", element: <Home /> },
  { path: "users", element: <UserList /> },
  { path: "products", element: <Products /> },
  { path: "newUser", element: <NewUser /> },
];

export default routes;
