// @ts-check
import * as colTem from "./colors-template.mjs"
const oklch = colTem.oklch

/**
 * @type {colTem.ColorTemplate}
*/
export const template = {
	conf: {
		name: "Always Half-Full 🏙️ morning",
		type: "light",
		filename: "Always Half-Full morning.json",
	},
	col: {
		txt: {
			c:  oklch(0.1775, 0, 0).hex,
			m1: oklch(0.2200, 0, 0).hex,
			m2: oklch(0.4400, 0, 0).hex,
			m3: oklch(0.6150, 0, 0).hex,
		},
		bg: {
			hl: oklch(0.6600, 0, 0).hex,
			r4: oklch(0.9425, 0, 0).hex,
			r3: oklch(0.9650, 0, 0).hex,
			r2: oklch(0.9725, 0, 0).hex,
			r1: oklch(0.9850, 0, 0).hex,
			m:  oklch(1.0000, 0, 0).hex,
			l1: oklch(0.9250, 0, 0).hex,
			l2: oklch(0.9100, 0, 0).hex,

		},
		brd: {
			s: oklch(0.7175, 0, 0).hex,
			w: oklch(0.8200, 0, 0).hex,
		},
		tok: {
			white:    oklch(1.000, 0.000,   0.00).hex,
			black:    oklch(0.000, 0.000,   0.00).hex,
			grey:     oklch(0.440, 0.000,   0.00).hex,
			silver:   oklch(0.615, 0.000,   0.00).hex,
			bone:     oklch(0.825, 0.000,   0.00).hex,
			
			yellow:   oklch(0.610, 0.124,  97.70).hex,
			golden:   oklch(0.600, 0.130,  68.32).hex,
			orange:   oklch(0.600, 0.160,  47.41).hex,
			red:      oklch(0.550, 0.221,  24.54).hex,
			magenta:  oklch(0.550, 0.217, 359.47).hex,
			lilac:    oklch(0.550, 0.250, 329.47).hex,
			lavender: oklch(0.600, 0.121, 359.51).hex,
			purple:   oklch(0.570, 0.279, 312.69).hex,
			denim:    oklch(0.550, 0.111, 272.65).hex,
			azure:    oklch(0.590, 0.180, 252.65).hex,
			teal:     oklch(0.620, 0.102, 204.30).hex,
			steel:    oklch(0.570, 0.081, 222.12).hex,
			green:    oklch(0.570, 0.194, 142.51).hex,
			beige:    oklch(0.570, 0.127, 130.49).hex,
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
				azure:  oklch(0.708, 0.152, 259.82).hex,
				yellow: oklch(0.708, 0.146,  97.84).hex,
				green:  oklch(0.708, 0.182, 143.54).hex,
			},
		},
		alt: {
			yellow:  oklch(0.820, 0.144,  96.69).hex,
			orange:  oklch(0.820, 0.074,  47.61).hex,
			red:     oklch(0.820, 0.096,  21.03).hex,
			purple:  oklch(0.820, 0.061, 314.05).hex,
			azure:   oklch(0.820, 0.054, 250.36).hex,
			green:   oklch(0.730, 0.124, 144.77).hex,
		},
		misc: {
			sel:   oklch(0.530, 0.103, 250.36).hex,
			scr:   oklch(0.135, 0.000,   0.00).hex,
			sbpbg: oklch(0.440, 0.000,   0.00).hex,
		},
	},
	opa: {
		fg: {
			m1: 'e2',
			s1: 'e2',
			s2: 'af',
			s3: '7f',
		},
		bg: {
			m10: '55',
			m8:  '44',
			m6:  '33',
			m4:  '22',
		},
		edt: {
			brc: 'dd',
			whl: '66',
			mln: '58',
			sln: '44',
			cur: 'da',
			shl: '33',
		},
		com: {
			xbg:  '88',
			xfg:  '',
			xico: '9e',
			xrow: '18',
		},
		btn: {
			br:   '44',
			sbg:  '22',
			xsbg: 'cc',
		},
	},
}
