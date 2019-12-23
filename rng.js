let a = require("./in.json");
let colors = require('colors');
const fs = require('fs');

function anongPetsa() {
// define normals
let y = new Date();
let j = (y.getFullYear()).toString();
let o = "0";
let m = (y.getMonth() + 1).toString();
let d = (y.getDate()).toString();
let h = (y.getHours()).toString();
let mi = (y.getMinutes()).toString();
let s = (y.getSeconds()).toString();
// define concats
let cm = o.concat(m);
let cd = o.concat(d);
let ch = o.concat(h);
let cmi = o.concat(mi);
let cs = o.concat(s);
// logic shit
if (Number(m) < 10) { var fm = cm; } else { var fm = m; };
if (Number(d) < 10) { var fd = cd; } else { var fd = d; };
if (Number(h) < 10) { var fh = ch; } else { var fh = h; };
if (Number(mi) < 10) { var fmi = cmi; } else { var fmi = mi; };
if (Number(s) < 10) { var fs = cs; } else { var fs = s; };
// penis!!!!
let z = j + "-" + fm + "-" + fd + "-" + fh + "-" + fmi + "-" + fs;
let alz = j + "" + fm + "" + fd + "-" + fh + "" + fmi + "" + fs;
return z;
}
let fvg = new Date();
let l = a.l;
let u = a.u;
let i = a.i;
let ext = a.ext;
let toFileBoolean = a.writeToFile;
let x = u - l + 1;
let zf = anongPetsa();
let zfn = zf + "." + ext;
let k = "";
var sk = "";

function rngToFile() {

console.log("[ in.json ] Output to file: TRUE");

console.log("[ function anongPetsa() ] Getting date...");
console.log("[ function anongPetsa() ] Date acquired!");

console.log("[ main script ] Generating numbers...");

console.log("[ in.json ] Lower Bound: " + l);
console.log("[ in.json ] Upper Bound: " + u);
console.log("[ in.json ] Range: " + x);
console.log("[ in.json ] Count: " + i);

for (b = 1; b <= i; b++) {
k += (Math.ceil(Math.random() * x) + l - 1).toString() + "\n";
}
var sk = k.trim();

console.log("[ main script ] Numbers generated!");
console.log("[ main script ] Removing anomalies...");
console.log("[ main script ] Writing file...");

fs.writeFileSync(zfn, sk, (err) => {
if (err) throw err;
console.log("[ main script ] Saved!");
});

function getFilesizeInBytes(filename) {
    let stats = fs.statSync(filename);
    let fileSizeInBytes = stats["size"];
    return fileSizeInBytes;
}

let fklol = getFilesizeInBytes(zfn);
console.log("[ main script ] Saved!");
console.log("[ main script ] " + zfn + " | " + fklol + " bytes");

}

function rngNative() {

console.log("[ in.json ] Output to file: FALSE");

console.log("[ function anongPetsa() ] Getting date...");
console.log("[ function anongPetsa() ] Date acquired!");

console.log("[ main script ] Generating numbers...");

console.log("[ in.json ] Lower Bound: " + l);
console.log("[ in.json ] Upper Bound: " + u);
console.log("[ in.json ] Range: " + x);
console.log("[ in.json ] Count: " + i);

for (b = 1; b <= i; b++) {
k += (Math.ceil(Math.random() * x) + l - 1).toString() + "\n";
}

console.log("[ main script ] Numbers generated!");
console.log("[ main script ] Removing anomalies...");
console.log(k);

}

if (toFileBoolean) { rngToFile() } else { rngNative() }
