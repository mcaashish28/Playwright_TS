# GetByPlaceholder Locators Test Plan

## Application Overview
Test plan for getByPlaceholder() locators covering text inputs, textarea, search boxes, and form input interactions on the practice automation page.

**URL:** https://testautomationpractice.blogspot.com/p/playwrightpractice.html

---

## Test Suite: GetByPlaceholder Locators

### Test Case 1: Locate full name input by placeholder

**File:** `tests/get-by-placeholder-fullname.spec.ts`

**Steps:**
1. Navigate to the practice page.
   - expect: Page loads with "4. getByPlaceholder() Locators" section visible
2. Locate the full name input using `getByPlaceholder('Enter your full name')`.
   - expect: Single textbox element found
3. Verify element is visible and is a textbox.
   - expect: Element visible and has textbox role
4. Fill with test data.
   - expect: Input accepts text value "John Doe"
5. Verify filled value.
   - expect: Input value equals "John Doe"

**Details:**
- Selector: `page.getByPlaceholder('Enter your full name')`
- Input type: text
- Expected role: textbox
- Test data: "John Doe"

---

### Test Case 2: Locate phone number input by placeholder

**File:** `tests/get-by-placeholder-phone.spec.ts`

**Steps:**
1. Navigate to the practice page.
   - expect: Page loads
2. Locate phone number input using `getByPlaceholder('Phone number (xxx-xxx-xxxx)')`.
   - expect: Textbox element found
3. Verify element is visible.
   - expect: Element visible
4. Fill with valid phone format.
   - expect: Input accepts "123-456-7890"
5. Verify filled value matches input.
   - expect: Input value equals "123-456-7890"

**Details:**
- Selector: `page.getByPlaceholder('Phone number (xxx-xxx-xxxx)')`
- Input type: text (phone)
- Placeholder format: xxx-xxx-xxxx
- Test data: "123-456-7890"
- Expected behavior: Accepts standard phone format

---

### Test Case 3: Locate message textarea by placeholder

**File:** `tests/get-by-placeholder-message.spec.ts`

**Steps:**
1. Navigate to the practice page.
   - expect: Page loads
2. Locate message textarea using `getByPlaceholder('Type your message here...')`.
   - expect: Textarea element found
3. Verify element is visible.
   - expect: Element visible
4. Type multi-line message.
   - expect: Textarea accepts text input
5. Verify message content.
   - expect: Textarea value contains entered text

**Details:**
- Selector: `page.getByPlaceholder('Type your message here...')`
- Input type: textarea
- Expected role: textbox
- Test data: Multi-line message
- Expected behavior: Accepts multiple lines of text

---

### Test Case 4: Locate search product input by placeholder

**File:** `tests/get-by-placeholder-search.spec.ts`

**Steps:**
1. Navigate to the practice page.
   - expect: Page loads
2. Locate search input using `getByPlaceholder('Search products...')`.
   - expect: Searchbox element found
3. Verify element is visible.
   - expect: Element visible
4. Type search term.
   - expect: Input accepts "laptop"
5. Verify search value.
   - expect: Input value equals "laptop"

**Details:**
- Selector: `page.getByPlaceholder('Search products...')`
- Input type: search
- Expected role: searchbox
- Test data: "laptop"
- Expected behavior: Accepts search keywords

---

### Test Case 5: Click search button after search input

**File:** `tests/get-by-placeholder-search-button.spec.ts`

**Steps:**
1. Navigate to the practice page.
   - expect: Page loads
2. Locate search input using placeholder.
   - expect: Searchbox found and visible
3. Type search query.
   - expect: Input accepts "product search"
4. Locate and click Search button.
   - expect: Button found and clickable
5. Verify interaction succeeds.
   - expect: No errors on click

**Details:**
- Selector: `page.getByPlaceholder('Search products...')`
- Button: "Search" button adjacent to search box
- Test data: "product search"
- Expected interaction: Click succeeds without error
- Expected behavior: Form submission or search action

---

### Test Case 6: Clear and re-enter placeholder input

**File:** `tests/get-by-placeholder-clear-reenter.spec.ts`

**Steps:**
1. Navigate to the practice page.
   - expect: Page loads
2. Locate full name input by placeholder.
   - expect: Textbox found
