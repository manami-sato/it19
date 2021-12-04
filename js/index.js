{
  (function (d) {
    var config = {
        kitId: "wtv6gya",
        scriptTimeout: 3000,
        async: true,
      },
      h = d.documentElement,
      t = setTimeout(function () {
        h.className =
          h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
      }, config.scriptTimeout),
      tk = d.createElement("script"),
      f = false,
      s = d.getElementsByTagName("script")[0],
      a;
    h.className += " wf-loading";
    tk.src = "https://use.typekit.net/" + config.kitId + ".js";
    tk.async = true;
    tk.onload = tk.onreadystatechange = function () {
      a = this.readyState;
      if (f || (a && a != "complete" && a != "loaded")) return;
      f = true;
      clearTimeout(t);
      try {
        Typekit.load(config);
      } catch (e) {}
    };
    s.parentNode.insertBefore(tk, s);
  })(document);
  // click
  // (function (d) {
  //   var config = {
  //       kitId: "tms0xly",
  //       scriptTimeout: 3000,
  //       async: true,
  //     },
  //     h = d.documentElement,
  //     t = setTimeout(function () {
  //       h.className =
  //         h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
  //     }, config.scriptTimeout),
  //     tk = d.createElement("script"),
  //     f = false,
  //     s = d.getElementsByTagName("script")[0],
  //     a;
  //   h.className += " wf-loading";
  //   tk.src = "https://use.typekit.net/" + config.kitId + ".js";
  //   tk.async = true;
  //   tk.onload = tk.onreadystatechange = function () {
  //     a = this.readyState;
  //     if (f || (a && a != "complete" && a != "loaded")) return;
  //     f = true;
  //     clearTimeout(t);
  //     try {
  //       Typekit.load(config);
  //     } catch (e) {}
  //   };
  //   s.parentNode.insertBefore(tk, s);
  // })(document);

  let courseWrap = $(".index__course--wrap");
  let styleWrap = $(".index__style--wrap");
  $.ajax({
    url: "https://click.ecc.ac.jp/ecc/msatou/it19/js/products.php",
    method: "GET",
    dataType: "json",
    timeout: 3000,
    cache: false,
  }).done(function (res) {
    for (let i = 0; i < res.course.length - 1; i++) {
      courseWrap.clone().insertAfter(courseWrap);
    }
    for (let i = 0; i < res.course.length; i++) {
      let num = i + 1;
      let wrap =
        `.index__course--wrap:nth-child(` + num + `) .index__course--wrap--`;
      let titleData = res.course[i].title;
      let descriptionData = res.course[i].description;
      let imgData = `<img src="img/index_course_` + num + `.png">`;
      let periodData = res.course[i].month;
      let contentsData = res.course[i].contents;
      $(wrap + `title`).append(titleData);
      $(wrap + `description`).append(descriptionData);
      $(wrap + `img`).append(imgData);
      $(wrap + `period`).append(periodData);
      $(wrap + `contents`).append(contentsData);
    }
    for (let i = 0; i < res.style.length - 1; i++) {
      styleWrap.clone().insertAfter(styleWrap);
    }
    for (let i = 0; i < res.style.length; i++) {
      let num = i + 1;
      let wrap =
      `.index__style--wrap:nth-child(` + num + `) .index__style--wrap--`;
      let titleData = res.style[i].title;
      let enData = res.style[i].en;
      let imgData = `<img src="img/index_style_` + num + `.png">`;
      $(wrap + `title`).append(titleData);
      $(wrap + `en`).append(enData);
      $(wrap + `figure div`).append(imgData);
    }
  });
}
