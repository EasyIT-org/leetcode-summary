const { test, expect } = require('@playwright/test');

test('problem detail view hides techniques and shows LeetCode links', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('#techniqueList .card');

  await page.locator('#techniqueList .card').first().click();

  const problemCard = page
    .locator('#problemList .card')
    .filter({ has: page.locator('.problem') })
    .first();

  await expect(problemCard).toBeVisible();

  const titleText = await problemCard.locator('.problem .title').innerText();
  const slugText = await problemCard.locator('.problem .tag').first().innerText();

  const link = problemCard.locator('a.problem-link');
  await expect(link).toHaveAttribute(
    'href',
    new RegExp(`https://leetcode.com/problems/${slugText}/`)
  );

  await problemCard.click();

  await expect(page.locator('#layout')).toHaveClass(/detail-open/);
  await expect(page.locator('.techniques-panel')).toBeHidden();
  await expect(page.locator('.detail-panel')).toBeVisible();

  const problemsPanel = page.locator('.problems-panel');
  const detailPanel = page.locator('.detail-panel');
  const [problemsBox, detailBox] = await Promise.all([
    problemsPanel.boundingBox(),
    detailPanel.boundingBox(),
  ]);

  expect(problemsBox).not.toBeNull();
  expect(detailBox).not.toBeNull();
  expect(problemsBox.x).toBeLessThan(detailBox.x);
  const viewport = page.viewportSize();
  expect(viewport).not.toBeNull();
  if (viewport) {
    expect(problemsBox.y).toBeLessThan(viewport.height);
    expect(detailBox.y).toBeLessThan(viewport.height);
  }

  await expect(page.locator('.detail-title')).toContainText(titleText);
  const description = page.locator('[data-section="description"] .detail-body');
  await expect(description).toHaveText(/\S/);
});
