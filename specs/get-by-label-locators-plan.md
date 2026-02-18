# GetByLabel Test Plan

## Application Overview

Test plan for getByLabel locators covering input controls and radio group interactions.

## Test Scenarios

### 1. getByLabel Locators Suite

**Seed:** `tests/seed.spec.ts`

#### 1.1. Email input interaction

**File:** `tests/get-by-label-locators.spec.ts`

**Steps:**
  1. Navigate to the practice page.
    - expect: Page should load and display content
  2. Use getByLabel('Email Address:') to locate the textbox.
    - expect: Locator resolves to the email input element
  3. Fill the textbox with 'user@example.com'.
    - expect: Textbox value equals 'user@example.com'

#### 1.2. Password input interaction

**File:** `tests/get-by-label-locators.spec.ts`

**Steps:**
  1. Go to the practice page.
    - expect: Page loads correctly
  2. Locate password field via getByLabel('Password:').
    - expect: Password textbox is visible
  3. Type 'secret123' into the field.
    - expect: Field value matches 'secret123'

#### 1.3. Age spinbutton control

**File:** `tests/get-by-label-locators.spec.ts`

**Steps:**
  1. Open the practice page.
    - expect: Page loaded
  2. Find the spinbutton labeled 'Your Age:'.
    - expect: The spinbutton is visible and enabled
  3. Set its value to 30 using fill or type and press Tab.
    - expect: Spinbutton value becomes '30'

#### 1.4. Shipping method radios

**File:** `tests/get-by-label-locators.spec.ts`

**Steps:**
  1. Visit the practice page.
    - expect: Page appears
  2. Select the radio labeled 'Standard' with getByLabel.
    - expect: Standard radio is checked
  3. Then select 'Express'.
    - expect: Express radio becomes checked and Standard is unchecked

#### 1.5. Negative label case

**File:** `tests/get-by-label-locators.spec.ts`

**Steps:**
  1. Navigate to page.
    - expect: Page accessible
  2. Attempt to getByLabel('Nonexistent Label').
    - expect: Locator count equals 0
