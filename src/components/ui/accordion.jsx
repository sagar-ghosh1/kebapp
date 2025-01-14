"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import PlusIcon from "../sections/CustomIcons/PlusIcon"
import MinusIcon from "../sections/CustomIcons/MinusIcon"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-2 border-[#12272d] my-7 rounded-[10px]", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 text-[18px] md:text-[20px] 2xl:text-[24px] font-normal items-center justify-between px-3 md:px-5 py-4 text-start transition-all hover:underline bg-[#0a1e25] rounded-[10px] [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}>
      {children}
      {/* <ChevronDown className="h-6 w-6 shrink-0 transition-transform duration-200" /> */}

      {/* Minus */}
      {/* <MinusIcon /> */}

      {/* Plus */}
      {/* <PlusIcon /> */}

    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-[15px] 2xl:text-[18px] font-normal transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down bg-[#06111a] rounded-b-[10px] px-5"
    {...props}>
    <div className={cn("py-4", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
