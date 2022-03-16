import S from '@sanity/desk-tool/structure-builder'

import { MdSettings, MdInfo, MdArticle, MdOutlineArticle, MdHome, MdEmail, MdLocalOffer, MdHotel, MdRestaurant } from 'react-icons/md'

const hiddenDocTypes = listItem =>
  !['general', 'article', 'about', 'frontpage', 'contact', 'offer', 'room', 'roomPage', 'restaurantPage'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('General')
        .icon(MdSettings)
        .child(
          S.editor()
            .title('General')
            .id('general')
            .schemaType('general')
            .documentId('general')
        ),
      S.listItem()
        .title('Front page')
        .icon(MdHome)
        .child(
          S.editor()
            .title('Front page')
            .id('frontpage')
            .schemaType('frontpage')
            .documentId('frontpage')
        ),
      S.listItem()
        .title('Rooms')
        .icon(MdHotel)
        .child(
          S.list()
            .id('room')
            .title('Room')
            .items(
              [
                S.listItem()
                .title('Main page')
                .icon(MdArticle)
                .child(
                  S.editor()
                    .title('Rooms')
                    .id('roomPage')
                    .schemaType('roomPage')
                    .documentId('roomPage')
                ),
                S.listItem()
                .title('All rooms')
                .schemaType('room')
                .icon(MdHotel)
                .child(
                  S.documentList()
                    .id('allroom')
                    .title('Room list')
                    .filter('_type == "room"')
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
        .title('Package deals')
        .icon(MdLocalOffer)
        .schemaType('offer')
        .child(
          S.documentTypeList('offer').title('Package deals'),
        ),
      S.listItem()
        .title('Articles')
        .icon(MdArticle)
        .child(
          S.list()
            .id('articles')
            .title('Articles')
            .items(
              [
                S.listItem()
                .title('Norwegian')
                .schemaType('article')
                .icon(MdArticle)
                .child(
                  S.documentList()
                    .id('noArticles')
                    .title('Norwegian articles')
                    .filter('_type == "article" && (!defined(locale) || locale == "no")')
                ),
                S.listItem()
                .title('English')
                .schemaType('article')
                .icon(MdOutlineArticle)
                .child(
                  S.documentList()
                    .id('enArticles')
                    .title('English articles')
                    .filter('_type == "article" && (!defined(locale) || locale == "en")')
                )
              ]
            )
        ),
      S.listItem()
        .title('About')
        .icon(MdInfo)
        .child(
          S.editor()
            .title('About')
            .id('about')
            .schemaType('about')
            .documentId('about')
        ),
      S.listItem()
        .title('Contact')
        .icon(MdEmail)
        .child(
          S.editor()
            .title('Contact')
            .id('contact')
            .schemaType('contact')
            .documentId('contact')
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
