// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas

// documents
import general from './documents/general'
import frontpage from './documents/frontpage'
import about from './documents/about'
import contact from './documents/contact'
import article from './documents/article'
import articlePage from './documents/articlePage'
import offerPage from './documents/offerPage'
import offer from './documents/offer'
import roomPage from './documents/roomPage'
import room from './documents/room'
import restaurantPage from './documents/restaurantPage'
import activityPage from './documents/activityPage'
import activity from './documents/activity'
import eventPage from './documents/eventPage'
import guestinfo from './documents/guestinfo'

// objects
import body from './objects/body'
import figure from './objects/figure'
import figureCaptioned from './objects/figureCaptioned'
import simpleBody from './objects/simpleBody'
import seo from './objects/seo'
import pageHeader from './objects/pageHeader'
import pageContent from './objects/pageContent'
import booking from './objects/booking'
import imageColumns from './objects/imageColumns'
import textAndImage from './objects/textAndImage'
import sectionWithHeading from './objects/sectionWithHeading'

// localized objects
import localeString from './objects/localeString'
import localeText from './objects/localeText'
import localeSlug from './objects/localeSlug'
import localeSimpleBody from './objects/localeSimpleBody'
import localeBody from './objects/localeBody'
import localeFigure from './objects/localeFigure'
import localeFigureCaptioned from './objects/localeFigureCaptioned'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // documents
    general,
    frontpage,
    about,
    contact,
    article,
    articlePage,
    offer,
    offerPage,
    room,
    roomPage,
    restaurantPage,
    activity,
    activityPage,
    eventPage,
    guestinfo,
    // objects
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    body,
    figure,
    figureCaptioned,
    simpleBody,
    seo,
    pageHeader,
    pageContent,
    booking,
    imageColumns,
    textAndImage,
    sectionWithHeading,
    // localized objects
    localeString,
    localeText,
    localeSlug,
    localeSimpleBody,
    localeBody,
    localeFigure,
    localeFigureCaptioned
  ])
})
