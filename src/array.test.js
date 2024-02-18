const users = ['Aluizio', 'Developer']

describe('match arrays', () => {
  it('verify array elements', () => {
    expect(users).toContainEqual('Aluizio')
    expect(users).toContain(users[0])
  })
})