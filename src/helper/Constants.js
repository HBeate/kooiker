const baseURL = "https://api.kooiker-fr.com/kooiker/items";

module.exports = {
  url: "https://api.kooiker-fr.com/kooiker/items",
  breeding: baseURL + "/breeding?fields=*.*.*",
  aboutus: baseURL + "/aboutus?fields=*.*.*",
  aboutus_trans : baseURL + "/aboutus_translations?filter[language][eq]=",
  aboutus_gallery: baseURL + "/aboutus_directus_files?fields=*.*",
  dogs: baseURL + "/dogs?fields=*&filter[date_of_birth][eq]=",
  ivy: baseURL + "/dogs?fields=*.*.*&filter[name][eq]=Ivy",
  news: baseURL + "/news?fields=*.*.*.*",
  offspring: baseURL + "/offspring?fields=*.*.*.*",
};

/* fields=*.*&sort=nr_to_sort" */



