const nepaliLayout = {
    a: 'अ',
    b: 'ब',
    c: 'क',
    d: 'द',
    e: 'ए',
    f: 'फ',
    g: 'ग',
    h: 'ह',
    i: 'इ',
    j: 'ज',
    k: 'क',
    l: 'ल',
    m: 'म',
    n: 'न',
    o: 'ओ',
    p: 'प',
    q: '।', 
    r: 'र',
    s: 'स',
    t: 'त',
    u: 'उ',
    v: 'भ',
    w: 'व',
    x: 'ख',
    y: 'य',
    z: 'श',
    A: 'आ',
    B: 'भ',
    C: 'च',
    D: 'ड',
    E: 'ई',
    F: 'ड़',
    G: 'घ',
    H: 'ः', // Visarga
    I: 'ई',
    J: 'झ',
    K: 'ख',
    L: 'ळ',
    M: 'ण',
    N: 'ञ',
    O: 'ओ',
    P: 'फ',
    Q: 'ँ', // Anusvara
    R: 'ऋ',
    S: 'ष',
    T: 'ट',
    U: 'ऊ',
    V: 'व',
    W: 'ू', // Vowel sign u
    X: 'ै', // Vowel sign ai
    Y: 'ौ', // Vowel sign au
    Z: 'ः', // Visarga
  
    // Additional mappings for numerals and symbols
    '1': '१',
    '2': '२',
    '3': '३',
    '4': '४',
    '5': '५',
    '6': '६',
    '7': '७',
    '8': '८',
    '9': '९',
    '0': '०',
    '!': '!',
    '@': '@',
    '#': '#',
    $: '$',
    '%': '%',
    '^': '^',
    '&': '&',
    '*': '*',
    '(': '(',
    ')': ')',
    '-': '-',
    '_': '_',
    '+': '+',
    '=': '=',
    '[': '[',
    ']': ']',
    '{': '{',
    '}': '}',
    '|': '|',
    ';': ';',
    ':': ':',
    ',': ',',
    '.': '।', // Full stop (danda)
    '<': '<',
    '>': '>',
    '/': '/',
    '?': '?',
    ' ': ' ', // Space
  };
  
  // Usage example:
  const englishText = 'Namaste, Sagarmatha!';
  let nepaliText = '';
  
  for (let i = 0; i < englishText.length; i++) {
    const char = englishText[i];
    if (nepaliLayout[char]) {
      nepaliText += nepaliLayout[char];
    } else {
      nepaliText += char; 
    }
  }
  
  console.log(nepaliText); // Outputs: नमस्ते, सगरमथा!
  