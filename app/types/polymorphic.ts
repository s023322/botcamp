import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type PolymorphicProps<E extends ElementType, P = object> = P & {
  as?: E;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<E>, keyof P | "as">;
