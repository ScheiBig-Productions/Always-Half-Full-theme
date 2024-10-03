// @ts-check
import * as colTem from "./colors/colors-template.mjs"
const t = colTem.t
const or = colTem.or

/**
 * Creates debug yellow color
 * @param {number} x 
 * @returns {string}
 */
const debug = (x) => "#FF" + (255 - x * 6).toString(16) + "00"

/**
 * Creates theme object using provided color pallette
 * @param {colTem.ColorTemplate} from
 */
export function getTheme(from) {

	const { conf, col, opa } = from

	const none = t(col.tok?.black, "00")

	return {
		"$schema": "vscode://schemas/color-theme",
		"name": conf.name,
		"type": conf.type,
		"include": conf.include,
		"colors": {
			// :: == == ==
			// || Contrast colors
			// :: ==
			// "contrastActiveBorder": "",
			// "contrastBorder": "",
			// :: == == ==
			// || Base colors
			// :: ==
			"focusBorder": col.tok?.azure,
			"foreground": t(col.txt?.c, opa.fg?.s2),
			"disabledForeground": t(col.txt?.m1, "88"),
			// "widget.border": "",
			"widget.shadow": t(col.tok?.black, "66"),
			"selection.background": t(col.tok?.azure, "33"),
			"descriptionForeground": t(col.txt?.c, "9e"),
			"errorForeground": col.tok?.red,
			"icon.foreground": t(col.txt?.c, "bb"),
			"sash.hoverBorder": col.dec?.dr?.azure,
			// :: == == ==
			// || Window border
			// :: ==
			// "window.activeBorder": "",
			// "window.inactiveBorder": "",
			// :: == == ==
			// || Text colors
			// :: ==
			"textBlockQuote.background": col.bg?.r2,
			"textBlockQuote.border": col.tok?.beige,
			"textCodeBlock.background": t(col.tok?.beige, "66"),
			"textLink.activeForeground": col.dec?.dr?.azure,
			"textLink.foreground": col.dec?.lg?.azure,
			"textPreformat.foreground": col.tok?.teal,
			"textSeparator.foreground": col.txt?.m3,
			// :: == == ==
			// || Action colors
			// :: ==
			"toolbar.hoverBackground": t(col.dec?.dr?.azure, opa.com?.xbg),
			// "toolbar.hoverOutline": "",
			"toolbar.activeBackground": t(col.tok?.azure, opa.com?.xbg),
			// :: == == ==
			// || Button control
			// :: ==
			"button.background": col.dec?.dr?.azure,
			"button.foreground": col?.tok?.white,
			"button.border": t(col?.dec?.dr?.azure, opa.btn?.br),
			"button.separator": t(col?.tok?.white, "66"),
			"button.hoverBackground": col.tok?.azure,
			"button.secondaryForeground": col.txt?.c,
			"button.secondaryBackground": t(col.txt?.m3, opa.btn?.sbg),
			"button.secondaryHoverBackground": t(col.tok?.azure, opa.btn?.xsbg),
			"checkbox.background": t(col.bg?.r4, "88"),
			"checkbox.foreground": col.txt?.c,
			"checkbox.border": col.txt?.m1,
			"checkbox.selectBackground": col.tok?.azure,
			"checkbox.selectBorder": col.tok?.azure,
			// :: == == ==
			// || Dropdown control
			// :: ==
			"dropdown.background": t(col.bg?.r4, "88"),
			"dropdown.listBackground": t(col.bg?.r1, "ee"),
			"dropdown.border": t(col.txt?.c, opa.fg?.s3),
			"dropdown.foreground": t(col.txt?.c, opa.fg?.m1),
			// :: == == ==
			// || Input control
			// :: ==
			"input.background": t(col.bg?.r4, "88"),
			"input.border": t(col.txt?.c, opa.fg?.s3),
			"input.foreground": t(col.txt?.c, opa.fg?.s2),
			"input.placeholderForeground": t(col.txt?.c, opa.fg?.s3),
			"inputOption.activeBackground": t(col.tok?.azure, opa.bg?.m8),
			"inputOption.activeBorder": col.tok?.azure,
			"inputOption.activeForeground": col.txt?.c,
			"inputOption.hoverBackground": t(col.dec?.dr?.azure, opa.com?.xbg),
			"inputValidation.errorBackground": t(col.dec?.dr?.red, "88"),
			"inputValidation.errorForeground": t(col.txt?.c, opa.fg?.s1),
			"inputValidation.errorBorder": col.dec?.dr?.red,
			"inputValidation.infoBackground": t(col.dec?.dr?.azure, opa.bg?.m8),
			"inputValidation.infoForeground": t(col.txt?.c, opa.fg?.s1),
			"inputValidation.infoBorder": col.dec?.dr?.azure,
			"inputValidation.warningBackground": t(col.dec?.dr?.yellow, "88"),
			"inputValidation.warningForeground": t(col.txt?.c, opa.fg?.s1),
			"inputValidation.warningBorder": col.dec?.dr?.yellow,
			// :: == == ==
			// || Scrollbar control
			// :: ==
			"scrollbar.shadow": t(col.tok?.black, "66"),
			"scrollbarSlider.activeBackground": t(col.txt?.m1, "99"),
			"scrollbarSlider.background": t(col.txt?.c, "33"),
			"scrollbarSlider.hoverBackground": t(col.misc?.scr, "66"),
			// :: == == ==
			// || Badge
			// :: ==
			"badge.foreground": col?.tok?.white,
			"badge.background": t(col.dec?.dr?.azure, "dd"),
			// :: == == ==
			// || Progress bar
			// :: ==
			"progressBar.background": col.tok?.azure,
			// :: == == ==
			// || Lists and trees
			// :: ==
			"list.activeSelectionBackground": t(col.tok?.azure, opa.bg?.m4),
			"list.activeSelectionForeground": col.txt?.m2,
			// "list.activeSelectionIconForeground": "",
			"list.dropBackground": t(col.tok?.azure, opa.bg?.m8),
			// "list.focusBackground": "",
			// "list.focusForeground": "",
			"list.focusHighlightForeground": col.tok?.azure,
			"list.focusOutline": col.tok?.azure,
			"list.focusAndSelectionOutline": col.tok?.azure,
			"list.highlightForeground": col.tok?.purple,
			"list.hoverBackground": t(col.dec?.dr?.azure, opa.bg?.m8),
			"list.hoverForeground": t(col.txt?.c, opa.fg?.m1),
			"list.inactiveSelectionBackground": col.bg?.r2,
			// "list.inactiveSelectionForeground": "",
			// "list.inactiveSelectionIconForeground": "",
			// "list.inactiveFocusBackground": "",
			"list.inactiveFocusOutline": col.tok?.azure,
			"list.invalidItemForeground": col.tok?.orange,
			"list.errorForeground": col.tok?.red,
			"list.warningForeground": col.tok?.yellow,
			"listFilterWidget.background": t(col.bg?.r1, "ee"),
			"listFilterWidget.outline": none,
			"listFilterWidget.noMatchesOutline": t(col.tok?.red, "88"),
			"listFilterWidget.shadow": t(col.tok?.black, "66"),
			"list.filterMatchBackground": t(col.tok?.purple, "33"),
			"list.filterMatchBorder": col.tok?.purple,
			"list.deemphasizedForeground": t(col.txt?.c, opa.fg?.s3),
			"tree.indentGuidesStroke": t(col.txt?.c, "66"),
			"tree.inactiveIndentGuidesStroke": t(col.txt?.c, "33"),
			"tree.tableColumnsBorder": col.brd?.s,
			"tree.tableOddRowsBackground": t(col.tok?.black, opa.com?.xrow),
			// :: == == ==
			// || Activity Bar
			// :: ==
			"activityBar.background": col.bg?.l1,
			"activityBar.dropBorder": t(col.tok?.azure, opa.bg?.m8),
			"activityBar.foreground": col.tok?.azure,
			"activityBar.inactiveForeground": t(col.txt?.c, opa.fg?.s3),
			"activityBar.border": col.brd?.w,
			"activityBarBadge.background": t(col.dec?.dr?.azure, "dd"),
			"activityBarBadge.foreground": col?.tok?.white,
			"activityBar.activeBorder": col.dec?.dr?.azure,
			"activityBar.activeBackground": t(col.tok?.azure, "22"),
			"activityBar.activeFocusBorder": col.tok?.azure,
			// :: == == ==
			// || Profiles
			// :: ==
			"profileBadge.background": t(col.dec?.dr?.azure, "dd"),
			"profileBadge.foreground": col?.tok?.white,
			// :: == == ==
			// || Side Bar
			// :: ==
			"sideBar.background": col.bg?.l1,
			"sideBar.foreground": t(col.txt?.c, opa.fg?.s2),
			"sideBar.border": col.brd?.w,
			"sideBar.dropBackground": t(col.tok?.azure, opa.bg?.m8),
			"sideBarTitle.foreground": t(col.txt?.c, opa.fg?.m1),
			"sideBarSectionHeader.background": col.bg?.l1,
			"sideBarSectionHeader.foreground": t(col.txt?.c, opa.fg?.m1),
			"sideBarSectionHeader.border": col.brd?.w,
			// :: == == ==
			// || Minimap
			// :: ==
			"minimap.findMatchHighlight": col.tok?.lilac,
			"minimap.selectionHighlight": t(col.tok?.azure, opa.bg?.m8),
			"minimap.errorHighlight": col.dec?.dr?.red,
			"minimap.warningHighlight": col.dec?.dr?.yellow,
			"minimap.background": t(col.bg?.r2, "aa"),
			"minimap.selectionOccurrenceHighlight": col.tok?.teal,
			"minimap.foregroundOpacity": t(col.tok?.black, "ff"),
			"minimapSlider.background": t(col.tok?.azure, opa.bg?.m4),
			"minimapSlider.hoverBackground": t(col.dec?.dr?.azure, opa.bg?.m8),
			"minimapSlider.activeBackground": t(col.tok?.azure, opa.bg?.m8),
			"minimapGutter.addedBackground": col.tok?.green,
			"minimapGutter.modifiedBackground": col.tok?.teal,
			"minimapGutter.deletedBackground": col.tok?.orange,
			// :: == == ==
			// || Editor Groups & Tabs
			// :: ==
			"editorGroup.border": col.brd?.w,
			"editorGroup.dropBackground": t(col.tok?.azure, opa.bg?.m8),
			"editorGroupHeader.noTabsBackground": col.bg?.l1,
			"editorGroupHeader.tabsBackground": col.bg?.l1,
			"editorGroupHeader.tabsBorder": col.brd?.w,
			"editorGroupHeader.border": col.brd?.w,
			"editorGroup.emptyBackground": col.bg?.l1,
			"editorGroup.focusedEmptyBorder": col.tok?.azure,
			"editorGroup.dropIntoPromptForeground": col?.tok?.white,
			"editorGroup.dropIntoPromptBackground": col.dec?.dr?.azure,
			"editorGroup.dropIntoPromptBorder": col.bg?.l1,
			"tab.activeBackground": col.bg?.r2,
			"tab.unfocusedActiveBackground": col.bg?.m,
			"tab.activeForeground": t(col.txt?.c, opa.fg?.m1),
			"tab.border": col.brd?.w,
			"tab.activeBorder": col.bg?.r2,
			"tab.unfocusedActiveBorder": col.bg?.r1,
			"tab.activeBorderTop": col.dec?.dr?.azure,
			"tab.unfocusedActiveBorderTop": col.brd?.w,
			"tab.lastPinnedBorder": col.tok?.azure,
			"tab.inactiveBackground": col.bg?.l1,
			"tab.unfocusedInactiveBackground": col.bg?.l1,
			"tab.inactiveForeground": t(col.txt?.m1, "bb"),
			"tab.unfocusedActiveForeground": t(col.txt?.m1, "bb"),
			"tab.unfocusedInactiveForeground": t(col.txt?.m1, "66"),
			"tab.hoverBackground": t(col.dec?.dr?.azure, opa.bg?.m8),
			"tab.unfocusedHoverBackground": t(col.dec?.dr?.azure, opa.bg?.m6),
			// "tab.hoverForeground": "",
			// "tab.unfocusedHoverForeground": "",
			// "tab.hoverBorder": "",
			// "tab.unfocusedHoverBorder": "",
			// "tab.activeModifiedBorder": "",
			// "tab.inactiveModifiedBorder": "",
			// "tab.unfocusedActiveModifiedBorder": "",
			// "tab.unfocusedInactiveModifiedBorder": "",
			"editorPane.background": col.bg?.l1,
			"sideBySideEditor.horizontalBorder": col.txt?.m3,
			"sideBySideEditor.verticalBorder": col.txt?.m3,
			// :: == == ==
			// || Editor colors
			// :: ==
			"editor.background": col.bg?.m,
			"editor.foreground": col.txt?.m1,
			"editorLineNumber.foreground": t(col.txt?.c, opa.edt?.mln),
			"editorLineNumber.activeForeground": col.dec?.lg?.azure,
			"editorLineNumber.dimmedForeground": t(col.txt?.c, opa.edt?.sln),
			"editorCursor.background": col.bg?.m,
			"editorCursor.foreground": t(col.txt?.c, opa.edt?.cur),
			//
			"editor.selectionBackground": t(col.misc?.sel, "66"),
			"editor.selectionForeground": col.txt?.c,
			"editor.inactiveSelectionBackground": t(col.txt?.m2, "33"),
			"editor.selectionHighlightBackground": t(col.txt?.m2, opa.edt?.shl),
			"editor.selectionHighlightBorder": t(col.tok?.teal, "aa"),
			//
			"editor.wordHighlightBackground": t(col.tok?.teal, opa.edt?.whl),
			// "editor.wordHighlightBorder": col.tok?.teal,
			"editor.wordHighlightStrongBackground": t(col.tok?.green, opa.edt?.whl),
			// "editor.wordHighlightStrongBorder": col.tok?.green,
			"editor.wordHighlightTextBackground": t(col.txt?.m3, opa.edt?.whl),
			// "editor.wordHighlightTextBorder": t(col.tok?.azure, "aa"),
			//,
			"editor.findMatchBackground": t(col.tok?.purple, "11"),
			"editor.findMatchHighlightBackground": t(col.tok?.purple, "11"),
			"editor.findRangeHighlightBackground": t(col.tok?.purple, "18"),
			"editor.findMatchBorder": col.tok?.purple,
			"editor.findMatchHighlightBorder": col.tok?.purple,
			// "editor.findRangeHighlightBorder": col.bg?.r4,
			//
			"search.resultsInfoForeground": col.tok?.purple,
			"searchEditor.findMatchBackground": t(col.tok?.purple, "11"),
			"searchEditor.findMatchBorder": col.tok?.purple,
			"searchEditor.textInputBorder": col.bg?.r4,
			//
			"editor.hoverHighlightBackground": t(col.txt?.m3, "66"),
			"editor.lineHighlightBackground": col.bg?.r2,
			"editor.lineHighlightBorder": t(col.dec?.lg?.azure, "33"),
			"editorUnicodeHighlight.border": col.dec?.lg?.yellow,
			"editorUnicodeHighlight.background": none,
			"editorLink.activeForeground": col.dec?.dr?.azure,
			//
			"editor.rangeHighlightBackground": t(col.tok?.purple, "33"),
			"editor.rangeHighlightBorder": none,
			"editor.symbolHighlightBackground": t(col.tok?.beige, "33"),
			"editor.symbolHighlightBorder": col.tok?.beige,
			"editorWhitespace.foreground": t(col.txt?.m3, "55"),
			"editorIndentGuide.background": t(col.txt?.c, "44"),
			"editorIndentGuide.activeBackground": t(col.txt?.c, opa.fg?.s3),
			//
			"editorInlayHint.background": t(col.bg?.r4, "88"),
			"editorInlayHint.foreground": t(col.txt?.c, opa.fg?.s2),
			"editorInlayHint.typeForeground": col.tok?.azure,
			"editorInlayHint.typeBackground": t(col.bg?.r4, "88"),
			"editorInlayHint.parameterForeground": col.tok?.lavender,
			"editorInlayHint.parameterBackground": t(col.bg?.r4, "88"),
			"editorRuler.foreground": t(col.txt?.c, "33"),
			"editor.linkedEditingBackground": t(col.tok?.orange, "44"),
			//
			"editorCodeLens.foreground": col.tok?.beige,
			"editorLightBulb.foreground": col.dec?.lg?.yellow,
			"editorLightBulbAutoFix.foreground": col.dec?.lg?.azure,
			//
			"editorBracketMatch.background": none,
			"editorBracketMatch.border": t(col.txt?.c, "88"),
			"editorBracketHighlight.foreground1": t(col.tok?.orange, opa.edt?.brc),
			"editorBracketHighlight.foreground2": t(col.tok?.teal, opa.edt?.brc),
			"editorBracketHighlight.foreground3": t(col.tok?.purple, opa.edt?.brc),
			"editorBracketHighlight.foreground4": t(col.tok?.green, opa.edt?.brc),
			"editorBracketHighlight.foreground5": t(col.tok?.azure, opa.edt?.brc),
			"editorBracketHighlight.foreground6": t(col.tok?.magenta, opa.edt?.brc),
			"editorBracketHighlight.unexpectedBracket.foreground": col.tok?.red,
			"editorBracketPairGuide.activeBackground1": t(col.tok?.orange, opa.edt?.brc),
			"editorBracketPairGuide.activeBackground2": t(col.tok?.teal, opa.edt?.brc),
			"editorBracketPairGuide.activeBackground3": t(col.tok?.purple, opa.edt?.brc),
			"editorBracketPairGuide.activeBackground4": t(col.tok?.green, opa.edt?.brc),
			"editorBracketPairGuide.activeBackground5": t(col.tok?.azure, opa.edt?.brc),
			"editorBracketPairGuide.activeBackground6": t(col.tok?.magenta, opa.edt?.brc),
			"editorBracketPairGuide.background1": t(col.tok?.orange, opa.bg?.m8),
			"editorBracketPairGuide.background2": t(col.tok?.teal, opa.bg?.m8),
			"editorBracketPairGuide.background3": t(col.tok?.purple, opa.bg?.m8),
			"editorBracketPairGuide.background4": t(col.tok?.green, opa.bg?.m8),
			"editorBracketPairGuide.background5": t(col.tok?.azure, opa.bg?.m8),
			"editorBracketPairGuide.background6": t(col.tok?.magenta, opa.bg?.m8),
			//
			"editor.foldBackground": col.bg?.l2,
			"editorOverviewRuler.background": t(col.bg?.r2, "aa"),
			"editorOverviewRuler.border": col.brd?.w,
			"editorOverviewRuler.findMatchForeground": col.tok?.lilac,
			"editorOverviewRuler.rangeHighlightForeground": t(col.tok?.lilac, "66"),
			"editorOverviewRuler.selectionHighlightForeground": t(col.tok?.azure, "99"),
			"editorOverviewRuler.wordHighlightForeground": t(col.tok?.teal, "55"),
			"editorOverviewRuler.wordHighlightStrongForeground": t(col.tok?.teal, "99"),
			"editorOverviewRuler.wordHighlightTextForeground": t(col.txt?.m3, "99"),
			"editorOverviewRuler.modifiedForeground": col.tok?.teal,
			"editorOverviewRuler.addedForeground": col.tok?.green,
			"editorOverviewRuler.deletedForeground": col.tok?.orange,
			"editorOverviewRuler.errorForeground": col.tok?.red,
			"editorOverviewRuler.warningForeground": col.tok?.yellow,
			"editorOverviewRuler.infoForeground": col.tok?.azure,
			"editorOverviewRuler.bracketMatchForeground": t(col.txt?.c, "88"),
			//
			"editorError.foreground": col.tok?.red,
			"editorError.border": none,
			"editorError.background": none,
			"editorWarning.foreground": col.tok?.yellow,
			"editorWarning.border": none,
			"editorWarning.background": none,
			"editorInfo.foreground": col.dec?.lg?.azure,
			"editorInfo.border": none,
			"editorInfo.background": none,
			"editorHint.foreground": none,
			"editorHint.border": col.tok?.green,
			"problemsErrorIcon.foreground": col.tok?.red,
			"problemsWarningIcon.foreground": col.tok?.yellow,
			"problemsInfoIcon.foreground": col.dec?.lg?.azure,
			// "editorUnnecessaryCode.border": "",
			"editorUnnecessaryCode.opacity": t(col.tok?.black, "bb"),
			//
			"editorGutter.background": col.bg?.m,
			"editorGutter.modifiedBackground": col.tok?.teal,
			"editorGutter.addedBackground": col.tok?.green,
			"editorGutter.deletedBackground": col.tok?.orange,
			"editorGutter.commentRangeForeground": col.bg?.r3,
			"editorGutter.commentGlyphForeground": t(col.txt?.c, opa.fg?.m1),
			"editorGutter.commentUnresolvedGlyphForeground": col.dec?.lg?.yellow,
			"editorGutter.foldingControlForeground": t(col.txt?.c, opa.fg?.m1),
			//
			"editorCommentsWidget.resolvedBorder": t(col.tok?.green, "88"),
			"editorCommentsWidget.unresolvedBorder": t(col.tok?.orange, "88"),
			"editorCommentsWidget.rangeBackground": t(col?.tok?.white, "22"),
			"editorCommentsWidget.rangeBorder": col.tok?.beige,
			"editorCommentsWidget.rangeActiveBackground": t(col.tok?.beige, "44"),
			"editorCommentsWidget.rangeActiveBorder": col.tok?.beige,
			// :: == == ==
			// || Diff editor colors
			// :: ==
			"diffEditor.insertedTextBackground": t(col.tok?.green, "18"),
			"diffEditor.insertedTextBorder": t(col.tok?.green, "33"),
			"diffEditor.removedTextBackground": t(col.tok?.orange, "18"),
			"diffEditor.removedTextBorder": t(col.tok?.orange, "33"),
			"diffEditor.border": col.tok?.teal,
			"diffEditor.diagonalFill": t(col.tok?.yellow, "66"),
			"diffEditor.insertedLineBackground": t(col.tok?.green, "18"),
			"diffEditor.removedLineBackground": t(col.tok?.orange, "18"),
			"diffEditorGutter.insertedLineBackground": t(col.tok?.green, "22"),
			"diffEditorGutter.removedLineBackground": t(col.tok?.orange, "22"),
			"diffEditorOverview.insertedForeground": col.tok?.green,
			"diffEditorOverview.removedForeground": col.tok?.orange,
			// :: == == ==
			// || Editor widget colors
			// :: ==
			"editorWidget.foreground": t(col.txt?.c, opa.fg?.m1),
			"editorWidget.background": t(col.bg?.r1, "ee"),
			"editorWidget.border": col.brd?.s,
			"editorWidget.resizeBorder": col.txt?.m3,
			"editorSuggestWidget.background": t(col.bg?.r1, "ee"),
			"editorSuggestWidget.border": col.brd?.s,
			"editorSuggestWidget.foreground": t(col.txt?.c, opa.fg?.m1),
			"editorSuggestWidget.focusHighlightForeground": col.tok?.azure,
			"editorSuggestWidget.highlightForeground": col.tok?.purple,
			"editorSuggestWidget.selectedBackground": t(col.tok?.azure, opa.bg?.m4),
			"editorSuggestWidget.selectedForeground": t(col.txt?.c, opa.com?.xfg),
			"editorSuggestWidget.selectedIconForeground": t(col.txt?.c, opa.com?.xico),
			"editorSuggestWidgetStatus.foreground": t(col.txt?.c, "da"),
			"editorHoverWidget.foreground": t(col.txt?.c, opa.fg?.m1),
			"editorHoverWidget.background": t(col.bg?.r2, "e2"),
			"editorHoverWidget.border": col.brd?.s,
			"editorHoverWidget.highlightForeground": col.tok?.lilac,
			"editorHoverWidget.statusBarBackground": t(col.bg?.r1, "ee"),
			"editorGhostText.border": none,
			"editorGhostText.background": t(col.tok?.denim, "33"),
			"editorGhostText.foreground": t(col.txt?.c, opa.fg?.s3),
			"editorStickyScroll.background": col.bg?.r2,
			"editorStickyScrollHover.background": t(col.dec?.dr?.azure, opa.bg?.m8),
			"debugExceptionWidget.background": t(col.dec?.dr?.red, "88"),
			"debugExceptionWidget.border": col.tok?.red,
			"editorMarkerNavigation.background": t(col.bg?.r2, "e2"),
			"editorMarkerNavigationError.background": col.tok?.red,
			"editorMarkerNavigationWarning.background": col.tok?.yellow,
			"editorMarkerNavigationInfo.background": col.tok?.azure,
			"editorMarkerNavigationError.headerBackground": t(col.dec?.dr?.red, "88"),
			"editorMarkerNavigationWarning.headerBackground": t(col.dec?.dr?.yellow, "88"),
			"editorMarkerNavigationInfo.headerBackground": t(col.dec?.dr?.azure, opa.bg?.m8),
			// :: == == ==
			// || Peek view colors
			// :: ==
			"peekView.border": col.brd?.s,
			"peekViewEditor.background": col.bg?.r2,
			"peekViewEditorGutter.background": col.bg?.r2,
			"peekViewEditor.matchHighlightBackground": t(col.tok?.beige, "33"),
			"peekViewEditor.matchHighlightBorder": col.tok?.beige,
			"peekViewResult.background": col.bg?.m,
			"peekViewResult.fileForeground": t(col.txt?.c, opa.fg?.s2),
			"peekViewResult.lineForeground": t(col.txt?.c, opa.fg?.s1),
			"peekViewResult.matchHighlightBackground": t(col.tok?.purple, "33"),
			"peekViewResult.selectionBackground": t(col.tok?.azure, opa.bg?.m4),
			"peekViewResult.selectionForeground": t(col.txt?.c, opa.fg?.m1),
			"peekViewTitle.background": col.bg?.r2,
			"peekViewTitleDescription.foreground": t(col.txt?.c, opa.fg?.s3),
			"peekViewTitleLabel.foreground": t(col.txt?.c, opa.fg?.m1),
			// :: == == ==
			// || Merge conflicts colors
			// :: ==
			"merge.currentHeaderBackground": col.dec?.dr?.azure,
			"merge.currentContentBackground": t(col.dec?.dr?.azure, opa.bg?.m4),
			"merge.incomingHeaderBackground": col.dec?.dr?.magenta,
			"merge.incomingContentBackground": t(col.dec?.dr?.magenta, "44"),
			"merge.border": col.txt?.m3,
			"merge.commonContentBackground": col.dec?.dr?.green,
			"merge.commonHeaderBackground": t(col.dec?.dr?.green, "44"),
			"editorOverviewRuler.currentContentForeground": col.dec?.dr?.azure,
			"editorOverviewRuler.incomingContentForeground": col.dec?.dr?.magenta,
			"editorOverviewRuler.commonContentForeground": col.dec?.dr?.green,
			"mergeEditor.change.background": t(col.tok?.magenta, "44"),
			"mergeEditor.change.word.background": none,
			"mergeEditor.conflict.unhandledUnfocused.border": t(col.tok?.magenta, "88"),
			"mergeEditor.conflict.unhandledFocused.border": col.tok?.magenta,
			"mergeEditor.conflict.handledUnfocused.border": t(col.tok?.green, "88"),
			"mergeEditor.conflict.handledFocused.border": col.tok?.green,
			"mergeEditor.conflict.handled.minimapOverViewRuler": col.tok?.green,
			"mergeEditor.conflict.unhandled.minimapOverViewRuler": col.tok?.magenta,
			"mergeEditor.conflictingLines.background": debug(0),
			"mergeEditor.changeBase.background": debug(1),
			"mergeEditor.changeBase.word.background": debug(2),
			"mergeEditor.conflict.input1.background": debug(3),
			"mergeEditor.conflict.input2.background": debug(4),
			// :: == == ==
			// || Panel colors
			// :: ==
			"panel.background": col.bg?.r2,
			"panel.border": col.brd?.w,
			"panel.dropBorder": t(col.tok?.azure, opa.bg?.m8),
			"panelTitle.activeBorder": col.dec?.dr?.azure,
			"panelTitle.activeForeground": col.tok?.azure,
			"panelTitle.inactiveForeground": t(col.txt?.c, opa.fg?.s2),
			"panelInput.border": t(col.txt?.c, opa.fg?.s3),
			"panelSection.border": col.brd?.s,
			"panelSection.dropBackground": t(col.tok?.azure, opa.bg?.m8),
			"panelSectionHeader.background": col.bg?.r3,
			"panelSectionHeader.foreground": t(col.txt?.c, opa.fg?.m1),
			"panelSectionHeader.border": col.brd?.s,
			// :: == == ==
			// || Status Bar colors
			// :: ==
			"statusBar.background": or(col.alt?.azure, col.dec?.dr?.azure),
			"statusBar.foreground": t(col.txt?.c, "dd"),
			// "statusBar.border": "",
			"statusBar.debuggingBackground": or(col.alt?.orange, col.dec?.dr?.orange),
			"statusBar.debuggingForeground": col.txt?.c,
			// "statusBar.debuggingBorder": "",
			"statusBar.noFolderForeground": t(col.txt?.c, "dd"),
			"statusBar.noFolderBackground": or(col.alt?.purple, col.dec?.dr?.purple),
			// "statusBar.noFolderBorder": "",
			"statusBarItem.activeBackground": t(col.bg?.hl, "44"),
			"statusBarItem.hoverBackground": t(col.txt?.c, "44"),
			"statusBarItem.prominentForeground": col.txt?.c,
			"statusBarItem.prominentBackground": t(col.misc?.sbpbg, "44"),
			"statusBarItem.prominentHoverBackground": t(col.txt?.c, "22"),
			"statusBarItem.remoteBackground": or(col.alt?.green, col.dec?.dr?.green),
			"statusBarItem.remoteForeground": col.txt?.c,
			"statusBarItem.errorBackground": or(col.alt?.red, col.dec?.dr?.red),
			"statusBarItem.errorForeground": t(col.txt?.c, "dd"),
			"statusBarItem.warningBackground": or(col.alt?.yellow, col.dec?.dr?.yellow),
			"statusBarItem.warningForeground": t(col.txt?.c, "dd"),
			"statusBarItem.compactHoverBackground": t(col.txt?.c, "66"),
			"statusBarItem.focusBorder": col.tok?.azure,
			"statusBar.focusBorder": col.tok?.azure,
			// :: == == ==
			// || Title Bar colors
			// :: ==
			"titleBar.activeBackground": col.bg?.l1,
			"titleBar.activeForeground": t(col.txt?.c, opa.fg?.m1),
			"titleBar.inactiveBackground": col.bg?.l1,
			"titleBar.inactiveForeground": t(col.txt?.c, opa.fg?.s3),
			"titleBar.border": col.bg?.l1,
			// :: == == ==
			// || Menu Bar colors
			// :: ==
			"menubar.selectionForeground": t(col.txt?.c, opa.fg?.m1),
			"menubar.selectionBackground": t(col.dec?.dr?.azure, opa.bg?.m8),
			"menubar.selectionBorder": none,
			"menu.foreground": t(col.txt?.c, opa.fg?.m1),
			"menu.background": t(col.bg?.r1, "ee"),
			"menu.selectionForeground": t(col.txt?.c, opa.fg?.m1),
			"menu.selectionBackground": t(col.dec?.dr?.azure, opa.bg?.m8),
			"menu.selectionBorder": none,
			"menu.separatorBackground": col.brd?.s,
			"menu.border": col.brd?.s,
			// :: == == ==
			// || Command Center colors
			// :: ==
			"commandCenter.foreground": t(col.txt?.c, opa.fg?.s3),
			"commandCenter.activeForeground": t(col.txt?.c, opa.fg?.m1),
			"commandCenter.background": col.bg?.m,
			"commandCenter.activeBackground": col.bg?.m,
			"commandCenter.border": t(col.txt?.c, opa.fg?.s3),
			"commandCenter.inactiveForeground": t(col.txt?.c, opa.fg?.s3),
			"commandCenter.inactiveBorder": t(col.txt?.c, "43"),
			"commandCenter.activeBorder": col.tok?.azure,
			// :: == == ==
			// || Notification colors
			// :: ==
			"notificationCenter.border": col.brd?.s,
			"notificationCenterHeader.foreground": t(col.txt?.c, opa.fg?.m1),
			"notificationCenterHeader.background": t(col.bg?.r2, "e2"),
			"notificationToast.border": col.brd?.s,
			"notifications.foreground": t(col.txt?.c, opa.fg?.m1),
			"notifications.background": t(col.bg?.r2, "e2"),
			"notifications.border": col.brd?.s,
			"notificationLink.foreground": col.dec?.lg?.azure,
			"notificationsErrorIcon.foreground": col.tok?.red,
			"notificationsWarningIcon.foreground": col.tok?.yellow,
			"notificationsInfoIcon.foreground": col.tok?.azure,
			// :: == == ==
			// || Banner colors
			// :: ==
			"banner.background": t(col.tok?.magenta, "88"),
			"banner.foreground": col.txt?.c,
			"banner.iconForeground": t(col.txt?.c, opa.fg?.m1),
			// :: == == ==
			// || Extensions colors
			// :: ==
			"extensionButton.prominentForeground": col?.tok?.white,
			"extensionButton.prominentBackground": col.dec?.dr?.azure,
			"extensionButton.prominentHoverBackground": col.tok?.azure,
			"extensionButton.background": col.dec?.dr?.azure,
			"extensionButton.foreground": col?.tok?.white,
			"extensionButton.hoverBackground": col.tok?.azure,
			"extensionButton.separator": t(col?.tok?.white, "66"),
			"extensionBadge.remoteBackground": t(col.dec?.dr?.green, "dd"),
			"extensionBadge.remoteForeground": col?.tok?.white,
			"extensionIcon.starForeground": col.tok?.golden,
			"extensionIcon.verifiedForeground": col.dec?.dr?.azure,
			"extensionIcon.preReleaseForeground": t(col.tok?.magenta, "dd"),
			"extensionIcon.sponsorForeground": col.tok?.lilac,
			// :: == == ==
			// || Quick picker colors
			// :: ==
			"pickerGroup.border": col.brd?.s,
			"pickerGroup.foreground": col.tok?.azure,
			"quickInput.background": t(col.bg?.r1, "ee"),
			"quickInput.foreground": t(col.txt?.c, opa.fg?.m1),
			"quickInputList.focusBackground": t(col.tok?.azure, opa.bg?.m4),
			"quickInputList.focusForeground": t(col.txt?.c, opa.fg?.m1),
			"quickInputList.focusIconForeground": t(col.txt?.c, opa.fg?.m1),
			"quickInputTitle.background": col.bg?.r2,
			// :: == == ==
			// || Keybinding label colors
			// :: ==
			"keybindingLabel.background": col.bg?.l1,
			"keybindingLabel.foreground": t(col.txt?.c, opa.fg?.m1),
			"keybindingLabel.border": col.brd?.w,
			"keybindingLabel.bottomBorder": col.bg?.l2,
			// :: == == ==
			// || Keyboard shortcut table colors
			// :: ==
			"keybindingTable.headerBackground": col.bg?.r2,
			"keybindingTable.rowsBackground": t(col.tok?.black, opa.com?.xrow),
			// :: == == ==
			// || Integrated Terminal colors
			// :: ==
			"terminal.background": col.bg?.r1,
			"terminal.border": col.brd?.s,
			"terminal.foreground": col.txt?.m1,
			"terminal.ansiBlack": col.tok?.grey,
			"terminal.ansiBlue": col.tok?.azure,
			"terminal.ansiBrightBlack": col.tok?.silver,
			"terminal.ansiBrightBlue": col.tok?.denim,
			"terminal.ansiBrightCyan": col.tok?.steel,
			"terminal.ansiBrightGreen": col.tok?.beige,
			"terminal.ansiBrightMagenta": col.tok?.magenta,
			"terminal.ansiBrightRed": col.tok?.lavender,
			"terminal.ansiBrightWhite": col?.tok?.white,
			"terminal.ansiBrightYellow": col.tok?.yellow,
			"terminal.ansiCyan": col.tok?.teal,
			"terminal.ansiGreen": col.tok?.green,
			"terminal.ansiMagenta": col.tok?.purple,
			"terminal.ansiRed": col.tok?.red,
			"terminal.ansiWhite": col.tok?.bone,
			"terminal.ansiYellow": col.tok?.orange,
			"terminal.selectionBackground": t(col.tok?.azure, "33"),
			// "terminal.selectionForeground": "",
			"terminal.inactiveSelectionBackground": t(col.txt?.m2, "33"),
			"terminal.findMatchBackground": t(col.tok?.purple, "11"),
			"terminal.findMatchBorder": col.tok?.purple,
			"terminal.findMatchHighlightBackground": t(col.tok?.purple, "22"),
			"terminal.findMatchHighlightBorder": col.tok?.purple,
			"terminal.hoverHighlightBackground": t(col.tok?.teal, "66"),
			"terminalCursor.background": col.bg?.r1,
			"terminalCursor.foreground": t(col.txt?.c, "da"),
			"terminal.dropBackground": t(col.tok?.azure, opa.bg?.m8),
			"terminal.tab.activeBorder": col.dec?.dr?.azure,
			"terminalCommandDecoration.defaultBackground": col.txt?.m3,
			"terminalCommandDecoration.successBackground": col.tok?.green,
			"terminalCommandDecoration.errorBackground": col.tok?.red,
			"terminalOverviewRuler.cursorForeground": t(col.txt?.c, "da"),
			"terminalOverviewRuler.findMatchForeground": col.tok?.purple,
			// :: == == ==
			// || Debug colors
			// :: ==
			"debugToolBar.background": t(col.bg?.r2, "bb"),
			"debugToolBar.border": col.brd?.s,
			"editor.stackFrameHighlightBackground": t(col.tok?.magenta, "33"),
			"editor.focusedStackFrameHighlightBackground": t(col.tok?.purple, "33"),
			"editor.inlineValuesForeground": t(col.txt?.c, opa.fg?.m1),
			"editor.inlineValuesBackground": t(col.tok?.magenta, "44"),
			"debugView.exceptionLabelForeground": t(col.txt?.c, opa.fg?.m1),
			"debugView.exceptionLabelBackground": t(col.dec?.dr?.red, "bb"),
			"debugView.stateLabelForeground": t(col.txt?.c, opa.fg?.m1),
			"debugView.stateLabelBackground": t(col.dec?.dr?.azure, opa.bg?.m10),
			"debugView.valueChangedHighlight": col.tok?.azure,
			"debugTokenExpression.name": col.tok?.purple,
			"debugTokenExpression.value": col.txt?.m1,
			"debugTokenExpression.string": col.tok?.teal,
			"debugTokenExpression.boolean": col.tok?.orange,
			"debugTokenExpression.number": col.tok?.green,
			"debugTokenExpression.error": col.tok?.red,
			// :: == == ==
			// || Testing colors
			// :: ==
			"testing.iconFailed": col.tok?.yellow,
			"testing.iconErrored": col.tok?.red,
			"testing.iconPassed": col.tok?.green,
			"testing.runAction": col.tok?.green,
			"testing.iconQueued": col.txt?.m2,
			"testing.iconUnset": col.txt?.m2,
			"testing.iconSkipped": col.tok?.lilac,
			"testing.peekBorder": col.tok?.magenta,
			"testing.peekHeaderBackground": t(col.tok?.magenta, "66"),
			"testing.message.error.decorationForeground": col.tok?.red,
			"testing.message.error.lineBackground": col.tok?.red,
			"testing.message.info.decorationForeground": col.tok?.magenta,
			"testing.message.info.lineBackground": col.tok?.magenta,
			// :: == == ==
			// || Welcome page colors
			// :: ==
			"welcomePage.background": col.bg?.m,
			"welcomePage.progress.background": col.bg?.r4,
			"welcomePage.progress.foreground": col.tok?.azure,
			"welcomePage.tileBackground": col.bg?.r2,
			"welcomePage.tileHoverBackground": t(col.dec?.dr?.azure, opa.bg?.m8),
			"welcomePage.tileBorder": col.brd?.w,
			"walkThrough.embeddedEditorBackground": col.bg?.l1,
			"walkthrough.stepTitle.foreground": col.tok?.purple,
			// :: == == ==
			// || Source Control colors
			// :: ==
			"scm.providerBorder": debug(5),
			// :: == == ==
			// || Git colors
			// :: ==
			"gitDecoration.addedResourceForeground": col.tok?.green, // Green
			"gitDecoration.modifiedResourceForeground": col.tok?.teal, // Teal
			"gitDecoration.deletedResourceForeground": col.tok?.orange, // Orange
			"gitDecoration.renamedResourceForeground": col.tok?.azure, // Azure
			"gitDecoration.stageModifiedResourceForeground": col.tok?.purple, // Purple
			"gitDecoration.stageDeletedResourceForeground": col.tok?.golden, // Golden
			"gitDecoration.untrackedResourceForeground": col.tok?.beige, // Beige
			"gitDecoration.ignoredResourceForeground": col.txt?.m3, // Gray
			"gitDecoration.conflictingResourceForeground": col.tok?.magenta, // Magenta
			"gitDecoration.submoduleResourceForeground": col.tok?.steel, // Can't seem to find usage, let's say steel
			//             Error                                  // Red
			//             Warning                                 // Yellow
			// :: == == ==
			// || Settings Editor colors
			// :: ==
			"settings.headerForeground": col.tok?.azure,
			"settings.modifiedItemIndicator": col.tok?.teal,
			"settings.dropdownBackground": t(col.bg?.r4, "88"),
			"settings.dropdownForeground": t(col.txt?.c, opa.fg?.m1),
			"settings.dropdownBorder": t(col.txt?.c, opa.fg?.s3),
			"settings.dropdownListBorder": t(col.txt?.c, opa.fg?.s3),
			"settings.checkboxBackground": t(col.bg?.r4, "88"),
			"settings.checkboxForeground": col.tok?.azure,
			"settings.checkboxBorder": t(col.txt?.c, opa.fg?.s3),
			"settings.rowHoverBackground": t(col.dec?.dr?.azure, opa.bg?.m8),
			"settings.textInputBackground": t(col.bg?.r4, "88"),
			"settings.textInputForeground": t(col.txt?.c, opa.fg?.m1),
			"settings.textInputBorder": t(col.txt?.c, opa.fg?.s3),
			"settings.numberInputBackground": t(col.bg?.r4, "88"),
			"settings.numberInputForeground": t(col.txt?.c, opa.fg?.m1),
			"settings.numberInputBorder": t(col.txt?.c, opa.fg?.s2),
			"settings.focusedRowBackground": t(col.tok?.azure, opa.bg?.m4),
			// "settings.focusedRowBorder": "",
			"settings.headerBorder": col.brd?.s,
			"settings.sashBorder": t(col.txt?.c, "66"),
			"settings.settingsHeaderHoverForeground": t(col.txt?.c, "dd"),
			// :: == == ==
			// || Breadcrumbs colors
			// :: ==
			"breadcrumb.foreground": t(col.txt?.c, opa.fg?.s2),
			"breadcrumb.background": col.bg?.r2,
			"breadcrumb.focusForeground": t(col.txt?.c, opa.fg?.m1),
			"breadcrumb.activeSelectionForeground": col.tok?.azure,
			"breadcrumbPicker.background": col.bg?.r1,
			// :: == == ==
			// || Snippets colors
			// :: ==
			"editor.snippetTabstopHighlightBackground": t(col.txt?.m2, "33"),
			"editor.snippetTabstopHighlightBorder": t(col.txt?.m2, "33"),
			"editor.snippetFinalTabstopHighlightBackground": t(col.tok?.azure, "33"),
			"editor.snippetFinalTabstopHighlightBorder": t(col.tok?.azure, "33"),
			// :: == == ==
			// || Symbol Icons colors
			// :: ==
			"symbolIcon.arrayForeground": col.tok?.yellow,
			"symbolIcon.booleanForeground": col.tok?.yellow,
			"symbolIcon.classForeground": col.tok?.azure,
			"symbolIcon.colorForeground": col.tok?.magenta,
			"symbolIcon.constantForeground": col.tok?.steel,
			"symbolIcon.constructorForeground": col.tok?.azure,
			"symbolIcon.enumeratorForeground": col.tok?.azure,
			"symbolIcon.enumeratorMemberForeground": col.tok?.steel,
			"symbolIcon.eventForeground": col.tok?.golden,
			"symbolIcon.fieldForeground": col.tok?.purple,
			"symbolIcon.fileForeground": col.tok?.lilac,
			"symbolIcon.folderForeground": col.tok?.lilac,
			"symbolIcon.functionForeground": col.tok?.orange,
			"symbolIcon.interfaceForeground": col.tok?.azure,
			"symbolIcon.keyForeground": col.tok?.lavender,
			"symbolIcon.keywordForeground": col.tok?.yellow,
			"symbolIcon.methodForeground": col.tok?.orange,
			"symbolIcon.moduleForeground": col.txt?.m3,
			"symbolIcon.namespaceForeground": col.txt?.m3,
			"symbolIcon.nullForeground": col.tok?.yellow,
			"symbolIcon.numberForeground": col.tok?.green,
			"symbolIcon.objectForeground": col.tok?.steel,
			"symbolIcon.operatorForeground": col.txt?.m3,
			"symbolIcon.packageForeground": col.txt?.m3,
			"symbolIcon.propertyForeground": col.tok?.purple,
			"symbolIcon.referenceForeground": col.tok?.golden,
			"symbolIcon.snippetForeground": col.tok?.beige,
			"symbolIcon.stringForeground": col.tok?.teal,
			"symbolIcon.structForeground": col.tok?.azure,
			"symbolIcon.textForeground": col.tok?.teal,
			"symbolIcon.typeParameterForeground": col.tok?.denim,
			"symbolIcon.unitForeground": col.tok?.denim,
			"symbolIcon.variableForeground": col.txt?.m1,
			// :: == == ==
			// || Debug Icons colors
			// :: ==
			"debugIcon.breakpointForeground": col.tok?.magenta,
			"debugIcon.breakpointDisabledForeground": col.txt?.m3,
			"debugIcon.breakpointUnverifiedForeground": col.tok?.lavender,
			"debugIcon.breakpointCurrentStackframeForeground": col.tok?.yellow,
			"debugIcon.breakpointStackframeForeground": col.tok?.purple,
			"debugIcon.startForeground": col.tok?.green,
			"debugIcon.pauseForeground": col.tok?.yellow,
			"debugIcon.stopForeground": col.tok?.red,
			"debugIcon.disconnectForeground": col.tok?.orange,
			"debugIcon.restartForeground": col.tok?.green,
			"debugIcon.stepOverForeground": col.tok?.lilac,
			"debugIcon.stepIntoForeground": col.tok?.azure,
			"debugIcon.stepOutForeground": col.tok?.azure,
			"debugIcon.continueForeground": col.tok?.teal,
			"debugIcon.stepBackForeground": col.tok?.lilac,
			"debugConsole.infoForeground": col.tok?.azure,
			"debugConsole.warningForeground": col.tok?.yellow,
			"debugConsole.errorForeground": col.tok?.red,
			"debugConsole.sourceForeground": col.tok?.beige,
			"debugConsoleInputIcon.foreground": col.tok?.lavender,
			// :: == == ==
			// || Notebook colors
			// :: ==
			"notebook.editorBackground": col.bg?.m,
			"notebook.cellBorderColor": col.brd?.w,
			"notebook.cellHoverBackground": none,
			"notebook.cellInsertionIndicator": t(col.tok?.azure, opa.bg?.m8),
			"notebook.cellStatusBarItemHoverBackground": t(col.dec?.dr?.azure, opa.bg?.m8),
			"notebook.cellToolbarSeparator": col.brd?.s,
			"notebook.cellEditorBackground": col.bg?.l1,
			"notebook.focusedCellBackground": none,
			"notebook.focusedCellBorder": col.dec?.dr?.azure,
			"notebook.focusedEditorBorder": col.tok?.azure,
			"notebook.inactiveFocusedCellBorder": col.txt?.m3,
			"notebook.inactiveSelectedCellBorder": col.txt?.m3,
			"notebook.outputContainerBackgroundColor": col.bg?.r2,
			"notebook.outputContainerBorderColor": col.brd?.w,
			"notebook.selectedCellBackground": t(col.tok?.azure, opa.bg?.m8),
			"notebook.selectedCellBorder": col.tok?.azure,
			"notebook.symbolHighlightBackground": col.tok?.purple,
			"notebookScrollbarSlider.activeBackground": t(col.txt?.m1, "99"),
			"notebookScrollbarSlider.background": t(col?.tok?.white, "33"),
			"notebookScrollbarSlider.hoverBackground": t(col.misc?.scr, "66"),
			"notebookStatusErrorIcon.foreground": col.tok?.red,
			"notebookStatusRunningIcon.foreground": col.txt?.m2,
			"notebookStatusSuccessIcon.foreground": col.tok?.green,
			"notebookEditorOverviewRuler.runningCellForeground": col.dec?.lg?.azure,
			// :: == == ==
			// || Chart colors
			// :: ==
			"charts.foreground": t(col.txt?.c, opa.fg?.m1),
			"charts.lines": t(col.txt?.c, opa.fg?.s3),
			"charts.red": col.tok?.red,
			"charts.blue": col.tok?.azure,
			"charts.yellow": col.tok?.yellow,
			"charts.orange": col.tok?.orange,
			"charts.green": col.tok?.green,
			"charts.purple": col.tok?.purple,
			// :: == == ==
			// || Ports Colors
			// :: ==
			"ports.iconRunningProcessForeground": debug(6),
			"issues.closed": col.tok?.purple,
			"issues.newIssueDecoration": col.tok?.azure,
			"issues.open": col.tok?.green,
			//
			"markdown.extension.editor.codeSpan.background": t(col.tok?.beige, "22"),
			"markdown.extension.editor.codeSpan.border": col.tok?.beige,
			// "markdown.extension.editor.formattingMark.foreground": "", // ?
			// "markdown.extension.editor.trailingSpace.background": "", // ?
			//
			"pullRequests.closed": col.tok?.red,
			"pullRequests.draft": col.txt?.m2,
			"pullRequests.merged": col.tok?.purple,
			"pullRequests.notification": col.tok?.azure,
			"pullRequests.open": col.tok?.green,
		},
		"tokenColors": [
			{
				"scope": [
					// Basic variables (fix in template)
					"meta.template.expression variable.other.readwrite",
					// Any variables in JSDoc (no semantic tokens as of now)
					"variable.other.jsdoc",
					// PHP variables
					"variable.other.php",
				],
				"settings": {
					"foreground": col.txt?.m1
				}
			},
			{
				"scope": [
					// Variables in T-SQL
					"source.sql text.variable"
				],
				"settings": {
					"foreground": col.txt?.m1,
					"fontStyle": "italic"
				}
			},
			{
				"scope": [
					// Named literals in PL/SQL
					"string.quoted.double.oracle_sql"
				],
				"settings": {
					"foreground": col.txt?.m1,
					"fontStyle": "underline"
				}
			},
			{
				"scope": [
					// Constants
					"support.constant.core.php",
					"constant.other.php",
					"constant.other.class.php",
				],
				"settings": {
					"foreground": col.txt?.m1,
					"fontStyle": "bold"
				}
			},
			{
				"scope": [
					// Basic operators
					"keyword.operator",
					"entity.name.operator",
					"punctuation.separator",
					"punctuation.section",
					"punctuation.definition",
					"punctuation.accessor",
					"punctuation.destructuring",
					"meta.brace",
					"punctuation.bracket",
					"storage.type.function.arrow",
					// - XML
					"constant.character.entity.xml",
					// - C#
					"punctuation.curlybrace",
					"punctuation.parenthesis",
					"punctuation.squarebracket",
					// Namespace identifiers
					"entity.name.namespace",
					"storage.modifier.import",
					"storage.modifier.package",
					"entity.name.tag.namespace",
					"entity.other.attribute-name.namespace",
					"entity.name.scope-resolution",
					"entity.name.scope-resolution.namespace.using",
					"support.other.namespace.php",
					"entity.name.type.namespace.php",
					// "constant.other.database-name.sql", // Database as namespace
					// Markdown `< >` used as link delimiters
					"meta.link.email.lt-gt.markdown",
					// go
					"punctuation.other.colon.go",
					"punctuation.other.period.go",
					"punctuation.other.comma.go",
				],
				"settings": {
					"foreground": col.txt?.m2,
					"fontStyle": ""
				}
			},
			{
				"scope": [
					// Python dunder methods
					"support.function.magic.python",
				],
				"settings": {
					"foreground": col.txt?.m2,
					"fontStyle": "italic"
				}
			},
			{
				"scope": [
					// Comments
					"comment",
					"punctuation.definition.comment",
					// Regex non-capturing group
					"punctuation.definition.group.no-capture.regexp"
				],
				"settings": {
					"foreground": col.txt?.m3
				}
			},
			{
				"scope": [
					// Markdown code block language name
					"fenced_code.block.language.markdown"
				],
				"settings": {
					"foreground": col.txt?.m3,
					"fontStyle": "bold"
				}
			},
			{
				"scope": [
					// In-code documentation
					"comment.block.documentation",
					"comment.block.documentation punctuation.definition.comment",
					"string.quoted.docstring",
					"string.quoted.docstring punctuation.definition.string",
					"comment.block.javadoc",
					"comment.block.javadoc punctuation.definition.comment",
				],
				"settings": {
					"foreground": col.tok?.beige
				}
			},
			{
				"scope": [
					// Markdown code block delimiters
					"markup.fenced_code.block.markdown punctuation.definition.markdown",
					"punctuation.definition.raw.markdown",
					// Markdown footnote text
					"meta.link.reference.def.markdown markup.underline.link.markdown"
				],
				"settings": {
					"foreground": col.tok?.beige,
					"fontStyle": ""
				}
			},
			{
				"scope": [
					// Git commit message over 50 characters
					"invalid.deprecated.line-too-long.git-commit"
				],
				"settings": {
					"foreground": col.tok?.yellow
				}
			},
			{
				"scope": [
					// Basic keywords
					"keyword",
					// Some operators for readability
					// - Line terminators (with Python blocks)
					"punctuation.terminator",
					"punctuation.section.function.begin.python",
					"punctuation.separator.colon.python",
					// - Ternary operators
					"keyword.operator.ternary",
					"keyword.operator.conditional.question-mark.cs",
					"keyword.operator.conditional.colon.cs",
					// - XML amp-constants
					"punctuation.definition.constant.xml",
					// Word-like operators (arguably, still keywords)
					"keyword.operator.new",
					"keyword.operator.delete",
					"keyword.operator.expression.typeof",
					"keyword.operator.expression.instanceof",
					"keyword.operator.expression.in",
					"keyword.operator.expression.of",
					"keyword.operator.noexcept",
					"keyword.operator.expression.keyof",
					// Build-in and primitive types (and constants like `null`)
					"constant.language",
					"support.type.primitive",
					"support.type.builtin",
					"variable.language.this",
					"variable.language.super",
					"storage",
					// CSS pseudo-elements and media primitives
					"entity.other.attribute-name.pseudo-element",
					"entity.other.attribute-name.pseudo-element punctuation.definition.entity", // `::` prefix
					"support.constant.media",
					// Colon after access keywords in c++
					"punctuation.separator.colon.access.control",
					// "meta.record.java"
					// Regex set operators
					"keyword.operator.or.regexp",
					"keyword.operator.negation.regexp",
					// Python logical operators (they are keywords per language specs
					"keyword.operator.logical.python",
					"keyword.operator.logical.python"
				],
				"settings": {
					"foreground": col.tok?.yellow,
					"fontStyle": "bold"
				}
			},
			{
				"scope": [
					// Keyframe stops in CSS (sort of build in, sort of editable)
					"entity.other.keyframe-offset",
					// Blade keywords
					"keyword.blade",
				],
				"settings": {
					"foreground": col.tok?.yellow,
					"fontStyle": "italic bold"
				}
			},
			{
				"scope": [
					// Basic functions
					"entity.name.function",
					"support.function",
					// Regex groups
					"punctuation.definition.group.regexp",
					// Git commit message changed lines
					"markup.changed.git-commit"
				],
				"settings": {
					"foreground": col.tok?.orange
				}
			},
			{
				"scope": [
					// Blade functions
					"entity.name.function.blade"
				],
				"settings": {
					"foreground": col.tok?.orange,
					"fontStyle": "italic bold"
				}
			},
			{
				"scope": [
					// XML-like language tag angle brackets
					"punctuation.definition.tag",
					// Regex line anchors
					"keyword.control.anchor.regexp"
				],
				"settings": {
					"foreground": col.tok?.golden
				}
			},
			{
				"scope": [
					// Python `self` / `cls` parameter
					"variable.parameter.function.language.special.self.python",
					"variable.parameter.function.language.special.cls.python"
				],
				"settings": {
					"foreground": col.tok?.golden,
					"fontStyle": "bold"
				}
			},
			{
				"scope": [
					// XML-like language tag name
					"entity.name.tag",
					// Zig @-buildIns
					"support.function.builtin.zig",
					// go build-ins
					"support.function.builtin.go",
					// Python build-ins
					"support.function.builtin.python",
				],
				"settings": {
					"foreground": col.tok?.golden,
					"fontStyle": "italic bold"
				}
			},
			{
				"scope": [
					// Git commit message changed lines
					"markup.changed.git-commit"
				],
				"settings": {
					"foreground": col.tok?.teal
				}
			},
			{
				"scope": [
					// Strings
					"string",
					"punctuation.definition.string", // any string delimiters
					// CSS character values in properties (without delimiters)
					"meta.property-value.css",
					// JSX/TSX embedded expression section
					"punctuation.section.embedded"
				],
				"settings": {
					"foreground": col.tok?.teal,
					"fontStyle": "bold"
				}
			},
			{
				"scope": [
					// Git commit message inserted lines
					"markup.inserted.git-commit"
				],
				"settings": {
					"foreground": col.tok?.green
				}
			},
			{
				"scope": [
					// Number literals
					"constant.numeric",
					"keyword.other.unit.exponent", // `e` in number literals
					"constant.numeric storage", // `0x` Python
					"keyword.other.unit.hexadecimal.cpp", // `0x` C++
					"keyword.other.unit.octal.cpp", // `0` C++
					"keyword.other.unit.binary.cpp", // `0b` C++
					// Regex quantity specifiers
					"keyword.operator.quantifier.regexp"
				],
				"settings": {
					"foreground": col.tok?.green,
					"fontStyle": "bold"
				}
			},
			{
				"scope": [
					// CSS variables
					"variable.css",
					"variable.argument.css",
					// Character escape sequences
					"constant.character.escape"
				],
				"settings": {
					"foreground": col.tok?.steel,
					"fontStyle": "bold"
				}
			},
			{
				"scope": [
					// Enum members
					"meta.enum variable",
					"constant.other.enum.java",
					"constant.enum.php",
				],
				"settings": {
					"foreground": col.tok?.steel,
					"fontStyle": "bold underline"
				}
			},
			{
				"scope": [
					// CSS classes in html props
					"meta.attribute.class string",
					// CSS classes
					"entity.other.attribute-name.class",
					"entity.other.attribute-name.class punctuation.definition.entity", //  `.` prefix
					// Formatting utilities
					"storage.type.format.python",
					"constant.other.placeholder"
				],
				"settings": {
					"foreground": col.tok?.azure,
					"fontStyle": "italic"
				}
			},
			{
				"scope": [
					// All custom types
					"entity.name.type",
					// "constant.other.table-name.sql", // Table as class model
					// Fixes highlighting of non-primitive types in Java (`storage*` is used primitive)
					"storage.type.java",
					// Type tags in YAML
					"storage.type.tag-handle.yaml",
					// Sections in INI
					"punctuation.definition.entity.ini",
					"entity.name.section.group-title.ini",
					// CSS pseudo-classes
					"entity.other.attribute-name.pseudo-class",
					"entity.other.attribute-name.pseudo-class punctuation.definition.entity.css", // `:` prefix
					// Usage of custom components
					"entity.name.tag support.class.component",
					// Regex character classes
					"constant.other.character-class.regexp",
					"punctuation.definition.character-class.regexp",
					// PHP Classes
					"support.class.php",
					"entity.other.inherited-class.php",
					"meta.use.php entity.other.alias.php",
					"meta.other.type.phpdoc.php",
					"support.class.builtin.php",
					// Blade components
					"text.html.php.blade meta.tag.custom entity.name.tag.html",
					"text.html.php.blade invalid.illegal.unrecognized-tag",
				],
				"settings": {
					"foreground": col.tok?.azure
				}
			},
			{
				"scope": [
					// Traits
					"entity.name.type.trait.php",
					// Interfaces
					"entity.name.type.interface.php",
				],
				"settings": {
					"foreground": col.tok?.azure,
					"fontStyle": "italic"
				}
			},
			{
				"scope": [
					// Markdown headings
					"markup.heading.markdown",
					"punctuation.definition.heading.markdown",
					"markup.heading.setext.1.markdown",
					"markup.heading.setext.2.markdown"
				],
				"settings": {
					"foreground": col.tok?.azure,
					"fontStyle": "bold"
				}
			},
			{
				"scope": [
					// Pure data-representation objects
					"entity.name.type.record",
					"entity.name.type.struct"
				],
				"settings": {
					"foreground": col.tok?.azure,
					"fontStyle": "italic bold"
				}
			},
			{
				"scope": [
					// Enums
					"entity.name.type.enum.java",
					"entity.name.type.enum.php",
				],
				"settings": {
					"foreground": col.tok?.azure,
					"fontStyle": "bold underline"
				}
			},
			{
				"scope": [
					/*
					// Basic type chaining operators, type-specifier colons
					"keyword.operator.type",
					// Lambda-function arrow (and what-not) operators
					"storage.type.function.arrow",
					"punctuation.section.function.lambda.begin.python",
					"punctuation.definition.capture",
					"punctuation.section.block.begin.bracket.curly.lambda",
					"punctuation.section.block.end.bracket.curly.lambda",
					"keyword.operator.arrow.cs",
					// Destructuring assignment braces/brackets and commas
					"punctuation.definition.binding-pattern",
					"meta.array-binding-pattern-variable punctuation.separator",
					"meta.object-binding-pattern-variable punctuation.separator",
					"meta.parameter.object-binding-pattern punctuation.separator",
					// Braces and commas in type declarations
					"meta.type.declaration punctuation.definition.block",
					"meta.type.declaration punctuation.separator.comma",
					// Angle brackets used in context of generics
					"punctuation.definition.typeparameters",
					"punctuation.bracket.angle.java",
					"punctuation.section.angle-brackets",
					*/
					// Generic types
					"storage.type.generic.java",
					"entity.name.type.template",
					// Prefixes and suffixes, used as units or encoding/conversion
					"keyword.other.unit",
					"constant.other.color punctuation.definition.constant", // `#` in hex colors
					// - String modifiers
					"storage.type.string.python",
					/*
					// Structure in serialization languages
					// - JSON
					"punctuation.separator.dictionary.pair.json",
					"punctuation.separator.array.json",
					"meta.structure.dictionary.json punctuation.definition",
					// - YAML
					"punctuation.separator.mapping",
					"punctuation.separator.sequence",
					"punctuation.definition.block.sequence.item",
					"meta.flow-sequence punctuation.definition",
					"meta.flow-mapping punctuation.definition",
					*/
					/* "punctuation.separator.key-value", */
					// Destructing/vararg operators
					"keyword.operator.spread",
					"keyword.operator.rest",
					"punctuation.definition.parameters.varargs",
					"punctuation.vararg-ellipses",
					"keyword.operator.unpacking",
					"keyword.operator.variadic.php",
					/*
					// Object / array / dictionary literals brackets/braces and commas
					// - JSON/JS/TS
					"meta.array.literal meta.brace",
					"meta.objectliteral punctuation.separator",
					"meta.array.literal punctuation.separator",
					"meta.objectliteral punctuation.definition.block",
					"meta.objectliteral punctuation.separator.comma.ts",
					// - Python
					"punctuation.definition.list",
					"punctuation.definition.dict",
					"punctuation.separator.element",
					"punctuation.parenthesis.begin.python",
					"punctuation.parenthesis.end.python",
					*/
				],
				"settings": {
					"foreground": col.tok?.denim
				}
			},
			{
				"scope": [
					// Fields inside types
					"variable.object.property",
					"variable.other.object.property",
					"variable.other.property",
					"variable.other.constant.property",
					// YAML tag fields
					"entity.name.tag.yaml",
					// CSS properties
					"support.type.property-name",
					// TS & JS object literal keys
					"meta.object-literal.key",
					"meta.object-literal.key string.quoted.double",
					// INI fields
					"keyword.other.definition.ini",
					// Regex back-references and names
					"keyword.other.back-reference.regexp",
					"punctuation.definition.group.regexp variable.other.regexp",
					// Makefile variables
					"variable.other.makefile",
					// Markdown list elements
					"punctuation.definition.list.begin.markdown",
				],
				"settings": {
					"foreground": col.tok?.purple,
					"fontStyle": "" // Fixes YAML tags
				}
			},
			{
				"scope": [
					// CSS vendor-specific properties
					"support.type.vendored.property-name"
				],
				"settings": {
					"foreground": col.tok?.purple,
					"fontStyle": "italic"
				}
			},
			{
				"scope": [
					// PHP variable dollar
					"punctuation.definition.variable.php",
				],
				"settings": {
					"foreground": col.tok?.purple,
					"fontStyle": "bold"
				}
			},
			{
				"scope": [
					// C & C++ preprocessor directives
					"meta.preprocessor",
					"punctuation.definition.directive", // `#` prefix
					"keyword.control.directive",
				],
				"settings": {
					"foreground": col.tok?.magenta,
					"fontStyle": "bold italic"
				}
			},
			{
				"scope": [
					// CSS `@` directives
					"keyword.control.at-rule",
					"keyword.control.at-rule punctuation.definition", // `@` prefix
					// Tags inside in-code documentation
					"storage.type.class.jsdoc",
					"storage.type.class.doxygen",
					"punctuation.definition.block.tag",
					"keyword.other.documentation.javadoc",
					"keyword.other.phpdoc.php",
					// Decorator-type metadata
					"meta.decorator",
					"entity.name.function.decorator",
					"entity.name.function.decorator punctuation.definition.decorator",
					// Annotation-type metadata
					"storage.type.annotation",
					"punctuation.definition.annotation",
					"support.other.attribute.cpp",
					"support.other.attribute.cpp punctuation.section",
					"meta.attribute.php",
					// Document break in YAML
					"entity.other.document",
					// YAML directives
					"support.other.directive",
					"punctuation.definition.directive", // `%` prefix
					// XML directives (?xml)
					"meta.tag.preprocessor entity.name.tag",
					"meta.tag.preprocessor.xml punctuation.definition.tag.xml",
					// Regex look-ahead
					"meta.assertion.look-ahead.regexp",
					// Markdown image alt text
					"string.other.link.description.markdown",
					// Markdown separators
					"meta.separator.markdown",
					// Python Sphinx doc tags
					"docstring.variable.identifier.sphinx.python",
					"docstring.variable.begin.sphinx.python",
					"docstring.variable.end.sphinx.python",
					// Python dunder attributes (most pregenerated, most used as gate for reflection)
					"support.variable.magic.python"
				],
				"settings": {
					"foreground": col.tok?.magenta
				}
			},
			{
				"scope": [
					// Regex negative look-ahead
					"meta.assertion.negative-look-ahead.regexp"
				],
				"settings": {
					"foreground": col.tok?.magenta,
					"fontStyle": "underline"
				}
			},
			{
				"scope": [
					// C & C++ macros
					"entity.name.function.preprocessor",
					// PHP entry tag
					"punctuation.section.embedded.begin.php",
					"punctuation.section.embedded.end.php",
					// Blade php block
					"keyword.begin.blade",
					"keyword.end.blade",
				],
				"settings": {
					"foreground": col.tok?.magenta,
					"fontStyle": "bold"
				}
			},
			{
				"scope": [
					// Parameters
					"variable.parameter",
					"entity.name.variable.parameter.php",
					"meta.function.parameter.typehinted.php variable.other.php",
					"meta.function.parameter.default.php variable.other.php",
					"meta.function.parameter.no-default.php variable.other.php",
				],
				"settings": {
					"foreground": col.tok?.lavender,
					"fontStyle": "bold"
				}
			},
			{
				"scope": [
					// XML-like language tag attributes
					"entity.other.attribute-name",
					// YAML anchor variables
					// - definition
					"entity.name.type.anchor.yaml",
					"punctuation.definition.anchor.yaml", // `&` prefix
					// - usage
					"variable.other.alias.yaml",
					"punctuation.definition.alias.yaml",
					// Markdown quotes
					"markup.quote.markdown",
					"punctuation.definition.quote.begin.markdown"
				],
				"settings": {
					"foreground": col.tok?.lavender,
					"fontStyle": ""
				}
			},
			{
				"scope": [
					// Angular attribute binding
					"punctuation.definition.ng-binding-name",
				],
				"settings": {
					"foreground": col.tok?.lavender,
					"fontStyle": "italic bold"
				}
			},
			{
				"scope": [
					// Angular binding attributes
					"entity.other.ng-binding-name"
				],
				"settings": {
					"foreground": col.tok?.lavender,
					"fontStyle": "italic"
				}
			},
			{
				"scope": [
					// Labels
					"entity.name.label",
					"punctuation.separator.label", // label suffix, usually `:`
					// Template string embedded expression delimiters
					"punctuation.definition.template-expression",
					"constant.character.format.placeholder",
					"punctuation.definition.interpolation",
					// Blade expressions
					"support.function.construct.begin.blade",
					"support.function.construct.end.blade",
					// Java generic wildcard
					"storage.type.generic.wildcard.java",
					// Regex look-behind
					"meta.assertion.look-behind.regexp",
					// Markdown link labels
					"string.other.link.title.markdown"
				],
				"settings": {
					"foreground": col.tok?.lilac,
					"fontStyle": ""
				}
			},
			{
				"scope": [
					// Regex negative look-behind
					"meta.assertion.negative-look-behind.regexp",
					// Markdown footnote number
					"meta.link.reference.markdown string.other.link.title.markdown",
					"constant.other.reference.link.markdown"
				],
				"settings": {
					"foreground": col.tok?.lilac,
					"fontStyle": "underline"
				}
			},
			{
				"scope": [
					// CSS id's in html props
					"meta.attribute.id string",
					// CSS id's
					"entity.other.attribute-name.id",
					"entity.other.attribute-name.id punctuation.definition", // `#` prefix
				],
				"settings": {
					"foreground": col.tok?.lilac,
					"fontStyle": "italic"
				}
			},
			{
				"scope": [
					// Errors
					"invalid.illegal",
					// Git commit message over 72 chars
					"invalid.illegal.line-too-long.git-commit"
				],
				"settings": {
					"foreground": col.tok?.red
				}
			},
			{
				"scope": [
					// Python constant fields
					"constant.other.caps.python",
					// Markdown bold text
					"markup.bold.markdown",
				],
				"settings": {
					"fontStyle": "bold"
				}
			},
			{
				"scope": [
					// Markdown italic text
					"markup.italic.markdown"
				],
				"settings": {
					"fontStyle": "italic"
				}
			},
			{
				"scope": [
					// Markdown italic & bold text
					"markup.italic.markdown markup.bold.markdown"
				],
				"settings": {
					"fontStyle": "italic bold"
				}
			},
			{
				"scope": [
					// Markdown urls
					"markup.underline.link.image.markdown",
					"markup.underline.link.markdown"
				],
				"settings": {
					"foreground": col.dec?.lg?.azure,
					"fontStyle": "underline"
				}
			},
			// :: == == ==
			// || Rainbow CSV
			// :: ==
			{
				"scope": [
					"rainbow1"
				],
				"settings": {
					"foreground": col.tok?.purple,
					"fontStyle": "bold"
				}
			},
			{
				"scope": [
					"keyword.rainbow2"
				],
				"settings": {
					"foreground": col.tok?.azure,
					"fontStyle": "italic bold"
				}
			},
			{
				"scope": [
					"entity.name.function.rainbow3"
				],
				"settings": {
					"foreground": col.tok?.green,
					"fontStyle": "bold"
				}
			},
			{
				"scope": [
					"comment.rainbow4"
				],
				"settings": {
					"foreground": col.tok?.yellow,
					"fontStyle": "italic bold"
				}
			},
			{
				"scope": [
					"string.rainbow5"
				],
				"settings": {
					"foreground": col.tok?.orange,
					"fontStyle": "bold"
				}
			},
			{
				"scope": [
					"variable.parameter.rainbow6"
				],
				"settings": {
					"foreground": col.tok?.magenta,
					"fontStyle": "italic bold"
				}
			},
			{
				"scope": [
					"constant.numeric.rainbow7"
				],
				"settings": {
					"foreground": col.tok?.teal,
					"fontStyle": "bold"
				}
			},
			{
				"scope": [
					"entity.name.type.rainbow8"
				],
				"settings": {
					"foreground": col.txt?.m2,
					"fontStyle": "italic bold"
				}
			},
			{
				"scope": [
					"markup.bold.rainbow9"
				],
				"settings": {
					"foreground": col.tok?.lavender,
					"fontStyle": "bold"
				}
			},
			{
				"scope": [
					"invalid.rainbow10"
				],
				"settings": {
					"foreground": col.tok?.golden,
					"fontStyle": "italic bold"
				}
			},
		],
		"semanticTokenColors": {
			"local": {
				"foreground": col.txt?.m1,
				"fontStyle": ""
			},
			"variable": {
				// "foreground": col.txt?.m1,
				"fontStyle": ""
			},
			"variable.static": {
				// "foreground": col.txt?.m1,
				"fontStyle": "underline"
			},
			"variable.readonly": {
				// "foreground": col.txt?.m1,
				"fontStyle": "bold"
			},
			"variable.static.readonly": {
				// "foreground": col.txt?.m1,
				"fontStyle": "bold underline"
			},
			"operator": {
				"foreground": col.txt?.m2,
				"fontStyle": ""
			},
			"operatorOverloaded": col.txt?.m2,
			"magicFunction": {
				"foreground": col.txt?.m2,
				"fontStyle": "italic"
			},
			"namespace": col.txt?.m2,
			"comment": col.txt?.m3,
			"xmlDocCommentDelimiter": col.tok?.beige,
			"xmlDocCommentText": col.tok?.beige,
			"keyword": {
				"foreground": col.tok?.yellow,
				"fontStyle": "bold"
			},
			"builtinConstant": {
				"foreground": col.tok?.yellow,
				"fontStyle": "bold"
			},
			"variable.readonly.builtin:python": {
				"foreground": col.tok?.yellow,
				"fontStyle": "bold"
			},
			"newOperator": {
				"foreground": col.tok?.yellow,
				"fontStyle": "bold"
			},
			"type.defaultLibrary:go": {
				"foreground": col.tok?.yellow,
				"fontStyle": "bold"
			},
			"variable.defaultLibrary:go": {
				"foreground": col.tok?.yellow,
				"fontStyle": "bold"
			},
			"function": {
				"foreground": col.tok?.orange,
				"fontStyle": "italic",
			},
			"method": {
				"foreground": col.tok?.orange,
				"fontStyle": "",
			},
			"method.readonly": {
				"foreground": col.tok?.orange,
				"fontStyle": "bold"
			},
			"method.static": {
				"foreground": col.tok?.orange,
				"fontStyle": "underline"
			},
			"method.static.readonly": {
				"foreground": col.tok?.orange,
				"fontStyle": "bold underline"
			},
			"extensionMethod": {
				"foreground": col.tok?.orange,
				"fontStyle": "italic underline"
			},
			"delegate": {
				"foreground": col.tok?.golden,
				"fontStyle": "italic"
			},
			"event": col.tok?.golden,
			"xmlDocCommentName": col.tok?.golden,
			"function.defaultLibrary:go": {
				"foreground": col.tok?.golden,
				"fontStyle": "italic bold"
			},
			"function.builtin:python": {
				"foreground": col.tok?.golden,
				"fontStyle": "italic bold"
			},
			"selfParameter": {
				"foreground": col.tok?.golden,
				"fontStyle": "bold"
			},
			"clsParameter": {
				"foreground": col.tok?.golden,
				"fontStyle": "bold"
			},
			"string": {
				"foreground": col.tok?.teal,
				"fontStyle": "bold"
			},
			"number": {
				"foreground": col.tok?.green,
				"fontStyle": "bold"
			},
			"enumMember": {
				"foreground": col.tok?.steel,
				"fontStyle": "bold underline"
			},
			"variable.defaultLibrary": col.tok?.steel,
			"stringEscapeCharacter": {
				"foreground": col.tok?.steel,
				"fontStyle": "bold",
			},
			"interface": {
				"foreground": col.tok?.azure,
				"fontStyle": "italic"
			},
			"type": col.tok?.azure,
			"class.abstract": {
				"foreground": col.tok?.azure,
				"fontStyle": "italic"
			},
			"class": col.tok?.azure,
			"class.readonly": {
				"foreground": col.tok?.azure,
				"fontStyle": "bold"
			},
			"enum": {
				"foreground": col.tok?.azure,
				"fontStyle": "bold underline"
			},
			"recordClass": {
				"foreground": col.tok?.azure,
				"fontStyle": "italic bold"
			},
			"record": {
				"foreground": col.tok?.azure,
				"fontStyle": "italic bold"
			},
			"record.readonly": {
				"foreground": col.tok?.azure,
				"fontStyle": "italic bold"
			},
			"typeParameter": col.tok?.denim,
			"class.builtin:python": {
				"foreground": col.tok?.denim,
				"fontStyle": "bold"
			},
			"field": col.tok?.purple,
			"field.static": {
				"foreground": col.tok?.purple,
				"fontStyle": "underline"
			},
			"field.readonly": {
				"foreground": col.tok?.purple,
				"fontStyle": "bold"
			},
			"field.static.readonly": {
				"foreground": col.tok?.purple,
				"fontStyle": "bold underline"
			},
			"property": col.tok?.purple,
			"property.static": {
				"foreground": col.tok?.purple,
				"fontStyle": "underline"
			},
			"property.readonly": {
				"foreground": col.tok?.purple,
				"fontStyle": "bold"
			},
			"property.static.readonly": {
				"foreground": col.tok?.purple,
				"fontStyle": "bold underline"
			},
			"macro": col.tok?.magenta,
			"annotation": col.tok?.magenta,
			"decorator": col.tok?.magenta,
			"function.decorator": col.tok?.magenta,
			"class.decorator": col.tok?.magenta,
			"variable.builtin:python": col.tok?.magenta,
			"parameter": {
				"foreground": col.tok?.lavender,
				"fontStyle": "bold"
			},
			"xmlDocCommentAttributeName": col.tok?.lavender,
			"label": col.tok?.lilac,
			// SAS specific tokens
			"sec-keyword": {
				"foreground": col.tok?.golden,
				"fontStyle": "italic bold"
			},
			"macro-keyword": {
				"foreground": col.tok?.lilac,
				"fontStyle": ""
			},
			"macro-comment": {
				"fontStyle": "italic"
			},
			"macro-sec-keyword": {
				"foreground": col.tok?.magenta,
				"fontStyle": "italic bold"
			},
			"macro-ref": {
				"foreground": col.tok?.magenta,
				"fontStyle": "bold",
			},
			"cards-data": col.tok?.purple,
			"date": {
				"foreground": col.tok?.steel,
				"fontStyle": "bold"
			},
			"time": {
				"foreground": col.tok?.steel,
				"fontStyle": "bold"
			},
			"dt": {
				"foreground": col.tok?.steel,
				"fontStyle": "bold"
			},
			"bitmask": {
				"foreground": col.tok?.denim,
				"fontStyle": "italic bold"
			},
			"namelit": {
				"foreground": col.txt?.m1,
				"fontStyle": "underline"
			},
			"format": {
				"foreground": col.tok?.azure
			},
			"warning": col.dec?.dr?.yellow,
			"note": col.dec?.dr?.azure
		},
		"semanticHighlighting": true
	}
}
