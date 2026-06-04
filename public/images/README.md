# BahiTech Solutions — Images

Drop your photos here, then update `/data/content.ts`.

## Files to add

| Filename | Used for |
|----------|----------|
| `project-waqti-screenshot.jpg` | Waqti project card |
| `project-client-website.jpg` | Client website card (coming soon) |
| `project-your-next.jpg` | Your next project card |
| `about-team-photo.jpg` | About section photo |

## How to enable a real image

1. Save the file in this folder (use the exact filename from the placeholder label).
2. Open `/data/content.ts`
3. Set `usePlaceholder: false` on that project (or about section when added).

Example:

```ts
{
  id: "waqti",
  image: "/images/waqti-screenshot.jpg",
  imageFilename: "project-waqti-screenshot.jpg",
  usePlaceholder: false,  // ← flip to false when file is added
}
```

## Tips

- 16:9 aspect ratio works best for project cards (~1200×675px)
- Keep files under 500 KB when possible
- WebP and JPG both work
