import lazyLoad from "../layouts/lazyLoad";
import HomeLayout from "../layouts/HomeLayout";

export const getRouteData = () => {
  const routerConfig = {
    "/": {
      module: lazyLoad(() => import("../components/Welcome")),
      layout: HomeLayout
    },
    "/Home": {
      module: lazyLoad(() => import("../components/Home"))
      // layout: HomeLayout
    },
    "/About": {
      module: lazyLoad(() => import("../components/About"))
      // layout: HomeLayout
    },
    "*": {
      module: lazyLoad(() => import("../components/common/P404"))
      // layout: HomeLayout
    }
  };

  const routeData = [];
  for (let [k, v] of Object.entries(routerConfig)) {
    routeData.push({
      path: k,
      component: v.module,
      layout: v.layout
    });
  }

  return routeData;
};