3. Fill initial value.
   - expect: Input accepts "John Doe"
4. Clear the input.
   - expect: Input becomes empty
5. Re-fill with new value.
   - expect: Input accepts "Jane Smith"
6. Verify final value.
   - expect: Input value equals "Jane Smith"

**Details:**
- Selector: `page.getByPlaceholder('Enter your full name')`
- Initial value: "John Doe"
- Cleared value: "" (empty)
- Final value: "Jane Smith"
- Expected behavior: Input can be cleared and re-filled multiple times

---

### Test Case 7: Verify multiple placeholder inputs

**File:** `tests/get-by-placeholder-multiple.spec.ts`

**Steps:**
1. Navigate to the practice page.
   - expect: Page loads
2. Count all placeholder inputs.
   - expect: Identify all 4 inputs:
     - Enter your full name
     - Phone number (xxx-xxx-xxxx)
     - Type your message here...
     - Search products...
3. Verify each input is visible.
   - expect: All 4 inputs visible
4. Verify each has correct role.
   - expect: First 3 are textbox/textarea, last is searchbox

**Details:**
- Total placeholders: 4
- Distribution: 3 textboxes + 1 textarea + 1 searchbox
- Expected count: 4 total inputs with placeholder text
- Purpose: Ensure all placeholder inputs are accessible

---

### Test Case 8: Negative case - nonexistent placeholder

**File:** `tests/get-by-placeholder-negative.spec.ts`

**Steps:**
1. Navigate to the practice page.
   - expect: Page loads
2. Attempt to locate nonexistent placeholder.
   - expect: `getByPlaceholder('Nonexistent placeholder text')` returns empty
3. Verify locator count is 0.
   - expect: `toHaveCount(0)` assertion passes

**Details:**
- Selector: `page.getByPlaceholder('Nonexistent placeholder text')`
- Expected result: No matches found
- Expected count: 0
- Purpose: Test negative scenario and error handling

---

## Summary of Test Coverage

| Test Case | Placeholder Text | Input Type | Interaction | Expected |
|-----------|------------------|------------|-------------|----------|
| 1 | Enter your full name | textbox | Fill & verify | "John Doe" |
| 2 | Phone number (xxx-xxx-xxxx) | textbox | Fill & verify | "123-456-7890" |
| 3 | Type your message here... | textarea | Type multi-line | Message text |
| 4 | Search products... | searchbox | Fill & verify | "laptop" |
| 5 | Search products... | searchbox | Fill & click button | Click succeeds |
| 6 | Enter your full name | textbox | Clear & re-fill | "Jane Smith" |
| 7 | Multiple placeholders | mixed | Count & verify | 4 total |
| 8 | Nonexistent placeholder | N/A | Not found | Count = 0 |

---

## Key Locator Patterns

| Pattern | Use Case | Example |
|---------|----------|---------|
| `getByPlaceholder('text')` | Exact placeholder match | `getByPlaceholder('Enter your full name')` |
| `getByPlaceholder('text', { exact: true })` | Strict exact match | `getByPlaceholder('Phone number (xxx-xxx-xxxx)', { exact: true })` |
| `getByPlaceholder(/pattern/)` | Regex pattern | `getByPlaceholder(/search/i)` |
| Combined with role | Precise targeting | `page.getByRole('textbox', { name: /placeholder/ })` |

---

## Key Assertions Used

- `toBeVisible()` - Verify input visible on page
- `toHaveRole(role)` - Verify input correct semantic role
- `toHaveValue(value)` - Verify input filled correctly
- `toHaveCount(n)` - Verify number of matching elements
- `toContainText(text)` - For textarea content verification
- `click()` - Interact with buttons
- `fill(value)` - Enter text into inputs
- `clear()` - Empty input field

---

## Execution Commands

```bash
# Run all getByPlaceholder tests
npx playwright test tests/get-by-placeholder-*.spec.ts

# Run specific test
npx playwright test tests/get-by-placeholder-fullname.spec.ts

# Run by test name pattern
npx playwright test -g "Locate full name"

# Run with HTML report
npx playwright test tests/get-by-placeholder-*.spec.ts --reporter=html

# Run in headed mode
npx playwright test tests/get-by-placeholder-*.spec.ts --headed