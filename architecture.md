# Brainzon Next.js Architecture


src/

app/

 components/

   navigation/

      Navbar.tsx
      MegaMenu.tsx
      ThemeSwitcher.tsx

   sections/

      Hero.tsx
      Products.tsx
      Solutions.tsx

   ui/


config/

 products.ts
 navigation.ts
 theme.ts


lib/

hooks/

types/


## Routes

/
 /products
 /products/brainerp
 /products/braincrm
 /products/brainai
 /products/brainconnect
 /solutions
 /modernization
 /company
 /resources


## Rules

Use server components by default.

Client components only for:
- Theme switching
- Interactive menus
- Animations
- Forms


## Data Driven

Navigation and product data must come from configuration files.

No hardcoded menus.
