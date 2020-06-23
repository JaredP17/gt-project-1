const vidIds = {
  beaches : ["UQRDv3HtmUA", "OXX8emUmOGs", "-HAi_5IIAYg"],
  mountains : ["Zsqep7_9_mw", "2R2gb0MKJlo", "xiBZKJkeC_k"],
  cities : ["f0l7vmoI3KM", "u7QdRygIHDI", "j4AeFIEbijM"],
  lakes : ["thHgzWlveqs", "Ge7gwdGCfqA", "L7b7r_cbMQQ"],
  space : ["DDU-rZs-Ic4", "tNkZsRW7h2c"]//, "_92nLcq79uE"]
}

console.log(vidIds);
console.log(vidIds.mountains[1]);

function renderVideos(videos) {
  var videoRow = $("#yt-stream-row");
  videoRow.empty();

  for (var i = 0; i < videos.length; i++) {
    var id = videos[i];
    videoRow.append(`
    <div class="col-12 col-xl">
          <div id="yt-stream">
            <iframe
              width="380"
              height="300"
              src="https://www.youtube.com/embed/${id}?enablejsapi=1&version=3&playerapiid=ytplayer"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              allowscriptaccess="always"
              id="location-video"
            ></iframe>
          </div>
        </div>
    `);
  }
}