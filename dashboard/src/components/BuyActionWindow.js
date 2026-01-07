import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  // consume provider functions
  const { closeBuyWindow } = useContext(GeneralContext);

  useEffect(() => {
    console.log("MODAL MOUNTED uid:", uid);
    return () => {
      console.log("MODAL UNMOUNTED");
    };
  }, [uid]);

  const handleBuyClick = async (e) => {
    e?.preventDefault?.();

    const qty = Number(stockQuantity) || 0;
    const price = Number(stockPrice) || 0;

    try {
      const payload = {
        name: uid,
        qty,
        price,
        mode: "BUY",
      };
      console.log("Posting order:", payload);
      await axios.post("http://localhost:3002/newOrder", payload);
      // only close on success
      closeBuyWindow();
    } catch (err) {
      console.error("order post failed:", err);
      // don't close modal on error — show message in console for now
    }
  };

  const handleCancelClick = (e) => {
    e?.preventDefault?.();
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true" role="dialog" aria-modal="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              min="1"
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;

