import * as fs from 'node:fs';
import { Buffer } from 'node:buffer';
import * as save from './save';

class HoloEdit {
    data: save.HoloData;
    constructor(
        private savePath: string,
    ) {
        const file = fs.readFileSync(this.savePath, 'utf-8');
        const data = Buffer.from(file, 'base64');
        this.data = JSON.parse(data.toString());
    }
    static ID = save;
    achievement(achievement: save.Achievement | 'all', unlocked: 0 | 1, flags?: Record<string, any>) {
        const modifyAchievement = (id: save.Achievement) => {
            this.data.achievements[id] = {
                unlocked,
                flags: flags ?? this.data.achievements[id]?.flags ?? {},
            }
        }
        if(achievement === 'all')
            Object.values(save.ACHIEVEMENT).forEach(modifyAchievement);
        else
            modifyAchievement(achievement);
        return this;
    }
    coin(amount: number) {
        this.data.holoCoins = amount - this.data.randomMoneyKey;
        return this;
    }
    tear(generation: save.Generation | 'all', amount: number) {
        modifyCounter(this.data, 'tears', Object.values(save.GENERATION), generation, amount);
        return this;
    }
    gRank(character: save.Character | 'all', rank: number) {
        modifyCounter(this.data, 'characters', Object.values(save.CHARACTER), character, rank);
        return this;
    }
    outfit(outfit: save.Outfit | 'all', unlocked: boolean) {
        modifyUnlockable(this.data, 'unlockedOutfits', Object.values(save.OUTFIT), outfit, unlocked);
        return this;
    }
    stage(stage: save.Stage | 'all', unlocked: boolean) {
        modifyUnlockable(this.data, 'unlockedStages', Object.values(save.STAGE), stage, unlocked);
        return this;
    }
    item(item: save.Item | 'all', unlocked: boolean) {
        modifyUnlockable(this.data, 'unlockedItems', Object.values(save.ITEM), item, unlocked);
        return this;
    }
    weapon(weapon: save.Weapon | 'all', unlocked: boolean) {
        modifyUnlockable(this.data, 'unlockedWeapons', Object.values(save.WEAPON), weapon, unlocked);
        return this;
    }
    collab(collab: save.Collab | 'all', unlocked: boolean) {
        modifyUnlockable(this.data, 'seenCollabs', Object.values(save.COLLAB), collab, unlocked);
        return this;
    }
    clear(character: save.Character | 'all', clears: number) {
        modifyCounter(this.data, 'characterClears', Object.values(save.CHARACTER), character, clears);
        return this;
    }
    save(savePath?: string) {
        const data = Buffer.from(JSON.stringify(this.data));
        fs.writeFileSync(savePath ?? this.savePath, data.toString('base64'));
        return this;
    }
}

type KeysMatching<T, V> = { [K in keyof T]-?: T[K] extends V ? K : never }[keyof T];

function modifyUnlockable<
    O extends Record<K, string[]>,
    K extends KeysMatching<O, string[]>
>(
    data: O,
    property: K,
    allItems: readonly O[K][number][],
    item: O[K][number] | 'all',
    unlocked: boolean,
) {
    if(item === 'all')
        data[property] = (unlocked ? [...allItems] : []) as O[K];
    else if(unlocked && !data[property].includes(item))
        data[property].push(item);
    else if(!unlocked)
        data[property] = data[property].filter(i => i !== item) as O[K];
}

function modifyCounter<
    O extends Record<K, [string, number][]>,
    K extends KeysMatching<O, [string, number][]>
>(
    data: O,
    property: K,
    allCounters: readonly O[K][number][0][],
    counter: O[K][number][0] | 'all',
    amount: number,
) {
    if(counter === 'all')
        data[property] = allCounters.map(c => [c, amount]) as O[K];
    else {
        const counterAmount = data[property].find(c => c[0] === counter);
        if(counterAmount)
            counterAmount[1] = amount;
        else
            data[property].push([counter, amount]);
    }
}

export default HoloEdit;