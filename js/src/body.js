$(function () {
    var arr = ['FhG3qDLX6dmL7yrrvs8nS-9PZtoL', 'FsZy4o9A28HxKm4bMPx9c9Noa2__', 'FrWj9ATP3Wip7Tl6xp5A9EIKHxDu', 'FuYxuHq8UIaEHX5DnoErdJSZ4O0H', 'Fih89AFiR9hKgyqEQwwpaz2KLZHJ', 'FvQ-37vTWk97QKlcRfRs7TVQUBJE', 'FjOHYY3YqLLWvggtHwG01XDFgm4m', 'FqiV-loUwkhsbSXtLau2-YgtjBjH', 'FsllVmLcoK1THK7E-5APk4rERsOn', 'FtcFGp1x91mDGf9b8YcrmfGv4uWp','FurBU1Vk6VwZUTTDWWyG5rUx6WL8'];
    var result = window.matchMedia('(min-width:1200px)');
    var random = parseInt(10 * Math.random());
    if (result.matches) {
        $("body").css("background", "url(http://static.ledouya.com/" + arr[random] + ")  50% 50% fixed");
    }
})