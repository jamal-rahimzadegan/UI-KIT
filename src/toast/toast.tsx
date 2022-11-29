import { TOAST_SET } from "./constant";
import "./styles.css";

// FIXME:  1- Close ,  2- mulitple

interface Props {
  visible: boolean;
  type: "success" | "error" | "info" | "warn";
  position: "top-right" | "bottom-right" | "top-center" | "bottom-center";
  title?: string;
  desc?: string;
}

export type ToastInfo = {
  bgColor: string;
  icon: string;
  title: string;
  desc: string;
};

export type ToastSet = Record<Props["type"], ToastInfo>;

export function Toast(props: Props) {
  const { visible, type, position } = props;
  const toast: ToastInfo = TOAST_SET[type];

  const closeToast = () => {
    console.log("close me");
  };

  if (!visible) return <></>;

  return (
    <div className={`notification-container ${position}`}>
      <div
        style={{ background: toast.bgColor }}
        className={`notification toast ${position}`}
      >
        <button onClick={closeToast}>×</button>
        <section className="notification-image">
          <img src={toast.icon} alt={type + " toast icon"} />
        </section>
        <section>
          <p className="notification-title">{toast.title}</p>
          <p className="notification-message">{toast.desc}</p>
        </section>
      </div>
    </div>
  );
}
