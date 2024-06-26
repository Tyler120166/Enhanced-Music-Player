document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio');
    const title = document.getElementById('track-title');
    const artist = document.getElementById('track-artist');
    const playlistElement = document.getElementById('playlist');

    const playlist = [
        { title: "21", artist: "Polo G", src: "music/21 - Polo G.wav" },
        { title: "45", artist: "Shinedown", src: "music/45 - Shinedown.wav" },
        { title: "Armed And Dangerous", artist: "Juice Wrld", src: "music/Armed And Dangerous - Juice Wrld.wav" },
        { title: "Beautiful Things", artist: "Benson Boone", src: "music/Beautiful Things - Benson Boone.wav" },
        { title: "Californication", artist: "Red Hot Chili Peppers", src: "music/Californication - Red Hot Chili Peppers.wav" },
        { title: "Candy", artist: "MGK", src: "music/Candy - MGK.wav" },
        { title: "Crank That (Soulja Boy)", artist: "Closed Captioned", src: "music/Crank That (Soulja Boy) Closed Captioned.wav" },
        { title: "I Tried", artist: "Bone Thugs N Harmony", src: "music/I Tried - Bone Thugs N Harmony.wav" },
        { title: "Basketball", artist: "Lil' Bow Wow", src: "music/Lil' Bow Wow - Basketball.wav" },
        { title: "Live Your Life", artist: "TI", src: "music/Live Your Life - TI.wav" },
        { title: "Try Me Remix", artist: "Montana of 300", src: "music/Montana of 300 - Try Me Remix (Music Video).wav" },
        { title: "On My Own", artist: "Nav", src: "music/Nav - On My Own (Prod. Nav x Chillaa).wav" },
        { title: "Smells Like Teen Spirit", artist: "Nirvana", src: "music/Nirvana - Smells Like Teen Spirit.wav" },
        { title: "Congratulations", artist: "Post Malone ft. Quavo", src: "music/Post Malone - Congratulations ft. Quavo (Lyrics).wav" },
        { title: "RGF Island", artist: "Fetty Wap", src: "music/RGF Island - Fetty Wap.wav" },
        // Adding additional tracks
        { title: "Black Hearted", artist: "Unknown Artist", src: "music/Black Hearted.wav" },
        { title: "DJ Got Us Fallin' In Love", artist: "Usher", src: "music/DJ Got Us Fallin' In Love (Official Music Video).wav" },
        { title: "Do What I Want", artist: "Unknown Artist", src: "music/Do What I Want.wav" },
        { title: "Donald Trump", artist: "Mac Miller", src: "music/Donald Trump.wav" },
        { title: "Godzilla", artist: "Eminem ft. Juice Wrld", src: "music/Godzilla.wav" },
        { title: "Got It On Me", artist: "Pop Smoke", src: "music/Got It On Me.wav" },
        { title: "Gucci Gang (Remix)", artist: "Joyner Lucas", src: "music/Gucci Gang (Remix) - Joyner Lucas.wav" },
        { title: "Higher", artist: "Creed", src: "music/Higher (Official HD Music Video).wav" },
        { title: "In the End", artist: "Linkin Park", src: "music/In the End - Linkin Park.wav" },
        { title: "Just A Dream", artist: "Nelly", src: "music/Just A Dream - Nelly.wav" },
        { title: "Hell & Back", artist: "Kid Ink", src: "music/Kid Ink - Hell & Back [Official Video].wav" },
        { title: "Kryptonite", artist: "Three Doors Down", src: "music/Kryptonite - Three Doors Down.wav" },
        { title: "Look at Me Now", artist: "Chris Brown ft. Lil Wayne, Busta Rhymes", src: "music/Look at Me Now (Official Video).wav" },
        { title: "Lovin On Me", artist: "Jack Harlow", src: "music/Lovin On Me - Jack Harlow.wav" },
        { title: "Lust", artist: "Lil Skies", src: "music/Lust - Lil Skies.wav" },
        { title: "Mind On My Murder", artist: "YNW Melly", src: "music/Mind On My Murder - YMW Melly.wav" },
        { title: "Mockingbird", artist: "Eminem", src: "music/Mockingbird - Eminem (lyrics).wav" },
        { title: "No Sleep", artist: "Wiz Khalifa", src: "music/No Sleep - Wiz Khalifa.wav" },
        { title: "Numb", artist: "Linkin Park", src: "music/Numb - Linkin Park.wav" },
        { title: "One Night", artist: "Lil Yachty", src: "music/One Night - Lil Yatchy.wav" },
        { title: "Red Roses", artist: "Lil Skies", src: "music/Red Roses - Lil Skies.wav" },
        { title: "Righteous", artist: "Juice Wrld", src: "music/Righteous - Juice Wrld.wav" },
        { title: "Run This Town", artist: "Jay-Z", src: "music/Run This Town - Jay Z.wav" },
        { title: "Scars", artist: "Papa Roach", src: "music/Scars - Papa Roach.wav" },
        { title: "Simple Man", artist: "Lynyrd Skynyrd", src: "music/Simple Man - Lynard Skynard.wav" },
        { title: "Smile Back", artist: "Mac Miller", src: "music/Smile Back- Mac Miller.wav" },
        { title: "Sugar, We're Goin Down", artist: "Fall Out Boy", src: "music/Sugar, We're Goin Down - Fall Out Boy.wav" },
        { title: "Superstar", artist: "Lupe Fiasco", src: "music/Superstar - Lupe Fiasco.wav" },
        { title: "Sweetest Girl (Dollar Bill)", artist: "Wyclef Jean", src: "music/Sweetest Girl (Dollar Bill) (Official Video).wav" },
        { title: "Whatever You Like", artist: "T.I.", src: "music/T.I. - Whatever You Like (Official Video).wav" },
        { title: "The Lox x Dej Loaf - Try Me (Remix)", artist: "The Lox & Dej Loaf", src: "music/The Lox x Dej Loaf - Try Me (Remix) Prod. By DDS.wav" },
        { title: "Animal I Have Become", artist: "Three Days Grace", src: "music/Three Days Grace - Animal I Have Become (Lyrics).wav" },
        { title: "Written In The Stars", artist: "Tinie Tempah", src: "music/Written In The Stars - Tinie Tempah.wav" },
        { title: "223s", artist: "YNW Melly ft. 9lokknine", src: "music/YNW Melly - 223s ft. 9lokknine [Official Video].wav" },
        { title: "Murder On My Mind", artist: "YNW Melly", src: "music/YNW Melly - Murder On My Mind [Official Video].wav" }
    ];

    function loadTrack(track) {
        title.textContent = track.title;
        artist.textContent = track.artist;
        audio.src = track.src;
        audio.load();
        audio.play();
    }

    function populatePlaylist() {
        playlist.forEach((track, index) => {
            const trackElement = document.createElement('li');
            trackElement.textContent = `${track.title} - ${track.artist}`;
            trackElement.onclick = () => loadTrack(track);
            playlistElement.appendChild(trackElement);
        });
    }

    populatePlaylist();
    loadTrack(playlist[0]); // Load the first track by default
});
