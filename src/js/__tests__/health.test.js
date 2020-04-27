import character from '../../index'

test('Health point', () => {

expect(char.health).toBeGreaterThan(50);
return 'healthy'
});

test('Wounded', () => {
    expect(char.health).toBeGreaterThan(15).toBeLessThan(50);
    return 'wounded'
});

test('Critical', () => {
    expect(char.health).toBeLessThan(15).toBeGreaterThan(0);
    return critical
});