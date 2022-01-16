import BoxItem from "./BoxItem";

const BoxList = ({
  list,
  activityIcon,
  checkedIcon,
  activity,
  handlePrayed,
  handleViewDetails,
}) => {
  return (
    <ul className="box-list">
      {list.map((listItem) => (
        <BoxItem
          key={listItem}
          listItem={listItem}
          activityIcon={activityIcon}
          checkedIcon={checkedIcon}
          activity={activity}
          handleActivity={handlePrayed}
          handleViewDetails={handleViewDetails}
        />
      ))}
    </ul>
  );
};

export default BoxList;
