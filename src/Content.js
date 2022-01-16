import BoxList from "./BoxList";

const Content = ({
  prayerList,
  setPrayerList,
  prayerIcon,
  checkedIcon,
  activity,
  handlePrayed,
  handleViewDetails,
}) => {
  return (
    <main className="main">
      <p>God is Listening</p>
      <BoxList
        className="Box-list"
        list={prayerList}
        setList={setPrayerList}
        activityIcon={prayerIcon}
        checkedIcon={checkedIcon}
        activity={activity}
        handlePrayed={handlePrayed}
        handleViewDetails={handleViewDetails}
      />
    </main>
  );
};

export default Content;
