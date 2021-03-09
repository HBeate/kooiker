const baseURL = "https://api.kooiker-fr.com/kooiker/items";

module.exports = {
  url: "https://api.kooiker-fr.com/kooiker/items",
  breeding: baseURL + "/breeding?fields=*.*.*",
  aboutus: baseURL + "/aboutus?fields=*.*.*",
  aboutus_trans : baseURL + "/aboutus_translations?filter[language][eq]=",
  aboutus_gallery: baseURL + "/aboutus_directus_files?fields=*.*",
  dogs: baseURL + "/dogs?fields=*&filter[date_of_birth][eq]=",
  news: baseURL + "/news_fr?fields=*.*",
};

/* fields=*.*&sort=nr_to_sort" */



