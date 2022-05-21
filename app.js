const jokes = document.querySelector("#jokes");
const btn = document.querySelector(".btn");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newP = document.querySelector(".jokeDisplay");
  newP.innerHTML = jokeText;
  // newLI.append(jokeText);
  // jokes.append(newLI);
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "No jokes available";
  }
};

btn.addEventListener("click", addNewJoke);
