import * as React from "react";

// Context
import { CreateFilmContext } from "@app/components/admin/AddFilm";

interface ISearchStepProps {}

export const SearchStep: React.FC<ISearchStepProps> = props => {
  const {} = React.useContext(CreateFilmContext);

  return <div>search step</div>;
};

export default SearchStep;
