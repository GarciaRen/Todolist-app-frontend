import { toast } from "react-toastify";

export const SuccessToast = (message) =>
  toast.success(message, {
    position: "top-right",
    autoClose: 300,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export const InformationToast = (message) =>
  toast.info(message, {
    position: "top-right",
    autoClose: 300,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export const ErrorToast = (message) =>
  toast.error(message, {
    position: "top-right",
    autoClose: 300,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
