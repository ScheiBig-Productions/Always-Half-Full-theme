// @ ts-check
import * as colTem from './colors-template.mjs'
const oklch = colTem.oklch

import * as  evening from './evening.mjs'

/**
 * @type {colTem.ColorTemplate}
 */
export const template = {
	conf: {
		name: "Always Half-Full 🌃 midnight",
		type: "dark",
		filename: "Always Half-Full midnight.json",
		include: "./" + evening.template.conf.filename
	},
	col: {
		bg: {
			r4: oklch(0.2900, 0, 0).hex,
			r3: oklch(0.2475, 0, 0).hex,
			r2: oklch(0.2100, 0, 0).hex,
			r1: oklch(0.1900, 0, 0).hex,
			m:  oklch(0.1775, 0, 0).hex,
			l1: oklch(0.1400, 0, 0).hex,
			l2: oklch(0.0700, 0, 0).hex,
		},
	},
	opa: evening.template.opa
}
