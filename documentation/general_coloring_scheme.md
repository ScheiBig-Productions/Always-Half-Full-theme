# ![logo icon small](/img/icon/icon_sm.png) Always Half-Full theme

### Set of guidelines, that describe how language tokens are styled.
This document applies mainly to _general purpose programming languages_. Syntaxes / semantics that are not bound by these rules are described in [exceptions from _GCS_](exceptions_from_gcs.md). It also should be noted that while theming rules were implemented as accurately as possible, there is a list of [known bugs](known_bugs.md) which result from extensions not tokenizing languages precisely according to their specifications.

Below is list of used 'named' colors. However if additional context can be provided, it is done via [text decorations (see table at end of page)](#text-decorations).

## Text colors

Color palette was generated using CieLAB space, as to ensure that colors have similar amount of contrast between them and background (to reduce eye strain while looking at text with all different tokens), but also have similar amount of contrast independent of which theme variant is used (to allow quick switching between them, without shock). Gray-scale colors below will be named as _n_-contrast, as to not name them 'black on white and white on black'.

### Gray-scale tokens
These are used whenever no additional attention is required.

#### ![default](/img/headers/default.png)
##### Default text color is high contrast, as it allows for easy reading of plain text in documents. 
In code this usually indicates local (to its scope) variables / constants.

#### ![operator / qualifier](/img/headers/operator_qualifier.png)
##### Medium-contrast text is used for less important parts of code, that should not bring as much focus - this gray has similar contrast spec to used colors.
In code this color is used for operators, punctuation and paths of full qualifiers (namespaces, packages, or however they are named in respective language).
#### ![comment](/img/headers/comment.png)
##### Low contrast text is used for additional information, that is not required for program to run.
This color is almost exclusively used for comments, or similar entities used to prevent code from executing.

### 'Warm' color tokens
These colors are used to symbolize 'action' - anything that actively changes the way of execution.

#### ![keyword](/img/headers/keyword.png)
##### Yellow color is used to indicate keywords - instructions of language that steer its flow.
'Keyword' can be thought as umbrella term - it includes keywords that control flow of programs (loops, conditionals), one that declare entities (functions, raw types, custom type definitions), one that change storage (visibility modifiers, inheritance instructions), word-like operators, and more. Almost every word that is reserved by language, will use this style. Additionally, if possible in languages that don't group symbols as `punctuation`, line terminators (usually `;`) and block beginner symbols (for now, only `:` in Python) use this style as well, as it helps with finding 'semicolon-missing bugs'.

#### ![foreign syntax](/img/headers/foreign%20syntax.png)
##### Golden color is used to indicate highly sugarcoated functionality.
'Foreign' syntax can be  divided into two main categories:
- syntax that is made to look like it comes from another language (like HTML tags in JSX code), usually requiring transpiler that swaps this for actual code,
- functionalities, that have special / extended usage in language (like native `event` / `delegate` types in C#).
Such functionality requires extended support, as such it might not be often seen in general purpose languages, being much more common in frameworks that provide extended syntax.

#### ![function](/img/headers/function.png)
##### Orange color is used to indicate subroutines of program.
As name might suggest, this style is applied to any functions, methods, procedures or callable values, that language recognizes.

#### ![error](/img/headers/error.png)
##### Red color exclusively means that something wnet wrong.
This text color is not very common, as most language servers use 'squiggly' line decorators, to indicate code errors (and warnings), but for compatibility with few that do, this color is reserved.

#### ![metadata](/img/headers/metadata.png)
##### Magenta color is used for any code-producing, or -altering functionalities.
This style is applied to three main groups of tokens:
- language preprocessor instructions, that alter the way program is compiled/transpiled,
- macros that generate new code from template,
- metadata utilities that are usually available via reflection (decorators, annotations, attributes, etc.).
This style is also applied to in-code documentation tags.

### 'Cool' color tokens
These colors are used to symbolize state or storage, or any other data.

#### ![label](/img/headers/label.png)
##### Lavender color is used for any utilities, that can be used to mention other code.
This color applies mainly to:
- labels in languages that support `goto` jump, or named `break` / `continue`,
- wildcards in languages with generics that do not partake in inheritance,
- data interpolation slots in languages that have interpolated strings.

#### ![parameter](/img/headers/parameter.png)
##### Lilac color is used for any variables, that are passed to other code.
This color is applied to parameters passed to callable entities - in definition and, if recognized semantically, in usages of their values. In languages that support named parameter calls (or system like Pythons kwargs), this color also apply to parameter name reference.

#### ![field](/img/headers/field.png)
##### Purple color is applied to all value entities, that are part of other, complex values.
This style is used for fields of type structures, like `class`, `struct`, `union`, etc., that are used to store instance (or static) level data. Depending on feature set of language, this may include value fields or even properties that abstract (sugarcoat) getters and setters.

#### ![unit / slot](/img/headers/unit_slot.png)
##### Denim color is used for types that are not provided on definition, or utilities that produce object-type values from literal data.
This is another of rare tokens, that is used when available - first use case of it is in generic code, to indicate type parameters (or literal in template-based semi-generics) in declaration list, as well as usage in wrapped type/function. Second, even more rare usage, is in languages that permit literals affixes, that produce complex objects using such literal data.

#### ![type](/img/headers/type.png)
##### Azure color is used for names of all complex types of data.
Depending on types of storage provided by language, this may include:
- classes,
- structures,
- records,
- interfaces,
- abstract classes,
- enums,
- unions.
Style is applied to name of type.

#### ![string](/img/headers/string.png)
##### Teal color is used for literals of strings of characters.
This color is applied mainly to strings, or value concepts that evaluate to string, as well as singular characters (most language servers still recognize `char` values simply as strings).

#### ![singleton / escape value](/img/headers/singleton_escape%20value.png)
##### Steel color is used for any singletons that are defined in-place, as well as escape sequences in strings.
For object to be styled this way, there must not be a possibility to create instance outside of type definition - example of such value are enum members, which usually are instances of wrapping enum 'classes', or Kotlin `object` singleton declarations (unsupported unfortunately).

#### ![number](/img/headers/number.png)
##### Green color is used for number literals.
Any legal numerical value, including e-notation and 0x / 0b / 0 literals with non-decimal base falls into this category.

#### ![documentation](/img/headers/documentation.png)
##### Beige color is used for any entities, that provide in-code documentation.
Depending on language, these may be `/** .. */` or `/// ...` doc-comments, or doc-strings placed directly above/below definition.

## Text decorations

For languages that provide semantical context from language server, it is possible to further decorate styles, to broadcast such context. In table below are listed token color names from previous section, as well as meaning of standard text decoration for such token

token | no decoration | <u>b</u>old | <u>i</u>talic | <u>u</u>nderline | b + i | b + u | i + u | b+i+u
--- | --- | --- | --- | --- | --- | --- | --- | --- 
default (variable) | a local, mutable variable | a local, immutable constant | _unused_ | a static, mutable variable | _unused_ | a static, immutable constant | _unused_ | _unused_
operator / qualifier | ___default___ | _unused_ | _unused_ | _unused_ | _unused_ | _unused_ | _unused_ | _unused_
comment | ___default___ | _unused_ | _unused_ | _unused_ | _unused_ | _unused_ | _unused_ | _unused_
keyword | default in dark variants | default in light variants | _unused_ | _unused_ | _unused_ | _unused_ | _unused_ | _unused_
foreign syntax | normal entity / C# event | _unused_ | C# delegate | _unused_ (static if context applies) | _unused_ | _unused_ | C# extension method | _unused_
function | instance method | final method (?) | global / unbound function | static method | (??) | (??) | (??) | (??)
error | ___default___ | _unused_ | _unused_ | _unused_ | _unused_ | _unused_ | _unused_ | _unused_
metadata | decorator / annotation / attribute / documentation tag | macro | _unused_ | _unused_ | preprocessor directive | _unused_ | _unused_ | _unused_
label | ___default___ | (might apply to interpolation slot brackets) | _unused_ | _unused_ | _unused_ | _unused_ | _unused_ | _unused_
parameter | _unused_ | parameters | _unused_ | _unused_ | _unused_ | _unused_ | _unused_ | _unused_
field | instance mutable field / property | instance immutable field | _unused_ | static mutable field | _unused_ | static immutable field | _unused_ | _unused_
unit / slot |  | _unused_ | _unused_ | _unused_ | _unused_ | _unused_ | _unused_ | _unused_
type | basic (class) type | final class | interface / abstract class | _unused_ | records / structs | enums | _unused_ | _unused_
string | _unused_ | ___default___ | _unused_ | _unused_ | _unused_ | _unused_ | _unused_ | _unused_
singleton / escape value | defult library singleton variable | escape character | _unused_ | _unused_ | _unused_ | enum members | _unused_ | _unused_
number | _unused_ | ___default___ | _unused_ | _unused_ | _unused_ | _unused_ | _unused_ | _unused_
documentation | ___default___ | _unused_ | _unused_ | _unused_ | _unused_ | _unused_ | _unused_ | _unused_

Legend:
- _unused_ - self explanatory. Keep in mind, that syntax in [exceptions from _GCS_](exceptions_from_gcs.md) might actually use those.
- ___default___ - only used style,
- (?) - might not work / not be applied,
- (??) - might work using context, not sure.
