import { createRouter, createWebHistory } from "vue-router";
import home from "./views/home/index.vue";
import pfre from "./views/pfre/index.vue";
import majors from "./views/majors/index.vue";
import industries from "./views/industries/index.vue";
import faq from "./views/faq/index.vue";
import research from "./views/research/index.vue";
import tableauHolder from "./views/tableauHolder/index.vue";
import feedback from "./views/feedback/index.vue";
import credits from "./views/credits/index.vue";
import about from "./views/about/index.vue";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
      meta: {
        title: "Home | CalStatePays"
      }
    },
    {
      path: "/data/pfre",
      component: pfre,
      name: "pfre",
      meta: {
        title: "Data - FRE | CalStatePays"
      }
    },
    {
      path: "/data/industries",
      component: industries,
      name: "industries",
      meta: {
        title: "Data - Industries | CalStatePays"
      }
    },
    {
      path: "/data/majors",
      component: majors,
      name: "majors",
      meta: {
        title: "Data - Majors | CalStatePays"
      }
    },
    {
      path: "/faq",
      component: faq,
      name: "FAQ",
      meta: {
        title: "FAQ | CalStatePays"
      }
    },
    {
      path: "/research",
      component: research,
      meta: {
        title: "Research | CalStatePays"
      }
    },
    {
      path: "/tableau",
      name: "tableau",
      component: tableauHolder,
      props: true,
      meta: {
        title: "Tableau Info | CalStatePays"
      }
    },
    {
      path: "/feedback",
      component: feedback,
      name: "feedback",
      meta: {
        title: "Feedback | CalStatePays"
      }
    },
    {
      path: "/credits",
      component: credits,
      name: "credits",
      meta: {
        title: "Credits | CalStatePays"
      }
    },
    {
      path: "/about",
      component: about,
      name: "about",
      meta: {
        title: "About | CalStatePays"
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "CalStatePays";
  next();
});

export default router;
