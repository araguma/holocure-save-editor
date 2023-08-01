import fs from 'node:fs';
import { Buffer } from 'node:buffer';
import * as save from './save';

class HoloEdit {
    data: save.HoloData;
    constructor(
        private savePath: string
    ) {
        const file = fs.readFileSync(this.savePath, 'utf-8');
        const data = Buffer.from(file, 'base64');
        this.data = JSON.parse(data.toString());
    }
    achievement(achievement: save.Achievement | 'all', unlocked: boolean | 0 | 1) {
        const setUnlockedFn = (a: save.Achievement, u: boolean | 0 | 1) => {
            this.data.achievements[a] = {
                unlocked: u,
                flags: this.data.achievements[a]?.flags ?? {},
            }
        }
        if(achievement === 'all')
            for(let i = 0; i < save.achievements.length; i ++)
                setUnlockedFn(save.achievements[i], unlocked);
        else
            setUnlockedFn(achievement, unlocked);
        return this;
    }
    coin(amount: number) {
        this.data.holoCoins = amount - this.data.randomMoneyKey;
        return this;
    }
    tear(generation: save.Generation | 'all', amount: number) {
        for(let i = 0; i < this.data.tears.length; i ++) {
            if(generation === 'all')
                this.data.tears[i][1] = amount;
            else if(this.data.tears[i][0] === generation)
                this.data.tears[i][1] = amount;
        }
        return this;
    }
    gRank(character: save.Character | 'all', rank: number) {
        for(let i = 0; i < this.data.characters.length; i ++)
            if(/random|none|empty/.test(this.data.characters[i][0]))
                continue;
            else if(character === 'all')
                this.data.characters[i][1] = rank;
            else if(this.data.characters[i][0] === character)
                this.data.characters[i][1] = rank;
        return this;
    }
    outfit(outfit: save.Outfit | 'all', unlocked: boolean) {
        modifyUnlockable(this.data, 'unlockedOutfits', save.outfits, outfit, unlocked);
        return this;
    }
    stage(stage: save.Stage | 'all', unlocked: boolean) {
        modifyUnlockable(this.data, 'unlockedStages', save.stages, stage, unlocked);
        return this;
    }
    item(item: save.Item | 'all', unlocked: boolean) {
        modifyUnlockable(this.data, 'unlockedItems', save.items, item, unlocked);
        return this;
    }
    weapon(weapon: save.Weapon | 'all', unlocked: boolean) {
        modifyUnlockable(this.data, 'unlockedWeapons', save.weapons, weapon, unlocked);
        return this;
    }
    collab(collab: save.Collab | 'all', unlocked: boolean) {
        modifyUnlockable(this.data, 'seenCollabs', save.collabs, collab, unlocked);
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

export default HoloEdit;