var myFunc = function (name, weather) {
    var extraArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extraArgs[_i - 2] = arguments[_i];
    }
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today");
    for (var i = 0; i < extraArgs.length; i++) {
        console.log("Extra Arg: " + extraArgs[i]);
    }
};
myFunc("Adam", "sunny", "one", "two", "three");
