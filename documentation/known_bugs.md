# ![logo icon small](/img/icon/icon_sm.png) Always Half-Full theme

### List of all major theming bugs, that have been found to date.
Keep in mind, that most of those bugs are caused by their respective language extensions. This list only contains deviations from [general coloring scheme](general_coloring_scheme.md "General Coloring Scheme") that result from wrongly assigned tokens. For styling that is result of conscious decisions, consult [exceptions from gcs](exceptions_from_gcs.md "Exceptions from GCS"). This list also won't contain languages, that have minimal syntax support, like CMake, or git-ignore.

### Format:
Language (Syntax / Semantics provider extension)\
[ Bug list ]

---

#### Python (`ms-python.python`)
- Magic methods are treated as functions, instead of methods,
- Class 'constant' fields have syntax token of constant, byt semantic token of normal fields (`property` - without constant / readonly modifier) - they are styled as such. This is in contrast to file-global constants, which are properly marked as `variable.readonly`.

#### JavaScript (_bundled_) - also applies to TypeScript (_bundled_)
- Functions need to be explicitly declared as:
  ```js
  async function foo() { return 'Greetings'; }
  ```
  in order to get `function.async` / `method.async` modifier, which means than none of below:
  ```js
  const bar = async () => 'Hey'
  const baz = () => new Promise((resolve) => resolve('Hi'))
  function qux() { return new Promise((resolve) => resolve('Hello')) }
  ```
  will get treated as async function, instead of normal one. For this reason, and that only JS/TS really supports `async` modifier, currently special styling for such functions is droped.
- Decorator usages that provide parameter list in parenthesis (even if empty) are treated as function calls instead of decorators. `@` symbol is styled properly.

#### TypeScript (_bundled_)
- `const` keyword, used in context:
  ```ts
  let obj = {
    /* ... */
  } as const;
  ```
  is improperly styled as `type`, even though keywords `storage.modifier` most of times fallback to `keyword` token.

#### C (`vscode.cpptools`) - also applies to C++ (_same_):
- non-build-in types are tokenized in extremely not-discriminative way, which means all `typedef`, `struct`, `enum` and `union` types are styled in the same way; this is especially misleading with `typedef`s, as in standard library most of them are type aliases for primitive numerical data (like `int32_t` or `size_t`); fortunately enum members are styled correctly,
- pointer star (`*`) operator is tokenized in very inconsistent way - sometimes it is treated as primitive type (`keyword`), but other times it is treated as arithmetic operator; this is not only visible in wrong style being applied, but also code formatter applying wrong spacing.

#### C++ (`vscode.cpptools`):
###### Issues from [C](#c-vscodecpptools---also-applies-to-c-same) apply here; first one is especially prevalent, since C++ introduces more types, like `class`, `enum class` / `enum struct` - to add salt to injury, plain structures have their name properly styled, but only in declaration.
- not-`typename` template parameters are styled properly in declaration, but as normal, mutable variables in usage,
- constants (both `const` and `constexpr`) lack `readonly` modifier.

#### Java (`redhat.java`)
- `super` keyword is treated as normal variable (even if used as callable constructor),
###### Issues below are not actually applicable; it turns out that once extension can properly load Java project, index it, and connect to language server, then proper semantic tokenization is applied (beside `super` keyword).
- ~~annotation `@` is styled as annotation, but annotation name is styled as interface (regardless of parenthesis)~~,
- ~~record definition is styled as record/struct, but its usage is styled as normal class~~,
- ~~enum members are styled as normal fields, rather than enum fields~~,
- ~~constructor calls / definitions are styled like normal methods (not even as static ones)~~,
- ~~field declarations are styled as local variable declarations~~,
- ~~no token style modifiers exists for constants.~~

#### C# (`ms-dotnettools.csharp`)
- escape characters in strings are not tokenized (appear as normal string),
- `readonly` fields / properties are treated like normal (mutable) fields, while `const` fields are treated as local static constants,
###### Below bug is fixed by using `recordClass` token on such types.
- ~~non-struct records are styled properly on declaration, but as normal classes on usage,~~  
- attributes should get decorator/annotation styling, but they are treated as classes; square brackets around them don't even get own token (they use `punctuation`),
- range operator (`..`) is not yet recognized by tokenizer - it will either be styled as `punctuation` (if you put spaces around it), or as illegal numerical constant (when next to numbers without spaces).
- `async` functions are present in language via first-party support (dedicated keywords), but such functions don't get marked with `async` modifier.
