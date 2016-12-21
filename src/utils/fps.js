const container = document.createElement('aside');
const counterContainerTemplate = document.createElement('p');
const counterTitleTemplate = document.createElement('span');
const counterTemplate = document.createElement('span');
const counters = [];

container.style.position = 'fixed';
container.style.top = '15px';
container.style.right = '15px';
container.style.fontFamily = 'Tahoma';
container.style.fontSize = '10px';
container.style.textTransform = 'uppercase';
container.style.fontWeight = 'bold';
container.style.display = 'none';

function createCounter(title) {
  let counterInstance = counters.find(({ title: createdCounterTitle }) => title === createdCounterTitle);

  if (!counterInstance) {
    const counterContainer = counterContainerTemplate.cloneNode();

    Object.assign(counterContainer.style, {
      color: '#FFF',
    });

    const counterTitle = counterTitleTemplate.cloneNode();
    const counter = counterTemplate.cloneNode();

    counterContainer.style.display = 'none';

    counterTitle.textContent = `${title}: `;

    counterContainer.appendChild(counterTitle);
    counterContainer.appendChild(counter);
    container.appendChild(counterContainer);

    counterInstance = {
      active: false,
      title,
      counterContainer,
      counterTitle,
      counter,
    };

    counters.push(counterInstance);
  }

  return counterInstance;
}

function parseNumber(number, length) {
  const numberString = number.toString();
  const lengthDifference = length - numberString.length;
  let result;

  if (lengthDifference > 0) {
    result = numberString;

    for (let i = 0; i < lengthDifference; i += 1) {
      result = `0${result}`;
    }
  } else {
    result = numberString.slice(-length);
  }

  return result;
}

export default function fps(title) {
  const { counterContainer, counter } = createCounter(title);
  const countersContainer = [];
  let lastTime;
  let counterTimeoutId;

  return () => {
    const now = Date.now();
    const currentCount = parseInt(1000 / (now - lastTime), 10);

    if (!isNaN(currentCount)) {
      countersContainer.push(currentCount);

      const countsSum = countersContainer.reduce((peviousValue, currentValue) => parseInt(peviousValue + currentValue, 10));
      const count = parseInt(countsSum / countersContainer.length, 10);
      const parsedCount = parseNumber(count, 3);

      counter.textContent = parsedCount;

      if (counterTimeoutId) {
        clearTimeout(counterTimeoutId);
      }

      counterTimeoutId = setTimeout(() => {
        countersContainer.length = 0;

        counterContainer.style.display = 'none';

        container.style.display = 'none';
      }, 500);

      counterContainer.style.display = 'block';

      container.style.display = 'block';
    }

    lastTime = now;
  };
}

document.body.appendChild(container);
