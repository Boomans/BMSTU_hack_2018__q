module.exports = {
    formPath (name, format, isProd=false) {
        return `/build/client/${name}.bundle.${isProd ? 'min.' : ''}${format}`;
    },

    isProd: process.env.NODE_ENV === 'production'
};