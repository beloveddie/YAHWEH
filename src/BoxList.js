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
    <ul className="list">
      {list.map((listItem) => (
        <BoxItem
          key={listItem.id}
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
