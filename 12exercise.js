// var  and str var
// agr link mein whotext hai toh print karana hai warna nahi
a = document.links;
Array.from(a).forEach(function (element) {
  if (element.href.includes("harry")) {
    console.log(element);
  }
});
