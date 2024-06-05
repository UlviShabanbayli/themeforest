"use strict";
/*
// 1.
let a = 100;
if (a % 33 > 30 && (a % 33) % 14 > 10) console.log(((a % 33) % 14) % 5);

// 2.
let x = Number(prompt("Eni daxil edir"));
let y = Number(prompt("Uzunlugu daxil edir"));

if (x > 10 && y > 10) console.log(x * y);
if (x < 10 && y < 10) console.log(2 * (x + y));

// 3.
let z = Number(prompt());
let area = z ** 2;
if (area > 25) console.log(area % 12);
*/

const cards = document.querySelector(".cards__container-grid");

let postsInfo = [
  {
    mainUrl:
      "https://images.unsplash.com/photo-1582657233895-0f37a3f150c0?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI2fHxmYXNoaW9uJTIwJTIwZmxvd2VyfGVufDB8fHx8MTY5MjQ0NTE5Mnww&ixlib=rb-4.0.3&q=80&w=2000",
    id: "Nature",
    heading: "Autumn is a second spring when every leaf is a flower",
    descr:
      "She then expatiated very warmly upon the advantages I should reap from her plan; talked in a high style of my future grandeur; assured me how heartily I should despise almost every body and...",
    url: "https://porto.gbjsolution.com/content/images/2023/08/harini.jpg",
    min: 4,
  },
  {
    mainUrl:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI4fHxmYXNoaW9uJTIwYmVhdXR5fGVufDB8fHx8MTY5MjQ0NTA2MHww&ixlib=rb-4.0.3&q=80&w=2000",
    id: "Travel",
    heading: "Never let your memories be greater than your dreams",
    descr:
      "Before long the searchlight discovered some distance away a schooner with all sails set, apparently the same vessel which had been noticed earlier in the evening. The wind had by...",
    url: "https://porto.gbjsolution.com/content/images/2023/08/Apurba.jpg",
    min: 3,
  },
  {
    mainUrl:
      "https://images.unsplash.com/photo-1619735007512-34004ec2f348?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDMyfHxpbWFnaW5hdGlvbnxlbnwwfHx8fDE2NzE0MzA4NDI&ixlib=rb-4.0.3&q=80&w=2000",
    id: "Food",
    heading: "Dramatically improve your cooking using just your imagination",
    descr:
      "You cannot too assiduously attend to Madame Duval herself; but I would wish you to mix as little as possible with her associates, who are not likely to be among those whose acquaintance would...",
    url: "https://porto.gbjsolution.com/content/images/2023/08/harini.jpg",
    min: 4,
  },
  {
    mainUrl:
      "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDIzfHxmYXNoaW9uJTIwJTIwZmxvd2VyJTIwbGlmZXN0eWxlfGVufDB8fHx8MTY5MjQ0NTI1N3ww&ixlib=rb-4.0.3&q=80&w=2000",
    id: "Lifestyle",
    heading: "Self-observation is the first step of inner unfolding",
    descr:
      "Mr. Branghton's house is small and inconvenient; though his shop, which takes in all the ground floor, is large and commodious. I believe I told you before, that he is a silver-smith.",
    url: "https://www.gravatar.com/avatar/021e64775176cc4c7018e5e867f17de2?s=250&r=x&d=mp",
    min: 4,
  },
  {
    mainUrl:
      "https://images.unsplash.com/photo-1628174392663-3e7218959b07?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI5fHxmYXNoaW9uJTIwJTIwbGlnaHR8ZW58MHx8fHwxNjkyNDQ1MzkzfDA&ixlib=rb-4.0.3&q=80&w=2000",
    id: "Inspiration",
    heading:
      "It is during our darkest moments that we must focus to see the light",
    descr:
      "Mina took a growing interest in everything and I was rejoiced to see that the exigency of affairs was helping her to forget for a time the terrible experience of the night. She was very, very pale...",
    url: "https://porto.gbjsolution.com/content/images/2023/08/suravi.jpg",
    min: 3,
  },
  {
    mainUrl:
      "https://images.unsplash.com/photo-1559563458-527698bf5295?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDI5fHxiYWd8ZW58MHx8fHwxNjcxNDMxNDg0&ixlib=rb-4.0.3&q=80&w=2000",
    id: "Technology",
    heading: "Bangladesh has developed plastic alternative using jute",
    descr:
      "Dr. Johnson, as usual, spoke contemptuously of Colley Cibber. 'It is wonderful that a man, who for forty years had lived with the great and the witty, should have acquired so ill the talents of...",
    url: "https://porto.gbjsolution.com/content/images/2023/08/ishan.jpg",
    min: 3,
  },
  {
    mainUrl:
      "https://images.unsplash.com/photo-1522512115668-c09775d6f424?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDUyfHxmYXNoaW9uJTIwJTIwbGlnaHR8ZW58MHx8fHwxNjkyNDQ1NDA4fDA&ixlib=rb-4.0.3&q=80&w=2000",
    id: "Food",
    heading: "I do not stick to rules when cooking. I rely on my imagination",
    descr:
      "I walked down to the station with them, and then wandered through the streets of the little town, finally returning to the hotel, where I lay upon the sofa and tried to interest myself in a yellow-...",
    url: "https://www.gravatar.com/avatar/021e64775176cc4c7018e5e867f17de2?s=250&r=x&d=mp",
    min: 4,
  },
  {
    mainUrl:
      "https://images.unsplash.com/photo-1593164842264-854604db2260?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDl8fHlvZ2F8ZW58MHx8fHwxNjcxNDMxNTUx&ixlib=rb-4.0.3&q=80&w=2000",
    id: "Health",
    heading:
      "The mind and body are not separate. what affects one, affects the other",
    descr:
      "His recital put the Captain into an ecstasy; he went from the lady to the gentleman, and from the gentleman to the lady, to enjoy alternately the sight of their distress. He really shouted with...",
    url: "https://porto.gbjsolution.com/content/images/2023/08/harini.jpg",
    min: 3,
  },
  {
    mainUrl:
      "https://images.unsplash.com/photo-1504890001746-a9a68eda46e2?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDd8fGRyb25lfGVufDB8fHx8MTY5MjQ0NTYwM3ww&ixlib=rb-4.0.3&q=80&w=2000",
    id: "Technology",
    heading: "Amphibious drone are being used to send medicine to flooded area",
    descr:
      "Another tragedy. Had single watch to-night, as crew too tired to double. When morning watch came on deck could find no one except steersman. Raised outcry, and all came on deck....",
    url: "https://porto.gbjsolution.com/content/images/2023/08/ishan.jpg",
    min: 3,
  },
];

for (let i = 0; i < postsInfo.length; i++) {
  cards.innerHTML += `
  <div class="cards__container-grid__item">
    <div>
      <img src="${postsInfo[i].mainUrl}" />
    </div>
    <div>
      <a href="#" class="btn__post" id="${postsInfo[i].id.toLowerCase()}" >${
    postsInfo[i].id
  }</a>
      <p class="card__header"><a href="#">${postsInfo[i].heading}</a></p>
      <p class = descr>${postsInfo[i].descr}</p>
      <div>
        <div>
          <img src="${postsInfo[i].url}" />
        </div>
        <div>
          <i class="fa-regular fa-clock"></i>
          <p>${postsInfo[i].min} min read</p> 
        </div>
      </div>
    </div>
  </div>
`;
}

// cards.innerHTML += `
//   <div class="cards__container-grid__item">
//     <div>
//       <img src="${postsInfo[0].mainUrl}" />
//     </div>
//     <div></div>
//   </div>
// `;
