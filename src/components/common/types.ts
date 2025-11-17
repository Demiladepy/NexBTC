// common/types.ts
export interface BaseProps {
  className?: string;
}

export interface CardProps extends BaseProps {
  children: React.ReactNode;
}

export interface ButtonProps extends BaseProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export interface FadeUpProps extends BaseProps {
  children: React.ReactNode;
  delay?: number;
}

export interface SlideProps extends BaseProps {
  children: React.ReactNode;
  from?: "left" | "right" | "top" | "bottom";
  delay?: number;
}

export interface WalletItem {
  name: string;
  icon: string; // path to svg
  onClick: () => void;
}
