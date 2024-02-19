import React from "react";
import Form from "./form";
import Display from "./display";

export default function Main(props) {
  const [tipData, setTipData] = React.useState({
    bill: "",
    tipPercentage: 0.0,
    numberOfPeople: 1,
    isCustom: false,
  });

  console.log(tipData);

  function tipAmount() {
    return (
      Math.round(
        tipData.tipPercentage * (tipData.bill / tipData.numberOfPeople) * 100
      ) / 100
    );
  }

  function totalTip() {
    return (
      Math.round((tipData.bill / tipData.numberOfPeople + tipAmount()) * 100) /
      100
    );
  }
  function handleBill(event) {
    const { value } = event.target;
    setTipData((oldInfo) => ({
      ...oldInfo,
      bill: value,
    }));
  }
  function handlePeople(event) {
    const { value } = event.target;
    setTipData((oldInfo) => ({
      ...oldInfo,
      numberOfPeople: value,
    }));
  }
  function handlePercent(event) {
    const { value } = event.target;
    setTipData((oldInfo) => ({
      ...oldInfo,
      tipPercentage: value,
    }));
  }
  function handleCustom() {
    setTipData((oldInfo) => ({
      ...oldInfo,
      isCustom: !oldInfo.isCustom,
    }));
  }
  function handleReset() {
    setTipData((oldInfo) => ({
      ...oldInfo,
      bill: "",
      tipPercentage: 0.0,
      numberOfPeople: 1,
      isCustom: false,
    }));
  }
  function setValue(value) {
    setTipData((oldInfo) => ({
      ...oldInfo,
      tipPercentage: value,
    }));
  }

  return (
    <main className="mainwrapper">
      <Form
        handleCLick={setValue}
        info={tipData}
        handlePeople={handlePeople}
        handleBill={handleBill}
        handleCustom={handleCustom}
        handlePercent={handlePercent}
      />
      <Display
        handleReset={handleReset}
        totalTip={totalTip}
        tipAmount={tipAmount}
      />
    </main>
  );
}
