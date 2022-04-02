function pairElement(str) {
  let arr = [];

  let test = str.split("");
  test.filter((element) => {
    arr.push(pairElementDna(element));
    return arr;
  });
  function pairElementDna(character) {
    let arr = [];

    if (character === "G") {
      arr.push(character, "C");
    }
    if (character === "C") {
      arr.push(character, "G");
    }
    if (character === "A") {
      arr.push(character, "T");
    }
    if (character === "T") {
      arr.push(character, "A");
    }
    return arr;
  }
  return arr;
}

pairElement("GCG");
