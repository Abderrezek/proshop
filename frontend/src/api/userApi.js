import axiosCaller from "./apiUtils";

const USERS = "users";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const login = (email, password) => {
  return axiosCaller.post(
    `${USERS}/login`,
    {
      email,
      password,
    },
    config
  );
};

export const register = (name, email, password) => {
  return axiosCaller.post(`${USERS}/`, { name, email, password }, config);
};

export const profile = (id, token) => {
  config.headers.Authorization = `Bearer ${token}`;
  return axiosCaller.get(`${USERS}/${id}`, config);
};

export const updateProfile = (user, token) => {
  config.headers.Authorization = `Bearer ${token}`;
  return axiosCaller.put(`${USERS}/profile`, user, config);
};

export const users = (token) => {
  config.headers.Authorization = `Bearer ${token}`;
  return axiosCaller.get(`${USERS}/`, config);
};

export const deleteUser = (id, token) => {
  config.headers.Authorization = `Bearer ${token}`;
  return axiosCaller.delete(`${USERS}/${id}`, config);
};

export const getUser = (id, token) => {
  config.headers.Authorization = `Bearer ${token}`;
  return axiosCaller.get(`${USERS}/${id}`, config);
};

export const updateUser = (id, info, token) => {
  config.headers.Authorization = `Bearer ${token}`;
  return axiosCaller.put(`${USERS}/${id}`, info, config);
};
