const employee = require('../code/employee')

describe('Test function employee', () => {
    test('Function exists', () => {
        expect(employee).toBeDefined();
    })

    test('ID and name of the property returns the requested information', () => {
        expect(employee('9852-2-2', 'firstName')).toBe('Jeff');
    })

})