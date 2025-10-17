import { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Homepage')
        .child(
          S.document()
            .schemaType('homepage')
            .documentId('homepage')
        ),
      S.divider(),
      S.listItem()
        .title('Features')
        .child(
          S.documentTypeList('feature')
            .title('Features')
        ),
      S.listItem()
        .title('Pricing Plans')
        .child(
          S.documentTypeList('pricingPlan')
            .title('Pricing Plans')
        ),
      S.divider(),
      S.listItem()
        .title('About Section')
        .child(
          S.document()
            .schemaType('about')
            .documentId('about')
        ),
      S.listItem()
        .title('Privacy Policy')
        .child(
          S.document()
            .schemaType('privacyPolicy')
            .documentId('privacyPolicy')
        ),
    ])

