import { FaPrayingHands, FaCheck } from "react-icons/fa";
import { useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const [prayerList, setPrayerList] = useState([
    {
      id: 1,
      title: "A Prayer for Thanks",
      details:
        "God, You are Good, and Your steadfast love endures forever! Even in the hardest seasons, I always have a reason to worship you. Thank You for giving me victory and abundant life in Jesus Christ! Although I don't deserve it, You shower me with unconditional love and forgiveness.",
      prayed: false,
    },
    {
      id: 2,
      title: "A Prayer for Peace",
      details:
        "God, Even when my life feels chaotic, I can experience Your peace because of what Jesus did on the cross. Thank You for sending us Your Son! He has made a way for us to Know and experience You.",
      prayed: false,
    },
    {
      id: 3,
      title: "A Prayer for Joy",
      details: "Dear God! Thank You for exceedingly great joy!",
      prayed: false,
    },
  ]);

  const handlePrayed = (id) => {
    const myPrayerList = prayerList.map((prayerListItem) =>
      prayerListItem.id === id
        ? { ...prayerListItem, prayed: !prayerListItem.prayed }
        : prayerListItem
    );
    setPrayerList(myPrayerList);
  };

  return (
    <div className="App">
      <Header title="YAHWEH" />
      <Content
        prayerList={prayerList}
        setPrayerList={setPrayerList}
        prayerIcon={<FaPrayingHands />}
        checkedIcon={<FaCheck />}
        activity="Pray"
        handlePrayed={handlePrayed}
      />
      <Footer />
    </div>
  );
}

export default App;
