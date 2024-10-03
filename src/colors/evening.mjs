// @ts-check
import * as colTem from "./colors-template.mjs"
const oklch = colTem.oklch

/**
 * @type {colTem.ColorTemplate}
*/
export const template = {
	conf: {
		name: "Always Half-Full 🌆 evening",
		type: "dark",
		filename: "Always Half-Full evening.json",
	},
	col: {
		txt: {
			c:  oklch(1.000, 0, 0).hex,
			m1: oklch(0.825, 0, 0).hex,
			m2: oklch(0.700, 0, 0).hex,
			m3: oklch(0.525, 0, 0).hex,
		},
		bg: {
			hl: oklch(0.000, 0.000, 230).hex,
			r4: oklch(0.395, 0.006, 230).hex,
			r3: oklch(0.325, 0.005, 230).hex,
			r2: oklch(0.265, 0.005, 230).hex,
			r1: oklch(0.240, 0.004, 230).hex,
			m:  oklch(0.225, 0.004, 230).hex,
			l1: oklch(0.190, 0.004, 230).hex,
			l2: oklch(0.150, 0.004, 230).hex,

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
			
			yellow:   oklch(0.604, 0.124,  97.70).hex,
			golden:   oklch(0.604, 0.125,  78.32).hex,
			orange:   oklch(0.604, 0.120,  49.29).hex,
			red:      oklch(0.604, 0.220,  24.46).hex,
			magenta:  oklch(0.604, 0.185, 359.32).hex,
			lilac:    oklch(0.604, 0.170, 331.06).hex,
			lavender: oklch(0.604, 0.045, 359.44).hex,
			purple:   oklch(0.604, 0.137, 315.01).hex,
			denim:    oklch(0.604, 0.069, 276.39).hex,
			azure:    oklch(0.604, 0.116, 252.05).hex,
			teal:     oklch(0.604, 0.093, 196.74).hex,
			steel:    oklch(0.604, 0.047, 196.06).hex,
			green:    oklch(0.604, 0.127, 144.15).hex,
			beige:    oklch(0.604, 0.049, 127.68).hex,
		},
		dec: {
			dr: {
				yellow:  oklch(0.488, 0.099,  96.69).hex,
				orange:  oklch(0.488, 0.115,  47.61).hex,
				red:     oklch(0.488, 0.157,  21.03).hex,
				magenta: oklch(0.488, 0.187, 358.97).hex,
				purple:  oklch(0.488, 0.136, 314.05).hex,
				azure:   oklch(0.488, 0.103, 250.36).hex,
				teal:    oklch(0.488, 0.085, 179.51).hex,
				green:   oklch(0.488, 0.124, 144.77).hex,
			},
			lg: {
				azure:  oklch(0.708, 0.152, 259.56).hex,
				yellow: oklch(0.708, 0.146,  97.84).hex,
				green:  oklch(0.708, 0.182, 143.54).hex,
			},
		},
		misc: {
			sel:   oklch(0.546, 0.103, 250.36).hex,
			scr:   oklch(0.890, 0.000,   0.00).hex,
			sbpbg: oklch(0.190, 0.000,   0.00).hex,
		},
	},
	opa: {
		fg: {
			m1: 'b4',
			s1: 'c6',
			s2: '9e',
			s3: '6a',
		},
		bg: {
			m10: 'aa',
			m8:  '88',
			m6:  '66',
			m4:  '44',
		},
		edt: {
			brc: 'cc',
			whl: '44',
			mln: '44',
			sln: '33',
			cur: 'ba',
			shl: '44',
		},
		com: {
			xbg:  '',
			xfg:  'c6',
			xico: 'c6',
			xrow: '44',
		},
		btn: {
			br:   '00',
			sbg:  '',
			xsbg: '',
		},
	},
}
