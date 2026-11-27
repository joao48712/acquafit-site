import { expect, test } from "vitest";
import config from "@/next.config";

test("as imagens saem em formatos modernos", () => {
  expect(config.images?.formats).toContain("image/webp");
});
