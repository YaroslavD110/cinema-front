import Fingerprint from "fingerprintjs2";

// Config
import { API_LOGIN } from "./config";

// Types
import { IAccessCredentials } from "shared/types";
import { IAPIResult } from "./types";

class Auth {
  public async login(values: {
    email: string;
    password: string;
  }): Promise<IAPIResult<IAccessCredentials>> {
    try {
      const userData = await Fingerprint.getPromise();
      const FPHash = Fingerprint.x64hash128(JSON.stringify(userData), 31);

      const body = new URLSearchParams();

      body.set("email", values.email);
      body.set("password", values.password);
      body.set("fingerprint", FPHash);

      const res = await fetch(API_LOGIN, {
        body,
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        }
      });

      if (!res.ok) {
        if (res.status === 400) {
          return {
            isSuccess: false,
            errorMessage: "Invalid password or email!"
          };
        } else {
          return {
            isSuccess: false,
            errorMessage: "Filed to login, please try later!"
          };
        }
      }

      const data = await res.json();

      return {
        isSuccess: true,
        errorMessage: null,
        body: data
      };
    } catch (error) {
      return {
        isSuccess: false,
        errorMessage: "Filed to login, please try later!"
      };
    }
  }
}

export const AuthAPI = new Auth();
