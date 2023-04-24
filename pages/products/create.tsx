import Input from "@/components/Input";
import { FieldType, fields } from "@/constants/productFields";
import { layout } from "@/styles/style";

const Create = () => {
  return (
    <div className={`${layout.flex.row.center} h-full bg-slate-500`}>
      <div className={`w-1/2 p-10`}>
        <form className={`${layout.flex.col.center} w-full gap-5`}>
          {fields.map((eachField: FieldType) => (
            <Input
              key={eachField.id}
              id={eachField.id}
              labelText={eachField.labelText}
              type={eachField.type}
            />
          ))}
        </form>
      </div>
    </div>
  );
};

export default Create;
