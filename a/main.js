const {from, of, interval} = require('rxjs')
const {switchMap, take} = require('rxjs/operators')
const {
    create$,
    // Re-exporting rxjs also allows it to exit properly
    // rxjs: {from, of, interval}, rxjsOperators: {switchMap, take}
} = require('b/main')

const b$ = create$() // Process doesn't exit
// const b$ = from(create$()) // Exits properly
// const b$ = of('b') // Exits properly

b$.pipe(
    switchMap(b => interval(100)),
    take(3)
).subscribe(
    next => console.log('NEXT', next),
    error => console.log('ERROR', error),
    () => console.log('COMPLETE'),
)
