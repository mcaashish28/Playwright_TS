# GetByAltText Locators Test Plan

## Application Overview  
This plan covers locating elements (primarily images) by their `alt` text on the PlaywrightPractice page.  
URL: https://testautomationpractice.blogspot.com/p/playwrightpractice.html

The page currently has one useful image with alt text **"logo image"** and another image lacking an alt attribute.

---

## Test Scenarios

### 1. Locate logo by alt text  
**File:** `tests/get-by-alt-text-logo.spec.ts`  
Steps:
1. Navigate to the practice page.  
   - expect: Page loads successfully.
2. Use `getByAltText('logo image')`.  
   - expect: Locator resolves to a single element.
3. Assert the element is visible.  
4. Verify it has the correct `src` (e.g., contains “logo” or known URL).  
5. Optionally click it and confirm navigation to homepage.

### 2. Handle image without alt attribute  
**File:** `tests/get-by-alt-text-empty.spec.ts`  
Steps:
1. Navigate to page.  
2. Use `getByAltText('')` (empty string).  
   - expect: It finds the element with an empty alt.  
3. Assert count is 1 and element is visible.

### 3. Negative case – nonexistent alt text  
**File:** `tests/get-by-alt-text-negative.spec.ts`  
Steps:
1. Navigate to the page.  
2. Attempt `getByAltText('nonexistent')`.  
   - expect: Locator count is `0`.

### 4. Clickable logo behavior  
**File:** `tests/get-by-alt-text-logo-click.spec.ts`  
Steps:
1. Navigate to the page.  
2. Locate logo via alt text and click it.  
3. Verify navigation to the expected URL (e.g., homepage or `#`).  
4. Assert URL change occurred.

### 5. Accessibility attributes  
**File:** `tests/get-by-alt-text-accessibility.spec.ts`  
Steps:
1. Navigate to page.  
2. Locate the logo image.  
3. Assert it has role `"img"` and non-empty alt.  
4. Verify there are no duplicate alt texts on the page.

### 6. Regex & case‑insensitive matching  
**File:** `tests/get-by-alt-text-regex.spec.ts`  
Steps:
1. Navigate to page.  
2. Use regex: `getByAltText(/logo/i)` and `getByAltText(/./)` to match images.  
3. Assert the correct number of matches for each pattern.

---

## Summary Table

| Case | Alt Text | Expectation | Notes |
|------|----------|-------------|-------|
| Logo | "logo image" | 1 visible image | clickable |
| Empty | "" | 1 element | alt-less image |
| Negative | "nonexistent" | 0 matches | error handling |
| Click | "logo image" | navigation | verify URL |
| Accessibility | "logo image" | role=img, alt exists | semantic check |
| Regex | `/logo/i` | 1 match | flexible locator |

---

## Locator Patterns

```ts
page.getByAltText('logo image');
page.getByAltText('');              // alt-less element
page.getByAltText(/logo/i);         // case‑insensitive
page.getByAltText(/./);             // any non‑empty alt