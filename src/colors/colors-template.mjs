
/**
 * Template that provides color palette and configuration for generating theme JSON files.
 * @typedef  {object} ColorTemplate
 * @property {object} conf configuration of theme and file generating
 * @property   {string} conf.name name of theme (should match with package.json)
 * @property   {"dark"|"light"} conf.type type of theme (should match with package.json)
 * @property   {string} conf.filename name of generated file (should match with package.json)
 * @property   {string} [conf.include] path of theme included in this one (./ + conf.name)
 * @property {object} col color palette - all colors used in themes should come from this object
 * @property   {object} [col.txt] colors for text and not-emphasized iconography
 * @property     {string} [col.txt.c] core color for semi-transparent text
 * @property     {string} [col.txt.m1] used for main editor text
 * @property     {string} [col.txt.m2] used for editor punctuation, operators, namespaces, etc.
 * @property     {string} [col.txt.m3] used for editor comments
 * @property   {object} [col.bg] colors for normal surface backgrounds
 * @property     {string} [col.bg.hl] highlight color, used as semi-transparent
 * @property     {string} [col.bg.m] main surface color (editor bg, gutter, notebook backdrop)
 * @property     {string} [col.bg.r1] raised to +1 - terminal, with transparency - widgets, context menus etc.
 * @property     {string} [col.bg.r2] raised to +2 - panels, tabs and upper editor toolbars, notifications, inactive elements
 * @property     {string} [col.bg.r3] raised to +3 - raised / selected parts of panels
 * @property     {string} [col.bg.r4] raised to +4 - input elements
 * @property     {string} [col.bg.l1] lowered to -1 - window back (title and sidebars), notebook cells
 * @property     {string} [col.bg.l2] lowered to -2 - input elements
 * @property   {object} [col.brd] colors for normal borders
 * @property     {string} [col.brd.s] strong border color
 * @property     {string} [col.brd.w] weak border color
 * @property   {object} [col.tok] colors for editor tokens (grammar and semantic highlighting)
 * @property     {string} [col.tok.white] icons on colored backgrounds
 * @property     {string} [col.tok.black] shadows and placeholder for alpha values
 * @property     {string} [col.tok.grey] ansi black for terminal
 * @property     {string} [col.tok.silver] ansi dark grey for terminal
 * @property     {string} [col.tok.bone] ansi white for terminal
 * @property     {string} [col.tok.black] shadows and placeholder for alpha values
 * @property     {string} [col.tok.yellow] keywords / word semi-operators
 * @property     {string} [col.tok.golden] special functions / foreign syntax
 * @property     {string} [col.tok.orange] functions
 * @property     {string} [col.tok.red] errors
 * @property     {string} [col.tok.magenta] annotations / decorators / preprocessors / attributes
 * @property     {string} [col.tok.lilac] labels / wildcards / interpolation slots
 * @property     {string} [col.tok.lavender] parameters / arguments
 * @property     {string} [col.tok.purple] properties and fields
 * @property     {string} [col.tok.denim] generic types
 * @property     {string} [col.tok.azure] defined types
 * @property     {string} [col.tok.teal] strings of characters
 * @property     {string} [col.tok.steel] singletons / enum members / escape characters
 * @property     {string} [col.tok.green] number literals
 * @property     {string} [col.tok.beige] in-file documentations
 * @property   {object} [col.dec] colors derived from editor colors, used as decorations and emphasis
 * @property     {object} [col.dec.dr] colors made by darkening main colors
 * @property       {string} [col.dec.dr.yellow]
 * @property       {string} [col.dec.dr.orange]
 * @property       {string} [col.dec.dr.red]
 * @property       {string} [col.dec.dr.magenta]
 * @property       {string} [col.dec.dr.purple]
 * @property       {string} [col.dec.dr.azure]
 * @property       {string} [col.dec.dr.teal]
 * @property       {string} [col.dec.dr.green]
 * @property     {object} [col.dec.lg] colors made by lightening main colors
 * @property       {string} [col.dec.lg.azure]
 * @property       {string} [col.dec.lg.yellow]
 * @property       {string} [col.dec.lg.green]
 * @property   {object} [col.misc] miscellaneous colors with single use
 * @property     {string} [col.misc.sel] selection background
 * @property     {string} [col.misc.scr] scrollbar hovers
 * @property     {string} [col.misc.sbpbg] statusBar prominent background
 * @property   {object} [col.alt] alternative light colors for light backgrounds
 * @property     {string} [col.alt.yellow]
 * @property     {string} [col.alt.orange]
 * @property     {string} [col.alt.red]
 * @property     {string} [col.alt.purple]
 * @property     {string} [col.alt.azure]
 * @property     {string} [col.alt.green]
 * @property {object} opa opacity map - allows to specify different opacities for different themes, ie. when background allows semi-transparent colors to be more visible
 * @property   {object} [opa.fg] foreground opacities - used mainly when mixing core colors instead of using `col.txt`
 * @property     {string} [opa.fg.m1] main opacity for `col.txt.m1`
 * @property     {string} [opa.fg.s1] secondary opacity for `col.txt.m1`
 * @property     {string} [opa.fg.s2] secondary opacity for `col.txt.m2`
 * @property     {string} [opa.fg.s3] secondary opacity for `col.txt.m3`
 * @property   {object} [opa.bg] background opacities - often used for colorful backgrounds
 * @property     {string} [opa.bg.m10]
 * @property     {string} [opa.bg.m8]
 * @property     {string} [opa.bg.m6]
 * @property     {string} [opa.bg.m4]
 * @property   {object} [opa.edt] opacities for editor features
 * @property     {string} [opa.edt.brc] opacity for bracket coloring
 * @property     {string} [opa.edt.whl] opacity for word highlighting
 * @property     {string} [opa.edt.mln] opacity for active line number of main editor
 * @property     {string} [opa.edt.sln] opacity for active line number of other editor
 * @property     {string} [opa.edt.cur] opacity for cursor
 * @property     {string} [opa.edt.shl] opacity for selection highlighting
 * @property   {object} [opa.com] opacities for components (inputs and widgets)
 * @property     {string} [opa.com.xbg] opacity for extra background
 * @property     {string} [opa.com.xfg] opacity for extra foreground
 * @property     {string} [opa.com.xico] opacity for extra icon color
 * @property     {string} [opa.com.xrow] opacity for extra table rows
 * @property   {object} [opa.btn] opacities for buttons
 * @property     {string} [opa.btn.br] opacity for button border
 * @property     {string} [opa.btn.sbg] opacity for button secondary background
 * @property     {string} [opa.btn.xsbg] opacity for button extra secondary background
 */

