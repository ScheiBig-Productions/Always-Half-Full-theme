# Change Log

All notable changes to the "always--half-full" extension will be documented in this file.

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
