import "./CTAButton.css";
import clsx from "clsx";
import React, { type SyntheticEvent } from "react";
import { RotateLoader } from "react-spinners";

export interface CTAButtonProps {
  primary?: boolean;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  isLoading?: boolean;
  type?: "submit" | "button" | "reset";
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
}

export const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  (
    {
      variant = "primary",
      size = "medium",
      disabled = false,
      isLoading,
      type = "button",
      backgroundColor,
      label = "testing",
      onClick,
    },
    ref
  ) => {
    const className = clsx(
      `storybook-button`,
      `storybook-button--${size}`,
      `storybook-button--${variant}`,
      {
        "storybook-button--loading": isLoading,
      }
    );

    const handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
      if (type === "submit") event.preventDefault();
      onClick?.();
    };

    return (
      <button
        ref={ref}
        type={type}
        aria-busy={isLoading}
        onClick={handleClick}
        className={className}
        disabled={disabled}
        aria-disabled={disabled}
        style={{ backgroundColor }}
      >
        {isLoading ? (
          <span role="status" aria-live="polite">
            <RotateLoader aria-busy aria-hidden />
            <span className="sr-only">Loading....</span>
          </span>
        ) : (
          label
        )}
      </button>
    );
  }
);
