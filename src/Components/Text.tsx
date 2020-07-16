import React from "react";

export type Props = {
  text: string;
  showWordCount?: boolean;
};

function _TextArea(props: Props) {
  return (
    <div>
      <h1>About to begin... {props.text}</h1>
    </div>
  );
}

export default _TextArea;
