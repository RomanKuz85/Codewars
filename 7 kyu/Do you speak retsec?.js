function reverseByCenter(s){
    let i = Math.trunc(s.length / 2);
    return s.length % 2 === 0 ? s.slice(i) + s.slice(0, i) : s.slice(i + 1) + s[i] + s.slice(0, i);

} 