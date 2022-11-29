import { ToastSet } from "./toast";

const TOAST_SET: ToastSet = {
  success: {
    bgColor: "green",
    icon: "",
    title: "Success",
    desc: "The operation was successful"
  },
  error: {
    bgColor: "red",
    icon: "",
    title: "Alert",
    desc: "The operation has failed"
  },
  info: {
    bgColor: "blue",
    icon: "",
    title: "Info",
    desc: "You have some info to check"
  },
  warn: {
    bgColor: "yellow",
    icon: "",
    title: "Warning",
    desc: "There are some problems"
  }
};

export { TOAST_SET };
