import "./App.css";
import FormSection from "./components/FormSection";
import ReceiptSection from "./components/ReceiptSection";

function App() {
  return (
    <div className="App m-8 flex flex-wrap gap-10">
      <FormSection />
      <ReceiptSection />
    </div>
  );
}

export default App;
