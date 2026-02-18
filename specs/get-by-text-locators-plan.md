# GetByText Locators Test Plan

## Application Overview
Test plan for getByText() locators covering paragraph text, strong/emphasized elements, list items, inline links, buttons, and negative test cases on the practice automation page.

**URL:** https://testautomationpractice.blogspot.com/p/playwrightpractice.html

---

## Test Suite: GetByText Locators

### Test Case 1: Locate paragraph by partial text match

**File:** `tests/get-by-text-paragraph-partial.spec.ts`

**Steps:**
1. Navigate to the practice page.
   - expect: Page loads and displays content
2. Locate paragraph using `page.getByText('This paragraph contains some')`.
   - expect: Partial text match returns element
3. Verify paragraph is visible.
   - expect: Element visible in viewport
4. Verify element has role="paragraph".
   - expect: Correct semantic role

**Details:**
- Selector: `page.getByText('This paragraph contains some')`
- Purpose: Test partial text matching functionality
- Expected role: paragraph

---

### Test Case 2: Locate strong/emphasized text element

**File:** `tests/get-by-text-strong.spec.ts`

**Steps:**
1. Navigate to the practice page.
   - expect: Page loads
2. Locate strong text "important" using exact match.
   - expect: `page.getByText('important', { exact: true })` returns element
3. Verify element is visible.
   - expect: Strong element visible
4. Verify it's within paragraph context.
   - expect: Element located correctly

**Details:**
- Selector: `page.getByText('important', { exact: true })`
- Purpose: Test exact text matching with strong elements
- Expected element type: strong/generic
- Note: Use exact match to avoid matching alert text

---

### Test Case 3: Locate paragraph by full text

**File:** `tests/get-by-text-paragraph-full.spec.ts`

**Steps:**
1. Navigate to the practice page.
   - expect: Page loads
2. Locate full paragraph text.
   - expect: `page.getByText('Another paragraph with colored text for demonstration.')` found
3. Verify element is visible.
   - expect: Paragraph visible
4. Verify text content.
   - expect: Contains expected substring

**Details:**
- Selector: `page.getByText('Another paragraph with colored text for demonstration.')`
- Purpose: Test full text matching
- Expected result: Single paragraph element located

---

### Test Case 4: Locate multiple list items by text

**File:** `tests/get-by-text-list-items.spec.ts`

**Steps:**
1. Navigate to the practice page.
   - expect: Page loads
2. Locate "List item 1" using getByText.
   - expect: Element visible
3. Locate "Special: Unique text identifier".
   - expect: Element visible
4. Verify both elements are in list context.
   - expect: Both list item text found

**Details:**
- Selector 1: `page.getByText('List item 1')`
- Selector 2: `page.getByText('Special: Unique text identifier')`
- Purpose: Test locating different text in list items
- Expected count: 1 for each query

---

### Test Case 5: Locate and interact with inline link by text

**File:** `tests/get-by-text-inline-link.spec.ts`

**Steps:**
1. Navigate to the practice page.
   - expect: Page loads
2. Locate inline "link" text.
   - expect: `page.getByText('link')` returns element
3. Verify element is visible and clickable.
   - expect: Link visible
4. Click the inline link.
   - expect: Click succeeds
5. Verify URL contains anchor.
   - expect: URL ends with "#"

**Details:**
- Selector: `page.getByText('link')`
- Purpose: Test locating and clicking inline links by text
- Expected navigation: Anchor navigation
- Note: Linked within "List item 2 with link"

---

### Test Case 6: Locate button by text and interact

**File:** `tests/get-by-text-button.spec.ts`

**Steps:**
1. Navigate to the practice page.
   - expect: Page loads
2. Locate "Submit Form" button using getByText.
   - expect: Button element located
3. Verify button is visible and clickable.
   - expect: Button visible
4. Click the button.
   - expect: Click succeeds without errors
5. Verify form message still visible.
   - expect: "Click the button above to submit your information." visible

**Details:**
- Selector: `page.getByText('Submit Form')`
- Purpose: Test locating and clicking buttons by text
- Expected result: Button interaction successful
- Post-click state: Page remains on same URL

---

### Test Case 7: Locate descriptive text below button

**File:** `tests/get-by-text-description.spec.ts`

**Steps:**
1. Navigate to the practice page.
   - expect: Page loads
2. Locate description text.
   - expect: `page.getByText('Click the button above to submit your information.')` found
3. Verify text is visible.
   - expect: Element visible
4. Verify element has paragraph role.
   - expect: role="paragraph"

**Details:**
- Selector: `page.getByText('Click the button above to submit your information.')`
- Purpose: Test locating contextual/instructional text
- Expected role: paragraph
- Location: Below Submit Form button

---

### Test Case 8: Negative case - nonexistent text

**File:** `tests/get-by-text-negative.spec.ts`

**Steps:**
1. Navigate to the practice page.
   - expect: Page loads
2. Attempt to locate nonexistent text.
   - expect: `page.getByText('This text does not exist on the page')` returns empty
3. Verify locator count is 0.
   - expect: `toHaveCount(0)` assertion passes

**Details:**
- Selector: `page.getByText('This text does not exist on the page')`
- Purpose: Test negative scenario with missing text
- Expected result: No matches found
- Expected count: 0

---

### Test Case 9: Case sensitivity in text matching

**File:** `tests/get-by-text-case-sensitive.spec.ts`

**Steps:**
1. Navigate to the practice page.
   - expect: Page loads
2. Locate text with exact case match.
   - expect: `page.getByText('List item 1', { exact: true })` found
3. Verify element is visible.
   - expect: Element visible
4. Verify exact match count is 1.
   - expect: Count equals 1
5. Attempt wrong case match (negative).
   - expect: Different case returns no match

**Details:**
- Selector: `page.getByText('List item 1', { exact: true })`
- Purpose: Test case sensitivity and exact matching
- Expected behavior: Exact match only
- Alternative (should fail): `page.getByText('LIST ITEM 1', { exact: true })`

---

