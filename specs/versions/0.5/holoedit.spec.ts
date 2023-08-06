import * as fs from 'node:fs';
import * as path from 'node:path';
import * as assert from 'node:assert';
import HoloEdit from '../../../src/versions/0.5/holoedit';
import * as save from '../../../src/versions/0.5/save';

const saveDirectory = path.join(__dirname, 'saves');
const saveFilenames = ['partial.dat', 'fresh.dat'];
const editors = saveFilenames.map((filename) => {
    return new HoloEdit(path.join(saveDirectory, filename));
});

describe('HoloEdit.v0_5', () => {
    describe('#data', () => {
        it('should be an object', () => {
            editors.forEach((editor) => {
                assert.equal(typeof editor.data, 'object');
            });
        });
    });
    describe('#achievement()', () => {
        it('should modify only the values of a given achievement', () => {
            editors.forEach((editor) => {
                editor.data.achievements.faunaGachikoi = {
                    unlocked: 0,
                    flags: {},
                };
                editor.data.achievements.hallucinated = {
                    unlocked: 0,
                    flags: {},
                }
                editor.achievement(save.ACHIEVEMENT.FAUNA_GACHIKOI, 1, { missed: true });
                assert.equal(editor.data.achievements.faunaGachikoi?.unlocked, 1);
                assert.equal(editor.data.achievements.faunaGachikoi?.flags.missed, true);
                assert.equal(editor.data.achievements.hallucinated?.unlocked, 0);
                assert.equal(Object.entries(editor.data.achievements.hallucinated?.flags ?? {
                    isUndefined: true,
                }), 0);
            });
        });
        it('should modify the values of all achievements if the given achievement is \'all\'', () => {
            editors.forEach((editor) => {
                editor.data.achievements = {};
                editor.achievement('all', 0, { test: false });
                Object.values(save.ACHIEVEMENT).forEach((achievement) => {
                    assert.equal(editor.data.achievements[achievement]?.unlocked, 0);
                    assert.equal(editor.data.achievements[achievement]?.flags.test, false);
                });
                editor.achievement('all', 1);
                Object.values(save.ACHIEVEMENT).forEach((achievement) => {
                    assert.equal(editor.data.achievements[achievement]?.unlocked, 1);
                    assert.equal(editor.data.achievements[achievement]?.flags.test, false);
                });
                editor.data.achievements = {};
                editor.achievement('all', 0);
                Object.values(save.ACHIEVEMENT).forEach((achievement) => {
                    assert.equal(editor.data.achievements[achievement]?.unlocked, 0);
                    assert.equal(Object.entries(editor.data.achievements[achievement]?.flags ?? {
                        isUndefined: true,
                    }), 0);
                });
            });
        });
    });
    describe('#coin()', () => {
        it('should set the number of coins while accounting for \'randomMoneyKey\'', () => {
            editors.forEach((editor) => {
                editor.coin(0);
                assert.equal(editor.data.holoCoins, -editor.data.randomMoneyKey);
                editor.coin(1111);
                assert.equal(editor.data.holoCoins, 1111 - editor.data.randomMoneyKey);
            });
        });
    });
    describe('#tear()', () => {
        it('should modify only the values of a given generation', () => {
            editors.forEach((editor) => {
                editor.data.tears = [[save.GENERATION.GEN_0, 0], [save.GENERATION.GEN_1, 0]];
                editor.tear(save.GENERATION.GEN_0, 1);
                assert.equal(editor.data.tears[0][1], 1);
                assert.equal(editor.data.tears[1][1], 0);
                assert.equal(editor.data.tears.length, 2);
                editor.tear(save.GENERATION.GEN_1, 2);
                assert.equal(editor.data.tears[0][1], 1);
                assert.equal(editor.data.tears[1][1], 2);
                assert.equal(editor.data.tears.length, 2);
                editor.tear(save.GENERATION.GEN_2, 3);
                assert.equal(editor.data.tears[0][1], 1);
                assert.equal(editor.data.tears[1][1], 2);
                assert.equal(editor.data.tears[2][1], 3);
            });
        });
        it('should modify the values of all generations if the given generation is \'all\'', () => {
            editors.forEach((editor) => {
                editor.tear('all', 1);
                const seenGenerations = Array<string>();
                editor.data.tears.forEach((generation) => {
                    assert.equal(generation[1], 1);
                    seenGenerations.push(generation[0]);
                });
                editor.tear('all', 2);
                editor.data.tears.forEach((generation) => {
                    assert.equal(generation[1], 2);
                });
                const seenGenerationsSet = new Set(seenGenerations);
                Object.values(save.GENERATION).forEach((generation) => {
                    assert(seenGenerationsSet.has(generation));
                });
            });
        });
    });
    describe('#outfit()', () => {
        it('should modify only the values of a given outfit', () => {
            editors.forEach((editor) => {
                editor.data.unlockedOutfits = [];
                editor.outfit(save.OUTFIT.FAUNA_ALT_1, true);
                assert.equal(editor.data.unlockedOutfits[0], save.OUTFIT.FAUNA_ALT_1);
                assert.equal(editor.data.unlockedOutfits.length, 1);
            });
        });
        it('should modify the values of all outfits if the given outfit is \'all\'', () => {
            editors.forEach((editor) => {
                editor.outfit('all', false);
                assert.equal(editor.data.unlockedOutfits.length, 0);
                editor.outfit('all', true);
                const outfitSet = new Set(editor.data.unlockedOutfits);
                Object.values(save.OUTFIT).forEach((outfit) => {
                    assert(outfitSet.has(outfit));
                });
            });
        });
    });
    describe('#save()', () => {
        it('should save the changes to the given path', () => {
            editors.forEach((editor) => {
                const saveLocation = path.join(saveDirectory, 'temp.dat');
                fs.rmSync(saveLocation, { force: true });
                editor.save(saveLocation);
                const data = new HoloEdit(saveLocation).data;
                assert.deepEqual(data, editor.data);
            });
        });
    });
});