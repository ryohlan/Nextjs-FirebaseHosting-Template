module.exports = {
    "extends": [
        "airbnb",
        "plugin:es-beautifier/standard"
    ],
    "plugins": [
        "flowtype",
        "es-beautifier"
    ],
    "rules": {
        "react/jsx-filename-extension": 0,
    },
    "parser": "babel-eslint",
};