import fs from "fs"

let debugs = [
	"mergeEditor.conflictingLines.background",
	"mergeEditor.changeBase.background",
	"mergeEditor.changeBase.word.background",
	"mergeEditor.conflict.input1.background",
	"mergeEditor.conflict.input2.background",
	"scm.providerBorder",
	"ports.iconRunningProcessForeground",
]

function compHex(P, N) {
	return (
		+`0x${P[ 1 ].old.substring(1)}` - +`0x${N[ 1 ].old.substring(1)}`
		|| +`0x${P[ 1 ].new.substring(1)}` - +`0x${N[ 1 ].new.substring(1)}`
	)
}

/**
 * @param {string} A 
 * @param {string} B 
 */
function testColorSimilarity(A, B) {
	let c = 0
	let s = 0
	for (let i = 1; i < Math.max(A.length, B.length); i += 2) {
		const a = A.substring(i, i + 2)
		const b = B.substring(i, i + 2)
		s += Math.abs(+`0x${a}` - +`0x${b}`)
		c++
	}

	return { sum: s, avg: s / c }
}

const theme_old = fs.readFileSync(`./themes.old/Always Half-Full ${process.argv.at(2)}.json`)
const theme_new = fs.readFileSync(`./themes/Always Half-Full ${process.argv.at(2)}.json`)

const theme_obj = {
	old: eval(`(${theme_old})`),
	new: eval(`(${theme_new})`),
}

const theme_keys = {
	old: new Set(Object.keys(theme_obj.old.colors)),
	new: new Set(Object.keys(theme_obj.new.colors)),
}

const theme_res = {
	found: {},
	missing: {},
}
for (const key of theme_keys.old.intersection(theme_keys.new)) {

	/** @type {Object.<string, string>} */
	const o_col = theme_obj.old.colors
	/** @type {Object.<string, string>} */
	const n_col = theme_obj.new.colors

	let cond = [
		o_col[ key ].startsWith("#000000") && n_col[ key ].startsWith("#111111"), // Wanted migration
		o_col[key].startsWith("#046dc7"), // Wanted migration
		o_col[key].startsWith("#0e8587"), // Pallette error 
		o_col[key].startsWith("#3e8640"), // Pallette error
		o_col[key].startsWith("#1b1b1b"), // Wanted migration
		o_col[ key ].startsWith("#5b96d7"), // Pallette error 
		o_col[ key ].startsWith("#4ec559"), // Pallette error
		o_col[ key ].startsWith("#6b795a"), // Pallette error
		o_col[ key ].startsWith("#6e9999"), // Pallette error
		o_col[ key ].startsWith("#7a82af"), // Pallette error
		o_col[ key ].startsWith("#9a60b3"), // Pallette error
		o_col[ key ].startsWith("#a58f14"), // Pallette error
		o_col[ key ].startsWith("#aa8791"), // Pallette error
		o_col[ key ].startsWith("#ad7904"), // Pallette error
		o_col[ key ].startsWith("#b450ab"), // Pallette error
		o_col[ key ].startsWith("#bf6e3f"), // Pallette error
		o_col[ key ].startsWith("#ce3f7a"), // Pallette error
		o_col[ key ].startsWith("#d20325"), // Pallette error
		o_col[ key ].startsWith("#f2da56"), // Pallette error
		o_col[ key ].startsWith("#457197"), // Pallette error
		o_col[ key ].startsWith("#aa15ec"), // Pallette error
		o_col[ key ].startsWith("#396fa5"), // Deliberate change
		key.startsWith("symbolIcon"), // Deliberate change
	]

	if (cond.reduce((a, b) => a || b)) {
		continue
	}


	theme_res.found[ key ] = {
		...testColorSimilarity(
			o_col[ key ],
			n_col[ key ],
		),
		old: o_col[ key ],
		new: n_col[ key ],
	}
}

const theme_found = Object.entries(theme_res.found)

if (process.argv.at(3)) {
	fs.writeFileSync(
		process.argv.at(3),
		JSON.stringify(
			theme_found.filter(el => el[ 1 ].sum > 9 || el[ 1 ].avg > 3)
				.filter(el => !debugs.includes(el[ 0 ]))
				.toSorted(compHex),
			null,
			"\t"
		),
	)
	console.log("Found", theme_found.filter(el => el[ 1 ].sum > 9 || el[ 1 ].avg > 3)
	.filter(el => !debugs.includes(el[ 0 ])).length, "problems")
} else {
	console.log(
		theme_found.filter(el => el[ 1 ].sum > 9 || el[ 1 ].avg > 3)
			.filter(el => !debugs.includes(el[ 0 ]))
			.toSorted(compHex)
	)
}

