# Change Log

All notable changes to the "always--half-full" extension will be documented in this file.

## [0.8.15] - 2024.05.02

Add double quoted identifiers in PL/SQL - they use style from SAS Named Literals, as they are same thing.

## [0.8.14] - 2024.04.28

Add `cls` parameter to Python - same formatting as `self`.

## [0.8.13] - 2024.04.25

Fix inconsistencies introduced in previous patch and further revamp Python:
- keyword operators (`in`, `is`, `and`, `or`) are now colored as keywords, not operators - before they were inconsistently colored as ether one depending on random factors (furthermore, Python specs considers them as keywords),
- language-constants operators (`True`, `False`, `None`) are now formatted like keywords in dark themes (previously, they had light-themed bold text),
- removed italics from operators that were overloaded using dunder methods,
- added dunder attributes - they are colored as annotations/decorators/metadata, since most of them are auto-generated and/or are used for reflection.

## [0.8.12] - 2024.04.25

Slight revamp of Python:

- `self` parameter - in many languages, `this` is considered keyword (or soft - keyword), in Python it is a parameter. To make some sort of compromise, it is now represented as builtin / foreign,
- builtin-functions - to adhere to coloring introduced in Go and Zig, it gets same color (and format is changed to italic - that represents functions - in Go and Zig),
- builtin-classes - making them color of keywords, would actually decrease readability, however color of built-in variables is very weak too (it is only used in JS and string escape seq - it is hard to read in normal settings), so the choice goes to type-param color - as it is not implemented in Python LSP,
- dunder methods - these are "magic" methods, that either provide functionality for builtin functions (C++-style concept interfacing), or add operator overloading to classes - the second was chosen as new color, with function formatting (italics - to differentiate from operators and improve visual readability).

Most of these are implemented as semantic tokens. Also added some level of support for docstring Sphinx tags.

## [0.8.11] - 2024.04.20

Fixed whitespace markers in *afternoon*.

## [0.8.10] - 2024.02.01

**Introducing** starlight theme:
"a fork of midnight variant, with muted colors and lowered contrast - for when it's closer to sunrise than sunset, but you are just few keystrokes away from finishing that project".

New theme intentionally deviates from contrast-constant palette, by lowering both saturation and brightness of colors, to ensure minimal eyestrain in pitch-black environments.

Add support for go (lang) programming language.
Just like with Zig, provided token list is very poor, consisting of:
- keywords,
- functions (methods only recognized on declaration),
- custom types (all treated the same) and build-in types,
-  build-in function utilities (colored as special functions),
-  function parameters (but not method receivers),
- variables / constants (this includes fields),
- operators,
- literals.

This means, that go official extension ignores fields, methods, channels and type types (interface / struct /typedef) from LSP (gopls provides those), and you might say that it could also provide receiver parameters, and map keys with ease (also, `true` / `false` / `iota` are threated as normal constants / not build-ins, and error as custom type not build-in).

## [0.8.9] - 2024.01.16

Token fixes for JavaScript.

## [0.8.8] - 2024.01.15

Various fixes and tweaks of colors.

## [0.8.7] - 2023.09.22

Add support for Zig programming language. Currently supported are:
- functions (single token / no modifiers),
- fields (mo modifiers)
- most of types and complex type types (😵‍💫),
- `comptime` type parameters (treated as generics),
- namespace types,
- build-in function utilities (colored as special functions),
- arithmetic operators (mainly),
- literals.

Unfortunately, LSP lacks:
- parameters,
- most of punctuation and braces, including:
  - at least half of operators,
  - type specifier colons, semicolons, argument / field commas and member access dots,
  - optional type specifier (`?`) and pointer / optional dereference,
  - all brace types: `() {} []`,
  - size / counter specifiers,
-  optionally, modifiers for `self` parameter and local constants.

Additionally, further toned-down whitespace markers opacity.

## [0.8.6] - 2023.09.11

Add "support" for MSSQL / T-SQL / PL-SQL. Actual theming is extremely limited, due to little to no grammar / semantics for:
- variables,
- database names,
- table names,
- column / `as` alias names,
- stored procedures names,

even in situations, that could be clearly resolved from basic context of syntax.

## [0.8.5] - 2023.09.11

Fix Pythons value-keyword (`None`, `True`, etc.) coloring (to `keyword` from `variable.constant`).

## [0.8.4] - 2023-09-10

Minor bug fixes related to cursors in editor and terminal.

## [0.8.3] - 2023-08-08

Minor tweaks in semi-transparent colors, including:
- whitespace markers,
- diff-editor backgrounds,
- find-and-replace backgrounds,
- menus and other hovering surfaces.

Also added border to current line in dark variants for consistency.

## [0.8.2] - 2023-08-02

Remove showcase animations from production package.

## [0.8.1] - 2023-08-02

Fix critical bug in theme json file, lower VSCode version requirements.

## [0.8.0] - 2023-08-02

Initial release of extension. Will be bumped to [0.9.0] once all [build-in extension syntaxes](https://github.com/microsoft/vscode/tree/9a281018181dca942cc46c03f9795be00912e38d/extensions "VSCode build-in extensions directory @ GitHub repository") are supported (that are on list of planned ones), and to [1.0.0] once all [currently planned](https://github.com/search?q=repo%3AScheiBig-Production%2FAlways-Half-Full-theme+created%3A%3C2023-08-02+author%3AScheiBig+author%3ANuttyJelly+state%3Aopen&type=Issues&ref=advsearch&l=&l= "List of unfinished Language Support tickets created before release date") are.

### Added:
- __Core UI__ - theming for all window surfaces,
- Extension documentation (available in repository).

### Added support for languages / syntaxes:
- *.component.html (Angular),
- C,
- C++,
- C#,
- CMake ,
- CSS,
- CSV,
- gitignore & git-commit,
- HTML,
- INI,
- Java,
- JavaScript,
- JSON,
- JSX (React),
- Markdown (basic, core syntax of GitHub flavor - math extensions are planned with LaTeX support, Mermaid syntax support is planned independently as well),
- POM (Maven),
- Python,
- Regex,
- SAS 4GL,
- TypeScript,
- XML,
- YAML.

## [Unreleased]
