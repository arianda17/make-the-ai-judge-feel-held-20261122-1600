import { mkdirSync, writeFileSync } from 'fs';

const ENTRY = `One shaft of afternoon light falls on the wooden floor. Dust floats in it, slow and still, settling where a cat has lain all day in the sun. Nothing moves.`;

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY, { encoding: 'utf8' });
