// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";
import { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
  // async await with our api
  // create a buck of data"key": "price", "value": "13"
  //  punkListData will store all the punks
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0); // state variable

  // useEffect will have empty dependencies
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x3752dDaa1e5F523Ec476Ff2c2f76600bf9432d36&order_direction=asc"
      );
      // console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}

      {/* <CollectionCard
        id={0}
        name={"kikko punk"}
        traits={[{ value: 8 }]}
        image="https://lh3.googleusercontent.com/zOmQUbs9DhiXNi7U9aWWzrmfTfIdH-oIRETrLyKSr7_1huclb28J_TUaAtcIvVBQSllvXJA13PxJmtPtwU05_Ozt1FsGyWynHcJiSA=w600"
      /> */}
    </div>
  );
}

export default App;
