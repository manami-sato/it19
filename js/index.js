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

  function disableScroll(event) {
    event.preventDefault();
  }

  let courseWrap = $(".index__course--wrap");
  let styleWrap = $(".index__style--wrap");
  let userWrap = $(".index__user--wrap");
  let faqWrap = $(".index__faq--wrap");
  $.ajax({
    url: "https://click.ecc.ac.jp/ecc/msatou/products/it19.php",
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
    for (let i = 0; i < res.user.length - 1; i++) {
      userWrap.clone().insertAfter(userWrap);
    }
    for (let i = 0; i < res.user.length; i++) {
      let num = i + 3;
      let num1 = i + 1;
      let wrap =
        `.index__user--wrap:nth-child(` + num + `) .index__user--wrap--`;
      let courseData = res.user[i].course;
      let headlineData = res.user[i].headline;
      let textData = res.user[i].text;
      let iconData = `<img src="img/index_user_` + num1 + `.png">`;
      $(wrap + `course`).append(courseData + `受講`);
      $(wrap + `headline`).append(headlineData);
      $(wrap + `text`).append(textData);
      $(wrap + `icon`).append(iconData);
    }
    for (let i = 0; i < res.faq.length - 1; i++) {
      faqWrap.clone().insertAfter(faqWrap);
    }
    for (let i = 0; i < res.faq.length; i++) {
      let num = i + 2;
      let wrap = `.index__faq--wrap:nth-child(` + num + `) .index__faq--wrap--`;
      let qData = res.faq[i].question;
      let aData = res.faq[i].answer;
      $(wrap + `q`).append(qData);
      $(wrap + `a`).append(aData);
    }
    //
    // 学習スタイルのモーダル
    //
    const addContents = (i,num) => {
      let modalHead = `.index__modal--head--`;
      let modalWrap = `.index__modal--wrap--`;
      let titleData = res.style[i].title;
      let enData = res.style[i].en;
      let imgData = `<img src="img/index_style_` + num + `.png">`;
      let headlineData = res.style[i].headline;
      let textData = res.style[i].text;
      $(modalHead + `title`).append(titleData);
      $(modalHead + `en`).append(enData);
      $(modalWrap + `img`).append(imgData);
      $(modalWrap + `headline`).append(headlineData);
      $(modalWrap + `text`).append(textData);
    };
    const rmvContents = () => {
      $(".index__modal--head--title").empty();
      $(".index__modal--head--en").empty();
      $(".index__modal--wrap--img").empty();
      $(".index__modal--wrap--headline").empty();
      $(".index__modal--wrap--text").empty();
    };
    const styleWrapAccess = $(".index__style--wrap");
    for (let i = 0; i < styleWrapAccess.length; i++) {
      styleWrapAccess[i].onclick = function () {
        let count = i;
        let scrollY = window.pageYOffset; //モーダルの表示位置をトップに固定
        $(".index__modal").css("top", `${scrollY}px`);
        $(".index__modal").attr("id", "modalDisplay");
        addContents(i,i + 1);
        // スクロール禁止
        document.addEventListener("touchmove", disableScroll, {
          passive: false,
        });
        document.addEventListener("mousewheel", disableScroll, {
          passive: false,
        });
        $(document).on("click", ".index__modal--arrow--prev", function () {
          rmvContents();
          i--;
          if (i < 0) {
            i = styleWrapAccess.length - 1;
          }
          addContents(i,i + 1);
        });
        $(document).on("click", ".index__modal--arrow--next", function () {
          rmvContents();
          i++;
          if (i == styleWrapAccess.length) {
            i = 0;
          }
          addContents(i,i + 1);
        });
        $(document).on("click", ".index__modal--back", function () {
          // スクロール再開
          document.removeEventListener("touchmove", disableScroll, {
            passive: false,
          });
          document.removeEventListener("mousewheel", disableScroll, {
            passive: false,
          });
          //モーダル削除
          $(".index__modal").removeAttr("id");
          rmvContents();
        });
      };
    }
  });
}
