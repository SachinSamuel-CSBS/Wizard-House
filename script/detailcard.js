if( JSON.parse(window.localStorage.getItem("api")) )
{
    
    let finalURL = `https://hp-api.onrender.com/api/characters/staff`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0]);
        console.log(data);

        const i = JSON.parse(window.localStorage.getItem("index"));
        console.log(i);

      results.innerHTML =
      `
        <div class="result">
            <h1>${data[i].name}</h1>
            <div class="all">
                <div class="text">
                    <div class="left">
                        <h4>Species</h4>
                        <h4>Gender</h4>
                        <h4>House</h4>
                        <h4>DOB</h4>
                        <h4>Ancestry</h4>
                        <h4>Eye Colour</h4>
                        <h4>Hair Colour</h4>
                        <h4>Wand</h4>
                        <h4>Patronus</h4>
                    </div>
                    <div class="right">
                        <h4>${data[i].species}</h4>
                        <h4>${data[i].gender}</h4>
                        <h4>${data[i].house}</h4>
                        <h4>${data[i].dateOfBirth}</h4>
                        <h4>${data[i].ancestry}</h4>
                        <h4>${data[i].eyeColour}</h4>
                        <h4>${data[i].hairColour}</h4>
                        <h4>${data[i].wand.core}</h4>
                        <h4>${data[i].patronus}</h4>
                    </div>
                </div>
                <div class="image">
                    <img src="${data[i].image}" alt="">
                 </div>
            </div>
        </div>

      `

    });

}
else
{
    
    let finalURL = `https://hp-api.onrender.com/api/characters/students`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0]);
        console.log(data);

        const i = JSON.parse(window.localStorage.getItem("index"));
        console.log(i);

      results.innerHTML =
      `
        <div class="result">
            <h1>${data[i].name}</h1>
            <div class="all">
                <div class="text">
                    <div class="left">
                        <h4>Species</h4>
                        <h4>Gender</h4>
                        <h4>House</h4>
                        <h4>DOB</h4>
                        <h4>Ancestry</h4>
                        <h4>Eye Colour</h4>
                        <h4>Hair Colour</h4>
                        <h4>Wand</h4>
                        <h4>Patronus</h4>
                    </div>
                    <div class="right">
                        <h4>${data[i].species}</h4>
                        <h4>${data[i].gender}</h4>
                        <h4>${data[i].house}</h4>
                        <h4>${data[i].dateOfBirth}</h4>
                        <h4>${data[i].ancestry}</h4>
                        <h4>${data[i].eyeColour}</h4>
                        <h4>${data[i].hairColour}</h4>
                        <h4>${data[i].wand.core}</h4>
                        <h4>${data[i].patronus}</h4>
                    </div>
                </div>
                <div class="image">
                    <img src="${data[i].image}" alt="">
                 </div>
            </div>
        </div>

      `

    });

}

/*let finalURL = `https://hp-api.onrender.com/api/characters/students`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0]);
        console.log(data);

        const i = JSON.parse(window.localStorage.getItem("index"));
        console.log(i);

      results.innerHTML =
      `
        <div class="result">
            <h1>${data[i].name}</h1>
            <div class="all">
                <div class="text">
                    <div class="left">
                        <h4>Species</h4>
                        <h4>Gender</h4>
                        <h4>House</h4>
                        <h4>DOB</h4>
                        <h4>Ancestry</h4>
                        <h4>Eye Colour</h4>
                        <h4>Hair Colour</h4>
                        <h4>Wand</h4>
                        <h4>Patronus</h4>
                    </div>
                    <div class="right">
                        <h4>${data[i].species}</h4>
                        <h4>${data[i].gender}</h4>
                        <h4>${data[i].house}</h4>
                        <h4>${data[i].dateOfBirth}</h4>
                        <h4>${data[i].ancestry}</h4>
                        <h4>${data[i].eyeColour}</h4>
                        <h4>${data[i].hairColour}</h4>
                        <h4>${data[i].wand.core}</h4>
                        <h4>${data[i].patronus}</h4>
                    </div>
                </div>
                <div class="image">
                    <img src="${data[i].image}" alt="">
                 </div>
            </div>
        </div>

      `

    });

    */
