import * as React from "react";
import { Select } from "antd";

const { Option } = Select;

const children: any = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value: any) {
  console.log(`selected ${value}`);
}

interface IAdminPageProps {}

export const AdminPage: NextFC<IAdminPageProps> = props => {
  return (
    <div>
      hello from admin!
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        placeholder="Please select"
        defaultValue={["a10", "c12"]}
        onChange={handleChange}
      >
        {children}
      </Select>
    </div>
  );
};

AdminPage.isAuthProtected = true;

export default AdminPage;
