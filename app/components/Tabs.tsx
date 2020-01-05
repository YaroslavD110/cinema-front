import * as React from "react";

interface ITab {
  title: string;
  tabContent: JSX.Element;
}

interface ITabsProps {
  title?: string;
  tabs: ITab[];
}

let selectingTimeout: NodeJS.Timeout | null = null;
export const Tabs: React.FC<ITabsProps> = props => {
  const { tabs, title } = props;

  // ** Initialization **
  const [isSelectedVisible, setIsSelectedVisible] = React.useState(false);
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);

  // ** Methods **
  const toggleTab = (index: number) => (event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
    }

    if (selectingTimeout) {
      clearTimeout(selectingTimeout);
    }

    setIsSelectedVisible(false);
    selectingTimeout = setTimeout(() => {
      setSelectedTabIndex(index);
      setIsSelectedVisible(true);
    }, 250);
  };

  return (
    <section className="content">
      <div className="content__head">
        <div className="container">
          <div className="row">
            {title && <h2 className="content__title">{title}</h2>}

            <ul className="nav nav-tabs content__tabs">
              {tabs.map(({ title }, index) => (
                <li className="nav-item">
                  <button
                    onClick={toggleTab(index)}
                    className={`nav-link${
                      selectedTabIndex === index ? " active" : ""
                    }`}
                    role="tab"
                    type="button"
                  >
                    {title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="tab-content">
          {tabs.map(({ tabContent }, index) => (
            <div
              className={`tab-pane fade${
                selectedTabIndex === index
                  ? isSelectedVisible
                    ? " active show"
                    : " active"
                  : ""
              }`}
              role="tabpanel"
            >
              <div className="row">{tabContent}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tabs;
