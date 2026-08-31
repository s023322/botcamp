import { ComponentPropsWithoutRef, ElementType } from "react";

export type DynamicProps<C extends ElementType, P = object> = P & {
  as?: C;
} & Omit<ComponentPropsWithoutRef<C>, keyof P | "as">;
