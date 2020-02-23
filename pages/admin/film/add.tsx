import * as React from "react";
import { Steps } from "antd";

// Components
import {
  steps,
  CreateFilmContextProvider
} from "@app/components/admin/AddFilm";
import AdminLayout from "@app/components/admin/AdminLayout";

interface IAddFilmProps {}

export const AddFilm: React.FC<IAddFilmProps> = props => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const CurrentStepContent = steps[currentStep].Component;

  // ** Methods
  const goToTheNextStep = () => {
    const nextStep = currentStep + 1;

    if (nextStep < steps.length) {
      setCurrentStep(nextStep);
    }
  };

  const goToThePrevStep = () => {
    const nextStep = currentStep - 1;

    if (nextStep > 0) {
      setCurrentStep(nextStep);
    }
  };

  // ** Context value
  const contextValue = { currentStep };

  return (
    <AdminLayout title="Add new film">
      <CreateFilmContextProvider value={contextValue}>
        <div className="admin-block">
          <Steps current={currentStep}>
            {steps.map(({ title }) => (
              <Steps.Step key={title} title={title} />
            ))}
          </Steps>

          <CurrentStepContent />
        </div>
      </CreateFilmContextProvider>
    </AdminLayout>
  );
};

export default AddFilm;
