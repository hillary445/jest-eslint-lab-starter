const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

test ('capitalize first letter of each word', () =>{
    expect(capitalizeWords('hello world')).toBe('Hello World');
});

test ('Filter active users in an array' , () =>{

    const users = [
        { name: 'Alice', isActive: true },
        { name: 'Bob', isActive: false},
    ];

    expect(filterActiveUsers(users)).toEqual([
        { name: 'Alice', isActive: true}
    ]);

});
test('Logs an action performed by a user with a timestamp', () => {
    const result = logAction("logged in", "Alice");

    expect(result).toBeDefined();
    expect(result).toContain("User Alice performed logged in");
    
    const parts = result.split(" at ");
    expect(parts.length).toBe(2);

    expect(() => new Date(parts[1])).not.toThrow();
});

