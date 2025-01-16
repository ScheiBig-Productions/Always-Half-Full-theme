# ![logo icon small](https://github.com/ScheiBig-Productions/Always-Half-Full-theme/blob/main/img/icon/icon_sm.png?raw=true) Always Half-Full theme
A vibrant-colored VSCode theme that makes you feel like the glass is always half-full.

### Reasoning 
Main mission of this theme pack, is to provide themes, that feel the same, independent of the variant. The color palette was crafted in such a way, that same parts of text, use (almost) always same style and (always) same color. Shades of selected colors were picked using CieLAB space, ensuring that text always has similar amount of contrast and most importantly, that no colors need to be sacrificed to keep readability on light background.

### Feature set
Themes were crafted, using set of predetermined rules ([visit for detailed explanation](https://github.com/ScheiBig-Productions/Always-Half-Full-theme/blob/main/documentation/general_coloring_scheme.md "General Coloring Scheme")), which ensures that you get maximum context from looking at code, without even reading it yet. Even if language that you are reading has more exotic syntax, you can more or less expect, what it conveys by looking at its style (if not, you can [read here](https://github.com/ScheiBig-Productions/Always-Half-Full-theme/blob/main/documentation/exceptions_from_gcs.md "Exceptions from GCS") to understand choices made in those cases).

### Theme variants
__Always Half-Full__ comes with 4 themes, each suitable for different circumstances - two light themes, and two dark ones. The best way to describe needs they address, is to name them using different times of a day:
- 🏙️ '_**morning**_' variant - your typical, business-like light theme, with UI colored using light shades of gray. Works great in office rooms bathed in light, or as code attachments in printed documents, but does not compromise on color while doing so.
- 🌇 '_**afternoon**_' variant - a light theme, that caters towards people spending long sessions on coding, while still present at corporate environments. To address eyestrain, and lower blue-light exposure, this theme provides warmer, sandstone background colors on all surfaces.
- 🌆 '_**evening**_' variant - this theme is what the hype is nowadays. This is modern, dark theme with anthracite and dark-graphite surfaces, that allow to work with code tirelessly.
- 🌃 '_**midnight**_' variant - a minimal illumination dark theme. This variant uses coal blacks as base, allowing for colors to pop even more, while emitting as little light as possible, but as much as necessary, to accompany long nights with high concentration.
- 🌌'_**starlight**_ variant (**NEW**) - a fork of midnight variant, with muted colors and lowered contrast - for when it's closer to sunrise than sunset, but you are just few keystrokes away from finishing that project.

### Showcase

![Welcome screen / settings / console](https://github.com/ScheiBig-Productions/Always-Half-Full-theme/blob/main/img/animations/1.gif?raw=true "Welcome screen / settings / console")
![File list / Java code / Keybindings table](https://github.com/ScheiBig-Productions/Always-Half-Full-theme/blob/main/img/animations/2.gif?raw=true "File list / Java code / Keybindings table")
![Project search / JSX code / CSS code](https://github.com/ScheiBig-Productions/Always-Half-Full-theme/blob/main/img/animations/3.gif?raw=true "Project search / JSX code / CSS code")
![Jupyter notebook with Python kernel / C++ code](https://github.com/ScheiBig-Productions/Always-Half-Full-theme/blob/main/img/animations/4.gif?raw=true "Jupyter notebook with Python kernel / C++ code")

###### If you want to see smooth animations, or images above didn't load, you can see original animation [here](https://scheibig-productions.github.io/Always-Half-Full-theme/ "Showcase animations web page").

List of officially supported languages, as well as one that are planned is [available here](https://github.com/search?q=repo%3AScheiBig-Productions%2FAlways-Half-Full-theme+created%3A%3C2023-08-02+author%3AScheiBig+author%3ANuttyJelly&type=issues&ref=advsearch "List of Language Support tickets"). Keep in mind that in early stages of development, language priority badge was ignored, in favor of those, that are actually used by author.

Keep in mind that VSCode is a tool, that leverages power of community to expand its feature set. This unfortunately means, that you cannot always predict, that the result is as great, as specifications would paint it to be. As style-expressive theme pack, __Always Half-Full__ tries to leverage entirety of semantic / syntactic tokens, but still some language extensions fail to provide selector list, that would be based on entire specification of respective language. For extensive list of found bugs, that cannot be fixed without changing rules that specific language servers use, and providing heavy customizations with giant dependency graph, visit [this document](https://github.com/ScheiBig-Productions/Always-Half-Full-theme/blob/main/documentation/known_bugs.md "Known Bugs").
