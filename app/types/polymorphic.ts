import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type PolymorphicProps<E extends ElementType, P = {}> = p & {
  as?: E;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<E>, keyof P | "as">;
