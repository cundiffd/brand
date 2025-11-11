// Copyright © Spatial Corporation. All rights reserved.

import { clsx } from "clsx";

import * as Primitive from "@radix-ui/react-dialog";

/**
 * A styled dialog component.
 */
export const Dialog = {
  ...Primitive,

  /**
   * Create a new dialog root component.
   * @param props Configurable options for the component.
   * @returns A dialog root component.
   */
  Root: (props: Primitive.DialogProps) => {
    return <Primitive.Dialog {...props} />;
  },

  /**
   * Create a new dialog trigger component.
   * @param props Configurable options for the component.
   * @returns A dialog trigger component.
   */
  Trigger: (props: Primitive.DialogTriggerProps) => {
    return (
      <Primitive.DialogTrigger
        {...props}
        className={clsx("cursor-pointer", "transition-all", "flex items-center justify-center", "rounded-2xl p-2", props.className)}
      />
    );
  },

  /**
   * Create a new dialog portal component.
   * @param props Configurable options for the component.
   * @returns A dialog portal component.
   */
  Portal: (props: Primitive.DialogPortalProps) => {
    return <Primitive.DialogPortal {...props} />;
  },

  /**
   * Create a new dialog overlay component.
   * @param props Configurable options for the component.
   * @returns A dialog overlay component.
   */
  Overlay: (props: Primitive.DialogOverlayProps) => {
    return <Primitive.DialogOverlay {...props} />;
  },

  /**
   * Create a new dialog content component.
   * @param props Configurable options for the component.
   * @returns A dialog content component.
   */
  Content: (props: Primitive.DialogContentProps) => {
    return <Primitive.DialogContent {...props} className={clsx("fixed left-1/2 top-1/2", "-translate-x-1/2 -translate-y-1/2", props.className)} />;
  },

  /**
   * Create a new dialog title component.
   * @param props Configurable options for the component.
   * @returns A dialog title component.
   */
  Title: (props: Primitive.DialogTitleProps) => {
    return <Primitive.DialogTitle {...props} />;
  },

  /**
   * Create a new dialog description component.
   * @param props Configurable options for the component.
   * @returns A dialog description component.
   */
  Description: (props: Primitive.DialogDescriptionProps) => {
    return <Primitive.DialogDescription {...props} />;
  },

  /**
   * Create a new dialog close component.
   * @param props Configurable options for the component.
   * @returns A dialog close component.
   */
  Close: (props: Primitive.DialogCloseProps) => {
    return <Primitive.DialogClose {...props} />;
  }
};
