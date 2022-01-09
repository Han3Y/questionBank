var str = "100000000000",
    reg = /(?=(\B\d{3})+$)/g;
str.replace(reg, ",")
