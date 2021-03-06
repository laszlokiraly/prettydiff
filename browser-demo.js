(function () {
    let button = document.getElementsByTagName("button")[0],
        execute = function () {
            let prettydiff = window.prettydiff,
                options = prettydiff.defaults,
                output = "";
            options.api = "dom";
            options.language = "auto";
            options.lexer = "script";
            options.mode = "beautify";
            options.source = document.getElementById("input").value;
            output = prettydiff.mode(options);
            document.getElementById("output").value = output;
        };
    button.onclick = execute;
}());