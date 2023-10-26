declare interface SEO {
  // The title tag.
  title?: string;

  // The description tag. Used in `description` and `og:description` tags.
  description?: string;

  domain?: {
    // The domain name. This is used to prefix the title tag.
    name?: string;

    // The application URL. Used in `og:url` tag.
    url?: string;
  };

  twitter?: {
    // Used in twitter:card meta tag. One of `summary` or `summary_large_image`.
    card?: string;

    // Used in twitter:author
    creator?: string;
  };
}
