function sentence(newarr) {
    let combined = "";
    let vowels = ["a","e","i","o","u"];

    if (newarr.length === 1) {
        return "Only one";
    }

    for (let i = 0; i < newarr.length; i++) {
        let article = vowels.includes(newarr[i][0].toLowerCase()) ? "an" : "a";
        combined += article + " " + newarr[i];

        if (i < newarr.length - 2) {
            combined += ", ";
        } else if (i === newarr.length - 2) {
            combined += " and ";
        }
    }

    return combined[0].toUpperCase() + combined.slice(1);
}

console.log(sentence(["orange", "apple", "pear"]));
