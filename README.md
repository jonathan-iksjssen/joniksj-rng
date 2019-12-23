# joniksj-rng
A random number generator with a few extra options. Built with node.js.

## How to Use
- Install node.js.
- Configure the generator using `in.json`:
	- `"l"`: integer; the minimum value. 
	- `"u"`: integer; the maximum value.
	- `"i"`: integer; amount of numbers to be generated.
	- `"writeToFile"`: boolean; whether to display the generated numbers in the console or to export to a file.
- Run `cmd` in the same folder as `rng.js`.
- Type `node rng.js` into the console and hit enter.

If `"writeToFile"` is set to `true`, the output file will always be in the same folder as `rng.js`, and its filename will be the date and time of execution, with the format `YYYY-MM-DD-HH-MM-SS`.

If the console outputs a `Cannot find module` error, type these commands into the console then try running `rng.js` again:
- `npm install fs`
- `npm install colors`
