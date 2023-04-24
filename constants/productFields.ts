import BaseFieldType from "./baseField";

export interface FieldType extends BaseFieldType {}

export const fields: FieldType[] = [
  {
    labelText: "Name",
    id: "name",
    name: "name",
    type: "text",
    isRequired: true,
  },
  {
    labelText: "Description",
    id: "description",
    name: "description",
    type: "text",
    isRequired: false,
  },
];
