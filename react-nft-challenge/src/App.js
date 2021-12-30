// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
// import CollectionCard from "./components/CollectionCard";
import { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
  // async await with our api
  // create a buck of data
  //  punkListData will store all the punks
  const [punkListData, setPunkListData] = useState([]);
  // useEffect will have empty dependencies
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xe13657684cD8F1f2617AEa43eb2AA211bd384e51&order_direction=asc"
      );
      // console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };

    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main />
      {/* <CollectionCard
        id={0}
        name={"kikko punk"}
        traits={[{ value: 8 }]}
        image="https://lh3.googleusercontent.com/zOmQUbs9DhiXNi7U9aWWzrmfTfIdH-oIRETrLyKSr7_1huclb28J_TUaAtcIvVBQSllvXJA13PxJmtPtwU05_Ozt1FsGyWynHcJiSA=w600"
      /> */}
      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;
