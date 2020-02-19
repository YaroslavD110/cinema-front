import { RoutingSlugs } from "@app/routing/index";

export interface ITopBarMenuItem {
  title: string;
  slug: RoutingSlugs;
  linkAs?: string;
}

export interface IAdminMenuItem {
  title: string;
  slug: RoutingSlugs;
}

export interface IAdminMenuTopLevelItem extends IAdminMenuItem {
  icon: string;
  slug?: RoutingSlugs;
  subItems?: IAdminMenuItem[];
}
