import { observable, action, reaction } from "mobx";
import { IAccessCredentials } from "shared/types";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";

// ** Store types
export interface IUserData {
  userId: number;
  username: string;
  credentials: IAccessCredentials;
}

export type LocalDataType = Pick<IUserData, "userId"> &
  Pick<IUserData, "username">;

// ** Store
export class UserStore {
  constructor() {
    if (process.browser) {
      const JSONStorageData = window.localStorage.getItem("userData");

      if (typeof JSONStorageData === "string") {
        try {
          const data: LocalDataType = JSON.parse(JSONStorageData);

          if (data.userId && data.username) {
            const accessToken = Cookies.get("accessToken");
            const refreshToken = Cookies.get("refreshToken");

            if (accessToken && refreshToken) {
              this.isAuthenticated = true;
              this.userData = {
                userId: data.userId,
                username: data.username,
                credentials: {
                  accessToken,
                  refreshToken
                }
              };
            }
          }
        } catch (error) {
          console.error("Filed to parse user data from local storage!");
        }
      }
    }
  }

  @observable
  public isAuthenticated: boolean = false;

  @observable
  public userData: IUserData | null = null;

  @action
  public setAuthStatus(status: boolean) {
    this.isAuthenticated = status;
  }

  @action
  public createUser(credentials: IAccessCredentials) {
    const decoded: { id: number; username: string } = jwtDecode(
      credentials.accessToken
    );

    if (typeof decoded.id === "number" && decoded.username) {
      this.isAuthenticated = true;
      this.userData = {
        userId: decoded.id,
        username: decoded.username,
        credentials
      };
    }
  }

  @action
  public deleteUser() {
    this.isAuthenticated = false;
    this.userData = null;
  }
}

// ** Store instance
export const userStore = new UserStore();

// ** Reactions
reaction(
  () => userStore.userData,
  userData => {
    if (userData) {
      Cookies.set("accessToken", userData.credentials.accessToken);
      Cookies.set("refreshToken", userData.credentials.refreshToken);

      window.localStorage.setItem(
        "userData",
        JSON.stringify({ userId: userData.userId, username: userData.username })
      );
    } else {
      window.localStorage.removeItem("userData");
    }
  }
);
