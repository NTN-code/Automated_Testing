it('console.log the text "hello"', () => {
    const logSpy = jest.spyOn(console, 'log');
    console.log('Hello World!');
    expect(logSpy).toHaveBeenCalledWith('Hello World!');
  });