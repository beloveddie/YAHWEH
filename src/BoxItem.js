import ViewDetails from "./ViewDetails";
import { useState } from "react";

const BoxItem = ({
  listItem,
  activityIcon,
  checkedIcon,
  activity,
  handleActivity,
}) => {
  const [viewDetails, setViewDetails] = useState(false);

  const handleViewDetails = () => {
    const myViewDetails = viewDetails;
    setViewDetails(!myViewDetails);
  };

  const listStyle = {
    position: "relative",
    minWidth: "20rem",
    height: "20rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#040930",
    listStyleType: "none",
    margin: "1.25rem",
    padding: ".25rem",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    boxShadow: "2px 2px 5px #FFFFFF",
  };

  const h2Style = {
    // fontSize: "1.8em",
    paddingBottom: "1.5rem",
  };

  const pStyle = {
    color: "#7A7A7A",
    fontWeight: "400",
    cursor: "pointer",
  };

  return (
    <>
      <li style={listStyle}>
        <h2 style={h2Style}>{listItem.title}</h2>

        <p style={pStyle} onClick={() => handleViewDetails()}>
          {!viewDetails ? "View Details" : "Hide Details"}
        </p>
        <span
          className="pray"
          role="button"
          tabIndex="0"
          onClick={() => handleActivity(listItem.id)}
        >
          {!listItem.prayed ? (
            <>
              {activityIcon} <p>{activity}</p>
            </>
          ) : (
            <>
              {checkedIcon} <p>{activity + "ed"}</p>
            </>
          )}
        </span>
      </li>
      {viewDetails && <ViewDetails details={listItem.details} />}
    </>
  );
};

export default BoxItem;
