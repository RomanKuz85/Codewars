function movie(card, ticket, perc) {
    let n = 1;
    let a = 0;
    let b = card;
    while (Math.ceil(b) >= Math.ceil(a)){
        a = a + ticket;
        b = b + ticket * (perc ** n);
        n++;
    }
    return n - 1;
}