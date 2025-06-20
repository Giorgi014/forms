import type { InputHTMLAttributes } from "react";

type InputAttributes = InputHTMLAttributes<HTMLInputElement>;

export type FormSchemaType =
  | "string"
  | "number"
  | "boolean"
  | "enum"
  | "array"
  | "object";

type FromSchemaOption = {
  label: string;
  value: string | number;
};

export type FormPropertiesSchema = InputAttributes & {
  type: FormSchemaType;
  label?: string;
  inputType?: InputAttributes["type"];
  properties?: Array<FormPropertiesSchema>;
  options?: Array<FromSchemaOption>;
  item?: Array<FormPropertiesSchema>;
  integer?: boolean;
  multiline?: boolean;
  minimum?: number;
  maximum?: number;
  value?: any;
};

export type FormSchema = {
  type: "object";
  name: string;
  label: string;
  properties: Array<FormPropertiesSchema>;
};
