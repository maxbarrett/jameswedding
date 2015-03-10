({
    baseUrl: './app/js/',
    mainConfigFile : 'app/js/config.js', // avoids duplicating config
    name: 'config', // name of the file to optomise
    out: 'dist/js/config.js', // concatted file: used same name as dev env
    removeCombined: true,
    optimize: 'uglify2', // needed for sourcemaps
    generateSourceMaps: true,
    preserveLicenseComments: false,
    useStrict: true,
    paths: {
        jquery: 'empty:' // r.js does not support paths fallbacks
    }
});