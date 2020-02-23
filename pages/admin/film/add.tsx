import * as React from "react";
import { AdminLayout } from "app/components/AdminLayout";

interface IAddFilmProps {}

export const AddFilm: React.FC<IAddFilmProps> = props => {
  return <AdminLayout title="Add new film"></AdminLayout>;
};

export default AddFilm;
