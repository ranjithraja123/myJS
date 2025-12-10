function lowestElement(arrs, x, y) {
    let list = []
    for (let i = 0; i < arrs[0].length; i++) {
        for (let j = 0; j < arrs.length; j++) {
            console.log(Math.abs(i - x), "xinc")
            console.log(Math.abs(j - y), "yinc")

            if (Math.abs(i - x) <= 1 && Math.abs(j - y) <= 1 && !(i === x && j === y)) {
                console.log(i, j, arrs[i][j], "in")
                list.push(arrs[i][j])
            }
        }
    }
    console.log(list)
}

console.log(lowestElement([
    [9, 8, 7],
    [0, -1, -3],
    [-5, -9, 54]
], 0, 0));