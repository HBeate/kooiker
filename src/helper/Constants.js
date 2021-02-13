const baseURL = "https://api.kooiker-fr.com";

module.exports = {
  breeding: baseURL + "/kooiker/items/breeding?fields=*.*.*",
  aboutus: baseURL + "/kooiker/items/aboutus?fields=*.*.*",
  aboutus_trans : baseURL + "/kooiker/items/aboutus_translations?filter[language][eq]=",
  aboutus_gallery: baseURL + "/kooiker/items/aboutus_directus_files?fields=*.*",
};
/* 
services: baseURL + "/ivanahairart/items/services?fields=*.*&sort=nr_to_sort",  // Link verändert
contact: baseURL + "/ivanahairart/items/contact?fields=*.*",
ivana : baseURL + "/ivanahairart/items/ivana?fields=*.*",
legal : baseURL + "/ivanahairart/items/legal?fields=*.*",
jobs : baseURL + "/ivanahairart/items/jobs?fields=*.*", */


