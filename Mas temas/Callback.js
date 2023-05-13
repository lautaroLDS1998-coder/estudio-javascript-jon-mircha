function contarCallback(value, cbk) {
    setTimeout(() => {
        cbk(value, value * value);
    }, 0 | Math.random() * 1000);
}

contarCallback(0, (value, result) => {
    console.log("inicia callback");
    console.log(`Callback: ${value}, ${result}`);
    contarCallback(1, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
    })
    contarCallback(2, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
    })
    contarCallback(3, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
    })
    contarCallback(4, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
    })
    contarCallback(5, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
    })
    console.log("Termina callback");
    contarCallback(6, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
    })
});

