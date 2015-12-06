import selectiveWhitespace from './index.js';
import test from 'ava';


test('should expect a string', t => {
    t.throws(() => { selectiveWhitespace({})}, 'Expected a string');
});

test('should condense all whitespace', t => {
    t.is(selectiveWhitespace('  FOO      BAR    BAZ '), 'FOO BAR BAZ');
    t.is(selectiveWhitespace('  \n\tFOO      \n\tBAR    \n\t\rBAZ '), 'FOO BAR BAZ');
});

test('should condense all whitespace (keep newlines)', t => {
    t.is(selectiveWhitespace('  FOO\n   BAR\n   BAZ\n ', { keep: '\n' }), 'FOO\n BAR\n BAZ\n');
    t.is(selectiveWhitespace('  FOO\n   BAR\n   BAZ\n ', { keep: '\n' }).length, 14);
});

test('should condense all whitespace (keep tabs)', t => {
    t.is(selectiveWhitespace('\tFOO     \tBAR      \tBAZ', { keep: '\t' }), '\tFOO \tBAR \tBAZ');
});


test('should condense all whitespace (keep tabs and newlines)', t => {
    t.is(selectiveWhitespace('\n\tFOO     \n\tBAR      \n\tBAZ', { keep: '\n,\t' }), '\n\tFOO \n\tBAR \n\tBAZ');
});

test('should condense all whitespace (keep tabs, newlines and returns)', t => {
    t.is(selectiveWhitespace('\n\tFOO\r  \r  \n\tBAR      \n\tBAZ', { keep: '\n|\t|\r' }), '\n\tFOO\r \r \n\tBAR \n\tBAZ');
});

test('should strip all whitespace from a string)', t => {
    t.is(selectiveWhitespace('\n\tFOO\r  \r  \n\tBAR      \n\tBAZ', { stripAll:true }), 'FOOBARBAZ');
});

