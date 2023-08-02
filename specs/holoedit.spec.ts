import path from 'node:path';
import assert from 'node:assert';
import HoloEdit from '../src/index';

const saveLocation = path.join(__dirname, 'saves/');
const saves = Array(1).fill(null).map((_, i) => `${saveLocation}save-${i + 1}.dat`);
const randomSave = () => saves[Math.floor(Math.random() * saves.length)];

describe('HoloEdit', () => {
    describe('#data', () => {
        it('should be an object', () => {
            const edit = new HoloEdit(randomSave());
            assert.equal(typeof edit.data, 'object');
        });
    });
    describe('#achievement()', () => {
        it('sets the achievement unlocked status', () => {
            const edit = new HoloEdit(randomSave());
            edit.achievement('faunaClear', true);
            assert.equal(edit.data.achievements.faunaClear.unlocked, true);
        });
    });
    describe('#coin()', () => {
        it('sets the coin amount while accounting for randomMoneyKey', () => {
            const edit = new HoloEdit(randomSave());
            const amount = Math.floor(Math.random() * 1000);
            edit.coin(amount);
            assert.equal(edit.data.holoCoins + edit.data.randomMoneyKey, amount);
        });
    });
    describe('#tear()', () => {
        it('sets the tear amount for the specified generation', () => {
            const edit = new HoloEdit(randomSave());
            const amount = Math.floor(Math.random() * 1000);
            edit.tear('gen1', amount);
            assert.equal(edit.data.tears.find(t => t[0] === 'gen1')?.[1], amount);
        });
    });
    describe('#gRank()', () => {
        it('sets the gRank for the specified character', () => {
            const edit = new HoloEdit(randomSave());
            const rank = Math.floor(Math.random() * 1000);
            edit.gRank('fauna', rank);
            assert.equal(edit.data.characters.find(c => c[0] === 'fauna')?.[1], rank);
        });
    });
    describe('#outfit()', () => {
        it('adds the outfit to the unlockedOutfits array if unlocked is true', () => {
            const edit = new HoloEdit(randomSave());
            edit.outfit('faunaAlt1', true);
            assert.equal(edit.data.unlockedOutfits.includes('faunaAlt1'), true);
        });
        it('removes the outfit from the unlockedOutfits array if unlocked is false', () => {
            const edit = new HoloEdit(randomSave());
            edit.outfit('faunaAlt1', false);
            assert.equal(edit.data.unlockedOutfits.includes('faunaAlt1'), false);
        });
    });
    describe('#stage()', () => {
        it('adds the stage to the unlockedStages array if unlocked is true', () => {
            const edit = new HoloEdit(randomSave());
            edit.stage('STAGE 1', true);
            assert.equal(edit.data.unlockedStages.includes('STAGE 1'), true);
        });
        it('removes the stage from the unlockedStages array if unlocked is false', () => {
            const edit = new HoloEdit(randomSave());
            edit.stage('STAGE 1', false);
            assert.equal(edit.data.unlockedStages.includes('STAGE 1'), false);
        });
    });
    describe('#item()', () => {
        it('adds the item to the unlockedItems array if unlocked is true', () => {
            const edit = new HoloEdit(randomSave());
            edit.item('Halu', true);
            assert.equal(edit.data.unlockedItems.includes('Halu'), true);
        });
        it('removes the item from the unlockedItems array if unlocked is false', () => {
            const edit = new HoloEdit(randomSave());
            edit.item('Halu', false);
            assert.equal(edit.data.unlockedItems.includes('Halu'), false);
        });
    });
    describe('#weapon()', () => {
        it('adds the weapon to the unlockedWeapons array if unlocked is true', () => {
            const edit = new HoloEdit(randomSave());
            edit.weapon('CEOTears', true);
            assert.equal(edit.data.unlockedWeapons.includes('CEOTears'), true);
        });
        it('removes the weapon from the unlockedWeapons array if unlocked is false', () => {
            const edit = new HoloEdit(randomSave());
            edit.weapon('CEOTears', false);
            assert.equal(edit.data.unlockedWeapons.includes('CEOTears'), false);
        });
    });
    describe('#collab()', () => {
        it('adds the collab to the seenCollabs array if unlocked is true', () => {
            const edit = new HoloEdit(randomSave());
            edit.collab('BrokenDreams', true);
            assert.equal(edit.data.seenCollabs.includes('BrokenDreams'), true);
        });
        it('removes the collab from the seenCollabs array if unlocked is false', () => {
            const edit = new HoloEdit(randomSave());
            edit.collab('BrokenDreams', false);
            assert.equal(edit.data.seenCollabs.includes('BrokenDreams'), false);
        });
    });
    describe('#clear()', () => {
        it('sets the clear amount for the specified character', () => {
            const edit = new HoloEdit(randomSave());
            const clears = Math.floor(Math.random() * 1000);
            edit.clear('fauna', clears);
            assert.equal(edit.data.characterClears.find(c => c[0] === 'fauna')?.[1], clears);
        });
    });
    describe('#save()', () => {
        it('overwrites the original save file if no output path is provided', () => {
            const randomSavePath = randomSave();
            const edit = new HoloEdit(randomSavePath);
            const amount = Math.floor(Math.random() * 1000);
            edit.coin(amount);
            edit.save();
            const newEdit = new HoloEdit(randomSavePath);
            assert.equal(newEdit.data.holoCoins + newEdit.data.randomMoneyKey, amount);
        });
        it('saves to the specified output path if it is provided', () => {
            const outputPath = path.join(__dirname, 'saves/output.dat');
            const edit = new HoloEdit(randomSave());
            const amount = Math.floor(Math.random() * 1000);
            edit.coin(amount);
            edit.save(outputPath);
            const newEdit = new HoloEdit(outputPath);
            assert.equal(newEdit.data.holoCoins + newEdit.data.randomMoneyKey, amount);
        });
    });
});