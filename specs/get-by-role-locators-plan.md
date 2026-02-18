# GetByRole Link Locators Test Plan

## Application Overview
Test plan for getByRole('link') locators covering navigation links, inline links, header links, footer links, and negative test cases on the practice automation page.

**URL:** https://testautomationpractice.blogspot.com/p/playwrightpractice.html

---

## Test Suite: GetByRole Link Locators

### Test Case 1: Navigate using Home link in navigation

**File:** `tests/get-by-role-link-home.spec.ts`

**Steps:**
1. Navigate to the practice page.
   - expect: Page should load and display content
2. Locate the Home link within navigation using `getByRole('link', { name: 'Home' })`.
   - expect: Link is visible and has href="#"
3. Click the Home link.
   - expect: URL changes to include anchor (#)

**Details:**
- Selector: `page.locator('nav').getByRole('link', { name: 'Home' })`
- Expected href: "#"
- Expected URL after click: ends with "#"

---

### Test Case 2: Navigate using Products link in navigation

**File:** `tests/get-by-role-link-products.spec.ts`

**Steps:**
1. Navigate to the practice page.
   - expect: Page loads correctly
2. Locate the Products link using `getByRole('link', { name: 'Products' })` within nav.
   - expect: Link is visible and href="#"
3. Click the Products link.
   - expect: URL contains anchor

**Details:**
- Selector: `page.locator('nav').getByRole('link', { name: 'Products' })`
- Expected href: "#"
- Expected URL pattern: /#$/

---

### Test Case 3: Navigate using Contact link in navigation

**File:** `tests/get-by-role-link-contact.spec.ts`

**Steps:**
1. Navigate to the practice page.
   - expect: Page accessible
2. Find the Contact link using `getByRole('link', { name: 'Contact' })`.
   - expect: Link visible and clickable
3. Click the Contact link.
   - expect: Navigation anchor applied (URL ends with #)

**Details:**
- Selector: `page.locator('nav').getByRole('link', { name: 'Contact' })`
- Expected href: "#"
- Verify: URL matches /#$/

---

### Test Case 4: Click inline link within list item

**File:** `tests/get-by-role-link-inline.spec.ts`

**Steps:**
1. Navigate to the practice page.
   - expect: Page loads
2. Locate the inline "link" text within "List item 2 with link" using `getByRole('link', { name: 'link' })`.
   - expect: Single matching element found
3. Click the inline link.
   - expect: URL updates to include anchor

**Details:**
- Selector: `page.getByRole('link', { name: 'link' })`
- Purpose: Tests locating and interacting with links embedded in paragraph text
- Expected result: Navigation to anchor

---

### Test Case 5: Verify header site title link

**File:** `tests/get-by-role-link-header.spec.ts`

**Steps:**
1. Navigate to the practice page.
   - expect: Page loads
2. Locate the "Automation Testing Practice" link in the header using `getByRole('link', { name: 'Automation Testing Practice' })`.
   - expect: Link exists and is visible
3. Verify the href attribute matches the site domain.
   - expect: href contains "testautomationpractice.blogspot.com"

**Details:**
- Selector: `page.getByRole('link', { name: 'Automation Testing Practice' })`
- Expected href pattern: /testautomationpractice\.blogspot\.com/
- No click needed - attribute verification only

---

### Test Case 6: Verify multiple Home links on page

**File:** `tests/get-by-role-link-multiple.spec.ts`

**Steps:**
1. Navigate to the practice page.
   - expect: Page loads
2. Count all "Home" links using `page.getByRole('link', { name: 'Home' })`.
   - expect: Multiple matches found (at least 2: header, navigation, footer)
3. Verify the count is 3 (header nav, main nav, footer).
   - expect: Count equals 3
4. Click the last (footer) Home link.
   - expect: Navigation to home URL (testautomationpractice.blogspot.com)

**Details:**
- Selector: `page.getByRole('link', { name: 'Home' })`
- Multiple matching elements on page
- Demonstrates handling duplicate link names
- Uses `.last()` to access footer link

---

### Test Case 7: Negative case - nonexistent link

**File:** `tests/get-by-role-link-negative.spec.ts`

**Steps:**
1. Navigate to the practice page.
   - expect: Page accessible
2. Attempt to locate a link with name "Nonexistent Link" using `getByRole('link', { name: 'Nonexistent Link' })`.
   - expect: No matches found
3. Verify the locator count is 0.
   - expect: `toHaveCount(0)` assertion passes

**Details:**
- Selector: `page.getByRole('link', { name: 'Nonexistent Link' })`
- Tests negative scenario
- Ensures proper error handling for missing elements

---

