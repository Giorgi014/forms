import type { InputHTMLAttributes } from "react";

type InputAttributes = InputHTMLAttributes<HTMLInputElement>

export type FormSchemaType =
  | "string"
  | "number"
  | "boolean"
  | "enum"
  | "array"
  | "object";

type FromSchemaOption = {
  label: string
  value: string | number
}


type FormPropertiesSchema = InputAttributes & {
  type: FormSchemaType,
  label?: string
  inputType?: InputAttributes["type"]
  properties?: Array<FormPropertiesSchema>
  options?: Array<FromSchemaOption>
  item?: Array<FormPropertiesSchema>
}

export type FormSchema = {
  type: 'object',
  name: string
  label: string
  properties: Array<FormPropertiesSchema>,
}


