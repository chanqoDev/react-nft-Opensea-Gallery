import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";

function App() {
  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={0}
        name={"kikko punk"}
        traits={[{ value: 8 }]}
        image="https://lh3.googleusercontent.com/zOmQUbs9DhiXNi7U9aWWzrmfTfIdH-oIRETrLyKSr7_1huclb28J_TUaAtcIvVBQSllvXJA13PxJmtPtwU05_Ozt1FsGyWynHcJiSA=w600"
      />
    </div>
  );
}

export default App;
