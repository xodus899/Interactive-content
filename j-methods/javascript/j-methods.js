"use strict";

$("img").css("width", "300px");
$("img").css("height", "200px");

$("img").attr("src", "https://c1.staticflickr.com/9/8339/28469527266_c9c04724e9_b.jpg");

$("img:first-of-type").attr("src", "https://www.forestholidays.co.uk/~/media/images/content%20block%20images/slideshow%20images/themes/wildlife/pine-marten-closeup.ashx?la=en ");

$("img:last-of-type").attr("src", "https://www.forestholidays.co.uk/~/media/images/content%20block%20images/slideshow%20images/themes/wildlife/pine-marten-closeup.ashx?la=en ");

$("input").val();

$("h1").addClass("correct");
$("h1").removeClass("correct");

$("li").addClass("wrong");
$("li").css("width", "50px");


$("li").first().toggleClass("done");
