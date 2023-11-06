import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userReducer,
  allUserReducers,
  profileReducer,
} from "./reducers/userReducer";
import {
  blogReducer,
  allBlogReducer,
  updateBlogReducer,
} from "./reducers/blogReducer";
import { allCategoryReducer } from "./reducers/categoryReducer";

const reducer = combineReducers({
  user: userReducer,
  allUsers: allUserReducers,
  profile: profileReducer,
  blog: blogReducer,
  allblog: allBlogReducer,
  updateblog: updateBlogReducer,
  allCategoryReducer: allCategoryReducer,
});

const middleware = [thunk];

const store = legacy_createStore(
  reducer,

  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
