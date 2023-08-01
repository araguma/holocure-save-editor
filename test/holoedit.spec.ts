import assert from 'node:assert';
import path from 'node:path';
import HoloEdit from '../src/index';

const saveLocation = path.join(__dirname, 'saves/');
const saves = Array(1).fill(null).map((_, i) => `${saveLocation}save-${i + 1}.dat`);

describe('achievement method', () => {
    it('should set the achievement unlocked status', () => {
        const edit = new HoloEdit(saves[0]);
        edit.achievement('faunaClear', true);
        assert.equal(edit.data.achievements.faunaClear.unlocked, true);
    });
});

describe('coin method', () => {
    it('should set the coin amount while accounting for randomMoneyKey', () => {
        const edit = new HoloEdit(saves[0]);
        const amount = Math.floor(Math.random() * 1000);
        edit.coin(amount);
        assert.equal(edit.data.holoCoins + edit.data.randomMoneyKey, amount);
    });
});

describe('outfit method', () => {
    it('should add the outfit to the unlockedOutfits array if unlocked is true', () => {
        const edit = new HoloEdit(saves[0]);
        edit.outfit('faunaAlt1', true);
        assert.equal(edit.data.unlockedOutfits.includes('faunaAlt1'), true);
    });
    it('should remove the outfit from the unlockedOutfits array if unlocked is false', () => {
        const edit = new HoloEdit(saves[0]);
        edit.outfit('faunaAlt1', false);
        assert.equal(edit.data.unlockedOutfits.includes('faunaAlt1'), false);
    });
});