/**
 * Joins color with alpha.
 * 
 * If alpha is omitted, then only color is used. If color is omitted, then nothing is returned.
 * 
 * Function does not check whether color/alpha are valid and proper length (with relation to each other)
 * 
 * @param {string} [color] RGB color portion
 * @param {string} [alpha] Alpha portion
 * 
 * @returns {string|undefined}
 */
export const t = (color, alpha) => color?.concat(alpha || "")

/**
 * 
 * @param {string} [color]
 * @param {string} [altColor]
 */
export const or = (color, altColor) => color || altColor

/**
 * Calculates RGB color from OKLCH color
 * @param {number} L Lightness component, range 0.0 .. 100.0
 * @param {number} C Chroma component, range 0.0 .. 0.37 (should theoretically be 0.4)
 * @param {number} H Hue component, range 0.0 .. 360.0
 */
export function oklch(L, C, H) {
	// Convert OKLCH to OKLAB
	const a = C * Math.cos(H * Math.PI / 180)
	const b = C * Math.sin(H * Math.PI / 180)

	// Convert OKLAB to linear sRGB
	let l = L + 0.3963377774 * a + 0.2158037573 * b
	let m = L - 0.1055613458 * a - 0.0638541728 * b
	let s = L - 0.0894841775 * a - 1.2914855480 * b

	l = l * l * l
	m = m * m * m
	s = s * s * s

	const R = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s
	const G = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s
	const B = -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s

	// Convert linear sRGB to sRGB
	const toSrgb = (v) => v <= 0.0031308
		? 12.92321 * v
		: 1.055 * Math.pow(v, 1 / 2.4) - 0.055

	let res =  {
		r: Math.round(toSrgb(R) * 255),
		g: Math.round(toSrgb(G) * 255),
		b: Math.round(toSrgb(B) * 255),
		hex: ""
	};

	if (res.r < 0 || res.r > 255 ||
		res.g < 0 || res.g > 255 ||
		res.b < 0 || res.b > 255
	) {
		console.warn(
`\x1b[33mWARNING: Cannot perform conversion of oklch(${L}, ${C}, ${H}).
Resulting color:
${JSON.stringify(res, null, "    ")}
is outside of RGB color space - clipping values into allowed range.
\x1b[0m`
		)
	}

	res.r = Math.min(Math.max(0, res.r), 255)
	res.g = Math.min(Math.max(0, res.g), 255)
	res.b = Math.min(Math.max(0, res.b), 255)

	res.hex = "#" +
		res.r.toString(16).padStart(2, "0") +
		res.g.toString(16).padStart(2, "0") +
		res.b.toString(16).padStart(2, "0")


	return res
}
