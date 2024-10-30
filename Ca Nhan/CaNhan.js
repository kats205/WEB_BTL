function showSearchBox() {
    $('.search-left').addClass('hide');
    $('.search-full').removeClass('hide');
    $('.search').focus();
}

function showSearchOnLeave() {
    $('.search-left').removeClass('hide');
    $('.search-full').addClass('hide');
    $('.search-box').val('');
}
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
}
function openStab(evt, tabName) {
    var i, stabcontent, stablinks;
    stabcontent = document.getElementsByClassName("stabcontent");
    for (i = 0; i < stabcontent.length; i++) {
        stabcontent[i].style.display = "none";
    }
    stablinks = document.getElementsByClassName("stablinks");
    for (i = 0; i < stablinks.length; i++) {
        stablinks[i].className = stablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
}
