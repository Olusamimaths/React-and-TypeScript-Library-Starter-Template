import * as React from "react";
import App from "..";
import TestRenderer from "react-test-renderer";

test("Component should show 'red' text 'Hello World'", () => {
  const component = TestRenderer.create(<App text="World" />);
  const testInstance = component.root;

  expect(testInstance.findByType(App).props.text).toBe("World");
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
