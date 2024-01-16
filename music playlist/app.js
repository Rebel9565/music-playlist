document.addEventListener("DOMContentLoaded", function () {
  function generatePlaylist() {
    const apiKey = "YOUR_LAST_FM_API_KEY";
    const mood = document.getElementById("mood").value;
    const activity = document.getElementById("activity").value;

    const apiUrl = `https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${mood},${activity}&api_key=${apiKey}&format=json`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const tracks = data.tracks.track;

        const playlistElement = document.getElementById("playlist");
        playlistElement.innerHTML = "";

        tracks.forEach((track) => {
          const trackElement = document.createElement("div");
          trackElement.className = "playlist-item";
          trackElement.textContent = track.name;

          // Add more details like artist, album, etc., as needed

          playlistElement.appendChild(trackElement);
        });
      })
      .catch((error) =>
        console.error("Error fetching data from Last.fm API:", error)
      );
  }
});
