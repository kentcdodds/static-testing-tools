function add(a: number, b: number): number {
  return a + b
}

interface User {
  name: {
    first: string
    middle: string
    last: string
  }
}
function getFullName(user: User): string {
  const {
    name: {first, middle, last},
  } = user
  return [first, middle, last].filter(Boolean).join(' ')
}

add(1, 2)

getFullName({name: {first: 'Joe', middle: 'Bud', last: 'Matthews'}})
