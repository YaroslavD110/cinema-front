import { RoutingSlugs } from "@app/Routing/index";

export const serverEndpoint = "http://localhost:8080";
export const apiEndpoint = `${serverEndpoint}/api`;

// ** UI config **
export const itemsPerCatalogPage = 30;
export const headerMenu: {
  title: string;
  slug: RoutingSlugs;
  linkAs?: string;
}[] = [
  {
    title: "Home",
    slug: "home"
  },
  {
    title: "Catalog",
    slug: "catalog"
  },
  {
    title: "Admin",
    slug: "admin"
  }
];
