import styles from "./Select.module.css";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Check, ChevronDown } from "lucide-react";
import clsx from "clsx";

const Select = SelectPrimitive.Root;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = forwardRef<
  ElementRef<typeof SelectPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger ref={ref} className={clsx(styles.selectTrigger, className)} {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className={styles.selectTriggerIcon} />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));

const SelectContent = forwardRef<
  ElementRef<typeof SelectPrimitive.Content>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={clsx(
        styles.selectContent,
        position === "popper" && styles.selectContentPopper,
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={clsx(
          styles.selectViewport,
          position === "popper" && styles.selectViewportPopper
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));

const SelectItem = forwardRef<
  ElementRef<typeof SelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item ref={ref} className={clsx(styles.selectItem, className)} {...props}>
    <span className={styles.selectItemIndicator}>
      <SelectPrimitive.ItemIndicator>
        <Check className={styles.selectItemIndicatorIcon} />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));

export { Select, SelectValue, SelectTrigger, SelectContent, SelectItem };
