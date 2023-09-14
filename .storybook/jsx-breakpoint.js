import React from "react";
import { JsxBreakpoint } from "../src/index.js";

export default function JsxBreakpointDemo() {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        }}
      >
        <JsxBreakpoint start="sm">
          <p>Visible On Mobile</p>
        </JsxBreakpoint>
        <JsxBreakpoint start="md">
          <p>Visible On Tablet</p>
        </JsxBreakpoint>
        <JsxBreakpoint start="lg">
          <p>Visible On Desktop</p>
        </JsxBreakpoint>
        <JsxBreakpoint start="xl">
          <p>Visible On Large Desktop</p>
        </JsxBreakpoint>
        <JsxBreakpoint start="2xl">
          <p>Visible On Extra Large Desktop</p>
        </JsxBreakpoint>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        }}
      >
        <JsxBreakpoint start="sm" end="sm">
          <p>Only Visible On Mobile</p>
        </JsxBreakpoint>
        <JsxBreakpoint start="md" end="md">
          <p>Only Visible On Tablet</p>
        </JsxBreakpoint>
        <JsxBreakpoint start="lg" end="lg">
          <p>Only Visible On Desktop</p>
        </JsxBreakpoint>
        <JsxBreakpoint start="xl" end="xl">
          <p>Only Visible On Large Desktop</p>
        </JsxBreakpoint>
        <JsxBreakpoint start="2xl" end="2xl">
          <p>Only Visible On Extra Large Desktop</p>
        </JsxBreakpoint>
      </div>
    </>
  );
}
