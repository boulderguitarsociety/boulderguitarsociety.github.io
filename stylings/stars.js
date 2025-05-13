/* ©2025 Boulder Guitar Society */
/**********************************************************/
/*                         stars.js                       */
/*                                                        */
/* Supports display of three random stars in Stars.html   */
/*                                                        */
/**********************************************************/

   // global data
   let starList = [];  // each item: [ imgsrc, name, idref ]
   let nextItem = 0;   // next item to show
   // ids to reset when new set is highlighted
   let previd1 = "";
   let previd2 = "";
   let previd3 = "";
   // dir containing imgs and list
   const strsDir = "https://boulderguitarsociety.github.io/strs/";

   // populate starList[], shuffle starList and display next three stars
   async function initStars() {
      let rawlines = [];
      try {
         const response = await fetch(strsDir + "list"); 
         if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
         }
         const text = await response.text();
         rawlines = text.split('\n');
         rawlines.length--;
         console.log("rawlines has " + rawlines.length + " items\n");
      } catch (error) {
         console.error("Error fetching list:", error);
         rawlines = [];
      }
      rawlines.forEach(parseLine);
      doShuffle();
      nextThree()
   }

   // parse "filename firstname lastname morenames" into [ imgsrc, name, idref ]
   function parseLine(line) {
      let line2 = line.trim();  // remove any leading/trailing space
      let line3 = line2.replace(/\s+/, " ");  // consolidate whitespace
      let parts = line3.split(" ");
      let src = strsDir + parts.shift();  // get src from first field
      let nam = parts.join(" ");  // rejoin remaining parts to get full name
      let idref = parts.join("_");  // replace blanks for local id ref
      starList.push([src, nam, idref]);  // save to starList
   }

   // do a Fisher-Yates shuffle on starList[] array
   function doShuffle() {
      for (let i = starList.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [starList[i], starList[j]] = [starList[j], starList[i]];
      }
   }

   // get next item from starList[]
   function getItem() {
      let nxt = nextItem;
      nextItem++;
      if (nextItem >= starList.length) { nextItem = 0; }
      console.log("got starList[" + nxt + "]\n");
      return starList[nxt];
   }

   // populate next three star images, re-shuffling if near end
   function nextThree() {
      if (previd1) {
         document.getElementById(previd1).style = "";
         document.getElementById(previd2).style = "";
         document.getElementById(previd3).style = "";
      }
      if (nextItem >= starList.length - 3) { 
         nextItem = 0;
         doShuffle();
         console.log("auto doShuffle()\n");
      }
      let star1 = getItem();
      let star2 = getItem();
      let star3 = getItem();
      document.getElementById("img1").src = star1[0];
      document.getElementById("img2").src = star2[0];
      document.getElementById("img3").src = star3[0];
      document.getElementById("nam1").innerHTML = star1[1];
      document.getElementById("nam2").innerHTML = star2[1];
      document.getElementById("nam3").innerHTML = star3[1];
      document.getElementById("ref1").href = "#" + star1[2];
      document.getElementById("ref2").href = "#" + star2[2];
      document.getElementById("ref3").href = "#" + star3[2];
      document.getElementById(previd1).style = "color: #0011EE; font-weight: bold;";
      document.getElementById(previd2).style = "color: #0011EE; font-weight: bold;";
      document.getElementById(previd3).style = "color: #0011EE; font-weight: bold;";
   }
