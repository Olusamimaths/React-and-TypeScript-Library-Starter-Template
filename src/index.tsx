import * as React from "react";
import Text from "./Components/Text";

export type Props = { text: string };

export default function App(props: Props) {
  const { text } = props;

  return (
    <div style={{ color: "red" }}>
      <Text text={text} />
    </div>
  );
}
