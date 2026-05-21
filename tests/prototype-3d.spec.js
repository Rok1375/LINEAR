import { test, expect } from '@playwright/test';

test.describe('Prototype 2 3D Baseline', () => {
  test('should render without console errors', async ({ page }) => {
    const errors = [];
    page.on('pageerror', (err) => errors.push(err.message));
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('http://localhost:3000');

    // Wait for the prototype section to appear
    const heroSection = page.locator('.prototype-3d-hero-container');
    await expect(heroSection).toBeVisible({ timeout: 10000 });

    // Assert no console errors
    expect(errors).toHaveLength(0);
  });

  test('should capture screenshots for different viewports', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Desktop
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(2000); // Allow canvas to render
    await page.screenshot({ path: 'prototype-results/3d-baseline/screenshots/desktop.png', fullPage: true });
    
    // Tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'prototype-results/3d-baseline/screenshots/tablet.png', fullPage: true });
    
    // Mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'prototype-results/3d-baseline/screenshots/mobile.png', fullPage: true });
  });
});
