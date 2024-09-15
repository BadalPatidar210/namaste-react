import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Links
 *
 * Body
 * - Search
 * - Restaurant Container
 *   - Restaurant Card
 *   - Name of res, Star Rating , cuisine, delivery Time
 *
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

/**
 * App Layout Component
 */

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  console.log(props);
  const {resObj} = props;
  const {info} = resObj;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info?.cloudinaryImageId}`}
        alt="food"
      />
      <h3>{info.name}</h3>
      <h4>{info.cuisines.join(',')}</h4>
      <h4>{info.avgRating}</h4>
      <h4>{info.sla?.deliveryTime} Minutes</h4>
    </div>
  );
};

const resList= [
  {
      "info": {
          "id": "376708",
          "name": "Chinese Wok",
          "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
          "locality": "3rd Sector",
          "areaName": "HSR Layout",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "Chinese",
              "Asian",
              "Tibetan",
              "Desserts"
          ],
          "avgRating": 4.2,
          "parentId": "61955",
          "avgRatingString": "4.2",
          "totalRatingsString": "6.5K+",
          "sla": {
              "deliveryTime": 40,
              "lastMileTravel": 0.8,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "0.8 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-16 02:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹199"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/chinese-wok-3rd-sector-hsr-layout-rest376708",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "2675",
          "name": "Subway",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/2/38b3beba-a23e-4088-bee7-4c82bf3d4533_2675.jpg",
          "locality": "HSR Layout",
          "areaName": "Hsr Layout",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Salads",
              "Snacks",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 4.2,
          "parentId": "2",
          "avgRatingString": "4.2",
          "totalRatingsString": "50K+",
          "sla": {
              "deliveryTime": 41,
              "lastMileTravel": 1.1,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "1.1 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-16 03:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹119"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "3.9",
                  "ratingCount": "1.5K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/subway-hsr-layout-rest2675",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "701746",
          "name": "Kwality Walls Ice Cream and More",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/a510db8e-ef0a-48ca-b06d-5a39fe2943df_701746.JPG",
          "locality": "Madina nagar",
          "areaName": "HSR",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Desserts",
              "Ice Cream",
              "Ice Cream Cakes"
          ],
          "avgRating": 4.5,
          "veg": true,
          "parentId": "582",
          "avgRatingString": "4.5",
          "totalRatingsString": "43",
          "sla": {
              "deliveryTime": 29,
              "lastMileTravel": 2.1,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.1 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-15 22:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹349",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/kwality-walls-ice-cream-and-more-madina-nagar-hsr-rest701746",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "57283",
          "name": "Burger King",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_57283.JPG",
          "locality": "HSR Layout",
          "areaName": "HSR Layout",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Burgers",
              "American"
          ],
          "avgRating": 4.2,
          "parentId": "166",
          "avgRatingString": "4.2",
          "totalRatingsString": "59K+",
          "sla": {
              "deliveryTime": 38,
              "lastMileTravel": 1.2,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "1.2 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-16 06:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                      "description": "Delivery!"
                  },
                  {
                      "imageId": "Rxawards/_CATEGORY-Burger.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                              }
                          },
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.1",
                  "ratingCount": "2.6K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/burger-king-hsr-layout-rest57283",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "279024",
          "name": "Andhra Gunpowder",
          "cloudinaryImageId": "od1vem08qw94dfzt5ms3",
          "locality": "Sector 2",
          "areaName": "HSR Layout",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Andhra",
              "Biryani",
              "South Indian"
          ],
          "avgRating": 4.4,
          "parentId": "10496",
          "avgRatingString": "4.4",
          "totalRatingsString": "7.7K+",
          "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 0.1,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "0.1 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-15 23:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Andhra.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Andhra.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/andhra-gunpowder-sector-2-hsr-layout-rest279024",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "23682",
          "name": "McDonald's",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/d2116933-061e-455a-8b98-de8da69e3ba2_23682.jpg",
          "locality": "HSR Layout",
          "areaName": "HSR Layout",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
          ],
          "avgRating": 4.4,
          "parentId": "630",
          "avgRatingString": "4.4",
          "totalRatingsString": "73K+",
          "sla": {
              "deliveryTime": 27,
              "lastMileTravel": 1.2,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "1.2 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-16 04:45:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                      "description": "Delivery!"
                  },
                  {
                      "imageId": "Rxawards/_CATEGORY-Burger.png",
                      "description": "Delivery!"
                  }
              ],
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                              }
                          },
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.1",
                  "ratingCount": "12K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/mcdonalds-hsr-layout-rest23682",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "376713",
          "name": "Big Bowl",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_376713.JPG",
          "locality": "3rd Sector",
          "areaName": "HSR Layout",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "North Indian",
              "Chinese",
              "Tibetan",
              "Desserts"
          ],
          "avgRating": 4.2,
          "parentId": "434792",
          "avgRatingString": "4.2",
          "totalRatingsString": "1.9K+",
          "sla": {
              "deliveryTime": 31,
              "lastMileTravel": 0.8,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "0.8 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-16 02:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹199"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/big-bowl-3rd-sector-hsr-layout-rest376713",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "23805",
          "name": "Domino's Pizza",
          "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
          "locality": "1st Sector",
          "areaName": "HSR Layout",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Pizzas",
              "Italian",
              "Pastas",
              "Desserts"
          ],
          "avgRating": 4.5,
          "parentId": "2456",
          "avgRatingString": "4.5",
          "totalRatingsString": "17K+",
          "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 1.8,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "1.8 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-15 23:55:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                      "description": "Delivery!"
                  },
                  {
                      "imageId": "Rxawards/_CATEGORY-Pizza.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                              }
                          },
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹150 OFF",
              "subHeader": "ABOVE ₹299",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/dominos-pizza-1st-sector-hsr-layout-rest23805",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "17310",
          "name": "KFC",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/283329f9-5ad8-4c46-9177-6b23b6eb2966_17310.JPG",
          "locality": "HSR Layout",
          "areaName": "HSR Layout",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Burgers",
              "Fast Food",
              "Rolls & Wraps"
          ],
          "avgRating": 4.3,
          "parentId": "547",
          "avgRatingString": "4.3",
          "totalRatingsString": "38K+",
          "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 1.3,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "1.3 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-16 00:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.1",
                  "ratingCount": "1.0K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/kfc-hsr-layout-rest17310",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "17036",
          "name": "Leon's - Burgers & Wings (Leon Grill)",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_17036.ss.jpg",
          "locality": "HSR Layout",
          "areaName": "HSR Layout",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "American",
              "Snacks",
              "Turkish",
              "Portuguese",
              "Continental"
          ],
          "avgRating": 4.5,
          "parentId": "371281",
          "avgRatingString": "4.5",
          "totalRatingsString": "98K+",
          "sla": {
              "deliveryTime": 16,
              "lastMileTravel": 0.5,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "0.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-16 04:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.4",
                  "ratingCount": "7.2K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/leons-burgers-and-wings-leon-grill-hsr-layout-rest17036",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "374909",
          "name": "Thalassery Restaurant",
          "cloudinaryImageId": "fc4kehquqhqbvctqscaq",
          "locality": "Harlur Main Road",
          "areaName": "HSR Layout",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Indian",
              "Chinese",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 4.2,
          "parentId": "413366",
          "avgRatingString": "4.2",
          "totalRatingsString": "5.1K+",
          "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 2.6,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "2.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-15 23:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Coastal.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Coastal.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/thalassery-restaurant-harlur-main-road-hsr-layout-rest374909",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "76410",
          "name": "Broadway - The Gourmet Theatre",
          "cloudinaryImageId": "salbkitofd4vrlmg1te3",
          "locality": "1st Sector",
          "areaName": "HSR Layout",
          "costForTwo": "₹1800 for two",
          "cuisines": [
              "Chinese",
              "North Indian",
              "Continental",
              "Desserts",
              "Beverages",
              "Seafood",
              "Pan-Asian",
              "Vietnamese",
              "Thai"
          ],
          "avgRating": 4.4,
          "parentId": "21020",
          "avgRatingString": "4.4",
          "totalRatingsString": "3.4K+",
          "sla": {
              "deliveryTime": 30,
              "lastMileTravel": 2.2,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "2.2 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-15 23:30:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "newg.png",
                      "description": "Gourmet"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "FREE ITEM"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.3",
                  "ratingCount": "2.0K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/broadway-the-gourmet-theatre-1st-sector-hsr-layout-rest76410",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "342032",
          "name": "Bhartiya Jalpan",
          "cloudinaryImageId": "ybfyjdu8fhlgqj6i9dlh",
          "locality": "1st Sector",
          "areaName": "HSR Layout",
          "costForTwo": "₹450 for two",
          "cuisines": [
              "North Indian",
              "Beverages",
              "Chaat"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "7518",
          "avgRatingString": "4.3",
          "totalRatingsString": "20K+",
          "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 1.6,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "1.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-15 22:30:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                      "description": "OnlyOnSwiggy"
                  },
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "OnlyOnSwiggy",
                                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                              }
                          },
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/bhartiya-jalpan-1st-sector-hsr-layout-rest342032",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "48214",
          "name": "Kanti Sweets",
          "cloudinaryImageId": "sty1rdh4nk5ueth9wbjx",
          "locality": "2nd Sector",
          "areaName": "Hsr Layout",
          "costForTwo": "₹150 for two",
          "cuisines": [
              "Sweets"
          ],
          "avgRating": 4.6,
          "veg": true,
          "parentId": "4700",
          "avgRatingString": "4.6",
          "totalRatingsString": "8.5K+",
          "sla": {
              "deliveryTime": 21,
              "lastMileTravel": 0.3,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "0.3 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-15 22:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Mithai.png",
                      "description": "Delivery!"
                  },
                  {
                      "imageId": "Rxawards/_CATEGORY-Mithai.png",
                      "description": "Delivery!"
                  },
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Mithai.png"
                              }
                          },
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Mithai.png"
                              }
                          },
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/kanti-sweets-2nd-sector-hsr-layout-rest48214",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "711368",
          "name": "Salad Days",
          "cloudinaryImageId": "cfa1123ebf17413dc7d0a80c7361fab3",
          "locality": "BTM Layout",
          "areaName": "HSR",
          "costForTwo": "₹500 for two",
          "cuisines": [
              "Salads"
          ],
          "avgRating": 4.5,
          "parentId": "796",
          "avgRatingString": "4.5",
          "totalRatingsString": "3.2K+",
          "sla": {
              "deliveryTime": 29,
              "lastMileTravel": 2.2,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.2 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-16 03:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "newg.png",
                      "description": "Gourmet"
                  }
              ],
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "brand",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "brand"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/salad-days-btm-layout-hsr-rest711368",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "342408",
          "name": "Sweets By Bhartiya Jalpan",
          "cloudinaryImageId": "igfy80krfn0vnxdjziz4",
          "locality": "HSR Layout",
          "areaName": "HSR Layout",
          "costForTwo": "₹450 for two",
          "cuisines": [
              "Sweets",
              "Desserts",
              "Snacks"
          ],
          "avgRating": 4.3,
          "parentId": "476700",
          "avgRatingString": "4.3",
          "totalRatingsString": "789",
          "sla": {
              "deliveryTime": 19,
              "lastMileTravel": 1.3,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "1.3 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-15 22:30:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/sweets-by-bhartiya-jalpan-hsr-layout-rest342408",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "875705",
          "name": "The Pizza Bakery - Wood Fired Sourdough",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/9e114951-2794-462a-a31c-04e39698ace6_875705.jpg",
          "locality": "Teacher's Colony",
          "areaName": "HSR",
          "costForTwo": "₹1500 for two",
          "cuisines": [
              "Pizzas",
              "Italian",
              "Pastas",
              "Salads",
              "Desserts",
              "Continental"
          ],
          "avgRating": 4.5,
          "parentId": "522292",
          "avgRatingString": "4.5",
          "totalRatingsString": "407",
          "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 1.6,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "1.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-15 23:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Pizza.png",
                      "description": "Delivery!"
                  },
                  {
                      "imageId": "newg.png",
                      "description": "Gourmet"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                              }
                          },
                          {
                              "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/the-pizza-bakery-wood-fired-sourdough-teachers-colony-hsr-rest875705",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "69903",
          "name": "Third Wave Coffee",
          "cloudinaryImageId": "d96267738c19ec62acb5390e52faba41",
          "locality": "7th Sector",
          "areaName": "HSR Layout",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Beverages",
              "Bakery",
              "Continental"
          ],
          "avgRating": 4.6,
          "parentId": "274773",
          "avgRatingString": "4.6",
          "totalRatingsString": "6.5K+",
          "sla": {
              "deliveryTime": 27,
              "lastMileTravel": 1,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "1.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-15 23:59:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
                      "description": "Delivery!"
                  },
                  {
                      "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                      "description": "Delivery!"
                  }
              ],
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png"
                              }
                          },
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/third-wave-coffee-7th-sector-hsr-layout-rest69903",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "859228",
          "name": "Harley's Fine Baking",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/18/9a96d949-c28b-4f77-a251-b584b7e0906b_859228.JPG",
          "locality": "Hosur Road",
          "areaName": "HSR Layout",
          "costForTwo": "₹500 for two",
          "cuisines": [
              "Cakes and Pastries",
              "Desserts"
          ],
          "avgRating": 4.6,
          "veg": true,
          "parentId": "11126",
          "avgRatingString": "4.6",
          "totalRatingsString": "554",
          "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-16 02:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "newg.png",
                      "description": "Gourmet"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/harleys-fine-baking-hosur-road-hsr-layout-rest859228",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "27746",
          "name": "Kapoor's Cafe",
          "cloudinaryImageId": "vvtwcod6kn0uglnwa6eh",
          "locality": "HSR Layout",
          "areaName": "HSR Layout",
          "costForTwo": "₹500 for two",
          "cuisines": [
              "North Indian",
              "Thalis"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "114900",
          "avgRatingString": "4.3",
          "totalRatingsString": "31K+",
          "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 0.5,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "0.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-09-15 15:45:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
                      "description": "Delivery!"
                  },
                  {
                      "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                      "description": "Delivery!"
                  }
              ],
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png"
                              }
                          },
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                              }
                          }
                      ]
                  }
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "3.9",
                  "ratingCount": "9.8K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/kapoors-cafe-hsr-layout-rest27746",
          "type": "WEBLINK"
      }
  }
]

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList?.map(res=>{
          return (
            <RestaurantCard key={res.id} resObj={res}/>
          )
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
