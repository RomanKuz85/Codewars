function fakeBin(x){
    return x.replace(/./g, el => el < 5 ? 0 : 1);
}