describe("BookList", () => {
  const books = [
    { title: 'ReactJS for dummies', author: 'Guido Schmitz' },
    { title: 'Redux and ReactJS', author: 'Dan Abramov' }
  ];

  it("display category title", () => {
    const wrapper = render(<BookList category="ReactJS" items={books} />);

    assert.equal(wrapper.find('h1').text(), 'Books in ReactJS (2)');
  })

  it("render book items", () => {
    const wrapper = render(<BookList items={books} />);

    assert.equal(wrapper.find('#items div').length, 2);
  });
});
