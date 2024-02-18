describe('equality', () => {
  it('basic usage - toEqual', () => {
    //comparando expressões numéricas
    expect(1 + 1).toEqual(2)
    expect(1+1).not.toEqual(3)

    //comparacao de strings
    expect('developer').toEqual('developer')

    //comparando objeto
    expect({ name: 'developer' }).toEqual({ name: 'developer' })
  })

  it('basic usage - toBe', () => {
    expect(1 + 1).toBe(2)
    expect('developer').toBe('developer')
    // expect({ name: 'developer' }).toBe({ name: 'developer' })
  })
})