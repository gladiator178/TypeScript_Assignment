import React, { useState } from "react";
import "./home.css";
import img1 from "./Images/sq.png";
import img2 from "./Images/Cross.png";
import img3 from "./Images/bar.png";
import img4 from "./Images/line.png";
import img5 from "./Images/pie.png";
import DataWidget from "./widgets/datawidget";
import SummaryWidget from "./widgets/summarywidget";
import PieWidget from "./widgets/piegraphwidget";
import LineWidget from "./widgets/linegraphwidget";
import BarWidget from "./widgets/bargraphwidget";
import jsonData from "./data";
import DataDisplay from "./WidgetData";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface Option {
  value: string;
  label: string;
}

interface ExportedData {
  selectedColor: Option | null;
  selectedOption: Option | null;
  selectedGraphType?: string;
  description: string;
  title: string;
}

const Home = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [selectedColor, setSelectedColor] = useState<Option | null>(null);
  const [label, setLabel] = useState<string>("");
  const [selectedGraphType, setSelectedGraphType] = useState<
    string | undefined
  >(undefined);
  const [descriptions, setDescriptions] = useState<string[]>(["", "", ""]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [renderedWidgets, setRenderedWidgets] = useState<JSX.Element[]>([]);

  const handleAddWidget = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const handleDescriptionChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newDescriptions = [...descriptions];
    newDescriptions[index] = event.target.value;
    setDescriptions(newDescriptions);
  };

  const options: Option[] = [
    { value: "data", label: "Data" },
    { value: "graph", label: "Graph" },
    { value: "summary", label: "Summary" },
  ];

  const optionsGraph: Option[] = [
    { value: "bar", label: "bar" },
    { value: "line", label: "line" },
    { value: "pie", label: "pie" },
  ];

  const options2: Option[] = [
    { value: "1", label: "White" },
    { value: "2", label: "#282828" },
    { value: "3", label: "#5E5ADB" },
  ];

  const handleSelectChange = (option: Option) => {
    setSelectedOption(option);
  };

  const handleSelectColorChange = (option: Option) => {
    setSelectedColor(option);
  };

  const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(event.target.value);
  };

  const handleSave = () => {
    const backgroundColor = selectedColor?.label || "white";
    let type = "data";
    if (selectedOption?.value === "graph" && selectedGraphType) {
      type = selectedGraphType;
    } else {
      type = selectedOption?.value || "summary";
    }
    let widget: JSX.Element;

    if (type === "data") {
      widget = <DataWidget jsonData={jsonData} backgroundColor={backgroundColor} />;
    } else if (type === "bar") {
      widget = <BarWidget jsonData={jsonData} backgroundColor={backgroundColor} />;
    } else if (type === "pie") {
      widget = <PieWidget jsonData={jsonData} backgroundColor={backgroundColor} />;
    } else if (type === "line") {
      widget = <LineWidget jsonData={jsonData} backgroundColor={backgroundColor} />;
    } else {
      widget = <SummaryWidget jsonData={jsonData} backgroundColor={backgroundColor} />;
    }
    const updateWidgets = (prevWidgets: JSX.Element[]) => [...prevWidgets, widget];
    setRenderedWidgets(prevWidgets => updateWidgets(prevWidgets));

    console.log(renderedWidgets)
    handleClosePopup();
  };

  const optionStyle: React.CSSProperties = {
    border: "1px solid #E0DFF8 ",
    padding: "8px",
    borderRadius: "4px",
    margin: "4px",
    marginBottom: "8px",
    cursor: "pointer",
    color: "black",
    backgroundColor: "#fff",
  };

  const selectedOptionStyle: React.CSSProperties = {
    ...optionStyle,
    color: "black",
    marginBottom: "8px",
    border: "2px solid #5E5ADB",
  };

  const colorCircleStyle = (color: string): React.CSSProperties => ({
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    border: "1px solid #CECECE",
    cursor: "pointer",
    backgroundColor: color,
  });

  const selectedColorCircleStyle = (color: string): React.CSSProperties => ({
    ...colorCircleStyle("#f0f0f0"),
    border: "3px solid white",
    boxShadow: "0 0 2px 2px #000",
    backgroundColor: color,
  });

  return (
    <>
      <Sidebar />
      <Navbar handleAddWidget={handleAddWidget} />
      {isPopupOpen === true ? (
      <div className="topp">
        <div className="home-container">
          <div className="top-section">
            <img className="home-top" src={img1} alt="Square" />
            <div className="home-top home-top1">
              <h1 id="home-heading">Create Widget</h1>
              Manage the glossary
            </div>
            <div className="home-top home-top1 home-right" id="home-right">
              <button className="close-popup" onClick={handleClosePopup}>
                <img src={img2} style={{ transform: "scale(1.3)" }} />
              </button>
              <br />
              <input
                type="text"
                className="title-ip"
                value={label}
                onChange={handleLabelChange}
                placeholder="Enter title "
              />
            </div>
          </div>
          <hr />

          <div className="middle-section">
            <div className="left-section">
              <DataDisplay jsonData={jsonData} />
              <div className="color-div">
                {options2.map((option) => (
                  <div
                    className="home-color"
                    key={option.value}
                    style={
                      selectedColor && selectedColor.value === option.value
                        ? selectedColorCircleStyle(option.label)
                        : colorCircleStyle(option.label)
                    }
                    onClick={() => handleSelectColorChange(option)}
                  />
                ))}
              </div>
            </div>
            <div className="right-section">
              <div>
                COMPONENTS
                {options.map((option, index) => (
                  <div
                    key={option.value}
                    style={
                      selectedOption && selectedOption.value === option.value
                        ? selectedOptionStyle
                        : optionStyle
                    }
                    onClick={() => handleSelectChange(option)}
                  >
                    {option.label}
                    <br />
                    {selectedOption?.value === "graph" &&
                      option.value === "graph" && (
                        <div>
                          {optionsGraph.map((graphOption) => (
                            <div
                              className="gtype"
                              key={graphOption.value}
                              style={
                                selectedGraphType &&
                                selectedGraphType === graphOption.value
                                  ? selectedOptionStyle
                                  : optionStyle
                              }
                              onClick={() =>
                                setSelectedGraphType(graphOption.value)
                              } // Pass the value directly
                            >
                              {graphOption.label === "bar" && (
                                <img src={img3} alt="Bar Graph" />
                              )}
                              {graphOption.label === "line" && (
                                <img src={img4} alt="Line Graph" />
                              )}
                              {graphOption.label === "pie" && (
                                <img src={img5} alt="Pie Chart" />
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                    <input
                      className="val-desc"
                      type="text"
                      value={descriptions[index]}
                      onChange={(event) =>
                        handleDescriptionChange(index, event)
                      }
                      placeholder="Enter description"
                    />
                  </div>
                ))}
              </div>

              <button className="home-button save-button" onClick={handleSave}>
                Save
              </button>
              <button className="home-button cancel-button" onClick={handleClosePopup}>Cancel</button>
            </div>
          </div>
        </div>
        </div>
      ) : null}
      <div className="page">
      {renderedWidgets.map((widget, index) => (
        <div key={index} className="widget-container">
          {widget}
        </div>
      ))}
      </div>
    </>
  );
};

export default Home;