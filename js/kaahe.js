(function($){
  'use strict';

  var data = [
    {
      title: 'مشاكل الكلية عند مرضى السكري',
      iconLink: 'https://www.kaahe.org/en/ArabicSampleModules/modules/diabetes/dbf401a1/si.jpg',
      overviewLink: 'https://www.kaahe.org/en/ArabicSampleModules/modules/diabetes/dbf401a1/overview.jpg',
      content: ' إذا كان المرءُ مصاباً بمرض السُّكري، فإنَّ مستويات السكَّر في الدم تكون مرتفعة. ومع مرور الزمن، يمكن أن يؤدِّي هذا إلى الإضرار بالكليتين. والكليتان هما المِصفاتان اللتان تنظِّفان الدم؛ فإذا أصيبتا بالأذى، فإنَّ السوائل والفضلات تتراكم في الجسم بدلاً من طرحها إلى الخارج.',
      link: 'https://www.kaahe.org/health/ar/426-%D9%85%D8%B4%D8%A7%D9%83%D9%84-%D8%A7%D9%84%D9%83%D9%84%D9%8A%D8%A9-%D8%B9%D9%86%D8%AF-%D9%85%D8%B1%D8%B6%D9%89-%D8%A7%D9%84%D8%B3%D9%83%D8%B1%D9%8A.html'
    },
    {
      title: 'مشاكل الأعصاب السكرية',
      iconLink: 'https://www.kaahe.org/en/ArabicSampleModules/modules/diabetes/dbf501a1/si.jpg',
      overviewLink: 'https://www.kaahe.org/en/ArabicSampleModules/modules/diabetes/dbf501a1/overview.jpg',
      content: 'تكون مُستويات سُكَّر الدّم مُرتفعةً جدَّاً عند الإصابة بالسُّكَّريِّ؛ ويمكن لهذا، بمضيِّ الوقت، أن يتلفَ الأعصابَ أو الأوعيَة الدَّمويَّة التي تجلب الأكسجين إلى الأعصاب. قد تَتوقَّف الأعصابُ التَّالفة عن بعث الرَّسائل، أو قد تبعث الرَّسائِل بِبطء أو في أوقات خاطئة.',
      link: 'https://www.kaahe.org/health/ar/427-%D9%85%D8%B4%D8%A7%D9%83%D9%84-%D8%A7%D9%84%D8%A3%D8%B9%D8%B5%D8%A7%D8%A8-%D8%A7%D9%84%D8%B3%D9%83%D8%B1%D9%8A%D8%A9.html',
    },
    {
      title: 'نصائح لمرضى السكري قبل السفر',
      iconLink: 'https://www.kaahe.org/workflow/prod/media/4303/icon.jpg',
      overviewLink: 'https://www.kaahe.org/workflow/prod/media//4303/overview.jpg',
      content: 'لا ينبغي أن يمنعَ وجودُ مرض السكَّري من السفر، والاستمتاع بالعطلات؛ فالتخطيطُ للمستقبل هو المفتاح نحو قضاء وقت رائع في الخارج، ونحو التعامل مع أيَّة مشاكل محتملة مع مرض السكَّري.',
      link: 'https://www.kaahe.org/health/ar/4303-%D9%86%D8%B5%D8%A7%D8%A6%D8%AD-%D9%84%D9%85%D8%B1%D8%B6%D9%89-%D8%A7%D9%84%D8%B3%D9%83%D8%B1%D9%8A-%D9%82%D8%A8%D9%84-%D8%A7%D9%84%D8%B3%D9%81%D8%B1.html',
    },
    {
      title: 'السكري من النوع الأول عند الأطفال',
      iconLink: 'https://www.kaahe.org/en/ArabicSampleModules/modules/diabetes/db0302a1//si.jpg',
      overviewLink: 'https://www.kaahe.org/en/ArabicSampleModules/modules/diabetes/db0302a1//overview.jpg',
      content: 'يعني وجودُ مرض السكَّري أنَّ سكَّر الدَّم مرتفع كثيراً. وفي حالة النوع الأول من مرض السكَّري، يعجز البنكرياس عن صُنع الأنسولين، وهو الهرمونُ الذي يساعد على دخول السكَّر إلى الخلايا ليعطيها الطاقة. ومن دون وجود الأنسولين، يبقى الكثير من السكَّر في الدّم.',
      link: 'https://www.kaahe.org/health/ar/945-%D8%A7%D9%84%D8%B3%D9%83%D8%B1%D9%8A-%D9%85%D9%86-%D8%A7%D9%84%D9%86%D9%88%D8%B9-%D8%A7%D9%84%D8%A3%D9%88%D9%84-%D8%B9%D9%86%D8%AF-%D8%A7%D9%84%D8%A3%D8%B7%D9%81%D8%A7%D9%84.html',
    },
    {
      title: 'الداء السكري',
      iconLink: 'https://www.kaahe.org/en/ArabicSampleModules/modules/infectd/id0201a2//si.jpg',
      overviewLink: 'https://www.kaahe.org/en/ArabicSampleModules/modules/infectd/id0201a2//overview.jpg',
      content: 'الداء السكري هو مرض يجعل من الصعب على خلايا الجسم أن تحصل على الجلوكوز اللازم لإنتاج الطاقة. وهنالك طريقتان يمكن من خلالهما أن يؤدي الداء السكري إلى جعل تلقي الخلايا ما يكفيها من الجلوكوز أمراً صعباً. الأولى هي عدم إنتاج الإنسولين في البنكرياس. وبما أن الإنسولين ضروري من أجل "فتح المُستقبلات"، فإن الجلوكوز يعجز عن دخول الخلايا.',
      link: 'https://www.kaahe.org/health/ar/25948-%D8%A7%D9%84%D8%AF%D8%A7%D8%A1-%D8%A7%D9%84%D8%B3%D9%83%D8%B1%D9%8A.html',
    },
    {
      title: 'مرض السكري والعناية بالقدم',
      iconLink: 'https://www.kaahe.org/en/ArabicSampleModules/modules/diabetes/db0201a2//si.jpg',
      overviewLink: 'https://www.kaahe.org/en/ArabicSampleModules/modules/diabetes/db0201a2//overview.jpg',
      content: 'الداء السكري هو مرض يسبب عجز المريض عن إنتاج الإنسولين الكافي لضبط مستويات الغلوكوز. من الممكن أن يسبب هذا المرض مشكلات في القدمين. وقد يسبب أضراراً عصبية. كما يمكن أن يسبب تضيُّق الأوعية الدموية في القدمين.',
      link: 'https://www.kaahe.org/health/ar/18702-%D9%85%D8%B1%D8%B6-%D8%A7%D9%84%D8%B3%D9%83%D8%B1%D9%8A-%D9%88%D8%A7%D9%84%D8%B9%D9%86%D8%A7%D9%8A%D8%A9-%D8%A8%D8%A7%D9%84%D9%82%D8%AF%D9%85.html',
    },
    {
      title: 'أخذ حقن الإنسولين',
      iconLink: 'https://www.kaahe.org/en/ArabicSampleModules/modules/diabetes/db0601a2//si.jpg',
      overviewLink: 'https://www.kaahe.org/en/ArabicSampleModules/modules/diabetes/db0601a2//overview.jpg',
      content: 'الداء السكري هو مرض يصيب ملايين الأمريكيين في كل عام. وإذا أخبر الطبيب مريضه أنه مصاب بالداء السكري فقد يكون الإنسولين مفيداً في ضبط مستوى السكر لديه. إن حقن الإنسولين آمنة جداً، وهي ليست مؤلمة كثيراً. وتساعد هذه الحقن في ضبط الداء السكري وفي الوقاية من مضاعفاته. ',
      link: 'https://www.kaahe.org/health/ar/18704-%D8%A3%D8%AE%D8%B0-%D8%AD%D9%82%D9%86-%D8%A7%D9%84%D8%A5%D9%86%D8%B3%D9%88%D9%84%D9%8A%D9%86.html',
    },
    {
      title: 'الداء السكري وتخطيط وجبات الطعام',
      iconLink: 'https://www.kaahe.org/en/ArabicSampleModules/modules/diabetes/db0501a2//si.jpg',
      overviewLink: 'https://www.kaahe.org/en/ArabicSampleModules/modules/diabetes/db0501a2//overview.jpg',
      content: 'هناك علاقة وثيقة بين ما يأكله المرء وبين كمية السكر في دمه. أن اختيارات الطعام السليمة تساعد المرء في ضبط مستوى سكر الدم وفي ضبط الداء السكري. يُعتبر مخطط الوجبات دليلاً يُخبر المرء عن أنواع الطعام التي يجب أن يتناولها في الوجبات الرئيسية وفي الوجبات الفرعية الخفيفة.',
      link: 'https://www.kaahe.org/health/ar/21594-%D8%A7%D9%84%D8%AF%D8%A7%D8%A1-%D8%A7%D9%84%D8%B3%D9%83%D8%B1%D9%8A-%D9%88%D8%AA%D8%AE%D8%B7%D9%8A%D8%B7-%D9%88%D8%AC%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D8%B7%D8%B9%D8%A7%D9%85.html',
    }
  ];

  $('#kaahe-content').click(function(event){
    $('.secTitle').html('السكري');
    $('.listingTbl').html(buildHTML());

    function buildHTML() {
      var html = '<tbody><tr><td><tr><td>&nbsp;</td></tr><tr><td><table>';

      for (var i=0; i<data.length; i++){
        if (i%2 == 0){
          html += '<tr>';
        }
        html += '<td><a class="kaahe-content" id-content="'+ i +'" href="#"><img src="' + data[i].iconLink + '" /></a></td><td>' +
          '<a class="kaahe-content" id-content="'+ i +'" href="#">' + data[i].title + '</a></td>';
        if (i%2 != 0){
          html += '</tr>';
        }
      }
      html += '</td></tr><tr><td>&nbsp;</td></tr><tr><td colspan="4">جميع الحقوق محفوظة © 2015 لموسوعة الملك عبدالله بن عبدالعزيز العربية للمحتوى الصحي.';
      html += '</td></tr><tr><td>&nbsp;</td></tr></table></tbody>';
      return html;
    }

    $('.kaahe-content').live('click', function(){
      var idContent = $(this).attr('id-content');
      $('.listingTbl').html(buildContentHTML());

      function buildContentHTML(){
        var html = '<tbody><tr><td><h3 style="text-align:justify;" class="ms-standardheader ms-WPTitle">';
        html += '<a accesskey="W" href="#">	<nobr><span>' + data[idContent].title + '</span></nobr></a>';
        html += '</h3></td></tr><tr><td>&nbsp;</td></tr><tr><td><table><tr><td>';

        html += '<img style="float: right" src="' + data[idContent].overviewLink + '" /><p>' + data[idContent].content + '</p>';
        html += '<p><a target="_blank" href="' + data[idContent].link + '">إقرأ المزيد</a></p>';

        html += '</td></tr><tr><td>&nbsp;</td></tr><tr><td colspan="4">جميع الحقوق محفوظة © 2015 لموسوعة الملك عبدالله بن عبدالعزيز العربية للمحتوى الصحي.';
        html += '</td></tr><tr><td>&nbsp;</td></tr></table></tbody>';
        return html;
      }
    });
  });

})(jQuery);
