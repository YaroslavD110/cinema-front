export const serverEndpoint = "http://localhost:8080";
export const apiEndpoint = `${serverEndpoint}/api`;

// ** UI config **
export const itemsPerCatalogPage = 30;
export const headerMenu: {
  title: string;
  href: string;
  linkAs?: string;
}[] = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "Catalog",
    href: "/films"
  }
];
