# HoloCure Save Editor

Holocure Save Editor is a save editor for the fan game [HoloCure](https://kay-yu.itch.io/holocure) created by Kay Yu.

It comes with a `HoloEdit` class that has chainable methods for quick and easy editing as well as a `data` property for more customized editing.

## Example Use Cases

- You lost your save file like me and don't want to grind the game again
- You want a fast way to switch between different game configurations
- You want to experiment with upgrade levels that are not possible in the game

## Installation

```bash
npm i holocure-save-editor
```

## Quick Start

```typescript
import HoloEdit, {
    // Import lists of all possible data ids
    achievements,
    collabs,
    generations,
    // ...
} from 'holocure-save-editor';

// Create an editor from a save file
const edit = new HoloEdit('path/to/save_n.dat');

// Use method chaining to edit the save file
edit
    .coin(100)
    .outfit('faunaAlt1', true)
    .gRank('fauna', 21)
    .achievement('faunaGachikoi', true);

// Use the data property to edit the save file
edit.data.mobUp = 10;
edit.data.ATK = 1;

// Save the edited save file
// Note: It is recommended that you run console.log(edit.data) to verify the
//       changes before saving or save the edited data to another location
edit.save('path/to/output/save_n.dat'); // Or omit path to overwrite
```

## Documentation

The `HoloEdit` class provides methods for modifying a HoloCure save file.

### Constructor

```typescript
constructor(savePath: string)
```

Creates a new `HoloEdit` instance with the specified save file path.

#### Parameters

- `savePath`: The path to the HoloCure save file.

### Method: achievement

```typescript
achievement(achievement: save.Achievement | 'all', unlocked: boolean | 0 | 1): this
```

Sets the unlocked status of an achievement or all achievements.

#### Parameters

- `achievement`: The achievement to modify, or `'all'` to modify all achievements.
- `unlocked`: The new unlocked status of the achievement(s).

#### Returns

The `HoloEdit` instance.

### Method: coin

```typescript
coin(amount: number): this
```

Sets the number of HoloCoins.

#### Parameters

- `amount`: The new number of HoloCoins.

#### Returns

The `HoloEdit` instance.

### Method: tear

```typescript
tear(generation: save.Generation | 'all', amount: number): this
```

Sets the number of tears for a generation or all generations.

#### Parameters

- `generation`: The generation to modify, or `'all'` to modify all generations.
- `amount`: The new number of tears.

#### Returns

The `HoloEdit` instance.

### Method: gRank

```typescript
gRank(character: save.Character | 'all', rank: number): this
```

Sets the rank of a character or all characters.

#### Parameters

- `character`: The character to modify, or `'all'` to modify all characters.
- `rank`: The new rank of the character(s).

#### Returns

The `HoloEdit` instance.

### Method: outfit

```typescript
outfit(outfit: save.Outfit | 'all', unlocked: boolean): this
```

Sets the unlocked status of an outfit or all outfits.

#### Parameters

- `outfit`: The outfit to modify, or `'all'` to modify all outfits.
- `unlocked`: The new unlocked status of the outfit(s).

#### Returns

The `HoloEdit` instance.

### Method: stage

```typescript
stage(stage: save.Stage | 'all', unlocked: boolean): this
```

Sets the unlocked status of a stage or all stages.

#### Parameters

- `stage`: The stage to modify, or `'all'` to modify all stages.
- `unlocked`: The new unlocked status of the stage(s).

#### Returns

The `HoloEdit` instance.

### Method: item

```typescript
item(item: save.Item | 'all', unlocked: boolean): this
```

Sets the unlocked status of an item or all items.

#### Parameters

- `item`: The item to modify, or `'all'` to modify all items.
- `unlocked`: The new unlocked status of the item(s).

#### Returns

The `HoloEdit` instance.

### Method: weapon

```typescript
weapon(weapon: save.Weapon | 'all', unlocked: boolean): this
```

Sets the unlocked status of a weapon or all weapons.

#### Parameters

- `weapon`: The weapon to modify, or `'all'` to modify all weapons.
- `unlocked`: The new unlocked status of the weapon(s).

#### Returns

The `HoloEdit` instance.

### Method: collab

```typescript
collab(collab: save.Collab | 'all', unlocked: boolean): this
```

Sets the seen status of a collab or all collabs.

#### Parameters

- `collab`: The collab to modify, or `'all'` to modify all collabs.
- `unlocked`: The new seen status of the collab(s).

#### Returns

The `HoloEdit` instance.

### Method: clear

```typescript
clear(character: save.Character | 'all', clears: number): this
```

Sets the number of clears for a character or all characters.

#### Parameters

- `character`: The character to modify, or `'all'` to modify all characters.
- `clears`: The new number of clears.

#### Returns

The `HoloEdit` instance.

### Method: save

```typescript
save(savePath?: string): this
```

Saves the modified data to a file.

#### Parameters

- `savePath`: The path to save the file. If not specified, the original save file will be overwritten.

#### Returns

The `HoloEdit` instance.

## Contribute

```bash
git clone https://github.com/araguma/holocure-save-editor.git
cd holocure-save-editor/
npm i
npm run build
```

## Roadmap

- Support for the upcoming 0.6 version
- More commonly used edit methods