describe('Nav Menus', () => {
  beforeEach(() => {
    // Clear cookies and set up request interception
    cy.clearCookies();
    
    // Visit the page with additional headers
    cy.visit('/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1'
      }
    });

    // Wait for the page to load and log the page content
    cy.get('body').should('be.visible').then(($body) => {
      cy.log('Page loaded. Body content:', $body.html());
    });
  });

  /**
   * This function clicks the navigation link and asserts that the new page is loaded successfully
   * @item data-tracker-id of the menu item link
   * @expectedUrl Expected target page url
   */
  function testMenuItem(item, expectedUrl) {
    // Ensure the page is loaded
    cy.get('body').should('be.visible');

    // Check viewport width to determine if we're in mobile view
    cy.window().then((win) => {
      const isMobile = win.innerWidth <= 768; // Common mobile breakpoint
      cy.log('Viewport width:', win.innerWidth);
      cy.log('Is mobile view:', isMobile);

      if (isMobile) {
        // Mobile view - click hamburger menu first
        cy.log('Mobile view detected, attempting to open hamburger menu');
        cy.get('[data-tracker-locationid="mv_burger"]').click({ force: true });
        
        // Wait for the menu to be visible
        cy.wait(1000);

        // Try to find and click the menu item in the mobile menu
        cy.get('body').then(($body) => {
          // Log all available links and buttons
          const allElements = $body.find('a, button');
          cy.log('All available elements:', allElements.map((i, el) => ({
            tag: el.tagName,
            text: el.textContent.trim(),
            href: el.href,
            classes: el.className,
            attributes: Array.from(el.attributes).map(attr => `${attr.name}="${attr.value}"`).join(' ')
          })).get());

          // Try to find the menu item
          const menuItem = $body.find(`a[href*="${expectedUrl}"], a:contains("${item}"), button:contains("${item}")`).first();
          if (menuItem.length) {
            cy.log('Found menu item:', menuItem[0].outerHTML);
            // Use force: true to click even if the element is not visible
            cy.wrap(menuItem).click({ force: true });
          } else {
            // If not found, try clicking any element that contains the item text
            const fallbackItem = $body.find(`*:contains("${item}")`).first();
            if (fallbackItem.length) {
              cy.log('Found fallback item:', fallbackItem[0].outerHTML);
              // Use force: true to click even if the element is not visible
              cy.wrap(fallbackItem).click({ force: true });
            } else {
              throw new Error(`Could not find menu item for ${item}`);
            }
          }
        });
      } else {
        // Desktop view - directly click the menu item
        cy.log('Desktop view detected, attempting to click menu item directly');
        const selectors = [
          `a[data-tracker-id="${item}"]`,
          `a[href*="${expectedUrl}"]`,
          `a:contains("${item}")`,
          `button:contains("${item}")`
        ];

        // Try each selector until one works
        cy.get('body').then(($body) => {
          for (const selector of selectors) {
            if ($body.find(selector).length) {
              cy.get(selector).first().click();
              break;
            }
          }
        });
      }
    });

    // Wait for the URL to include the expected URL
    cy.url().should('include', expectedUrl);
    // Ensure the new page is fully loaded
    cy.get('body').should('be.visible');
    // Pause for 3 seconds
    cy.wait(3000);
  }

  it('Test Navigation Menu - Banking', () => {
    testMenuItem('Banking', '/banking');
  });

  it('Test Navigation Menu - Home Loans', () => {
    testMenuItem('Home Loans', '/home-loans');
  });

  it('Test Navigation Menu - Insurance', () => {
    testMenuItem('Insurance', '/insurance');
  });

  it('Test Navigation Menu - Investing and Super', () => {
    testMenuItem('Investing', '/investing-and-super');
  });

  it('Test Navigation Menu - Business', () => {
    testMenuItem('Business', '/business');
  });

  it('Test Navigation Menu - Institutional', () => {
    testMenuItem('Institutional', '/institutional');
  });
}); 