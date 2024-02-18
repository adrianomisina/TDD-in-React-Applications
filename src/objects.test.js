const users = {
  name: 'John',
  email:'John@example.com'
}


describe('Match object', () => {
  it('basic usage', () => {
    expect(users.name).toBeDefined()
    expect(users.age).not.toBeDefined()
  })
})