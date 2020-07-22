const unicorns = [...document.querySelectorAll('img')];

let count = {}

unicorns.forEach((unicorn, identifier) => {
  let accumulator = count[identifier] = 1;

  unicorn.addEventListener('click', () => {
    if(accumulator <= 3) {
      unicorns[identifier].src = `images/unicorn-${accumulator++}.png`;
      if(accumulator > 3) {
        alert(`Unicorn Number ${identifier + 1} says thank you!`)
      }
    }
  })
})