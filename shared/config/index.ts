// Types
import { ITopBarMenuItem, IAdminMenuTopLevelItem } from "./types.d";

export const serverEndpoint = "http://localhost:8080";
export const apiEndpoint = `${serverEndpoint}/api`;

// ** UI config **
export const itemsPerCatalogPage = 30;
export const headerMenu: ITopBarMenuItem[] = [
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
    slug: "adminHome"
  }
];

export const adminMenu: IAdminMenuTopLevelItem[] = [
  {
    title: "Home",
    icon: "home",
    slug: "adminHome"
  },
  {
    title: "Films",
    icon: "video-camera",
    subItems: [
      {
        title: "List all",
        slug: "adminFilmsList"
      },
      {
        title: "Add new",
        slug: "adminFilmCreate"
      }
    ]
  }
];
