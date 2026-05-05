import { test, expect } from "@playwright/test";

test("page renders all sections", async ({ page }) => {
  const response = await page.goto("/");
  expect(response?.status()).toBe(200);

  await expect(
    page.getByRole("heading", { level: 1 })
  ).toContainText("Senior Software Engineer");

  for (const id of ["about", "projects", "skills", "contact"]) {
    await expect(page.locator(`#${id}`)).toBeVisible();
  }

  const canonical = page.locator('link[rel="canonical"]');
  await expect(canonical).toHaveAttribute("href", "https://conradpreston.dev");
});
