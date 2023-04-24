export type FieldType = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  unit: "KG" | "LTR" | "PCS";
  additional: {};
};

export const fields = [
  {
    labelText: "Name",
    id: "name",
    name: "name",
    type: "text",
    isRequired: true,
  },
  {
    labelText: "Email address",
    id: "email",
    name: "email",
    type: "email",
    isRequired: true,
  },
  {
    labelText: "Password",
    id: "password",
    name: "password",
    type: "password",
    isRequired: true,
  },
];
