import { notification } from "antd-notifications-messages";
import "antd-notifications-messages/lib/styles/style.css";

export function showNotification(type, title, msg) {
  notification({
    type,
    title: title,
    message: msg,
  });
}
