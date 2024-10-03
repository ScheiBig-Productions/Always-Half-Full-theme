// @ ts-check
import * as colTem from './colors-template.mjs'
const oklch = colTem.oklch

import * as  evening from './evening.mjs'

/**
 * @type {colTem.ColorTemplate}
 */
export const template = {
	conf: {
		name: "Always Half-Full 🌌 starlight",
		type: "dark",
		filename: "Always Half-Full starlight.json",
		include: "./" + evening.template.conf.filename
	},
	col: {
		txt: {
			c:  oklch(0.800, 0, 0).hex,
			m1: oklch(0.660, 0, 0).hex,
			m2: oklch(0.560, 0, 0).hex,
			m3: oklch(0.420, 0, 0).hex,
		},
		bg: {
			hl: oklch(0.6600, 0, 0).hex,
			r4: oklch(0.2900, 0, 0).hex,
			r3: oklch(0.2475, 0, 0).hex,
			r2: oklch(0.2100, 0, 0).hex,
			r1: oklch(0.1900, 0, 0).hex,
			m:  oklch(0.0000, 0, 0).hex,
			l1: oklch(0.0900, 0, 0).hex,
			l2: oklch(0.1575, 0, 0).hex,

		},
		brd: {
			s: oklch(0.415, 0.006, 230).hex,
			w: oklch(0.355, 0.006, 230).hex,
		},
		tok: {
			white:    oklch(1.000, 0.000,   0.00).hex,
			black:    oklch(0.000, 0.000,   0.00).hex,
			grey:     oklch(0.440, 0.000,   0.00).hex,
			silver:   oklch(0.615, 0.000,   0.00).hex,
			bone:     oklch(0.825, 0.000,   0.00).hex,
			
			yellow:   oklch(0.504, 0.062,  97.70).hex,
			golden:   oklch(0.504, 0.082,  78.32).hex,
			orange:   oklch(0.504, 0.060,  49.29).hex,
			red:      oklch(0.504, 0.110,  24.46).hex,
			magenta:  oklch(0.504, 0.092, 359.32).hex,
			lilac:    oklch(0.504, 0.085, 331.06).hex,
			lavender: oklch(0.504, 0.045, 359.44).hex,
			purple:   oklch(0.504, 0.069, 315.01).hex,
			denim:    oklch(0.504, 0.034, 276.39).hex,
			azure:    oklch(0.504, 0.058, 252.05).hex,
			teal:     oklch(0.504, 0.046, 196.74).hex,
			steel:    oklch(0.504, 0.024, 196.06).hex,
			green:    oklch(0.504, 0.063, 144.15).hex,
			beige:    oklch(0.504, 0.025, 127.68).hex,
		},
		dec: {
			dr: {
				yellow:  oklch(0.410, 0.050,  96.69).hex,
				orange:  oklch(0.410, 0.060,  47.61).hex,
				red:     oklch(0.410, 0.080,  21.03).hex,
				magenta: oklch(0.410, 0.085, 358.97).hex,
				purple:  oklch(0.410, 0.070, 314.05).hex,
				azure:   oklch(0.410, 0.052, 250.36).hex,
				teal:    oklch(0.410, 0.047, 179.51).hex,
				green:   oklch(0.450, 0.062, 144.77).hex,
			},
			lg: {
				azure:  oklch(0.595, 0.091, 259.56).hex,
				yellow: oklch(0.595, 0.088,  97.84).hex,
				green:  oklch(0.595, 0.109, 143.54).hex,
			},
		},
		misc: {
			sel:   oklch(0.422, 0.070, 250.36).hex,
			scr:   oklch(0.690, 0.000,   0.00).hex,
			sbpbg: oklch(0.190, 0.000,   0.00).hex,
		},
	},
	opa: {
		fg: {
			m1: '90',
			s1: '9e',
			s2: '7e',
			s3: '55',
		},
		...evening.template.opa,
	},
}
