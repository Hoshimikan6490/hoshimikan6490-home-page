# SEO Component

The `Seo` component leverages React 19's ability to add meta tags directly in components, making it easier to implement
SEO-friendly features in your React application.

## Usage

```tsx
import Seo from '@/components/tags/Seo';

export default function HomePage() {
  return (
    <>
      <Seo
        title="My Awesome Page"
        description="This is a description of my awesome page"
        keywords={['react', 'seo', 'meta tags']}
        openGraph={{
          title: "My Awesome Page",
          description: "This is a description for social sharing",
          image: "https://example.com/image.jpg",
          url: "https://example.com/page",
          type: "website"
        }}
        twitter={{
          card: "summary_large_image",
          site: "@yourusername",
          creator: "@yourusername",
          title: "My Awesome Page",
          description: "This is a description for Twitter",
          image: "https://example.com/image.jpg"
        }}
        canonical="https://example.com/canonical-url"
        additionalMetaTags={[
          {name: "viewport", content: "width=device-width, initial-scale=1"},
          {name: "theme-color", content: "#ffffff"}
        ]}
      />
      {/* Your page content */}
    </>
  );
}
```

## Props

| Property             | Type                                     | Description                                  |
|----------------------|------------------------------------------|----------------------------------------------|
| `title`              | `string`                                 | The title of the page                        |
| `description`        | `string`                                 | Meta description                             |
| `keywords`           | `string[]`                               | Array of keywords for the meta keywords tag  |
| `author`             | `string`                                 | Author meta tag                              |
| `openGraph`          | `object`                                 | Open Graph metadata for social sharing       |
| `twitter`            | `object`                                 | Twitter Card metadata                        |
| `canonical`          | `string`                                 | Canonical URL                                |
| `additionalMetaTags` | `Array<{name: string, content: string}>` | Any additional meta tags you want to include |

## Notes

This component takes advantage of React 19's feature that allows meta tags to be placed directly in components, making
it easier to manage SEO data at the component level rather than requiring a dedicated head management solution.

Remember that these meta tags will be properly managed by React's reconciliation process, so you don't have to worry
about duplicate tags when using this component in different parts of your application.
