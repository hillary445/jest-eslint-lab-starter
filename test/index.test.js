const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

describe('capitalizeWords', () => {
    test('capitalizes the first letter of each word (normal case)', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
    });

    test('returns an empty string when given an empty string', () => {
        expect(capitalizeWords('')).toBe('');
    });

    test('handles strings with special characters', () => {
        expect(capitalizeWords('hello-world')).toBe('Hello-World');
        expect(capitalizeWords('hello_world test')).toBe('Hello_world Test');
    });

    test('capitalizes a single-word string', () => {
        expect(capitalizeWords('hillary')).toBe('Hillary');
    });
});

describe('filterActiveUsers', () => {

    test('correctly filters active users from array (mixed)', () => {
        const users = [
            { name: 'Alice', isActive: true },
            { name: 'Bob', isActive: false },
            { name: 'Eve', isActive: true }
        ];

        expect(filterActiveUsers(users)).toEqual([
            { name: 'Alice', isActive: true },
            { name: 'Eve', isActive: true }
        ]);
    });

    test('returns an empty array when all users are inactive', () => {
        const users = [
            { name: 'Bob', isActive: false },
            { name: 'John', isActive: false }
        ];

        expect(filterActiveUsers(users)).toEqual([]);
    });

    test('returns an empty array when given an empty array', () => {
        expect(filterActiveUsers([])).toEqual([]);
    });
});

describe('logAction', () => {
    test('generates correct log string for valid inputs', () => {
        const result = logAction('login', 'Alice');

        expect(result).toMatch(/User Alice performed login at/);

        const parts = result.split(' at ');
        expect(parts.length).toBe(2);
        expect(() => new Date(parts[1])).not.toThrow();
    });

    test('handles missing action gracefully', () => {
        const result = logAction('', 'Alice');
        expect(result).toContain('User Alice performed ');
    });

    test('handles missing username gracefully', () => {
        const result = logAction('login', '');
        expect(result).toContain('User  performed login');
    });

    test('handles empty strings for both inputs', () => {
        const result = logAction('', '');
        expect(result).toContain('User  performed ');
    });
});
