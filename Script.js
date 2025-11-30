fetch("post.json")
  .then(res => res.json())
  .then(data => {

    // Characters
    const chars = data.characters;
    const charBox = document.getElementById("charContainer");

    chars.forEach(c => {
      charBox.innerHTML += `
        <div class="card">
          <h3>${c.name}</h3>
          <p>${c.description}</p>
          <p><b>Power:</b> ${c.power}</p>
        </div>
      `;
    });

    // News
  });
