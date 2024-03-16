function contentSettings() {
  let header = document.querySelectorAll(".content-item__header");

  for (let i = 0; i < header.length; i++) {
    if (header[i].querySelector(".content-item__settings")) {
      header[i].querySelector(".content-item__settings").remove();
      continue;
    }
    let div = document.createElement("div");
    div.className = `content-item__settings item-${i}`;
    div.innerHTML = `<input class="content-settings__input"><button class="content-settings__button" onclick="dateChange('item-${i}')">Submit</button>`;
    header[i].append(div);
  }
}

function dateChange(item) {
  let timestamp = document.querySelector(`.content-item__settings.${item} input`).value;
  let dateElement = document.querySelector(`.content-item__settings.${item}`).previousElementSibling;
  let date = dateCalculate(timestamp);

  dateElement.textContent = `${date[1]} ${date[0]} ago`;
}

function dateCalculate(timestamp) {
  const currentTimestamp = Date.now();
  const timeDifference = currentTimestamp - timestamp;

  let date = {}
  date.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  date.hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  date.minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
  date.seconds = Math.floor((timeDifference / 1000) % 60);
  

  return Object.entries(date).find(value => value[1]); //get the first two values which are not 0
}
