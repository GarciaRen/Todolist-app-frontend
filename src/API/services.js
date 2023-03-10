import api from "../API/backend";

export const getRouteApi = (routeName) => {
  return api
    .get(routeName)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      const status =
        error.response === undefined ? 12023 : error.response.status;
      const message =
        error.response === undefined
          ? `Can't connect to server`
          : error.response.data;
      return {
        data: {},
        status,
        message,
      };
    });
};

export const postRouteApi = (routeName, params) => {
  return api
    .post(routeName, params)
    .then((res) => {
      return {
        data: res.data,
        status: res.status,
      };
    })
    .catch((error) => {
      const status =
        error.response === undefined ? 12023 : error.response.status;
      const message =
        error.response === undefined
          ? `Can't connect to server`
          : error.response.data;
      return {
        data: {},
        status,
        message,
      };
    });
};

export const putRouteApi = (routeName, params) => {
  return api
    .put(routeName, params)
    .then((res) => {
      return {
        data: res.data,
        status: res.status,
      };
    })
    .catch((error) => {
      const status =
        error.response === undefined ? 12023 : error.response.status;
      const message =
        error.response === undefined
          ? `Can't connect to server`
          : error.response.data;
      return {
        data: {},
        status,
        message,
      };
    });
};

export const deleteRouteApi = (routeName) => {
  return api
    .delete(routeName)
    .then((res) => {
      return {
        data: res.data,
        status: res.status,
      };
    })
    .catch((error) => {
      const status =
        error.response === undefined ? 12023 : error.response.status;
      const message =
        error.response === undefined
          ? `Can't connect to server`
          : error.response.data;
      return {
        data: {},
        status,
        message,
      };
    });
};
