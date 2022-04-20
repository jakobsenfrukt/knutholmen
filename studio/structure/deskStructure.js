import S from '@sanity/desk-tool/structure-builder'

import { MdSettings, MdInfo, MdArticle, MdOutlineArticle, MdHome, MdEmail, MdLocalOffer, MdHotel, MdRestaurant, MdDirectionsBoatFilled } from 'react-icons/md'

const hiddenDocTypes = listItem =>
  !['general', 'article', 'about', 'frontpage', 'contact', 'offer', 'room', 'roomPage', 'restaurantPage', 'offerPage', 'activityPage', 'activity'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Innhold')
    .items([
      S.listItem()
        .title('Generelt')
        .icon(MdSettings)
        .child(
          S.editor()
            .title('Generelt')
            .id('general')
            .schemaType('general')
            .documentId('general')
        ),
      S.listItem()
        .title('Forside')
        .icon(MdHome)
        .child(
          S.editor()
            .title('Forside')
            .id('frontpage')
            .schemaType('frontpage')
            .documentId('frontpage')
        ),
      S.listItem()
        .title('Overnatting')
        .icon(MdHotel)
        .child(
          S.list()
            .id('room')
            .title('Overnatting')
            .items(
              [
                S.listItem()
                .title('Hovedside')
                .icon(MdArticle)
                .child(
                  S.editor()
                    .title('Overnatting')
                    .id('roomPage')
                    .schemaType('roomPage')
                    .documentId('roomPage')
                ),
                S.listItem()
                .title('Alle rom')
                .schemaType('room')
                .icon(MdHotel)
                .child(
                  S.documentList()
                    .id('allroom')
                    .title('Liste over rom')
                    .filter('_type == "room"')
                )
              ]
            )
        ),
      S.listItem()
        .title('Aktiviteter')
        .icon(MdDirectionsBoatFilled)
        .child(
          S.list()
            .id('activity')
            .title('Aktiviteter')
            .items(
              [
                S.listItem()
                .title('Hovedside')
                .icon(MdArticle)
                .child(
                  S.editor()
                    .title('Aktiviteter')
                    .id('activityPage')
                    .schemaType('activityPage')
                    .documentId('activityPage')
                ),
                S.listItem()
                .title('Alle aktiviteter')
                .schemaType('activity')
                .icon(MdDirectionsBoatFilled)
                .child(
                  S.documentList()
                    .id('allactivity')
                    .title('Liste over aktiviteter')
                    .filter('_type == "activity"')
                )
              ]
            )
        ),
      S.listItem()
        .title('Restaurant')
        .icon(MdRestaurant)
        .child(
          S.editor()
            .title('Restaurant')
            .id('restaurantPage')
            .schemaType('restaurantPage')
            .documentId('restaurantPage')
        ),
      S.listItem()
        .title('Pakker')
        .icon(MdLocalOffer)
        .child(
          S.list()
            .id('offer')
            .title('Pakker')
            .items(
              [
                S.listItem()
                .title('Hovedside')
                .icon(MdArticle)
                .child(
                  S.editor()
                    .title('Pakker')
                    .id('offerPage')
                    .schemaType('offerPage')
                    .documentId('offerPage')
                ),
                S.listItem()
                .title('Alle pakker')
                .schemaType('offer')
                .icon(MdLocalOffer)
                .child(
                  S.documentList()
                    .id('alloffer')
                    .title('Liste over pakker')
                    .filter('_type == "offer"')
                )
              ]
            )
        ),
      S.listItem()
        .title('Artikler')
        .icon(MdArticle)
        .child(
          S.list()
            .id('articles')
            .title('Artikler')
            .items(
              [
                S.listItem()
                .title('Norsk')
                .schemaType('article')
                .icon(MdArticle)
                .child(
                  S.documentList()
                    .id('noArticles')
                    .title('Norske artikler')
                    .filter('_type == "article" && (!defined(locale) || locale == "no")')
                ),
                S.listItem()
                .title('Engelsk')
                .schemaType('article')
                .icon(MdOutlineArticle)
                .child(
                  S.documentList()
                    .id('enArticles')
                    .title('Engelske artikler')
                    .filter('_type == "article" && (!defined(locale) || locale == "en")')
                )
              ]
            )
        ),
      S.listItem()
        .title('Om oss')
        .icon(MdInfo)
        .child(
          S.editor()
            .title('Om oss')
            .id('about')
            .schemaType('about')
            .documentId('about')
        ),
      S.listItem()
        .title('Kontakt')
        .icon(MdEmail)
        .child(
          S.editor()
            .title('Kontakt')
            .id('contact')
            .schemaType('contact')
            .documentId('contact')
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
