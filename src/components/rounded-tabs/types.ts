import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";

type TabContextProps = {
  children: ReactNode;
  value: unknown;
};

type TabProps = {
  children: ReactNode;
  value: unknown;
};
type TabPanelProps = {
  children: ReactNode;
  value: unknown;
  className?: string
};
type TabListProps = {
  children: ReactNode;
};
export type { TabContextProps, TabProps, TabListProps, TabPanelProps };
