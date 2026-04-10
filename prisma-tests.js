// ══════════════ PRISMA MASTER TESTS DATABASE ══════════════
// مصدر الحقيقة الوحيد لبيانات التحاليل — يُستخدم في الداشبورد والعروض والباقات
// عند إضافة أو تعديل أو حذف تحليل: عدّل هذا الملف فقط وكل الصفحات تتحدث تلقائياً
// ══════════════════════════════════════════════════════════

var PRISMA_MASTER_TESTS = [
  {
    "id": "الحديد",
    "name_ar": "الحديد",
    "code": "الحديد",
    "group": "Iron Total",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "",
    "price": 15
  },
  {
    "id": "فيتامين ب12",
    "name_ar": "الفيتامينات",
    "code": "فيتامين ب12",
    "group": "Vitamin B12",
    "packages": [
      "exploratory"
    ],
    "content_ar": ""
  },
  {
    "id": "STI PCR",
    "name_ar": "الاتهابات المعدية جنسيا",
    "code": "STI PCR",
    "price": 389,
    "group": "الأمراض المعدية",
    "content_ar": "المسح الجزيئي الشامل والأسرع للكشف عن مسببات الأمراض المنقولة جنسياً.",
    "packages": []
  },
  {
    "id": "Treponema pallidum",
    "name_ar": "الزهري (تريبونيما باليدوم)",
    "code": "Treponema pallidum",
    "group": "الأمراض المعدية",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "فحص كيميائي حيوي متطور للكشف عن بكتيريا الزهري وضمان الأمان الصحي.",
    "price": 49
  },
  {
    "id": "Neisseria gonorrhoeae",
    "name_ar": "السيلان (النيسيريا جونوريا)",
    "code": "Neisseria gonorrhoeae",
    "group": "الأمراض المعدية",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "الاختبار المرجعي للكشف عن بكتيريا السيلان لضمان التشخيص السريع والدقيق.",
    "price": 49
  },
  {
    "id": "Chlamydia trachomatis",
    "name_ar": "الكلاميديا",
    "code": "Chlamydia trachomatis",
    "group": "الأمراض المعدية",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "اختبار الكشف عن بكتيريا الكلاميديا لضمان الصحة الإنجابية والوقاية من المضاعفات.",
    "price": 49
  },
  {
    "id": "Haemophilus ducreyi",
    "name_ar": "بكتيريا الدونوفانوز (الهيموفيلس دوكري)",
    "code": "Haemophilus ducreyi",
    "group": "الأمراض المعدية",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "فحص مخبري متخصص لتشخيص بكتيريا القريح المسببة للقرح الزهرية الكاذبة.",
    "price": 49
  },
  {
    "id": "Trichomonas vaginalis",
    "name_ar": "تريكوموناس (عدوى الترايكوموناس)",
    "code": "Trichomonas vaginalis",
    "group": "الأمراض المعدية",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "اختبار الكشف عن طفيل التريكوموناس لضمان علاج فعال للالتهابات التناسلية.",
    "price": 49
  },
  {
    "id": "HIV Ag/Ab for type 1 & 2",
    "name_ar": "فحص فيروس نقص المناعة",
    "code": "HIV Ag/Ab for type 1 & 2",
    "price": 69,
    "group": "الأمراض المعدية",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "تقنية متطورة للكشف المبكر عن فيروس نقص المناعة المكتسب لضمان الأمان التام."
  },
  {
    "id": "HBS Antigen",
    "name_ar": "فيروس التهاب الكبد الوبائي باء",
    "code": "HBS Antigen",
    "price": 49,
    "group": "الأمراض المعدية",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "فحص أساسي للكشف عن التهاب الكبد الوبائي باء لضمان سلامة وظائف الكبد."
  },
  {
    "id": "Hepatitis C Virus Antibodies",
    "name_ar": "فيروس التهاب الكبد الوبائي سي",
    "code": "Hepatitis C Virus Antibodies",
    "price": 49,
    "group": "الأمراض المعدية",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "اختبار دقيق للكشف عن الأجسام المضادة لفيروس الكبد سي لضمان التشخيص السليم."
  },
  {
    "id": "Herpes Simplex Virus Type 1",
    "name_ar": "فيروس الهربس البسيط النوع الأول (HSV-1)",
    "code": "Herpes Simplex Virus Type 1",
    "price": 49,
    "group": "الأمراض المعدية",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "فحص متخصص للكشف عن الأجسام المضادة لفيروس الهربس البسيط النوع الأول."
  },
  {
    "id": "Herpes Simplex Virus Type 2",
    "name_ar": "فيروس الهربس البسيط النوع الثاني (HSV-2)",
    "code": "Herpes Simplex Virus Type 2",
    "price": 49,
    "group": "الأمراض المعدية",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "فحص دقيق للكشف عن الإصابة بفيروس الهربس التناسلي النوع الثاني."
  },
  {
    "id": "Mycoplasma genitalium",
    "name_ar": "مايكوبلازما جينيتاليوم",
    "code": "Mycoplasma genitalium",
    "group": "الأمراض المعدية",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "تحليل دقيق للكشف عن بكتيريا الميكوبلازما المرتبطة بالتهابات الجهاز البولي والتناسلي.",
    "price": 49
  },
  {
    "id": "Mycoplasma hominis",
    "name_ar": "مايكوبلازما هومينيس",
    "code": "Mycoplasma hominis",
    "group": "الأمراض المعدية",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "فحص متخصص لتشخيص عدوى الميكوبلازما ودعم صحة الجهاز الإنجابي.",
    "price": 49
  },
  {
    "id": "Ureaplasma urealyticum",
    "name_ar": "يوريابلازما",
    "code": "Ureaplasma urealyticum",
    "group": "الأمراض المعدية",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "تحليل دقيق للكشف عن بكتيريا اليوريا بلازما لتقييم صحة المسالك البولية والتناسلية.",
    "price": 49
  },
  {
    "id": "Total IgE",
    "name_ar": "اختبار الأجسام المضادة",
    "code": "Total IgE",
    "price": 69,
    "group": "الالتهابات والمناعة",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "تحليل شامل لتقييم مستويات الحساسية العامة واستجابة الجهاز المناعي للمثيرات."
  },
  {
    "id": "RF",
    "name_ar": "تحليل الروماتيزم",
    "code": "RF",
    "price": 49,
    "group": "الالتهابات والمناعة",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "اختبار تخصصي للكشف عن الأجسام المضادة المرتبطة بالروماتويد وأمراض المفاصل."
  },
  {
    "id": "CRP",
    "name_ar": "مؤشر للالتهابات في الجسم",
    "code": "CRP",
    "group": "الالتهابات والمناعة",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "فحص بروتيني عالي الحساسية للكشف المبكر عن الالتهابات الحادة ومتابعتها.",
    "price": 29
  },
  {
    "id": "ESR",
    "name_ar": "معدل الترسيب",
    "code": "ESR",
    "group": "الالتهابات والمناعة",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "مؤشر تقليدي هام للكشف عن وجود نشاط التهابي غير محدد في الجسم.",
    "price": 15
  },
  {
    "id": "PSA Ratio (Free/Total)",
    "name_ar": "نسبة البروستات الحر إلى الكلي",
    "code": "PSA Ratio (Free/Total)",
    "price": 59,
    "group": "البروستات",
    "packages": [
      "exploratory_plus"
    ],
    "content_ar": "نسبة دقيقة تزيد من دقة تشخيص اضطرابات البروستات"
  },
  {
    "id": "PSA (Free)",
    "name_ar": "هرمون البروستات الحر",
    "code": "PSA (Free)",
    "price": 59,
    "group": "البروستات",
    "packages": [
      "exploratory_plus"
    ],
    "content_ar": "قياس مستوى البروستاتا الحر للمساعدة في التمييز بين حالات التضخم الحميد والأورام."
  },
  {
    "id": "PSA (Total)",
    "name_ar": "هرمون البروستات الكلي",
    "code": "PSA (Total)",
    "price": 59,
    "group": "البروستات",
    "packages": [
      "exploratory_plus"
    ],
    "content_ar": "الفحص المرجعي للاطمئنان على صحة البروستاتا والكشف المبكر عن تضخمها."
  },
  {
    "id": "Stool Examination",
    "name_ar": "تحليل براز",
    "code": "Stool Examination",
    "price": 20,
    "group": "البول والبراز",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "تحليل البراز للكشف عن الطفيليات والديدان واضطرابات الجهاز الهضمي."
  },
  {
    "id": "Urine Examination",
    "name_ar": "تحليل بول",
    "code": "Urine Examination",
    "price": 20,
    "group": "البول والبراز",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "تحليل البول الشامل للكشف عن التهابات المسالك البولية ووظائف الكلى."
  },
  {
    "id": "Stool Culture",
    "name_ar": "مزرعة براز",
    "code": "Stool Culture",
    "price": 40,
    "group": "البول والبراز",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "زراعة البراز للكشف عن البكتيريا المسببة للتسمم الغذائي والالتهابات المعوية."
  },
  {
    "id": "Urine Culture",
    "name_ar": "مزرعة بول",
    "code": "Urine Culture",
    "price": 39,
    "group": "البول والبراز",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "زراعة البول لتحديد نوع البكتيريا المسببة للالتهاب واختيار المضاد الحيوي الأمثل."
  },
  {
    "id": "KOH hair",
    "name_ar": "اختبار فطريات الاظافر",
    "code": "KOH hair",
    "price": 49,
    "group": "الجلدية والشعر",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "فحص مجهري متخصص للكشف عن العدوى الفطرية في الجلد والشعر والأظافر."
  },
  {
    "id": "Calprotectin stool",
    "name_ar": "التهاب الأمعاء والقولون في البراز",
    "code": "Calprotectin stool",
    "price": 219,
    "group": "الجهاز الهضمي",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "مؤشر بروتيني دقيق للتمييز بين القولون العصبي والتهابات الأمعاء المناعية."
  },
  {
    "id": "Occult Blood In Stool",
    "name_ar": "الدم الخفي في البراز",
    "code": "Occult Blood In Stool",
    "price": 40,
    "group": "الجهاز الهضمي",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "فحص الدم الخفي في البراز للكشف المبكر عن تقرحات أو أورام القولون."
  },
  {
    "id": "H. pylori Antigen in Stool",
    "name_ar": "جرثومة المعدة في البراز",
    "code": "H. pylori Antigen in Stool",
    "price": 79,
    "group": "الجهاز الهضمي",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "الاختبار السريع والدقيق للكشف عن وجود جرثومة المعدة النشطة."
  },
  {
    "id": "Urea Breath Test",
    "name_ar": "فحص جرثومة المعدة عن طريق التنفس",
    "code": "Urea Breath Test",
    "price": 219,
    "group": "الجهاز الهضمي",
    "content_ar": "الفحص الذهبي (اختبار النفس) للكشف عن جرثومة المعدة بدقة وبدون ألم.",
    "packages": []
  },
  {
    "id": "Iron Total",
    "name_ar": "الحديد",
    "code": "Iron Total",
    "price": 15,
    "group": "الحديد",
    "packages": [
      "exploratory"
    ],
    "content_ar": "قياس مستوى الحديد المتاح في الدم لدعم إنتاج خلايا الدم الحمراء."
  },
  {
    "id": "UIBC",
    "name_ar": "الحديد الغير مرتبط",
    "code": "UIBC",
    "group": "الحديد",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "تحليل السعة غير المشبعة للارتباط بالحديد لتقييم كفاءة استهلاك الحديد في الجسم.",
    "price": 40
  },
  {
    "id": "Transferrin Saturation",
    "name_ar": "تشبع الحديد",
    "code": "Transferrin Saturation",
    "price": 89,
    "group": "الحديد",
    "content_ar": "تقييم النسبة المئوية لتشبع الترانسفيرين لضمان النقل الصحيح للحديد.",
    "packages": []
  },
  {
    "id": "Serum Transferrin",
    "name_ar": "قدرة الجسم على نقل الحديد",
    "code": "Serum Transferrin",
    "price": 89,
    "group": "الحديد",
    "content_ar": "فحص مستوى البروتين الناقل للحديد لتقييم الحالة التغذوية والتمثيل الغذائي.",
    "packages": []
  },
  {
    "id": "TIBC",
    "name_ar": "قدرة الحديد على الارتباط",
    "code": "TIBC",
    "group": "الحديد",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "قياس قدرة الدم الكلية على الارتباط بالحديد لتشخيص أنواع الأنيميا المختلفة.",
    "price": 25
  },
  {
    "id": "Ferritin",
    "name_ar": "مخزون الحديد",
    "code": "Ferritin",
    "price": 49,
    "group": "الحديد",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "الاختبار الأدق لتقييم مخزون الحديد في الجسم والكشف عن حالات النقص المزمن."
  },
  {
    "id": "HbA1C",
    "name_ar": "السكر التراكمي",
    "code": "HbA1C",
    "price": 69,
    "group": "السكر التراكمي",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "تحليل السكر التراكمي، المعيار الذهبي لمتابعة انضباط السكر خلال الأشهر الثلاثة الماضية."
  },
  {
    "id": "BP",
    "name_ar": "ضغط الدم",
    "code": "BP",
    "group": "العلامات الحيوية",
    "content_ar": "قياس ضغط الدم لمراقبة صحة القلب والشرايين والوقاية من المضاعفات.",
    "packages": []
  },
  {
    "id": "Heart Rate",
    "name_ar": "نبض القلب",
    "code": "Heart Rate",
    "group": "العلامات الحيوية",
    "content_ar": "متابعة نبض القلب لضمان استقرار الوظائف الحيوية والنشاط البدني.",
    "packages": []
  },
  {
    "id": "SpO₂",
    "name_ar": "نسبة الأكسجين  في الدم",
    "code": "SpO₂",
    "group": "العلامات الحيوية",
    "content_ar": "قياس نسبة تشبع الأكسجين في الدم لتقييم كفاءة الجهاز التنفسي.",
    "packages": []
  },
  {
    "id": "TSH",
    "name_ar": "الهرمون المحفز للغدة الدرقية",
    "code": "TSH",
    "price": 49,
    "group": "الغدة الدرقية",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "الاختبار الأول والأساسي لتقييم كفاءة عمل الغدة الدرقية وتنظيم طاقة الجسم."
  },
  {
    "id": "FREE (T3)",
    "name_ar": "هرمون الغدة الدرقية الحر ٣",
    "code": "FREE (T3)",
    "price": 49,
    "group": "الغدة الدرقية",
    "content_ar": "فحص المستوى الفعال من هرمون الغدة الدرقية لتقييم حالات فرط النشاط بدقة.",
    "packages": []
  },
  {
    "id": "FREE (T4)",
    "name_ar": "هرمون الغدة الدرقية الحر ٤",
    "code": "FREE (T4)",
    "price": 49,
    "group": "الغدة الدرقية",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "قياس الهرمون النشط للغدة الدرقية المسؤول عن تنظيم عمليات التمثيل الغذائي."
  },
  {
    "id": "Folate (vitamin B9)",
    "name_ar": "حمض الفوليك",
    "code": "Folate (vitamin B9)",
    "price": 59,
    "group": "الفيتامينات",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "اختبار ضروري لتقييم مستويات حمض الفوليك الهام لنمو الخلايا الصحي."
  },
  {
    "id": "Vitamin B12",
    "name_ar": "فيتامين ب12",
    "code": "Vitamin B12",
    "price": 49,
    "group": "الفيتامينات",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "فحص حيوي لضمان سلامة الجهاز العصبي والوقاية من حالات فقر الدم."
  },
  {
    "id": "Vitamin D",
    "name_ar": "فيتامين دال",
    "code": "Vitamin D",
    "price": 79,
    "group": "الفيتامينات",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "تحليل أساسي لتقييم مستويات فيتامين الشمس الضروري لقوة العظام والمناعة."
  },
  {
    "id": "K",
    "name_ar": "البوتاسيوم",
    "code": "K",
    "price": 15,
    "group": "المعادن",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "فحص حيوي لضمان انتظام ضربات القلب وسلامة الأداء العضلي والعصبي."
  },
  {
    "id": "Zinc",
    "name_ar": "الزنك",
    "code": "Zinc",
    "price": 39,
    "group": "المعادن",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "فحص مستوى الزنك الأساسي لتقوية الجهاز المناعي وسرعة التئام الجروح."
  },
  {
    "id": "Na",
    "name_ar": "الصوديوم",
    "code": "Na",
    "price": 15,
    "group": "المعادن",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "تحليل محوري لضبط ضغط الدم وتوازن السوائل وسلامة وظائف الأعصاب."
  },
  {
    "id": "Ph",
    "name_ar": "الفسفور",
    "code": "Ph",
    "group": "المعادن",
    "content_ar": "اختبار هام لتقييم صحة العظام والأسنان وإنتاج الطاقة في الخلايا.",
    "packages": [],
    "price": 15
  },
  {
    "id": "Ca",
    "name_ar": "الكالسيوم",
    "code": "Ca",
    "price": 15,
    "group": "المعادن",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "فحص أساسي لسلامة العظام والأسنان وضمان توازن الوظائف الحيوية."
  },
  {
    "id": "CL",
    "name_ar": "الكلوريد",
    "code": "CL",
    "price": 15,
    "group": "المعادن",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "اختبار ضروري للحفاظ على توازن السوائل والحموضة داخل خلايا الجسم."
  },
  {
    "id": "Mg",
    "name_ar": "المغنيسيوم",
    "code": "Mg",
    "price": 15,
    "group": "المعادن",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "تحليل المعدن الضروري لأكثر من ثلاثمائة تفاعل حيوي في الجسم، منها دعم الأعصاب."
  },
  {
    "id": "Copper",
    "name_ar": "النحاس",
    "code": "Copper",
    "price": 119,
    "group": "المعادن",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "قياس مستوى النحاس الضروري لإنتاج الطاقة وتكوين النسيج الضام."
  },
  {
    "id": "Uric acid",
    "name_ar": "حمض اليوريك",
    "code": "Uric acid",
    "price": 10,
    "group": "المعادن",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "فحص دقيق للكشف عن مستويات الأملاح للوقاية من النقرس وحصوات الكلى."
  },
  {
    "id": "FSH",
    "name_ar": "المنظم للحويصلات المنوية",
    "code": "FSH",
    "group": "الهرمونات",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "فحص هرمون تحفيز الحويصلات لتقييم صحة الحيوانات المنوية والخصوبة عند الرجال.",
    "price": 49
  },
  {
    "id": "LH",
    "name_ar": "لمنظم للغدد التناسلية",
    "code": "LH",
    "group": "الهرمونات",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "اختبار الهرمون المنشط للغدد التناسلية لتقييم انتظام الإباضة ودعم الخصوبة.",
    "price": 49
  },
  {
    "id": "AMH",
    "name_ar": "مخزون البويضات",
    "code": "AMH",
    "price": 199,
    "group": "الهرمونات",
    "packages": [
      "exploratory"
    ],
    "content_ar": "تحليل مخزون المبيض، الاختبار الأدق لتقييم القدرة الإنجابية الحالية والمستقبلية."
  },
  {
    "id": "Follicle-stimulating Hormone (FSH)",
    "name_ar": "هرمون التبويض١",
    "code": "Follicle-stimulating Hormone (FSH)",
    "group": "الهرمونات",
    "packages": [
      "exploratory"
    ],
    "content_ar": "",
    "price": 49
  },
  {
    "id": "Luteinizing Hormone (LH)",
    "name_ar": "هرمون التبويض٢",
    "code": "Luteinizing Hormone (LH)",
    "group": "الهرمونات",
    "packages": [
      "exploratory"
    ],
    "content_ar": "",
    "price": 49
  },
  {
    "id": "Prolactin",
    "name_ar": "هرمون الحليب",
    "code": "Prolactin",
    "price": 49,
    "group": "الهرمونات",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "قياس هرمون الحليب لتقييم اضطرابات الدورة الشهرية والقدرة الإنجابية."
  },
  {
    "id": "Testosterone Free",
    "name_ar": "هرمون الذكورة الحر",
    "code": "Testosterone Free",
    "price": 89,
    "group": "الهرمونات",
    "packages": [
      "exploratory_plus"
    ],
    "content_ar": "قياس الجزء الفعال والنشط حيوياً من هرمون التستوستيرون في الجسم."
  },
  {
    "id": "DHEA-S",
    "name_ar": "هرمون نمو الشعر",
    "code": "DHEA-S",
    "price": 79,
    "group": "الهرمونات",
    "packages": [],
    "content_ar": "قياس مستوى هرمون ديهيدرو إيبي أندروستيرون سلفات لتقييم نشاط الغدة الكظرية وتأثيره على نمو الشعر والأندروجينات."
  },
  {
    "id": "Testosterone Total",
    "name_ar": "هرمون الذكورة الكلي",
    "code": "Testosterone Total",
    "price": 49,
    "group": "الهرمونات",
    "packages": [
      "exploratory_plus"
    ],
    "content_ar": "قياس المستوى الكلي لهرمون الذكورة لتقييم الصحة الجنسية والقدرة البدنية."
  },
  {
    "id": "DHEA",
    "name_ar": "هرمون الغدة الكظرية",
    "code": "DHEA",
    "price": 79,
    "group": "الهرمونات",
    "content_ar": "قياس هرمون الغدة الكظرية لتقييم وظائف الغدة الكظرية والتوازن الهرموني.",
    "packages": []
  },
  {
    "id": "Estradiol",
    "name_ar": "هرمون جودة البويضات",
    "code": "Estradiol",
    "price": 49,
    "group": "الهرمونات",
    "packages": [
      "exploratory"
    ],
    "content_ar": ""
  },
  {
    "id": "Progesterone",
    "name_ar": "هرمون مخزون البويضات",
    "code": "Progesterone",
    "price": 49,
    "group": "الهرمونات",
    "packages": [
      "exploratory"
    ],
    "content_ar": "فحص هرمون البروجستيرون لتقييم حدوث التبويض ودعم استقرار الحمل."
  },
  {
    "id": "Amylase",
    "name_ar": "إنزيم البنكرياس الأميليز",
    "code": "Amylase",
    "price": 20,
    "group": "تحاليل البنكرياس",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "فحص حيوي لتقييم كفاءة البنكرياس وضمان الأداء الأمثل للجهاز الهضم"
  },
  {
    "id": "Lipase",
    "name_ar": "إنزيم البنكرياس الليبيز",
    "code": "Lipase",
    "price": 20,
    "group": "تحاليل البنكرياس",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "الاختبار الأكثر دقة لتشخيص التهابات واضطرابات البنكرياس الحادة والمزمنة."
  },
  {
    "id": "CBC",
    "name_ar": "صورة الدم الكاملة",
    "code": "CBC",
    "price": 29,
    "group": "تحاليل الدم",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "فحص صورة الدم الكاملة للاطمئنان على مستويات الهيموجلوبين والمناعة والصفائح."
  },
  {
    "id": "ABO",
    "name_ar": "فصيلة الدم",
    "code": "ABO",
    "group": "تحاليل الدم",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "تحديد فصيلة الدم وعامل الريسوس لضمان الأمان في نقل الدم وحالات الحمل.",
    "price": 15
  },
  {
    "id": "TG",
    "name_ar": "الدهون الثلاثية",
    "code": "TG",
    "group": "تحاليل الدهون",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "قياس الدهون الثلاثية المرتبطة بنمط الغذاء وصحة الاستقلاب في الجسم.",
    "price": 15
  },
  {
    "id": "LDL",
    "name_ar": "الدهون الضارة",
    "code": "LDL",
    "price": 15,
    "group": "تحاليل الدهون",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "فحص الكوليستيرول الضار لتقييم مخاطر ترسب الدهون وضيق الشرايين."
  },
  {
    "id": "HDL",
    "name_ar": "الدهون النافعة",
    "code": "HDL",
    "price": 10,
    "group": "تحاليل الدهون",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "قياس الكوليستيرول النافع الذي يحمي الشرايين ويعزز صحة القلب."
  },
  {
    "id": "CHOL",
    "name_ar": "الكوليسترول",
    "code": "CHOL",
    "group": "تحاليل الدهون",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "فحص المستوى الكلي للكوليستيرول لتقييم مخاطر أمراض القلب والشرايين.",
    "price": 10
  },
  {
    "id": "VLDL",
    "name_ar": "الكوليسترول منخفض الكثافة",
    "code": "VLDL",
    "price": 10,
    "group": "تحاليل الدهون",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "قياس مستوى الدهون منخفضة الكثافة جداً المرتبطة بنقل الدهون الثلاثية."
  },
  {
    "id": "HDL/LDL",
    "name_ar": "نسبة الدهون الضارة إلى النافعة",
    "code": "HDL/LDL",
    "group": "تحاليل الدهون",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "نسبة دقيقة تساعد في تقييم التوازن بين الدهون الضارة والنافعة في الجسم.",
    "price": 15
  },
  {
    "id": "CHOL/TG",
    "name_ar": "نسبة الكوليسترول إلى الدهون الثلاثية",
    "code": "CHOL/TG",
    "group": "تحاليل الدهون",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "نسبة حسابية إضافية لتقييم التوازن الكلي بين الكوليستيرول والدهون الثلاثية.",
    "price": 10
  },
  {
    "id": "CHOL/HDL",
    "name_ar": "نسبة خطر الكوليسترول",
    "code": "CHOL/HDL",
    "group": "تحاليل الدهون",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "مؤشر حسابي لتقييم مخاطر الإصابة بأمراض القلب التاجية بدقة أكبر.",
    "price": 10
  },
  {
    "id": "Insulin (Fasting)",
    "name_ar": "الأنسولين الصائم",
    "code": "Insulin (Fasting)",
    "price": 69,
    "group": "تحاليل السكر",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "قياس مستوى الأنسولين الصائم لتقييم كفاءة البنكرياس في تنظيم السكر."
  },
  {
    "id": "Fasting Blood Glucose",
    "name_ar": "السكر الصائم",
    "code": "Fasting Blood Glucose",
    "price": 10,
    "group": "تحاليل السكر",
    "content_ar": "قياس مستوى السكر الصائم لضمان استقرار مستويات الطاقة في الجسم.",
    "packages": []
  },
  {
    "id": "FBS",
    "name_ar": "السكر الصايم",
    "code": "FBS",
    "price": 10,
    "group": "تحاليل السكر",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": ""
  },
  {
    "id": "Random Blood Glucose",
    "name_ar": "السكر العشوائي",
    "code": "Random Blood Glucose",
    "price": 10,
    "group": "تحاليل السكر",
    "content_ar": "فحص فوري لمستوى السكر في الدم لتقييم الحالة الصحية في أي وقت.",
    "packages": []
  },
  {
    "id": "HOMA-IR",
    "name_ar": "مقاومة الأنسولين",
    "code": "HOMA-IR",
    "price": 39,
    "group": "تحاليل السكر",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "المؤشر العلمي الدقيق للكشف عن مقاومة الأنسولين والوقاية من السكري."
  },
  {
    "id": "LDH",
    "name_ar": "حمض اللاكتيك العضلي",
    "code": "LDH",
    "price": 20,
    "group": "تحاليل العضلات",
    "content_ar": "فحص شامل لتقييم تضرر الأنسجة الحيوية ودعم التشخيص الإكلينيكي المتكامل.",
    "packages": []
  },
  {
    "id": "CK (Total)",
    "name_ar": "إنزيم قلب كلي",
    "code": "CK (Total)",
    "price": 30,
    "group": "تحاليل القلب",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "مؤشر حيوي لتقييم سلامة الجهاز العضلي والكشف عن الإجهاد البدني."
  },
  {
    "id": "CK (MB)",
    "name_ar": "إنزيم قلب محدد",
    "code": "CK (MB)",
    "price": 49,
    "group": "تحاليل القلب",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "التحليل النوعي الأدق لتقييم صحة عضلة القلب والكشف عن الإصابات القلبية."
  },
  {
    "id": "CA 19.9",
    "name_ar": "كاشف أورام البنكرياس",
    "code": "CA 19.9",
    "price": 99,
    "group": "دلالات الأورام",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "مؤشر دقيق لتقييم صحة البنكرياس والجهاز الهضمي والمتابعة الدورية للأورام."
  },
  {
    "id": "CA 15.3",
    "name_ar": "كاشف أورام الثدي",
    "code": "CA 15.3",
    "price": 99,
    "group": "دلالات الأورام",
    "packages": [
      "exploratory"
    ],
    "content_ar": "اختبار متطور لمراقبة صحة الثدي وفعالية الخطط العلاجية المتبعة."
  },
  {
    "id": "Carcinoembryonic Antigen",
    "name_ar": "كاشف أورام القناة الهضمية",
    "code": "Carcinoembryonic Antigen",
    "price": 49,
    "group": "دلالات الأورام",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "تحليل شامل لمتابعة الأورام السرطانية، خاصة في القولون والجهاز الهضمي."
  },
  {
    "id": "AFP (Alpha-Fetoprotein)",
    "name_ar": "كاشف أورام الكبد",
    "code": "AFP (Alpha-Fetoprotein)",
    "price": 49,
    "group": "دلالات الأورام",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "فحص تخصصي للكشف عن أورام الكبد واضطرابات الخلايا الجنينية بدقة عالية."
  },
  {
    "id": "CA 125",
    "name_ar": "كاشف أورام المبايض",
    "code": "CA 125",
    "price": 99,
    "group": "دلالات الأورام",
    "packages": [
      "exploratory"
    ],
    "content_ar": "فحص حيوي للكشف المبكر عن أورام المبيض واضطرابات الجهاز التناسلي النسائي."
  },
  {
    "id": "INR",
    "name_ar": "المقياس الدولي لنتائج التخثر",
    "code": "INR",
    "group": "سيولة الدم",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "المؤشر العالمي الموحد لمراقبة فعالية الأدوية المسيلة للدم وضمان الأمان الصحي.",
    "price": 25
  },
  {
    "id": "PT",
    "name_ar": "قدرة الدم على التخثر",
    "code": "PT",
    "price": 30,
    "group": "سيولة الدم",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "اختبار زمن البروثرومبين لتقييم مسار التجلط الخارجي وكفاءة عمل الكبد."
  },
  {
    "id": "PTT",
    "name_ar": "قدرة الدم على التخثر الجزئي",
    "code": "PTT",
    "price": 30,
    "group": "سيولة الدم",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "فحص زمن الثرومبوبلاستين الجزئي لتقييم مسار التجلط الداخلي ومراقبة علاج الهيبارين."
  },
  {
    "id": "pregnancy in urine qualitative",
    "name_ar": "فحص الحمل بالبول",
    "code": "pregnancy in urine qualitative",
    "price": 30,
    "group": "فحوصات الحمل",
    "content_ar": "فحوصات الحمل النوعية لضمان الكشف المبكر والدقيق عن هرمون الحمل.",
    "packages": []
  },
  {
    "id": "pregnancy in serum qualitative",
    "name_ar": "فحص الحمل بالدم",
    "code": "pregnancy in serum qualitative",
    "price": 89,
    "group": "فحوصات الحمل",
    "content_ar": "فحوصات الحمل النوعية لضمان الكشف المبكر والدقيق عن هرمون الحمل.",
    "packages": []
  },
  {
    "id": "Alk. Ph.",
    "name_ar": "إنزيم الفوسفاتيز القلوي",
    "code": "Alk. Ph.",
    "price": 10,
    "group": "وظائف الكبد",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "مؤشر أساسي لتقييم صحة المرارة والقنوات الكبدية ونمو العظام."
  },
  {
    "id": "AST",
    "name_ar": "إنزيم الكبد",
    "code": "AST",
    "price": 10,
    "group": "وظائف الكبد",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "مؤشر حيوي لتقييم سلامة خلايا الكبد والقلب والكشف عن التضرر النسيجي."
  },
  {
    "id": "ALT",
    "name_ar": "إنزيم الكبد",
    "code": "ALT",
    "price": 10,
    "group": "وظائف الكبد",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "الاختبار الأكثر نوعية لتقييم كفاءة الكبد والكشف المبكر عن الالتهابات الكبدية."
  },
  {
    "id": "Gamma-GT",
    "name_ar": "إنزيم الكبد",
    "code": "Gamma-GT",
    "price": 10,
    "group": "وظائف الكبد",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "فحص دقيق للكشف عن أمراض الكبد الناتجة عن الكحول أو انسداد المسالك المرارية."
  },
  {
    "id": "Total Protein",
    "name_ar": "البروتين الكلي",
    "code": "Total Protein",
    "price": 15,
    "group": "وظائف الكبد",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "قياس إجمالي البروتينات في الدم لتقييم الحالة الصحية العامة ووظائف الكبد."
  },
  {
    "id": "Total Bilirubin",
    "name_ar": "الصفراء الكلية",
    "code": "Total Bilirubin",
    "price": 10,
    "group": "وظائف الكبد",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "قياس مستوى الصفراء الكلي في الدم لتقييم كفاءة الكبد والقنوات المرارية."
  },
  {
    "id": "Direct Bilirubin",
    "name_ar": "الصفراء المباشرة",
    "code": "Direct Bilirubin",
    "price": 10,
    "group": "وظائف الكبد",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "قياس الجزء المرتبط من الصفراء للكشف عن انسدادات القنوات المرارية."
  },
  {
    "id": "Indirect Bilirubin",
    "name_ar": "الصفراء غير المباشرة",
    "code": "Indirect Bilirubin",
    "price": 10,
    "group": "وظائف الكبد",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "فحص مستوى الصفراء غير المرتبط للكشف عن حالات تكسر الدم أو اضطرابات الكبد."
  },
  {
    "id": "Albumin (Serum)",
    "name_ar": "بروتين الألبومين",
    "code": "Albumin (Serum)",
    "price": 10,
    "group": "وظائف الكبد",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "تقييم البروتين الأساسي المصنع في الكبد لضمان توازن السوائل والتغذية."
  },
  {
    "id": "Globulin",
    "name_ar": "جلوبيولين",
    "code": "Globulin",
    "price": 10,
    "group": "وظائف الكبد",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "تقييم مستوى الجلوبولين الهام لتعزيز المناعة ووظائف الجسم الدفاعية."
  },
  {
    "id": "AST/ALT",
    "name_ar": "معدل إنزيمات الكبد",
    "code": "AST/ALT",
    "group": "وظائف الكبد",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "",
    "price": 10
  },
  {
    "id": "ALT/AST Ratio",
    "name_ar": "معدل إنزيمات الكبد",
    "code": "ALT/AST Ratio",
    "group": "وظائف الكبد",
    "content_ar": "مؤشر حسابي يساعد الطبيب في تحديد نوع وسبب اضطرابات الكبد بدقة.",
    "packages": [],
    "price": 10
  },
  {
    "id": "Albumin/Globulin Ratio",
    "name_ar": "نسبة الألبومين إلى الجلوبيولين",
    "code": "Albumin/Globulin Ratio",
    "price": 10,
    "group": "وظائف الكبد",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "نسبة حسابية دقيقة تساعد في تشخيص أمراض الكبد والكلى والاضطرابات المناعية."
  },
  {
    "id": "Creatinine (Serum)",
    "name_ar": "الكرياتنين",
    "code": "Creatinine (Serum)",
    "price": 10,
    "group": "وظائف الكلى",
    "content_ar": "الفحص المرجعي لتقييم كفاءة الكلى في تصفية الفضلات من الدم.",
    "packages": []
  },
  {
    "id": "Creatinine",
    "name_ar": "الكرياتينين",
    "code": "Creatinine",
    "price": 10,
    "group": "وظائف الكلى",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": ""
  },
  {
    "id": "eGFR",
    "name_ar": "معدل ترشيح الكلى",
    "code": "eGFR",
    "price": 10,
    "group": "وظائف الكلى",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "المعدل التقديري لترشيح الكلى، وهو المؤشر الأهم لتقييم مستوى وظائف الكلى."
  },
  {
    "id": "Blood Urea",
    "name_ar": "يوريا الدم",
    "code": "Blood Urea",
    "price": 10,
    "group": "وظائف الكلى",
    "packages": [
      "exploratory",
      "exploratory_plus"
    ],
    "content_ar": "قياس مستوى اليوريا في الدم لتقييم كفاءة الكلى والتوازن البروتيني بالجسم."
  }
];

// Build lookup map by code
var PRISMA_TEST_MAP = {};
PRISMA_MASTER_TESTS.forEach(function(t) {
  PRISMA_TEST_MAP[t.code] = t;
  if(t.id && t.id !== t.code) PRISMA_TEST_MAP[t.id] = t;
});
