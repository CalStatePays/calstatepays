import { createStore } from "vuex";
import Majors from "./modules/majors";
import Pfre from "./modules/pfre";
import Global from "./modules/global-form";
import Industries from "./modules/industries";
import PowerUser from "./modules/powerUsers";

export default createStore({
  strict: import.meta.env.MODE !== "production",
  modules: {
    Majors,
    Pfre,
    Global,
    Industries,
    PowerUser
  }
});
