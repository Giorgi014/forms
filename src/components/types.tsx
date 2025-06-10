export type formType =
  | "string"
  | "number"
  | "boolean"
  | "enum"
  | "array"
  | "object";

export type dataSchema = {
  type: formType;
  name: string;
  label: string;
  required?: boolean;
  options: object;
  minLenght: number;
  maxLength: number;
  minimum: number;
  maximum: number;
};
