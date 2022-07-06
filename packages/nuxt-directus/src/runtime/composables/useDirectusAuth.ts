import type { Ref } from "vue";
import type {
  DirectusAuthResponse,
  DirectusAuthCredentials,
  DirectusUser,
  DirectusPasswordForgotCredentials,
  DirectusPasswordResetCredentials,
  DirectusRegisterCredentials,
  DirectusAuthProvidersResponse,
} from "../types";
import { useDirectus } from "./useDirectus";
import { useDirectusUser } from "./useDirectusUser";
import { useDirectusToken } from "./useDirectusToken";
import { useRuntimeConfig } from "#app";

export const useDirectusAuth = () => {
  const config = useRuntimeConfig();
  const directus = useDirectus();
  const user = useDirectusUser();
  const token = useDirectusToken();

  const setToken = (value: string | null) => {
    token.value = value;
  };

  const setUser = (value: DirectusUser) => {
    user.value = value;
  };

  const refreshToken = async () => {
    try {
      const res = await directus<any>("/auth/refresh", {
        method: "POST",
        credentials: "include",
      });

      console.log("testchen", res);

      setToken(undefined);
    } catch (e) {
      console.log(e);
      setToken(null);
      setUser(null);
    }
  };

  const listAuthProviders = async () => {
    return directus<DirectusAuthProvidersResponse>("/auth", { method: "GET" });
  };

  const fetchUser = async (): Promise<Ref<DirectusUser>> => {
    if (token.value && !user.value) {
      try {
        if (config.directus.fetchUserParams?.filter) {
          (config.directus.fetchUserParams.filter as unknown) = JSON.stringify(
            config.directus.fetchUserParams.filter
          );
        }
        if (config.directus.fetchUserParams?.deep) {
          (config.directus.fetchUserParams.deep as unknown) = JSON.stringify(
            config.directus.fetchUserParams.deep
          );
        }
        if (config.directus.fetchUserParams) {
          var res = await directus<{ data: DirectusUser }>("/users/me", {
            params: config.directus.fetchUserParams,
          });
        } else {
          var res = await directus<{ data: DirectusUser }>("/users/me");
        }
        setUser(res.data);
      } catch (e) {
        setToken(null);
      }
    }
    return user;
  };

  const login = async (
    data: DirectusAuthCredentials
  ): Promise<DirectusAuthResponse> => {
    setToken(null);

    const response: { data: DirectusAuthResponse } = await directus(
      "/auth/login",
      {
        method: "POST",
        body: data,
      }
    );

    setToken(response.data.access_token);

    const user = await fetchUser();

    return {
      user,
      access_token: response.data.access_token,
      expires: response.data.expires,
    };
  };

  const createUser = async (
    data: DirectusRegisterCredentials
  ): Promise<DirectusUser> => {
    return await directus("/users", {
      method: "POST",
      body: data,
    });
  };

  // Alias for createUser
  const register = async (
    data: DirectusRegisterCredentials
  ): Promise<DirectusUser> => {
    return createUser(data);
  };

  const requestPasswordReset = async (
    data: DirectusPasswordForgotCredentials
  ): Promise<void> => {
    await directus("/auth/password/request", {
      method: "POST",
      body: data,
    });
  };

  const resetPassword = async (
    data: DirectusPasswordResetCredentials
  ): Promise<void> => {
    await directus("/auth/password/reset", {
      method: "POST",
      body: data,
    });
  };

  const logout = async () => {
    await directus("/auth/logout", {
      method: "POST",
      credentials: "include",
      headers: useRequestHeaders(["cookie"]),
    });
    setToken(null);
    setUser(null);
  };

  return {
    setToken,
    setUser,
    fetchUser,
    refreshToken,
    login,
    requestPasswordReset,
    resetPassword,
    logout,
    createUser,
    register,
    listAuthProviders,
  };
};
