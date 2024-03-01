function displaySongInfo() {
    var songName = document.getElementById("songName").value;
    var youtubeLink = document.getElementById("youtubeLink").value;
    var description = document.getElementById("description").value;
    var year = document.getElementById("year").value;

    var embeddableYouTube = youtubeLink.replace("watch?v=", "embed/");
    var UrlEmbedddd = '<iframe src="' + embeddableYouTube + '"</iframe>';
    document.getElementById("youtubeVideo").innerHTML = UrlEmbedddd;

    document.getElementById("displaySongName").innerText = songName;
    document.getElementById("displayDescription").innerText = description;
    document.getElementById("displayYear").innerText = year;

    document.getElementById("myForm").style.display = "none";
    document.getElementById("displayArea").style.display = "block";
}
module.exports = {
    displaySongInfo: displaySongInfo,
};