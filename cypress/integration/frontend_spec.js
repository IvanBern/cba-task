describe('Nav Menus', () => {
    var nav;    
    beforeEach(() => {
        cy.clearCookies()
        cy.visit('/')
        cy.get("nav .menu-toggle-icon").then($button => {
            if ($button.is(':visible')) {
                // Mobile navigation
                cy.get('nav .menu-toggle-icon').click()
                nav = 'nav .scroll-wrapper'
            }
            else {
                // Desktop navigation
                nav = 'nav .nav-row-show'
            }
        })
    })

/**
 * This function clicks the navigation link and assserts that the new page is loaded sucessfully 
 * @item data-tracker-id of the menu item link
 * @expectedUrl Expected target page url
 */
    function testMenuItem(item, expectedUrl) {

        cy.get(nav)
            .find('a[data-tracker-id="' + item + '"]')
            .click()
            .url().should('include', expectedUrl)
    }

    it('Test Navigation Menu - Banking', () => {
        testMenuItem('Banking', '/banking.html')
    })

    it('Test Navigation Menu - Home Loans', () => {
        testMenuItem('Hom', '/home-loans.html')
    })

    it('Test Navigation Menu - Insurance', () => {
        testMenuItem('Insurance', '/insurance.html')
    })

    it('Test Navigation Menu - Investing and Super', () => {
        testMenuItem('Investin', '/investing-and-super.html')
    })

    it('Test Navigation Menu - Business', () => {
        testMenuItem('Business', '/business.html')
    })

    it('Test Navigation Menu - Institutional', () => {
        testMenuItem('Institutional', '/institutional.html')
    })
})
