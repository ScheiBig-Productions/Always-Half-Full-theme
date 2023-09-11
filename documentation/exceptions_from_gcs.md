# ![logo icon small](/img/icon/icon_sm.png) Always Half-Full theme

### List of languages, that have their own set of styling rules.
Languages present in this list are styled in way, that differs from [general coloring scheme](general_coloring_scheme.md "General Coloring Scheme"). Those are a conscious (but sometimes arbitrary) choices, dictated by language having syntax that is highly abstracted from general purpose programming languages (high generation and/or scripting languages) or are used as structured data representation (mostly configuration, serialization or markup languages); not to be confused with [known bugs](known_bugs.md "Known Bugs") that are caused by extensions providing syntax / semantics, that differ from language specification.

## Syntax-modest languages (usually scripting or configuration)
Languages that provide very limited syntax, or one that purely depends on operator/spacing context (or any other) without actual semantics, try to use styling to provide as much different coloring, as possible, while trying to maintain their general meaning with used style. Those include (but probably are not limited to):
- gitignore,
- CMake,
- git-commit.

## Markup languages derived from XML
Implementation of such languages began with JSX syntax (in React files), since it was closest relative to **general coloring scheme**, allowing to derive styles from in-code usages. Basic syntax of such code is:
```xml
<element stringAttr='value'>
  <Component objAttr={2 + 2}>
    <Component />
  </Component>
</element>
```
In which we can differentiate 5 basic token types:
- element tag (`<element>`) which describes 'raw' HTML elements (actually they are still wrapped as components, but it doesn't really matter). They are building blocks of JSX 'embedded' syntax, and they are, at first glance, the most 'foreign' syntax in normal JS file. Exactly this type of code motivated choice for `foreign syntax` token style, which is used to describe those elements.
- component tag (`component`) which describes custom components. Nowadays those are often described as rendering functions, or compiled templates, yet traditional approach (also seen in build-in **Web Components**) was to create those as classes, either inheriting from HTML element interface, or marked with decorator that provides all necessary data to trans-/compiler, hence the decision to style those like `type` token.
- tag attribute (`*Attr`) which describe data passed to UI element. It would certainly be tempting, to mark those as class fields, but Web Components specification actually differentiates component attributes from its properties; it's not uncommon, that attributes of HTML code doesn't reflect actual state of DOM Tree, as those actually more often than not are initial data, like arguments passed to constructor - that's why they are using `parameter` style,
- string attribute values, which are literal data, preserve `string` style,
- embedded expression attribute values (`{2 + 2}`) are data, which is calculated are runtime, and depending on implementation, can evaluate to anything. Since in web development, almost every data transfer eventually is evaluated to stream of characters, arbitrary decision was made, that braces delimiting such expression should use `string` style; expression itself usually is tokenized as code that is passed, if supported. It should be noted that some templating flavors, like Angular, might use different conventions for embedding/binding data, that cannot be styled in such way due to lack of custom tokens.

To keep every semantic / syntactic element uniform, independent of language, every other XML-like markup or templating language preserves conventions above. There are however few additional style applications found in some of those:
- `<?xml ?>` tags, which contain data for XML Preprocessor, use `metadata` token,
- `<namespace:element namespace:attribute='' />` tags contain namespace declaration, which preserve `operator/qualifier` style,
- comments declaration preserve `comment` style as well,
- values of `class` and `id` attributes in HTML files are styled same way, that they appear in CSS files,
- binding attributes in flavors that support them (like Angular) keep styling of other attributes, but are italicized, so that they stand out more.

## Serialization / data-only configuration languages
These are languages, that are used to describe saved data state. With JSON (and most of YAML) this is pretty straightforward - since JSON can be evaluated as JavaScript code, it is styled as one.
Any other file type tries to preserve same conventions as much as possible; moreover there are some loose rules:
- entities that are used to group fields, like tags or section names are styled as `type`,
- punctuation / entities that alter flow of such files (like page markers in YAML) are styled as `metadata`,
- entities that allow back-referencing of other properties values, are styled as `parameter`.

#### CSV
The only extension, that provides some level of tokenization to CSV files, is `
mechatroner.rainbow-csv` - to live up to its name, styling of its tokens was chosen in a way, that creates actual rainbow out of available colors. Additionally:
- all text in CSV files is bolded, to maximize readability,
- even-numbered columns (counting from 1 obviously) are italicized, to add little bit of more readability (just like in many table styles, every even row has slightly different background).

## Markup document languages

#### Markdown
Markdown is simple markup language, that uses symbol operators and spacing (rather than XML-based tag system), to render simple HTML documents. As such syntax recognizes different 'tag types' as different tokens, more coloring can be used to make reading such document simpler. 

Decided color choices are:
- headings are styled as `type` (with bold font, like in resulting document) - it mimics INI section titles or YAML tag handles,
- list bullets / indices as styled as `field`, to indicate them being items of container list,
- URLs that are clickable (via [Ctrl] + [Click]) persist general URL style, different parts of link are however styled that:
  - text URL caption use `label` style, as they provide meaningful name for link target,
  - image URL alt text use `metadata` style, as it provides generally hidden information,
  - URL title (which is visible as tooltip) preserve `string` style, just like values of title attribute in HTML,
- code block delimiters (single and triple `` ` ``) use `documentation` style, which persists color, that is used for code blocks decorations in documents,
  - fenced code block language uses `comment` style, but is bolded to differentiate it from rest of text or normal comments
- footnote indices use `label` style just like URLs, but additionally they are underlined like URL links (and like rendered reference link),
  - footnote explanations use `documentation` style,
- blockquotes use `parameter` style, because they reference text passed from outer context,
- separators (like `---` in own line) use `metadata` style - it mimics YAML document breaks.

Text that uses emphasis (bold and italics) using `*` or `_`, or strike-through, has expected decorations applied. There is however limitation of markdown, as it does not provide operator for underlined text (or sub-/superscripts, however them being fairly common, they are not possible in theming API, so it's beyond scope) - this means that text underlined via HTML `<u>` tag cannot be decorated in code.

It must also be noted, that markdown syntax extension does not tokenize tables, as those are part of extended syntax. It is technically possible to tokenize them using fairly long regex, but extending textmate rules is beyond scope of this extension.

<!-- #### LaTeX
> TODO -->

## High-generation programming languages / DSL
Some of very specialized, or even Domain Specific Languages, often use special and unique syntax / semantics - they may lack for example typing system, or have different / special kinds of subroutines.

#### SAS 4GL
SAS 4GL is DSL, that is made for performing data manipulations, statistics and reporting, often on >1M rows datasets. It has fairly verbose syntax, that is reminiscent of command line scripting languages. Styling is applied for semantic tokens, available from `sas.sas-lsp` extension:
- keywords persist their styling - it must be noted that in SAS 4GL, definition of keyword is much broader, as they not only are used for instructing the flow of program, but also to provide configurations, or even manipulate data (in most other languages, functions are separate entities, is SAS functions are/were only build-in, hence they gain `keyword` token, even in SAS editors).
- secondary keywords get styling of `foreign syntax`, to make them stand out more (just like in SAS editors). These keywords are used to delimit program steps (`data`, `proc`, `run`, `quit`, etc.)
- names of procedures get styling of `function`, since they name complex subroutines of program,
- basic numerical / string data persists its respective styling (including `''x` treated as numbers, since they are hexadecimal numerical literals),
- date/time literals get `singleton / escape sequence` styling, as they are special type of literals,
- bitmask literals get `unit / slot` styling, since they are used to extract specific portions of data,
- name literals get `default` styling, as they are just enqouted variable names, but get additional underline to be easier to recognize as a whole name,
- formats get `type` styling, as they are closes thing in language to expressing type of data,
- `datalines` card-data is styled as `field`, since they represent (inline / literal) state,
- macro calls persist their styling,
- macro secondary keywords get same styling as C and C++ preprocessor, since they are used to define macros,
- macro keywords are arbitrarily styled as `labels`, to make them stand out from different macro tokens,
- block comments persist their styling, unfortunately this includes expression comments, that could use different token to make them stand out, as they cannot be embedded in other expressions. Additionally, macro-comments are italicized to make them stand out from other comments, as they are not inserted into final code (won't appear in log as well).

#### T-SQL and PLSQL
As relative databases could be imagined as models for data in object-oriented data, perfect tokenization contract could be achieved as:
> `database`.`table`.`column`

being equal in meaning to
> `namespace/module`.`class`.`property`

and in perfect world, this would be reflected in theme. Unfortunately both SQL-lang flavors lack any support for tokenization of column names, furthermore:
- MSSQL / T-SQL grammar recognizes any construct `a.b` as `a` being database name and `b` being table name, even if:
  - context suggests that either `b` is name of stored procedure (ie. in `exec` block),
  - or that `a` is table name and `b` is column name (`select` blocks, `on` contract in `join`)
  
  that being said, database / table name by itself isn't even recognized as token that is provided by grammar; basic support is provided for variables (treating procedure parameters as such too),
- PLSQL does not recognize any type of entity as separate token (procedures, databases, tables, columns, variables).

This contributes to theming of SQL-like languages being extremely limited.

## Abstract description languages
These are syntaxes that are often used as utilities in other languages, used to describe patterns, diagrams, graphs, etc.

#### Regex
Regular expressions, which describe search query as Finite Automata. As Regex usually is used inside character literals, they persist `string` style for basic text, with additional styling of:
- boolean operators `|` and `^` are styled as `keyword`,
- line anchors `^  $` are styled as `foreign syntax`, mainly to make it easier to differentiate contextual meaning of `^` character,
- character classes like `\d`, class definition delimiters `[ ]` and wildcard `.` all get `type` styling, as they describe set with type of characters,
- group delimiters `( )` are styled as functions, since they produce side-effect of remembering group match, just like impure functions/ procedures,
- group back-references are styled as `field`, since they represent internal 'state' of expression match; labels of named groups are put into this style as well,
- group capture specifiers:
  - non capturing operator `?:` is styled as `comment`, since it indicates that group matching result is not important,
  - look-behind operator `?<=` is styled as label, as just like label it allows to access existing entities,
  - look-ahead operator `?=` is styled as `metadata`, since it allows to mention not yet existing entities, just like macro,
  - _negative_ operators (`?!` and `?<!`) are underlined
- all quantity specifiers are styled as numbers.
