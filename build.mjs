import fs from "fs"
import { getTheme } from "./src/theme.mjs"
const themeVariants = []

console.log("\x1b[35mImporting morning variant\x1b[0m")
import * as morning from './src/colors/morning.mjs'
themeVariants.push(morning.template)

console.log("\x1b[35mImporting afternoon variant\x1b[0m")
import * as afternoon from './src/colors/afternoon.mjs'
themeVariants.push(afternoon.template)

console.log("\x1b[35mImporting evening variant\x1b[0m")
import * as evening from './src/colors/evening.mjs'
themeVariants.push(evening.template)

console.log("\x1b[35mImporting midnight variant\x1b[0m")
import * as midnight from './src/colors/midnight.mjs'
themeVariants.push(midnight.template)

console.log("\x1b[35mImporting starlight variant\x1b[0m")
import * as starlight from './src/colors/starlight.mjs'
themeVariants.push(starlight.template)

console.log("\x1b[35m-- Finished importing variants --\x1b[0m")

for (const template of themeVariants) {
	
	console.log(`\x1b[32mEmitting ${template.conf.filename}\x1b[0m`)
	fs.writeFileSync(
		"./themes/" + template.conf.filename,
		JSON.stringify(getTheme(template), null, "\t")
	)
}

console.log(`\x1b[32m-- Finished emitting themes --\x1b[0m`)
