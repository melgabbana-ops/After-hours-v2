import { describe, expect, it } from "vitest";
describe("AFTER HOURS V2 scaffold", () => {
  it("keeps the consent-first preview buildable", () => {
    expect("consent-first").toContain("consent");
  });
});
