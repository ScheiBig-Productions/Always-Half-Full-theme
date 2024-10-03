# Change Log

All notable changes to the "always--half-full" extension will be documented in this file.

## [0.9.1] - 2024.10.03

Disable semantic token colors for variables (but not text weight / decorations) - this change is mostly dedicated to workaround decisions made in gopls and go itself (struct fields being tokenized as variables, `true` & `false` being normal variables) - at least those that are possible to workaround.

Also fixed issue with selected and active row in lists / context menus being white in light variants - key in `themes/*.json` was accidentally omitted in `src/theme.mjs`

## [0.9.0] - 2024.10.03

### Migrate to build step and OKLCH color space

From beginning of development, process of modification existing / creating new variants of themes was extremely tedious - one full theme json has over 1.5k LOM (lines of markup) and because of large color pallette, search-and-replace in new files was not so obvious, since it was easy to miss some colors, or to make errors in tokens that use same color in specific variant, but it has two meanings. 

Additionally, theme json can only be supplied with rgb hex values, so it was necessary to manually synchronize color dictionaries and export them from CIELab to RGB.

Introduction of build step allows to remove most of those issues - now theme specification is split into theme generation, which accepts color pallette config and outputs POJO with complete theme, and into color pallette specification, which is config object that contains semantic definitions of colors and variant-specific opacity values.

Additionally, dynamic generation of theme files from configs, allowed to decouple manual mappings from alternative color space to RGB - now definitions contain calls to function, that automatically maps input colors. This allowed for pain-free migration to OKLCH color space - OK definition fixes various problems of CIE definition, which resulted in not-so the same L values in color definitions, while LCH triumphs over Lab with much more intuitive color selection model, closely resembling that of HSL.

This change introduces major, but hopefully positive changes in colors used in themes - now they should be even more uniform, bringing them closer to the idea that guides this extension from the start. Since it breaks previously defined semver plan, v1.0.0 of extension will contain all languages build into VSCode (at time that it will release), and v1.1.0 will close backlog of planned languages. Most visible change is lowered saturation of colors in light variants, that allows better text contrast, as well as flipped background values in all but Evening - now lightest/darkest color is used for editor background, to allow more contrast in light variants, and less backlight in "black" variants.


## [0.8.18] - 2024.09.07

Add support for PHP and Blade templating engine. Since neither PHP, nor Blade provide semantic highlighting, tokens are based only on (unfortunately poor sometimes) textMate tokens:
- type-based tokens, like classes, enums, interfaces and traits are properly formatted on declaration, however they are all styled as class elsewhere,
- functions imported with `use function` declaration, are styled on import line as classes too, they are styled properly on usage however,
- class properties declarations are styled as variables, even though their usages are styled correctly as fields/properties,
- function parameters are styled properly only at declaration, their usage is styled as variables,
- enum members are only properly styled at declaration, on usage they are styled as normal constant variables; static class constants are only styled as normal constants,
- phpdoc types bug-out when spaces are present (like in `array<string, int>` after comma),
- attribute classes are only styled on usage (in `#[ x ]` usages),
- Blade supports `@` directives, *mustaches* and any name that can be used as component (even if does not resolve to existing one), `@php @endphp` / `<?php ?>` mapped to preprocessor macro syntax, @-keywords and @-functions to expected styles (but with bold weight, to match html tags), mustaches to same style as `${}` in JS string templates (or any other string interpolation construct). Binding attributes / livewire attributes are not styled.

## [0.8.17] - 2024.05.29

Further tweak status bar colors.

## [0.8.16] - 2024.05.29

Slightly tweak color of selection and matches in editor, to sacrifice some visual context, to make it more readable to work witch multi-cursors.

Also revamp the light variants:
- morning variant now has slightly brighter backgrounds, so it does not stand out from other editors in light mode (afternoon does not change - it still is a variant that should be easier on eyes),
- all light variants no have much brighter colors of status bar - it especially helps when you use `"debug.toolBarLocation": "commandCenter"` setting, as command center uses `"statusBar.debuggingBackground"` color with some alfa when displaying debug buttons - previously, they were hard to see, as it resulted in dark buttons on semi-dark background.

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
