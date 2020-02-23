export type RoutingSlugs =
  | "home"
  | "login"
  | "catalog"
  | "adminHome"
  | "adminFilmCreate"
  | "adminFilmsList"
  | "error";

interface IRoute {
  slug: RoutingSlugs;
  path: string;
}

export class Routing {
  private static routes: IRoute[] = [
    {
      slug: "home",
      path: "/"
    },
    {
      slug: "adminHome",
      path: "/admin"
    },
    {
      slug: "login",
      path: "/auth/login"
    },
    {
      slug: "catalog",
      path: "/catalog"
    },
    {
      slug: "adminFilmCreate",
      path: "/admin/film/add"
    },
    {
      slug: "adminFilmsList",
      path: "/admin/film/list"
    },
    {
      slug: "error",
      path: "/error"
    }
  ];

  public static getRoute(routeSlug: RoutingSlugs) {
    const route = this.routes.find(({ slug }) => slug === routeSlug);

    if (route) return route;

    return this.routes.find(({ slug }) => slug === "error")!;
  }
}
