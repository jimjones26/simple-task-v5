import { test, expect } from '@playwright/test';

test('development server starts and welcome page is accessible', async ({ page }) => {
	// Navigate to the expected welcome page URL.
	await page.goto('http://localhost:5173');

	// Wait for a specific element that indicates the page has loaded.  We'll look for
	// the "Welcome to SvelteKit" heading.
	const welcomeHeading = page.locator('h1', { hasText: 'Welcome to SvelteKit' });

	// Expect the heading to be visible.
	await expect(welcomeHeading).toBeVisible();
});
