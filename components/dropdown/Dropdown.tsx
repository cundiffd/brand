// Copyright © Spatial Corporation. All rights reserved.

import { clsx } from "clsx";

import * as Primitive from "@radix-ui/react-dropdown-menu";

/**
 * A styled dropdown component.
 */
export const Dropdown = {
  ...Primitive,

  /**
   * Create a new dropdown menu component.
   * @param props Configurable options for the component.
   * @returns A dropdown menu component.
   */
  Root: (props: Primitive.DropdownMenuProps) => {
    return <Primitive.DropdownMenu {...props} />;
  },

  /**
   * Create a new dropdown trigger component.
   * @param props Configurable options for the component.
   * @returns A dropdown trigger component.
   */
  Trigger: (props: Primitive.DropdownMenuTriggerProps) => {
    return (
      <Primitive.DropdownMenuTrigger
        {...props}
        className={clsx(props.className, "cursor-pointer", "transition-all", "flex items-center justify-center", "rounded-2xl p-2")}
      />
    );
  },

  /**
   * Create a new dropdown content component.
   * @param props Configurable options for the component.
   * @returns A dropdown content component.
   */
  Content: ({ sideOffset = 8, ...props }: Primitive.DropdownMenuContentProps) => {
    return (
      <Primitive.DropdownMenuContent
        sideOffset={sideOffset}
        {...props}
        className={clsx("z-51", "p-3 rounded-2xl space-y-1", "bg-background-surface", props.className)}
      />
    );
  },

  /**
   * Create a new dropdown item component.
   * @param props Configurable options for the component.
   * @returns A dropdown item component.
   */
  Item: (props: Primitive.DropdownMenuItemProps) => {
    return (
      <Primitive.DropdownMenuItem
        {...props}
        className={clsx(
          props.className,
          "cursor-pointer",
          "transition-all",
          "py-2 px-4 min-w-48 rounded-lg",
          "data-highlighted:bg-button-ghost-active"
        )}
      />
    );
  },

  /**
   * Create a new dropdown radio group component.
   * @param props Configurable options for the component
   * @returns A dropdown radio group component.
   */
  RadioGroup: (props: Primitive.DropdownMenuRadioGroupProps) => {
    return <Primitive.DropdownMenuRadioGroup {...props} className={clsx(props.className)} />;
  },

  /**
   * Create a new dropdown radio item component.
   * @param props Configurable options for the component.
   * @returns A dropdown radio item component.
   */
  RadioItem: (props: Primitive.DropdownMenuRadioItemProps) => {
    return (
      <Primitive.DropdownMenuRadioItem
        {...props}
        className={clsx(
          props.className,
          "cursor-pointer",
          "transition-all",
          "py-2 px-4 min-w-48 rounded-lg",
          "flex items-center",
          "data-highlighted:bg-button-ghost-active"
        )}
      />
    );
  },

  /**
   * Create a new dropdown item indicator component.
   * @param props Configurable options for the component.
   * @returns A dropdown item indicator component.
   */
  ItemIndicator: (props: Primitive.DropdownMenuItemIndicatorProps) => {
    return (
      <Primitive.DropdownMenuItemIndicator {...props} className={clsx(props.className, "flex items-center justify-center ml-auto")}>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4" cy="4" r="4" />
        </svg>
      </Primitive.DropdownMenuItemIndicator>
    );
  }
};
