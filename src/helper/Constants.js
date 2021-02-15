const baseURL = "https://api.kooiker-fr.com/kooiker/items";

module.exports = {
  breeding: baseURL + "/breeding?fields=*.*.*",
  aboutus: baseURL + "/aboutus?fields=*.*.*",
  aboutus_trans : baseURL + "/aboutus_translations?filter[language][eq]=",
  aboutus_gallery: baseURL + "/aboutus_directus_files?fields=*.*",
};

/* fields=*.*&sort=nr_to_sort" */



