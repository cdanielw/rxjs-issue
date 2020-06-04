const {of} = require('rxjs')

module.exports = {
    create$: () => of('b'),
    rxjs: require('rxjs'),
    rxjsOperators: require('rxjs/operators')
}