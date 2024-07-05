type NotificationProps = {
  open: boolean;
  message: string;
  close: (value: boolean) => void;
};

export type { NotificationProps }