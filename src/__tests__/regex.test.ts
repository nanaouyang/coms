import {Regex} from "../regex";

test('regex', () => {
    expect(Regex.PHONE.test('12323555689')).toBe(true)
    expect(Regex.PHONE.test('1')).toBe(false)
    expect(Regex.EMAIL.test('1@1.com')).toBe(true)
    expect(Regex.ID_CARD.test('1')).toBe(false)
});