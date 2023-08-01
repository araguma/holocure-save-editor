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
//       changes before saving or save the edited save file to another location
edit.save('path/to/output/save_n.dat'); // Or omit path to overwrite
```

## Documentation

### coin(amount)

### achievement(achievementId, unlocked)

### tear(generationId, amount)

### gRank(characterId, rank)

### outfit(outfitId, unlocked)

### stage(stageId, unlocked)

### item(itemId, unlocked)

### weapon(weaponId, unlocked)

### collab(collabId, unlocked)

### save([savePath])

## Roadmap

- Support for the upcoming 0.6 version
- More commonly used edit methods