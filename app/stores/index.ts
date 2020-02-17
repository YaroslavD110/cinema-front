import { createContext } from "react";

import { MainStore } from "./MainStore";
import { userStore } from "./UserStore";

export const storeContext = createContext({
  mainStore: new MainStore(),
  userStore
});
