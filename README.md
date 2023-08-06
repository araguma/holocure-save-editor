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
import HoloEdit from 'holocure-save-editor';

const edit = new HoloEdit.v0_5('/mnt/c/Users/araguma/AppData/Local/Holocure/save_n.dat');

// Using method chaining to edit the save file
edit
    .coin(100)
    .outfit('faunaAlt1', true)
    .gRank('fauna', 21)
    .achievement('faunaGachikoi', 1);

// Using the data property to edit the save file
edit.data.mobUp = 10;
edit.data.ATK = 1;

// Getting an array of all possible achivement ids
console.log(Object.values(HoloEdit.v0_5.ID.ACHIEVEMENT));

// Saving the edited save file
// Note: It is recommended that you run console.log(edit.data) to verify the
//       changes before saving or save the edited data to another location
edit.save('path/to/output/save_n.dat'); // Or omit path to overwrite
```

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