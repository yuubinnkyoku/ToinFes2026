"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

export function TooltipContent({
    className,
    sideOffset = 6,
    ...props
}: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>) {
    return (
        <TooltipPrimitive.Portal>
            <TooltipPrimitive.Content
                sideOffset={sideOffset}
                className={[
                    "z-50 rounded-md border bg-popover px-2 py-1 text-xs text-popover-foreground shadow",
                    "animate-jelly",
                    className,
                ]
                    .filter(Boolean)
                    .join(" ")}
                {...props}
            />
        </TooltipPrimitive.Portal>
    );
}

export const TooltipArrow = TooltipPrimitive.Arrow;
