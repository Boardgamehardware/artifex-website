# Reviews section backup

This folder preserves the removed Reviews section exactly as it appeared when
it was taken out of the landing page.

To restore it:

1. Import `ReviewsSection` from `./archive/reviews-section/ReviewsSection.backup`
   in `src/App.tsx`.
2. Render `<ReviewsSection />` between the Customize/App wrapper and
   `<SpecsSection />`.

The component imports its archived styles and placeholder profile artwork, so
no other files need to be reconstructed.
