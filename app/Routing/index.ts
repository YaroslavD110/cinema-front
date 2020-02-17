export type RoutingSlugs = "home" | "login" | "catalog" | "admin" | "error";

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
      slug: "admin",
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
