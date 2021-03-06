$(function () {
  $('.french').click(function() { 
    if (location.pathname.split('/')[2] && location.pathname.split('/')[3]) {
      window.location = "/fr/" + location.pathname.split('/')[2] + "/" + location.pathname.split('/')[3];
    } else if (location.pathname.split('/')[2]) {
      window.location = "/fr/" + location.pathname.split('/')[2];
    } else {
      window.location = "/fr/";
    }
    return false;
  });
});

$(function () {
  $('.english').click(function() { 
    if (location.pathname.split('/')[2] && location.pathname.split('/')[3]) {
      window.location = "/en/" + location.pathname.split('/')[2] + "/" + location.pathname.split('/')[3];
    } else if (location.pathname.split('/')[2]) {
      window.location = "/en/" + location.pathname.split('/')[2] + "/";
    } else {
      window.location = "/";
    }
    return false;
  });
});

$(function () {
  if (location.pathname.split('/')[3] == "") {
    $("#introduction").addClass("active-nav-item")
  } else if (location.pathname.split('/')[3] == "lra-survival") {
    $("#lra-survival").addClass("active-nav-item")
  } else if (location.pathname.split('/')[3] == "lra-force-capacity") {
    $("#lra-force-capacity").addClass("active-nav-item")
  } else if (location.pathname.split('/')[3] == "congo") {
    $("#congo").addClass("active-nav-item")
  } else if (location.pathname.split('/')[3] == "car") {
    $("#car").addClass("active-nav-item")
  } else if (location.pathname.split('/')[3] == "background") {
    $("#background").addClass("active-nav-item")
  } else {
    return false;
  }
  return false;
});

$(function () {
  if (location.pathname.split('/')[1] == "en-print" || location.pathname.split('/')[1] == "fr-print") {
    $('.download-language-top').hide()
    $('.next').hide()
  }
  return false;
});
