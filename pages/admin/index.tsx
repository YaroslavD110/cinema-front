import * as React from "react";

import AdminLayout from "@app/components/AdminLayout";

interface IAdminPageProps {}

export const AdminPage: NextFC<IAdminPageProps> = props => {
  return <AdminLayout title="Admin page">hello from admin!</AdminLayout>;
};

AdminPage.isAuthProtected = true;

export default AdminPage;
