const get_hello = (name) => {
    return `Hello, ${name}`
}

it('get_hello"', () => {
    expect(get_hello("Anton")).toEqual("Hello, Anton");
});