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

    // Try multiple possible selectors for the navigation link
    cy.get('body').then(($body) => {
      const selectors = [
        `a[data-tracker-id="${item}"]`,
        `a[href*="${expectedUrl}"]`,
        `a:contains("${item}")`,
        `button:contains("${item}")`
      ];

      // Log available links for debugging
      cy.log('Available links:', $body.find('a').map((i, el) => el.href).get());

      // Try each selector until one works
      for (const selector of selectors) {
        if ($body.find(selector).length) {
          cy.get(selector).first().click();
          // Wait for the URL to include the expected URL
          cy.url().should('include', expectedUrl);
          // Ensure the new page is fully loaded
          cy.get('body').should('be.visible');
          // Pause for 3 seconds
          cy.wait(3000);
          return;
        }
      }

      // If no selectors work, log the available elements
      cy.log('Navigation elements found:', $body.find('nav, header, .navigation, .menu').html());
      throw new Error(`Could not find navigation element for ${item}`);
    });
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