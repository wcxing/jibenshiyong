import React, { useCallback, useEffect, useRef } from "react";
import "./index.css";
import { Input } from "antd";

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>();

  const onChange = useCallback((e) => {
    console.log(e);
  }, []);

  const handlePaste = useCallback((e) => {
    console.log("onHandlePaste");
    const items = e.clipboardData.items;
    console.log("items", e.clipboardData);
    if (items && items.length > 0) {
      const item = items[0];
      if (item.type.indexOf("image") !== -1) {
        // 粘贴的是图片
      }
    }
  }, []);

  useEffect(() => {
    console.log("bind----");
    const input = document.body;
    input.addEventListener("paste", handlePaste);

    return () => {
      input.removeEventListener("paste", handlePaste);
    };
  }, [handlePaste]);

  return <input onChange={onChange} ref={inputRef} placeholder="Basic usage" />;
};

export default App;
